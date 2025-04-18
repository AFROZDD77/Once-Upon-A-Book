import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class GlobalStateManagementService {
    isSpinnerBehaviourSubject = new BehaviorSubject(false);

    setSpinner(value: boolean) {
        this.isSpinnerBehaviourSubject.next(value);
    }

    getSpinner(): boolean {
        return this.isSpinnerBehaviourSubject.value;
    }
}