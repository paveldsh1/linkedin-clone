import React from 'react'
import './Widgets.css'
import { FiberManualRecord, Info } from '@mui/icons-material'

function Widgets() {

    const newArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className="widgets__articleLeft">
                <FiberManualRecord></FiberManualRecord>
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div> 
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info></Info>
            </div>
            {newArticle("Coronavirus: UK updates", "Top news - 886 readers")}
            {newArticle("Is Redux too good,", "Code - 552 readers")}
        </div>
    )
}

export default Widgets
