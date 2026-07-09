import type { IconProps } from "../../../shared/types";

export function Pin2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.25 10a8.75 8.75 0 0 1 17.5 0c0 4.208-2.762 7.27-4.538 9.24l-.155.172c-.682.758-2.26 2.22-3.05 2.945a1.49 1.49 0 0 1-2.014 0c-.79-.725-2.368-2.187-3.05-2.945l-.162-.18C5.926 17.175 3.25 14.207 3.25 10ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clipRule="evenodd"/>
    </svg>
  );
}
