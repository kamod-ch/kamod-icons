import type { IconProps } from "../../../shared/types";

export function Pills2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M8 1.25a5.73 5.73 0 0 0-4.066 1.684A5.75 5.75 0 1 0 8 1.25Zm3.489 8.178L5.572 3.511a4.25 4.25 0 0 1 5.917 5.917ZM4.51 4.572l5.917 5.917A4.25 4.25 0 0 1 4.51 4.572Zm16.556 8.362a5.75 5.75 0 1 0-8.132 8.132 5.75 5.75 0 0 0 8.132-8.132Zm-7.071 1.06a4.25 4.25 0 0 1 7.189 2.256h-8.368a4.23 4.23 0 0 1 1.179-2.255Zm-1.179 3.756h8.368a4.25 4.25 0 0 1-8.368 0Z" clipRule="evenodd"/>
    </svg>
  );
}
