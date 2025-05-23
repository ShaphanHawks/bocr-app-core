"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { ApplianceScanner } from "@/components/appliance-scanner"
import { LookupsModule } from "@/components/lookups-module"

export default function Dashboard() {
  const [modelNumber, setModelNumber] = useState<string>("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-4">
        <DashboardHeader />

        <div className="mt-4">
          <ApplianceScanner onModelNumberChange={setModelNumber} />
          {modelNumber && <LookupsModule modelTag={modelNumber} />}
        </div>
      </div>
    </div>
  )
}
