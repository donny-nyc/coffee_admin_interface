import type Resource from '../../core/infra/resource';

type ProductAttribute = {
  name: string,
  value: string
};

interface ProductFromJson {
  id: string | number;
  category_id: number;
  name: string;
  attributes: ProductAttribute[];
  description: string;
};

class Product implements Resource {
  constructor(
    private name: string, 
    private category_id: number, 
    private attributes  = [] as ProductAttribute[],
    private description?: string, 
    private id?: string | number) 
  {}

  public getName(): string {
    return this.name;
  }

  public getId(): string | number | undefined {
    return this.id;
  }

  public getAttributes(): ProductAttribute[] {
    return this.attributes;
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
        rec.category_id, 
        rec.attributes,
        rec.description,
        rec.id)
      );
    });

    return parsed;
  }
};

export default Product;
