'use client';

import productShowcase from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ProductShowcase() {
  const productShowcaseRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productShowcaseRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={productShowcaseRef}
      className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip"
    >
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
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            width={262}
            height={262}
            className="hidden md:block absolute -top-36 -right-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
}
