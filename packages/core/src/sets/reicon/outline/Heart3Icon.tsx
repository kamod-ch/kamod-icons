import type { IconProps } from "../../../shared/types";

export function Heart3Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.25 9.474c0-3.788 2.608-7.224 6.643-7.224 1.867 0 3.213.82 4.107 1.66.894-.84 2.24-1.66 4.107-1.66 4.035 0 6.643 3.436 6.643 7.224 0 3.827-2.31 6.896-4.688 9.02s-4.966 3.431-5.825 3.718L12 22.29l-.237-.08c-.86-.286-3.447-1.593-5.825-3.717S1.25 13.3 1.25 9.474ZM7.893 3.75c-3.02 0-5.143 2.564-5.143 5.724 0 3.2 1.94 5.893 4.187 7.901 2.027 1.81 4.189 2.959 5.063 3.323.874-.364 3.036-1.513 5.063-3.323 2.248-2.008 4.187-4.702 4.187-7.9 0-3.16-2.123-5.725-5.143-5.725-1.713 0-2.847.92-3.534 1.734L12 6.163l-.573-.68C10.74 4.67 9.606 3.75 7.893 3.75Z" clipRule="evenodd"/>
    </svg>
  );
}
