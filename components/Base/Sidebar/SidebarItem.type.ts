import type { IconSizes } from "~/types/Sizes";
export interface SidebarItem {
  icon: string;
  text: string;
  link?: string;
  children?: SidebarItem[];
  isOpen?: boolean;
  iconSize?: IconSizes;
  external?: boolean;
  active?: boolean;
}
