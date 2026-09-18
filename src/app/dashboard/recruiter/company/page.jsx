import React from 'react';
import CompanyProfile from './CompanyProfile';
import { getUserSession } from '@/app/lib/core/session';
import { getRecruiterCompany } from '@/app/lib/api/companies';

const RecruiterCompanyPage = async() => {
    const user = await getUserSession();
    const company = await getRecruiterCompany(user.id);
    console.log(company)
    return (
        <div>
            <CompanyProfile recruiter={user} recruiterCompany={company} />
        </div>
    );
};

export default RecruiterCompanyPage;