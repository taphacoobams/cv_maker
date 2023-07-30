import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Autres propriétés du composant (titre, description, chemin d'accès au logo, etc.)

  constructor(private router: Router) {}

  // Fonction pour rediriger vers la page du formulaire
  redirectToFormPage() {
    this.router.navigateByUrl('/resume-form');
  }
}
