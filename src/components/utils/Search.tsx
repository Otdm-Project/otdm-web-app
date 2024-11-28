import { createSignal, createEffect, Show, onMount } from 'solid-js';
import { Portal } from 'solid-js/web';
import type { PagefindWindow, ResultType, ResultData } from '@/types/pagefind';
import { isDevelopment } from '@/libs/runtime';

declare const window: PagefindWindow;

export default function Search(props: {
  handleVisible: () => void;
}){
  const [query, setQuery] = createSignal('');
  const [results, setResults] = createSignal<ResultType[]>([]);
  let inputRef: HTMLInputElement | undefined;

  async function loadPagefind() {
    if (typeof window.pagefind === 'undefined') {
      const pagefindPath = isDevelopment ? "../../../dist/pagefind/pagefind.js" : "/pagefind/pagefind.js"
      try {
        const pagefind = (await import(/* @vite-ignore */ pagefindPath));
        window.pagefind = pagefind;
      } catch (error) {
        console.error("Failed to load Pagefind:", error);
      }
    }
  }

  async function handleSearch() {
    if (window.pagefind) {
      try {
        const search = await window.pagefind.search(query());
        setResults(search.results);
      } catch (e) {
        console.log('Search error', e);
      }
    }
  }

  onMount(()  => {
    loadPagefind();
    if (inputRef) {
      inputRef.focus();
    }
  })

  return (
    <div>
      <input
        ref={inputRef}
        class="block max-w-36 h-full p-2 m-auto text-lg btn-search-style focus:outline-unset placeholder-otdm-preh"
        type="text"
        placeholder="検索"
        value={query()}
        onInput={(e) => {
          setQuery(e.currentTarget.value);
          handleSearch();
        }}
      />
      <Portal>
        <div
          class="z-5 fixed inset-0 bg-black bg-opacity-50"
          onClick={props.handleVisible}
        />
        <div
          id="results"
          class="z-6 fixed top-20 left-0 right-0 w-full h-[calc(100%-5rem)] m-auto p-5 overscroll-contain bg-docs-primary border-(8 otdm-secondary) sm:(w-80vw h-80vh top-30 rounded-xl)"
          onClick={(e) => e.stopPropagation()}
          >
          {<h2>検索結果 ({results().length}件)</h2>}
          {results().map((result) => (
            <ResultItems key={result.id} result={result} />
          ))}
        </div>
      </Portal>
    </div>
  );
}

const ResultItems = (props: { 
  result: ResultType; 
  key?: number | string; 
  }) => {
  const [data, setData] = createSignal<ResultData | null>(null);

  createEffect(() => {
    async function fetchData() {
      try {
        const resultData = await props.result.data();
        console.log('Fetched data:', resultData);
        setData(resultData);
      } catch (error) {
        console.error('Fetch result data error', error);
      }
    }
    fetchData();
  });

  return (
    <Show when={data()}>
      {(resultData) => (
        <div>
          <a
            href={resultData().url.replace('/dist', '')}
            innerHTML={resultData().excerpt}
            />
        </div>
      )}
    </Show>
  );
}