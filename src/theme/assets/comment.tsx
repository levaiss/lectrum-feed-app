// Core
import { type FC } from 'react'

interface CommentIconProps {
  className?: string
}

export const CommentIcon: FC<CommentIconProps> = ({ className }) => {
  return (
        <>
            <svg
                className = { className }
                width = '24' height = '24'
                viewBox = '0 0 24 24' fill = 'none'
                xmlns = 'http://www.w3.org/2000/svg'>
                <path
                    d = 'M14.0442 2.99199L14.1869 2.99234C18.0754 3.06553 21.0906 6.12406 21.096 10.03V10.045C21.0933 12.1512 20.0647 14.3074 18.3184 15.7855C17.5518 16.434 15.6384 17.7416 13.838 18.9351C12.0679 20.1086 10.4636 21.1349 10.3152 21.2294C10.3149 21.2284 10.3146 21.2274 10.3143 21.2264C10.3131 21.2222 10.3121 21.2183 10.3114 21.2147L10.311 21.2129V17.404V16.6822L9.58973 16.6545C5.67502 16.5045 2.84601 13.6916 2.84601 10.034C2.84601 6.07302 5.93641 2.98199 9.89601 2.98199H9.89711H9.89801L14.0442 2.99199Z' stroke = '#616770'
                    strokeWidth = '1.5' />
            </svg>

        </>
  )
}
