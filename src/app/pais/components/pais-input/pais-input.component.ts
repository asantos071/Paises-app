import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  termino: string = '';
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();
  @Input() placeholder:string = ""; 

  constructor() { }

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300)).
      subscribe(valor => {
      this.OnDebounce.emit(valor);
    })
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
  buscar() {
    this.OnEnter.emit(this.termino);

  }

}

