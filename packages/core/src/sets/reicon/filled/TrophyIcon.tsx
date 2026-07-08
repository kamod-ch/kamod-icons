import type { IconProps } from "../../../shared/types";

export function TrophyIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M4.366 3.66a2.25 2.25 0 0 1 2.245-2.41h10.778a2.25 2.25 0 0 1 2.244 2.41l-.006.09h1.372a1.75 1.75 0 0 1 1.745 1.885l-.247 3.193a4.25 4.25 0 0 1-4.048 3.918 7.2 7.2 0 0 1-5.7 3.965V18.5h1.53a1.5 1.5 0 0 1 1.423 1.026l.575 1.724H17a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h.723l.574-1.724A1.5 1.5 0 0 1 9.721 18.5h1.529v-1.789a7.2 7.2 0 0 1-5.7-3.965 4.25 4.25 0 0 1-4.048-3.918l-.247-3.193A1.75 1.75 0 0 1 3 3.75h1.373zm.114 1.59H3a.25.25 0 0 0-.25.27l.248 3.192a2.75 2.75 0 0 0 1.985 2.432 7 7 0 0 1-.159-1.075zm14.537 5.894a2.75 2.75 0 0 0 1.985-2.432l.247-3.193a.25.25 0 0 0-.25-.269h-1.48l-.344 4.819q-.04.551-.158 1.075Z" clipRule="evenodd"/>
    </svg>
  );
}
