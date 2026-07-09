import type { IconProps } from "../../../shared/types";

export function BookOpenIcon({
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
      <path fill="currentColor" d="M11.25 4.178a.24.24 0 0 0-.092-.192A5.75 5.75 0 0 0 7.596 2.75c-1.84 0-3.64.545-5.172 1.566l-.297.198a1.97 1.97 0 0 0-.877 1.638v13.124a1.405 1.405 0 0 0 2.185 1.169A7.1 7.1 0 0 1 7.38 19.25h.468c.899 0 1.77.306 2.471.867l.768.613a.1.1 0 0 0 .162-.078zm1.663 16.552a.1.1 0 0 1-.163-.078V4.178c0-.075.033-.146.092-.192a5.75 5.75 0 0 1 3.562-1.236c1.84 0 3.64.545 5.172 1.566l.297.198c.548.365.877.98.877 1.638v13.124a1.405 1.405 0 0 1-2.185 1.169 7.1 7.1 0 0 0-3.946-1.195h-.468c-.899 0-1.77.306-2.471.867z"/>
    </svg>
  );
}
