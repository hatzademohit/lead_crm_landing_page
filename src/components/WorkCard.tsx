import React from "react";

interface WordCardProps {
  step?: string;
  title: string;
  description: string;
  image?: string;
}

const WordCard: React.FC<WordCardProps> = ({
  step,
  title,
  description,
  image,
}) => {
  return (
    <div className="overflow-hidden text-center transition-all duration-300 ease-in-out bg-white shadow-sm rounded-3xl hover:border-2 hover:border-cyan-600">

      {/* Large Step Number */}
      <div className="top-6 lg:text-[120px] md:text[100px] sm:text[80px] text-[60px] font-extrabold sriracha-regular text-cyan-600 opacity-90 leading-none pointer-events-none">
        {step}
      </div>

      {/* Content */}
      <div className="relative z-10 px-3 mt-4">
        <h2 className="text-xl font-bold md:text-2xl text-indigo-950">
          {title}
        </h2>

        <p className="lg:max-w-[300px] mx-auto mt-2 text-gray-600">
          {description}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex items-end justify-center gap-6 mt-6 sm:mt-8 lg:mt-12 md:mt-10">

        {/* Main Image */}
        {image && (
          <div className="overflow-hidden">
            <img
              src={image}
              alt="feature preview"
              className="w-[320px] md:w-[420px] max-h-[235px] object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WordCard;
