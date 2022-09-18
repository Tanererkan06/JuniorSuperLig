import React from "react";
import "./AllEvents.css";
import { Container, Card } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
const AllEvents = () => {
  return (
    <div className="events py-5">
      <Container>
        <div className="sub-heading border-end border-1 border-light pe-3 text-end">
          <span>Event Programme</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="all-events">
          <div>
          <div className="event-programme my-5">
                <h2>Event In This Year 2022</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
                    corporis distinctio? Repellat <br /> placeat unde, consequatur nulla
                    doloribus nam inventore, minima, voluptatem qui quo numquam <br />{" "}
                    sint tempore dicta? Repudiandae eligendi fugiat sequi tempore esse
                    velit quis!
                </p>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-12 col-lg-3 col-xl-3">
                <div className="mb-3">
                  <h5 className="bg-light text-dark p-1 m-0">22 February 2022</h5>
                  <div className="event-image">
                    <img
                      src={require("../../utilities/images/layout/blogBanner.jpg")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <h5>Lorem ipsum dolor sit amet.</h5>
                </div>
                <div className="mb-3">
                  <h5 className="bg-light text-dark p-1 m-0">22 February 2022</h5>
                  <div className="event-image">
                    <img
                      src={require("../../utilities/images/background/blog-banner-bg.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                </div>
                <Card className="border-0">
                  <Card.Img
                    variant="top"
                    src={require("../../utilities/images/layout/PBAH160.jpg")}
                  />
                </Card>
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                <div className="mb-3">
                  <h5 className="bg-light text-dark p-1 m-0">15 May 2022</h5>
                  <div className="event-image">
                    <img
                      src={require("../../utilities/images/background/gallery-banner-bg.png")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <h4>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates assumenda animi sapien
                  </h4>
                </div>
                <Card className="border-0">
                  <Card.Img
                    variant="top"
                    src={require("../../utilities/images/blog/blog-image.png")}
                  />
                </Card>
              </div>
              <div className="col-12 col-md-12 col-lg-3 col-xl-3">
                <div>
                  <Card className="mb-3 border-0">
                    <Card.Img
                      variant="top"
                      src={require("../../utilities/images/layout/home-banner-layout.png")}
                    />
                  </Card>
                  <div className="mb-3">
                    <h5 className="bg-light text-dark p-1 m-0">22 February 2022</h5>
                    <div className="event-image">
                      <img
                        src={require("../../utilities/images/layout/blogBanner.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <h4>Lorem ipsum dolor sit amet.</h4>
                  </div>
                  <div className="mb-3">
                    <h5 className="bg-light text-dark p-1 m-0">22 February 2022</h5>
                    <div className="event-image">
                      <img
                        src={require("../../utilities/images/background/blog-banner-bg.png")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <h4>Lorem ipsum dolor sit amet.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
          <div className="event-programme my-5">
                <h2>Event In Next Year 2023</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
                    corporis distinctio? Repellat <br /> placeat unde, consequatur nulla
                    doloribus nam inventore, minima, voluptatem qui quo numquam <br />
                    sint tempore dicta? Repudiandae eligendi fugiat sequi tempore esse
                    velit quis!
                </p>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-12 col-lg-5 col-xl-5">
                <Card className="border-0">
                  <Card.Img
                    variant="top"
                    src={require("../../utilities/images/background/event-banner-bg.png")}
                  />
                </Card>
              </div>
              <div className="col-12 col-md-12 col-lg-4 col-xl-4">
                <div>
                  <div className="single-blog-content border border-1 border-light p-3">
                    <h5 className="bg-light text-dark p-1">22 February 2022</h5>
                    <h3>Lorem ipsum doadipisicing.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non consectetur atque natus consequatur esse mollitia commodi, expedita repellendus magni laborum, officia assumenda ab quidem!
                      <BsArrowRight className="fs-1 text-success" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-3 col-xl-3">
                <div className="blog-category">
                  <h4>Late Events</h4>
                  <div className="row mt-2">
                    <div className="col-3">
                      <div>
                        <img
                          src={require("../../utilities/images/blog/blog-one.png")}
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="col-9">
                      <div>
                        <span className="subTitle">15 December</span>
                        <h5>Won By 2-0 Goals with nited</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-3">
                      <div>
                        <img
                          src={require("../../utilities/images/blog/blog-two.png")}
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="col-9">
                      <div>
                        <span className="subTitle">15 December</span>
                        <h5>Goals with Brothers United</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-3">
                      <div>
                        <img
                          src={require("../../utilities/images/blog/blog-three.png")}
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="col-9">
                      <div>
                        <span className="subTitle">15 December</span>
                        <h5>With Brothers United</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-3">
                      <div>
                        <img
                          src={require("../../utilities/images/blog/blog-three.png")}
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="col-9">
                      <div>
                        <span className="subTitle">15 December</span>
                        <h5>No more With United</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllEvents;
