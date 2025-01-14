import checkIcon from '@/assets/check.svg';
import { PricingTier } from '@/lib/definitions';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function PricingCard({
  title,
  monthlyPrice,
  buttonText,
  popular,
  inverse,
  features,
}: PricingTier) {
  return (
    <div
      className={twMerge('card', inverse && 'border-black bg-black text-white')}
    >
      <div className="flex justify-between items-center">
        <h3
          className={twMerge(
            'font-bold text-lg text-black/50 tracking-tighter',
            inverse && 'text-white/50'
          )}
        >
          {title}
        </h3>
        {popular && (
          <div className="px-4 py-1.5 border border-white/20 rounded-xl text-sm">
            <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text">
              Most popular
            </span>
          </div>
        )}
      </div>
      <div className="mt-[30px] flex items-baseline gap-1">
        <span className="font-bold text-4xl tracking-tighter">
          ${monthlyPrice}
        </span>
        <span
          className={twMerge(
            'font-bold text-black/50',
            inverse && 'text-white/50'
          )}
        >
          /month
        </span>
      </div>
      <button
        className={twMerge(
          'btn btn-primary w-full mt-[30px]',
          inverse && 'bg-white text-black'
        )}
      >
        {buttonText}
      </button>
      <ul className="mt-8 flex flex-col gap-5">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-4">
            <Image
              src={checkIcon}
              alt="Check icon"
              width={24}
              height={24}
              className={twMerge('', inverse && 'invert')}
            />
            <span
              className={twMerge('text-sm text-black', inverse && 'text-white')}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
