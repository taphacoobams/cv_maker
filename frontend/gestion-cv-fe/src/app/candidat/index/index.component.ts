import { Candidat } from './../candidat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  candidats: Candidat[] =[];

  constructor() { }

  //s'execute au chargement du composant
  ngOnInit(): void {
    this.chargerCandidats();
  }

  chargerCandidats(){
    this.candidats.push({
      id:1,
      nom:'DIAW',
      prenom:'Amadou',
      adresse:'Dakar Liberte 5',
      email:'test@test.fr',
      telephone:'581-999-1678'
    });
    this.candidats.push({
      id:1,
      nom:'Niang',
      prenom:'Maguette',
      adresse:'Grand Yoff',
      email:'test1@test.fr',
      telephone:'9000-999-1678'
    });
    this.candidats.push({
      id:1,
      nom:'ElWely',
      prenom:'Zeinebou',
      adresse:'Dakar Liberte 4',
      email:'tes2t@test.fr',
      telephone:'78-999-1678'
    });
  }
}
