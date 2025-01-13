import arrowRight from '@/assets/arrow-right.svg';
import logo from '@/assets/logosaas.png';
import menuIcon from '@/assets/menu.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="py-3 flex justify-center items-center gap-3 bg-black text-white text-sm">
        <p className="max-md:hidden text-white/60">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <Image
            src={arrowRight}
            alt="Arrow right"
            width={16}
            height={16}
            className="inline-flex justify-center items-center invert"
          />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={logo} alt="SaaS Logo" width={40} height={40} />
            <Image
              src={menuIcon}
              alt="Menu Icon"
              width={20}
              height={20}
              className="md:hidden"
            />
            <nav className="hidden md:flex items-center gap-6 text-black/60">
              <Link href="#">About</Link>
              <Link href="#">Features</Link>
              <Link href="#">Customers</Link>
              <Link href="#">Updates</Link>
              <Link href="#">Help</Link>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
