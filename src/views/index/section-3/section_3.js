import React from 'react'

var Section3 = props => {
    return (
        <section className="grey-blue-bg">
            {/* container*/}
            <div className="container">
                <div className="section-title">
                    <div className="section-title-separator">
                        <span />
                    </div>
                    <h2>Recently Added Hotels</h2>
                    <span className="section-separator" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                        in pulvinar neque. Nulla finibus lobortis pulvinar.
            </p>
                </div>
            </div>
            {/* container end*/}
            {/* carousel */}
            <div className="list-carousel fl-wrap card-listing ">
                {/*listing-carousel*/}
                <div className="listing-carousel  fl-wrap ">
                    {/*slick-slide-item*/}
                    <div className="slick-slide-item">
                        {/* listing-item  */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <a href="listing-single.html">
                                        <img src="images/gal/1.jpg" alt />
                                    </a>
                                    <div className="listing-avatar">
                                        <a href="author-single.html">
                                            <img src="images/avatar/1.jpg" alt />
                                        </a>
                                        <span className="avatar-tooltip">
                                            Added By <strong>Alisa Noory</strong>
                                        </span>
                                    </div>
                                    <div className="sale-window">Sale 20%</div>
                                    <div className="geodir-category-opt">
                                        <div
                                            className="listing-rating card-popup-rainingvis"
                                            data-starrating2={5}
                                        ></div>
                                        <div className="rate-class-name">
                                            <div className="score">
                                                <strong>Very Good</strong>27 Reviews{" "}
                                            </div>
                                            <span>5.0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map">
                                                <a href="listing-single.html">Premium Plaza Hotel</a>
                                            </h3>
                                            <div className="geodir-category-location fl-wrap">
                                                <a href="#" className="map-item">
                                                    <i className="fas fa-map-marker-alt" /> 27th
                                                    Brooklyn New York, USA
                          </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Sed interdum metus at nisi tempor laoreet. Integer gravida
                                        orci a justo sodales.
                    </p>
                                    <ul className="facilities-list fl-wrap">
                                        <li>
                                            <i className="fal fa-wifi" />
                                            <span>Free WiFi</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-parking" />
                                            <span>Parking</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-smoking-ban" />
                                            <span>Non-smoking Rooms</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-utensils" />
                                            <span> Restaurant</span>
                                        </li>
                                    </ul>
                                    <div className="geodir-category-footer fl-wrap">
                                        <div className="geodir-category-price">
                                            Awg/Night <span>$ 320</span>
                                        </div>
                                        <div className="geodir-opt-list">
                                            <a
                                                href="#"
                                                className="single-map-item"
                                                data-newlatitude="40.72956781"
                                                data-newlongitude="-73.99726866"
                                            >
                                                <i className="fal fa-map-marker-alt" />
                                                <span className="geodir-opt-tooltip">On the map</span>
                                            </a>
                                            <a href="#" className="geodir-js-favorite">
                                                <i className="fal fa-heart" />
                                                <span className="geodir-opt-tooltip">Save</span>
                                            </a>
                                            <a href="#" className="geodir-js-booking">
                                                <i className="fal fa-exchange" />
                                                <span className="geodir-opt-tooltip">
                                                    Find Directions
                          </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end */}
                    </div>
                    {/*slick-slide-item end*/}
                    {/*slick-slide-item*/}
                    <div className="slick-slide-item">
                        {/* listing-item  */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <a href="listing-single.html">
                                        <img src="images/gal/1.jpg" alt />
                                    </a>
                                    <div className="listing-avatar">
                                        <a href="author-single.html">
                                            <img src="images/avatar/1.jpg" alt />
                                        </a>
                                        <span className="avatar-tooltip">
                                            Added By <strong>Julie Cramp</strong>
                                        </span>
                                    </div>
                                    <div className="sale-window big-sale">Sale 50%</div>
                                    <div className="geodir-category-opt">
                                        <div
                                            className="listing-rating card-popup-rainingvis"
                                            data-starrating2={4}
                                        ></div>
                                        <div className="rate-class-name">
                                            <div className="score">
                                                <strong>Good</strong>12 Reviews{" "}
                                            </div>
                                            <span>4.2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map">
                                                <a href="listing-single.html">Grand Hero Palace</a>
                                            </h3>
                                            <div className="geodir-category-location fl-wrap">
                                                <a href="#" className="map-item">
                                                    <i className="fas fa-map-marker-alt" /> W 85th St,
                                                    New York, USA
                          </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        {" "}
                                        Morbi suscipit erat in diam bibendum rutrum in nisl.
                                        Aliquam et purus ante.
                    </p>
                                    <ul className="facilities-list fl-wrap">
                                        <li>
                                            <i className="fal fa-wifi" />
                                            <span>Free WiFi</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-parking" />
                                            <span>Parking</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-smoking-ban" />
                                            <span>Non-smoking Rooms</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-utensils" />
                                            <span> Restaurant</span>
                                        </li>
                                    </ul>
                                    <div className="geodir-category-footer fl-wrap">
                                        <div className="geodir-opt-link">
                                            <div className="geodir-category-price">
                                                Awg/Night <span>$ 120</span>
                                            </div>
                                        </div>
                                        <div className="geodir-opt-list">
                                            <a
                                                href="#"
                                                className="single-map-item"
                                                data-newlatitude="40.76221766"
                                                data-newlongitude="-73.96511769"
                                            >
                                                <i className="fal fa-map-marker-alt" />
                                                <span className="geodir-opt-tooltip">On the map</span>
                                            </a>
                                            <a href="#" className="geodir-js-favorite">
                                                <i className="fal fa-heart" />
                                                <span className="geodir-opt-tooltip">Save</span>
                                            </a>
                                            <a href="#" className="geodir-js-booking">
                                                <i className="fal fa-exchange" />
                                                <span className="geodir-opt-tooltip">
                                                    Find Directions
                          </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end */}
                    </div>
                    {/*slick-slide-item end*/}
                    {/*slick-slide-item*/}
                    <div className="slick-slide-item">
                        {/* listing-item  */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <a href="listing-single.html">
                                        <img src="images/gal/1.jpg" alt />
                                    </a>
                                    <div className="listing-avatar">
                                        <a href="author-single.html">
                                            <img src="images/avatar/1.jpg" alt />
                                        </a>
                                        <span className="avatar-tooltip">
                                            Added By <strong>Andy Moore</strong>
                                        </span>
                                    </div>
                                    <div className="geodir-category-opt">
                                        <div
                                            className="listing-rating card-popup-rainingvis"
                                            data-starrating2={5}
                                        ></div>
                                        <div className="rate-class-name">
                                            <div className="score">
                                                <strong>Good</strong>6 Reviews{" "}
                                            </div>
                                            <span>4.7</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map">
                                                <a href="listing-single.html">Park Central</a>
                                            </h3>
                                            <div className="geodir-category-location fl-wrap">
                                                <a href="#" className="map-item">
                                                    <i className="fas fa-map-marker-alt" />
                                                    40 Journal Square Plaza, NJ, USA
                          </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        {" "}
                                        Sed tempor iaculis massa faucibus feugiat. In fermentum
                                        facilisis massa.
                    </p>
                                    <ul className="facilities-list fl-wrap">
                                        <li>
                                            <i className="fal fa-wifi" />
                                            <span>Free WiFi</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-parking" />
                                            <span>Parking</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-smoking-ban" />
                                            <span>Non-smoking Rooms</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-utensils" />
                                            <span> Restaurant</span>
                                        </li>
                                    </ul>
                                    <div className="geodir-category-footer fl-wrap">
                                        <div className="geodir-opt-link">
                                            <div className="geodir-category-price">
                                                Awg/Night <span>$ 80</span>
                                            </div>
                                        </div>
                                        <div className="geodir-opt-list">
                                            <a
                                                href="#"
                                                className="single-map-item"
                                                data-newlatitude="40.88496706"
                                                data-newlongitude="-73.88191222"
                                            >
                                                <i className="fal fa-map-marker-alt" />
                                                <span className="geodir-opt-tooltip">On the map</span>
                                            </a>
                                            <a href="#" className="geodir-js-favorite">
                                                <i className="fal fa-heart" />
                                                <span className="geodir-opt-tooltip">Save</span>
                                            </a>
                                            <a href="#" className="geodir-js-booking">
                                                <i className="fal fa-exchange" />
                                                <span className="geodir-opt-tooltip">
                                                    Find Directions
                          </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end */}
                    </div>
                    {/*slick-slide-item end*/}
                    {/*slick-slide-item*/}
                    <div className="slick-slide-item">
                        {/* listing-item  */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <a href="listing-single.html">
                                        <img src="images/gal/1.jpg" alt />
                                    </a>
                                    <div className="listing-avatar">
                                        <a href="author-single.html">
                                            <img src="images/avatar/1.jpg" alt />
                                        </a>
                                        <span className="avatar-tooltip">
                                            Added By <strong>Mary Jones</strong>
                                        </span>
                                    </div>
                                    <div className="sale-window">Sale 20%</div>
                                    <div className="geodir-category-opt">
                                        <div
                                            className="listing-rating card-popup-rainingvis"
                                            data-starrating2={3}
                                        ></div>
                                        <div className="rate-class-name">
                                            <div className="score">
                                                <strong>Pleasant</strong>10 Reviews{" "}
                                            </div>
                                            <span>3.2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map">
                                                <a href="listing-single.html">Holiday Home</a>
                                            </h3>
                                            <div className="geodir-category-location fl-wrap">
                                                <a href="#" className="map-item">
                                                    <i className="fas fa-map-marker-alt" /> 75 Prince
                                                    St, NY, USA
                          </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        {" "}
                                        Mauris ac maximus neque. Nam in mauris quis libero sodales
                                        eleifend.
                    </p>
                                    <ul className="facilities-list fl-wrap">
                                        <li>
                                            <i className="fal fa-wifi" />
                                            <span>Free WiFi</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-parking" />
                                            <span>Parking</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-smoking-ban" />
                                            <span>Non-smoking Rooms</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-utensils" />
                                            <span> Restaurant</span>
                                        </li>
                                    </ul>
                                    <div className="geodir-category-footer fl-wrap">
                                        <div className="geodir-opt-link">
                                            <div className="geodir-category-price">
                                                Awg/Night <span>$ 50</span>
                                            </div>
                                        </div>
                                        <div className="geodir-opt-list">
                                            <a
                                                href="#"
                                                className="single-map-item"
                                                data-newlatitude="40.72228267"
                                                data-newlongitude="-73.99246214"
                                            >
                                                <i className="fal fa-map-marker-alt" />
                                                <span className="geodir-opt-tooltip">On the map</span>
                                            </a>
                                            <a href="#" className="geodir-js-favorite">
                                                <i className="fal fa-heart" />
                                                <span className="geodir-opt-tooltip">Save</span>
                                            </a>
                                            <a href="#" className="geodir-js-booking">
                                                <i className="fal fa-exchange" />
                                                <span className="geodir-opt-tooltip">
                                                    Find Directions
                          </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end */}
                    </div>
                    {/*slick-slide-item end*/}
                    {/*slick-slide-item*/}
                    <div className="slick-slide-item">
                        {/* listing-item  */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <a href="listing-single.html">
                                        <img src="images/gal/1.jpg" alt />
                                    </a>
                                    <div className="listing-avatar">
                                        <a href="author-single.html">
                                            <img src="images/avatar/1.jpg" alt />
                                        </a>
                                        <span className="avatar-tooltip">
                                            Added By <strong>Fider Mamby</strong>
                                        </span>
                                    </div>
                                    <div className="sale-window">Sale 10%</div>
                                    <div className="geodir-category-opt">
                                        <div
                                            className="listing-rating card-popup-rainingvis"
                                            data-starrating2={5}
                                        ></div>
                                        <div className="rate-class-name">
                                            <div className="score">
                                                <strong>Very Good</strong>102 Reviews{" "}
                                            </div>
                                            <span>4.7</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map">
                                                <a href="listing-single.html">Gold Plaza Hotel</a>
                                            </h3>
                                            <div className="geodir-category-location fl-wrap">
                                                <a href="#" className="map-item">
                                                    <i className="fas fa-map-marker-alt" /> 34-42
                                                    Montgomery St , NY, USA
                          </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        {" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut nec tincidunt arcu, sit amet .{" "}
                                    </p>
                                    <ul className="facilities-list fl-wrap">
                                        <li>
                                            <i className="fal fa-wifi" />
                                            <span>Free WiFi</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-parking" />
                                            <span>Parking</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-smoking-ban" />
                                            <span>Non-smoking Rooms</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-utensils" />
                                            <span> Restaurant</span>
                                        </li>
                                    </ul>
                                    <div className="geodir-category-footer fl-wrap">
                                        <div className="geodir-opt-link">
                                            <div className="geodir-category-price">
                                                Awg/Night <span>$ 210</span>
                                            </div>
                                        </div>
                                        <div className="geodir-opt-list">
                                            <a
                                                href="#"
                                                className="single-map-item"
                                                data-newlatitude="40.94982541"
                                                data-newlongitude="-73.84357452"
                                            >
                                                <i className="fal fa-map-marker-alt" />
                                                <span className="geodir-opt-tooltip">On the map</span>
                                            </a>
                                            <a href="#" className="geodir-js-favorite">
                                                <i className="fal fa-heart" />
                                                <span className="geodir-opt-tooltip">Save</span>
                                            </a>
                                            <a href="#" className="geodir-js-booking">
                                                <i className="fal fa-exchange" />
                                                <span className="geodir-opt-tooltip">
                                                    Find Directions
                          </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end */}
                    </div>
                    {/*slick-slide-item end*/}
                    {/*slick-slide-item*/}
                    <div className="slick-slide-item">
                        {/* listing-item  */}
                        <div className="listing-item">
                            <article className="geodir-category-listing fl-wrap">
                                <div className="geodir-category-img">
                                    <a href="listing-single.html">
                                        <img src="images/gal/1.jpg" alt />
                                    </a>
                                    <div className="listing-avatar">
                                        <a href="author-single.html">
                                            <img src="images/avatar/1.jpg" alt />
                                        </a>
                                        <span className="avatar-tooltip">
                                            Added By <strong>Alisa Noory</strong>
                                        </span>
                                    </div>
                                    <div className="sale-window big-sale">Sale 70%</div>
                                    <div className="geodir-category-opt">
                                        <div
                                            className="listing-rating card-popup-rainingvis"
                                            data-starrating2={4}
                                        ></div>
                                        <div className="rate-class-name">
                                            <div className="score">
                                                <strong> Good</strong>8 Reviews{" "}
                                            </div>
                                            <span>4.1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="geodir-category-content fl-wrap title-sin_item">
                                    <div className="geodir-category-content-title fl-wrap">
                                        <div className="geodir-category-content-title-item">
                                            <h3 className="title-sin_map">
                                                <a href="listing-single.html">Moonlight Hotel</a>
                                            </h3>
                                            <div className="geodir-category-location fl-wrap">
                                                <a href="#" className="map-item">
                                                    <i className="fas fa-map-marker-alt" /> 70 Bright St
                                                    New York, USA
                          </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        {" "}
                                        Class aptent taciti Mauris ac maximus neque. Nam in mauris
                                        quis libero sodales eleifend.
                    </p>
                                    <ul className="facilities-list fl-wrap">
                                        <li>
                                            <i className="fal fa-wifi" />
                                            <span>Free WiFi</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-parking" />
                                            <span>Parking</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-smoking-ban" />
                                            <span>Non-smoking Rooms</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-utensils" />
                                            <span> Restaurant</span>
                                        </li>
                                    </ul>
                                    <div className="geodir-category-footer fl-wrap">
                                        <div className="geodir-opt-link">
                                            <div className="geodir-category-price">
                                                Awg/Night <span>$ 105</span>
                                            </div>
                                        </div>
                                        <div className="geodir-opt-list">
                                            <a
                                                href="#"
                                                className="single-map-item"
                                                data-newlatitude="40.90261483"
                                                data-newlongitude="-74.15737152"
                                            >
                                                <i className="fal fa-map-marker-alt" />
                                                <span className="geodir-opt-tooltip">On the map</span>
                                            </a>
                                            <a href="#" className="geodir-js-favorite">
                                                <i className="fal fa-heart" />
                                                <span className="geodir-opt-tooltip">Save</span>
                                            </a>
                                            <a href="#" className="geodir-js-booking">
                                                <i className="fal fa-exchange" />
                                                <span className="geodir-opt-tooltip">
                                                    Find Directions
                                                    </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* listing-item end */}
                    </div>
                    {/*slick-slide-item end*/}
                </div>
                {/*listing-carousel end*/}
                <div className="swiper-button-prev sw-btn">
                    <i className="fa fa-long-arrow-left" />
                </div>
                <div className="swiper-button-next sw-btn">
                    <i className="fa fa-long-arrow-right" />
                </div>
            </div>
            {/*  carousel end*/}
        </section>
    );
}
export default Section3