import React, { useState } from 'react'
import HelpCenter from "./HelpCenter"
import ReturnPolicy from "./ReturnPolicy"
import ShippingInformation from "./ShippingInformation"
import Terms from "./Terms"
import Footer from "../Footer"

import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

function Faqs() {
    const [active, setActive] = useState("First");
    const { t } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language, (err, t) => {
        if (err) return console.log("Error loading language:", err);
        console.log("Language changed to:", language);
      });
    };
    return (
        <div>
            <Container className="faqsss">
                <h3 className="fff">{t("Frequently")}</h3>
                <Row>
                    <Col lg="3" md="3" sm="3" className="faqs" >
                        <div className="faqsname">
                        <h5 onClick={() => setActive("First")}>{t("HelpCenter")}</h5>
                        <h5 onClick={() => setActive("Second")}>{t("ShippingInformation")}</h5>
                        <h5 onClick={() => setActive("Third")}>{t("ReturnPolicy")}</h5>
                        <h5 onClick={() => setActive("fourth")}>{t("TermsConditions")}</h5>
                        </div>
                    </Col>
                    <Col lg="9" md="9" sm="9" >
                        <div>{active === "First" && <HelpCenter />}</div>
                        <div>{active === "Second" && <ShippingInformation />}</div>
                        <div>{active === "Third" && <ReturnPolicy />}</div>
                        <div>{active === "fourth" && <Terms />}</div>
                    </Col>
                </Row>
            </Container>


            <Footer />
        </div>
    )
}

export default Faqs
