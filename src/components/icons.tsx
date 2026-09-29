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

export function MugenLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <span className={`font-mono font-bold tracking-tighter text-white inline-flex items-center gap-0.5 text-base sm:text-lg ${className}`}>
      MUGEN<span className="text-neutral-500 text-xs">°</span>
    </span>
  );
}
