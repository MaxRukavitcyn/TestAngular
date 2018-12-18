import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent implements OnInit {

  name: string;
  model: string;
  color: Color;
  options: string[];
  isEdit = false;

  constructor() {}

  ngOnInit() {
    this.name = 'VAZ';
    this.model = '2101';
    this.color = {
      general: 'black',
        inside: 'white'
    };
    this.options = ['ABS', 'sit belt'];

  }
  carSelect(name, model, colorG, colorI, options): void {
    if (name === 'VAZ') {
      this.ngOnInit();
    }
    this.name = name;
    this.model = model;
    this.color = {
      general: colorG,
      inside: colorI
    };
    this.options = options;
  }

  addOption(value: string): boolean {
    this.options.unshift(value);
    return false;
  }

  deleteOpt(option): void {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
      }
    }
  }
  showEdit(): void {
    this.isEdit = !this.isEdit;
  }

}

interface Color {
  general: string;
  inside: string;

}
