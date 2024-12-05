import { Show } from "solid-js";
import { isSearchOpen, toggleSearch } from "../../header/overlay";
import Search from "./Search";

export default function SearchBar() {
  return (
    <div class={`flex btn-search-style rounded-lg ${isSearchOpen() && "outline-(3 solid)"}`} >
      <Show when={isSearchOpen()}>
        <Search/>
      </Show>
      <button onClick={toggleSearch} class= "btn-base outline-otdm-neutral">
        <div class="i-tabler:search size-1em"></div>
      </button>
    </div>
  )
}
