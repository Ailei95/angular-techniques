import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComponentCanDeactivate} from '../shared/pending-changes-guard/pending-changes-guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements ComponentCanDeactivate, OnInit, OnDestroy {

  form: FormGroup;

  callback: (event) => void;

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
    window.addEventListener('beforeunload', this.callback = (event) => {
      if (!this.canDeactivate()) {
        event.returnValue = confirm();
      }
    }, false);
  }

  reset(): void {
    this.form.reset();
  }

  canDeactivate(): Observable < boolean > | boolean {
    return !this.form.dirty;
  }

  ngOnDestroy(): void {
    window.removeEventListener('beforeunload', this.callback, false);
  }
}
