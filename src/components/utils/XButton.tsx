export function XButton(props: {
  onClick: () => void;
  size?: number;
  position?: string;
}) {
  const size = props.size ?? 8;
  const position = props.position ?? "top-3 right-3";
  return (
    <button 
      class={`absolute ${position} p-1 rounded-lg hover:bg-docs-hover`}
      onClick={props.onClick} 
      >
      <div class={`i-tabler:x size-${size} text-cyan-950`}/>
    </button>
  )
}
undefined