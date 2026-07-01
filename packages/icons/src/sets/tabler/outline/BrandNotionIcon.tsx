import type { IconProps } from "../../../shared/types";

export function BrandNotionIcon({
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
      <path d="M11 17.5V11h.5l4 6h.5v-6.5"/><path d="m19.077 20.071-11.53.887a1 1 0 0 1-.876-.397L4.2 17.267a1 1 0 0 1-.2-.6V5.926a1 1 0 0 1 .923-.997l11.389-.876a2 2 0 0 1 1.262.33l1.535 1.023A2 2 0 0 1 20 7.07v12.004a1 1 0 0 1-.923.997M4.5 5.5 7 8"/><path d="M20 7 7 8v12.5"/>
    </svg>
  );
}
