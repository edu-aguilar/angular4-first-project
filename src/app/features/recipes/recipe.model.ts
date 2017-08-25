export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(_name: string, _description: string, _imagePath: string) {
    this.name = _name;
    this.description = _description;
    this.imagePath = _imagePath;
  }
}
