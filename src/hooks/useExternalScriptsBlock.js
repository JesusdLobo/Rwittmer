import { useEffect } from 'react'

export default function useExternalScriptsBlock ({ content }) {
  useEffect(() => {
    const head = document.querySelector('body')
    const script = document.createElement('script')

    script.textContent = content
    head.appendChild(script)

    return () => {
      head.removeChild(script)
    }
  }, [content])
};
