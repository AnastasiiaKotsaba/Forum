import { ReactNode } from "react"

export interface IModalProps {
    children: ReactNode
    isOpen: boolean
    className: string
    onClose: () => void
    doCloseOnOutsideClick?: boolean
    container?: HTMLDivElement
}