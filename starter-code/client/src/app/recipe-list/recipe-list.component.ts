import { Component, OnInit } from '@angular/core';
import { AllRecipesService } from '../services/all-recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ AllRecipesService ]
})

export class RecipeListComponent implements OnInit {
  items: any;
  constructor(private list: AllRecipesService) { }

  ngOnInit() {
    this.list.getList()
    .subscribe((items)=>{
      return this.items = items;
    })
  }

}
