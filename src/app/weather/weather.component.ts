import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private apiWeather: ApiServiceService) {}
  cidade :string  = ''
  estado :string = 'sao%20paulo'
  name: string = ''

  tempo!: {
    main: string;
    description: string;
    img :string;
  };

  temperatura!: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
    humidity: number
  }

  vento !: {
    speed:number,
  }
  ngOnInit(): void {
    if (localStorage.getItem('cidade')) {
      this.cidade = localStorage.getItem('cidade')!
      this.estado = localStorage.getItem('estado')!
      this.getWeather(this.cidade ,this.estado)
    }else {
      this.getWeather('sao paulo', 'sao paulo')
    }
  }

  definirImg() {
    if (this.tempo.description === 'Céu limpo') {
      this.tempo.img = 'assets/sol-180.png'
    }else if (this.tempo.description === 'Nuvens dispersas' || this.tempo.description === 'Algumas nuvens') {
      this.tempo.img = 'assets/algumas-nuvens-180.png'
    }else if (this.tempo.description === 'Nublado') {
      this.tempo.img = 'assets/nublado-180.png'
    }else if (this.tempo.description === 'Chuva moderada' || this.tempo.description === 'Chuva leve') {
      this.tempo.img = 'assets/chuva-moderada-180.png'
    }else if (this.tempo.description === 'Chuva forte') {
      this.tempo.img = 'assets/chuva-300.png'
    }
  }

  formatar() {
    this.vento.speed =  Math.round(this.vento.speed * 3.6)
      this.temperatura.temp = Math.round(this.temperatura.temp)
      this.temperatura.feels_like = Math.round(this.temperatura.feels_like)
      this.temperatura.temp_max = Math.ceil(this.temperatura.temp_max)
      this.temperatura.temp_min = Math.floor(this.temperatura.temp_min)
      this.temperatura.humidity = Math.round(this.temperatura.humidity)
      this.tempo.description = this.tempo.description[0].toUpperCase() + this.tempo.description.substring(1)
  }

  getWeather(cidade :string, estado :string) {
    this.apiWeather.getWeatherService(cidade, estado).subscribe(result => {
      this.tempo = result.weather[0]
      this.temperatura = result.main
      this.vento = result.wind
      this.name = result.name
      this.formatar()
      this.definirImg()
      console.log(cidade)
      console.log('ok')
    })
    localStorage.setItem('cidade', cidade)
    localStorage.setItem('estado', estado)
    this.cidade = ''
  }
}
