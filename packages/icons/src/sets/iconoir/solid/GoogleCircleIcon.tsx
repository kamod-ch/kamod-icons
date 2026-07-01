import type { IconProps } from "../../../shared/types";

export function GoogleCircleIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m.109 5C8.888 6.25 6.25 8.81 6.25 12s2.638 5.75 5.859 5.75c1.942 0 3.34-.73 4.262-1.797.9-1.044 1.299-2.356 1.377-3.484l.056-.802h-4.963v1.5h3.288c-.153.642-.442 1.282-.894 1.806-.622.721-1.599 1.277-3.126 1.277-2.423 0-4.359-1.918-4.359-4.25s1.936-4.25 4.359-4.25c1.135 0 2.166.422 2.939 1.113l.999-1.12a5.9 5.9 0 0 0-3.938-1.493" clipRule="evenodd"/>
    </svg>
  );
}
