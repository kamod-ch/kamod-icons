import type { IconProps } from "../../../shared/types";

export function MsgsIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.424 6.335A7.95 7.95 0 0 0 9.97 3.026 7.97 7.97 0 0 0 2 10.997c0 1.45.393 2.806 1.07 3.977.473.887-.057 2.982-1.07 3.993 1.374.074 3.186-.546 3.993-1.07a8 8 0 0 0 1.837.776m8.836-8.344A5.333 5.333 0 0 1 22 15.662a5.3 5.3 0 0 1-.715 2.661c-.317.593.039 1.995.715 2.673-.92.05-2.13-.367-2.672-.716a5.3 5.3 0 0 1-2.662.717 5.332 5.332 0 1 1 0-10.666z"/>
    </svg>
  );
}
