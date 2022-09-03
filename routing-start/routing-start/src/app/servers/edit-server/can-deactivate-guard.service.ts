import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";
import { rejects } from "assert";
import { resolve } from "dns";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  //The first component must be a component which has our interface implemented and, therefore,
  // our canDeactivate method
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate();
  }
}
