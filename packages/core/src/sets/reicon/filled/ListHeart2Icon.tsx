import type { IconProps } from "../../../shared/types";

export function ListHeart2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/><path fill="currentColor" d="M13 11.715c0 1.752 2.163 3.615 3.49 4.593.454.335.681.502 1.01.502s.556-.167 1.01-.502c1.327-.978 3.49-2.84 3.49-4.593 0-2.677-2.475-3.677-4.5-1.609-2.025-2.068-4.5-1.068-4.5 1.609Z"/>
    </svg>
  );
}
