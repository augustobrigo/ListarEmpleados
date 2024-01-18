import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Emp } from '../emp';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
paginator: any;
  sort: any;
abrirDialogo() {
throw new Error('Method not implemented.');
}



modificar(emp: Emp) {

}
eliminarEmp(id: number) {

}
dataSource=  new MatTableDataSource<Emp>();



columnas: string[]=['id','nombre','direccion','cargo','edad','imagen','eliminar','modificar'];

constructor(private httpCliente: ServicioEmpleadoService){
  this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x;
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  });


}




applyFilter($event: KeyboardEvent) {

}

}
