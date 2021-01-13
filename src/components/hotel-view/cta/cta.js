import React from 'react';

const CTA = () => (
    <div className="cta">
        <h2 className="cta__book-now">
            Good news! We have 4 free rooms for your selected dates.
        </h2>
        <button className="btn">
            <span className="btn__visable">Book now</span>
            <span className="btn__invisable">Only 4 rooms left</span>
        </button>
    </div>
);

export default CTA;