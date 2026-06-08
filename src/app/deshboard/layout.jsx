import { DeshboardSidebar } from '@/Components/DeshboardSidebar';
import React from 'react';

const DeshboardLayout = ({children}) => {
    return (
        <div className='mt-25 flex min-h-screen gap-5'>
            <DeshboardSidebar/>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default DeshboardLayout;