import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor() { }

  getEmployees(){
    return[
      {name: "Manish", Id:1243},
      {name: "Kamal", Id:6546},
      {name: "Harsha", Id:5465},
      {name: "Joe", Id:8654},
      {name: "Pavan", Id:1565},
      {name: "Lalit", Id:5646},
    ];
  }
}
