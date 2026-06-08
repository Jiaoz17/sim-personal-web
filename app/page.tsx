import { Header } from '@/components/header'
import { ProfileTabs } from '@/components/profile-tabs'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProfileTabs />
    </main>
  )
}
