'use client';

import arrowRight from '@/assets/arrow-right.svg';
import springImage from '@/assets/spring.png';
import starImage from '@/assets/star.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function CallToAction() {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={ctaRef}
      className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star image"
            width={360}
            className="max-md:hidden absolute -top-[137px] -left-[350px]"
            style={{ translateY: translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring image"
            width={360}
            className="max-md:hidden absolute -top-[19px] -right-[331px]"
            style={{ translateY: translateY }}
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
