class AppProgressBar extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute('title');
    this.fillPercentage = Number(this.getAttribute('fill-percentage'));

    this.className = 'flex items-stretch mb-2 rounded-lg overflow-hidden';
    this.innerHTML = `
        <div class="bg-red bg-opacity-80 py-2 w-44 flex justify-center">${this.title}</div>
        <div class="background bg-gray-300 w-full flex items-center">
          <div class="thumb bg-red h-full" style="width: ${this.fillPercentage}%;">&nbsp;</div>
          <span class="px-2 text-gray-600 text-sm">${this.fillPercentage}%</span>
        </div>
    `;
  }
}

export default AppProgressBar;
