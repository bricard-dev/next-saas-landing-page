import arrowRight from '@/assets/arrow-right.svg';
import springImage from '@/assets/spring.png';
import starImage from '@/assets/star.png';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={starImage}
            alt="Star image"
            width={360}
            className="max-md:hidden absolute -top-[137px] -left-[350px]"
          />
          <Image
            src={springImage}
            alt="Spring image"
            width={360}
            className="max-md:hidden absolute -top-[19px] -right-[331px]"
          />
        </div>
        <div className="mt-10 flex justify-center gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <Image src={arrowRight} alt="Arrow right" />
          </button>
        </div>
      </div>
    </section>
  );
}
