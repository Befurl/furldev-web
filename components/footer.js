class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container-fluid footer">
                <div class="row">
                    <div class="col-lg-4 col-12">
                        <p>Welcome</p>
                        <p></p>
                        <a href="">>Hello</a>
                        <p></p>
                        <a href="">>Goodbye</a>
                    </div>

                    <div class="col-lg-4 col-12 footer-link-center">
                        <div class="footer-link-center-before"></div>
                        <p>More Information</p>
                        <p></p>
                        <a href="">>Terms and Conditions</a>
                        <p></p>
                        <a href="">>Contact us</a>
                        <p></p>
                        <a href="">>Delivery</a>
                        <p></p>
                        <a href="">>Returns</a>
                        <p></p>
                        <a href="">>Privacy Policy</a>
                        <p></p>
                        <a href="">>Cookie Policy</a>

                        <div class="footer-link-center-after"></div>
                    </div>

                    <div class="col-lg-4 col-12">
                        <p>Nowhere</p>
                        <p></p>
                        <p><i class="fa fa-phone"></i> 00000 000000</p>
                        <p></p>
                        <p>General Enquiries: email@email.email</p>
                        <p></p>
                        <p>Sales Enquiries:   email1@email.email</p>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);