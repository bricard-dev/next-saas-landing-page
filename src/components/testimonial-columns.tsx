import { Testimonial } from '@/lib/definitions';
import { twMerge } from 'tailwind-merge';
import TestimonialCard from './testimonial-card';

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsColumn({
  className,
  testimonials,
}: TestimonialsColumnProps) {
  return (
    <div
      className={twMerge(
        'mt-10 px-[5px] flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]',
        className
      )}
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.username} {...testimonial} />
      ))}
    </div>
  );
}
