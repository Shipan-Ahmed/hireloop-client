
import JobsTable from '@/Components/JobsTable';
import { getJobs } from '@/lib/api/jobs';
import React from 'react';

const RecruiterJobs = async () => {
    const companyId = "comp_98745";
    const jobs = await getJobs(companyId);
    console.log("Fetched jobs:", jobs);
    
    return (
        <div className="p-6 min-h-screen">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Active Positions</h2>
                <p className="text-xs text-neutral-400">Manage your published hiring pipelines and tracking details.</p>
            </div>

            <JobsTable jobs={jobs} />
        </div>
    );
};

export default RecruiterJobs;