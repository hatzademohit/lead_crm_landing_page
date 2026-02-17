import LinkedInProfessionalCard from "./LinkedInProfessionalCard"
import { LinkedInProfessionalCardData1, LinkedInProfessionalCardData2, LinkedInProfessionalCardData3, LinkedInProfessionalCardData4 } from "../assets/json/LinkedInProfessionalCard"
import TabsComponent from "./TabsComponent"
import buldDataImg from '../assets/img/crm-data.png'
import buldDataSyncImg from '../assets/img/crm-data-sync.png'
import bulkExport from '../assets/img/bulk-export.png'
import aiProductivity from '../assets/img/airesponse.png'
import LeftImage from '../assets/img/left-image.png'

interface TabItem {
	label: string;
	icon: string;
	content: React.ReactNode;
}

function CompleteLinkedIn() {

	const CRMDataEnrichmentTab = LinkedInProfessionalCardData1 && LinkedInProfessionalCardData1.map((item, index) => (
		<LinkedInProfessionalCard
			key={index}
			heading={item.heading}
			description={item.description}
			cardBg={item.cardBg}
			image={item.image}
		/>
	))

	const CRMDataSyncTab = LinkedInProfessionalCardData2 && LinkedInProfessionalCardData2.map((item, index) => (
		<LinkedInProfessionalCard
			key={index}
			heading={item.heading}
			description={item.description}
			cardBg={item.cardBg}
			image={item.image}
		/>
	))

	const CRMExportEnrichmentTab = LinkedInProfessionalCardData3 && LinkedInProfessionalCardData3.map((item, index) => (
		<LinkedInProfessionalCard
			key={index}
			heading={item.heading}
			description={item.description}
			cardBg={item.cardBg}
			image={item.image}
		/>
	))

	const AiProductivityTab = LinkedInProfessionalCardData4 && LinkedInProfessionalCardData4.map((item, index) => (
		<LinkedInProfessionalCard
			key={index}
			heading={item.heading}
			description={item.description}
			cardBg={item.cardBg}
			image={item.image}
		/>
	))

	const tabs: TabItem[] = [
		{
			label: "CRM Data Enrichment",
			icon: buldDataImg,
			content: <div>
				<h3 className="lg:text-[22px] md:texxt-lg text-base text-[#4D4D4D] mb-7">
					It’s hard to find the accurate contact data for every prospects by <span className="text-[#FF4C51] ml-2 bg-[#FFDCD4] p-1.5 rounded-[24px] text-[13px] text-nowrap">Incomplete Data</span>
				</h3>
				<div className="flex flex-wrap gap-6">{CRMDataEnrichmentTab}</div>
			</div>,
		},
		{
			label: "CRM Data Sync",
			icon: buldDataSyncImg,
			content: <div>
				<h3 className="lg:text-[22px] md:texxt-lg text-base text-[#4D4D4D] mb-7">
					40+ hours lost to copy-paste. Every. Single. Month.. <span className="text-[#FF4C51] ml-2 bg-[#FFDCD4] p-1.5 rounded-[24px] text-[13px]">Lost Lead Context</span>
				</h3>
				<div className="flex flex-wrap gap-6">{CRMDataSyncTab}</div>
			</div>,
		},
		{
			label: "Bulk Export & Enrichment",
			icon: bulkExport,
			content: <div>
				<h3 className="lg:text-[22px] md:texxt-lg text-base text-[#4D4D4D] mb-7">
					Your Sales Navigator Workflow is Broken. <span className="text-[#FF4C51] ml-2 bg-[#FFDCD4] p-1.5 rounded-[24px] text-[13px]">Lost Productivity</span>
				</h3>
				<div className="flex flex-wrap gap-6">{CRMExportEnrichmentTab}</div>
			</div>,
		},
		{
			label: "AI Productivity",
			icon: aiProductivity,
			content: <div>
				<h3 className="lg:text-[22px] md:texxt-lg text-base text-[#4D4D4D] mb-7">
					Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink. <span className="text-[#FF4C51] ml-2 bg-[#FFDCD4] p-1.5 rounded-[24px] text-[13px]">No Smart Assistance</span>
				</h3>
				<div className="flex flex-wrap gap-6">{AiProductivityTab}</div>
			</div>,
		},
	];

	return (
		<section className="relative px-4 lg:px-11 md:px-7 lg:my-[70px] md:my-[50px] my-8">
			<img src={LeftImage} alt='ball' className='absolute left-0 top-[-40px] right-auto' />
			<div className="max-w-[1500px] mx-auto">
				<div className="mb-8 text-center lg:mb-20 md:mb-10">
					<h2 className="text-[#090F4E] lg:text-4xl md:text-2xl text-xl font-semibold mb-4">What people are saying about LeadCRM</h2>
					<p className="text-[#4D4D4D] lg:text-[18px] text-base">Everything you need for professional LinkedIn prospecting</p>
				</div>
				<TabsComponent tabs={tabs} />
			</div>
		</section>
	)
}

export default CompleteLinkedIn