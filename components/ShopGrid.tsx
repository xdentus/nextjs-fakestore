import { ProductCard } from './ProductCard'

interface ProductsGridProps {
  productsList: any
}

export function ShopGrid({ productsList }: ProductsGridProps) {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 w-full max-w-6xl">
      {productsList.map((product: any) => {
        return (
          <ProductCard
            name={product.title}
            image={product.image}
            key={product.id}
          />
        )
      })}
    </div>
  )
}
