import { useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import NavDropdown from "./NavDropdown";
import logo from "../assets/img/Leadcrm_logo.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productItems = ["Features", "Integrations", "Pricing Plans"];
  const resourcesItems = ["Documentation", "Blog", "Tutorials", "Support"];
  const companyItems = ["About Us", "Careers", "Contact", "Partners"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-custom">
      <div className="mx-auto lg:px-6 lg:py-4 md:p-4 p-2 max-w-[1500px] flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" width={180} className="z-50 lg:w-[180px] sm:w-[150px] w-[100px]" />

        {/* Desktop nav */}
        <nav className="items-center hidden gap-8 lg:flex">
          <NavDropdown label="Product" items={productItems} />
          <a
            href="#pricing"
            className="font-semibold text-gray-700 transition-colors hover:text-blue-600"
          >
            Pricing
          </a>
          <NavDropdown label="Resources" items={resourcesItems} />
          <NavDropdown label="Company" items={companyItems} />
        </nav>

        {/* Buttons / Hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop buttons */}
          <div className="flex items-center gap-3">
            <button className="p-3 bg-[#2D96BC] hover:bg-[#2585a6] md:flex hidden text-white font-semibold rounded-[10px] transition-colors max-w-[215px] lg:w-[215px] lg:text-[16px] text-[14px]">
              Get Your Free Account
            </button>
            <button className="lg:p-3 p-2 border border-[#2D96BC] text-[#2D96BC] hover:border-[#2585a6] hover:bg-[#2D96BC]/10 font-semibold rounded-[10px] transition-colors flex items-center gap-2 max-w-[90px] lg:w-[90px] lg:text-[16px] text-[14px]">
              <LogIn size={18} />
              Login
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="p-[6.5px] text-[#2D96BC] transition-colors border border-[#2D96BC] rounded-md lg:hidden hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-md md:hidden">
          <div className="flex flex-col gap-4 px-6 pt-4 pb-6">
            <NavDropdown label="Product" items={productItems} />
            <a
              href="#pricing"
              className="font-semibold text-gray-700 transition-colors hover:text-blue-600"
            >
              Pricing
            </a>
            <NavDropdown label="Resources" items={resourcesItems} />
            <NavDropdown label="Company" items={companyItems} />

            <div className="flex flex-col gap-3 mt-2">
              <button className="p-3 bg-[#2D96BC] hover:bg-[#2585a6] text-white font-semibold rounded-[10px] transition-colors w-full">
                Get Your Free Account
              </button>
              {/* <button className="p-3 border border-[#2D96BC] text-[#2D96BC] hover:border-[#2585a6] hover:bg-[#2D96BC]/10 font-semibold rounded-[10px] transition-colors flex items-center justify-center gap-2 w-full">
                <LogIn size={18} />
                Login
              </button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
