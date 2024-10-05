import React from 'react';
import { RingLoader } from 'react-spinners';

function Loader() {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 1)', // adjust the opacity and color as needed
                zIndex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <RingLoader color="hsla(0, 95%, 50%, 1)" />
        </div>
    );
}

export default Loader;