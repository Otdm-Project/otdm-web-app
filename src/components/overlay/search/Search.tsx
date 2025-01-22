import { Show } from 'solid-js';
import { SearchModal } from "./SearchModal";
import { isSearchOpen, toggleSearch } from "../overlay";


export default function Search() {
  return (
    <search class={`flex items-center btn-search-style rounded-lg ${isSearchOpen() && "outline-(3 solid)"}`} >
      <Show when={isSearchOpen()}>
        <SearchModal/>
      </Show>
      <button onClick={toggleSearch} class= "btn-base size-otdm-btn">
        <div class="i-tabler:search size-otdm-icon"></div>
      </button>
    </search>
  )
}