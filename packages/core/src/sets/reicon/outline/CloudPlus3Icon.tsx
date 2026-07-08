import type { IconProps } from "../../../shared/types";

export function CloudPlus3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14C15.9.13 2.43 3.67 5.62 12.56"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44M15.82 9.89c.52-.26 1.08-.4 1.66-.41M12.97 20h-4m2 2v-4"/>
    </svg>
  );
}
