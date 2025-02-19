import { toggleSearch }  from "../overlay";

export function SearchButton() {
  return (
    <button onClick={toggleSearch} class= "btn-base size-otdm-btn">
      <div class="i-tabler:search size-otdm-icon"></div>
    </button>
  )
}