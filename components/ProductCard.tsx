import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  name: string
  image: string
}

export function ProductCard({ name, image }: ProductCardProps) {
  return (
    <Link
      href={name}
      className="border p-4 bg-white rounded-xl flex flex-col items-center"
    >
      <div className="w-48 h-48 relative">
        <Image
          src={image}
          alt="product image"
          priority
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p> {name}</p>
    </Link>
  )
}
