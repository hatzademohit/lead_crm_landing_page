import { Mail, Phone, HelpCircle, LucideIcon } from 'lucide-react';

export interface ContactInfoProps {
    type: string;
    label: string;
    href: string;
    icon: LucideIcon;
}

export interface FooterSection {
    title: string;
    links: {
        label: string;
        href: string;
        comingSoon?: boolean;
    }[];
}

export const footerSections: FooterSection[] = [
    {
        title: "Integrations",
        links: [
            { label: "HubSpot", href: "#" },
            { label: "Salesforce", href: "#" },
            { label: "Pipedrive", href: "#" },
            { label: "Close.io", href: "#", comingSoon: true },
            { label: "Insightly", href: "#", comingSoon: true },
        ],
    },
    {
        title: "Alternative",
        links: [
            { label: "Surfe VS LeadCRM", href: "#" },
            { label: "UnknownMatch Alternative", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Use", href: "#" },
        ],
    },
];

export const socialLinks = [
    { name: "Facebook", href: "#", bg: "bg-blue-500 hover:bg-blue-600" },
    { name: "Twitter", href: "#", bg: "bg-blue-400 hover:bg-blue-500" },
    { name: "LinkedIn", href: "#", bg: "bg-blue-600 hover:bg-blue-700" },
    { name: "Instagram", href: "#", bg: "bg-pink-500 hover:bg-pink-600" },
];

export const contactInfo: ContactInfoProps[] = [
    { type: "email", label: "support@leadcrm.io", href: "mailto:support@leadcrm.io", icon: Mail },
    { type: "phone", label: "+1-231-538-7466", href: "tel:+1-231-538-7466", icon: Phone },
    { type: "help", label: "Help Center", href: "#", icon: HelpCircle },
];
