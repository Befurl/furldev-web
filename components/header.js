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
                        <a href="index.html">Home</a>
                        <a href="news.html">News</a>
                        <a href="about.html">About</a>
                        <a href="projects.html">Projects</a>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define('header-component', Header);