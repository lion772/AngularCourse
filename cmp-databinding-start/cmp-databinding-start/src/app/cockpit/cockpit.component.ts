import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  //newServerName = "";
  //newServerContent = "";
  @ViewChild("serverNameInput", { static: true }) serverNameInput: ElementRef;
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;
  @Output() buttonClickedEvent = new EventEmitter<{
    type: string;
    name: string;
    content: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServerOrBlueprint(type: string) {
    console.log("server or blueprint: ", type);
    console.log("serverNameInput :", this.serverNameInput);
    this.buttonClickedEvent.emit({
      type: type,
      name: this.serverNameInput.nativeElement.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }
}
