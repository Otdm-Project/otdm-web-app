import { For, Show } from "solid-js";
import { MenuButton } from "./MenuButton";
import { NavLink } from "./NavLink";
import { menuOrder } from "@/data/orders/menuOrder";
import { Modal } from "../Modal";
import { isMenuOpen,toggleMenu  } from "../overlay";

export default function Menu(){
  const order = menuOrder;
  return(
    <>
      <MenuButton/>
      <Show when={isMenuOpen()}>
        <Modal sideBar toggleOpen={toggleMenu}>
        <nav class="my-6 mr-8 text-docs-head">
          <ul class="flex flex-col gap-2">
            <For each={order}>
              {item => <NavLink id={item} />}
            </For>
          </ul>
        </nav>
        </Modal>
      </Show>
    </>
  )
}