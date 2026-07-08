import type { IconProps } from "../../../shared/types";

export function BanIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm10 12c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-6.329 2.257L19.743 18.33A9.96 9.96 0 0 0 22 12Zm-3.671 7.743A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.401.846-4.605 2.257-6.329z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
