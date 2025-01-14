import productShowcase from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="mt-5 section-title">
            A more effective way to track progress
          </h2>
          <p className="mt-5 section-description">
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
