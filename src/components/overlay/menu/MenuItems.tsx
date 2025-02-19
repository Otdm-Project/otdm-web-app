import { For } from "solid-js";
import { menuOrder } from "@/data/orders/menuOrder";
import { NavLink } from "./NavLink";

export const MenuItems = () => {
  const order = menuOrder;
  return (
    <>
      <nav class="mr-8 text-docs-head">
        <ul class="flex flex-col gap-2">
          <For each={order}>
            {item => <NavLink id={item} />}
          </For>
        </ul>
      </nav>
    </>
  );
}