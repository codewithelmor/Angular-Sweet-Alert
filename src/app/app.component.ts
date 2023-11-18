import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DeleteHandlerService } from './shared/services/delete-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular-sweet-alert';

  constructor(
    private deleteHandlerService: DeleteHandlerService
  ) {    
  }

  onClick() {
  // Create an observable
  const myObservable = new Observable<number>((observer: Observer<number>) => {
    // Emit values to the observer
    observer.next(1);
    observer.next(2);
    observer.next(3);

    // Complete the observable
    observer.complete();

    // observer.error('Test');
  });

    this.deleteHandlerService.handle(myObservable);
  }

}
