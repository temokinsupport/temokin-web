import React from "react";
import Iframe from "react-iframe";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import Footer from "../../Footer";
import axios from "axios";
import bgModalImg from "../../../assets/images/contactus/Tem_Prompt-Modal-BG.png";
import btnModalImg from "../../../assets/images/contactus/Tem_Prompt-Modal_Button.png";

export default class EmailUs extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      contact_number: "",
      email: "",
      message: "",
      btnLoading: false,
      show: false,
      errs: [],
    };
    this.hideModal = this.hideModal.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }
  btnClick(e) {
    e.preventDefault();
    const err = [];
    const data = Object.keys(this.state)
      .filter((key) => key !== "btnLoading" && key !== "errs" && key !== "show")
      .reduce(
        (data, objKey) => (
          // eslint-disable-next-line
          (data[objKey] = this.state[objKey]), data
        ),
        {}
      );

    // eslint-disable-next-line
    if (data.name == "") {
      err.push("Please enter your name");
    }

    // eslint-disable-next-line
    if (data.email == "") {
      err.push("Please enter your email");
    }

    // eslint-disable-next-line
    if (data.contact_number == "") {
      err.push("Please enter your contact number");
    }

    if (err.length > 0) {
      this.setState({ show: true });
      this.setState({ errs: err });
      return;
    }

    this.setState({ btnLoading: true });

    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://dev.hirayamnl.com/api/temokin/send-email",
      data: data,
    })
      .then((response) => {
        this.setState({
          name: "",
          contact_number: "",
          email: "",
          message: "",
          btnLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ btnLoading: false });
        this.setState({ show: true });
        this.setState({ errs: ["Something went wrong"] });
      });
  }
  hideModal() {
    this.setState({ show: false });
    this.setState({ errs: [] });
  }
  render() {
    const style = {
      outer: {
        background: `url(${bgModalImg})`,
        height: "50vh",
        width: "50vw",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "-webkit-optimize-contrast",
      },
      btn: {
        background: `url(${btnModalImg})`,
        height: "50px",
        width: "50px",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "-webkit-optimize-contrast",
        outline: "0",
        border: "0",
        boxShadow: "none",
      },
      container: {
        display: "flex",
        flexDirection: "column",
        color: "blue",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        fontWeight: "bold",
      },
    };

    return (
      <div className="--bg-2" data-scroll-section>
        <Image
          className="svg svg--1"
          src={
            require("../../../assets/images/privacypolicy/svg-7.svg").default
          }
        />
        <Image
          className="svg svg--2"
          src={
            require("../../../assets/images/privacypolicy/svg-1.svg").default
          }
        />
        <Image
          className="svg svg--3"
          src={
            require("../../../assets/images/privacypolicy/svg-2.svg").default
          }
        />
        <Image
          className="svg svg--4"
          src={
            require("../../../assets/images/privacypolicy/svg-4.svg").default
          }
        />
        <Image
          className="svg svg--5"
          src={
            require("../../../assets/images/privacypolicy/svg-3.svg").default
          }
        />
        <Image
          className="svg svg--6"
          src={
            require("../../../assets/images/privacypolicy/svg-4.svg").default
          }
        />
        <Container className="--max">
          <Row className="justify-content-center textBodyPP">
            <div className="textBodyPP-bg" />
            <Col md={8}>
              <div className="textBodyTitle" data-scroll>
                I. WHY WE COLLECT DATA
              </div>

              <div className="bodyContent">
                We collect your personal information for use in connection with
                our business process, execution, including deliver of notices,
                services, and/or products, client relationship management,
                planning purposes in connection with future products, new
                product launches, and events including promotional events with
                business partners within our project/townships.
              </div>
              <hr className="separator" />
              <div className="textBodyTitle" data-scroll>
                2. WHAT WE COLLECT
              </div>
              <div className="bodyContent">
                <ul>
                  <li>name</li>
                  <li>age</li>
                  <li>identity card number</li>
                  <li>passport number</li>
                  <li>address</li>
                  <li>gender</li>
                  <li>date of birth</li>
                  <li>children's basic details</li>
                  <li>marital status, occupation</li>
                  <li>income range</li>
                  <li>contact information</li>
                  <li>email address</li>
                  <li>employer</li>
                  <li>ethnic origin</li>
                  <li>nationality</li>
                  <li>
                    type of loans applied for in relation to the purchase of
                    property
                  </li>
                  <li>
                    introducers' names, addresses, and identity card numbers
                  </li>
                </ul>
                <br />
                TEMOKIN collects this information when:
                <ul>
                  <li>You register interest in our developments</li>
                  <li>When you telephone, email, or correspond with us</li>
                </ul>
              </div>
              <div className="textBodyTitle" data-scroll>
                3. PURPOSES OF COLLECTING PERSONAL DATA
              </div>
              <div className="bodyContent">
                Personal Data you provide will be collected, used, and otherwise
                processed by us for, amongst others, the following purposes:
                <br />
                <br />
                * for the delivery of notices, services, or products and the
                marketing of such services or products whether present or
                future, to you:
                <br />
                <br />
                * for you to enter into the necessary agreement and/or contract
                to purchase or rent the products and/or properties from us (for
                real estate customer only);
                <br />
                <br />
                * for user or customer relationship management procedures;
                <br />
                <br />
                * for those purpose specifically provided for in any particular
                service or product offered by us;
                <br />
                <br />
                * for our conducting marketing and client profiling activities
                in connection with our services and related products;
                <br />
                <br />
                * for our credit assessments and other background checks of
                users as we may determine to be necessary or appropriate;
                <br />
                <br />
                * for our internal record keeping;
                <br />
                <br />
                * for collection of outstanding payments from clients;
                <br />
                <br />
                * for prevention, detection, or prosecution of crime and
                compliance of legal and regulatory obligations;
                <br />
                <br />
                * meeting any legal or regulatory requirements relating to our
                provision of services and products and to make disclosure under
                the requirements of any applicable law, regulation, direction,
                court order, by-law, guideline, circular, code applicable to us
                or any member companies of TEMOKIN;
                <br />
                <br />
                * for purposes relating to any of the above (including but not
                limited to research, benchmarking, and statistical analysis);
                <br />
                <br />
                * to enable us to send you information by e-mail,
                telecommunication means (telephone cell or text messages) or
                social media about products and services offered by selected
                third parties that we think may interest you but in doing so we
                maintain control over your Personal Data and we will not
                disclose you Personal Data to such third parties without your
                prior consent;
                <br />
                <br />
                * in relation to the property, for delivery of vacant
                possession, keys handover, property/estate management, customer
                care and/or defect rectification works; and/or
                <br />
                <br />* for post vacant possession services.
              </div>
              <br />
              <div className="textBodyTitle" data-scroll>
                4. DISCLOSURE OF PERSONAL DATA
              </div>
              <div className="bodyContent">
                Personal Data provided to us will generally be kept confidential
                but you hereby consent and authorize us to provide or disclose
                your Personal Data to the following categories of parties:
                <br />
                <br />
                * any person to whom we are compelled or required to do so under
                law or in response to be a competent or government agency:
                <br />
                <br />
                * any other company within the TEMOKIN, including those
                established in the future;
                <br />
                <br />
                * our business partners and online affiliates that provide
                related services or products in connection with our business;
                <br />
                <br />
                * government agencies, statutory authorities and industry
                regulators;
                <br />
                <br />
                * our auditors, consultants, accountants, lawyers or other
                financial or professional advisers;
                <br />
                <br />
                * our contractors, sub-contractors, or third party service or
                product providers as we may determine to be necessary or
                appropriate: and/or;
                <br />
                <br />* third party property management companies/entities in
                respect of the management of property that customers have
                purchased or are occupying.
              </div>
              <div className="textBodyTitle" data-scroll>
                5. SAFEGUARDING YOUR PERSONAL DATA
              </div>
              <div className="bodyContent">
                We shall keep and process your data in a secure manner. We
                endeavor, where practicable, to implement the appropriate
                administrative and security safeguards and procedures in
                accordance with the applicable laws and regulations to prevent
                the unauthorized or unlawful processing of your Personal Data.
              </div>
              <br />
              <div className="textBodyTitle" data-scroll>
                6. DATA TRANSFER & SHARING
              </div>
              <div className="bodyContent">
                Where we consider it necessary or appropriate for the purpose of
                data storage or processing or providing any service or product
                on our behalf to you, we may transfer your Personal Data to
                other members of TEMOKIN or to any third-party service or
                product providers [within or outside the country] which we have
                established similar conditions of confidentiality and levels of
                security safeguards.
              </div>
              <div className="textBodyTitle" data-scroll>
                7. YOUR RIGHTS TO ACCESS AND CORRECTION
              </div>
              <div className="bodyContent">
                You may request for access to, correction or deletion or not to
                disclose your personal information or limit the processing
                thereof (including personal data of others provided by you) at
                any time hereafter by emailing us your written instruction to us
                at the email address provided below.
                <br />
                <br />
                Any inquiries or complaints with respect to your personal
                information may also be channelled to us by submitting such
                request to us via post. email or facsimile transmission to the
                following: -
                <br />
                <br />
                <b>Sales & Marketing Department</b>
                <br />
                Tel No : 03-4044 1111 <br />
                Email address : sales.admin@temokin.com <br />
                Address : No. 2, Jalan 15/48A, Sentul Raya Boulevard, 51000
                Kuala Lumpur, MALAYSIA
                <br />
                <br />
              </div>
            </Col>
          </Row>
          <Modal show={this.state.show}>
            <Modal.Body style={style.outer}>
              <Button onClick={this.hideModal} style={style.btn} />
              <div style={style.container}>
                {this.state.errs.map((item, key) => (
                  <span key={key}>{item}</span>
                ))}
              </div>
            </Modal.Body>
          </Modal>
        </Container>
        <div className="form-bg" data-scroll data-scroll-speed="2" />
        {/* <div className="header-shapes" data-scroll data-scroll-speed="1"/> */}
        <Footer />
      </div>
    );
  }
}
