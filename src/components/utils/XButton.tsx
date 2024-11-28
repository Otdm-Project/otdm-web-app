export function XButton(props: {
  onClick: () => void;
}) {
  return (
    <button 
      class="absolute top-3 right-3 p-1 rounded-lg hover:bg-docs-hover"
      onClick={props.onClick} 
      >
      <div class="i-tabler:x size-8 sm:size-6 text-cyan-950"/>
    </button>
  )
}
undefined