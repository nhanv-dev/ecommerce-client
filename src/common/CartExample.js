import productExample, {productExample2} from "./ProductExample";

const cart = {
    _id: '123',
    userId: 'nhanvapp',
    items: [
        {product: {...productExample}, quantity: 1},
        {product: {...productExample2}, quantity: 1},
        {product: {...productExample}, quantity: 1},
        {product: {...productExample2}, quantity: 1},
    ]
}

export default cart