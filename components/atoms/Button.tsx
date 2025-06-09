'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  href,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'bg-transparent text-text-primary hover:bg-bg-secondary',
  };
  
  const sizeClasses = {
    small: 'text-sm px-4 py-2',
    medium: 'text-base px-6 py-3',
    large: 'text-lg px-8 py-4',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        {...(href.startsWith('http') && {
          target: '_blank',
          rel: 'noopener noreferrer'
        })}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={buttonClasses} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};