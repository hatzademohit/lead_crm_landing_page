import { Star } from "lucide-react";

interface FeatureCardProps {
	icon: string;
	description: string;
	userImage: string;
	userName: string;
}

export default function FeatureCard({ description, icon, userImage, userName }: FeatureCardProps) {
	return (
		<div className="border border-[#EEEFFFFC] rounded-[20px] bg-[#F9F0F8] lg:p-6 p-2 sm:p-4 flex-none feature-card">
			<div className="flex flex-col h-full">
				<div className="w-full">
					<p className="font-semibold">{description}</p>
					<div className="flex gap-1.5 mt-3.5">
						<div className="w-[30px] h-[30px] rotate-0 opacity-100 gap-[8.33px] rounded-[6.67px] p-[5px] bg-white shadow-[0px_4px_34px_0px_#ADADAD1A] mr-2">
							<img src={icon} alt={userName} />
						</div>
						<Star className="w-6 h-6 text-[#090f4e]" fill="#090f4e" />
						<Star className="w-6 h-6 text-[#090f4e]" fill="#090f4e" />
						<Star className="w-6 h-6 text-[#090f4e]" fill="#090f4e" />
						<Star className="w-6 h-6 text-[#090f4e]" fill="#090f4e" />
						<Star className="w-6 h-6 text-[#090f4e]" fill="#090f4e" />
					</div>
				</div>
				<div className="w-full mt-auto">
					<hr className="lg:mt-[100px] flex flex-col md:mt-[60px] mt-10 mb-5 border-t-[1px] border-t-[#7A7A7A4F]" />
					<div className="flex gap-2">
						<div className="w-[44px] h-[44px] rounded-full">
							<img src={userImage} alt={userName} className="rounded-full" />
						</div>
						<div>
							<p className="lg:text-[18px] md:text-base text-sm font-semibold">{userName}</p>
							<span className="text-[14px] text-[#696969]">On Capterra</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
