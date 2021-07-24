import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-tenis',
  templateUrl: './tela-tenis.component.html',
  styleUrls: ['./tela-tenis.component.css']
})
export class TelaTenisComponent implements OnInit {

  public channel: any
  public photoNumber: any
  public elemento: any
  public nikeChannel: any
  constructor() { }

  ngOnInit(): void {
    this.channel = "../../assets/nike-1.png"
    this.photoNumber = 1;
    this.elemento = 1
  }

  public channeling(){
    //Limpando primeiro os canais:
    for (let i = 1; i < 7; i++) {
      this.nikeChannel = document.getElementById(i.toString());
      this.nikeChannel.classList.remove('Selected')
    }
    //Estabelecendo o canal selecionado:
    this.nikeChannel = document.getElementById(this.photoNumber);
    this.nikeChannel.classList.add('Selected')
    this.channel = "../../assets/nike-"+this.photoNumber+".png";
  }

  public selectChannel(NUM: Number) {
    this.photoNumber = NUM
    this.channeling()
  }

  public nextChannel (){
    this.photoNumber = this.photoNumber + 1
    if (this.photoNumber>6){
      this.photoNumber = 1
    }
    this.channeling()
  }

  public previousChannel (){
    this.photoNumber = this.photoNumber - 1
    if (this.photoNumber<1){
      this.photoNumber = 6
    }
    this.channeling()
  }
  
  
  // public play (){
  //   this.nextChannel ()
  //   for (var start = 1; start < 12; start++)
  //   setTimeout( () => { this.nextChannel ();  }, 1500 * start);
  // }


}
