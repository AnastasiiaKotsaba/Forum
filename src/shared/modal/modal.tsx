import { IModalProps } from "./modal.types";
import styles from "./modal.module.css";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal(props: IModalProps) {
    const { isOpen, onClose, children, className, doCloseOnOutsideClick, container } = props

    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!doCloseOnOutsideClick) return

        function clickOutOfModal(event: MouseEvent) {
            const target = event.target as HTMLElement

            // Якщо контейнер переданий через пропси, використовуємо його, інакше використовуємо document.body
            if (!modalRef.current?.contains(target)) {
                onClose()
            }
        }
        document.body.addEventListener("click", clickOutOfModal)
        return () => document.body.removeEventListener("click", clickOutOfModal)
    }, [doCloseOnOutsideClick, onClose])

    if (!isOpen) return null

    return createPortal(
        <div className={`${className} ${styles.modal}`} ref={modalRef}>
            {children}
        </div>,
        container ?? document.body  
    )

}


