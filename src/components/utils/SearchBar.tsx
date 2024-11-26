import { Show, createSignal} from "solid-js";
import Search from "./Search";

export const SearchBar = () => {

  const [isVisible, setIsVisible] = createSignal(false);
  const toggle = () => {
    setIsVisible(prev => !prev);
  }
  return (
    <div class={`flex btn-search-style rounded-lg ${isVisible() && "outline-(3 solid)"}`} >
      <Show when={isVisible()}>
        <Search setIsVisible={setIsVisible} />
      </Show>
      <button onclick={toggle} class= "btn-base outline-otdm-neutral">
        <div class="i-tabler:search size-1em"></div>
      </button>
    </div>
    
  )
}
