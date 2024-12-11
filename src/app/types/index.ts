interface ProductCategory {
    productCategoryId: number
    description: string
}

interface Product {
    name?: string
    description: string
    price: number
    productCategoryId: number
    productId: number
}

interface ProductWithCategory extends Product {
    categoryName: string
}

interface User {
    email: string
    password: string
    name: string
    userId: number
    userTypeId: number
}

export type { 
    Product,
    ProductCategory,
    ProductWithCategory,
    User 
}