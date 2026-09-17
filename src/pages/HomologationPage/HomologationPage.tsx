import { Link } from "react-router";
import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import KategoriePojazdowVertical from "../../assets/images/homologationPage/KategoriePojazdowVertical.jpg";
import styles from "./HomologationPage.module.scss";

function HomologationPage() {
  return (
    <>
      <PageMetadata
        title={`Homologacja pojazdów | ${APPLICATION_NAME}`}
        description="Dział poświęcony homologacji pojazdów."
        path={ROUTES.homologation}
      />
      <section className={styles.homologationPageMainContainer}>
        <h1 className={styles.headerH1}>Homologacja</h1>
        <div className={styles.homologationLinksContainer}>
          <Link to="kategorie-pojazdow" className={styles.homologationLink}>
            <img
              src={KategoriePojazdowVertical}
              alt="Kategorie homologacyjne pojazdów"
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

export default HomologationPage;
