import type { IconProps } from "../../../shared/types";

export function TimeBackIcon({
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
      <path fill="currentColor" d="M12 2.75a9.2 9.2 0 0 0-5.55 1.849c-.628.472-1.338 1.179-1.966 1.903-.222.257-.428.51-.613.748H7.5a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8V2.5a.75.75 0 0 1 1.5 0v3.749c.188-.24.39-.486.6-.729.665-.768 1.454-1.56 2.2-2.12A10.7 10.7 0 0 1 12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-4.815 0-8.888-3.165-10.258-7.525a.75.75 0 1 1 1.431-.45A9.25 9.25 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5Z"/><path fill="currentColor" d="M12.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .352.636l3.2 2a.75.75 0 1 0 .796-1.272l-2.848-1.78z"/>
    </svg>
  );
}
