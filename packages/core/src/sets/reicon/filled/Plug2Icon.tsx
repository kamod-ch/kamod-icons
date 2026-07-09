import type { IconProps } from "../../../shared/types";

export function Plug2Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M12.627 13.293 11.26 14.66l-1.919-1.92 1.367-1.367A1 1 0 1 0 9.293 9.96l-1.366 1.366-.415-.414a2.334 2.334 0 0 0-3.3 0l-.373.373A6.23 6.23 0 0 0 2 15.721c0 1.338.43 2.6 1.2 3.663l-1.575 1.575a1 1 0 0 0 1.414 1.414L4.613 20.8a6.23 6.23 0 0 0 8.099-.639l.373-.373c.911-.91.911-2.39 0-3.3l-.414-.415 1.366-1.367a1 1 0 1 0-1.414-1.414ZM20.96 1.627 19.385 3.2a6.23 6.23 0 0 0-8.099.639l-.373.373c-.91.91-.91 2.39 0 3.3l5.576 5.576c.455.455 1.052.683 1.65.683s1.194-.227 1.649-.683l.373-.373A6.23 6.23 0 0 0 22 8.279c0-1.338-.43-2.6-1.2-3.663l1.575-1.575a1 1 0 1 0-1.415-1.414Z"/>
    </svg>
  );
}
