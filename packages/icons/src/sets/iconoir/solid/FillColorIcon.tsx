import type { IconProps } from "../../../shared/types";

export function FillColorIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.636 10.293 7.071-7.071 8.485 8.485-7.07 7.071a2 2 0 0 1-2.83 0l-5.656-5.657a2 2 0 0 1 0-2.828"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.293 1.808 1.414 1.414"/><path fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.5" d="M20 15s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C17.01 17.992 20 15 20 15" clipRule="evenodd"/>
    </svg>
  );
}
