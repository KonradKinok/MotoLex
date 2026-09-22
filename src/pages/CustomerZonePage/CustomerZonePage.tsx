import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { Link } from "react-router";
import { ROUTES, APPLICATION_NAME } from "../../config/routes";
import SprawdzDokumentyVertical from "../../assets/images/customerZonePage/SprawdzDokumentyVertical.webp";
import styles from "./CustomerZonePage.module.scss";

function CustomerZonePage() {
  return (
    <>
      <PageMetadata
        title={`Sprawy właścicieli pojazdów | ${APPLICATION_NAME}`}
        description="Informacje dla właścicieli pojazdów dotyczące dokumentów, rejestracji, opłat, terminów, wniosków i umów."
        path={ROUTES.vehicleOwners}
      />
      <section className={styles.customerZonePageMainContainer}>
        <div>
          <h1 className={styles.headerH1}>Załatw sprawę</h1>
          <p>
            Informacje o dokumentach, terminach, opłatach, wnioskach i umowach
            dotyczących pojazdów.
          </p>
        </div>

        <div className={styles.customerZonePageLinksContainer}>
          <Link to="dokumenty" className={styles.customerZonePageLink}>
            <img
              src={SprawdzDokumentyVertical}
              alt="Jak sprawdzić dokumenty?"
              width={600}
              height={800}
              className={styles.img}
            />
          </Link>
        </div>
      </section>
    </>
  );
}

export default CustomerZonePage;
