import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './QrCode.css';

function QrCode() {

    const [qrCode , setQrCode] = useState('');
    const [input , setInput] = useState('');

    function handleGenerateClick(){
        setQrCode(input);
        setInput('');
    }

    return ( 
        <div className="container">
            <div className='input-container'>
                <input 
                    onChange={(e)=>setInput(e.target.value)} 
                    type='text'
                    placeholder='Enter your name'
                    value={input}
                >
                </input>
                <button
                    className='button-29'
                    onClick={handleGenerateClick}
                    disabled={input && input.trim() ? false : true}
                >Generate
                </button>
            </div>
            {qrCode && qrCode.length ?
            
                <div className='qrcode-container'>
                    <QRCode 
                        id='qrcode-image'
                        value={qrCode}
                        size={40}
                        bgColor='#FFFFFF'
                        fgColor='#3fb8f0ff'
                    /> 
                </div>
                : null
            }
        </div>
    );
}

export default QrCode;