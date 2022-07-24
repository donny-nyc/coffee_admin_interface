import type Resource from '../../core/infra/resource';

class Category implements Resource {
  constructor(private name: string, private id: number) {}
  public getResourceType(): string {
    return 'category';
  }

  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }

  public static fromJson(data: any[]): Category[] {
    let parsed = [] as Category[];

    data.forEach((rec: {id: number, name: string}) => {
      parsed.push(new Category(rec.name, rec.id));
    });

    return parsed;
  }
};

export default Category;
