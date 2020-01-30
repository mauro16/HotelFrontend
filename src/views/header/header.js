import React from 'react';
var Header = props => {
    return (
        <header className="main-header">
            {/* header-top*/}
            <div className="header-top fl-wrap">
                <div className="container">
                    <div className="logo-holder">
                        <a href="index.html"><img src="images/logo.png" alt /></a>
                    </div>
                    <a href="dashboard-add-listing.html" className="add-hotel">
                        Add Your Hotel{" "}
                        <span>
                            <i className="far fa-plus" />
                        </span>
                    </a>
                    <div className="show-reg-form modal-open">
                        <i className="fa fa-sign-in" />
                        Sign In
                        </div>
                    <div className="lang-wrap">
                        <div className="show-lang">
                            <img src="images/lan/1.png" alt /> <span>Eng</span>
                            <i className="fa fa-caret-down" />
                        </div>
                        <ul className="lang-tooltip green-bg">
                            <li>
                                <a href="#"> <img src="images/lan/4.png" alt /> De</a>
                            </li>
                            <li>
                                <a href="#"> <img src="images/lan/5.png" alt /> It </a>
                            </li>
                            <li>
                                <a href="#"> <img src="images/lan/2.png" alt /> Fr </a>
                            </li>
                            <li>
                                <a href="#"> <img src="images/lan/3.png" alt /> Es </a>
                            </li>
                        </ul>
                    </div>
                    <div className="currency-wrap">
                        <div className="show-currency-tooltip">
                            <i className="fas fa-dollar-sign" />{" "}
                            <span>
                                USD <i className="fa fa-caret-down" />{" "}
                            </span>
                        </div>
                        <ul className="currency-tooltip">
                            <li>
                                <a href="#"> <i className="far fa-euro-sign" /> EUR</a>
                            </li>
                            <li>
                                <a href="#"> <i className="far fa-pound-sign" /> GBP</a>
                            </li>
                            <li>
                                <a href="#"><i className="far fa-ruble-sign" /> RUR  </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* header-top end*/}
            {/* header-inner*/}
            <div className="header-inner fl-wrap">
                <div className="container">
                    <div className="show-search-button">
                        <span>Search</span> <i className="fas fa-search" />{" "}
                    </div>
                    <div className="wishlist-link">
                        <i className="fal fa-heart" />
                        <span className="wl_counter">3</span>
                    </div>
                    <div className="header-user-menu">
                        <div className="header-user-name">
                            <span>
                                <img src="images/avatar/1.jpg" alt />
                            </span> My account
                            </div>
                        <ul>
                            <li>
                                <a href="dashboard-myprofile.html"> Edit profile</a>
                            </li>
                            <li>
                                <a href="dashboard-add-listing.html"> Add Listing</a>
                            </li>
                            <li>
                                <a href="dashboard-bookings.html"> Bookings </a>
                            </li>
                            <li>
                                <a href="dashboard-review.html"> Reviews </a>
                            </li>
                            <li>
                                <a href="#">Log Out</a>
                            </li>
                        </ul>
                    </div>
                    <div className="home-btn">
                        <a href="index.html">
                            <i className="fas fa-home" />
                        </a>
                    </div>
                    {/* nav-button-wrap*/}
                    <div className="nav-button-wrap color-bg">
                        <div className="nav-button">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    {/* nav-button-wrap end*/}
                    {/*  navigation */}
                    <div className="nav-holder main-menu">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#" className="act-link">
                                        Home <i className="fas fa-caret-down" />
                                    </a>
                                    {/*second level */}
                                    <ul>
                                        <li>
                                            <a href="index.html">Parallax Image</a>
                                        </li>
                                        <li>
                                            <a href="index2.html">Slider</a>
                                        </li>
                                        <li>
                                            <a href="index3.html">Video</a>
                                        </li>
                                        <li>
                                            <a href="index4.html">Slideshow</a>
                                        </li>
                                    </ul>
                                    {/*second level end*/}
                                </li>
                                <li>
                                    <a href="#">
                                        Listings <i className="fas fa-caret-down" />
                                    </a>
                                    {/*second level */}
                                    <ul>
                                        <li>
                                            <a href="listing.html">Column map</a>
                                        </li>
                                        <li>
                                            <a href="listing6.html">Column map 2</a>
                                        </li>
                                        <li>
                                            <a href="listing2.html">Fullwidth Map</a>
                                        </li>
                                        <li>
                                            <a href="listing3.html">Fullwidth Map 2</a>
                                        </li>
                                        <li>
                                            <a href="listing4.html">Without Map</a>
                                        </li>
                                        <li>
                                            <a href="listing5.html">Without Map 2</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Single <i className="fas fa-caret-down" />
                                            </a>
                                            {/*third  level  */}
                                            <ul>
                                                <li>
                                                    <a href="listing-single.html">Style 1</a>
                                                </li>
                                                <li>
                                                    <a href="listing-single2.html">Style 2</a>
                                                </li>
                                                <li>
                                                    <a href="listing-single3.html">Style 3</a>
                                                </li>
                                                <li>
                                                    <a href="listing-single4.html">Style 4</a>
                                                </li>
                                            </ul>
                                            {/*third  level end*/}
                                        </li>
                                    </ul>
                                    {/*second level end*/}
                                </li>
                                <li>
                                    <a href="blog.html">News</a>
                                </li>
                                <li>
                                    <a href="#">
                                        Pages <i className="fas fa-caret-down" />
                                    </a>
                                    {/*second level */}
                                    <ul>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="contacts.html">Contacts</a>
                                        </li>
                                        <li>
                                            <a href="author-single.html">User single</a>
                                        </li>
                                        <li>
                                            <a href="help.html">Help FAQ</a>
                                        </li>
                                        <li>
                                            <a href="pricing-tables.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="booking-single.html">Booking</a>
                                        </li>
                                        <li>
                                            <a href="dashboard.html">User Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="blog2.html">Blog Classik</a>
                                        </li>
                                        <li>
                                            <a href="blog-single.html">Blog Single</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-add-listing.html">Add Listing</a>
                                        </li>
                                        <li>
                                            <a href="404.html">404</a>
                                        </li>
                                        <li>
                                            <a href="invoice.html">Invoice</a>
                                        </li>
                                        <li>
                                            <a href="coming-soon.html">Coming Soon</a>
                                        </li>
                                    </ul>
                                    {/*second level end*/}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* navigation  end */}
                    {/* wishlist-wrap*/}
                    <div className="wishlist-wrap scrollbar-inner novis_wishlist">
                        <div className="box-widget-content">
                            <div className="widget-posts fl-wrap">
                                <ul>
                                    <li className="clearfix">
                                        <a href="#" className="widget-posts-img">
                                            <img src="images/gal/1.jpg" className="respimg" alt />
                                        </a>
                                        <div className="widget-posts-descr">
                                            <a href="#" title>Park Central </a>
                                            <div
                                                className="listing-rating card-popup-rainingvis"
                                                data-starrating2={5}
                                            ></div>
                                            <div className="geodir-category-location fl-wrap">
                                                <a href="#"> <i className="fas fa-map-marker-alt" /> 40 JOURNAL SQUARE PLAZA, NJ, US</a>
                                            </div>
                                            <span className="rooms-price">
                                                $80 <strong> / Awg</strong>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <a href="#" className="widget-posts-img">
                                            <img src="images/gal/1.jpg" className="respimg" alt />
                                        </a>
                                        <div className="widget-posts-descr">
                                            <a href="#" title> Holiday Home</a>
                                            <div
                                                className="listing-rating card-popup-rainingvis"
                                                data-starrating2={3}
                                            ></div>
                                            <div className="geodir-category-location fl-wrap">
                                                <a href="#">
                                                    <i className="fas fa-map-marker-alt" /> 75 PRINCE ST, NY, USA </a>
                                            </div>
                                            <span className="rooms-price">
                                                $50 <strong> / Awg</strong>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <a href="#" className="widget-posts-img">
                                            <img src="images/gal/1.jpg" className="respimg" alt />
                                        </a>
                                        <div className="widget-posts-descr">
                                            <a href="#" title> Moonlight Hotel </a>
                                            <div
                                                className="listing-rating card-popup-rainingvis"
                                                data-starrating2={4}></div>
                                            <div className="geodir-category-location fl-wrap">
                                                <a href="#"> <i className="fas fa-map-marker-alt" /> 70 BRIGHT ST NEW YORK, USA </a>
                                            </div>
                                            <span className="rooms-price">
                                                $105 <strong> / Awg</strong>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* wishlist-wrap end*/}
                </div>
            </div>
            {/* header-inner end*/}
            {/* header-search */}
            <div className="header-search vis-search">
                <div className="container">
                    <div className="row">
                        {/* header-search-input-item */}
                        <div className="col-sm-4">
                            <div className="header-search-input-item fl-wrap location autocomplete-container">
                                <label>Destination or Hotel Name</label>
                                <span className="header-search-input-item-icon">
                                    <i className="fal fa-map-marker-alt" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="autocomplete-input"
                                    id="autocompleteid"

                                />
                                <a href="#">
                                    <i className="fal fa-dot-circle" />
                                </a>
                            </div>
                        </div>
                        {/* header-search-input-item end */}
                        {/* header-search-input-item */}
                        <div className="col-sm-3">
                            <div className="header-search-input-item fl-wrap date-parent">
                                <label>Date In-Out </label>
                                <span className="header-search-input-item-icon">
                                    <i className="fal fa-calendar-check" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="When"
                                    name="header-search"

                                />
                            </div>
                        </div>
                        {/* header-search-input-item end */}
                        {/* header-search-input-item */}
                        <div className="col-sm-3">
                            <div className="header-search-input-item fl-wrap">
                                <div className="quantity-item">
                                    <label>Rooms</label>
                                    <div className="quantity">
                                        <input
                                            type="number"
                                            min={1}
                                            max={9}
                                            step={1}
                                            defaultValue={1}
                                        />
                                    </div>
                                </div>
                                <div className="quantity-item">
                                    <label>Adults</label>
                                    <div className="quantity">
                                        <input
                                            type="number"
                                            min={1}
                                            max={3}
                                            step={1}
                                            defaultValue={1}
                                        />
                                    </div>
                                </div>
                                <div className="quantity-item">
                                    <label>Children</label>
                                    <div className="quantity">
                                        <input
                                            type="number"
                                            min={0}
                                            max={3}
                                            step={1}
                                            defaultValue={0}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* header-search-input-item end */}
                        {/* header-search-input-item */}
                        <div className="col-sm-2">
                            <div className="header-search-input-item fl-wrap">
                                <button
                                    className="header-search-button"
                                    onClick="window.location.href='listing.html'" >
                                    Search <i className="far fa-search" />
                                </button>
                            </div>
                        </div>
                        {/* header-search-input-item end */}
                    </div>
                </div>
                <div className="close-header-search">
                    <i className="fal fa-angle-double-up" />
                </div>
            </div>
            {/* header-search  end */}
        </header>
    );
}
export default Header