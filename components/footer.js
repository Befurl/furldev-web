class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container-fluid footer">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <p>Welcome</p>
                        <p></p>
                        <a href="">Projects</a>
                        <p></p>
                        <a href="">News</a>
                        <p></p>
                        <a href ="">About</a>
                    </div>



                    <div class="col-lg-6 cofl-12">
                        <p>Contact</p>
                        <p></p>
                        <p>Enquiries: matthew@furldev.com</p>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);