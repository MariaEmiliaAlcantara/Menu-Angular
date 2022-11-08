import { Component, OnInit } from '@angular/core';
import { IAdditionals } from 'src/assets/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent  {

  additionals: IAdditionals[] = [
    { name: 'Leite condensado', camelCaseName: "leiteCondensado", checked: false},
    { name: 'Banana', camelCaseName: "banana", checked: false },
    { name: 'Granola', camelCaseName: "granola", checked: false },
    { name: 'Morango', camelCaseName: "morango", checked: false },
    { name: 'Leite em Pó', camelCaseName: "leiteEmPo", checked: false },
    { name: 'Côco', camelCaseName: "coco", checked: false },
    { name: 'Castanha de Caju', camelCaseName: "castanhaDeCaju", checked: false },
  ]

  limitAdditionals: number = 3;
  selectedItems: number = 0;

  countChecks(item: IAdditionals) {
    item.checked = !item.checked;
    if (item.checked) {
      this.selectedItems++
    } else {
      this.selectedItems--
    }

    console.log(this.selectedItems)
  }

}
