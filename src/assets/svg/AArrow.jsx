import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        viewBox="0 0 256 256"
        fill={props.color}
        {...props}
    >
        <path d="M196 64v104a4 4 0 0 1-8 0V73.656L66.828 194.828a4 4 0 0 1-5.656-5.656L182.344 68H88a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4Z" />
    </svg>
)
export default SvgComponent
