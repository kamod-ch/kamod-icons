import type { IconProps } from "../../../shared/types";

export function Timer2Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.667V2.333c5.339 0 9.667 4.328 9.667 9.667S17.339 21.667 12 21.667 2.333 17.339 2.333 12a9.64 9.64 0 0 1 2.831-6.836M12 12 8 8"/>
    </svg>
  );
}
