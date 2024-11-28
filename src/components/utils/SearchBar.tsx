import { Show, createSignal} from "solid-js";
import Search from "./Search";

export default function SearchBar() {

  const [isVisible, setIsVisible] = createSignal(false);
  const handleVisible = () => {
    setIsVisible(prev => !prev);
    //スクロールの制御
    if (isVisible()) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return (
    <div class={`flex btn-search-style rounded-lg ${isVisible() && "outline-(3 solid)"}`} >
      <Show when={isVisible()}>
        <Search handleVisible={handleVisible} />
      </Show>
      <button onclick={handleVisible} class= "btn-base outline-otdm-neutral">
        <div class="i-tabler:search size-1em"></div>
      </button>
    </div>
    
  )
}
