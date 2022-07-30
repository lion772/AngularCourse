import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  //@Input() element: { name: string; type: string; content: string };
  @Input("srvElement") element: { name: string; type: string; content: string };
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("paragraphContent", { static: true })
  paragraph: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    "I could also use ngAfterContentInit method";
    //console.log("Header value: ", this.header.nativeElement.textContent);
    console.log(
      "Paragraph Content: ",
      this.paragraph.nativeElement.textContent
    );
  }
}
