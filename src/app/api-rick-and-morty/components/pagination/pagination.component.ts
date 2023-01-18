import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

export class PaginationComponent implements OnInit {

  @Output() pagAtt: EventEmitter<any> = new EventEmitter()
  @Input() pagNum!: number


  constructor() { 
  }
  ngOnInit(): void {
  }

  passPageEmit(pag: number){
    this.pagAtt.emit(pag)
  }

}
