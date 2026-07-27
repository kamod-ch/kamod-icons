import type { FunctionalComponent } from "preact";
import { KamodProductLogo } from "@kamod-ch/brand";

interface LogoProps {
  class?: string;
  label: string;
  base?: string;
}

const Logo: FunctionalComponent<LogoProps> = ({ class: className, label, base = "/" }) => (
  <KamodProductLogo class={className} label={label} base={base} suffix="Icons" />
);

export default Logo;
