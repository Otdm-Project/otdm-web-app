import { Show } from 'solid-js';
import { SearchModal } from "./SearchModal";
import { isSearchOpen, toggleSearch } from "../overlay";


export default function Search() {
  return (
    <search class={`flex btn-search-style rounded-lg ${isSearchOpen() && "outline-(3 solid)"}`} >
      <Show when={isSearchOpen()}>
        <SearchModal/>
      </Show>
      <button onClick={toggleSearch} class= "btn-base outline-otdm-neutral">
        <div class="i-tabler:search size-1em"></div>
      </button>
    </search>
  )
}