import { createSignal, For, onMount } from 'solid-js';
import { SearchItems } from "./SearchItems";
import { Modal } from '../Modal';
import { toggleSearch } from '../overlay';
import type { ResultType } from './pagefind';
import { isDevelopment } from '@/libs/runtime';

export function SearchModal() {
  const [query, setQuery] = createSignal('');
  const [results, setResults] = createSignal<ResultType[]>([]);
  let inputRef: HTMLInputElement | undefined;

  async function loadPagefind() {
    if (typeof window.pagefind === 'undefined') {
      const pagefindPath = isDevelopment ? "../../../../dist/pagefind/pagefind.js" : "/pagefind/pagefind.js"
      try {
        const pagefind = (await import(/* @vite-ignore */ pagefindPath));
        await pagefind.options({
          "excerptLength": 24,
        })
        pagefind.init();
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
    <>
      <input
        ref={inputRef}
        class="block max-w-36 h-full px-2 py-1 mx-2 my-auto text-lg focus:outline-unset placeholder-otdm-preh"
        type="search"
        placeholder="検索"
        value={query()}
        onInput={(e) => {
          setQuery(e.currentTarget.value);
          handleSearch();
        }}
      />
      <Modal
        toggleOpen={toggleSearch}
        headerItem={<h2>検索結果 {results().length}件</h2>}
        >
        <div class="text-docs-head">
          <For each={results()}>
            {(result) => <SearchItems key={result.id} result={result} />}
          </For>
        </div>
      </Modal>
    </>
  );
}