export const scrollToTheTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const scrollToElementWithGap = (ref: any, gap = 0) => {
  if (ref.current) {
    const element = ref.current;
    const elementRect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const scrollPosition = elementRect.top + scrollTop - gap;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
};
