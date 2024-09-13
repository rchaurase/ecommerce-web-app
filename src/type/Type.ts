export interface Product {
  id	:	Number;
  title	:	String;
  description	:	String;
  category	:	String;
  price	:	Number;
  discountPercentage :	Number;
  rating	:	Number;
  stock	:	Number;
  sku	: String;	
  images:String[];
  reviews:Review[];
}
export interface Review {
  rating: number;             // The rating of the review (e.g., 1 to 5)
  comment: string;            // The review comment text
  date: string;               // Date of the review in ISO string format
  reviewerName: string;       // The reviewer's name
  reviewerEmail: string;      // The reviewer's email address
}