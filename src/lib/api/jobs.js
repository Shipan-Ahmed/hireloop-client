

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const getJobs = async (companyId, status = "active") => {
    const res = await fetch(`${BASE_URL}/api/jobs?companyId=${companyId}&status=${status}`);
    const data = await res.json();
    return data;

}