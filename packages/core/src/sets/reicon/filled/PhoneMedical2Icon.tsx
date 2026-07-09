import type { IconProps } from "../../../shared/types";

export function PhoneMedical2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478.82.82 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.82.82 0 0 0-.067-.574A5 5 0 1 1 22 7Zm-5-2.187c.518 0 .938.42.938.937v.313h.312a.937.937 0 1 1 0 1.875h-.312v.312a.937.937 0 1 1-1.875 0v-.312h-.313a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.937.937-.937Z" clipRule="evenodd"/><path fill="currentColor" d="m8.038 7.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z"/>
    </svg>
  );
}
