import Cross from '../img/cross.png'
import WithOutCRMImg from '../img/withoutcrm.svg'
import WithCRMImg from "../img/withcrm.svg"
import headingImg from '../img/heading_img.png'
import user from '../img/slider-user.png'
import complteBI from '../img/compltebi.png'
import crmOverlay from '../img/crmoverlay.png'
import AiResponse from '../img/airesponse.png'

interface DescriptionItem {
    descHeading: string
    icon: string
    subHeading: string
    pillText?: string
}

interface CRMSectionProps {
    image: string
    heading: string
    headingIcon?: string
    headingpill?: string
    description: DescriptionItem[]
}

export const WithOutCRM: CRMSectionProps = {
    image: WithOutCRMImg,
    heading: 'Without LeadCRM',
    description: [
        {
            descHeading: 'Manual Data Entry',
            icon: Cross,
            subHeading: 'Copying LinkedIn contacts to CRM manually plus losing conversation history',
            pillText: '3+ Hours wasted daily',
        },
        {
            descHeading: 'Incomplete Data',
            icon: Cross,
            subHeading: 'LinkedIn profiles missing Email and Phones from 700M+ Database',
            pillText: '60% Data Incomplete',
        },
        {
            descHeading: 'No CRM Visibility',
            icon: Cross,
            subHeading: 'Can’t see existing CRM contacts when browsing LinkedIn profiles',
            pillText: 'Zero context available',
        },
        {
            descHeading: 'Limited Productivity',
            icon: Cross,
            subHeading: 'Writing messages manually plus no AI assistant for reply, Invite or comments.',
            pillText: 'No smart assistance',
        },
    ],
}

export const WithCRM: CRMSectionProps = {
    image: WithCRMImg,
    heading: 'With LeadCRM',
    headingIcon: headingImg,
    headingpill: '4+ Hours/day Saved',
    description: [
        {
            descHeading: 'Complete Bi-Directional Sync',
            icon: complteBI,
            subHeading: 'Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.',
        },
        {
            descHeading: '700M+ Contacts + Enrichment',
            icon: user,
            subHeading: 'Get verified emails and phone numbers from a vast global database.',
        },
        {
            descHeading: 'CRM Overlay on LinkedIn',
            icon: crmOverlay,
            subHeading: 'See full CRM insights directly on LinkedIn profiles without switching tabs.',
        },
        {
            descHeading: 'AI Response + Templates + Bulk Exports',
            icon: AiResponse,
            subHeading: 'Save time with AI-crafted replies, pre-built templates, and one-click data exports.',
        },
    ],
}