import RouterButton from "@/components/RouterButton"
import LogoOSIS from "@/assets/Logo_OSIS.png"

import { Gauge, Users, SquarePen, Contact } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="w-[280px]">
      <div className="flex min-h-full flex-col items-center gap-16 bg-slate-800 px-4 py-3">
        <div className="h-auto w-48 rounded-md bg-slate-200 p-4">
          <img className="size-full" src={LogoOSIS} alt="Logo OSIS" />
        </div>
        <div className="flex w-full flex-col gap-4">
          <RouterButton to="/" icon={Gauge}>Dashboard</RouterButton>
          <RouterButton to="/data-kandidat" icon={Users}>Data Kandidat</RouterButton>
          <RouterButton to="/daftar-siswa" icon={Contact}>Daftar Siswa</RouterButton>
          <RouterButton to="/tambah-data-siswa" icon={SquarePen}>Tambah Data Siswa</RouterButton>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
