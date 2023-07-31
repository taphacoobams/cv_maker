import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent {
  // Informations personnelles
  firstName!: string;
  lastName!: string;
  address!: string;
  email!: string;
  photo!: File;
  birthdate!: Date;
  telephone!: string;
  gender!: string;
  nationality!: string;
  maritalStatus!: string;
  description!: string;

  // Expérience professionnelle
  experiences: any[] = [];

  addExperience() {
    this.experiences.push({});
  }

  removeExperience(index: number) {
    this.experiences.splice(index, 1);
  }

  // Éducation
  educations: any[] = [];

  addEducation() {
    this.educations.push({});
  }

  removeEducation(index: number) {
    this.educations.splice(index, 1);
  }

  // Compétences
  skills: any[] = [{ name: '', level: 1 },];

  addSkill() {
    this.skills.push({});
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  languages: any[] = [{ name: '', level: 1 },];

  addLanguage() {
    this.languages.push({});
  }

  removeLanguage(index: number) {
    this.languages.splice(index, 1);
  }

  hobbies: any[] = [];

  addHobby() {
    this.hobbies.push({});
  }

  removeHobby(index: number) {
    this.hobbies.splice(index, 1);
  }

  // Define a mapping of numeric levels to labels
  levelLabels: { [key: number]: string } = {
    1: 'Débutant',
    2: 'Intermédiaire',
    3: 'Avancé',
    4: 'Expert'
  };

  // Function to get the level label based on the numeric level
  getSkillLevelLabel(level: number): string {
    return this.levelLabels[level];
  }

  getLanguageLevelLabel(level: number): string {
    return this.levelLabels[level];
  }

}
