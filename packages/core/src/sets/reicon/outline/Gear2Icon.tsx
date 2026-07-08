import type { IconProps } from "../../../shared/types";

export function Gear2Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M6.25 4.237 9 9m-2.75 4.764L9 9m5.5 0H9"/><circle cx="9" cy="9" r="5.5"/><path d="M9 1.75V3.5M2.721 5.375l1.516.875M1.75 9H3.5m12.75 0H14.5M2.721 12.625l1.516-.875M9 16.25V14.5m3.625.779-.875-1.516m-6.375 1.516.875-1.516m9.029-1.138-1.516-.875m1.516-6.375-1.516.875m-1.138-3.529-.875 1.516M5.375 2.721l.875 1.516"/></g>
    </svg>
  );
}
