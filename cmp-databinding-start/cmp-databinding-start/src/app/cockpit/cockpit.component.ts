import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  newServerName = "";
  newServerContent = "";
  serverElements = [];
  @Output() buttonClickedEvent = new EventEmitter<{
    type: string;
    name: string;
    content: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServerOrBlueprint(type: string) {
    console.log("server or blueprint: ", type);
    this.buttonClickedEvent.emit({
      type: type,
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
