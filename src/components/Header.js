import React from "react";

const Header = () => {
  return (
    <>
      <div
        id="COVID19"
        className="modalDialog"
        style={{ display: "none" }}
      >
        <div
          className="covid-modal"
          style={{ borderColor: "#CE0F0F" }}
        >
          <span
            className="covid-close"
            //onClick="window.closeModalCOVID19()"
          >
            ×
          </span>
          <h2 className="covid-heading">New Patient Special! </h2>
          <div className="covid-content">
            <h3 className="covid-heading">
              $50 Spinal Decompression Consultation
              <br />
              Special Offer ($200 Normally)
            </h3>
            <p>
              We offer personalized natural care through advanced treatments
              that decrease discomfort and increase cushioning and vitality.
            </p>
            <p>
              Call <a href="tel:4083299604">(408) 329-9604</a>
            </p>
            <div>
              <img
                src="../my.chiromatrix.com/0076741/storage/app/media/_img/50-spinal-decompression-consultation-special-offer-200-normally_page-0001.jpg"
                style={{ width: "300px", height: "auto" }}
              />
              +
            </div>
          </div>

          <div>
            <a
              className="covid-cta"
              //onClick="closeModalCOVID19()"
              href="special-offers.html"
            >
              Learn More{" "}
            </a>
          </div>
          <div>
            <a
              className="covid-close-link"
              //   onClick="closeModalCOVID19()"
            >
              Close
            </a>
          </div>
        </div>
      </div>
      <div className="mobileHeader-container d-md-none sticky-top ">
        <div className="mobileHeader-navWrap">
          <div
            className="mobileHeader-homeIcon"
            style={{ display: "none" }}
          >
            <a
              href="index.html"
              className="icon icon-home mm-homeIcon"
            ></a>
          </div>

          <div className="mobileHeader-navigation">
            <i
              id="mobileHeaderNavBtn"
              className="icon icon-bars"
            ></i>
            <nav id="mobileHeaderNav">
              <ul>
                <li>
                  <a
                    href="about-us.html"
                    data-title="About Us Submenu"
                  >
                    About Us{" "}
                  </a>
                  <ul>
                    {" "}
                    <li>
                      <a href="meet-the-doctor.html">Meet the Doctor </a>
                    </li>
                    <li>
                      <a href="testimonials.html">Testimonials </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    data-title="Chiropractic Services Submenu"
                  >
                    Chiropractic Services{" "}
                  </a>
                  <ul>
                    {" "}
                    <li>
                      <a
                        href="back-pain.html"
                        data-title="Back Pain Submenu"
                      >
                        Back Pain{" "}
                      </a>
                      <ul>
                        {" "}
                        <li>
                          <a href="back-pain-faqs.html">Back Pain FAQs </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="chiropractic-care.html">Chiropractic Care </a>
                    </li>
                    <li>
                      <a href="common-airbag-and-seatbelt-injury.html">
                        Common Airbag and Seatbelt Injury{" "}
                      </a>
                    </li>
                    <li>
                      <a href="concussions.html">Concussions </a>
                    </li>
                    <li>
                      <a href="headaches.html">Headaches </a>
                    </li>
                    <li>
                      <a href="headaches-after-a-car-accident.html">
                        Headaches After a Car Accident{" "}
                      </a>
                    </li>
                    <li>
                      <a href="herniated-discs.html">Herniated Discs </a>
                    </li>
                    <li>
                      <a
                        href="knee-pain.html"
                        data-title="Knee Pain Submenu"
                      >
                        Knee Pain{" "}
                      </a>
                      <ul>
                        {" "}
                        <li>
                          <a href="knee-pain-faqs.html">Knee Pain FAQs </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="lifestyle-and-nutritional-advice.html">
                        Lifestyle & Nutritional Advice{" "}
                      </a>
                    </li>
                    <li>
                      <a href="lower-back-pain.html">Lower Back Pain </a>
                    </li>
                    <li>
                      <a
                        href="neck-pain.html"
                        data-title="Neck Pain Submenu"
                      >
                        Neck Pain{" "}
                      </a>
                      <ul>
                        {" "}
                        <li>
                          <a href="neck-pain-faqs.html">Neck Pain FAQs </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="sciatica.html">Sciatica </a>
                    </li>
                    <li>
                      <a href="shockwave-therapy.html">Shockwave Therapy </a>
                    </li>
                    <li>
                      <a href="shoulder-injury-from-auto-accident.html">
                        Shoulder Injury from Auto Accident{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="shoulder-pain.html"
                        data-title="Shoulder Pain Submenu"
                      >
                        Shoulder Pain{" "}
                      </a>
                      <ul>
                        {" "}
                        <li>
                          <a href="shoulder-pain-faqs.html">
                            Shoulder Pain FAQs{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="spinal-decompression.html">
                        Spinal Decompression{" "}
                      </a>
                    </li>
                    <li>
                      <a href="spinal-manipulation-a-adjustment.html">
                        Spinal Manipulation & Adjustment{" "}
                      </a>
                    </li>
                    <li>
                      <a href="sports-injury.html">Sports Injury </a>
                    </li>
                    <li>
                      <a
                        href="whiplash.html"
                        data-title="Whiplash Submenu"
                      >
                        Whiplash{" "}
                      </a>
                      <ul>
                        {" "}
                        <li>
                          <a href="whiplash-faqs.html">Whiplash FAQs </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="accident-injury-treatments.html"
                    data-title="Auto Accident Treatment Submenu"
                  >
                    Auto Accident Treatment{" "}
                  </a>
                  <ul>
                    {" "}
                    <li>
                      <a href="auto-accident-faqs.html">Auto Accident FAQs </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="new-patient-center.html"
                    data-title="New Patient Center Submenu"
                  >
                    New Patient Center{" "}
                  </a>
                  <ul>
                    {" "}
                    <li>
                      <a href="special-offers.html">Special Offers </a>
                    </li>
                    <li>
                      <a href="online-forms.html">Online Forms </a>
                    </li>
                    <li>
                      <a href="payment-options.html">Payment Options </a>
                    </li>
                    <li>
                      <a
                        href="what-to-expect.html"
                        data-title="What to Expect Submenu"
                      >
                        What to Expect{" "}
                      </a>
                      <ul>
                        {" "}
                        <li>
                          <a href="your-first-visit.html">Your First Visit </a>
                        </li>
                        <li>
                          <a href="phase-1_-relief-care.html">
                            Phase 1: Relief Care{" "}
                          </a>
                        </li>
                        <li>
                          <a href="phase-2_-corrective-care.html">
                            Phase 2: Corrective Care{" "}
                          </a>
                        </li>
                        <li>
                          <a href="phase-3_-wellness-care.html">
                            Phase 3: Wellness Care{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    data-title="Resources Submenu"
                  >
                    Resources{" "}
                  </a>
                  <ul>
                    {" "}
                    <li>
                      <a href="3d-spine-simulator.html">3D Spine Simulator </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="contact-us.html"
                    data-title="Contact Submenu"
                  >
                    Contact{" "}
                  </a>
                  <ul>
                    {" "}
                    <li>
                      <a href="appointment.html">Appointment Request </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>{" "}
          </div>

          <div className="mobileHeader-logo">
            <a href="index.html">
              <div
                className="mobileHeader-logoImg"
                style={{
                  background:
                    "url('https://cdcssl.ibsrv.net/ibimg/smb/373x70_80/webmgr/1n/7/p/images/logo-white.png.webp') center/contain no-repeat",
                }}
              ></div>
            </a>
          </div>

          <div className="mobileHeader-phone">
            <a
              href="tel:(408) 329-9604"
              className="phoneIconLink icon icon-phone"
            ></a>
          </div>
        </div>

        <div className="mobileHeader-locWrap"></div>
      </div>
      {/* <div
        className="section-base-container ple-hide-for-mobile"
        data-section-id="id_56e6b5d1-9054-52cf-95b2-8d0c5d37b837"
      >
        <div className="section-overlap-container"></div>
        <div
          id="id_56e6b5d1-9054-52cf-95b2-8d0c5d37b837"
          data-control="section"
          className="section section__bg--light-1 d-none d-sm-none d-md-block ple_module_sticky  forms--fullwidth forms-option--a section-editable section-logo section-cta"
        >
          <div className="section--inner container-fluid section--light  ">
            <div className="row equal">
              <div className="col-lg-4 section__column-1 col-sm-12 ple-module-justify-center align-self-center alias-phone">
                <div className="phone__container editable__container ">
                  <div
                    className="ple-column--single ple-module-container phone__container--inner editable__container--inner"
                    data-component-name="phone"
                    data-component-alias="phone"
                  >
                    <p>
                      <a
                        href="tel:(408) 329-9604"
                        className="piwik_ignore"
                      >
                        <span
                          className="phone__number"
                          style={{ display: "inline !important" }}
                          data-redactor-style-cache="display: inline !important;"
                        >
                          (408) 329-9604
                        </span>
                      </a>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 section__column-2 col-sm-12 ple-module-justify-center alias-logo_header_sticky">
                <div className="componentWith__container logo__container ">
                  <div className="ple-column--single ple-module-container logo_header_sticky__container--inner logo__container--inner">
                    <div className="logo ">
                      <div className="logo-a logo-a--4 logo-a__horizontal__left">
                        <a
                          href="index.html"
                          className="logo-a__image-link"
                        >
                          <div className="logo-a__image">
                            <img
                              src="https://cdcssl.ibsrv.net/ibimg/smb/500x94_80/webmgr/1n/7/p/images/640650b70dfbf_SandboxLogo.png.webp"
                              className="logo-a__img"
                              style={{ height: "94px", width: "500px" }}
                              alt="Tropea Chiropractic Inc​"
                              title=""
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 section__column-3 col-sm-12 ple-module-justify-center align-self-center alias-header_cta">
                <div className="componentWith__container cta__container ">
                  <div className="ple-column--single ple-module-container header_cta__container--inner cta__container--inner">
                    <div className="cta">
                      <div className="cta-a cta-a--4  text-center">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row justify-content-center">
                              <div className="col-sm-12">
                                <a
                                  className="cta__button component__button--1"
                                  href="appointment.html"
                                >
                                  Request Appointment
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        className="section-base-container ple-hide-for-mobile"
        data-section-id="id_dd358310-b9aa-5f39-a0cb-9a097a123642"
      >
        <div className="section-overlap-container"></div>
        <div
          id="id_dd358310-b9aa-5f39-a0cb-9a097a123642"
          data-control="section"
          className="section section__bg--dark-1 d-none d-sm-none d-md-block ple_module_sticky  forms--fullwidth forms-option--a section-navigation"
        >
          <div className="section--inner container section--dark  ">
            <div className="row equal">
              <div className="col-lg-12 section__column-1 col-sm-12 ple-module-justify-center alias-navigation_header">
                <div className="componentWith__container navigation__container ">
                  <div className="ple-column--single ple-module-container navigation_header__container--inner navigation__container--inner">
                    <div
                      id="navigation_header"
                      className="navigation component "
                      data-more-button="1"
                    >
                      <nav
                        className="navigation-a navigation-a--12"
                        id="ple-navigation-navigation_header"
                        data-more-button="1"
                      >
                        <ul className="navigation__list navigation__list--head more_nav more_nav--loading">
                          {" "}
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="about-us.html"
                              className="navigation__item--link"
                            >
                              About Us
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="meet-the-doctor.html"
                                  className="navigation__item--link"
                                >
                                  Meet the Doctor
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="testimonials.html"
                                  className="navigation__item--link"
                                >
                                  Testimonials
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="javascript:void(0)"
                              className="navigation__item--link"
                            >
                              Chiropractic Services
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="back-pain.html"
                                  className="navigation__item--link"
                                >
                                  Back Pain
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="back-pain-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Back Pain FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="chiropractic-care.html"
                                  className="navigation__item--link"
                                >
                                  Chiropractic Care
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="common-airbag-and-seatbelt-injury.html"
                                  className="navigation__item--link"
                                >
                                  Common Airbag and Seatbelt Injury
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="concussions.html"
                                  className="navigation__item--link"
                                >
                                  Concussions
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="headaches.html"
                                  className="navigation__item--link"
                                >
                                  Headaches
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="headaches-after-a-car-accident.html"
                                  className="navigation__item--link"
                                >
                                  Headaches After a Car Accident
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="herniated-discs.html"
                                  className="navigation__item--link"
                                >
                                  Herniated Discs
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="knee-pain.html"
                                  className="navigation__item--link"
                                >
                                  Knee Pain
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="knee-pain-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Knee Pain FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="lifestyle-and-nutritional-advice.html"
                                  className="navigation__item--link"
                                >
                                  Lifestyle &amp; Nutritional Advice
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="lower-back-pain.html"
                                  className="navigation__item--link"
                                >
                                  Lower Back Pain
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="neck-pain.html"
                                  className="navigation__item--link"
                                >
                                  Neck Pain
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="neck-pain-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Neck Pain FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="sciatica.html"
                                  className="navigation__item--link"
                                >
                                  Sciatica
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="shockwave-therapy.html"
                                  className="navigation__item--link"
                                >
                                  Shockwave Therapy
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="shoulder-injury-from-auto-accident.html"
                                  className="navigation__item--link"
                                >
                                  Shoulder Injury from Auto Accident
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="shoulder-pain.html"
                                  className="navigation__item--link"
                                >
                                  Shoulder Pain
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="shoulder-pain-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Shoulder Pain FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="spinal-decompression.html"
                                  className="navigation__item--link"
                                >
                                  Spinal Decompression
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="spinal-manipulation-a-adjustment.html"
                                  className="navigation__item--link"
                                >
                                  Spinal Manipulation &amp; Adjustment
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="sports-injury.html"
                                  className="navigation__item--link"
                                >
                                  Sports Injury
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="whiplash.html"
                                  className="navigation__item--link"
                                >
                                  Whiplash
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="whiplash-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Whiplash FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="accident-injury-treatments.html"
                              className="navigation__item--link"
                            >
                              Auto Accident Treatment
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="auto-accident-faqs.html"
                                  className="navigation__item--link"
                                >
                                  Auto Accident FAQs
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="new-patient-center.html"
                              className="navigation__item--link"
                            >
                              New Patient Center
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="special-offers.html"
                                  className="navigation__item--link"
                                >
                                  Special Offers
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="online-forms.html"
                                  className="navigation__item--link"
                                >
                                  Online Forms
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="payment-options.html"
                                  className="navigation__item--link"
                                >
                                  Payment Options
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="what-to-expect.html"
                                  className="navigation__item--link"
                                >
                                  What to Expect
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="your-first-visit.html"
                                      className="navigation__item--link"
                                    >
                                      Your First Visit
                                    </a>
                                  </li>
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="phase-1_-relief-care.html"
                                      className="navigation__item--link"
                                    >
                                      Phase 1: Relief Care
                                    </a>
                                  </li>
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="phase-2_-corrective-care.html"
                                      className="navigation__item--link"
                                    >
                                      Phase 2: Corrective Care
                                    </a>
                                  </li>
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="phase-3_-wellness-care.html"
                                      className="navigation__item--link"
                                    >
                                      Phase 3: Wellness Care
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="javascript:void(0)"
                              className="navigation__item--link"
                            >
                              Resources
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="3d-spine-simulator.html"
                                  className="navigation__item--link"
                                >
                                  3D Spine Simulator
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="contact-us.html"
                              className="navigation__item--link"
                            >
                              Contact
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="appointment.html"
                                  className="navigation__item--link"
                                >
                                  Appointment Request
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="section-base-container ple-hide-for-mobile">
        <div className="section-overlap-container"></div>
        <div
          id="id_3108e6d0-f41f-5166-9b03-d9ae29055df4"
          data-control="section"
          className="section section__bg--light-1 d-none d-sm-none d-md-block   forms--fullwidth forms-option--a section-editable section-logo section-editable"
        >
          <div className="section--inner container-fluid section--light  ">
            <div className="row equal">
              <div className="col-lg-4 section__column-1 col-sm-12 ple-module-justify-center align-self-center alias-fixed_phone">
                <div className="fixed_phone__container editable__container ">
                  <div
                    className="ple-column--single ple-module-container fixed_phone__container--inner editable__container--inner"
                    data-component-name="fixed_phone"
                    data-component-alias="fixed_phone"
                  >
                    <p>
                      <a
                        href="tel:(408) 329-9604"
                        className="piwik_ignore"
                      >
                        <span className="phone__number">(408) 329-9604</span>
                        <br />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 section__column-2 col-sm-12 ple-module-justify-center alias-logo_header_sticky">
                <div className="componentWith__container logo__container ">
                  <div className="ple-column--single ple-module-container logo_header_sticky__container--inner logo__container--inner">
                    <div className="logo ">
                      <div className="logo-a logo-a--4 logo-a__horizontal__left">
                        <a
                          href="index.html"
                          className="logo-a__image-link"
                        >
                          <div className="logo-a__image">
                            <img
                              src="https://cdcssl.ibsrv.net/ibimg/smb/500x94_80/webmgr/1n/7/p/images/640650b70dfbf_SandboxLogo.png.webp"
                              className="logo-a__img"
                              style={{ height: "94px", width: "500px" }}
                              alt="Tropea Chiropractic Inc​"
                              title=""
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 section__column-3 col-sm-12 ple-module-justify-center align-self-center alias-address">
                <div className="address__container editable__container ">
                  <div
                    className="ple-column--single ple-module-container address__container--inner editable__container--inner"
                    data-component-name="address"
                    data-component-alias="address"
                  >
                    <p>
                      260 S Sunnyvale Ave #2
                      <br />
                      Sunnyvale, CA 94086, US
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        className="section-base-container ple-hide-for-mobile"
        data-section-id="id_6b07d2a1-4945-50d7-afb6-cb4722c0610f"
      >
        <div className="section-overlap-container"></div>
        <div
          id="id_6b07d2a1-4945-50d7-afb6-cb4722c0610f"
          data-control="section"
          className="section section__bg--dark-1 d-none d-sm-none d-md-block   forms--fullwidth forms-option--a section-navigation"
        >
          <div className="section--inner container section--dark  ">
            <div className="row equal">
              <div className="col-lg-12 section__column-1 col-sm-12 ple-module-justify-center alias-navigation_header">
                <div className="componentWith__container navigation__container ">
                  <div className="ple-column--single ple-module-container navigation_header__container--inner navigation__container--inner">
                    <div
                      id="navigation_header"
                      className="navigation component "
                      data-more-button="1"
                    >
                      <nav
                        className="navigation-a navigation-a--12"
                        id="ple-navigation-navigation_header"
                        data-more-button="1"
                      >
                        <ul className="navigation__list navigation__list--head more_nav more_nav--loading">
                          {" "}
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="about-us.html"
                              className="navigation__item--link"
                            >
                              About Us
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="meet-the-doctor.html"
                                  className="navigation__item--link"
                                >
                                  Meet the Doctor
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="testimonials.html"
                                  className="navigation__item--link"
                                >
                                  Testimonials
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="javascript:void(0)"
                              className="navigation__item--link"
                            >
                              Chiropractic Services
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="back-pain.html"
                                  className="navigation__item--link"
                                >
                                  Back Pain
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="back-pain-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Back Pain FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="chiropractic-care.html"
                                  className="navigation__item--link"
                                >
                                  Chiropractic Care
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="common-airbag-and-seatbelt-injury.html"
                                  className="navigation__item--link"
                                >
                                  Common Airbag and Seatbelt Injury
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="concussions.html"
                                  className="navigation__item--link"
                                >
                                  Concussions
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="headaches.html"
                                  className="navigation__item--link"
                                >
                                  Headaches
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="headaches-after-a-car-accident.html"
                                  className="navigation__item--link"
                                >
                                  Headaches After a Car Accident
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="herniated-discs.html"
                                  className="navigation__item--link"
                                >
                                  Herniated Discs
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="knee-pain.html"
                                  className="navigation__item--link"
                                >
                                  Knee Pain
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="knee-pain-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Knee Pain FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="lifestyle-and-nutritional-advice.html"
                                  className="navigation__item--link"
                                >
                                  Lifestyle &amp; Nutritional Advice
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="lower-back-pain.html"
                                  className="navigation__item--link"
                                >
                                  Lower Back Pain
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="neck-pain.html"
                                  className="navigation__item--link"
                                >
                                  Neck Pain
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="neck-pain-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Neck Pain FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="sciatica.html"
                                  className="navigation__item--link"
                                >
                                  Sciatica
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="shockwave-therapy.html"
                                  className="navigation__item--link"
                                >
                                  Shockwave Therapy
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="shoulder-injury-from-auto-accident.html"
                                  className="navigation__item--link"
                                >
                                  Shoulder Injury from Auto Accident
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="shoulder-pain.html"
                                  className="navigation__item--link"
                                >
                                  Shoulder Pain
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="shoulder-pain-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Shoulder Pain FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="spinal-decompression.html"
                                  className="navigation__item--link"
                                >
                                  Spinal Decompression
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="spinal-manipulation-a-adjustment.html"
                                  className="navigation__item--link"
                                >
                                  Spinal Manipulation &amp; Adjustment
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="sports-injury.html"
                                  className="navigation__item--link"
                                >
                                  Sports Injury
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="whiplash.html"
                                  className="navigation__item--link"
                                >
                                  Whiplash
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="whiplash-faqs.html"
                                      className="navigation__item--link"
                                    >
                                      Whiplash FAQs
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>{" "}
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="accident-injury-treatments.html"
                              className="navigation__item--link"
                            >
                              Auto Accident Treatment
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="auto-accident-faqs.html"
                                  className="navigation__item--link"
                                >
                                  Auto Accident FAQs
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="new-patient-center.html"
                              className="navigation__item--link"
                            >
                              New Patient Center
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="special-offers.html"
                                  className="navigation__item--link"
                                >
                                  Special Offers
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="online-forms.html"
                                  className="navigation__item--link"
                                >
                                  Online Forms
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="payment-options.html"
                                  className="navigation__item--link"
                                >
                                  Payment Options
                                </a>
                              </li>
                              <li className="navigation__item navigation__item--default  has-drop-down ">
                                <a
                                  href="what-to-expect.html"
                                  className="navigation__item--link"
                                >
                                  What to Expect
                                </a>
                                <ul className="navigation__list navigation__list--sub">
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="your-first-visit.html"
                                      className="navigation__item--link"
                                    >
                                      Your First Visit
                                    </a>
                                  </li>
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="phase-1_-relief-care.html"
                                      className="navigation__item--link"
                                    >
                                      Phase 1: Relief Care
                                    </a>
                                  </li>
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="phase-2_-corrective-care.html"
                                      className="navigation__item--link"
                                    >
                                      Phase 2: Corrective Care
                                    </a>
                                  </li>
                                  <li className="navigation__item navigation__item--default ">
                                    <a
                                      href="phase-3_-wellness-care.html"
                                      className="navigation__item--link"
                                    >
                                      Phase 3: Wellness Care
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>{" "}
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="javascript:void(0)"
                              className="navigation__item--link"
                            >
                              Resources
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="3d-spine-simulator.html"
                                  className="navigation__item--link"
                                >
                                  3D Spine Simulator
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li className="navigation__item navigation__item--default  has-drop-down ">
                            <a
                              href="contact-us.html"
                              className="navigation__item--link"
                            >
                              Contact
                            </a>
                            <ul className="navigation__list navigation__list--sub">
                              <li className="navigation__item navigation__item--default ">
                                <a
                                  href="appointment.html"
                                  className="navigation__item--link"
                                >
                                  Appointment Request
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Header;
