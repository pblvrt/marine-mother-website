import React from 'react';
import Image from "next/image";

interface ContentGridProps {
  data: { title: string; text: string; image: string }[];
}

export const AboutBlock = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col space-y-4 relative  items-center">
      <Image
        src={image}
        alt={`${title} - French Lessons Buffalo NY`}
        width={"600"}
        height={"400"}
        className="hover:scale-105 transform transition duration-500 ease-in-out"
      />
      <div className={`heading-title `} style={{ fontSize: "24px" }}>
        {title}
      </div>
      <div className="image-box-description text-center">{text}</div>
    </div>
  );
};

const ContentGrid: React.FC<ContentGridProps> = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full p-16 gradient">
    {data.map((item, index) => (
      <AboutBlock key={index} {...item} />
    ))}
  </div>
);

export default ContentGrid;