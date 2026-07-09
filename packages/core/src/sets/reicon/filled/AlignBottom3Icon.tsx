import type { IconProps } from "../../../shared/types";

export function AlignBottom3Icon({
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
      <path fill="currentColor" d="M15.98 19.379h1.04c1.59 0 2.23-.6 2.23-2.12V5.379h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12Zm-8.5-5h1.04c1.59 0 2.23-.61 2.23-2.12v-6.88h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12Z"/><path fill="currentColor" d="M21.25 6.119H2.75c-.41 0-.75-.33-.75-.74s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74Z"/>
    </svg>
  );
}
