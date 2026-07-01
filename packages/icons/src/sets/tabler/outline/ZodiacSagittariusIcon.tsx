import type { IconProps } from "../../../shared/types";

export function ZodiacSagittariusIcon({
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
      <path d="M4 20 20 4m-7 0h7v7M6.5 12.5l5 5"/>
    </svg>
  );
}
