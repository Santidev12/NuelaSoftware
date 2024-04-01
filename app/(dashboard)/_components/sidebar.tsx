"use client"

import { UserButton } from "@clerk/nextjs"
import { Logo } from "./logo"
import { usePathname, useRouter } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {

return (
    <div className="h-full border-r overflow-y-auto bg-white shadow-sm">
    <div className="flex items-center justify-between mt-5">
      <div className="flex items-center">
        <div className="h-10 w-9 ml-4 mr-2 border rounded-lg">
          <Logo />
        </div>
        <p className="font-medium">Tajamar</p>
      </div>
      <div className="md:mr-5 mr-10">
      <UserButton />
      </div>
    </div>
    <div className="flex flex-col w-full my-20">
            <SidebarRoutes />
        </div>
  </div>
  
)
}