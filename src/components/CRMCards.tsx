import { FC } from "react";
import { Image } from "react-bootstrap";

type DescriptionItem = {
    descHeading: string;
    icon: string;
    subHeading: string;
    pillText?: string;
};

type CRMCardsProps = {
    image: string;
    heading: string;
    headingIcon?: string;
    headingpill?: string;
    className?: string;
    description: DescriptionItem[];
};

const CRMCards: FC<CRMCardsProps> = ({
    image,
    heading,
    description,
    headingIcon,
    headingpill,
    className
}) => {
    return (
        <div className={`p-4 rounded-[18px] crm-card lg:p-6 shadow-md bg-white ${className}`}>

            {/* Top Image */}
            <Image src={image} alt={heading} className="w-full mb-4" />

            {/* Heading */}
            <div className="flex flex-wrap items-center gap-2 mb-4 lg:mb-6 lg:gap-4">
                <h2 className="text-lg font-semibold">{heading}</h2>
                {headingIcon && <Image src={headingIcon} alt={heading} className="w-[28px] h-[28px]" />}
                {headingpill &&
                    <span className="px-3 py-1 text-xs flex justify-center items-center text-green-600 bg-green-300 rounded-full h-[32px]">
                        {headingpill}
                    </span>
                }
            </div>

            {/* Description List */}
            <div className="space-y-5">
                {description.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 lg:gap-4">

                        {/* Icon */}
                        <Image src={item.icon} alt="" className="h-[40px] w-[40px] desc-img" />

                        {/* Content */}
                        <div>
                            <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                                <h3 className="text-base font-semibold">
                                    {item.descHeading}
                                </h3>

                                {item.pillText && (
                                    <span className="inline-block px-3 py-1 mb-1 text-xs text-red-600 bg-red-100 rounded-full">
                                        {item.pillText}
                                    </span>
                                )}
                            </div>

                            <p className="text-sm text-gray-600">
                                {item.subHeading}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CRMCards;
