import ReactDom from 'react-dom'
import type { JSX } from 'react/jsx-runtime'

interface Props {
    children: JSX.Element
    onClose: React.MouseEventHandler<HTMLDivElement>
}

const Modal = ({ children, onClose }: Props) => {
    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-500/50 z-[1000]" onClick={onClose} />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] rounded-2xl bg-body-bg z-[1000]">{children}</div>
        </>,
        document.body
    )
}

export default Modal