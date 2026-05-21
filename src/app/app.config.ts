import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  LucideAngularModule,
  BrainCircuit,
  CodeXml,
  Braces,
  Database,
  Wrench,
  Lightbulb,
  Star,
  Trophy,
  CircleDot,
  ExternalLink,
  ArrowDownToLine,
  ArrowRight,
  Github,
  CircleFadingArrowUp,
  CircleUserRound,
  UserRound,
  Menu,
  ShieldCheck,
  CalendarHeart,
  CalendarClock,
  BriefcaseBusiness
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      LucideAngularModule.pick({
        BrainCircuit,
        CodeXml,
        Braces,
        Database,
        Wrench,
        Lightbulb,
        Star,
        Trophy,
        CircleDot,
        ExternalLink,
        ArrowDownToLine,
        ArrowRight,
        Github,
        CircleFadingArrowUp,
        CircleUserRound,
        UserRound,
        Menu,
        ShieldCheck,
        CalendarHeart,
        CalendarClock,
        BriefcaseBusiness
      })
    )
  ]
};