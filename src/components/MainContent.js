import React from 'react'
import '../styles/MainContent.scss';

function MainContent({ contentInfo }) {
    return (
        <div className="content-container">
            <h1 className="content-title">{contentInfo.title}</h1>
            <p className="content-description">{contentInfo.description}</p>
            <ul className="custom-list">
                {contentInfo.points.map((point, i) => (
                    <li key={"point_"+i} className="content-bullet">{point}</li>
                ))}
            </ul>
        </div>
    )
}

export default MainContent;