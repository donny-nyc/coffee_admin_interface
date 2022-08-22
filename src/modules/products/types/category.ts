import type Resource from '../../core/infra/resource';

class Category implements Resource {
  constructor(private name: string, private id: string, private description?: string) {}
  public getResourceType(): string {
    return 'category';
  }

  public getName(): string {
    return this.name;
  }

  public getId(): string {
    return this.id;
  }

  public getDescription(): string {
    return this.description || "";
  }

  public static fromJson(data: any[]): Category[] {
    if(!data) {
      console.error('cannot parse empty response');
      return [];
    }

    let parsed = [] as Category[];

    data.forEach((rec: {id: string, name: string}) => {
      parsed.push(new Category(rec.name, rec.id));
    });

    return parsed;
  }
};

export default Category;
