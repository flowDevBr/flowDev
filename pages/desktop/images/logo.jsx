import * as React from "react"

function SvgComponent(props) {
    return (
        <svg width={50} height={50} viewBox="0 0 512 512" fill="none" {...props}>
            <path
                d="M142.812 317.734V85.877h51.359v231.857h-51.359zM142.014 317.877h285.418v51.886H152.031c-5.532 0-10.017-4.47-10.017-9.984v-41.902z"
                fill="#004FF6"
                fillOpacity={0.5}
            />
            <path
                d="M359.233 142.334c5.532 0 10.017 4.47 10.017 9.984v274.491h-52.057V152.318c0-5.514 4.484-9.984 10.016-9.984h32.024z"
                fill="#004FF6"
            />
            <path
                d="M369.235 184.139c0 5.514-4.485 9.984-10.017 9.984h-275.4v-51.886h275.4c5.532 0 10.017 4.47 10.017 9.984v31.918z"
                fill="#004FF6"
            />
        </svg>
    )
}

export default SvgComponent
