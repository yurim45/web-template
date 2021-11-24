import axios from 'axios';

const API_URL: string =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

export type Product = [
  {
    id: number;
    brand: string;
    name: string;
    price: number;
    price_sign: number | null;
    currency: string | null;
    image_link: string;
    product_link: string;
    website_link: string;
    description: string;
    rating: number;
    category: string | null;
    product_type: string;
    tag_list: string[];
    created_at: any;
    updated_at: any;
    product_api_url: string;
    api_featured_image: string;
    product_colors: string[];
  }
];

export const getData = async () => {
  const { data } = await axios.get<Product[]>(API_URL);
  return data;
};

export default {
  getData,
};
