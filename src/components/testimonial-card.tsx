import { Testimonial } from '@/lib/definitions';
import Image from 'next/image';

export default function TestimonialCard({
  text,
  imageSrc,
  name,
  username,
}: Testimonial) {
  return (
    <div className="card">
      <p>{text}</p>
      <div className="mt-5 flex items-center gap-2">
        <div>
          <Image src={imageSrc} alt={name} width={40} height={40} />
        </div>
        <div className="flex flex-col leading-5 tracking-tight">
          <span className="font-medium">{name}</span>
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
}
