import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  private products: Product[] = [
    new Product(1, 'No.1', 1.99, 3.5, 'This is the first product I made', ['clothes']),
    new Product(2, 'No.2', 2.99, 4.5, 'This is the second product I made', ['electric']),
    new Product(3, 'No.3', 3.99, 5.0, 'This is the third product I made', ['food']),
    new Product(4, 'No.4', 4.99, 2.5, 'This is the forth product I made', ['clothes']),
    new Product(5, 'No.5', 5.99, 1.0, 'This is the fifth product I made', ['clothes', 'pants']),
    new Product(6, 'No.6', 6.99, 4.5, 'This is the sixth product I made', ['food', 'drink']),
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-22 22:22:22', 'san', 3, 'fair good'),
    new Comment(2, 1, '2017-02-23 23:22:22', 'si', 4, 'good'),
    new Comment(3, 3, '2017-02-24 00:22:22', 'wu', 5, 'nice'),
    new Comment(4, 2, '2017-02-25 02:22:22', 'liu', 4.5, 'perfect'),
  ];
  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment) => comment.productId == id);
  }
}
export class Comment {

  constructor(public id: number,
              public productId : number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {}

}
export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public descri: string,
              public categories: Array<string>) {
  }
}


