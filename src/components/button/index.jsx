import React from 'react'
import './style.scss';

export default {
    PRIMARY: (props) => {
        return (
            <button className={`cs-btn-primary ${props.addClass}`} {...props} >
                {props.text}
            </button>
        )
    },
    SECONDARY: ({addClass, style, text, onClick, type}) => {
        return (
            <button type={type} className={`cs-btn-secondary ${addClass}`} onClick={onClick} style={style} >
                {text}
            </button>
        )
    },
    WARNING: ({addClass, style, text, onClick}) => {
        return (
            <button className={`cs-btn-warning ${addClass}`} onClick={onClick} style={style} >
                {text}
            </button>
        )
    },
    SUCCESS: ({addClass, style, text, onClick, type, disabled}) => {
        return (
            <button className={`cs-btn-success ${addClass}`} onClick={onClick} style={style} type={type} disabled={disabled}>
                {text}
            </button>
        )
    },
    DANGER: (props) => {
        return (
            <button className={`cs-btn-danger ${props.addClass}`} {...props} >
                {props.text}
            </button>
        )
    },
    INFO: ({addClass, style, text, onClick}) => {
        return (
            <button className={`cs-btn-info ${addClass}`} onClick={onClick} style={style} >
                {text}
            </button>
        )
    },

    OL_PRIMARY: ({addClass, style, text, onClick}) => {
        return (
            <button className={`cs-btnOL-primary ${addClass}`} onClick={onClick} style={style} >
                {text}
            </button>
        )
    },
    OL_SECONDARY: ({addClass, style, text, onClick}) => {
        return (
            <button className={`cs-btnOL-secondary ${addClass}`} onClick={onClick} style={style} >
                {text}
            </button>
        )
    },
    OL_WARNING: ({addClass, style, text, onClick}) => {
        return (
            <button className={`cs-btnOL-warning ${addClass}`} onClick={onClick} style={style} >
                {text}
            </button>
        )
    },
    OL_SUCCESS: ({addClass, style, text, onClick}) => {
        return (
            <button className={`cs-btnOL-success ${addClass}`} onClick={onClick} style={style} >
                {text}
            </button>
        )
    },
    OL_DANGER: ({addClass, style, text, onClick}) => {
        return (
            <button className={`cs-btnOL-danger ${addClass}`} onClick={onClick} style={style} >
                {text}
            </button>
        )
    },
    OL_INFO: ({addClass, style, text, onClick}) => {
        return (
            <button className={`cs-btnOL-info ${addClass}`} onClick={onClick} style={style} >
                {text}
            </button>
        )
    }
}