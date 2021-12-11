import { NextRouter } from 'next/router'
import { useState, useEffect } from 'react'

const moveToPosition = (ele: HTMLElement | null) =>
  ele && ele.scrollIntoView({ behavior: 'smooth' })

const useHashLink = (router: NextRouter) => {
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const hash = sessionStorage.getItem('current_hash')
    if (hash) {
      setActiveHash(hash)
      moveToPosition(document.getElementById(hash))
    }

    if (window.location.hash) {
      const hash = window.location.hash.split('#')[1]
      if (hash) {
        setActiveHash(hash)
        sessionStorage.setItem('current_hash', hash)
        moveToPosition(document.getElementById(hash))
      } else {
        setActiveHash('')
        sessionStorage.removeItem('current_hash')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    const onHashChangeStart = (url: string) => {
      const hash = url.split('#')[1]
      if (hash) {
        setActiveHash(hash)
        sessionStorage.setItem('current_hash', hash)
        moveToPosition(document.getElementById(hash))
      } else {
        setActiveHash('')
        sessionStorage.removeItem('current_hash')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    router.events.on('hashChangeStart', onHashChangeStart)

    return () => {
      sessionStorage.removeItem('current_hash')
      router.events.off('hashChangeStart', onHashChangeStart)
    }
  }, [activeHash])

  return { activeHash }
}

export default useHashLink
