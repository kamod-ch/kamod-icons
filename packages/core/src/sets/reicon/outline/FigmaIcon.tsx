import type { IconProps } from "../../../shared/types";

export function FigmaIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M8.667 1.25a4.083 4.083 0 0 0-2.36 7.417A4.08 4.08 0 0 0 4.584 12c0 1.376.681 2.594 1.725 3.333a4.083 4.083 0 1 0 6.442 3.333v-3.504a4.083 4.083 0 1 0 4.942-6.496 4.083 4.083 0 0 0-2.36-7.417zm2.583 13.333H8.667a2.583 2.583 0 1 1 0-5.166h2.583zM8.667 7.917h2.583V2.75H8.667a2.583 2.583 0 1 0 0 5.167Zm9.25-2.584a2.583 2.583 0 0 1-2.58 2.584H12.75V2.75h2.584a2.583 2.583 0 0 1 2.583 2.583Zm-5.167 6.664a2.583 2.583 0 0 1 2.58-2.58h.006a2.583 2.583 0 1 1-2.586 2.586zm-4.083 4.086a2.583 2.583 0 1 0 2.583 2.584v-2.584z" clipRule="evenodd"/>
    </svg>
  );
}
