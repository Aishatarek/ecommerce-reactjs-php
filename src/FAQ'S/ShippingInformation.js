import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
function ShippingInformation() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  return (
    <div className="shipp">
    <h3> {t("ship1")}.</h3>
    <p>
    {t("shipd")}
    </p>
    <table className="tabllle">
      <thead>
        <tr>
          <th>{t("th1")}</th>
          <th>{t("th2")}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5%</td>
          <td>LE 100-LE 174.99</td>
        </tr>

        <tr>
          <td>10%</td>
          <td>LE 175-LE 249.99</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>15%</td>
          <td>LE 250+</td>
        </tr>
      </tfoot>
    </table>

    <h3>{t("Shipping")}</h3>

    <p>
    {t("Shippingd")}
    </p>
    <ul>
      <li>{t("lii1")}</li>
      <li>{t("lii2")}</li>
      <li>{t("lii3")}</li>
      <li>{t("lii4")}</li>
    </ul>
    <p>
    {t("Seebelow")}.
    </p>
    <h3>{t("Tracking")}</h3>
    <p>
    {t("Onceyour")}
    </p>
  </div>
  )
}

export default ShippingInformation
