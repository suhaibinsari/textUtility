import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (

        <div className='h-[50px] top-32 w-full flex items-center justify-center text-center  absolute'>
        {props.alert && <div className={`alert ${props.alert.type} bg-black z-50 text-white`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
        </div>

    )
}

export default Alert
