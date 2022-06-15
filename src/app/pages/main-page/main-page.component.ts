import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personaje } from 'src/app/interfaces/Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] | undefined;
  personajesCopy: Personaje[] | undefined;
  constructor(public http: HttpClient) {
    this.getData();
  }

  ngOnInit(): void {}

  async getData() {
    await this.http
      .get<any>(environment.apiUrl + '/characters')
      .subscribe((res) => {
        this.personajes = res.map((r:any) => {
          return{
            char_id: r.char_id,
            name:r.name,
            nickname: r.nickname,
            img:r.img,
            status:r.status,
            occupation:r.occupation
          }
        });
        this.personajesCopy = this.personajes;
      });
  }

  filter(e: any) {
    const search: string = e.target.value;
    this.personajes = this.personajesCopy?.filter(({name}:Personaje) =>{
      return name?.toLowerCase().includes(search.toLowerCase());
    })
  }
}
