import type { IconProps } from "../../../shared/types";

export function Pills3Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M19.53 2.348a3.75 3.75 0 1 0-5.303 5.304 3.75 3.75 0 0 0 5.303-5.304ZM15.288 3.41a2.25 2.25 0 1 1 3.182 3.182 2.25 2.25 0 0 1-3.182-3.182Zm-5.076 2.377a5.25 5.25 0 1 0-7.424 7.425 5.25 5.25 0 0 0 7.424-7.425ZM3.848 6.848a3.75 3.75 0 0 1 6.327 1.902h-7.35a3.73 3.73 0 0 1 1.023-1.902ZM2.825 10.25h7.35a3.75 3.75 0 0 1-7.35 0Zm18.611 1.314a4.49 4.49 0 0 0-6.347 0l-3.524 3.524a4.488 4.488 0 1 0 6.346 6.347l3.524-3.524a4.49 4.49 0 0 0 0-6.347Zm-5.287 1.06a2.988 2.988 0 1 1 4.226 4.227L19 18.224l-.026-.008a4.5 4.5 0 0 1-.583-.236c-.5-.241-1.2-.672-1.95-1.421-.75-.75-1.181-1.452-1.422-1.951a4.5 4.5 0 0 1-.236-.583L14.775 14zm-2.53 2.53.05.105c.307.637.832 1.48 1.712 2.36s1.723 1.405 2.36 1.712l.104.05-.994.994a2.988 2.988 0 1 1-4.226-4.226z" clipRule="evenodd"/>
    </svg>
  );
}
