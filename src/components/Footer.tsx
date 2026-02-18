import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { footerSections, contactInfo } from "../assets/json/footerData";
import CromeIcon from '../assets/img/crome.png'
import logo from "../assets/img/Leadcrm_logo.svg";

export default function Footer() {
    return (
        <footer className="bg-[linear-gradient(277.75deg,_rgba(1,178,216,0.22)_0%,_rgba(1,178,216,0.07)_77%)] lg:mt-[150px] md:mt-[100px] mt-15">
            <div className="mx-auto max-w-[1300px] pt-6 pb-3 lg:p-3 p-2">
                <div className="grid grid-cols-1 gap-5 pt-2 mb-12 text-center sm:gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-7 md:gap-5 sm:text-start">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={logo} alt='logo' className='m-auto sm:m-0' />
                        </div>
                        <p className="mb-6 text-black">
                            LeadCRM is LinkedIn integration tool for your CRM.
                        </p>
                        <div className="flex justify-center gap-3 sm:justify-start">
                            <a
                                href="#"
                                className="p-2 text-white transition-colors bg-[#01B2D8] rounded-full hover:bg-[#03c2ec]"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="p-2 text-white transition-colors bg-[#01B2D8] rounded-full hover:bg-[#03c2ec]"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="p-2 text-white transition-colors bg-[#01B2D8] rounded-full hover:bg-[#03c2ec]"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="#"
                                className="p-2 text-white transition-colors bg-[#01B2D8] rounded-full hover:bg-[#03c2ec]"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="lg:mb-5 md:mb-3 mb-2 font-semibold text-[#090F4E] lg:text-[20px] md:text-[18px] text-base">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i} className="flex items-center justify-center gap-2 sm:justify-start">
                                        <a
                                            href={link.href}
                                            className="text-sm text-black transition-colors hover:text-[#090F4E]"
                                        >
                                            {link.label}
                                        </a>

                                        {link.comingSoon && (
                                            <span className="px-2 py-1 text-xs font-semibold text-[#002A06] rounded-full bg-[linear-gradient(150.47deg,_#D8FFDD_0%,_#BDFFC6_100%)] border border-white">
                                                Coming Soon
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="lg:mb-5 md:mb-3 mb-2 font-semibold text-[#090F4E] lg:text-[20px] md:text-[18px] text-base">Contact Us</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={index} className="flex items-center justify-center gap-2 sm:justify-start">
                                        <a
                                            href={item.href}
                                            className="text-sm text-black transition-colors hover:text-[#090F4E] flex items-center gap-2"
                                        >
                                            <Icon size={25} className="text-[#01b2d8]" />
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })}
                            <li className="pt-2">
                                <button className="flex items-center justify-center gap-2 px-3 py-2 text-white transition-colors bg-[#242424] rounded-[15px] max-w-[164px] sm:m-0 m-auto sm:ml-auto">
                                    <span className="font-[400] text-start">Available in Chrome</span>
                                    <img src={CromeIcon} alt='crome' width={30} height={30} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-0 lg:pt-8 md:pt-4">
                    <p className="mb-3 text-xs leading-relaxed text-center text-[#54595F] border-b pb-2 border-[#8D8D8D94]">
                        Disclaimer: LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos
                        and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed
                        AS IS. Your use of LeadCRM is at your own risk.
                    </p>
                    <p className="text-sm font-medium text-center text-[#7A7A7A]">
                        Copyright © 2025 LeadCRM. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
