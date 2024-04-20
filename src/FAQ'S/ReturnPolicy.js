import React from "react";
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
function ReturnPolicy() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  return (
    <div className="policy">
      <h3> {t("ReturnPolicy")}</h3>
      <p>
      {t("ReturnPolicy1")}
      </p>
      <ul>
        <li>{t("li1")}</li>
        <li>
        {t("li2")}
        </li>
        <li>
        {t("li3")}
        </li>
        <li>
        {t("li4")}
        </li>
        <li>
        {t("li5")}
        </li>
        <li>
        {t("li6")}
        </li>
        <li>
        {t("li7")}
        </li>
        <li>
        {t("li8")}
        </li>
      </ul>
    </div>
  );
}

export default ReturnPolicy;
