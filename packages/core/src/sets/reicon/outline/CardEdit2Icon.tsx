import type { IconProps } from "../../../shared/types";

export function CardEdit2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M1.996 8.5h9.5m-5.5 8h2m2.5 0h4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.996 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.436c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h8.06"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m19.076 4.13-3.71 3.71c-.14.14-.28.42-.31.62l-.2 1.42c-.07.51.29.87.8.8l1.42-.2c.2-.03.48-.17.62-.31l3.71-3.71c.64-.64.94-1.38 0-2.32-.95-.95-1.69-.65-2.33-.01"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18.546 4.66c.32 1.13 1.2 2.01 2.32 2.32"/>
    </svg>
  );
}
