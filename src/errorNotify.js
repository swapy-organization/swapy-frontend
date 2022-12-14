import React from "react";


export default function Notification ( props ) {
    return (
        <div className='notification error'>
            {props.error}
            <button className='error'>
            </button>
        </div>
    );
}
