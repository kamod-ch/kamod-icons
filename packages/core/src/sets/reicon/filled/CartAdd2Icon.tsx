import type { IconProps } from "../../../shared/types";

export function CartAdd2Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M.25 2A.75.75 0 0 1 1 1.25h1.182c1.13 0 2.086.84 2.231 1.96l.07.54h15.521a1.75 1.75 0 0 1 1.741 1.926l-.387 3.835a.75.75 0 0 1-.99.634 7.253 7.253 0 0 0-9.49 5.495.75.75 0 0 1-.738.61H5.25a1 1 0 1 0 0 2h5.002a.75.75 0 0 1 0 1.5h-.897a2 2 0 1 1-3.71 0H5.25a2.5 2.5 0 0 1-.647-4.915 2.7 2.7 0 0 1-.323-.982L2.926 3.404a.75.75 0 0 0-.744-.653H1A.75.75 0 0 1 .25 2Z"/><path fill="currentColor" fillRule="evenodd" d="M18 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM17.375 19a.625.625 0 1 0 1.25 0v-1.375H20a.625.625 0 1 0 0-1.25h-1.375V15a.625.625 0 1 0-1.25 0v1.375H16a.625.625 0 1 0 0 1.25h1.375z" clipRule="evenodd"/>
    </svg>
  );
}
