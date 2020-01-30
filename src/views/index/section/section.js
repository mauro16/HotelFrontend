import React from 'react'
var Section = props => {
    return (
        <section className="hero-section" data-scrollax-parent="true" id="sec1">
            <div className="hero-parallax">
                <div
                    className="slideshow-container"
                    data-scrollax="properties: { translateY: '200px' }"
                >
                    {/* slideshow-item */}
                    <div className="slideshow-item">
                        <div className="bg" data-bg="images/bg/1.jpg" />
                    </div>
                    {/*  slideshow-item end  */}
                    {/* slideshow-item */}
                    <div className="slideshow-item">
                        <div className="bg" data-bg="images/bg/1.jpg" />
                    </div>
                    {/*  slideshow-item end  */}
                    {/* slideshow-item */}
                    <div className="slideshow-item">
                        <div className="bg" data-bg="images/bg/1.jpg" />
                    </div>
                    {/*  slideshow-item end  */}
                </div>
                <div className="overlay op7" />
            </div>
            <div className="hero-section-wrap fl-wrap">
                <div className="container">
                    <div className="home-intro">
                        <div className="section-title-separator">
                            <span />
                        </div>
                        <h2>EasyBook Hotel Booking System</h2>
                        <span className="section-separator" />
                        <h3>Let's start exploring the world together with EasyBook</h3>
                    </div>
                    <div className="main-search-input-wrap">
                        <div className="main-search-input fl-wrap">
                            <div
                                className="main-search-input-item location"
                                id="autocomplete-container"
                            >
                                <span className="inpt_dec">
                                    <i className="fal fa-map-marker" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Hotel , City..."
                                    className="autocomplete-input"
                                    id="autocompleteid2"

                                />
                                <a href="#">
                                    <i className="fal fa-dot-circle" />
                                </a>
                            </div>
                            <div className="main-search-input-item main-date-parent main-search-input-item_small">
                                <span className="inpt_dec">
                                    <i className="fal fa-calendar-check" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="When"
                                    name="main-input-search"

                                />
                            </div>
                            <div className="main-search-input-item">
                                <div className="qty-dropdown fl-wrap">
                                    <div className="qty-dropdown-header fl-wrap">
                                        <i className="fal fa-bed" /> Rooms
                          </div>
                                    <div className="qty-dropdown-content fl-wrap">
                                        <div className="quantity-item">
                                            <label>
                                                <i className="fas fa-restroom" /> Double
                              </label>
                                            <div className="quantity">
                                                <input
                                                    type="number"
                                                    min={1}
                                                    max={9}
                                                    step={1}
                                                    defaultValue={0}
                                                />
                                            </div>
                                        </div>
                                        <div className="quantity-item">
                                            <label>
                                                <i className="fas fa-female" /> Single
                              </label>
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
                                    </div>
                                </div>
                            </div>
                            <div className="main-search-input-item">
                                <div className="qty-dropdown fl-wrap">
                                    <div className="qty-dropdown-header fl-wrap">
                                        <i className="fal fa-users" /> Persons
                              </div>
                                    <div className="qty-dropdown-content fl-wrap">
                                        <div className="quantity-item">
                                            <label>
                                                <i className="fas fa-male" /> Adults
                                  </label>
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
                                            <label>
                                                <i className="fas fa-child" /> Children
                                  </label>
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
                            </div>
                            <button
                                className="main-search-button color2-bg"
                                onclick="window.location.href='listing.html'"
                            >
                                Search <i className="fal fa-search" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-sec-link">
                <div className="container">
                    <a href="#sec2" className="custom-scroll-link color-bg">
                        <i className="fal fa-angle-double-down" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Section
