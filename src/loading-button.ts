export function createLoadingButton(buttonSelector: string) {
  const buttonElement = document.querySelector(buttonSelector);

  if (!buttonElement) {
    throw new Error(`There is no ${buttonSelector} button on the screen`);
  }

  if (!(buttonElement instanceof HTMLButtonElement)) {
    throw new Error(`${buttonSelector} button is not a button`);
  }

  return {
    setLoading() {
      buttonElement.disabled = true;
      buttonElement.textContent = `${buttonElement.textContent}ing...`;
    },
    setLoadingFinished() {
      buttonElement.disabled = false;
      buttonElement.textContent = (buttonElement.textContent as string).replace('ing...', '');
    }
  }
}
