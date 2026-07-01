import type { IconProps } from "../../../shared/types";

export function UserGroupIcon({
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
      <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m7.5 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-13.5 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0m4.06 5.367A6.75 6.75 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.7 12.7 0 0 1 12 21.75a12.7 12.7 0 0 1-6.337-1.684.75.75 0 0 1-.372-.568 6.8 6.8 0 0 1 1.019-4.38Z" clipRule="evenodd"/><path d="M5.082 14.254a8.3 8.3 0 0 0-1.308 5.135 9.7 9.7 0 0 1-1.764-.44l-.115-.04a.56.56 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047m15.144 5.135a8.3 8.3 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.56.56 0 0 1-.373.486l-.115.04q-.851.302-1.764.441"/>
    </svg>
  );
}
