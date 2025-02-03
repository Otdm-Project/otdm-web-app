import { toggleSearch } from "../overlay";
import type { ResultType, ResultData } from "./pagefind";
import { createSignal, createEffect, Show } from "solid-js";

export const SearchItems = (props: { 
  result: ResultType; 
  key?: number | string; 
  }) => {
  const [data, setData] = createSignal<ResultData | null>(null);

  createEffect(() => {
    async function fetchData() {
      try {
        const resultData = await props.result.data();
        //console.log('Fetched data:', resultData);
        setData(resultData);
      } catch (error) {
        console.error('Fetch result data error', error);
      }
    }
    fetchData();
  });

  return (
    <Show when={data()}>
      {(resultData) => (
        <div class="pb-4 mb-4 border-(zinc-300 b-2)">
          <a
            href={resultData().sub_results[0].url.replace('/dist', '')}
            onClick={toggleSearch}
            class="block p-2 rounded-lg hover:bg-docs-hover"
          >
            <h3 class="text-xl mb-4">{resultData().meta.title} &gt; {resultData().sub_results[0].title}</h3>
            <p innerHTML={resultData().excerpt}></p>
          </a>
        </div>
      )}
    </Show>
  );
}