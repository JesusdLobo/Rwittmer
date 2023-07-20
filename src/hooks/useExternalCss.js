import { useEffect } from 'react'

export default function useExternalLink ({ url }) {
  useEffect(() => {
    const head = document.querySelector('body')
    const link = document.createElement('link')

    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('media', 'all')
    link.setAttribute('href', url)
    head.appendChild(link)

    return () => {
      head.removeChild(link)
    }
  }, [url])
};
