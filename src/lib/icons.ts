import { CookingPot, MessageSquare, ChefHat, Flame, ConciergeBell } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const iconRegistry: Record<string, LucideIcon> = {
  CookingPot,
  MessageSquare,
  ChefHat,
  Flame,
  ConciergeBell,
};

export type IconName = keyof typeof iconRegistry;
