import type { IconProps } from "../../../shared/types";

export function BrandCakephpIcon({
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
      <path d="m12 11 8 2c1.361-.545 2-1.248 2-2V7.2C22 5.435 17.521 4 11.998 4 6.476 4 2 5.435 2 7.2V10c0 1.766 4.478 4 10 4zm0 3v3l8 2c1.362-.547 2-1.246 2-2v-3c0 .754-.638 1.453-2 2zM2 17c0 1.766 4.476 3 9.998 3L12 17c-5.522 0-10-1.734-10-3.5zm0-7v4m20-4v4"/>
    </svg>
  );
}
