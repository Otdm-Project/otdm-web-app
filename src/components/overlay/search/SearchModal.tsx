import { createSignal, onMount } from 'solid-js';
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
        class="block max-w-36 h-full p-2 m-auto text-lg btn-search-style focus:outline-unset placeholder-otdm-preh"
        type="search"
        placeholder="検索"
        value={query()}
        onInput={(e) => {
          setQuery(e.currentTarget.value);
          handleSearch();
        }}
      />
      <Modal toggleOpen={toggleSearch}>
        <div class="text-docs-head">
          <h2 class="mb-4">検索結果 {results().length}件</h2>
          {results().map((result) => (
            <SearchItems key={result.id} result={result} />
          ))}
        </div>
      </Modal>
    </>
  );
}