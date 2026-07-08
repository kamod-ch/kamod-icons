import type { IconProps } from "../../../shared/types";

export function MusicIcon({
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
      <path fill="currentColor" d="M19.19 1.327a2 2 0 0 1 2.56 1.92V15.5c0 .879-.405 1.724-1.148 2.344-1.45 1.208-3.754 1.208-5.203 0-.744-.62-1.149-1.465-1.149-2.344s.405-1.724 1.149-2.344c1.337-1.114 3.401-1.2 4.851-.259V8l-10.5 3.063V19.5c0 .879-.405 1.724-1.149 2.344-1.45 1.208-3.753 1.208-5.202 0-.744-.62-1.149-1.465-1.149-2.344s.405-1.724 1.149-2.344c1.337-1.114 3.401-1.2 4.851-.259V6.58a2.75 2.75 0 0 1 1.98-2.64z"/>
    </svg>
  );
}
