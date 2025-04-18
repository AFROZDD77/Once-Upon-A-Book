import { Component } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { GlobalStateManagementService } from 'src/services/globalStateManagementService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  isSpinner: boolean = false;
  spinnerSubscription!: SubscriptionLike;
  constructor(private readonly globalStateManagementService: GlobalStateManagementService) { }

  ngOnInit(): void {
    this.spinnerSubscription = this.globalStateManagementService.isSpinnerBehaviourSubject.subscribe((updatedSpinnerValue) => { this.isSpinner = updatedSpinnerValue })
  }
}
