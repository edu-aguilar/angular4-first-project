import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pepino', 'recipe description', 'http://media.mercola.com/ImageServer/Public/2014/October/pepino912.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
