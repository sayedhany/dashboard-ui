export interface Order {
  image: string;
  itemName: string;
  quantity: number;
  orderDate: string;
  amount: string;
  status: 'Pending' | 'Approved' | 'In Process';
}