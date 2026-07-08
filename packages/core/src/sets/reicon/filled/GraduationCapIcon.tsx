import type { IconProps } from "../../../shared/types";

export function GraduationCapIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M13.984 16.52c-.612.315-1.299.48-1.984.48s-1.375-.167-1.985-.481l-5.348-2.752v4.901c0 2.407 3.689 3.667 7.333 3.667s7.333-1.26 7.333-3.667v-4.901z"/><path d="M22.292 12.301A14 14 0 0 1 22.58 9.1c.024-.174.087-.255.087-.599 0-.801-.443-1.528-1.155-1.895L13.069 2.26a2.34 2.34 0 0 0-2.138 0L2.488 6.607c-.712.366-1.155 1.092-1.155 1.893s.443 1.528 1.155 1.895l8.443 4.345a2.34 2.34 0 0 0 2.138 0l7.268-3.741c-.025.454-.06.909-.045 1.365.032 1.03.168 2.061.401 3.068a1 1 0 1 0 1.948-.45 14 14 0 0 1-.35-2.682Z"/></g>
    </svg>
  );
}
