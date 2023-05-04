import type React from 'react'
import { useCallback, useEffect } from 'react'

export const useBackdrop = (ref: React.RefObject<HTMLDivElement>) => {
    const clickHandler = useCallback(() => {
        const rootView = document.querySelector('#root-view')
        rootView?.classList.remove('shown')
    }, [])

    useEffect(() => {
        const el = ref.current
        el?.addEventListener('click', clickHandler)

        return () => el?.removeEventListener('click', clickHandler)
    }, [])
}
