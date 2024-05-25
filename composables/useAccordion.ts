import type {
  AccordionInject,
  AccordionProps,
} from "~/components/Base/Accordion/accordion.type";

export function useAccordion(
  defaultOpenItems: string[] = [],
  props: AccordionProps,
) {
  const openItems = ref<string[]>([...defaultOpenItems]);
  const toggleItem = (name: string) => {
    if (props.multiple) {
      if (openItems.value.includes(name)) {
        openItems.value = openItems.value.filter((item) => item !== name);
      } else {
        openItems.value.push(name);
      }
    } else {
      openItems.value = openItems.value.includes(name) ? [] : [name];
    }
  };
  provide("accordion", {
    openItems,
    toggleItem,
    props: computed(() => props),
  });
  return { openItems, toggleItem };
}

export function useAccordionItem(name: string) {
  const accordion = inject<AccordionInject>("accordion");

  if (!accordion) {
    return { accordionProps: ref({} as AccordionProps) };
  }

  const isOpen = computed(() => accordion.openItems.value.includes(name));

  const toggle = () => {
    accordion.toggleItem(name);
  };

  return { isOpen, toggle, accordionProps: accordion.props };
}
