import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import CartView from '@/components/CartView'

export const metadata: Metadata = {
  title: 'Your Cart — EcoWeave™',
}

export default async function CartPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const isLoggedIn = Boolean(user)

  return (
    <>
      <SiteNav isLoggedIn={isLoggedIn} />
      <CartView />
      <SiteFooter isLoggedIn={isLoggedIn} />
    </>
  )
}
