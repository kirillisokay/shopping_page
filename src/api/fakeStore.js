export const getProductsFromApi = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => {
    if (res.ok) {
      return res.json();
    }
    else throw new Error('invalid response')
  })

}