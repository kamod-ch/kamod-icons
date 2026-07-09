import type { IconProps } from "../../../shared/types";

export function MagicWandIcon({
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
      <g fill="currentColor" fillRule="evenodd" strokeWidth="1.333" clipRule="evenodd"><path d="M13.713 10.287a1 1 0 0 1 0 1.414L4.04 21.374a1 1 0 0 1-1.414-1.414l9.673-9.673a1 1 0 0 1 1.414 0Z"/><path d="M11.281 1.806a1 1 0 0 1 1.056.023l3.28 2.142 3.624-1.487a1 1 0 0 1 1.345 1.187l-1.024 3.78 2.534 2.985a1 1 0 0 1-.713 1.646l-3.91.195-2.058 3.333a1 1 0 0 1-1.785-.169l-1.394-3.66-3.806-.925a1 1 0 0 1-.39-1.75l3.05-2.459-.297-3.905a1 1 0 0 1 .488-.936Z"/></g>
    </svg>
  );
}
