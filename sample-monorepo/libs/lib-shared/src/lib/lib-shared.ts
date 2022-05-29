
export class MyCustomGreetElement extends HTMLElement {

    public static observedAttributes = ['title'];

    
    attributeChangedCallback() {
      this.innerHTML = `<h1 style="font-weight: bold;font-style: italic; color:red;">Welcome to ${this.title} !!!!</h1>`;
    }
}

customElements.define('my-greeting', MyCustomGreetElement);