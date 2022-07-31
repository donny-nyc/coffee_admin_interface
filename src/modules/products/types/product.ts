import type Resource from '../../core/infra/resource';

interface ProductFromJson {
  id: string;
  category_id: number;
  name: string;
  description: string;
};

class Product implements Resource {
  constructor(
    private name: string, 
    private id: string | number, 
    private category_id: number, 
    private description?: string) 
  {}

  public getName(): string {
    return this.name;
  }

  public getId(): string | number{
    return this.id;
  }

  public getCategoryId(): number {
    return this.category_id;
  }

  public getDescription(): string {
    return this.description || '';
  }

  public getResourceType(): string {
    return 'product';
  }

  public static fromJson(data: any[]): Product[] {
    let parsed = [] as Product[];

    data.forEach((rec: ProductFromJson) => {
      parsed.push(new Product(
        rec.name, 
        rec.id, 
        rec.category_id, 
        rec.description)
      );
    });

    return parsed;
  }
};

export default Product;
