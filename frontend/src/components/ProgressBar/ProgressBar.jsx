import React from 'react'
import './progressbar.css'

export default function ProgressBar(props) {

    const { progress } = props;

    return (
        <div className='bar-container'>
            <div className='progress' style={{ 'width': progress }} />
        </div>
    )
}
