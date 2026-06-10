import React from "react";
import { Card } from "@heroui/react";

export default function StatCard({ title, value, icon: Icon, iconBg = "bg-neutral-800" }) {
    return (
        <Card className="border border-neutral-800 bg-[#121212] text-white p-5 shadow-sm rounded-xl flex flex-col gap-4 items-start justify-between">
            {/* Icon Container */}
            <div className={`p-2.5 rounded-lg ${iconBg} flex items-center justify-center text-neutral-300`}>
                {Icon && <Icon className="w-5 h-5" />}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1 w-full">
                <p className="text-xs text-neutral-400 font-medium tracking-wide">
                    {title}
                </p>
                <h3 className="text-3xl font-semibold text-neutral-100 tracking-tight">
                    {value}
                </h3>
            </div>
        </Card>
    );
}