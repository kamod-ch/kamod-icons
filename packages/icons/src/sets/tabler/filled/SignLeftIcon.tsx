import type { IconProps } from "../../../shared/types";

export function SignLeftIcon({
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
      <path d="M14 2a1 1 0 0 1 .993.883L15 3v2h3a1 1 0 0 1 .993.883L19 6v5a1 1 0 0 1-.883.993L18 12h-3v8h1a1 1 0 0 1 .117 1.993L16 22h-4a1 1 0 0 1-.117-1.993L12 20h1v-8H8a1 1 0 0 1-.694-.28l-.087-.095-2-2.5a1 1 0 0 1-.072-1.147l.072-.103 2-2.5a1 1 0 0 1 .652-.367L8 5h5V3a1 1 0 0 1 1-1"/>
    </svg>
  );
}
