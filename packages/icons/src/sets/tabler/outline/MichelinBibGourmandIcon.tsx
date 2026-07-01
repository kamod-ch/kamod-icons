import type { IconProps } from "../../../shared/types";

export function MichelinBibGourmandIcon({
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
      <path d="M4.97 20c-2.395-1.947-4.763-5.245-1.005-8-.52-4 3.442-7.5 5.524-7.5.347-1 1.499-1.5 2.54-1.5s2.135.5 2.482 1.5c2.082 0 6.044 3.5 5.524 7.5 3.758 2.755 1.39 6.053-1.005 8"/><path d="M8 11a1 2 0 1 0 2 0 1 2 0 1 0-2 0m6 0a1 2 0 1 0 2 0 1 2 0 1 0-2 0m-6 6.085c3.5 2.712 6.5 2.712 9-1.085"/><path d="M13 18.5c.815-2.337 1.881-1.472 2-.55"/>
    </svg>
  );
}
