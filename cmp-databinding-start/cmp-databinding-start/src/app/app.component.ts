import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { name: "server", type: "server", content: "just a server!" },
    { name: "blueprint", type: "blueprint", content: "just a server!" },
  ];

  parentEventHandlerFunction(valueEmitted) {
    console.log("valueEmittedFromChildComponent", valueEmitted);
    this.serverElements.push(valueEmitted);
  }
}
