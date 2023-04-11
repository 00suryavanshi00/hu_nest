import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsService{
    private products: Product[] = [];

    insertProduct(title:string , desc:string, price:number){
        let prodID = new Date().toString()
        let newProduct = new Product(prodID, title, desc, price)
        this.products.push(newProduct)
        return prodID;
    }

    listProducts(){
        return [...this.products]
    }

    getSingleProduct(productId:string){
        let product = this.products.find((prod) => prod.id == productId)
        if(!product) throw new NotFoundException('Could not find the product you searched for ')
        return {...product}
    }
}