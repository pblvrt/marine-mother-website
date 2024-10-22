import React from 'react';

interface SectionHeaderProps {
  number: number;
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, text }) => (
  <div className="flex flex-row relative mt-8">
    <p className="leasson-header md:text-[80px] text-[40px]">{number}.</p>
    <p className="leasson-header md:text-[37px] text-[26px] absolute md:left-[90px] left-[45px] bottom-[-10px] sm:bottom-[-5px]">
      {text}
    </p>
  </div>
);

export default SectionHeader;