

import { LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function DeshboardSidebar() {
    const navItems= [
        { icon: House, href: "/deshboard/recruiter", label: "Home" },
        { icon: Magnifier, href: "/deshboard/recruiter/jobs/new", label: "Post a Job" },
        { icon: Envelope, href: "/deshboard/recruiter/jobs", label: "All Jobs" },
        { icon: Bell, href: "/deshboard/recruiter/company", label: "Company Profile" },
        { icon: Gear, href: "/deshboard/recruiter/settings", label: "Settings" },
    ];

    const NavigationLinks = () => (
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <Link
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:border hover:border-neutral-700/50 "
                    href={item.href}
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </Link>
            ))}
        </nav>
    );

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r lg:block">
                {NavigationLinks()}
            </aside>
            <Drawer >
                <Button variant="secondary" className="shrink-0 lg:hidden">
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {NavigationLinks()}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}