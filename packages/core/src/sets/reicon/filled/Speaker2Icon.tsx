import type { IconProps } from "../../../shared/types";

export function Speaker2Icon({
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
      <path fill="currentColor" d="M12 10.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"/><path fill="currentColor" fillRule="evenodd" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14zm3.25 4a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/>
    </svg>
  );
}
