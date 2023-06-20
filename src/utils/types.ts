import { GOODS_CATEGORIES } from "./misc";

export type GoodsCategories = typeof GOODS_CATEGORIES[number]

export type CategoryData = {
    id: GoodsCategories
    image: string
}

export type GoodData = {
    id: string
    name: string
    category: GoodsCategories
    price: string
    sale_price?: string
    image: string
}