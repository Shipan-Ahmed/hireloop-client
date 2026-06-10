"use client";

import React, { useState, useEffect } from "react";
import { Form, Fieldset, TextField, Input, Select, Label, ListBox, Button, Switch } from "@heroui/react";
import { FiBriefcase, FiDollarSign, FiMapPin, FiCalendar, FiFileText } from "react-icons/fi";
import { createPost } from "@/lib/actions/jobs";
import toast from "react-hot-toast";

export default function NewJobPost() {
    const autoFilledCompany = {
        id: "comp_98745",
        name: "Acme Corp",
        isApproved: true,
    };

    // State Management
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        type: "",
        minSalary: "",
        maxSalary: "",
        currency: "USD",
        location: "",
        isRemote: false,
        deadline: "",
        responsibilities: "",
        requirements: "",
        benefits: "",
    });

    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Fix hydration mismatch for dates safely
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (field, key) => {
        setFormData((prev) => ({ ...prev, [field]: key }));
    };

    const handleToggleRemote = (checked) => {
        setFormData((prev) => ({
            ...prev,
            isRemote: checked,
            location: checked ? "Remote" : ""
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!autoFilledCompany.isApproved) {
            alert("Your company profile must be approved before you can post positions.");
            return;
        }

        setLoading(true);
        const submissionPayload = {
            ...formData,
            companyId: autoFilledCompany.id,
            status: "active",
            createdAt: new Date().toISOString(),
        };

        console.log("Submitting job payload:", submissionPayload);
        const result = await createPost(submissionPayload);
        if (result.insertedId) {
            toast.success("Job posted successfully!");
            e.target.reset();
            revalidatePath("/deshboard/recruiter");
        }

        // setTimeout(() => {
        //     setLoading(false);
        //     alert("Job posted successfully!");
        // }, 1000);
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-black text-neutral-200 p-4 sm:p-8 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-[#121212] border border-neutral-800 rounded-xl shadow-xl overflow-hidden">

                {/* Header */}
                <div className="p-6 border-b border-neutral-800">
                    <h1 className="text-xl font-semibold text-white tracking-tight">Post a New Job</h1>
                    <p className="text-xs text-neutral-400 mt-1">
                        Fill out the operational details to publish your position live on HireLoop.
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
                        <span className="text-[11px] text-neutral-400 font-medium">Publishing as:</span>
                        <span className="text-xs font-semibold text-emerald-400">{autoFilledCompany.name}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                </div>

                {/* Hero UI v3 Form Wrapper */}
                <Form onSubmit={handleSubmit} className="p-6 space-y-8">

                    {/* SECTION 1: JOB SPECIFICATIONS */}
                    <Fieldset className="space-y-4 w-full m-0 p-0 border-0">
                        <legend className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-2 mb-2">
                            <FiBriefcase /> Job Specifications
                        </legend>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <TextField isRequired className="flex flex-col gap-1.5">
                                <Label className={labelStyle}>Job Title</Label>
                                <Input
                                    name="title"
                                    placeholder="e.g. Senior Full-Stack Engineer"
                                    className={inputPrimitiveStyle}
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </TextField>

                            {/* Job Category Select */}
                            <div className="flex flex-col">
                                <Select
                                    className="w-full"
                                    placeholder="Select category"
                                    selectedKeys={formData.category ? [formData.category] : []}
                                    onSelectionChange={(keys) => handleSelectChange("category", Array.from(keys)[0])}
                                >
                                    <Label className={labelStyle}>Job Category</Label>
                                    <Select.Trigger className={selectTriggerStyle}>
                                        <Select.Value className="text-sm text-neutral-100" />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover className={popoverStyle}>
                                        <ListBox className="text-neutral-200">
                                            <ListBox.Item id="tech" textValue="Technology & Engineering" className={listItemStyle}>Technology & Engineering</ListBox.Item>
                                            <ListBox.Item id="design" textValue="Design & Creative" className={listItemStyle}>Design & Creative</ListBox.Item>
                                            <ListBox.Item id="marketing" textValue="Marketing & Sales" className={listItemStyle}>Marketing & Sales</ListBox.Item>
                                            <ListBox.Item id="management" textValue="Product Management" className={listItemStyle}>Product Management</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Job Type Select */}
                            <div className="flex flex-col">
                                <Select
                                    className="w-full"
                                    placeholder="Select arrangement"
                                    selectedKeys={formData.type ? [formData.type] : []}
                                    onSelectionChange={(keys) => handleSelectChange("type", Array.from(keys)[0])}
                                >
                                    <Label className={labelStyle}>Job Type</Label>
                                    <Select.Trigger className={selectTriggerStyle}>
                                        <Select.Value className="text-sm text-neutral-100" />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover className={popoverStyle}>
                                        <ListBox className="text-neutral-200">
                                            <ListBox.Item id="full-time" textValue="Full-time" className={listItemStyle}>Full-time</ListBox.Item>
                                            <ListBox.Item id="part-time" textValue="Part-time" className={listItemStyle}>Part-time</ListBox.Item>
                                            <ListBox.Item id="contract" textValue="Contract" className={listItemStyle}>Contract</ListBox.Item>
                                            <ListBox.Item id="internship" textValue="Internship" className={listItemStyle}>Internship</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <TextField isRequired className="flex flex-col gap-1.5">
                                <Label className={labelStyle}>Application Deadline</Label>
                                <div className="relative flex items-center">
                                    <Input
                                        name="deadline"
                                        type="date"
                                        className={`${inputPrimitiveStyle} pr-10`}
                                        value={formData.deadline}
                                        onChange={handleInputChange}
                                    />
                                    <FiCalendar className="absolute right-3 text-neutral-500 pointer-events-none" />
                                </div>
                            </TextField>
                        </div>

                        {/* Salary Sub-Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                            <TextField className="flex flex-col gap-1.5">
                                <Label className={labelStyle}>Min Salary</Label>
                                <div className="relative flex items-center">
                                    <FiDollarSign className="absolute left-3 text-neutral-500 text-sm pointer-events-none" />
                                    <Input
                                        name="minSalary"
                                        type="number"
                                        placeholder="0"
                                        className={`${inputPrimitiveStyle} pl-8`}
                                        value={formData.minSalary}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </TextField>

                            <TextField className="flex flex-col gap-1.5">
                                <Label className={labelStyle}>Max Salary</Label>
                                <div className="relative flex items-center">
                                    <FiDollarSign className="absolute left-3 text-neutral-500 text-sm pointer-events-none" />
                                    <Input
                                        name="maxSalary"
                                        type="number"
                                        placeholder="0"
                                        className={`${inputPrimitiveStyle} pl-8`}
                                        value={formData.maxSalary}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </TextField>

                            {/* Currency Select */}
                            <div className="flex flex-col">
                                <Select
                                    className="w-full"
                                    selectedKeys={[formData.currency]}
                                    onSelectionChange={(keys) => handleSelectChange("currency", Array.from(keys)[0])}
                                >
                                    <Label className={labelStyle}>Currency</Label>
                                    <Select.Trigger className={selectTriggerStyle}>
                                        <Select.Value className="text-sm text-neutral-100" />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover className={popoverStyle}>
                                        <ListBox className="text-neutral-200">
                                            <ListBox.Item id="USD" textValue="USD ($)" className={listItemStyle}>USD ($)</ListBox.Item>
                                            <ListBox.Item id="EUR" textValue="EUR (€)" className={listItemStyle}>EUR (€)</ListBox.Item>
                                            <ListBox.Item id="BDT" textValue="BDT (৳)" className={listItemStyle}>BDT (৳)</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="pt-2 border-t border-neutral-900 flex flex-col sm:flex-row sm:items-end gap-4">
                            <div className="flex-1">
                                <TextField isRequired={!formData.isRemote} className="flex flex-col gap-1.5">
                                    <Label className={labelStyle}>Location</Label>
                                    <div className="relative flex items-center">
                                        <FiMapPin className="absolute left-3 text-neutral-500 pointer-events-none" />
                                        <Input
                                            name="location"
                                            placeholder={formData.isRemote ? "Remote Workspace" : "e.g. Dhaka, Bangladesh"}
                                            disabled={formData.isRemote}
                                            className={`${inputPrimitiveStyle} pl-9 disabled:opacity-50`}
                                            value={formData.location}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </TextField>
                            </div>
                            <div className="flex items-center gap-3 pb-2">
                                <Switch
                                    size="sm"
                                    color="default"
                                    isSelected={formData.isRemote}
                                    onValueChange={handleToggleRemote}
                                />
                                <span className="text-xs font-medium text-neutral-300">This is a fully Remote role</span>
                            </div>
                        </div>
                    </Fieldset>

                    <hr className="border-neutral-800" />

                    {/* SECTION 2: OPERATIONAL CONTEXT */}
                    <Fieldset className="space-y-4 w-full m-0 p-0 border-0">
                        <legend className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-2 mb-2">
                            <FiFileText /> Operational Context
                        </legend>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-neutral-400">Core Responsibilities</label>
                            <textarea
                                name="responsibilities"
                                placeholder="Outline daily duties, core tasks, and operational milestones..."
                                rows={4}
                                required
                                className={textareaStyle}
                                value={formData.responsibilities}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-neutral-400">Requirements & Base Skills</label>
                            <textarea
                                name="requirements"
                                placeholder="List required experience, frameworks, toolsets, and certifications..."
                                rows={4}
                                required
                                className={textareaStyle}
                                value={formData.requirements}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-neutral-400">Perks & Benefits (Optional)</label>
                            <textarea
                                name="benefits"
                                placeholder="Insurance parameters, stock allocations, learning stipends..."
                                rows={3}
                                className={textareaStyle}
                                value={formData.benefits}
                                onChange={handleInputChange}
                            />
                        </div>
                    </Fieldset>

                    {/* ACTIONS */}
                    <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3 w-full">
                        <Button
                            type="button"
                            variant="bordered"
                            className="border-neutral-800 text-neutral-300 hover:bg-neutral-900 rounded-lg text-xs h-10 px-5"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            isLoading={loading}
                            className="bg-white text-black font-semibold hover:bg-neutral-200 rounded-lg text-xs h-10 px-6 shadow-sm"
                        >
                            Post Job
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    );
}

/* --- Flattened Standard CSS Strings (Ensures perfect parsing) --- */
const labelStyle = "text-xs font-medium text-neutral-400 mb-1.5 block";

const inputPrimitiveStyle = "w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-sm text-neutral-100 placeholder:text-neutral-600 rounded-lg h-10 px-3 outline-none transition-colors focus:border-neutral-600";

const selectTriggerStyle = "w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg h-10 px-3 text-neutral-400 flex items-center justify-between transition-colors focus:outline-none focus:border-neutral-600 data-[open=true]:border-neutral-600";

const popoverStyle = "bg-neutral-900 border border-neutral-800 rounded-lg p-1 shadow-xl max-h-60 overflow-y-auto";

const listItemStyle = "p-2 text-sm rounded-md text-neutral-300 data-[focused=true]:bg-neutral-800 data-[selected=true]:bg-neutral-800 data-[selected=true]:text-white cursor-pointer transition-colors";

const textareaStyle = "w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 focus:border-neutral-600 text-sm text-neutral-100 placeholder:text-neutral-600 rounded-lg p-3 outline-none transition-colors resize-y min-h-[80px]";