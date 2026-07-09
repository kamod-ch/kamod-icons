import type { IconProps } from "../../../shared/types";

export function PresentationPlayIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.5 1.25a.75.75 0 0 0 0 1.5h.75v7.683c0 .952 0 1.713.05 2.327.052.63.16 1.172.413 1.67a4.25 4.25 0 0 0 1.858 1.857c.497.253 1.04.361 1.67.413.613.05 1.374.05 2.326.05h2.683v1.875L7.55 21.4a.75.75 0 0 0 .9 1.2L12 19.937l3.55 2.663a.75.75 0 1 0 .9-1.2l-3.7-2.775V16.75h2.683c.952 0 1.713 0 2.327-.05.63-.052 1.172-.16 1.67-.413a4.25 4.25 0 0 0 1.857-1.857c.253-.498.361-1.04.413-1.67.05-.614.05-1.375.05-2.327V2.75h.75a.75.75 0 0 0 0-1.5zm8.938 4.71a1.31 1.31 0 0 1 1.288.091l2.995 1.99a1.135 1.135 0 0 1 0 1.919l-2.995 1.99a1.31 1.31 0 0 1-1.288.09c-.386-.184-.688-.561-.688-1.05V7.01c0-.489.302-.866.688-1.05Z" clipRule="evenodd"/>
    </svg>
  );
}
