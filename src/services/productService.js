    var data = [
        {
          id: "5f40a6baac77a903d8f682c6",
          price: 24.99,
          stock: 13,
          title: "Men's Blue T - ",
          image: "img-1.jpg",
          discount: 5,
          category: "Vegetable",
        },
        {
          id: "5f40a6ba41d9e5044ced586c",
          price: 24.99,
          stock: 21,
          title: "Men's Pink T - ",
          image: "product-6.jpg",
          discount: 10,
          category: "Fruit",
        },
        {
          id: "5f40a6baa9e6e22fa1d5fac4",
          price: 26.99,
          stock: 20,
          title: "Ladies Light Blue T - ",
          image: "img-14.jpg",
          discount: 0,
          category: "Vegetable",
        },
        {
          id: "5f40a6baf0f068a497921d29",
          price: 24.99,
          stock: 10,
          title: "Men's Light Blue T - ",
          image: "img-4.jpg",
          discount: 0,
          category: "Vegetable",
        },
        {
          id: "5f40a866337a3bb00793da52",
          price: 26.99,
          stock: 34,
          title: "Ladies Purple T - ",
          image: "img-5.jpg",
          discount: 4,
          category: "Fruit",
        },
        {
          id: "5f40a866ea0a04e6891b7084",
          price: 29.99,
          stock: 14,
          title: "Bling T - ",
          image: "product-10.jpg",
          discount: 0,
          category: "Fruit",
        },
        {
          id: "5f40a866ea0a04e6891212333",
          price: 26.99,
          stock: 11,
          title: "Ladies Teal T - ",
          image: "img-15.jpg",
          discount: 12,
          minimum: 0,
          category: "Dairy & Eggs",
        },
        {
          id: "5f40a866ea0a04e68911231328",
          price: 28.99,
          stock: 11,
          title: "Patriotic T - ",
          image: "product-15.jpg",
          discount: 12,
          category: "Beverages",
        },
      ];

class ProductService {
    getProducts() {
        //logic to connect and retrieve data from a server
        return data;
    }
}

export default ProductService;
