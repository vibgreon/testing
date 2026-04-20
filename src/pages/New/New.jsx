import { motion } from "framer-motion";
import CardStack from "../../components/cardstack/CardStack";
import "./New.scss";

const data = [
  {
    id: "1",
    title: "How We Reduced Onboarding Drop-off by 20% at SAHI",
    desc: "By fixing activation leakage, re-architect unnecessary steps into soft opt-outs with re-engagement and recoverable blocks, with better context for different personas for recovery.",
    asset: "/landing/onboarding.webp",
    assetType: "image",
    logo: "/landing/logo/sahi.svg",
    theme: "dark",
    hoverText: "Read on Notion >",
    link: "https://cubic-pair-c3b.notion.site/How-We-Reduced-Onboarding-Drop-off-by-20-at-SAHI-348b4f0755cf80c7aed4d741880c1d38?source=copy_link",
  },
  {
    id: "2",
    title: "Increased DTU/DAU by 49% and Doubled 6-Month Seller Retention",
    desc: "Redesigned the options trading journey with P&L Protect for buyers and sellers, driving 49% growth in DTU/DAU and 2× seller retention over 6 months.",
    asset: "/landing/option-seller.webm",
    assetType: "video",
    logo: "/landing/logo/sahi.svg",
    theme: "dark",
    hoverText: "Read on Notion >",
    link: "https://cubic-pair-c3b.notion.site/SAHI-Options-Seller-32ab4f0755cf80468c28f0f8a24384b3?source=copy_link",
  },
  {
    id: "3",
    title: "Increased 2x QA Efficiency of Voice Agents",
    desc: "Designed an experience to detect performance drops, trace root causes, and assign fix ownership across millions of BFSI calls.",
    asset: "/landing/voice-ai-light.webp",
    assetType: "image",
    logo: "/landing/logo/greylabs.svg",
    theme: "",
    hoverText: "Under NDA",
  },
  {
    id: "4",
    title: "Reimagined Gen Alpha Card Experience with AI-Driven Habit and Rewards System",
    desc: "Designed Elixir Cards into an AI-powered, habit-aware spending companion by rebuilding habit tracking, rewards, and shopping flows for improved long-term retention among Gen Alpha users.",
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
