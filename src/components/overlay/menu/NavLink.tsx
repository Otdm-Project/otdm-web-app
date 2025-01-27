import { createSignal, For, Match, Switch } from "solid-js";
import { navLinks } from "@/data/navLinks";
import { docsList } from "@/components/main/docs/docsList";

export function NavLink(props: {id: string}) {
  const navItem = navLinks[props.id];
  const [open, setOpen] = createSignal(false);
  return (
    <div>
      <Switch>
        <Match when={props.id==="docs"}>
          <div
            class="flex gap-1 px-5 py-2 items-center rounded-lg hover:bg-docs-hover cursor-pointer"
            onClick={() => setOpen(!open())}
          >
            <div
              class="i-tabler:chevron-down -ml-5"
              classList={{ "transform rotate-180": open() }}
            />
            {navItem.name}
          </div>
          <div
            class="grid overflow-hidden transition-all duration-300"
            classList={{ "grid-rows-[0fr]": !open(), "grid-rows-[1fr]": open() }}
          >
            <div class="min-h-0">
              <DocsNavLink />
            </div>  
          </div>
        </Match>
        <Match when={props.id!=="docs"}>
          <li>
            <a class="block px-5 py-2 rounded-lg hover:bg-docs-hover" href={navItem.href} {...navItem.blank && {target: "_blank", rel: "noopener"}}>
              {navItem.name}
            </a>
          </li>
        </Match>        
      </Switch>
    </div>
  )
}

function DocsNavLink() {
  const docs = docsList();
  return (
    <div class="flex flex-col gap-2 mx-4 my-2">
      <For each={docs}>
        {(doc) => (
          <li>
            <a href={doc.url} class="block p-2 rounded-lg hover:bg-docs-hover">
              {doc.frontmatter.header}
            </a>
          </li>
        )}
      </For>
    </div>
  )
}