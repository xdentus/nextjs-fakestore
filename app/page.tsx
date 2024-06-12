import { ShopGrid } from '@/components/ShopGrid'
import { getProducts } from '@/lib/fakestoreAPI'

export default async function Home() {
  const productsList = await getProducts()
  return (
    <div className="bg-gray-600 p-6 flex justify-center">
      <ShopGrid productsList={productsList} />
    </div>
  )
}
