class AppButton extends HTMLButtonElement {
  connectedCallback() {
    this.handleClickBind = this.handleClick.bind(this);
    this.handleMouseDownBind = this.handleMouseDown.bind(this);
    this.handleMouseUpBind = this.handleMouseUp.bind(this);

    this.addEventListener('click', this.handleClickBind);
    this.addEventListener('mousedown', this.handleMouseDownBind);
    this.addEventListener('mouseup', this.handleMouseUpBind);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClickBind);
    this.removeEventListener('mousedown', this.handleMouseDownBind);
    this.removeEventListener('mouseup', this.handleMouseUpBind);
  }

  /**
   * Handles click event
   * 
   * @param { MouseEvent } e 
   */
  handleClick(e) {
    /** @type AppButton */
    const element = e.target;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 500);
  }

  /**
   * Handle mousedown event
   *
   * @param { MouseEvent } e 
   */
  handleMouseDown(e) {
    /** @type AppButton */
    const element = e.target;
    element.classList.add('opacity-90');
  }

  /**
   * Handle mouseup event
   *
   * @param { MouseEvent } e 
   */
  handleMouseUp(e) {
    /** @type AppButton */
    const element = e.target;
    element.classList.remove('opacity-90');
  }
}

export default AppButton;
