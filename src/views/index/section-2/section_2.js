import React from 'react'

var Section2 = props => {

    return (
        <section id="sec2">
            <div className="container">
                <div className="section-title">
                    <div className="section-title-separator">
                        <span />
                    </div>
                    <h2>Popular Destination</h2>
                    <span className="section-separator" />
                    <p>
                        Explore some of the best tips from around the city from our
                        partners and friends.
            </p>
                </div>
            </div>
            {/* portfolio start */}
            <div className="gallery-items fl-wrap mr-bot spad home-grid">
                {/* gallery-item*/}
                <div className="gallery-item">
                    <div className="grid-item-holder">
                        <div className="listing-item-grid">
                            <div className="listing-counter">
                                <span>79 </span> Hotels
                </div>
                            <img src="images/city/1.jpg" alt />
                            <div className="listing-item-cat">
                                <h3>
                                    <a href="listing.html">Rome</a>
                                </h3>
                                <div className="weather-grid" data-grcity="Rome" />
                                <div className="clearfix" />
                                <p>
                                    Constant care and attention to the patients makes good
                                    record
                  </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gallery-item end*/}
                {/* gallery-item*/}
                <div className="gallery-item gallery-item-second">
                    <div className="grid-item-holder">
                        <div className="listing-item-grid">
                            <img src="images/city/3.jpg" alt />
                            <div className="listing-counter">
                                <span>43 </span> Hotels
                </div>
                            <div className="listing-item-cat">
                                <h3>
                                    <a href="listing.html">Paris</a>
                                </h3>
                                <div className="weather-grid" data-grcity="Paris" />
                                <div className="clearfix" />
                                <p>
                                    Constant care and attention to the patients makes good
                                    record
                  </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gallery-item end*/}
                {/* gallery-item*/}
                <div className="gallery-item">
                    <div className="grid-item-holder">
                        <div className="listing-item-grid">
                            <div className="listing-counter">
                                <span>23 </span> Hotels
                </div>
                            <img src="images/city/1.jpg" alt />
                            <div className="listing-item-cat">
                                <h3>
                                    <a href="listing.html">London</a>
                                </h3>
                                <div className="weather-grid" data-grcity="London" />
                                <div className="clearfix" />
                                <p>
                                    Constant care and attention to the patients makes good
                                    record
                  </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gallery-item end*/}
                {/* gallery-item*/}
                <div className="gallery-item">
                    <div className="grid-item-holder">
                        <div className="listing-item-grid">
                            <div className="listing-counter">
                                <span>57</span> Hotels
                </div>
                            <img src="images/city/1.jpg" alt />
                            <div className="listing-item-cat">
                                <h3>
                                    <a href="listing.html">Dubai</a>
                                </h3>
                                <div className="weather-grid" data-grcity="Dubai" />
                                <div className="clearfix" />
                                <p>
                                    Constant care and attention to the patients makes good
                                    record
                  </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gallery-item end*/}
                {/* gallery-item*/}
                <div className="gallery-item">
                    <div className="grid-item-holder">
                        <div className="listing-item-grid">
                            <div className="listing-counter">
                                <span>122</span> Hotels
                </div>
                            <img src="images/city/1.jpg" alt />
                            <div className="listing-item-cat">
                                <h3>
                                    <a href="listing.html">New York</a>
                                </h3>
                                <div className="weather-grid" data-grcity="New York" />
                                <div className="clearfix" />
                                <p>
                                    Constant care and attention to the patients makes good
                                    record
                  </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gallery-item end*/}
            </div>
            {/* portfolio end */}
            <a href="listing.html" className="btn    color-bg">
                Explore All Cities
          <i className="fas fa-caret-right" />
            </a>
        </section>
    );
}
export default Section2
