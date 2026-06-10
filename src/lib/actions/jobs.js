'use client';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const createPost = async (postData) => {
    try {
        const res = await fetch(`${BASE_URL}/api/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error creating job post:", error);
        throw error;
    }
}