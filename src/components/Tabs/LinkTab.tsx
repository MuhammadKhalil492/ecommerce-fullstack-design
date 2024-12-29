import React from "react";
interface TabItemProps {
  label: string;
  link: string;
  isActive: boolean;
  onClick: () => void;
}

const LinkTab: React.FC<TabItemProps> = ({
  label,
  link,
  isActive=false,
  onClick,
}) => {
  return (
    <li>
      <a
        href={link}
        className={`inline-flex items-center w-full px-2.5 py-2 text-[#1C1C1C]  rounded-lg dark:bg-blue-600 ${
          isActive ? "bg-[#E5F1FF]" : ''
        }`}
        aria-current="page"
        onClick={() => onClick()}
      >
        {label}
      </a>
    </li>
  );
};

export default LinkTab;
