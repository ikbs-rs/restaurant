// src/components/Menu.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Index.css'; // Pretpostavimo da imate CSS fajl za stilizovanje
import './animate.css';

const Menu = () => {

    const [activeFilter, setActiveFilter] = useState('*');

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const menuItems = [
        { id: 1, category: 'filter-starters', name: 'Lobster Bisque', price: '$5.95', img: 'assets/img/menu/lobster-bisque.jpg', description: 'Lorem, deren, trataro, filede, nerada' },
        { id: 2, category: 'filter-specialty', name: 'Bread Barrel', price: '$6.95', img: 'assets/img/menu/bread-barrel.jpg', description: 'Lorem, deren, trataro, filede, nerada' },
        { id: 3, category: 'filter-starters', name: 'Crab Cake', price: '$7.95', img: 'assets/img/menu/cake.jpg', description: 'A delicate crab cake served on a toasted roll with lettuce and tartar sauce' },
        { id: 4, category: 'filter-salads', name: 'Caesar Selections', price: '$8.95', img: 'assets/img/menu/caesar.jpg', description: 'Lorem, deren, trataro, filede, nerada' },
        { id: 5, category: 'filter-specialty', name: 'Tuscan Grilled', price: 'v$9.95', img: 'assets/img/menu/tuscan-grilled.jpg', description: 'Grilled chicken with provolone, artichoke hearts, and roasted red pesto' },
        { id: 6, category: 'filter-starters', name: 'Mozzarella Stick', price: '$4.95', img: 'assets/img/menu/mozzarella.jpg', description: 'Lorem, deren, trataro, filede, nerada' },
        { id: 7, category: 'filter-salads', name: 'Greek Salad', price: '$9.95', img: 'assets/img/menu/greek-salad.jpg', description: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives' },
        { id: 8, category: 'filter-salads', name: 'Spinach Salad', price: '$9.95', img: 'assets/img/menu/spinach-salad.jpg', description: 'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette' },
        { id: 9, category: 'filter-starters', name: 'Lobster Roll', price: '$12.95', img: 'assets/img/menu/lobster-roll.jpg', description: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll' },
    ];

    const filteredMenuItems = menuItems.filter(item => activeFilter === '*' || item.category === activeFilter);

    return (
        <section id="menu" className="menu msection-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Menu</h2>
                    {/* <p>Check Our Tasty Menu</p> */}
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                            <li onClick={() => handleFilterChange('*')} className={activeFilter === '*' ? 'filter-active' : ''}>All</li>
                            <li onClick={() => handleFilterChange('filter-starters')} className={activeFilter === 'filter-starters' ? 'filter-active' : ''}>Starters</li>
                            <li onClick={() => handleFilterChange('filter-salads')} className={activeFilter === 'filter-salads' ? 'filter-active' : ''}>Salads</li>
                            <li onClick={() => handleFilterChange('filter-specialty')} className={activeFilter === 'filter-specialty' ? 'filter-active' : ''}>Specialty</li>
                        </ul>
                    </div>
                </div>

                <div className="row menu-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" >
                    <TransitionGroup component={null}>
                        {filteredMenuItems.map(item => (
                            <CSSTransition key={item.id} timeout={500} classNames="fade">
                                <div className={`col-lg-6 menu-item ${item.category}`}>
                                    <img src={item.img} className="menu-img" alt={item.name} />
                                    <div className="menu-content">
                                        <a href="#">{item.name}</a><span>{item.price}</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        {item.description}
                                    </div>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>

        </section>
    );
};

export default Menu;
