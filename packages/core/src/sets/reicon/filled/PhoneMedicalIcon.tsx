import type { IconProps } from "../../../shared/types";

export function PhoneMedicalIcon({
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
      <path fill="currentColor" d="m14.556 15.548-.455.48s-1.083 1.139-4.038-1.972-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L7.374 4.91C6.61 3.83 5.135 3.688 4.26 4.609L2.691 6.26c-.433.457-.723 1.048-.688 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336Z"/><path fill="currentColor" fillRule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478.82.82 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.82.82 0 0 0-.067-.574A5 5 0 1 1 22 7Zm-5-2.187c.518 0 .938.42.938.937v.313h.312a.937.937 0 1 1 0 1.875h-.312v.312a.937.937 0 1 1-1.875 0v-.312h-.313a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.937.937-.937Z" clipRule="evenodd"/>
    </svg>
  );
}
