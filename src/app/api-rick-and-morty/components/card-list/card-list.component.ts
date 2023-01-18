import { Component, OnInit, Output} from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {

  constructor(private apiCard: ApiServiceService) { }


  characters: Array<any> = []

  
  ngOnInit(): void {
    this.getCard()
  }
  
  pagNum: number = 1

  passPage(pag: number = 1){
    if(pag === 0){
      this.pagNum = pag + 1 
    }
    else if (pag == 42){
      this.pagNum = pag
    }
    else if (this.pagNum + pag >= 1 && this.pagNum + pag <= 42){
      this.pagNum += pag
    }
    this.getCard(this.pagNum)
  }

  getCard(pag: number = 1){
    this.characters.splice(0, this.characters.length);
    this.apiCard.getCardService(pag).subscribe(result => {
      this.characters = result.results
    })
  }

}
