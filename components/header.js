class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class ="header-outer">
                <div class="header-inner">
                    <div class="header-logo"><a href = "index.html">FURL</a></div>
                    <nav class="header-nav">
                        <a href="#">Home</a>
                        <a href="#">Contact</a>
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define('header-component', Header);