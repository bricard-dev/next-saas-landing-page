'use client';

import { Testimonial } from '@/lib/definitions';
import { motion } from 'framer-motion';
import React from 'react';
import TestimonialCard from './testimonial-card';

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export default function TestimonialsColumn({
  className,
  testimonials,
  duration,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
