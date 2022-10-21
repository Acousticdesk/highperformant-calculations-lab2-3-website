document.addEventListener('DOMContentLoaded', () => {
  const copyrightElement = document.getElementById('copyright') as HTMLElement;
  copyrightElement.innerHTML = `${copyrightElement.innerHTML} ${(new Date()).getFullYear()}`
})
