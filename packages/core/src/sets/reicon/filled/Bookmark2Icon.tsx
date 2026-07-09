import type { IconProps } from "../../../shared/types";

export function Bookmark2Icon({
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
      <path fill="currentColor" d="M14.306 1.25H9.668c-.883 0-1.592 0-2.164.047-.589.048-1.1.149-1.57.389l-.054.03c-1.042.643-1.641 1.304-1.914 2.267-.126.446-.173.926-.194 1.438-.015.37-.017.788-.019 1.245l-.003.528V21.28a1.47 1.47 0 0 0 2.466 1.079l5.208-4.807.027-.027a2.3 2.3 0 0 1 .43-.367.5.5 0 0 1 .113-.052H12l.023.005q.027.006.097.047a2.4 2.4 0 0 1 .457.394l5.208 4.807a1.468 1.468 0 0 0 2.466-1.079V7.168c0-.883 0-1.592-.047-2.164-.048-.589-.149-1.1-.389-1.57l-.03-.054c-.643-1.042-1.304-1.64-2.267-1.914-.446-.126-.926-.173-1.439-.194a36 36 0 0 0-1.251-.02l-.521-.002Z"/>
    </svg>
  );
}
