import type { IconProps } from "../../../shared/types";

export function ShieldOffIcon({
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
      <path fill="currentColor" d="M10.078 1.213a4.25 4.25 0 0 1 3.841 0l7.098 3.594a2.25 2.25 0 0 1 1.233 2.008v2.024c0 .502-.101 1.488-.215 2.459a13.2 13.2 0 0 1-1.586 4.86.75.75 0 0 1-1.186.166L6.876 3.937a.75.75 0 0 1 .192-1.2zM5.28 4.22l.002.002 13.396 13.395.002.002 3.85 3.85a.75.75 0 1 1-1.06 1.061l-3.292-3.29a16.8 16.8 0 0 1-4.453 3.383l-.75.393c-.612.32-1.341.32-1.953 0l-.749-.392a16.74 16.74 0 0 1-5.851-5.087c-1.315-1.837-2.189-3.97-2.456-6.233-.114-.973-.216-1.962-.216-2.465V6.814a2.25 2.25 0 0 1 1.233-2.007l.507-.256-2.02-2.02A.75.75 0 0 1 2.53 1.47z"/>
    </svg>
  );
}
