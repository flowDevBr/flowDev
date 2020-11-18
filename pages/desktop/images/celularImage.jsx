import * as React from "react"

function SvgComponent(props) {
    return (
        <svg width={150} height={262} viewBox="0 0 150 262" fill="none" {...props}>
            <rect width={150} height={262} rx={15} fill="#0C112B" />
            <rect x={9} y={8} width={133} height={246} rx={15} fill="#141B35" />
            <rect
                x={122.5}
                y={13}
                width={3}
                height={2.5}
                rx={1.25}
                transform="rotate(90 122.5 13)"
                fill="#0C112B"
            />
            <rect
                x={126.5}
                y={12}
                width={4}
                height={2.5}
                rx={1.25}
                transform="rotate(90 126.5 12)"
                fill="#0C112B"
            />
            <rect
                x={130.5}
                y={11}
                width={5}
                height={2.5}
                rx={1.25}
                transform="rotate(90 130.5 11)"
                fill="#0C112B"
            />
            <rect x={105} y={11.5} width={10} height={4} rx={2} fill="#0C112B" />
            <path d="M105 13.5a2 2 0 012-2h5v4h-5a2 2 0 01-2-2z" fill="#014EF6" />
            <rect x={21} y={116} width={16} height={2} rx={1} fill="#1D2645" />
            <rect x={52} y={116} width={16} height={2} rx={1} fill="#1D2645" />
            <path d="M51 8h52l-3 8H55l-4-8z" fill="#0C112B" />
            <rect x={83} y={86} width={16} height={2} rx={1} fill="#1D2645" />
            <rect x={114} y={86} width={16} height={2} rx={1} fill="#1D2645" />
            <path
                d="M18 67a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H23a5 5 0 01-5-5V67zM49 67a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H54a5 5 0 01-5-5V67z"
                fill="#0C112B"
            />
            <rect x={52} y={86} width={16} height={2} rx={1} fill="#1D2645" />
            <rect x={21} y={86} width={16} height={2} rx={1} fill="#1D2645" />
            <path
                d="M80 67a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H85a5 5 0 01-5-5V67z"
                fill="#014EF6"
            />
            <path
                d="M111 67a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5h-12a5 5 0 01-5-5V67z"
                fill="#0C112B"
            />
            <rect x={83} y={56} width={16} height={2} rx={1} fill="#1D2645" />
            <rect x={114} y={56} width={16} height={2} rx={1} fill="#1D2645" />
            <path
                d="M18 37a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H23a5 5 0 01-5-5V37zM49 37a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H54a5 5 0 01-5-5V37z"
                fill="#0C112B"
            />
            <rect x={52} y={56} width={16} height={2} rx={1} fill="#1D2645" />
            <rect x={21} y={56} width={16} height={2} rx={1} fill="#1D2645" />
            <path
                d="M80 37a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H85a5 5 0 01-5-5V37zM111 37a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5h-12a5 5 0 01-5-5V37zM18 97a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H23a5 5 0 01-5-5V97zM49 97a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H54a5 5 0 01-5-5V97zM19 228a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H24a5 5 0 01-5-5v-12zM50 228a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H55a5 5 0 01-5-5v-12zM81 228a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5H86a5 5 0 01-5-5v-12zM112 228a5 5 0 015-5h12a5 5 0 015 5v12a5 5 0 01-5 5h-12a5 5 0 01-5-5v-12z"
                fill="#0C112B"
            />
        </svg>
    )
}

export default SvgComponent
