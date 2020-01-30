import React from 'react'
var Section4 = props => {

    return (
        <section className="parallax-section" data-scrollax-parent="true">
            <div
                className="bg"
                data-bg="images/bg/1.jpg"
                data-scrollax="properties: { translateY: '100px' }"
            />
            <div className="overlay op7" />
            {/*container*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="colomn-text fl-wrap pad-top-column-text_small">
                            <div className="colomn-text-title">
                                <h3>Most Popular Hotels</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  </p>
                                <a href="listing.html" className="btn  color2-bg float-btn">
                                    View All Hotels
                    <i className="fas fa-caret-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {/*light-carousel-wrap*/}
                        <div className="light-carousel-wrap fl-wrap">
                            {/*light-carousel*/}
                            <div className="light-carousel">
                                {/*slick-slide-item*/}
                                <div className="slick-slide-item">
                                    <div className="hotel-card fl-wrap title-sin_item">
                                        <div className="geodir-category-img card-post">
                                            <a href="listing-single.html">
                                                <img src="images/gal/1.jpg" alt />
                                            </a>
                                            <div className="listing-counter">
                                                Awg/Night <strong>$85</strong>
                                            </div>
                                            <div className="sale-window">Sale 20%</div>
                                            <div className="geodir-category-opt">
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={5}
                                                />
                                                <h4 className="title-sin_map">
                                                    <a href="listing-single.html">Moonlight Hotel</a>
                                                </h4>
                                                <div className="geodir-category-location">
                                                    <a
                                                        href="#"
                                                        className="single-map-item"
                                                        data-newlatitude="40.90261483"
                                                        data-newlongitude="-74.15737152"
                                                    >
                                                        <i className="fas fa-map-marker-alt" /> 75 Prince
                                                        St, NY, USA
                            </a>
                                                </div>
                                                <div className="rate-class-name">
                                                    <div className="score">
                                                        <strong> Good</strong>8 Reviews{" "}
                                                    </div>
                                                    <span>4.8</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*slick-slide-item end*/}
                                {/*slick-slide-item*/}
                                <div className="slick-slide-item">
                                    <div className="hotel-card fl-wrap title-sin_item">
                                        <div className="geodir-category-img">
                                            <a href="listing-single.html">
                                                <img src="images/gal/1.jpg" alt />
                                            </a>
                                            <div className="listing-counter">
                                                Awg/Night <strong>$80</strong>
                                            </div>
                                            <div className="sale-window big-sale">Sale 50%</div>
                                            <div className="geodir-category-opt">
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={5}
                                                />
                                                <h4 className="title-sin_map">
                                                    <a href="listing-single.html">Holiday Home</a>
                                                </h4>
                                                <div className="geodir-category-location">
                                                    <a
                                                        href="#"
                                                        className="single-map-item"
                                                        data-newlatitude="40.72228267"
                                                        data-newlongitude="-73.99246214"
                                                    >
                                                        <i className="fas fa-map-marker-alt" /> 34-42
                                                        Montgomery St , NY, USA
                            </a>
                                                </div>
                                                <div className="rate-class-name">
                                                    <div className="score">
                                                        <strong> Good</strong>2 Reviews{" "}
                                                    </div>
                                                    <span>4.7</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*slick-slide-item end*/}
                                {/*slick-slide-item*/}
                                <div className="slick-slide-item">
                                    <div className="hotel-card fl-wrap title-sin_item">
                                        <div className="geodir-category-img">
                                            <a href="listing-single.html">
                                                <img src="images/gal/1.jpg" alt />
                                            </a>
                                            <div className="listing-counter">
                                                Awg/Night <strong>$120</strong>
                                            </div>
                                            <div className="sale-window">Sale 10%</div>
                                            <div className="geodir-category-opt">
                                                <div
                                                    className="listing-rating card-popup-rainingvis"
                                                    data-starrating2={5}
                                                />
                                                <h4 className="title-sin_map">
                                                    <a href="listing-single.html">Grand Hero Palace</a>
                                                </h4>
                                                <div className="geodir-category-location">
                                                    <a
                                                        href="#"
                                                        className="single-map-item"
                                                        data-newlatitude="40.76221766"
                                                        data-newlongitude="-73.96511769"
                                                    >
                                                        <i className="fas fa-map-marker-alt" /> 70 Bright
                                                        St New York, USA
                            </a>
                                                </div>
                                                <div className="rate-class-name">
                                                    <div className="score">
                                                        <strong> Good</strong>31 Reviews{" "}
                                                    </div>
                                                    <span>4.9</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*slick-slide-item end*/}
                            </div>
                            {/*light-carousel end*/}
                            <div className="fc-cont  lc-prev">
                                <i className="fal fa-angle-left" />
                            </div>
                            <div className="fc-cont  lc-next">
                                <i className="fal fa-angle-right" />
                            </div>
                        </div>
                        {/*light-carousel-wrap end*/}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Section4