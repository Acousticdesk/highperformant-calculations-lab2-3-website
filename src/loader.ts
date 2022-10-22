export function createLoader(loaderSelector: string) {
  const loaderElement = document.querySelector(loaderSelector);

  if (!loaderElement) {
    throw new Error(`There is no ${loaderSelector} button on the screen`);
  }

  if (!(loaderElement instanceof HTMLElement)) {
    throw new Error(`${loaderSelector} loader is not an HTML element`);
  }

  return {
    setLoading() {
      loaderElement.hidden = false
    },
    setLoadingFinished() {
      loaderElement.hidden = true;
    }
  }
}
