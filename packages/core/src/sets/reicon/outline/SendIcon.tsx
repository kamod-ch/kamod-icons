import type { IconProps } from "../../../shared/types";

export function SendIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M22.562 5.641c.902-2.596-1.576-5.119-4.182-4.2L3.445 6.706C.578 7.716.5 11.762 3.324 12.885l.016.006 4.953 1.84c.462.187.827.56 1.005 1.033l1.924 4.86c1.086 2.876 5.152 2.821 6.162-.084zm-3.683-2.785c1.395-.492 2.764.859 2.266 2.293l-5.178 14.899c-.55 1.582-2.754 1.61-3.343.042L10.7 15.23a3.3 3.3 0 0 0-.288-.581l3.618-3.619a.75.75 0 1 0-1.06-1.06l-3.621 3.62q-.241-.148-.51-.255l-.015-.006-4.953-1.84c-1.53-.616-1.483-2.82.072-3.369z" clipRule="evenodd"/>
    </svg>
  );
}
