import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  constructor() {}
  interval;
  @Output() counterChanged = new EventEmitter<number>();

  ngOnInit(): void {}

  onIncrementNumber(): void {
    this.interval = setInterval(() => {
      this.counterChanged.emit(this.counter);
      this.counter++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
