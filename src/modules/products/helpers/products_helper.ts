import type Resource from '../../core/infra/resource';
import BaseFetcher from '../../core/infra/base_fetcher';

interface Product extends Resource {
  id: number;
  name: string;
  description?: string;
}

class ProductsFetcher extends BaseFetcher {
  private readonly defaultProducts = [
    {id: 1, name: "One", description: "First"},
    {
      id: 2,
      name: "two",
      description: "second"
    }
  ];

  constructor(api_host?: string, api_port: number) {
    super(api_host, api_port, "products");

    this.products = this.defaultProducts;
  }

  public async get(): [Product] {
    const api_url = this.prepare_api_url();

    if(api_url) {
      fetch(api_url, {
        headers: {
          'Content-type': 'application/json'
        }
      }).then((res) => res.json()).then((response) => {
        this.products = response.products;
      }).catch((error) => {
        console.log(error);
      });
    }

    return this.products;
  }
}

const api_host = import.meta.env.VITE_PRODUCTS_HOST;
const api_port = import.meta.env.VITE_PRODUCTS_PORT;

const fetcher = new ProductsFetcher(
//  api_host,
//  api_port
);

export default fetcher as productsFetcher;
