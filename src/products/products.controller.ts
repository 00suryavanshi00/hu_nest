import { Controller, Get, Post } from "@nestjs/common";
import { Body, Param } from "@nestjs/common/decorators";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService){}

    @Post()
    addProduct(
     @Body('title') prodTitle:string,
     @Body('description') prodDesc:string,
     @Body('price') prodPrice:number) {
        let generatedID = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { id : generatedID }
    }

    @Get()
    getAllProducts(){
        return this.productsService.listProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId:string){
        return this.productsService.getSingleProduct(prodId)
    }
}
