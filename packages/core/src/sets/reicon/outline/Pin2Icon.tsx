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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M12 6.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM10.25 10a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 1.25A8.75 8.75 0 0 0 3.25 10c0 4.207 2.676 7.175 4.53 9.232l.162.18c.683.758 2.26 2.22 3.05 2.945a1.49 1.49 0 0 0 2.015 0c.79-.725 2.368-2.187 3.05-2.945l.155-.172c1.776-1.97 4.538-5.032 4.538-9.24A8.75 8.75 0 0 0 12 1.25ZM4.75 10a7.25 7.25 0 0 1 14.5 0c0 3.624-2.413 6.304-4.24 8.334l-.067.074c-.622.69-2.13 2.092-2.943 2.837-.813-.745-2.321-2.146-2.943-2.837l-.07-.079C7.076 16.208 4.75 13.623 4.75 10Z" clipRule="evenodd"/>
    </svg>
  );
}
