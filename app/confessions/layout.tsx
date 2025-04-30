import React from 'react'
import ShareNavbar from './(components)/shared/ShareNavbar';
import Footer from '@/components/landing/Footer';

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-primary'>
      <ShareNavbar/>
      {children}
        <Footer className='py-16 lg:px-32 px-16'/>
    </div>
  )
}

export default page