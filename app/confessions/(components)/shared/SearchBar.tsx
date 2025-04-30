"use client";
import React from 'react';
import SearchInput from './SearchInput';
import { moods } from '@/lib/data';

const SearchBar = () => {

    return (
        <div className="lg:pt-32 pt-10 w-full">
            <SearchInput moods={moods} placeholder='Search confessions' onSearch={(qu,mood)=>console.log(`${qu} - Mood: ${mood}`)}/>
        </div> 

    )
}

export default SearchBar;

