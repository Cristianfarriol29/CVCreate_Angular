import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss']
})
export class InfoHeaderComponent implements OnInit {

  @Input() informacion: string = "";
  @Input() imagen: string = ""
  @Input() ejemplo: any = []

  constructor() { }

  ngOnInit(): void {
  }





}
