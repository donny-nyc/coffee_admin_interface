import type Resource from '../../core/infra/resource';
import BaseFetcher from '../../core/infra/base_fetcher';

interface Order extends Resource {
  id: number;
  status: string;
  created_at: string;
  due_by: string;
};

class OrdersFetcher extends BaseFetcher {
  constructor() {
    super();
  }

  public async get(): [Order] {
    return [
      {
        id: 1,
        status: "pending",
        created_at: "2022-07-09",
        due_by: "2022-07-14"
      },
    ];
  }
}

const fetcher = new OrdersFetcher();

export default fetcher;
