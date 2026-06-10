'use client';
import StatCard from '@/Components/StatCard';
import { useSession } from '@/lib/auth-client';
import React from 'react';

import { FiFileText, FiUsers, FiZap, FiCheckCircle } from "react-icons/fi";

const page = () => {

    const { data, isPending } = useSession();
    
    if(isPending) {
        return <div>Loading...</div>;
    }
    const user = data?.user;
    const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: FiFileText },
        { title: "Total Applicants", value: "1,284", icon: FiUsers },
        { title: "Active Jobs", value: "18", icon: FiZap },
        { title: "Jobs Closed", value: "32", icon: FiCheckCircle },
    ];
    return (
        <div className=' space-y-4'>
            <h1>Recruiter Dashboard</h1>
            <p>Welcome, {user?.name}!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4  ">
                {recruiterStats.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default page;