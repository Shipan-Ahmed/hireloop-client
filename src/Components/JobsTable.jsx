"use client";

import React from "react";
import { Table } from "@heroui/react";
import { FiMapPin, FiCalendar, FiDollarSign } from "react-icons/fi";

export default function JobsTable({ jobs = [] }) {
    return (
        <div className="w-full bg-[#121212] border border-neutral-800 rounded-xl overflow-hidden shadow-xl">
            {/* We use an unstyled transparent table structure here 
        so it takes the background color of our container box.
      */}
            <Table className="w-full bg-transparent text-neutral-200">
                <Table.ScrollContainer className="bg-transparent">
                    <Table.Content aria-label="Recruiter Posted Jobs" className="min-w-[800px] bg-[#121212]">
                        {/* Header Structure */}
                        <Table.Header>
                            <Table.Column isRowHeader className={columnHeaderStyle}>Job Title</Table.Column>
                            <Table.Column className={columnHeaderStyle}>Category</Table.Column>
                            <Table.Column className={columnHeaderStyle}>Location</Table.Column>
                            <Table.Column className={columnHeaderStyle}>Max Salary</Table.Column>
                            <Table.Column className={columnHeaderStyle}>Deadline</Table.Column>
                        </Table.Header>

                        {/* Body Structure */}
                        <Table.Body className="bg-[#121212]">
                            {jobs.length === 0 ? (
                                <Table.Row className="hover:bg-transparent">
                                    <Table.Cell colSpan={5} className="text-center py-12 text-neutral-500 text-sm bg-transparent">
                                        No active job listings found.
                                    </Table.Cell>
                                </Table.Row>
                            ) : (
                                jobs.map((job) => (
                                    <Table.Row
                                        key={job.id}
                                        className="border-b border-neutral-900 last:border-0 hover:bg-neutral-900/60 transition-colors bg-transparent"
                                    >
                                        {/* Title cell */}
                                        <Table.Cell className="py-4 px-4 font-medium text-white text-sm bg-transparent">
                                            {job.title}
                                        </Table.Cell>

                                        {/* Category cell */}
                                        <Table.Cell className="py-4 px-4 bg-transparent">
                                            <span className="text-xs bg-neutral-900 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-800">
                                                {job.category}
                                            </span>
                                        </Table.Cell>

                                        {/* Location cell */}
                                        <Table.Cell className="py-4 px-4 bg-transparent">
                                            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                                                <FiMapPin className={job.location?.toLowerCase() === "remote" ? "text-emerald-400" : "text-neutral-500"} />
                                                <span className={job.location?.toLowerCase() === "remote" ? "text-emerald-400 font-medium" : ""}>
                                                    {job.location}
                                                </span>
                                            </div>
                                        </Table.Cell>

                                        {/* Max Salary cell */}
                                        <Table.Cell className="py-4 px-4 bg-transparent">
                                            <div className="flex items-center text-sm font-semibold text-neutral-100">
                                                <FiDollarSign className="text-neutral-500 text-xs mr-0.5" />
                                                {Number(job.maxSalary).toLocaleString()}
                                                <span className="text-[10px] text-neutral-500 ml-1 font-normal">{job.currency || "USD"}</span>
                                            </div>
                                        </Table.Cell>

                                        {/* Deadline cell */}
                                        <Table.Cell className="py-4 px-4 bg-transparent">
                                            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                                                <FiCalendar className="text-neutral-500" />
                                                <span>{job.deadline}</span>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            )}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
}

/* --- Fixed Style Constants --- */
const columnHeaderStyle = "bg-[#18181b] text-neutral-400 font-semibold text-xs tracking-wider uppercase py-3 px-4 border-b border-neutral-800";