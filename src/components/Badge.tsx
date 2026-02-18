import plane from '../assets/img/plane.png'

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-full">
      <img src={plane} alt='not-found' />
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}
