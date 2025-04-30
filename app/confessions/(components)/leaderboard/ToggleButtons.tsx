"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const ToggleButtons: React.FC = () => {
    const [active, setActive] = useState<'daily' | 'monthly'>('daily');

    const handleToggle = (value: 'daily' | 'monthly') => {
        setActive(value);
    };

    return (
        <div className="toggle-buttons-container border border-white/25 py-1.5 px-2 rounded-full flex gap-3 items-center " >
            <button
                onClick={() => handleToggle('daily')}
                className={cn("px-4 py-1 rounded-full text-sm transition-colors duration-300 ease-in-out cursor-pointer",active === 'daily' ? 'bg-white/5 text-white border border-white/25' : 'bg-transparent text-white/60')}


            >
                Daily
            </button>
            <button
                onClick={() => handleToggle('monthly')}
                className={cn("px-4 py-1 rounded-full text-sm transition-colors duration-300 ease-in-out cursor-pointer",active === 'monthly' ? 'bg-white/5 text-white border border-white/25' : 'bg-transparent text-white/60')}
                
            >
                Monthly
            </button>
        </div>
    );
};



export default ToggleButtons;