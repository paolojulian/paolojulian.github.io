class SocialIcon extends HTMLAnchorElement {
    connectedCallback() {
        this.classList.add(
            'rounded',
            'py-2',
            'px-3',
            'bg-gray-500',
            'text-gray-50',
        );
        console.log(this.target);
        this.target = '__blank';
    }
}

export default SocialIcon;
