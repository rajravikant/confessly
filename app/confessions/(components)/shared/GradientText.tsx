import React from 'react';

interface GradientTextProps {
    text: string;
    gradientColors: string; // Tailwind gradient color classes, e.g., "from-blue-500 to-purple-500"
    className?: string; // Additional Tailwind classes for customization
}

const GradientText: React.FC<GradientTextProps> = ({ text, gradientColors, className = '' }) => {

    const baseStyles = "bg-gradient-to-r bg-clip-text text-transparent font-bold text-2xl";
    const newStyle = "pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"

    const gradientStyles = `from-${gradientColors.split(' ')[0]} to-${gradientColors.split(' ')[2]}`; // Extracting colors from the gradient string

    const classes = [
        baseStyles,
        gradientStyles,
        newStyle,
        className, 
    ];
    const combinedClasses = classes.join(' ');

    return (
        <span
            className={combinedClasses}
        >
            {text}
        </span>
    );
};

export default GradientText;