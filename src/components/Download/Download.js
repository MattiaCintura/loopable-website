import { withTranslation } from "react-i18next";

import mockup from "../../assets/mockup_3.png";
import "./Download.css";

function Download(props) {
    const { t } = props;

    return (
        <div className="Download w-100 mb-0 text-center" id="download-section">
            <h4 className="Download-title mb-3">
                {t("Download_Title")}
            </h4>

            <p>
                {t("Download_Description")}
            </p>

            <div className="w-100"></div>

            <button className="Primary-button mb-5" onClick={() => window.open("http://eepurl.com/iuaINI", "_blank", "noreferrer")}>
                {t("Download_NewsletterSubscribe")}
            </button>

            <div className="w-100"></div>

            <img src={mockup} alt="" />
        </div>
    );
}

export default withTranslation()(Download);