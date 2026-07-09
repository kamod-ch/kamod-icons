import type { IconProps } from "../../../shared/types";

export function LanguageIcon({
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
      <path fill="currentColor" d="M8 2.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.405c-.517 2.086-1.28 3.836-2.505 5.395q-.445.566-.968 1.095c.893.713 1.958 1.404 3.237 2.102a.75.75 0 1 1-.718 1.316c-1.424-.776-2.626-1.562-3.64-2.397-1.017.837-2.22 1.622-3.642 2.397a.75.75 0 0 1-.718-1.316c1.281-.7 2.346-1.39 3.237-2.102a12.3 12.3 0 0 1-2.136-2.887.75.75 0 0 1 1.324-.706A10.8 10.8 0 0 0 8 11.241q.5-.499.91-1.023c.996-1.267 1.662-2.7 2.136-4.468H2a.75.75 0 0 1 0-1.5h5.25V3A.75.75 0 0 1 8 2.25Z"/><path fill="currentColor" fillRule="evenodd" d="M17.5 10.25a.75.75 0 0 1 .684.442l3.143 6.985.014.03 1.343 2.985a.75.75 0 1 1-1.368.616l-1.15-2.558h-5.331l-1.151 2.558a.75.75 0 1 1-1.368-.616l1.343-2.984.014-.03 3.143-6.986a.75.75 0 0 1 .684-.442Zm1.99 7-1.99-4.422-1.99 4.422z" clipRule="evenodd"/>
    </svg>
  );
}
