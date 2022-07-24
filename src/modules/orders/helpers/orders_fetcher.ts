import type Resource from '../../core/infra/resource';
import type CustomerOrder from '../types/customer_order';
import BaseFetcher from '../../core/infra/base_fetcher';


class OrdersFetcher extends BaseFetcher {
  private readonly defaultOrders = [
    {
      id: 1,
      order_status: "Test",
      customer: {
        id: 1,
        name: "Client Test User",
      },
      created_on: "2022-07-09",
      expected_by: "2022-07-14",
      tracking_number: 0,
      total_amount: 0
    },
  ];

  constructor() {
    super('all_customer_orders');

    this.orders = this.defaultOrders;
  }

  private async get_all_customer_orders(): [CustomerOrder] {
    const response = await this.fetch_api_resources();

    if(response) {
      this.orders = response.customerOrders;
    }

    return this.orders;
  }
}

const fetcher = new OrdersFetcher();

export default fetcher;
