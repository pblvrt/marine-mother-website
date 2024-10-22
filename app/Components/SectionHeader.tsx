import React from 'react';

interface SectionHeaderProps {
  number: number;
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, text }) => (
  <div className="flex flex-row relative mt-8">
    <p className="leasson-header text-[80px]">{number}.</p>
    <p className="leasson-header text-[37px] absolute left-[90px] bottom-[-10px]">
      {text}
    </p>
  </div>
);

export default SectionHeader;