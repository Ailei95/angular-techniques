import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComponentCanDeactivate} from '../shared/pending-changes-guard/pending-changes-guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements ComponentCanDeactivate, OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: [],
      surname: [],
      age: []
    });
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.form.reset();
  }

  canDeactivate(): Observable < boolean > | boolean {
    return !this.form.dirty;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunload($event: any): void {
    if (!this.canDeactivate()) {
      $event.returnValue = confirm();
    }
  }
}
