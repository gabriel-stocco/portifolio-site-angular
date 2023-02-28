import { Component, OnInit } from '@angular/core';
import { IDados } from './IDados';
import { ApiServiceService } from '../services/api-service.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private apiServiceService :ApiServiceService) { }
  dados!: IDados[] 
  usuarioAtual: IDados | undefined

  ngOnInit(): void {
    setTimeout(() => {
      this.getPlanilha()
    }, 500); 
    
  }

  getPlanilha(){
    this.apiServiceService.getPlanilhaService().subscribe(result => {
      this.dados = result
    })
  }
  
  updatePlanilha(id: number){
    this.usuarioAtual = this.dados.find((usuario)=>{
      return usuario.id === id
    })
    localStorage.setItem('updateCRUD', JSON.stringify(this.usuarioAtual))
  }

  criarUsuario(){
    localStorage.removeItem('updateCRUD')
  }

  delUsuario(id: number) {
    /*this.apiServiceService.delPlanilhaService(id)*/
    
  }
}