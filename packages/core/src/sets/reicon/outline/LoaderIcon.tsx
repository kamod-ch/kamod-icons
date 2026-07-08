import type { IconProps } from "../../../shared/types";

export function LoaderIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 2.333v3.334"/><path d="m18.836 5.164-2.357 2.357" opacity=".88"/><path d="M21.667 12h-3.334" opacity=".75"/><path d="m18.836 18.836-2.357-2.357" opacity=".63"/><path d="M12 21.667v-3.334" opacity=".5"/><path d="m5.164 18.836 2.357-2.357" opacity=".38"/><path d="M2.333 12h3.334" opacity=".25"/><path d="m5.164 5.164 2.357 2.357" opacity=".13"/></g>
    </svg>
  );
}
