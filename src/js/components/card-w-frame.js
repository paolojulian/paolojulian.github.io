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
        break-words
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
        bottom-0
        flex
        flex-col
        justify-center
        items-center
        h-full
        left-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-400
        w-full
      ">
        <div class="font-bold text-xl">
          ${this.getAttribute('title')}
        </div>
        <div class="text-red font-semibold">
          ${this.getAttribute('subtitle') || ''}
        </div>
      </div>
    `;
  }
}

export default CardWithFrame
