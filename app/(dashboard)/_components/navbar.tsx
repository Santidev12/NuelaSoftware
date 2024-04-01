import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

export const Navbar = () => {
    return (
        <div className="p-4 h-full flex items-center bg-white ">
          <MobileSidebar />
          <div className="flex-grow" /> {/* Esto ocupa el espacio restante */}
          <div className="flex md:hidden md:items-center md:justify-end">
            <UserButton />
          </div>
        </div>
      );
}
 
export default Navbar;