import step1Image from '../img/step1-img.png'
import step2Image from '../img/step2-img.png'
import step3Image from '../img/step3-img.png'
import step4Image from '../img/step4-img.png'

interface HowItWorksDataProps {
    step: Number
    title: string
    description: string
    image: string
}

export const HowItWorksData: HowItWorksDataProps[] = [
    {
        step: 1,
        title: "Install the Extension",
        description: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
        image: step1Image,
    },
    {
        step: 2,
        title: "Browse LinkedIn",
        description: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
        image: step2Image,
    },
    {
        step: 3,
        title: "Get Enriched Data",
        description: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
        image: step3Image,
    },
    {
        step: 4,
        title: "Sync to CRM Instantly",
        description: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.",
        image: step4Image,
    },
]