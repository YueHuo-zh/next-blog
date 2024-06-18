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
  type?: type | undefined,
  secendary?: boolean,
  bordered?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
  className?: string | Array<string>,
}

const Button: React.FC<ButtonProps> = ({ size = "medium", bordered = true, type = "default", ...props }) => {

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
  return (
    <button className={
      currentClass
    }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;