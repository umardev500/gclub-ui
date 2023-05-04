import type React from 'react'
import { useCallback, useEffect } from 'react'

export const useToggle = (ref: React.RefObject<HTMLElement>) => {
    const clickHandler = useCallback(() => {
        const rootView = document.querySelector('#root-view')
        const isOpen = rootView?.classList.contains('shown') ?? false

        if (isOpen) {
            rootView?.classList.remove('shown')
            return
        }

        rootView?.classList.add('shown')
    }, [])

    useEffect(() => {
        const el = ref.current
        el?.addEventListener('click', clickHandler)

        return () => el?.removeEventListener('click', clickHandler)
    }, [])
}
