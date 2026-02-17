import professionalCard1 from '../img/professional-card-1.png'
import professionalCard2 from '../img/professional-card-2.png'

type LinkedInProfessionalCardProps = {
    heading: string;
    description: string;
    cardBg: string;
    image: string;
};

export const LinkedInProfessionalCardData1: LinkedInProfessionalCardProps[] = [
    {
        heading: 'Here is how LeadCRM tackles that situation.',
        description: 'Try LeadCRM Data Enrichment',
        cardBg: 'bg-[#F0F4FD]',
        image: professionalCard1,
    },
    {
        heading: 'Capture Every Lead. Every Time.',
        description: 'Try Our Advanced Waterfall Enrichment',
        cardBg: 'bg-[#F0F4FD]',
        image: professionalCard2,
    },
]

export const LinkedInProfessionalCardData2: LinkedInProfessionalCardProps[] = [
    {
        heading: "The Solution? LeadCRM's Instant Data Sync.",
        description: 'Try LeadCRM Data Sync',
        cardBg: 'bg-[#ffffce]',
        image: professionalCard1,
    },
    {
        heading: 'Unlock instant CRM insights on every profile you visit.',
        description: 'Try LeadCRM Data Overlay',
        cardBg: 'bg-[#ffffce]',
        image: professionalCard2,
    },
]

export const LinkedInProfessionalCardData3: LinkedInProfessionalCardProps[] = [
    {
        heading: "Enrich & Export 250 Profiles in Just 60 Seconds.",
        description: 'Try LeadCRM Bulk Export',
        cardBg: 'bg-[#eae8fd]',
        image: professionalCard1,
    },
    {
        heading: 'Export & enrich profiles to the CRM or G-Sheet',
        description: 'Try LeadCRM Bulk Export',
        cardBg: 'bg-[#eae8fd]',
        image: professionalCard2,
    },
]

export const LinkedInProfessionalCardData4: LinkedInProfessionalCardProps[] = [
    {
        heading: "Get the same high-impact engagement in 80% less time.",
        description: 'Try LeadCRM AI Response',
        cardBg: 'bg-[#ffe9fe]',
        image: professionalCard1,
    },
    {
        heading: 'Use Shortcuts to reply faster.',
        description: 'Try LeadCRM Templates',
        cardBg: 'bg-[#ffe9fe]',
        image: professionalCard2,
    },
]