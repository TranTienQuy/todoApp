import React from 'react'
import './loading.css'

const Loading = () => {
    return (
        <div>
            <svg viewBox="0 0 50 50">
                <circle className="ring" cx="25" cy="25" r="20" />
                <circle className="ball" cx="25" cy="5" r="3.5" />
            </svg>
        </div>
    )
}

export default Loading