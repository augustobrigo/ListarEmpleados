import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';
import { Emp } from '../emp';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
abrirDialogo() {
const dialogo=this.dialogo1.open(CuadroDialogoComponent, {data:new Emp(0, '', '','',0,'')})
dialogo.afterClosed().subscribe(x=>{console.log("Hemos abierto el dialogo "+x);
if(x!=undefined){
  this.httpCliente.insertarEmpleado(x).subscribe(resultado=>this.empleado);
}
})

}

empleado!:Emp;


modificar(emp: Emp) {

}
eliminarEmp(id: number) {

}
dataSource=  new MatTableDataSource<Emp>();



columnas: string[]=['id','nombre','direccion','cargo','edad','imagen','eliminar','modificar'];

constructor(private httpCliente: ServicioEmpleadoService, public dialogo1: MatDialog){
  this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x;
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  });


}

@ViewChild(MatTable) tabla1!: MatTable<Emp>;
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;



applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }

}

}
