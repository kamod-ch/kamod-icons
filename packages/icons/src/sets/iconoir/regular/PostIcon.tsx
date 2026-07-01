import type { IconProps } from "../../../shared/types";

export function PostIcon({
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
      <path stroke="currentColor" d="M2.906 17.505 5.337 3.718a2 2 0 0 1 2.317-1.623L19.472 4.18a2 2 0 0 1 1.622 2.317l-2.431 13.787a2 2 0 0 1-2.317 1.623L4.528 19.822a2 2 0 0 1-1.622-2.317Z"/><path stroke="currentColor" strokeLinecap="round" d="m8.929 6.382 7.879 1.389m-8.574 2.55 7.879 1.39M7.54 14.26l4.924.869"/>
    </svg>
  );
}
