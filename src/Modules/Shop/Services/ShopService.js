import * as ShopProvider from "../Provider/ShopProvider";

export class ShopService {
  static async productsList() {
    return await ShopProvider.getProducts().then((res) => {
      return res.data;
    });
  }

  static async productDetails(id) {
    return await ShopProvider.getProductDetails(id).then((res) => {
      return res.data;
    });
  }
}
