import { LitElement, html } from 'lit-element';

class MyApp extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <div>Kuba</div>
        `;
    }
}

window.customElements.define('my-app', MyApp);