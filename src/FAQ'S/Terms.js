import React from "react";
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
function Terms() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log("Error loading language:", err);
      console.log("Language changed to:", language);
    });
  };
  return (
    <div className="terms">
      <h3>{t("termsh3")}</h3>
      <ol>
        <li>
          <h3>{t("termsh31")}</h3>
          <p>
          {t("termsp1")}
          </p>
          <p>
          {t("termsp2")}
          </p>
        </li>
        <li>
          <h3>{t("termsh32")}</h3>
          <p>
          {t("termsp3")}
          </p>
        </li>
        <li>
          <h3>{t("termsh33")}</h3>
          <p>
          {t("termsp4")}
          </p>
          <p>
          {t("termsp5")}
          </p>
        </li>
        <li>
          <h3>{t("termsh34")}</h3>
          <p>
          {t("termsp6")}
          </p>
          <p>
          {t("termsp7")}
          </p>
          <p>
          {t("termsp8")}
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Terms;
