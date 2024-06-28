import React from "react";
import "./card.css"
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode,
  width?: number | string,
  height?: number | string,
  className?: string | Array<string>,
  style?: React.CSSProperties,
}

const Card: React.FC<CardProps> = ({
  children,
  width,
  height,
  ...props
}) => {

  const inlineStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    ...props.style,
  };

  const cardClass = clsx('card', props.className);

  return (
    <div className={cardClass} style={inlineStyle}>
      
    </div>
  );
}

export default Card