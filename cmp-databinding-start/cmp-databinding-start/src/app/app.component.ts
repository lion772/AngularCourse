import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  counter: number;
  serverElements = [
    { name: "server", type: "server", content: "just a server!" },
    { name: "blueprint", type: "blueprint", content: "just a server!" },
  ];

  parentEventHandlerFunction(valueEmitted) {
    console.log("valueEmittedFromChildComponent", valueEmitted);
    this.serverElements.push(valueEmitted);
  }

  gameControlHandler(valueEmitted) {
    this.counter = valueEmitted;
    console.log("Value Emitted From Game Control Component", this.counter);
    this.counter % 2 === 0
      ? this.evenNumbers.push(this.counter)
      : this.oddNumbers.push(this.counter);
  }
}
