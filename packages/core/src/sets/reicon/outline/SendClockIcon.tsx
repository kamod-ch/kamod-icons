import type { IconProps } from "../../../shared/types";

export function SendClockIcon({
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
      <path fill="currentColor" d="M1.53 5.082C.332 2.221 3.235-.816 6.108.6l14.748 7.27c1.595.786 2.162 2.53 1.777 4a.75.75 0 1 1-1.45-.38c.23-.88-.123-1.847-.99-2.274L5.444 1.945C3.95 1.21 2.2 2.78 2.911 4.496l2.273 5.11.006.014q.122.292.189.597H11a.75.75 0 0 1 0 1.5H5.382q-.074.345-.217.674l-2.144 5.1c-.761 1.729.981 3.31 2.494 2.556l3.227-1.61a.75.75 0 0 1 .67 1.343l-3.228 1.61c-2.902 1.447-5.797-1.625-4.538-4.497l2.143-5.1a2.02 2.02 0 0 0 .02-1.586l-2.272-5.11z"/><path fill="currentColor" d="M17.625 15.5a.625.625 0 1 0-1.25 0V18c0 .209.105.404.278.52l1.5 1a.625.625 0 1 0 .694-1.04l-1.222-.814z"/><path fill="currentColor" fillRule="evenodd" d="M11.25 18a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0ZM17 13.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z" clipRule="evenodd"/>
    </svg>
  );
}
