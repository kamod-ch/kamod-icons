import type { IconProps } from "../../../shared/types";

export function Bandage2Icon({
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
      <path fill="currentColor" d="m20.91 13.332-7.578 7.577a5.41 5.41 0 0 0 7.577-7.577Z"/><path fill="currentColor" fillRule="evenodd" d="m12.235 19.885 7.65-7.65-8.12-8.12-7.65 7.65zm-2.356-8.592a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414Zm2.828 4.243a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415Zm0-7.071a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414Zm2.828 4.242a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z" clipRule="evenodd"/><path fill="currentColor" d="m3.09 10.668 7.578-7.577a5.41 5.41 0 0 0-7.577 7.577Z"/>
    </svg>
  );
}
