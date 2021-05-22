import React from 'react'
import './style.scss';

export default {
    INPUTICONR: ({placeholder, addIcon, types, defaultValue, onClick, onChange, value, onKeyPress, id}) => {
        return (
            <div className="input-group cs-inputDefault-bg">
                <input id={id} onChange={onChange} value={value} placeholder={placeholder} type={types} onKeyPress={onKeyPress} defaultValue={defaultValue} className="form-control cs-inputDefault-bg-input cs-pd"/>
                <div className="cs-inputDefault-bg-appendR">
                  <i className={`${addIcon} cs-inputDefault-bg-appendR-icon`} onClick={onClick}></i>
                </div>
            </div>
        )
    },

    INPUTICONL: ({placeholder, addIcon, types, onChange, value, id}) => {
        return (
            <div className="input-group cs-inputDefault-bg">
                <div className="cs-inputDefault-bg-appendL">
                  <i className={`${addIcon} cs-inputDefault-bg-appendL-icon`}></i>
                </div>
                <input id={id} placeholder={placeholder} onChange={onChange} value={value} type={types} className="form-control cs-inputDefault-bg-input"/>
            </div>
        )
    },

    INPUTICONLR: ({placeholder, addIconL, addIconR, types}) => {
        return (
            <div className="input-group cs-inputDefault-bg">
                <div className="cs-inputDefault-bg-appendL">
                  <i className={`${addIconL} cs-inputDefault-bg-appendL-icon`}></i>
                </div>
                <input placeholder={placeholder} type={types} className="form-control cs-inputDefault-bg-input pr-5"/>
                <div className="cs-inputDefault-bg-appendR">
                  <i className={`${addIconR} cs-inputDefault-bg-appendR-icon`}></i>
                </div>
            </div>
        )
    }
}