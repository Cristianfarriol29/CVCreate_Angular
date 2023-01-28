import { Component, Input, OnInit } from '@angular/core';
import { deleteExperience } from 'src/app/helpers/helpers';

@Component({
  selector: 'app-experiences-cards',
  templateUrl: './experiences-cards.component.html',
  styleUrls: ['./experiences-cards.component.scss']
})
export class ExperiencesCardsComponent implements OnInit {


  @Input() experiences: any = []

  constructor() { }

  ngOnInit(): void {

  }

  deleteExperience(experience: string, experiences: string){
      deleteExperience(experience, experiences)
    return;
  }




}
