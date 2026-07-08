import type { IconProps } from "../../../shared/types";

export function Key3Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M15 16a7 7 0 1 0-5.452-2.609L3.97 18.97l-1 1a.75.75 0 1 0 1.06 1.061l.47-.47.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97 3.049-3.048A6.97 6.97 0 0 0 15 16Zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd"/>
    </svg>
  );
}
