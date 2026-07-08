import type { IconProps } from "../../../shared/types";

export function PuzzlePieceIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M20.552 11.553A1 1 0 0 0 22 10.66V8.335a3.67 3.67 0 0 0-3.667-3.667h-2.366c.013-.11.033-.219.033-.333 0-1.471-1.196-2.667-2.667-2.667s-2.666 1.196-2.666 2.667c0 .114.02.222.033.333H8.333a3.67 3.67 0 0 0-3.666 3.667V10.7c-.111-.014-.219-.033-.334-.033-1.47 0-2.666 1.196-2.666 2.667S2.863 16 4.333 16c.115 0 .223-.02.334-.033v2.367A3.67 3.67 0 0 0 8.333 22h2.326a1 1 0 0 0 .894-1.446 2 2 0 0 1-.22-.887c0-1.103.898-2 2-2s2 .897 2 2q0 .444-.221.888A.998.998 0 0 0 16.008 22h2.325A3.67 3.67 0 0 0 22 18.335v-2.326a1 1 0 0 0-1.448-.893c-1.37.687-2.885-.38-2.885-1.78s1.512-2.467 2.885-1.78Z"/>
    </svg>
  );
}
