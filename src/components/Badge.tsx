import plane from '../assets/img/plane.png'
import { Image } from 'react-bootstrap';

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 border bg-white rounded-full">
      <Image src={plane} alt='not-found' />
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}
