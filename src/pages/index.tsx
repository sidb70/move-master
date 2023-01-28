import Homepage from '@/components/Homepage';
import React, {useState} from 'react';
import Dashboard from "@/components/Dashboard";


export default function Main() {
    const isLoggedIn = false;
    // Add in Login Check here

    return isLoggedIn ? <Dashboard/> : <Homepage/>;
}

