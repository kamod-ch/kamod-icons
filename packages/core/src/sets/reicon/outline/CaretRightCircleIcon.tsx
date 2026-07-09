import type { IconProps } from "../../../shared/types";

export function CaretRightCircleIcon({
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
      <g fill="currentColor" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd"><path d="M12.29 6.767a1.67 1.67 0 0 0-1.838-.394A1.67 1.67 0 0 0 9.4 7.93v8.14c0 .688.413 1.3 1.052 1.556a1.67 1.67 0 0 0 1.837-.394l3.817-3.97a1.816 1.816 0 0 0 0-2.525zm-1.277 9.468a.17.17 0 0 1-.112-.166V7.931q0-.12.112-.166a.164.164 0 0 1 .196.042l3.817 3.97c.12.126.12.321 0 .446l-3.817 3.97c-.055.06-.12.07-.196.042Z"/><path d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12ZM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75Z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
