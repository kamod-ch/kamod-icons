import type { IconProps } from "../../../shared/types";

export function ImageSparkleIcon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.445 15.227 5.64-5.641a2 2 0 0 1 2.828 0l2.336 2.336"/><rect x="2.75" y="2.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" rx="2" ry="2"/><path fill="currentColor" d="m9.158 6.508-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949 0l-.421 1.263-1.263.421a.5.5 0 0 0 0 .948l1.263.421.421 1.263a.501.501 0 0 0 .95 0l.421-1.263 1.263-.421a.5.5 0 0 0 0-.948Z"/></g>
    </svg>
  );
}
