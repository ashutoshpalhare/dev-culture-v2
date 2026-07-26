import {
  Code2,
  Globe,
  Smartphone,
  ShieldCheck,
  Palette,
  Users,
  Trophy,
  Rocket,
  Star,
  Target,
  Lightbulb,
} from "lucide-react";

import projScraper from "@/assets/proj-scraper.jpg";
import projChatgpt from "@/assets/proj-chatgpt.jpg";
import projCollege from "@/assets/proj-college.jpg";
import projHealth from "@/assets/proj-health.jpg";
import projCyber from "@/assets/proj-cyber.jpg";
import teamFounder from "@/assets/team-1.jpg";

export const services = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom, scalable software engineered around your business logic — from MVP to enterprise.",
    long: "We architect and build production-grade software systems — APIs, microservices, data pipelines and internal tools — using modern stacks like TypeScript, Go, Python and Rust. Every line of code is written with performance, maintainability and business outcomes in mind.",
    features: ["Custom SaaS platforms", "API & microservices", "Automation & internal tools", "Cloud-native architecture"],
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Blazing-fast, conversion-focused websites built with modern stacks and pixel-perfect design.",
    long: "From marketing sites to complex web platforms, we craft websites that load in under a second, rank on Google and convert visitors into customers. Next.js, React, headless CMS and edge-first hosting.",
    features: ["Marketing & brand sites", "E-commerce platforms", "SEO & Core Web Vitals", "Headless CMS integration"],
  },
  {
    icon: Smartphone,
    title: "Application Development",
    desc: "Native-feel iOS, Android, and cross-platform apps your users will actually love opening.",
    long: "Mobile apps engineered for retention. Native Swift/Kotlin when performance matters, React Native / Flutter when speed matters — always with offline support, push, analytics and delightful UX.",
    features: ["iOS & Android native", "React Native / Flutter", "Offline-first sync", "App Store optimization"],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Proactive audits, penetration testing, and hardening to keep your systems and data safe.",
    long: "Certified security engineers run deep audits, penetration tests and threat modelling. We harden your infrastructure, ship compliant systems (SOC2, ISO, GDPR) and monitor 24/7.",
    features: ["Penetration testing", "Security audits", "Compliance (SOC2/ISO/GDPR)", "24/7 monitoring"],
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    desc: "Brand identity, UI/UX, and motion design that make your product unmistakably premium.",
    long: "Design that sells. Logos, full brand systems, marketing collateral, product UI/UX and motion — every touchpoint tuned for a premium feel your competitors can't fake.",
    features: ["Brand identity", "UI/UX design", "Motion & 3D", "Marketing collateral"],
  },
];

export const projects = [
  { title: "Web Scraper", img: projScraper, tags: ["Python", "Scrapy", "PostgreSQL"], desc: "Distributed scraping engine processing 2M+ pages daily." },
  { title: "ChatGPT Clone", img: projChatgpt, tags: ["Next.js", "OpenAI", "Streaming"], desc: "Multi-model chat platform with memory and tools." },
  { title: "College Management System", img: projCollege, tags: ["React", "Node.js", "MongoDB"], desc: "End-to-end platform for students, faculty and admins." },
  { title: "AI Health Care Bot", img: projHealth, tags: ["LLM", "RAG", "FastAPI"], desc: "24/7 triage assistant with clinical-grade guardrails." },
  { title: "Cyber Threat Detection", img: projCyber, tags: ["ML", "SIEM", "Kafka"], desc: "Real-time anomaly detection across enterprise networks." },
];

export const stats = [
  { icon: Trophy, num: "120+", label: "Projects Delivered" },
  { icon: Users, num: "80+", label: "Happy Clients" },
  { icon: Rocket, num: "5+", label: "Years of Craft" },
  { icon: Star, num: "4.9/5", label: "Client Rating" },
];

export const whyPoints = [
  { icon: Target, title: "Tailored Solutions", desc: "Every line of code maps to a real business outcome — no bloat, no compromises." },
  { icon: Users, title: "Expert Team", desc: "Senior engineers, designers and strategists who ship production-grade work." },
  { icon: Lightbulb, title: "Innovation at Heart", desc: "We bring AI, automation and modern architecture to every project we touch." },
];

export const team = [
  { name: "Ashutosh Palhare", role: "Founder & Tech Lead", img: teamFounder, bio: "Full-stack architect. 8+ years shipping scalable products." },
  { name: "Riya Sharma", role: "Lead Designer", initials: "RS", bio: "Brand & product design for high-growth startups." },
  { name: "Karan Mehta", role: "Mobile Engineering", initials: "KM", bio: "iOS & Android specialist. Ex-fintech." },
  { name: "Neha Verma", role: "Security Engineer", initials: "NV", bio: "OSCP certified. Loves breaking things (ethically)." },
];

export const testimonials = [
  { quote: "Dev Culture rebuilt our platform from the ground up. Traffic tripled and our team finally moves at startup speed again.", name: "Arjun Kapoor", title: "CEO, LaunchLabs" },
  { quote: "The most professional agency we've worked with. They ship faster than our in-house team and the quality is unreal.", name: "Sophia Chen", title: "CTO, Northwind AI" },
  { quote: "From strategy to pixels to production — Ashutosh and his team just get it. Absolute killers.", name: "Marcus Reid", title: "Founder, Reid Ventures" },
  { quote: "They took our vague idea and turned it into a product our customers rave about. Cannot recommend enough.", name: "Priya Nair", title: "Head of Product, Fluently" },
];

export const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];
