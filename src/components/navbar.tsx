import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-cyan-300">
    <div className="text-lg font-bold">NK,s Collection</div>
    <ul className="flex space-x-6">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/products">product</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
    <div className="flex space-x-4 x">
    <Link href="/login" className="text-[14px] font-[700] text-center text-[#23A6F0]">
          Login / Register
        </Link>
      <span className="cursor-pointer">🛒</span>
    </div>
  </nav>
);

export default Navbar;
