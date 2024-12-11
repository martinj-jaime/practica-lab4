class ProductForm {
    name!: string
    description!: string
    price!: string
}

class ProductAndCategoryForm {
    name!: string
    description!: string
    price!: string
    productCategoryId!: number
}

class LoginForm {
    email!: string
    password!: string
}

class User {
    email!: string
    password!: string
    name!: string
    userId!: number
    userTypeId!: number
}

export { ProductForm, ProductAndCategoryForm, LoginForm, User }