import type { IconProps } from "../../../shared/types";

export function FlagBannerIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M4.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-6.25h14.744a1.25 1.25 0 0 0 1.065-1.906l-2.597-4.213a.25.25 0 0 1 0-.262l2.597-4.213a1.25 1.25 0 0 0-1.065-1.906H4.75zm0 2.75v9.5h14.297l-2.362-3.832a1.75 1.75 0 0 1 0-1.836l2.362-3.832z" clipRule="evenodd"/>
    </svg>
  );
}
