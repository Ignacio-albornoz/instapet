import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [showPhotoCard, setShowPhotoCard] = useState(false)
  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShowPhotoCard(true)
        observer.disconnect()
      }
    })

    observer.observe(element.current)
  }, [element])

  return [showPhotoCard, element]
}
