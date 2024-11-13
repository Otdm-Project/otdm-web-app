import { Show } from "solid-js";
import { createSignal } from "solid-js";

export const SearchBar = () => {

  const [isVisible, setIsVisible] = createSignal(false);
  const toggle = () => {
    setIsVisible(prev => !prev);
  }

  return (
    <div class={`flex btn-search-style rounded-lg ${isVisible() && "outline-(3 solid)"}`} >
      <Show when={isVisible()}>
        <input class="w-32 p-2 text-lg btn-search-style focus:outline-unset"></input>
      </Show>
      <button onclick={toggle} class= "btn-base outline-otdm-neutral">
        <div class="i-tabler:search size-1em"></div>
      </button>
    </div>
  )
}
