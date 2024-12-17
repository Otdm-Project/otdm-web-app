type Anchor = {
  element: string;
  id: string;
  text: string;
  location: number;
};

export type ResultData = {
  anchors: Anchor[];
  content: string;
  excerpt: string;
  filters: Record<string, unknown>;
  locations: number[];
  meta: {
    title: string;
  };
  raw_content: string;
  raw_url: string;
  sub_results: unknown[];
  url: string;
  weighted_locations: unknown[];
  word_count: number;
};

export type ResultType = {
  id: string;
  data: () => Promise<ResultData>;
};

declare global {
  interface Window {
    pagefind?: {
      search: (query: string) => Promise<{ results: ResultType[] }>;
    };
  }
}