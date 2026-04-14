import { motion } from "framer-motion";
import CardStack from "../../components/cardstack/CardStack";
import "./New.scss";

const data = [
  {
    id: "1",
    title: "Mitigating Activation Loss via Adaptive KYC",
    desc: "Reduced activation loss by 20% by decoupling KRA verification and reframing rigid KYC blocks into recoverable, persona-specific paths",
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
    desc: "Architected a time-aware UI adapting to intraday stages, doubling 6-month seller retention and supporting a +157% engagement spike on expiry days",
    asset: "/landing/option-seller.webm",
    assetType: "video",
    logo: "/landing/logo/sahi.svg",
    theme: "dark",
    hoverText: "Read on Notion >",
    link: "https://cubic-pair-c3b.notion.site/SAHI-Options-Seller-32ab4f0755cf80468c28f0f8a24384b3?source=copy_link",
  },
  {
    id: "3",
    title: "Systematizing BFSI Voice Agent Auditing",
    desc: "Scaled QA coverage from 5% to 100% by building a high-complexity auditing system for hundreds of millions of BFSI conversations",
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
