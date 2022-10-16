export function css(element, css) {
  const style = element.style;

  Object.keys(css).forEach((prop) => {
    style[prop] = css[prop];
  });
}

export default {
  css,
};
