import { motion } from "framer-motion";
import CardStack from "../../components/cardstack/CardStack";
import "./New.scss";

const data = [
  {
    id: "1",
    title: "Reducing Activation Loss in F&O Onboarding at Sahi",
    desc: "Boosted KRA onboarding completion by 20pp and cut dependency failures by 60% by splitting flows for pre-verified users and turning hard validation blocks into recoverable steps",
    asset: "/landing/onboarding.webp",
    assetType: "image",
    logo: "/landing/logo/sahi.svg",
    theme: "dark",
    hoverText: "Read on Notion >",
    link: "https://cubic-pair-c3b.notion.site/Activation-Loss-in-Onboarding-for-Pre-Verified-Investors-33eb4f0755cf80daa108f62f48562d8a?source=copy_link",
  },
  {
    id: "2",
    title: "India's First Seller-Native F&O Terminal",
    desc: "Redesigned the F&O experience from the ground up for options sellers, introducing a dynamically adapting intraday UI. Resulted in +49% daily engagement, doubled seller retention at 6 months, and +157% uplift on expiry days.",
    asset: "/landing/option-seller.webm",
    assetType: "video",
    logo: "/landing/logo/sahi.svg",
    theme: "dark",
    hoverText: "Read on Notion >",
    link: "https://cubic-pair-c3b.notion.site/SAHI-Options-Seller-32ab4f0755cf80468c28f0f8a24384b3?source=copy_link",
  },
  {
    id: "3",
    title: "AI Call Auditing at Scale for BFSI Voice Agents",
    desc: "Designed a voice agent audit system to detect regressions, trace root causes, and assign fix ownership across 100% of BFSI call volume, up from less than 5%",
    asset: "/landing/voice-ai-light.webp",
    assetType: "image",
    logo: "/landing/logo/greylabs.svg",
    theme: "",
    hoverText: "Under NDA",
  },
  {
    id: "4",
    title: "Reimagining how Gen Alpha tracks habits, earns rewards, and spends smarter",
    desc: "Turning a financial card into an AI-powered, habit-aware spending companion targeting a generation with $5.46T spending influence and 2-3x higher retention potential",
    asset: "/landing/elixir.webp",
    assetType: "image",
    logo: "/landing/logo/elixir.svg",
    theme: "dark",
    hoverText: "Coming soon",
  },
  {
    id: "5",
    title: "A Guide to Stress-Testing Accessibility and Rapid Prototyping using AI",
    desc: "Scale Design, reduce review friction and improve output quality with guardrails",
    asset: "/landing/claude.webm",
    assetType: "video",
    logo: "/landing/logo/claude.svg",
    theme: "",
    hoverText: "Coming soon",
  },
];

export default function New() {
  return (
    <motion.div
      className="new_cont"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.38, ease: [0.33, 1, 0.68, 1] }}
    >
      <CardStack data={data} />
    </motion.div>
  );
}
