import React from 'react';
import Reviews from './user-reviews/user-reviews';
import user3 from '../../../media/user-3.jpg';
import user4 from '../../../media/user-4.jpg';
import user5 from '../../../media/user-5.jpg';
import user6 from '../../../media/user-6.jpg';

const HotelContent = () => (
    <div className="detail">
        <div className="description">
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos 
                debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto 
                voluptate.
            </p>
            <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore 
            iure aliquid aliquam.
            </p>
            <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets aloud</li>
                <li className="list__item">We speak all langues</li>
                <li className="list__item">Perfect for falilies</li>
            </ul>
            <div className="recomend">
                <p className="recomend__count">Lucy and 3 other friends recomend this hotel</p>
                <div className="recomend__friends">
                    <img src={user3} alt="friend1" className="recomend__photo"/>
                    <img src={user4} alt="friend2" className="recomend__photo"/>
                    <img src={user5} alt="friend3" className="recomend__photo"/>
                    <img src={user6} alt="friend4" className="recomend__photo"/>
                </div>
            </div>
            
        </div>
        <Reviews></Reviews>
    </div>
);

export default HotelContent;