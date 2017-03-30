import React from 'react';

const DonationCard = ({ title, amount, buttonContent, upperRemark, lowerRemark }) => {
    let color;
    amount.toLowerCase() === 'free' ? color = 'free' : color = 'premium'

    return (
        <div className={'donate-tile donate-' + color}>
			<p>{title}</p>
            <h2>{amount}</h2>
            <p className="sub-text">
                {upperRemark}
            </p>	
            <hr />
            <p className="sub-text">
                {lowerRemark}
            </p>
            <button>{buttonContent}</button>
        </div>
    );
};

export default DonationCard;