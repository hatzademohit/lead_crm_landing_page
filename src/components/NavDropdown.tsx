import { ChevronDown } from 'lucide-react';

interface NavDropdownProps {
  label: string;
  items?: string[];
}

export default function NavDropdown({ label, items = [] }: NavDropdownProps) {

  return (
    <div className="relative group">
      <button className="flex items-center lg:text-lg gap-1 text-gray-700 font-semibold hover:text-blue-600 transition-colors">
        {label}
        <ChevronDown size={18} className="group-hover:rotate-180 transition-transform font-semibold" />
      </button>

      {items.length > 0 && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          {items.map((item) => (
            <button
              key={item}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg transition-colors font-semibold"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
