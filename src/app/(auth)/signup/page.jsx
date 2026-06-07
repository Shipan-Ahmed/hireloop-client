'use client';


import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';


const SignupPage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log("form data is submitted: ", userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,

        })

        console.log("signup response: ", { data, error });
        if (error) {
            toast.error("Sign up failed: " + error.message);
        }
        if (data) {
            toast.success("Sign up successful! ");
            router.push("/signin");
        }

    }

    // const signUp = async () => {
    //     const data = await authClient.signIn.social({
    //         provider: "google",
    //     });
    // }

    return (
        <Card className=' max-w-md mx-auto mt-25 mb-5 p-6 rounded-lg shadow-lg bg-black/50 border border-white/15'>
            <h2 className='text-2xl font-bold mb-6 text-center '>Sign Up</h2>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>
                
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <FaCheck />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <div>
                <p className='text-center mt-4'>Already have an account? <Link href="/signin" className='text-blue-500 hover:underline'>Sign In Now</Link></p>
            </div>
            <p className='text-center mt-4'>Or sign up with</p>
            <div className='flex justify-center gap-4 mt-4'>
                <Button className="btn btn-outline btn-primary w-full" >
                    <span className='flex items-center gap-2'><FaGoogle />  Google</span>
                </Button>
            </div>
        </Card>
    );
};

export default SignupPage;