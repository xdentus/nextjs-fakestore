import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <div className="h-24 bg-slate-800 p-6 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/urban_essentials_dark_text.svg"
          alt="store logo"
          width={256}
          height={128}
        />
      </Link>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for items"
          className="max-w-72 p-2 text-lg border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent"
        />
        <button className="p-2 text-lg border border-gray-300 text-white bg-gray-800 rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </div>
      <div className="flex items-center justify-end w-64 h-16 gap-1">
        <p className="text-white text-xl lg:block md:hidden sm:hidden">
          Your Cart
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
      </div>
    </div>
  )
}
