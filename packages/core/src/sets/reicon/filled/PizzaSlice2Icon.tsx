import type { IconProps } from "../../../shared/types";

export function PizzaSlice2Icon({
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
      <g fill="currentColor" transform="scale(1.33333)"><path d="M4.5 9c.965 0 1.75.785 1.75 1.75S5.465 12.5 4.5 12.5z"/><circle cx="8" cy="9" r="1"/><path d="M15.471 7.644A14.2 14.2 0 0 0 4.913 1.547a1.78 1.78 0 0 0-1.351.464C3.205 2.341 3 2.808 3 3.294v10.724c0 .633.327 1.199.875 1.516a1.73 1.73 0 0 0 1.75 0l.875-.505v.222a.75.75 0 0 0 1.5 0v-.655c0-.445-.24-.86-.626-1.083a1.24 1.24 0 0 0-1.249 0l-1.25.721a.24.24 0 0 1-.25 0 .24.24 0 0 1-.125-.216V5.8c3.019.23 5.78 1.824 7.493 4.325l-1.618.934A2.76 2.76 0 0 0 9 13.44v2.81a.75.75 0 0 0 1.5 0v-2.81c0-.445.239-.86.625-1.083l3.787-2.187c.422-.244.726-.657.832-1.133a1.77 1.77 0 0 0-.273-1.395Z"/></g>
    </svg>
  );
}
