import { ProductItem } from "../ProductItem/ProductItem"
import { List } from "./ProductList.styled"

export function ProductList({productData}) {
    return (
        <List>
            {productData.map(({img, tag, list}) => (
                <ProductItem img={img} tag={tag} list={list} />
            ))}
        </List>
    )
}