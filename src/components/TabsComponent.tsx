import { FC, useState } from "react";

interface TabItem {
    label: string;
    icon: string;
    content: React.ReactNode;
}

interface TabsComponentProps {
    tabs: TabItem[];
}

const TabsComponent: FC<TabsComponentProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div className="">
            {/* Tab Buttons */}
            <div className="flex flex-wrap lg:justify-between justify-center gap-2 pt-2 pb-1 border-b-4 border-[#EDEDED]">
                {tabs.map((tab, index) => {
                    const isActive = activeTab === index;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 lg:text-[18px] relative
                                    ${isActive ? "text-[#090F4E] after:content-[''] after:absolute after:w-full after:h-[5px] after:bg-[#090F4E] after:bottom-[-8px] after:left-0 after:rounded-[6px]"
                                    : "text-[#4C4C4C]"
                                }`}
                        >
                            <img src={tab.icon} alt={tab.label} width={34} height={34} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="mt-6 transition-all duration-300 bg-white lg:mt-11 md:mt-8 rounded-3">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default TabsComponent;
