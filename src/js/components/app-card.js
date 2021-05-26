class AppCard extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add(
      'shadow-lg',
      'rounded-lg',
      'text-center',
      'p-8',
    );

    this.innerHTML = `
      <img
        alt="${this.getAttribute('imageAlt')}"
        class="shadow-md object-cover rounded-full max-w-full w-16 mx-auto p-1 bg-gray-50"
        src="${this.getAttribute('imageUrl')}"
      />
      <p class="text-lg text-gray-50 mt-4 font-semibold">${this.getAttribute('title')}</p>
      <p class="text-base text-gray-50 opacity-75 mt-2">
        ${this.getAttribute('description')}
      </p>
    `;
  }
}

export default AppCard;
