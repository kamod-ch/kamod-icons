import type { IconProps } from "../../../shared/types";

export function TruckIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.25 5.5A3.25 3.25 0 0 1 4.5 2.25h8a3.25 3.25 0 0 1 3.25 3.25v.25h2.784a2.25 2.25 0 0 1 2.049 1.319l2.1 4.62a.75.75 0 0 1 .067.311v4.5a2.25 2.25 0 0 1-2.25 2.25h-.761q.01.123.011.25a2.75 2.75 0 1 1-5.489-.25H9.74q.01.123.011.25a2.75 2.75 0 1 1-5.489-.25H3.5a2.25 2.25 0 0 1-2.25-2.25zm3.629 11.75c.504-.61 1.267-1 2.121-1s1.617.39 2.121 1h5.129V5.5a1.75 1.75 0 0 0-1.75-1.75h-8A1.75 1.75 0 0 0 2.75 5.5v11c0 .414.336.75.75.75zm10.871-10v4h5.085l-1.618-3.56a.75.75 0 0 0-.683-.44zm5.5 5.5h-5.5v3.8a2.744 2.744 0 0 1 3.371.7H20.5a.75.75 0 0 0 .75-.75zM7 17.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm10 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" clipRule="evenodd"/>
    </svg>
  );
}
