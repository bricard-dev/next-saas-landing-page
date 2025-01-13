import productShowcase from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto text-center">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="mt-5 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text font-bold text-3xl md:text-[3.375rem] tracking-tighter md:leading-[60px]">
            A more effective way to track progress
          </h2>
          <p className="mt-5 text-[1.375rem] text-[#010D3E] tracking-tight">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image
            src={productShowcase}
            alt="Product showcase"
            className="mt-10"
          />
          <Image
            src={pyramidImage}
            alt="Pyramid image"
            width={262}
            height={262}
            className="hidden md:block absolute -top-36 -right-32"
          />
          <Image
            src={tubeImage}
            alt="Tube image"
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
}
