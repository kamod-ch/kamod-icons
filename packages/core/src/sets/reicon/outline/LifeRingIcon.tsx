import type { IconProps } from "../../../shared/types";

export function LifeRingIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12Zm3.991-6.698A10.2 10.2 0 0 0 1.75 12c0 2.56.939 4.902 2.491 6.698l3.554-3.554A5.23 5.23 0 0 1 6.75 12c0-1.18.389-2.268 1.045-3.144zm1.06-1.06 3.555 3.553A5.23 5.23 0 0 1 12 6.75c1.18 0 2.268.389 3.144 1.045l3.554-3.554A10.2 10.2 0 0 0 12 1.75c-2.56 0-4.902.939-6.698 2.491Zm14.458 1.06-3.554 3.554A5.23 5.23 0 0 1 17.25 12c0 1.18-.389 2.268-1.045 3.144l3.554 3.554A10.2 10.2 0 0 0 22.25 12c0-2.56-.939-4.902-2.491-6.698Zm-1.06 14.457-3.555-3.554A5.23 5.23 0 0 1 12 17.25a5.23 5.23 0 0 1-3.144-1.045l-3.554 3.554A10.2 10.2 0 0 0 12 22.25c2.56 0 4.902-.939 6.698-2.491ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
