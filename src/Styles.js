import React from 'react';
import './custom.css';
const style = require('./custom.module.css');

export default function Styles() {
    return (
        <div>
            <h1 className={{style.fontColor}}>Helloo to code improve</h1>
        </div>
    )
}
