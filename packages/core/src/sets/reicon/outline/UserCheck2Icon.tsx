import type { IconProps } from "../../../shared/types";

export function UserCheck2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" clipRule="evenodd"/><path fill="currentColor" d="M18.856 16.573a.75.75 0 0 1 .015 1.06l-1.833 1.89a.75.75 0 0 1-1.114-.043l-.834-1a.75.75 0 1 1 1.153-.96l.3.36 1.252-1.291a.75.75 0 0 1 1.06-.016Z"/><path fill="currentColor" fillRule="evenodd" d="M13.91 21.608c-.61.093-1.251.142-1.91.142-2.04 0-3.922-.47-5.322-1.27C5.3 19.692 4.25 18.49 4.25 17s1.05-2.692 2.428-3.48c1.4-.8 3.283-1.27 5.322-1.27 1.805 0 3.483.368 4.812 1.004q.093-.004.188-.004a4.75 4.75 0 1 1-3.09 8.358ZM13.75 18a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm.668-3.987A4.75 4.75 0 0 0 12.25 18c0 .803.2 1.56.55 2.222q-.393.028-.8.028c-1.827 0-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17s.517-1.517 1.672-2.177c1.134-.648 2.751-1.073 4.578-1.073.861 0 1.677.094 2.418.263Z" clipRule="evenodd"/>
    </svg>
  );
}
