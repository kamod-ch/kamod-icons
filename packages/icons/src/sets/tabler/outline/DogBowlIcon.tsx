import type { IconProps } from "../../../shared/types";

export function DogBowlIcon({
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
      <path d="m10 15 5.586-5.585A2 2 0 1 1 19 8a2 2 0 1 1-1.413 3.414L14 15"/><path d="M12 13 8.414 9.415A2 2 0 1 0 5 8a2 2 0 1 0 1.413 3.414L10 15m-7 5h18c-.175-1.671-.046-3.345-2-5H5q-2 1.5-2 5"/>
    </svg>
  );
}
