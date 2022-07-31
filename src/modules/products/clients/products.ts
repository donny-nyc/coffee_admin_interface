import { Category, Product } from '../types'
import BaseFetcher from '../../core/infra/base_fetcher';
import { as_query } from '../../utilities';

interface ProductResponse {
  categories: Category[];
  products: Product[];
};

class ProductsClient extends BaseFetcher {
  private products: Product[];
  private categories: Category[];

  private readonly defaultProducts: Product[] = [
    new Product("One", 1, 1, "First"),
    new Product("two", 2, 2, "second")
  ];

  private readonly defaultCategories: Category[] = [
    new Category("clothing", 1),
    new Category("food and beverages", 2)
  ];

  constructor() {
    super("available_products");

    this.products = this.defaultProducts;
    this.categories = this.defaultCategories;
  }

  public async fetch_available_products(selectedCategories = [] as Category[]) {
    await this.fetch_api_resources(as_query(selectedCategories))
    .then((resources: ProductResponse) => {
      this.categories = Category.fromJson(resources.categories);
      this.products = Product.fromJson(resources.products);
    }).catch((err: any) => {
      console.error(err);
    });
  }

  public async fetch_product(id: number): Promise<Product> {
    return this.fetch_api_resources(undefined, id)
    .catch((err: any) => {
      console.error(err);
    });
  }

  public get_categories(): Category[] {
    return this.categories;
  }

  public get_products(): Product[] {
    return this.products;
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
