"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem = ({
    icon: Icon, 
    label,
    href,

}: SidebarItemProps) => {

    const pathname = usePathname();
    const router = useRouter();

    const isActive = 
        (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    }

    return (
        <button 
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-zinc-700 text-sm font-[300] pl-6 transition-all ",
                 isActive && "font-bold text-black bg-zinc-100 "
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon 
                    size={18}
                    className={cn(
                        "text-slate-700",
                        isActive && "text-black"
                    )}
                />
                {label}
            </div>
           
        </button>
    )
}