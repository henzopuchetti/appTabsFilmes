import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Projeto X - Uma Festa Fora de Controle',
      lancamento: '2012',
      duracao: '1h28m',
      classificacao: 8,
      cartaz: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/93/27/20039800.jpg',
      generos: ['Comédia'],
      pagina: '/projetox',
      favorito: false
    },
    {
      nome: 'Gente Grande',
      lancamento: '2010',
      duracao: '1h42m',
      classificacao: 10,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/f/fe/Grownupsmovie.jpg',
      generos: ['Comédia'],
      pagina: '/gentegrande',
      favorito: false
    },
    {
      nome: 'Arremessando Alto',
      lancamento: '2022',
      duracao: '1h57m',
      classificacao: 8,
      cartaz: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/05/25/20/17/5781885.jpg',
      generos: ['Esporte','Drama'],
      pagina: '/arremessandoalto',
      favorito: false
    }
  ];

}
