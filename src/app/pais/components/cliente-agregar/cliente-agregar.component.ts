import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../../interfaces/client.interface';

@Component({
  selector: 'app-cliente-agregar',
  templateUrl: './cliente-agregar.component.html'
})
export class ClienteAgregarComponent  {

  @Input() nuevo: Cliente  = {
    sharedKey:'',
    businessId: '',
    email: '',
    phone: 0,
  }

  @Output() onNuevoCliente: EventEmitter<Cliente> = new EventEmitter();

  agregar() {
    if (this.nuevo.sharedKey.trim().length === 0) { return; }
    console.log(this.nuevo)
    this.onNuevoCliente.emit(this.nuevo);
    this.nuevo = {
      sharedKey:'',
      businessId: '',
      email: '',
      phone: 0,
    };

  }

}
