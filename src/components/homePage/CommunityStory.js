import React from 'react';

const CommunityStory = ({ title, description, image }) => {
    return (
        <li>
            <div className="content">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
            <img src={image} />
        </li>
    );
};

export default CommunityStory;