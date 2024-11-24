import { Dispatch } from "redux";
import axios from "axios";
import { ProductTypes } from "../../components/Product/ProductTypes";
import { SET_PRODUCTS,SET_LOADING,SET_HAS_MORE,SET_SKIP,RESET_PRODUCTS } from "../Constants/ProductConstants";

// Action creators
export const setProducts = (products: any[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setHasMore = (hasMore: boolean) => ({
  type: SET_HAS_MORE,
  payload: hasMore,
});

export const setSkip = (skip: number) => ({
  type: SET_SKIP,
  payload: skip,
});

export const resetProducts = () => ({
  type: RESET_PRODUCTS,
});

// Thunk for fetching products
export const fetchProducts = (query: string, skip: number) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));

  try {
    const endpoint = query
      ? `https://dummyjson.com/products/search?q=${query}&skip=${skip}&limit=20`
      : `https://dummyjson.com/products?skip=${skip}&limit=20`;

    const response = await axios.get(endpoint);
    const newProducts = response.data.products;

    if (newProducts.length === 0) {
      dispatch(setHasMore(false));  // No more products to load
    } else {
      // Add new products to the existing products list
      dispatch(setProducts(newProducts));  // Add new products to state
      dispatch(setSkip(skip + 20));  // Update skip for the next fetch
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    dispatch(setLoading(false));  // End loading state
  }
};

