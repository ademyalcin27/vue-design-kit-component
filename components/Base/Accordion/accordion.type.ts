export interface AccordionProps {
  expandIcon?: string;
  collapseIcon?: string;
  multiple?: boolean;
}
export interface AccordionInject {
  toggleItem: (name: string) => void;
  openItems: Ref<string[]>;
  props: ComputedRef<AccordionProps>;
}
