import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-bold text-blue-600">CloudLMS</h1>
      <ul className="flex gap-6 text-slate-700">
        <li>
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}