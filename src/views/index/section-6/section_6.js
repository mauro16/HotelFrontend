import React from 'react';

var Section6 = props => {
    return (
        <section className="color-bg hidden-section">
            <div className="wave-bg wave-bg2" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {/* */}
                        <div className="colomn-text  pad-top-column-text fl-wrap">
                            <div className="colomn-text-title">
                                <h3>Our App Available Now</h3>
                                <p>
                                    In ut odio libero, at vulputate urna. Nulla tristique mi a
                                    massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                                    commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer
                                    adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut
                                    laoreet dolore magna aliquam erat.
                  </p>
                                <a href="#" className=" down-btn color3-bg">
                                    <i className="fab fa-apple" /> Download for iPhone
                  </a>
                                <a href="#" className=" down-btn color3-bg">
                                    <i className="fab fa-android" /> Download for Android
                  </a>
                            </div>
                        </div>
                        {/*process-wrap   end*/}
                    </div>
                    <div className="col-md-6">
                        <div className="collage-image">
                            <img src="images/api.png" className="main-collage-image" alt />
                            <div className="images-collage-title color3-bg">
                                Easy<span>Book</span>
                            </div>
                            <div className="collage-image-min cim_1">
                                <img src="images/api/1.jpg" alt />
                            </div>
                            <div className="collage-image-min cim_2">
                                <img src="images/api/1.jpg" alt />
                            </div>
                            <div className="collage-image-min cim_3">
                                <img src="images/api/1.jpg" alt />
                            </div>
                            <div className="collage-image-input">
                                Search <i className="fa fa-search" />
                            </div>
                            <div className="collage-image-btn color2-bg">Booking now</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Section6
