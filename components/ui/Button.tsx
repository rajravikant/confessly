import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    className?: string;
    style ?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    style = {},
}) => {
    const baseStyles =
        'inline-flex items-center justify-center font-medium rounded-full focus:outline-none focus:ring transition';
    const sizeStyles = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };
    const variantStyles = {
        primary: 'bg-accent text-white hover:bg-accent/50 focus:ring-blue-300',
        secondary: 'bg-gray-700/50 text-white hover:bg-gray-600 focus:ring-gray-300',
        outline:
            'border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-gray-300',
        text: 'text-white hover:underline focus:ring-blue-300',
    };

    const disabledStyles = 'opacity-50 cursor-not-allowed';

    const classes = [
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabled ? disabledStyles : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;