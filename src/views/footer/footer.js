import React from 'react'
var Footer = props => {
    return (
        <footer className="main-footer">
            {/*subscribe-wrap*/}
            <div className="subscribe-wrap color-bg  fl-wrap">
                <div className="container">
                    <div className="sp-bg"> </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="subscribe-header">
                                <h3>Subscribe</h3>
                                <p>
                                    Want to be notified when we launch a new template or an
                                    udpate. Just sign up and we'll send you a notification by
                                    email.
                  </p>
                            </div>
                        </div>
                        <div className="col-md-1" />
                        <div className="col-md-5">
                            <div className="footer-widget fl-wrap">
                                <div className="subscribe-widget fl-wrap">
                                    <div className="subcribe-form">
                                        <form id="subscribe">
                                            <input
                                                className="enteremail fl-wrap"
                                                name="email"
                                                id="subscribe-email"
                                                placeholder="Enter Your Email"
                                                spellCheck="false"
                                                type="text"
                                            />
                                            <button
                                                type="submit"
                                                id="subscribe-button"
                                                className="subscribe-button"
                                            >
                                                <i className="fas fa-rss-square" /> Subscribe
                        </button>
                                            <label
                                                htmlFor="subscribe-email"
                                                className="subscribe-message"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave-bg" />
            </div>
            {/*subscribe-wrap end */}
            {/*footer-inner*/}
            <div className="footer-inner">
                <div className="container">
                    {/*footer-fw-widget*/}
                    <div className="footer-fw-widget fl-wrap">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="footer-carousel-title">Our partners</div>
                            </div>
                            <div className="col-md-9">
                                {/*footer-carousel-wrap*/}
                                <div className="footer-carousel-wrap fl-wrap">
                                    <div className="footer-carousel fl-wrap">
                                        {/*footer-carousel-item*/}
                                        <div className="footer-carousel-item">
                                            <a href="#">
                                                <img src="images/partners/1.png" alt />
                                            </a>
                                        </div>
                                        {/*footer-carousel-item end*/}
                                        {/*footer-carousel-item*/}
                                        <div className="footer-carousel-item">
                                            <a href="#">
                                                <img src="images/partners/1.png" alt />
                                            </a>
                                        </div>
                                        {/*footer-carousel-item end*/}
                                        {/*footer-carousel-item*/}
                                        <div className="footer-carousel-item">
                                            <a href="#">
                                                <img src="images/partners/1.png" alt />
                                            </a>
                                        </div>
                                        {/*footer-carousel-item end*/}
                                        {/*footer-carousel-item*/}
                                        <div className="footer-carousel-item">
                                            <a href="#">
                                                <img src="images/partners/1.png" alt />
                                            </a>
                                        </div>
                                        {/*footer-carousel-item end*/}
                                        {/*footer-carousel-item*/}
                                        <div className="footer-carousel-item">
                                            <a href="#">
                                                <img src="images/partners/1.png" alt />
                                            </a>
                                        </div>
                                        {/*footer-carousel-item end*/}
                                        {/*footer-carousel-item*/}
                                        <div className="footer-carousel-item">
                                            <a href="#">
                                                <img src="images/partners/1.png" alt />
                                            </a>
                                        </div>
                                        {/*footer-carousel-item end*/}
                                    </div>
                                    <div className="fc-cont  fc-cont-prev">
                                        <i className="fal fa-angle-left" />
                                    </div>
                                    <div className="fc-cont  fc-cont-next">
                                        <i className="fal fa-angle-right" />
                                    </div>
                                </div>
                                {/*footer-carousel-wrap end*/}
                            </div>
                        </div>
                    </div>
                    {/*footer-fw-widget end*/}
                    <div className="row">
                        {/*footer-widget */}
                        <div className="col-md-4">
                            <div className="footer-widget fl-wrap">
                                <h3>About Us</h3>
                                <div className="footer-contacts-widget fl-wrap">
                                    <p>
                                        In ut odio libero, at vulputate urna. Nulla tristique mi a
                                        massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                                        commodo gravida. Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam.{" "}
                                    </p>
                                    <ul className="footer-contacts fl-wrap">
                                        <li>
                                            <span>
                                                <i className="fal fa-envelope" /> Mail :
                        </span>
                                            <a href="#" target="_blank">
                                                yourmail@domain.com
                        </a>
                                        </li>
                                        <li>
                                            {" "}
                                            <span>
                                                <i className="fal fa-map-marker-alt" /> Adress :
                        </span>
                                            <a href="#" target="_blank">
                                                USA 27TH Brooklyn NY
                        </a>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fal fa-phone" /> Phone :
                        </span>
                                            <a href="#">+7(111)123456789</a>
                                        </li>
                                    </ul>
                                    <div className="footer-social">
                                        <span>Find us : </span>
                                        <ul>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="fab fa-vk" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*footer-widget end*/}
                        {/*footer-widget */}
                        <div className="col-md-4">
                            <div className="footer-widget fl-wrap">
                                <h3>Our Last News</h3>
                                <div className="widget-posts fl-wrap">
                                    <ul>
                                        <li className="clearfix">
                                            <a href="#" className="widget-posts-img">
                                                <img src="images/all/1.jpg" className="respimg" alt />
                                            </a>
                                            <div className="widget-posts-descr">
                                                <a href="#" title>
                                                    Vivamus dapibus rutrum
                          </a>
                                                <span className="widget-posts-date">
                                                    {" "}
                                                    21 Mar 09.05{" "}
                                                </span>
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <a href="#" className="widget-posts-img">
                                                <img src="images/all/1.jpg" className="respimg" alt />
                                            </a>
                                            <div className="widget-posts-descr">
                                                <a href="#" title>
                                                    {" "}
                                                    In hac habitasse platea
                          </a>
                                                <span className="widget-posts-date">
                                                    {" "}
                                                    7 Mar 18.21{" "}
                                                </span>
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <a href="#" className="widget-posts-img">
                                                <img src="images/all/1.jpg" className="respimg" alt />
                                            </a>
                                            <div className="widget-posts-descr">
                                                <a href="#" title>
                                                    Tortor tempor in porta
                          </a>
                                                <span className="widget-posts-date">
                                                    {" "}
                                                    7 Mar 16.42{" "}
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*footer-widget end*/}
                        {/*footer-widget */}
                        <div className="col-md-4">
                            <div className="footer-widget fl-wrap">
                                <h3>Our Twitter</h3>
                                <div id="footer-twiit" className="fl-wrap" />
                                <a href="#" className="twitter-link" target="_blank">
                                    Follow
                  </a>
                            </div>
                        </div>
                        {/*footer-widget end*/}
                    </div>
                    <div className="clearfix" />
                    {/*footer-widget */}
                    <div className="footer-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <a className="contact-btn color-bg" href="contacts.html">
                                    Get In Touch
                    <i className="fal fa-envelope" />
                                </a>
                            </div>
                            <div className="col-md-8">
                                <div className="customer-support-widget fl-wrap">
                                    <h4>Customer support : </h4>
                                    <a href="tel:+19012300888" className="cs-mumber">
                                        +1(901)2300888
                    </a>
                                    <a
                                        href="tel:+19012300888"
                                        className="cs-mumber-button color2-bg"
                                    >
                                        Call Now <i className="far fa-phone-volume" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*footer-widget end */}
                </div>
            </div>
            {/*footer-inner end */}
            <div className="footer-bg"></div>
            {/*sub-footer*/}
            <div className="sub-footer">
                <div className="container">
                    <div className="copyright">
                        {" "}
                        © EasyBook 2018 . All rights reserved.
            </div>
                    <div className="subfooter-lang">
                        <div className="subfooter-show-lang">
                            <span>Eng</span>
                            <i className="fa fa-caret-up" />
                        </div>
                        <ul className="subfooter-lang-tooltip">
                            <li>
                                <a href="#">Dutch</a>
                            </li>
                            <li>
                                <a href="#">Italian</a>
                            </li>
                            <li>
                                <a href="#">French</a>
                            </li>
                            <li>
                                <a href="#">Spanish</a>
                            </li>
                        </ul>
                    </div>
                    <div className="subfooter-nav">
                        <ul>
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*sub-footer end */}
        </footer>
    );
}

export default Footer