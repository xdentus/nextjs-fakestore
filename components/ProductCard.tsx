import Link from 'next/link'

interface ProductCardProps {
  name: string
}

export function ProductCard({ name }: ProductCardProps) {
  return (
    <Link href={name}>
      <p> {name}</p>
    </Link>
  )
}
