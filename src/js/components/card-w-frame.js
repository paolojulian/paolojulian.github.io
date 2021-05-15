class CardWithFrame extends HTMLElement {
  connectedCallback() {
    this.classList.add(
      'cursor-pointer',
      'group',
      'overflow-hidden',
      'relative',
      'w-96'
    );
    this.innerHTML = `
      <div class="
        relative
        group-hover:bg-gray-50
        flex
        flex-col
        min-w-0
        p-1
        bg-gray-300
        break-words
        bg-white
        w-full
        shadow-lg
        ease-linear
        transition-all
        duration-700
      ">
        <img
          alt="${this.getAttribute('image-alt')}"
          class="align-middle border-none max-w-full h-auto md:h-72 object-cover object-top"
          src="${this.getAttribute('image-url')}"
        />
      </div>

      <div class="
        absolute
        bg-gray-50
        h-full
        bottom-0
        left-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-700
        w-full
      ">
        <div>
        ${this.getAttribute('title')}
        </div>
        <div>
          ${this.getAttribute('subtitle') || ''}
        </div>
      </div>
    `;
  }
}

export default CardWithFrame
