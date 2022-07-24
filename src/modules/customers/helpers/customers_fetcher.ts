import type Resource from '../../core/infra/resource';
import BaseFetcher from '../../core/infra/base_fetcher';

interface Customer extends Resource {
  id: number;
  name: string;
};

class CustomersFetcher extends BaseFetcher {
  private readonly defaultCustomers = [
    {
      id: 1,
      name: "Client Test User One" 
    },
    {
      id: 2,
      name: "Client Test User Two"
    }
  ];

  // sane defaults so that we can drop in config only when needed
  constructor() {
    super("active_customers");

    this.customers = this.defaultCustomers;
  }

  public async get_active_customers(): [Customer] {
    let response = await this.fetch_api_resources();

    if(response) {
      this.customers = response.customers;
    }

    return this.customers; 
  }
}

const fetcher = new CustomersFetcher();

export default fetcher as customersFetcher;
