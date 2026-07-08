import type { IconProps } from "../../../shared/types";

export function FlaskIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M15.75 8.789V2.75h.75a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5h.75v6.039c0 .476-.003.624-.027.761a1.8 1.8 0 0 1-.12.393c-.055.128-.135.253-.399.649l-4.941 7.412a3.053 3.053 0 0 0 2.54 4.746h13.394a3.053 3.053 0 0 0 2.54-4.746l-4.941-7.412c-.264-.396-.344-.521-.4-.649a1.8 1.8 0 0 1-.119-.393c-.024-.137-.027-.285-.027-.761Zm-6-6.039v6.097c0 .394 0 .682-.05.966a3.3 3.3 0 0 1-.221.73c-.116.265-.276.504-.494.832l-1.25 1.875h8.53l-1.25-1.875c-.218-.328-.378-.567-.494-.832a3.3 3.3 0 0 1-.22-.73c-.051-.284-.051-.572-.051-.966V2.75zm7.515 12H6.735L4.01 18.836a1.553 1.553 0 0 0 1.292 2.414h13.394a1.553 1.553 0 0 0 1.292-2.414z" clipRule="evenodd"/>
    </svg>
  );
}
