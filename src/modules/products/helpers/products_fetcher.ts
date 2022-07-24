import { Category, Product } from '../types'
import BaseFetcher from '../../core/infra/base_fetcher';
import { as_query } from '../../utilities';

interface ProductResponse {
  categories: Category[];
  products: Product[];
};

class ProductsFetcher extends BaseFetcher {
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

  public get_categories(): Category[] {
    return this.categories;
  }

  public get_products(): Product[] {
    return this.products;
  }
}

const fetcher = new ProductsFetcher();

export default fetcher as productsFetcher;
