import type { IconProps } from "../../../shared/types";

export function Medal1stIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M13.667 1.712a.75.75 0 1 1 1.385.576l-1.04 2.5a.75.75 0 1 1-1.385-.576zm3.647-.015a.75.75 0 1 1 1.372.606l-3.435 7.78a6.75 6.75 0 1 1-6.923.252l-4-8a.75.75 0 1 1 1.342-.67l4 7.998a6.7 6.7 0 0 1 1.875-.398L8.16 2.33a.75.75 0 0 1 1.348-.658l3.755 7.697q.306.059.6.143zM12.05 12.9a.75.75 0 0 1 1.2.6v5a.75.75 0 0 1-1.5 0V15l-.8.6a.75.75 0 0 1-.9-1.2z" clipRule="evenodd"/>
    </svg>
  );
}
