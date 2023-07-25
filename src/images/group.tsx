import * as React from "react"
import {SVGProps} from "react";

        const Group = (props:SVGProps<SVGSVGElement>) => (
<svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={7}
        fill="none"
        {...props}
        >
<path stroke="#FCFCFC" d="M.354.646 6.18 6.473" />
<path stroke="#fff" d="M5.646 6.303 11.303.646" />
        </svg>
        )
        export default Group

