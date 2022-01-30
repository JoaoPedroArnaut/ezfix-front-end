import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CarrinhoProvider } from '../contexts/Carrinho'
import { SessaoProvider } from '../contexts/Sessao'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.css'
import { useEffect } from 'react'
library.add(fab, faCoffee)

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <SessaoProvider>
      <CarrinhoProvider>
        <Component {...pageProps} />
      </CarrinhoProvider>
    </SessaoProvider>
  )
}

export default MyApp
