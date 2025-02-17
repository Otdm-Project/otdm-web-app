import { Show } from 'solid-js';
import { SearchModal } from "./SearchModal";
import { SearchButton } from './SearchButton';
import { isSearchOpen } from "../overlay";

export default function Search() {
  return (
    <search class={`flex items-center btn-search-style sm:shadow-md rounded-lg ${isSearchOpen() && "outline-(3 solid)"}`} >
      <Show when={isSearchOpen()}>
        <SearchModal/>
      </Show>
      <SearchButton/>
    </search>
  )
}