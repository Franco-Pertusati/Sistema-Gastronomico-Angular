import { Component } from '@angular/core';
import { TagComponent } from "../../shared/tag/tag.component";
import { BtnComponent } from "../../shared/btn/btn.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TagComponent, BtnComponent],
  templateUrl: './products.component.html',
  styleUrl: './prodcuts.component.css'
})
export class ProductsComponent {

}
