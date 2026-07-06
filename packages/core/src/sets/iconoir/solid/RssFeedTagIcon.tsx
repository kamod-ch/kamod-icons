import type { IconProps } from "../../../shared/types";

export function RssFeedTagIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M16 21.75A5.75 5.75 0 0 0 21.75 16V8A5.75 5.75 0 0 0 16 2.25H8A5.75 5.75 0 0 0 2.25 8v8A5.75 5.75 0 0 0 8 21.75zM11.25 17c0-1.33-.44-2.38-1.155-3.095S8.33 12.75 7 12.75a.75.75 0 0 1 0-1.5c1.67 0 3.12.56 4.155 1.595S12.75 15.33 12.75 17a.75.75 0 0 1-1.5 0m2.47-6.72c1.59 1.59 2.53 3.89 2.53 6.72a.75.75 0 0 0 1.5 0c0-3.17-1.06-5.87-2.97-7.78S10.17 6.25 7 6.25a.75.75 0 0 0 0 1.5c2.83 0 5.13.94 6.72 2.53M7.567 17.5a.75.75 0 0 0-1.114-1.003l-.01.011a.75.75 0 0 0 1.114 1.004z" clipRule="evenodd"/>
    </svg>
  );
}
