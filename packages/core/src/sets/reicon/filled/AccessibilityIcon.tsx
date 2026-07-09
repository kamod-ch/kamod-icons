import type { IconProps } from "../../../shared/types";

export function AccessibilityIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5.707.31a.75.75 0 0 0-.586 1.38l.002.001.002.001.01.004.032.014a15 15 0 0 0 .572.225c.38.145.914.338 1.527.53.988.312 2.236.64 3.398.748v1.24c0 .43-.124.853-.357 1.216l-2.524 3.925a.75.75 0 0 0 1.262.812l2.37-3.686 2.368 3.686a.75.75 0 0 0 1.262-.812l-2.524-3.925a2.25 2.25 0 0 1-.357-1.217v-1.239c1.162-.108 2.41-.436 3.399-.748a28 28 0 0 0 2.098-.755l.033-.014.01-.004.002-.001a.75.75 0 0 0-.585-1.381l-.007.003-.027.011-.11.045q-.148.061-.42.164c-.36.137-.865.32-1.444.502-1.178.37-2.588.715-3.699.715s-2.52-.345-3.698-.715a27 27 0 0 1-1.974-.711L6.3 9.313z" clipRule="evenodd"/>
    </svg>
  );
}
