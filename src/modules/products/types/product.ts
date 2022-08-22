import type Resource from '../../core/infra/resource';

type ProductAttribute = {
  name: string,
  value: any
};

interface ProductFromJson {
  id: string | number;
  categoryId: string;
  name: string;
  attributes: ProductAttribute[];
  description: string;
};

class Product implements Resource {
  constructor(
    private name: string, 
    private categoryId: string, 
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

  public getAttributes(): {[key: string]: any} {
    return this.attributes;
  }

  public getCategoryId(): string {
    return this.categoryId;
  }

  public getDescription(): string {
    return this.description || '';
  }

  public getResourceType(): string {
    return 'product';
  }

  public static fromJson(records: ProductFromJson[]): Product[] {
    if(!records) {
      console.warn('cannot parse empty product data');
      return [];
    }

    let parsed = [] as Product[];

    records.forEach((rec: ProductFromJson) => {
      parsed.push(new Product(
        rec.name, 
        rec.categoryId, 
        rec.attributes,
        rec.description,
        rec.id)
      );
    });

    return parsed;
  }
};

export default Product;
