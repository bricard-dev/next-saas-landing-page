export type PricingTier = {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
};

export type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};
