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
      name: "Steve" 
    },
    {
      id: 2,
      name: "Stevanie"
    }
  ];

  // sane defaults so that we can drop in config only when needed
  constructor(api_host?: string, api_port?: number) {
    super(api_host, api_port, "customers");

    this.customers = this.defaultCustomers;
  }

  public async get(): [Customer] {
    const api_url = this.prepare_api_url();

    if(api_url) {
      fetch(api_url, {
        headers: {
          'Content-type': 'application/json'
        }
      }).then((res) => res.json()).then((response) => {
        this.customers = response.customers;
      }).catch((error) => {
        console.log(error);
      });
    }


    return this.customers; 

  }
}

const api_host = import.meta.env.VITE_CUSTOMERS_HOST;
const api_port = import.meta.env.VITE_CUSTOMERS_PORT;

const fetcher = new CustomersFetcher(
//  api_host,
//  api_port
);

export default fetcher as customersFetcher;
