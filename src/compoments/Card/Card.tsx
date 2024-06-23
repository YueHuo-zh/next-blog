import "./card.css"
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode,
  header?: React.ReactNode,
  footer?: React.ReactNode,
  width?: number | string,
  height?: number | string,
  className?: string | Array<string>,
  style?: React.CSSProperties,
}

const Card: React.FC<CardProps> = ({ children, header, footer, width, height, ...props }) => {

  const inlineStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const cardClass = clsx(
    'card',
    props.className
  )

  const cardHeaderClass = clsx(
    'card-header',
  )

  const cardFooterClass = clsx(
    'card-footer',
  )

  return (
    <div className={cardClass} style={inlineStyle}>
    {header && <div className={cardHeaderClass}>{header}</div>}
    <div className="card-body">{children}</div>
    {footer && <div className={cardFooterClass}>{footer}</div>}
  </div>
  );
}