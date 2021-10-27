import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-client-tabla',
  templateUrl: './client-tabla.component.html'
})
export class ClientTablaComponent implements OnInit {

  @Input() paises: Country[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
