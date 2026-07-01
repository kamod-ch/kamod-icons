import type { IconProps } from "../../../shared/types";

export function PencilIcon({
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
      <path d="m12.085 6.5 5.415 5.415-8.793 8.792A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707zm5.406-2.698a3.828 3.828 0 0 1 1.716 6.405l-.292.293L13.5 5.085l.293-.292a3.83 3.83 0 0 1 3.698-.991"/>
    </svg>
  );
}
