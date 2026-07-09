import type { IconProps } from "../../../shared/types";

export function UserXIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" clipRule="evenodd"/><path fill="currentColor" d="M17.197 14.136a.75.75 0 0 0-1.06 1.061l.802.803-.802.803a.75.75 0 0 0 1.06 1.06l.803-.802.803.803a.75.75 0 0 0 1.06-1.061L19.062 16l.803-.803a.75.75 0 0 0-1.06-1.06L18 14.94z"/><path fill="currentColor" fillRule="evenodd" d="M12 12.25c.969 0 1.902.092 2.775.263a4.75 4.75 0 1 1 5.596 7.604c-.374.81-1.072 1.453-2.251 1.892-1.31.487-3.252.741-6.12.741-2.026 0-3.58-.127-4.774-.369-1.19-.24-2.07-.605-2.7-1.117-1.278-1.042-1.277-2.5-1.276-3.662V17.5c0-1.634 1.17-2.96 2.726-3.836 1.58-.888 3.71-1.414 6.024-1.414ZM4.75 17.5c0-.851.622-1.775 1.961-2.528 1.316-.74 3.184-1.222 5.29-1.222.605 0 1.193.04 1.755.115A4.75 4.75 0 0 0 17.31 20.7c-1.07.337-2.733.55-5.31.55-1.975 0-3.42-.125-4.477-.339-1.06-.214-1.68-.509-2.05-.81-.684-.557-.724-1.293-.724-2.601ZM18 12.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" clipRule="evenodd"/>
    </svg>
  );
}
