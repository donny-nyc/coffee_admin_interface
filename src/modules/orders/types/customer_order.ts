interface Customer {
  id: Number,
  name: string
};

export default interface CustomerOrder {
  id: Number,
  total_amount: Number,   
  customer: Customer,
  created_on: String,
  expected_by: String,
  order_status: String,
  tracking_number: String,
  courier_id: Number,
};

