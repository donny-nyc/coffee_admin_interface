import { Category, Product } from '../types'
import BaseFetcher from '../../core/infra/base_fetcher';
import { as_query } from '../../utilities';

type ProductAttribute = {
  name: string,
  value: any
};

type ProductRecord = {
  id: string | number;
  categoryId: string;
  name: string;
  attributes: ProductAttribute[];
  description: string;
};

interface ProductResponse {
  categories: {
    total: number,
    resources: Category[];
  },
  products: {
    total: number,
    resources: ProductRecord[]
  }
};

class ProductsClient extends BaseFetcher {
  private products: Product[];
  private categories: Category[];
  private totalProducts: number;

  private readonly defaultProducts: Product[] = [
    new Product("One", "1", [], "First", 1),
    new Product("two", "2", [], "second", 2)
  ];

  private readonly defaultCategories: Category[] = [
    new Category("first", "1", "description"),
    new Category("food and beverages", "2", "description")
  ];

  constructor() {
    super("available_products");

    this.products = this.defaultProducts;
    this.categories = this.defaultCategories;
    this.totalProducts = this.defaultProducts.length;
  }

  public async fetch_available_products(selectedCategories = [] as Category[]) {
    await this.fetch_api_resources(as_query(selectedCategories))
    .then((response: ProductResponse) => {
      this.categories = Category.fromJson(response.categories.resources);
      this.totalProducts = response.products.total;
      this.products = Product.fromJson(response.products.resources);
    }).catch((err: any) => {
      console.error(err);
    });
  }

  public async fetch_product(id: number): Promise<void | Product> {
    await fetch('http://localhost:43210/available_products/' + id)
    .then((raw: Response) => { 
      return raw.json();
    }).then((response: ProductResponse) => {
      this.categories = Category.fromJson(response.categories.resources);
      this.totalProducts = response.products.total;
      this.products = Product.fromJson(response.products.resources);
    }).catch((err: any) => {
      console.error(err);
    });
  }

  public async fetch_categories() {
    await fetch('http://localhost:43210/categories')
    .then((raw: Response) => {
      return raw.json();
    }).then((categoryResponse: {total: number, categories: Category[]}) => {
      this.categories = Category.fromJson(categoryResponse.categories);
    }).catch((err: any) => {
      console.warn(err)
    });
  }

  public get_categories(): Category[] {
    return this.categories;
  }

  public get_products(): Product[] {
    return this.products;
  }

  public no_products(): boolean {
    return this.products.length == 0;
  }

  public get_total_products(): number {
    return this.totalProducts;
  }

  public async delete_all_products() {
    const response = await fetch('http://localhost:43210/available_products/all', {
      method: 'DELETE',
    });

    console.log(response);
  }

  public async delete_products(ids: string[]) {
    const response = await fetch('http://localhost:43210/available_products/' + ids.join(','), {
      method: 'DELETE',
    });

    console.log(response);
  }

  private names: string[] = [
    'Captain Jack',
    'Jamal',
    'Jasper',
    'Gabby',
    'Grunhilda',
    'Raspberry',
    'Ying-ling'
  ];

  private category_ids: number[] = [
    1,
    2,
    3,
  ];

  private descriptions: string[] = [
    'He\'s a funny pirate',
    'Life of the party',
    'Real go-getter',
    'Kind of a jerk',
    'Happy-go-lucky',
    'A real nightmare',
    'Fine. It\'s fine.'
  ];

  public async create_product(product: Product) {
    const response = await fetch('http://localhost:43210/available_products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: product.getName(),
          categoryId: product.getCategoryId(),
          description: product.getDescription(),
          attributes: product.getAttributes()
      })
    });
  }

  public async update_product(product: Product) {
    await fetch(`http://localhost:43210/available_products/${product.getId()}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: product.getName(),
          categoryId: product.getCategoryId(),
          description: product.getDescription(),
          attributes: product.getAttributes()
      })
    }).catch((err: any) => {
      console.warn(err);
    });
  }

  public async create_mock_product() {
    const mockName = this.names[Math.floor(Math.random() * this.names.length)];
    const mockCategory = this.category_ids[Math.floor(Math.random() * this.category_ids.length)];
    const mockDescription = this.descriptions[Math.floor(Math.random() * this.descriptions.length)];

    const response = await fetch('http://localhost:43210/available_products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: mockName,
          categoryId: mockCategory,
          description: mockDescription
      })
    });

    console.log(response);
  }
}

const client = new ProductsClient();

export default client as productsClient;
