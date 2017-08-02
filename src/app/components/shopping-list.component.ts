//Tutorial -----> https://www.youtube.com/watch?v=wZ_5des_6_c


import { Component } from '@angular/core';


@Component({
    selector:'shpping-list',
    template:`<h3>Shopping list </h3>
       <ul>
          <li *ngFor="let list of lists" (click)='populateItem(list)'>
                 {{list.name}}  
          </li>
       </ul>
       <input type="text"  [(ngModel)]="selectedItem.name" />
       <button (click)="deleteItem()" >Delete the item</button><br/>
       <input type="text" #selectItem  [(ngModel)]="selectedItem.name" />
       <button (click)="addItem(selectItem.value)" >Add the item</button>
    `
})
export class ShoppingListComponent{
    public lists : Product[];
    public selectedItem:Product;
    constructor(){
        this.lists =  [{
            name:'milk'
        },{
            name:'chocolate'
        },{
            name:'Milk Powder'
        }];
        this.selectedItem = {name:''};
    }
    populateItem( item:Product ){
        this.selectedItem = item;
    }
    addItem(item:string){
        this.lists.push({
            name:item
        });
    }
    deleteItem(){
        let index: number = this.lists.indexOf( this.selectedItem );
        if( index !== -1 ){
            this.lists.splice(index, 1);            
        }
    }
}

interface Product{
    name: string;
}