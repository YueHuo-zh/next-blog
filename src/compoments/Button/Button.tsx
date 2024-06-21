import React from "react";
import "./button.css";
import clsx from "clsx"

// 大小
type size = "small" | "medium" | "large";
// 类型: 控制按钮边框、文字、背景颜色
type type = "default" | "success" | "primary" | "warning" | "info" | "error";

interface ButtonProps {
  children: React.ReactNode,
  text?: boolean,
  size?: size | undefined,
  width ?: number | string,
  height ?: number | string,
  type?: type | undefined,
  secendary?: boolean,
  bordered?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
  className?: string | Array<string>,
}

const Button: React.FC<ButtonProps> = ({ size = "medium", bordered = true, type = "default", width, height, ...props }) => {

  const sizeClass = clsx(
    {
      // 大小
      'small': size === 'small',
      'medium': size === 'medium',
      'large': size === 'large',
    },
  );

  const textClass = clsx(
    {
      'text': props.text,
    }, 
    sizeClass,
    props.className
  )

  const normalClass = clsx(
    {
      // 大小
      'small': size === 'small',
      'medium': size === 'medium',
      'large': size === 'large',
    },
    {
      // 类型
      'default-type': type === 'default',
      'success-type': type === 'success',
      'primary-type': type === 'primary',
      'warning-type': type === 'warning',
      'info-type': type === 'info',
      'error-type': type === 'error',
    },
    {
      // 边框
      'bordered': bordered
    },
    {
      'secendary': props.secendary
    },
    props.className
  );

  const currentClass = props.text ? textClass : normalClass;

  const inlineStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <button 
      className={
        currentClass
      }
      onClick={ props.onClick }
      style={ inlineStyle }
    >
      { props.children }
    </button>
  );
}

export default Button;