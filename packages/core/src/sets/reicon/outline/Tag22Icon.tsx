import type { IconProps } from "../../../shared/types";

export function Tag22Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.405 15.526 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75l-4.54-4.52a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9.735 12.226a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m13.235 17.226 4-4"/>
    </svg>
  );
}
