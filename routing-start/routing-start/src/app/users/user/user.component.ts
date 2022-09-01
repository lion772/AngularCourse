import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.activatedRoute.snapshot.params["id"],
      name: this.activatedRoute.snapshot.params["name"],
    };
    //Capturing the dynamic values by using an observable - asynchronous task
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.user.id = params["id"];
        this.user.name = params["name"];
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
