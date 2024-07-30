import { Component, input, Signal } from '@angular/core';
import { TagComponent } from '../../shared/tag/tag.component';
import { BtnComponent } from '../../shared/btn/btn.component';
import { InventoryService } from '../../services/inventory.service';
import { Category } from '../../models/sg';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TagComponent, BtnComponent],
  templateUrl: './products.component.html',
  styleUrl: './prodcuts.component.css',
})
export class ProductsComponent {
  categories: Signal<Array<Category>>;
  newCategoryName: string = '';
  isCreatingCategory: boolean = false;

  constructor(private inventoryService: InventoryService) {
    this.categories = this.inventoryService.getCategoriesSignal();
  }

  ngOnInit() {
    this.inventoryService.getCategories();
  }

  createCategory(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value != '') {
      const newCategory: Category = {
        id: 0,
        name: input.value,
        menuItems: [],
      };
      this.inventoryService.createCategory(newCategory);
      input.value = '';
    } else {
      this.isCreatingCategory = false;
    }
  }
}
