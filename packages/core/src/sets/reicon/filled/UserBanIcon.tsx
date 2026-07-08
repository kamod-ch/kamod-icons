import type { IconProps } from "../../../shared/types";

export function UserBanIcon({
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
      <path fill="currentColor" d="M4.75 6.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm5.44 7.076a.75.75 0 0 1 .083.714A7.2 7.2 0 0 0 9.75 17c0 .963.187 1.88.527 2.718a.75.75 0 0 1-.695 1.032H2a.75.75 0 0 1-.742-.856c.546-3.826 4.207-6.454 8.287-6.634a.75.75 0 0 1 .645.316Z"/><path fill="currentColor" fillRule="evenodd" d="M22.75 17a5.75 5.75 0 1 0-11.5 0 5.75 5.75 0 0 0 11.5 0ZM17 12.75a4.25 4.25 0 0 1 3.489 6.678l-5.917-5.917A4.23 4.23 0 0 1 17 12.75Zm0 8.5a4.23 4.23 0 0 0 2.428-.761l-5.917-5.917A4.25 4.25 0 0 0 17 21.25Z" clipRule="evenodd"/>
    </svg>
  );
}
