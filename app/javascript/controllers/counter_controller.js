import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];

  connect() {
    setInterval(this.refresh, 5000);
  }

  refresh = () => {
    console.log("I'm being refreshed!")
    fetch("/restaurants", { headers: { accept: "application/json" } })
    .then((response) => response.json())
    .then((data) => {
      this.countTarget.innerText = data.restaurants.length;
    });
  }
}
