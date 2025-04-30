import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cta_img from "@/assets/images/confused_cta.png"
import Button from '@/components/ui/Button';

const CTA: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-between bg-gray-200/10 text-white rounded-lg shadow-lg lg:my-5 my-3">
            <div className="flex flex-col px-10 py-10 lg:py-0">
                <h2 className="text-2xl italic mb-4">Have something so say ? Confess  it now</h2>
                <Link href={"/confessions/share"}>
                <Button>Start Confessing</Button>
                </Link>
            </div>
            <div className="h-40 hidden lg:block"> 
                <Image src={cta_img} alt='cta-image' className='h-full object-contain'/>
            </div>
        </div>
    );
};

export default CTA;