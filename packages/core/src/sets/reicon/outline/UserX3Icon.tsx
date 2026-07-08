import type { IconProps } from "../../../shared/types";

export function UserX3Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M9 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM5.25 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" clipRule="evenodd"/><path fill="currentColor" d="M1.743 21.106C2.176 18.073 5.266 15.75 9 15.75s6.823 2.323 7.257 5.356a.75.75 0 0 0 1.485-.212C17.176 16.927 13.267 14.25 9 14.25S.824 16.927.258 20.894a.75.75 0 0 0 1.485.212ZM23.53 14.53a.75.75 0 0 1-1.06 0l-1.97-1.97-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 1 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 0 1 0 1.06Z"/>
    </svg>
  );
}
