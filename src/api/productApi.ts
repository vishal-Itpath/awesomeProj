import {api} from './rtkapi';

type ProductTypes = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const productApi = api.injectEndpoints({
  endpoints: build => ({
    listProducts: build.query<ProductTypes[], void>({
      providesTags: ['Products'],
      query: () => '/products',
    }),
  }),
});
