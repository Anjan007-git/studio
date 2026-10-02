import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Star,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Copy,
  CheckCheck,
  Mail,
  Calendar,
  Phone,
  Globe,
  Shield,
  Zap,
  Layers,
  Code,
  Palette,
  Smartphone,
  Compass,
  Monitor,
  Rocket,
  Plus,
  Minus,
  ArrowLeft,
  ExternalLink,
  Search,
  Menu,
  X
} from "lucide-react";

export {
  ArrowLeft,
  ExternalLink,
  Search,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Check,
  Star,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Copy,
  CheckCheck,
  Mail,
  Calendar,
  Phone,
  Globe,
  Shield,
  Zap,
  Layers,
  Code,
  Palette,
  Smartphone,
  Compass,
  Monitor,
  Rocket,
  Plus,
  Minus
};

export function TrifectaLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <span className={`font-mono font-bold tracking-tighter text-white inline-flex items-center gap-0.5 text-base sm:text-lg ${className}`}>
      TRIFECTA TRENDS<span className="text-neutral-500 text-xs">°</span>
    </span>
  );
}

export function XIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function DribbbleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
