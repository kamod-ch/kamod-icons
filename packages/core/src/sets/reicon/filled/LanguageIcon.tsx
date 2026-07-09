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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M8 2a1 1 0 0 1 1 1v1h5a1 1 0 0 1 0 2h-1.21c-.522 2.028-1.289 3.754-2.503 5.3q-.37.47-.792.914c.833.643 1.817 1.271 2.984 1.908a1 1 0 1 1-.958 1.756c-1.362-.743-2.526-1.496-3.52-2.295-.998.8-2.163 1.553-3.522 2.295a1 1 0 0 1-.958-1.756c1.17-.638 2.152-1.266 2.984-1.908a12.5 12.5 0 0 1-1.984-2.743 1 1 0 1 1 1.765-.942A10.5 10.5 0 0 0 8 10.884q.386-.402.714-.82c.91-1.16 1.542-2.466 2.003-4.064H2a1 1 0 0 1 0-2h5V3a1 1 0 0 1 1-1Z"/><path fill="currentColor" fillRule="evenodd" d="M17.5 10a1 1 0 0 1 .912.59l3.141 6.98.008.016.006.014.004.01 1.34 2.98a1 1 0 1 1-1.823.82L20.003 19h-5.006l-1.085 2.41a1 1 0 1 1-1.824-.82l1.34-2.98.019-.04 3.141-6.98A1 1 0 0 1 17.5 10Zm-1.603 7h3.206L17.5 13.437z" clipRule="evenodd"/>
    </svg>
  );
}
