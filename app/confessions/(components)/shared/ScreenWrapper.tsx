import { cn } from '@/lib/utils'
import React from 'react'

const ScreenWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("w-full lg:px-32 px-8",className)}>
            {children}
        </div>
    )
}

export default ScreenWrapper