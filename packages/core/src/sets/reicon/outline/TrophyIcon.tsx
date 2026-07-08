import type { IconProps } from "../../../shared/types";

export function TrophyIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M4.367 3.66A2.25 2.25 0 0 1 6.61 1.25h10.78a2.25 2.25 0 0 1 2.245 2.41l-.007.09H21a1.75 1.75 0 0 1 1.745 1.885l-.247 3.193a4.25 4.25 0 0 1-4.048 3.918 7.2 7.2 0 0 1-5.7 3.965v1.539h1.169c.968 0 1.828.62 2.134 1.538l.488 1.462H17a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h.459l.487-1.462a2.25 2.25 0 0 1 2.134-1.538h1.17v-1.539a7.2 7.2 0 0 1-5.7-3.965 4.25 4.25 0 0 1-4.048-3.918l-.247-3.193A1.75 1.75 0 0 1 3 3.75h1.373zM9.04 21.25h5.919l-.33-.987a.75.75 0 0 0-.711-.513H10.08a.75.75 0 0 0-.711.513zM4.825 10.069q.04.551.158 1.075a2.75 2.75 0 0 1-1.985-2.432l-.247-3.193a.25.25 0 0 1 .25-.269h1.48zm14.192 1.075a2.75 2.75 0 0 0 1.985-2.432l.247-3.193A.25.25 0 0 0 21 5.25h-1.48l-.343 4.819q-.04.551-.159 1.075ZM6.611 2.75a.75.75 0 0 0-.748.803l.458 6.409a5.694 5.694 0 0 0 11.359 0l.457-6.409a.75.75 0 0 0-.748-.803z" clipRule="evenodd"/>
    </svg>
  );
}
