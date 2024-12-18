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
        console.log('Fetched data:', resultData);
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
        <div class="mb-1">
          <a
            href={resultData().url.replace('/dist', '')}
            innerHTML={resultData().excerpt}
            class="line-height-relaxed hover:border-(docs-link b-2)"
            />
        </div>
      )}
    </Show>
  );
}