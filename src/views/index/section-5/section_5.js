import React from 'react'
var Section5 = props => {

    return (
        <section>
            <div className="container">
                <div className="section-title">
                    <div className="section-title-separator">
                        <span />
                    </div>
                    <h2>Why Choose Us</h2>
                    <span className="section-separator" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                        in pulvinar neque. Nulla finibus lobortis pulvinar.
            </p>
                </div>
                {/* */}
                <div className="row">
                    <div className="col-md-4">
                        {/* process-item*/}
                        <div className="process-item big-pad-pr-item">
                            <span className="process-count"> </span>
                            <div className="time-line-icon">
                                <i className="fal fa-headset" />
                            </div>
                            <h4>
                                <a href="#"> Best service guarantee</a>
                            </h4>
                            <p>
                                Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                                luctus, finibus tellus ut, convallis eros sollicitudin turpis.
                </p>
                        </div>
                        {/* process-item end */}
                    </div>
                    <div className="col-md-4">
                        {/* process-item*/}
                        <div className="process-item big-pad-pr-item">
                            <span className="process-count"> </span>
                            <div className="time-line-icon">
                                <i className="fal fa-gift" />
                            </div>
                            <h4>
                                {" "}
                                <a href="#">Exclusive gifts</a>
                            </h4>
                            <p>
                                Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                                luctus, finibus tellus ut, convallis eros sollicitudin turpis.
                </p>
                        </div>
                        {/* process-item end */}
                    </div>
                    <div className="col-md-4">
                        {/* process-item*/}
                        <div className="process-item big-pad-pr-item nodecpre">
                            <span className="process-count"> </span>
                            <div className="time-line-icon">
                                <i className="fal fa-credit-card" />
                            </div>
                            <h4>
                                <a href="#"> Get more from your card</a>
                            </h4>
                            <p>
                                Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                                luctus, finibus tellus ut, convallis eros sollicitudin turpis.
                </p>
                        </div>
                        {/* process-item end */}
                    </div>
                </div>
                {/*process-wrap   end*/}
                <div className=" single-facts fl-wrap mar-top">
                    {/* inline-facts */}
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <i className="fal fa-users" />
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content={0} data-num={254}>
                                        154
                    </div>
                                </div>
                            </div>
                            <h6>New Visiters Every Week</h6>
                        </div>
                    </div>
                    {/* inline-facts end */}
                    {/* inline-facts  */}
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <i className="fal fa-thumbs-up" />
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content={0} data-num={12168}>
                                        12168
                    </div>
                                </div>
                            </div>
                            <h6>Happy customers every year</h6>
                        </div>
                    </div>
                    {/* inline-facts end */}
                    {/* inline-facts  */}
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <i className="fal fa-award" />
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content={0} data-num={172}>
                                        172
                    </div>
                                </div>
                            </div>
                            <h6>Won Awards</h6>
                        </div>
                    </div>
                    {/* inline-facts end */}
                    {/* inline-facts  */}
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <i className="fal fa-hotel" />
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content={0} data-num={732}>
                                        732
                    </div>
                                </div>
                            </div>
                            <h6>New Listing Every Week</h6>
                        </div>
                    </div>
                    {/* inline-facts end */}
                </div>
            </div>
        </section>
    );
}

export default Section5