"use client";

import { BarChart, Bell, BookOpen, Clock3, Compass, Cuboid, GraduationCap, Home, List, Settings, UsersRound } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Home,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Clock3,
        label: "Horarios",
        href: "/horarios",
    },
    {
        icon: GraduationCap,
        label: "Profesores",
        href: "/profesores",
    },
    {
        icon: UsersRound,
        label: "Familias",
        href: "/familias",
    },
    {
        icon: Cuboid,
        label: "Espacios",
        href: "/espacios",
    },
    {
        icon: BookOpen,
        label: "Asignaturas",
        href: "/asignaturas",
    },
    {
        icon: Bell,
        label: "Notificaciones",
        href: "/notificaciones",
    },
    {
        icon: Settings,
        label: "Settings",
        href: "/settings",
    },
]

const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    }
]

export const SidebarRoutes = () => {
    const pathname = usePathname();
    const isTeacherPage = pathname?.includes("/teacher")
    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}