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
        <div class="p-2 my-4 border-(zinc-300 b-2)">
          <div class="p-2 rounded-lg hover:bg-docs-hover">
            <a href={resultData().sub_results[0].url.replace('/dist', '')}>
              <h3 class="text-xl mb-4">{resultData().meta.title} &gt; {resultData().sub_results[0].title}</h3>
              <p innerHTML={resultData().excerpt}></p>
            </a>
          </div>
        </div>
      )}
    </Show>
  );
}