import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from "@/components/Dropdown"
import { LogOut } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className="min-w-full flex justify-between items-center py-1 px-4 bg-slate-800">
        <h2 className="text-xl text-slate-200 font-bold">EV - Ketos</h2>
        <Dropdown>
          <DropdownButton>Admin</DropdownButton>
          <DropdownContent>
            <DropdownItem icon={LogOut} to="/logout">
              Logout
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
    </>
  )
}

export default NavBar
