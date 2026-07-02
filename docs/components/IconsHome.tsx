import CommunitySection from "./CommunitySection.tsx";
import FeaturePillars from "./FeaturePillars.tsx";
import IconCatalogBrowser from "./IconCatalogBrowser.tsx";
import IconRequestCTA from "./IconRequestCTA.tsx";
import LandingHero from "./LandingHero.tsx";

export default function IconsHome() {
  return (
    <div class="ki-home ki-tabler">
      <LandingHero />
      <IconCatalogBrowser />
      <IconRequestCTA />
      <FeaturePillars />
      <CommunitySection />
    </div>
  );
}
