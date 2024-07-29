import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Category } from '../models/sg';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private categories: WritableSignal<Array<Category>> = signal([]);

  getCategories(): Array<Category> {
    return this.categories();
  }

  createCategory(newCategory: Category) {
    const currentCategories = this.categories();
    newCategory.id = currentCategories.length > 0 ? Math.max(...currentCategories.map(c => c.id)) + 1 : 1;
    this.categories.set([...currentCategories, newCategory]);
  }
}
