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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M1.25 5.5A3.25 3.25 0 0 1 4.5 2.25h8a3.25 3.25 0 0 1 3.25 3.25v.25h2.784a2.25 2.25 0 0 1 2.049 1.319l2.093 4.606a.75.75 0 0 1 .074.31V16.5a2.25 2.25 0 0 1-2.25 2.25h-.761q.01.123.011.25a2.75 2.75 0 1 1-5.489-.25H9.74q.01.123.011.25a2.75 2.75 0 1 1-5.489-.25H3.5a2.25 2.25 0 0 1-2.25-2.25zM17 17.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM5.75 19a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm10-7.75h5.085l-1.618-3.56a.75.75 0 0 0-.683-.44H15.75z" clipRule="evenodd"/>
    </svg>
  );
}
