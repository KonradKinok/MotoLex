import { PageMetadata } from "../../components/PageMetaData/PageMetaData";
import { APPLICATION_NAME, ROUTES } from "../../config/routes";
import styles from "./PrivacyPolicyPage.module.scss";

function PrivacyPolicyPage() {
  return (
    <>
      <PageMetadata
        title={`Polityka prywatności | ${APPLICATION_NAME}`}
        description="Informacje o przetwarzaniu danych w serwisie PojazdLex: administrator, hosting, ustawienia przeglądarki, reklamy Google AdSense i prawa użytkowników."
        path={ROUTES.privacyPolicy}
      />

      <article className={styles.policy} aria-labelledby="privacy-policy-title">
        <header>
          <h1 id="privacy-policy-title">Polityka prywatności</h1>
          <p className={styles.updated}>
            Ostatnia aktualizacja: <time dateTime="2026-09-25">25 września 2026 r.</time>
          </p>
          <p>
            Niniejsza polityka opisuje przetwarzanie danych związane z korzystaniem
            z serwisu PojazdLex, dostępnego pod adresem{" "}
            <a href="https://pojazdlex.pl/">pojazdlex.pl</a>.
          </p>
        </header>

        <section aria-labelledby="privacy-administrator">
          <h2 id="privacy-administrator">1. Administrator i kontakt</h2>
          <p>
            Administratorem danych osobowych jest Konrad Konik. W sprawach
            dotyczących prywatności i realizacji praw związanych z danymi możesz
            napisać na adres{" "}
            <a href="mailto:3k.nexgen@gmail.com">3k.nexgen@gmail.com</a>.
          </p>
        </section>

        <section aria-labelledby="privacy-calculators">
          <h2 id="privacy-calculators">2. Korzystanie z serwisu i kalkulatorów</h2>
          <p>
            PojazdLex udostępnia informacje i narzędzia związane z pojazdami.
            Korzystanie z serwisu nie wymaga zakładania konta.
          </p>
          <p>
            Obliczenia i sprawdzanie danych wpisanych do kalkulatorów, w tym
            numeru VIN, odbywają się w przeglądarce użytkownika. Kod kalkulatorów
            nie przesyła tych wartości do bazy danych administratora ani do
            zewnętrznej usługi sprawdzającej pojazdy.
          </p>
          <p>
            Niezależnie od działania kalkulatorów, otwieranie strony wiąże się
            z przetwarzaniem danych technicznych przez hosting oraz z działaniem
            usług reklamowych opisanych poniżej.
          </p>
        </section>

        <section aria-labelledby="privacy-hosting">
          <h2 id="privacy-hosting">3. Hosting i dane techniczne</h2>
          <p>
            Serwis korzysta z infrastruktury Netlify. W celu dostarczenia strony,
            zapewnienia jej bezpieczeństwa i diagnozowania błędów dostawca hostingu
            może przetwarzać adres IP, czas żądania, adres odwiedzanej strony,
            informacje o przeglądarce i systemie oraz dane o błędach.
          </p>
          <p>
            Podstawą przetwarzania danych osobowych w tym zakresie jest prawnie
            uzasadniony interes administratora polegający na utrzymaniu dostępnego
            i bezpiecznego serwisu — art. 6 ust. 1 lit. f RODO. Przesłanie danych
            technicznych jest związane z nawiązaniem połączenia ze stroną.
          </p>
          <p>
            Więcej informacji znajdziesz w{" "}
            <a href="https://www.netlify.com/privacy/">polityce prywatności Netlify</a>.
          </p>
        </section>

        <section aria-labelledby="privacy-contact">
          <h2 id="privacy-contact">4. Kontakt e-mail</h2>
          <p>
            Gdy piszesz do administratora, przetwarzane są Twój adres e-mail,
            treść wiadomości i inne dobrowolnie przekazane dane. Służą one
            udzieleniu odpowiedzi i prowadzeniu korespondencji. Podstawą jest
            prawnie uzasadniony interes administratora polegający na obsłudze
            zapytań — art. 6 ust. 1 lit. f RODO.
          </p>
          <p>
            Podanie danych jest dobrowolne, ale bez adresu kontaktowego odpowiedź
            może być niemożliwa. Skrzynka administratora jest obsługiwana przez Gmail.
          </p>
        </section>

        <section aria-labelledby="privacy-storage">
          <h2 id="privacy-storage">5. Zapamiętywanie ustawień strony</h2>
          <p>
            Serwis wykorzystuje pamięć przeglądarki localStorage do zapamiętywania
            wybranego motywu wyglądu i stanu rozwinięcia menu bocznego. Ustawienia
            pozostają na urządzeniu użytkownika i nie służą profilowaniu reklamowemu.
          </p>
          <p>
            Dane te nie mają ustawionego terminu wygaśnięcia. Możesz je usunąć
            przez wyczyszczenie danych witryny w przeglądarce. Spowoduje to
            przywrócenie domyślnych ustawień wyglądu i menu.
          </p>
        </section>

        <section aria-labelledby="privacy-ads">
          <h2 id="privacy-ads">6. Reklamy Google AdSense</h2>
          <p>
            Serwis korzysta z Google AdSense. Google i partnerzy reklamowi mogą
            wykorzystywać pliki cookie, identyfikatory i podobne technologie do
            wyświetlania reklam, mierzenia ich skuteczności i zapobiegania
            oszustwom. Zakres ich działania zależy od ustawień usług i wyborów
            użytkownika dotyczących prywatności.
          </p>
          <p>
            W związku z obsługą reklam do Google mogą być przekazywane m.in.
            adres IP, adres odwiedzanej strony i informacje o urządzeniu oraz
            przeglądarce. Za zgodą użytkownika reklamy mogą być dopasowywane do
            zainteresowań na podstawie aktywności w tym serwisie i innych
            witrynach lub usługach. Może to obejmować profilowanie reklamowe.
          </p>
          <p>
            Odmowa personalizacji nie oznacza automatycznie braku reklam ani
            całkowitego braku przetwarzania danych, np. w celu zapobiegania
            nadużyciom. Szczegóły dotyczące partnerów i celów przetwarzania są
            przedstawiane w komunikacie zarządzania zgodami.
          </p>
          <ul>
            <li>
              <a href="https://policies.google.com/technologies/partner-sites?hl=pl">
                Jak Google używa danych z witryn korzystających z jego usług
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/technologies/ads?hl=pl">
                Informacje o reklamach Google
              </a>
            </li>
            <li>
              <a href="https://myadcenter.google.com/">
                Moje centrum reklam — ustawienia personalizacji Google
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="privacy-consent">
          <h2 id="privacy-consent">7. Zgody i ustawienia prywatności</h2>
          <p>
            Zgoda na personalizację reklam jest dobrowolna. Przetwarzanie oparte
            na zgodzie odbywa się na podstawie art. 6 ust. 1 lit. a RODO.
            Technologie wymagające zgody mogą być wykorzystywane dopiero po jej
            uzyskaniu. Komunikat zarządzania zgodami Google umożliwia
            zaakceptowanie, odrzucenie lub dostosowanie dostępnych opcji.
          </p>
          <p>
            Zgodę można wycofać w dowolnym momencie. Wycofanie nie wpływa na
            zgodność z prawem wcześniejszego przetwarzania. W sprawach związanych
            z realizacją tego prawa możesz skontaktować się z administratorem
            pod adresem <a href="mailto:3k.nexgen@gmail.com">3k.nexgen@gmail.com</a>.
          </p>
          <p>
            Ustawienia przeglądarki pozwalają blokować i usuwać cookies oraz dane
            witryny. Ich usunięcie może skasować zapisane preferencje i spowodować
            ponowne wyświetlenie komunikatu zgód. Usunięcie danych z przeglądarki
            nie jest równoznaczne z usunięciem wszystkich danych u dostawców usług.
          </p>
        </section>

        <section aria-labelledby="privacy-recipients">
          <h2 id="privacy-recipients">8. Odbiorcy danych i przekazywanie poza EOG</h2>
          <p>
            Dane mogą być przetwarzane przez Netlify jako dostawcę hostingu,
            Google jako dostawcę poczty i usług reklamowych oraz partnerów
            reklamowych wskazanych w komunikacie zgód, odpowiednio do celu
            przetwarzania i wyborów użytkownika.
          </p>
          <p>
            Korzystanie z tych usług może wiązać się z przekazywaniem danych poza
            Europejski Obszar Gospodarczy, w tym do Stanów Zjednoczonych.
            Przekazywanie wymaga odpowiedniej podstawy, takiej jak decyzja
            stwierdzająca odpowiedni stopień ochrony lub standardowe klauzule
            umowne. Informacji o zabezpieczeniach i możliwości uzyskania ich kopii
            udziela administrator. Zobacz również{" "}
            <a href="https://policies.google.com/privacy/frameworks?hl=pl">
              zasady przesyłania danych Google
            </a>.
          </p>
        </section>

        <section aria-labelledby="privacy-retention">
          <h2 id="privacy-retention">9. Okres przechowywania danych</h2>
          <ul>
            <li>
              Korespondencja: przez czas potrzebny do obsługi sprawy, a następnie
              tylko w zakresie niezbędnym do ustalenia, dochodzenia lub obrony
              roszczeń, do upływu odpowiednich terminów przedawnienia.
            </li>
            <li>
              Ustawienia wyglądu i menu: do ich usunięcia lub zastąpienia
              w przeglądarce.
            </li>
            <li>
              Dane techniczne hostingu: przez okres potrzebny do obsługi
              połączeń, diagnozowania błędów i zapewnienia bezpieczeństwa,
              zgodnie z zasadami retencji stosowanymi przez dostawcę hostingu.
              Dane związane z konkretnym incydentem mogą być potrzebne do jego
              wyjaśnienia lub obrony roszczeń.
            </li>
            <li>
              Dane reklamowe i zapis zgód: przez okresy zależne od celu,
              rodzaju technologii i dostawcy, opisane w szczegółach komunikatu
              zgód i dokumentacji dostawców.
            </li>
          </ul>
          <p>
            Informacje o technologiach Google znajdziesz w{" "}
            <a href="https://policies.google.com/technologies/cookies?hl=pl">
              opisie plików cookie Google
            </a>. Czas działania cookie na urządzeniu może różnić się od czasu
            przechowywania danych przez dostawcę.
          </p>
        </section>

        <section aria-labelledby="privacy-rights">
          <h2 id="privacy-rights">10. Twoje prawa</h2>
          <p>
            W przypadkach przewidzianych przez RODO przysługują Ci prawa dostępu
            do danych, sprostowania, usunięcia, ograniczenia przetwarzania
            i przenoszenia danych. Możesz wnieść sprzeciw wobec przetwarzania
            opartego na prawnie uzasadnionym interesie oraz wycofać udzieloną zgodę.
          </p>
          <p>
            Żądania kieruj na adres{" "}
            <a href="mailto:3k.nexgen@gmail.com">3k.nexgen@gmail.com</a>.
            Przysługuje Ci również prawo wniesienia skargi do Prezesa Urzędu
            Ochrony Danych Osobowych. Informacje znajdziesz na{" "}
            <a href="https://uodo.gov.pl/">stronie UODO</a>.
          </p>
          <p>
            Administrator nie podejmuje wobec użytkowników wyłącznie
            automatycznych decyzji wywołujących skutki prawne lub podobnie
            istotnie na nich wpływających. Profilowanie reklamowe opisano
            w części dotyczącej Google AdSense.
          </p>
        </section>

        <section aria-labelledby="privacy-changes">
          <h2 id="privacy-changes">11. Zmiany polityki</h2>
          <p>
            Polityka może być aktualizowana wraz ze zmianami funkcji serwisu,
            dostawców lub zasad przetwarzania danych. Aktualna wersja jest
            dostępna na tej stronie wraz z datą aktualizacji.
          </p>
        </section>
      </article>
    </>
  );
}

export default PrivacyPolicyPage;
