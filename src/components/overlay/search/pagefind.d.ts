declare global {
  interface Window {
    pagefind?: {
      search: (query: string) => Promise<{ results: ResultType[] }>;
    };
  }
}

type SubResults = {
  title: string;
  url: string;
  excerpt: string;
};

export type ResultData = {
  url: string;
  excerpt: string;
  meta: {
    title: string;
  };
  sub_results: SubResults[];
};

export type ResultType = {
  id: string;
  data: () => Promise<ResultData>;
};
