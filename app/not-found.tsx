import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">404 - Not Found</h2>
      <p className="text-gray-500 mt-2">Could not find requested resource</p>
      <Link href="/" className="mt-4 text-blue-500 underline">
        Return Home
      </Link>
    </div>
  )
}
