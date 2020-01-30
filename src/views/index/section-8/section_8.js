import React from 'react'

var Section8 = props => {

    return (
        <section className="parallax-section" data-scrollax-parent="true">
            <div
                className="bg"
                data-bg="images/bg/1.jpg"
                data-scrollax="properties: { translateY: '100px' }"
            />
            <div className="overlay" />
            {/*container*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {/* column text*/}
                        <div className="colomn-text fl-wrap">
                            <div className="colomn-text-title">
                                <h3>The owner of the hotel or business ?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                    </p>
                                <a href="dashboard-add-listing.html" className="btn  color-bg float-btn" >
                                    Add your hotel
                      <i className="fal fa-plus" />
                                </a>
                            </div>
                        </div>
                        {/*column text   end*/}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Section8
