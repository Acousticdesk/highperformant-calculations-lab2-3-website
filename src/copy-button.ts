const COPY_TO_CLIPBOARD_GUIDE_MS = 2000;

(document.getElementById('copy_array') as HTMLElement).addEventListener('click', (e) => {
  const currentTarget = e.currentTarget as HTMLElement;
  const originalCurrentTargetTextContent = currentTarget.textContent;
  currentTarget.textContent = 'Copied ✅';
  window.setTimeout(() => {
    currentTarget.textContent = originalCurrentTargetTextContent;
  }, COPY_TO_CLIPBOARD_GUIDE_MS);
  const arrayContainerElement = document.getElementById('array_container') as HTMLElement;
  window.navigator.clipboard.writeText(`[${arrayContainerElement.textContent}]` as string);
})
