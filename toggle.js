class Toogle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<button id="btn-toggle">Show!</button>
    <p id="info-box">
      <slot name="main" >More infos!</slot>
      <slot name="secondary" id="info-box"></slot>
    </p>`;
    this._isHidden = false;
    this._openText = "Open";
    this._closeText = "Closed";
    this._textContainer;
    this._buttonContainer;
  }

  connectedCallback() {
    this._buttonContainer = this.shadowRoot.querySelector("#btn-toggle");
    this._textContainer = this.shadowRoot.querySelector("#info-box");
    if (this.hasAttribute("text_open")) {
      this._openText = this.getAttribute("text_open");
    }

    if (this.hasAttribute("text_closed")) {
      this._closeText = this.getAttribute("text_closed");
    }

    document.addEventListener("click", () => {
      this._isHidden = !this._isHidden;
      this._toggle();
    });
    this.shadowRoot.append(this._textContainer);
    this._toggle();
  }

  _toggle() {
    this._textContainer.style.display = this._isHidden ? "block" : "none";
    this._buttonContainer.stextContent = this._isHidden
      ? this._closeText
      : this._openText;
  }
}

customElements.define("uc-toggle", Toogle);
