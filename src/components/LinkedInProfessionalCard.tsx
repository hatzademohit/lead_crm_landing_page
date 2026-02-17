import { ChevronRight } from "lucide-react";
import { FC } from "react";

type LinkedInProfessionalCardProps = {
    heading: string;
    description: string;
    cardBg: string;
    image: string;
};

const LinkedInProfessionalCard: FC<LinkedInProfessionalCardProps> = ({
    heading,
    description,
    cardBg,
    image,
}) => {
    return (
        <div className={`lg:p-4 p-3 w-full rounded-xl shadow-[0px_2px_8px_0px_#63636333] ${cardBg} linkedin-professional-card`}>
            <h3 className="lg:text-[22px] md:text-lg text-base font-semibold mb-3">{heading}</h3>
            <a href="#" className="text-[#097737]">
                <p className={`font-semibold lg:text-lg text-base mb-3 text-[#097737] flex gap-1 items-center`}>{description} <ChevronRight /></p>
            </a>
            <img src={image} alt="not-found" className="rounded-xl" />
        </div>
    )
}

export default LinkedInProfessionalCard;