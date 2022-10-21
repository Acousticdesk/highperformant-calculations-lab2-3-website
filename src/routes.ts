document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (!target.classList.contains('router-link')) {
      return;
    }

    e.preventDefault();

    const routerOutletElement = document.querySelector('#router_outlet') as HTMLElement;

    Array.from(routerOutletElement.children).forEach(el => {
      const element = el as HTMLElement;
      element.hidden = true;
    })

    const href = target.getAttribute('href') as string;

    const activeRoute = document.querySelector(href) as HTMLElement;

    if (activeRoute) {
      activeRoute.hidden = false;
    }

    Array.from(document.querySelectorAll('.router-link')).forEach(el => {
      const element = el as HTMLElement;

      element.classList.remove('active');
    })

    target.classList.add('active');
  })

})
