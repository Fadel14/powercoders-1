import { Component } from '@angular/core';
import { FactService } from './fact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Cat Facts';
  public factList$: Observable<any>

  constructor(private factService: FactService) { }

  ngOnInit() { 
    this.factList$ = this.factService.getFacts();
  }
}
