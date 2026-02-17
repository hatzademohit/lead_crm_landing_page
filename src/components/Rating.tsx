import { Star } from 'lucide-react';
import { Image } from 'react-bootstrap';

interface RatingProps {
  rating: number;
  total: number;
  icon?: string;
}

export default function Rating({ rating, total, icon }: RatingProps) {
  return (
    <div className="flex items-center gap-3">
      {icon && <div className='lg:h-[40px] lg:w-[40px] w-7 h-7 bg-white content-center rounded'>
        <Image src={icon} alt='not-found' className='m-auto lg:w-4 lg:h-4' />
      </div>
      }
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? 'fill-yellow-600 text-yellow-600' : 'text-gray-300'}
          />
        ))}
        <span className="ml-2 text-sm font-medium text-gray-700">
          {rating}/{total}
        </span>
      </div>
    </div>
  );
}
