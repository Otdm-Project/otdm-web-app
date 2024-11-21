import { createSignal, createEffect, Show, onMount } from 'solid-js';
import { Portal } from 'solid-js/web';
import type { PagefindWindow, ResultType, ResultData } from '@/types/pagefind';
import { isDevelopment } from '@/libs/runtime';

declare const window: PagefindWindow;

export default function Search(){

  const [query, setQuery] = createSignal('');
  const [results, setResults] = createSignal<ResultType[]>([]);

  
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
  })

  return (
    <div>
      <input
        class="block w-32 h-full p-2 m-auto text-lg btn-search-style focus:outline-unset"
        type="text"
        placeholder="検索"
        value={query()}
        onInput={(e) => {
          setQuery(e.currentTarget.value);
          handleSearch();
        }}
      />
      <Portal>
        <div id="results">
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
          <a href={resultData().url.replace('/dist', '')}>
            <p innerHTML={resultData().excerpt} />
          </a>
        </div>
      )}
    </Show>
  );
}

