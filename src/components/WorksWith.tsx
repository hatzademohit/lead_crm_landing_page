import Hubspot from '../assets/img/Hubspot.png'
import Pipedrive from '../assets/img/Pipedrive.png'
import Salesforce from '../assets/img/Salesforce.png'
import { Image } from 'react-bootstrap';

interface LogoItem {
  id: string;
  name: string;
  icon: string;
  bgColor: string;
}

interface WorksWithProps {
  logos?: LogoItem[];
}

const defaultLogos: LogoItem[] = [
  {
    id: 'slack',
    name: 'Slack',
    icon: Hubspot,
    bgColor: 'bg-[#FF7A59]',
  },
  {
    id: 'producthunt',
    name: 'Product Hunt',
    icon: Pipedrive,
    bgColor: 'bg-[#21844A]',
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    icon: Salesforce,
    bgColor: 'bg-[#FFFFFF]',
  },
];

export default function WorksWith({ logos = defaultLogos }: WorksWithProps) {
  return (
    <div className="flex items-center gap-3 bg-[linear-gradient(90.37deg,#5ED3FF_-12.35%,#6EC6FE_0.67%,#EB65F4_100.24%,#FD58F2_114.28%)] lg:py-[19px] lg:px-[22px] md:p-3 p-2 rounded-[10px] lg:rounded-[20px]">
      <span className="text-gray-600 lg:text-[22px] font-medium lg:mr-[42px]">Works with</span>
      <div className="flex gap-3 lg:gap-[20px]">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className={`${logo.bgColor} w-12 h-12 p-2.5 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow lg:w-[60px] lg:h-[60px]`}
            title={logo.name}
          >
            <Image src={logo.icon} alt={logo.name} className='h-auto w-100' />
          </div>
        ))}
      </div>
    </div>
  );
}
