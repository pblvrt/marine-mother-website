import React from 'react';

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <button
      onClick={scrollToContact}
      className="bg-blue-600 hover:bg-blue-700 text-white font-lato px-6 py-3 rounded-lg 
      transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
