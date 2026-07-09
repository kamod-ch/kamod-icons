import type { IconProps } from "../../../shared/types";

export function WalletPlusIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" clipPath="url(#a)"><path fillRule="evenodd" d="M3.75 9.983v.599a.75.75 0 0 1-1.5 0V9q0-.14.009-.28c.02-.707.083-1.264.28-1.771a4.25 4.25 0 0 1 1.206-1.696c.61-.518 1.413-.797 2.625-1.217L15.569.84c.598-.207 1.095-.38 1.504-.482.42-.104.84-.161 1.265-.059a2.5 2.5 0 0 1 1.515 1.078c.236.367.32.784.36 1.214.037.42.037.946.037 1.58v.644A4.25 4.25 0 0 1 23.75 9v8.5a4.25 4.25 0 0 1-4.25 4.25h-6.081a.75.75 0 0 1 0-1.5H19.5a2.75 2.75 0 0 0 2.75-2.75V9a2.75 2.75 0 0 0-2.74-2.75H6.5a2.75 2.75 0 0 0-2.74 2.515c-.009.32-.01.716-.01 1.218Zm13.686-8.168c-.336.083-.768.233-1.408.455L8.886 4.75h9.864v-.543c0-.678 0-1.136-.032-1.48-.03-.34-.085-.472-.127-.538a1 1 0 0 0-.606-.43c-.076-.019-.218-.027-.55.056Z" clipRule="evenodd"/><path d="M19 12.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8.625 18c0 .345-.28.625-.625.625H6.625V20a.625.625 0 1 1-1.25 0v-1.375H4a.625.625 0 1 1 0-1.25h1.375V16a.625.625 0 1 1 1.25 0v1.375H8c.345 0 .625.28.625.625Z"/><path fillRule="evenodd" d="M6 12.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM1.75 18a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
