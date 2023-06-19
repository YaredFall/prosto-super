export const GoodsCategoriesTranscript = new Map([
    ["milk", "Молочная продукция"],
    ["bakery", "Хлеб и выпечка"],
    ["vegetables", "Овощи"],
    ["fruits", "Фрукты"],
    ["cheese", "Сыр"],
    ["meat", "Птица, мясо"],
    ["meat-products", "Мясные изделия"],
    ["seafood", "Рыба и морепродукты"],
    ["icecream", "Мороженное"],
    ["fastfood", "Готовая еда"],
    ["drinks", "Безалкогольные напитки"],
    ["chem", "Бытовая химия"],
] as const)

export const GOODS_CATEGORIES = Array.from(GoodsCategoriesTranscript.keys());