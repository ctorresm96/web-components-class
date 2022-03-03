class confirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", (event) => {
      if (!confirm("Do you really want to leave?")) {
        event.preventDefault();
      }
    });
  }
}

customElements.define("uc-anchor", confirmLink, { extends: "a" });
