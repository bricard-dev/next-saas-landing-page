import logo from '@/assets/logosaas.png';
import socialInstagramIcon from '@/assets/social-insta.svg';
import socialLinkedinIcon from '@/assets/social-linkedin.svg';
import socialPinterestIcon from '@/assets/social-pin.svg';
import socialXIcon from '@/assets/social-x.svg';
import socialYouTubeIcon from '@/assets/social-youtube.svg';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Features',
    href: '#',
  },
  {
    label: 'Customers',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
  {
    label: 'Help',
    href: '#',
  },
  {
    label: 'Careers',
    href: '#',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 bg-black text-center text-[#BCBCBC] text-sm">
      <div className="container">
        <div className="relative inline-flex before:content-[''] before:w-full before:absolute before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
          <Image
            src={logo}
            alt="SaaS Logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>
        <nav className="mt-6 flex flex-col md:flex-row justify-center gap-6">
          {navLinks.map((navLink) => (
            <Link key={navLink.label} href={navLink.href}>
              {navLink.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#">
            <Image src={socialXIcon} alt="Social X icon" className="invert" />
          </a>
          <a href="#">
            <Image
              src={socialInstagramIcon}
              alt="Social Instagram icon"
              className="invert"
            />
          </a>
          <a href="#">
            <Image
              src={socialLinkedinIcon}
              alt="Social Linkedin icon"
              className="invert"
            />
          </a>
          <a href="#">
            <Image
              src={socialPinterestIcon}
              alt="Social Pinterest icon"
              className="invert"
            />
          </a>
          <a href="#">
            <Image
              src={socialYouTubeIcon}
              alt="Social YouTube icon"
              className="invert"
            />
          </a>
        </div>
        <p className="mt-6">&copy; {year} SaaS, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
