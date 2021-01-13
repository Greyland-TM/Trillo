import React from 'react';
import user1 from '../../../../media/user-1.jpg';
import user2 from '../../../../media/user-2.jpg';

const Reviews = () => (
    <div className="user-reviews">
        <figure className="review">
            <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, 
                totam, itaque officia ex.
            </blockquote>
            <figcaption className="review__user">
                <img src={user1} alt="user 1" className="review__photo"/>
                <div className="review__user-box">
                    <p className="review__user-name">Nick Smith</p>
                    <p className="review__user-date">10 January, 2021</p>
                </div>
                <div className="review__rating">7.8</div>
            </figcaption>
        </figure>

        <figure className="review">
            <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
            </blockquote>
            <figcaption className="review__user">
                <img src={user2} alt="user 2" className="review__photo"/>
                <div className="review__user-box">
                    <p className="review__user-name">Mary Thomas</p>
                    <p className="review__user-date">25 Dec, 2020</p>
                </div>
                <div className="review__rating">9.2</div>
            </figcaption>
        </figure>
        <button className="button-inline">Show all <span>&rarr;</span></button>
    </div>
);

export default Reviews;
