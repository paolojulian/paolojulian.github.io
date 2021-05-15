class AppPill extends HTMLElement {
  constructor() {
    super();
    this.classList.add(
      'text-xs',
      'inline-block',
      'py-1',
      'px-4',
      'uppercase',
      'rounded-full',
      'text-gray-50',
      'bg-red',
      'uppercase',
      'last:mr-0',
      'mr-2',
      'mt-2',
    );
  }
}

export default AppPill;
