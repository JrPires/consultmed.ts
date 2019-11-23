import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../servico/medicos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  private medico: Medico[];
  constructor(private medicoService: MedicosService) { }

  ngOnInit() {
    this.medicoService.listar().subscribe(medicos => console.log(medicos));
    this.medicos = medicos;
  }
}
