import React, { FunctionComponent, HTMLProps } from "react";

interface TechCardProps extends HTMLProps<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TechCard: React.FC<TechCardProps> = ({
  description,
  title,
  icon,
  className,
  ...props
}) => {
  return (
    <div className={`shadow-lg rounded-lg text-center p-8 text-base font-medium ${className}`} {...props}>
      {icon}
      <p className="text-lg text-gray-50 mt-4 font-semibold">{title}</p>
      <p className="text-base text-gray-50 opacity-75 mt-2">{description}</p>
    </div>
  )
}

export default TechCard
