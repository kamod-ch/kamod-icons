import type { IconProps } from "../../../shared/types";

export function SpeakerIcon({
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
      <path fill="currentColor" d="M12 6.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM9.75 15.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"/><path fill="currentColor" fillRule="evenodd" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14zm5.25-2.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM12 11.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" clipRule="evenodd"/>
    </svg>
  );
}
