import { useState } from "react"
import Layout from "@/components/Layout"
import Search from "@/components/ui/Search"
import Icon from "@/components/ui/Icon"
import ViewSwitch, { ViewType } from "@/components/ui/ViewSwitch"
import Notification from "../Notification"
import ActiveProjectsList from "./ActiveProjectsList"

export default function ActiveProjectPage() {
  const [view, setView] = useState<ViewType>("grid")

  return (
    <Layout type="admin">
      <div className="px-5">
        <Notification />
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Icon name="Sparkle" size={40} weight="fill" className="text-project" />
            <p className="font-urwgeometric text-5xl leading-none text-gray_1">
              Project Requests
              <span className="font-urwgeometric text-3xl text-project"> 7</span>
            </p>
          </div>
          <div className="flex items-center gap-5 rounded-3xl bg-gray_overlay_6 p-5">
            <ViewSwitch view={view} setView={setView} />
            <Search className="w-80" placeholder="Search for Artist/Band..." />
          </div>
        </div>

        <ActiveProjectsList />
      </div>
    </Layout>
  )
}
