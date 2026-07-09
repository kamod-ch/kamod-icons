import type { IconProps } from "../../../shared/types";

export function CloudConnectIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a7.114 7.114 0 0 0-7.106 6.785 4.388 4.388 0 0 0 .86 8.709h5.496v2.634a2.26 2.26 0 0 0-1.372 1.372H5a.75.75 0 0 0 0 1.5h4.878a2.25 2.25 0 0 0 4.244 0H19a.75.75 0 0 0 0-1.5h-4.878a2.26 2.26 0 0 0-1.372-1.372v-2.634h4.583l.122.001a5.295 5.295 0 0 0 1.364-10.413A7.12 7.12 0 0 0 12 1.25ZM6.386 8.364A5.614 5.614 0 0 1 17.478 7.13a.75.75 0 0 0 .608.576 3.797 3.797 0 0 1-.726 7.538H5.722l-.086.001a2.886 2.886 0 0 1 0-5.773h.01a.75.75 0 0 0 .75-.791 6 6 0 0 1-.01-.317ZM12 20.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" clipRule="evenodd"/>
    </svg>
  );
}
