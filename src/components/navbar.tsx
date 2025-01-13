import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-cyan-300 mb-24">
   <div className="flex items-center text-lg font-bold">
  <Image
    src='/image/logo.avif'
    alt='logo'
    width={100}
    height={100}
    className='rounded-full'
  />
  <span className="ml-2 text-2xl">Resturant</span>
</div>

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
