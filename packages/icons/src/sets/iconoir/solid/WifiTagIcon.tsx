import type { IconProps } from "../../../shared/types";

export function WifiTagIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 1.25 9v6A6.75 6.75 0 0 0 8 21.75h8A6.75 6.75 0 0 0 22.75 15V9A6.75 6.75 0 0 0 16 2.25zm4.568 13a.75.75 0 0 0-1.115-1.003l-.01.011a.75.75 0 0 0 1.114 1.004zm3.856-3.52c-2.2-2.64-6.648-2.64-8.848 0a.75.75 0 1 1-1.152-.96c2.8-3.36 8.352-3.36 11.152 0a.75.75 0 1 1-1.152.96M9.6 13.7a3 3 0 0 1 4.8 0 .75.75 0 1 0 1.2-.9c-1.8-2.4-5.4-2.4-7.2 0a.75.75 0 0 0 1.2.9" clipRule="evenodd"/>
    </svg>
  );
}
