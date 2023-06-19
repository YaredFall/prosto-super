import { GOODS_CATEGORIES } from "./misc";

export type GoodsCategories = typeof GOODS_CATEGORIES[number]

export type CategoryData = {
    id: GoodsCategories
    image: string
}