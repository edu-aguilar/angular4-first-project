export class Ingredient {
  public name: string;
  public amount: number;

  constructor(_name: string, _amount: number) {
    this.name = _name;
    this.amount = _amount;
  }
}

//
// TYPESCRIPT SHORTCUT
//
// export class Ingredient {
//   constructor(public name: string, public amount: number) { }
// }
