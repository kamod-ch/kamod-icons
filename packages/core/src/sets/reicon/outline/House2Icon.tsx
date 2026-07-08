import type { IconProps } from "../../../shared/types";

export function House2Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.333V17M4.193 7.933l7-5.32a1.33 1.33 0 0 1 1.614 0l7 5.32c.332.252.526.646.526 1.062V19a2.666 2.666 0 0 1-2.666 2.667H6.333A2.666 2.666 0 0 1 3.667 19V8.995c0-.418.194-.81.526-1.062"/>
    </svg>
  );
}
