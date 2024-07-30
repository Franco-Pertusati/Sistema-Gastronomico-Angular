import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Category, MenuItem } from '../models/sg';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private categories: WritableSignal<Array<Category>> = signal([]);

  constructor() {
    const defaultCategory: Category = {
      id: 1,
      name: 'Postres',
      menuItems: [
        {
          id: 1,
          name: 'Tarta de papa y zanahoria',
          price: 4.99,
          state: true,
          ingredients: [
            { id: 1, name: 'Harina' },
            { id: 2, name: 'Chocolate' },
            { id: 3, name: 'Huevos' },
          ],
          creationDate: '2023-01-01',
          modificationDate: '2023-01-01',
        },
        {
          id: 2,
          name: 'Helado de Vainilla',
          price: 2.99,
          state: true,
          ingredients: [
            { id: 4, name: 'Leche' },
            { id: 5, name: 'Azúcar' },
            { id: 6, name: 'Vainilla' },
          ],
          creationDate: '2023-01-01',
          modificationDate: '2023-01-01',
        },
        {
          id: 3,
          name: 'Pastel de Zanahoria',
          price: 3.99,
          state: true,
          ingredients: [
            { id: 7, name: 'Harina' },
            { id: 8, name: 'Zanahoria' },
            { id: 9, name: 'Nueces' },
          ],
          creationDate: '2023-01-01',
          modificationDate: '2023-01-01',
        },
      ],
    };
    this.categories.set([defaultCategory]);
  }

  getCategories(): Array<Category> {
    return this.categories();
  }

  createCategory(newCategory: Category) {
    const currentCategories = this.categories();
    newCategory.id =
      currentCategories.length > 0
        ? Math.max(...currentCategories.map((c) => c.id)) + 1
        : 1;
    this.categories.set([...currentCategories, newCategory]);
  }

  deleteCategory(categoryId: number) {
    this.categories.update((currentCategories) =>
      currentCategories.filter((c) => c.id !== categoryId)
    );
  }

  getCategoriesSignal(): WritableSignal<Array<Category>> {
    return this.categories;
  }


  addMenuItemToCategory(categoryId: number, newMenuItem: MenuItem) {
    this.categories.update((currentCategories) =>
      currentCategories.map((category) => {
        if (category.id === categoryId) {
          newMenuItem.id =
            category.menuItems.length > 0
              ? Math.max(...category.menuItems.map((item) => item.id)) + 1
              : 1;
          return {
            ...category,
            menuItems: [...category.menuItems, newMenuItem],
          };
        }
        return category;
      })
    );
  }

  updateMenuItemInCategory(
    categoryId: number,
    updatedMenuItem: MenuItem
  ) {
    this.categories.update((currentCategories) =>
      currentCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            menuItems: category.menuItems.map((item) =>
              item.id === updatedMenuItem.id ? updatedMenuItem : item
            ),
          };
        }
        return category;
      })
    );
  }

  removeMenuItemFromCategory(categoryId: number, menuItemId: number) {
    this.categories.update((currentCategories) =>
      currentCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            menuItems: category.menuItems.filter(
              (item) => item.id !== menuItemId
            ),
          };
        }
        return category;
      })
    );
  }
}
