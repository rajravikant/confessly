"use client"
import { Confession } from '@/lib/data';
import { cn } from '@/lib/utils';
import React,{useState} from 'react';
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

interface PaginationProps {
    pages : Confession[]
}

const Pagination: React.FC<PaginationProps> = ({ pages}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page
    const totalItems = pages.length; // Total number of items
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Total number of pages

    
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return; // Prevent invalid page change
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
        const startPage = Math.max(1, currentPage - 2); // Start page for pagination
        const endPage = Math.min(totalPages, startPage + 4); // End page for pagination

        return pageNumbers.slice(startPage - 1, endPage).map((page) => (
            <div
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn("p-1.5 text-white text-sm text-center font-medium mx-2 rounded-full size-8",

                    page === currentPage ? "bg-accent/60" : "bg-transparent"
                )}
            >
                {page}
            </div>
        ));
    }

    return (
        <div className=' flex items-center justify-center my-5'>
            <div className='bg-gray-200/10 p-2 border-2 border-accent/20 rounded-xl flex'>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <span>
                    <FaChevronLeft className='size-6 text-accent'/>
                </span>
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              
            >
                <span>
                    <FaChevronRight className='size-6 text-accent'/>
                </span>
            </button>
            </div>
        </div>
    );
};

export default Pagination;