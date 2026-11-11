import axios from "axios";
import { polishActApiUrls, queryParametersSearchTitle, typesLegalActs, type LegalActDetails, type LegalActReference, type LegalActsResponseSearchTitle, type LegalActsTable, } from "./apiPolishRegulationData"
import { isNumberString, isValidDateString } from "../../globalFunctions/globalFunctions";

export const apiClientSejm = axios.create({
  baseURL: "https://api.sejm.gov.pl/eli/",
  timeout: 10_000,
  headers: {
    Accept: "application/json",
  },
  responseType: "json",
});

//search Params
export const searchParams = new URLSearchParams({
  [queryParametersSearchTitle.title.text]: "w sprawie wysokości stawek opłat za korzystanie ze środowiska na rok",
  [queryParametersSearchTitle.dateFrom.text]: "2023-01-01",
  [queryParametersSearchTitle.limit.text]: "20",
});

export const searchParamsPrawoORuchuDrogowymPoTJ = {
  [queryParametersSearchTitle.title.text]: "prawo o ruchu drogowym",
  [queryParametersSearchTitle.limit.text]: "100",
  [queryParametersSearchTitle.inForce.text]: "1",
  [queryParametersSearchTitle.sortBy.text]: "promulgation",
  [queryParametersSearchTitle.sortDir.text]: "desc"
}



export async function getDzUBySearchParams(
  searchParams: URLSearchParams,
  signal?: AbortSignal
): Promise<LegalActsResponseSearchTitle> {
  const response = await apiClientSejm.get<LegalActsResponseSearchTitle>(
    `acts/search?${searchParams}`,
    { signal }
  );

  return response.data;
}



export async function getFirstDzU(idDzU: string, signal?: AbortSignal): Promise<LegalActDetails> {
  const response = await apiClientSejm.get<LegalActDetails>(
    `acts/${idDzU}`,
    { signal }
  );
  return response.data;
}


export const nameDzuTable = {
  PoRD: { idDzU: "DU/1997/602", paramsSearchTitleText: "prawo o ruchu drogowym" },
  RozRejestracjaPojazdow: { idDzU: "DU/2024/1709", paramsSearchTitleText: "rejestracji i oznaczania pojazdów, wymagań dla tablic rejestracyjnych oraz wzorów innych dokumentów związanych z rejestracją pojazdów" },
  RozSzczegoloweCzynnosci: { idDzU: "DU/2022/1849", paramsSearchTitleText: "szczegółowych czynności organów w sprawach związanych z dopuszczeniem pojazdu do ruchu oraz wzorów dokumentów w tych sprawach" },
  RozOplatyZaDrPcTr: { idDzU: "DU/2022/1848", paramsSearchTitleText: "wysokości opłat za wydanie dowodu rejestracyjnego, pozwolenia czasowego i zalegalizowanych tablic (tablicy) rejestracyjnych oraz ich wtórników" },
  RozTrybLegalizacjiTrWzoryZl: { idDzU: "DU/2012/481", paramsSearchTitleText: "trybu legalizacji tablic rejestracyjnych oraz warunków technicznych i wzorów znaku legalizacyjnego" },
  RozProdukcjaDystrybucjaTr: { idDzU: "DU/2012/585", paramsSearchTitleText: "warunków produkcji i sposobu dystrybucji tablic rejestracyjnych i znaków legalizacyjnych" },
  RozCzasoweWycofanie: { idDzU: "DU/2004/2856", paramsSearchTitleText: "czasowego wycofania pojazdów z ruchu" },
  RozNadawanieCechIdentyfikacyjnych: { idDzU: "DU/2011/1401", paramsSearchTitleText: "sposobu oraz trybu nadawania i umieszczania w pojazdach cech identyfikacyjnych" },
  RozWzorOplataTrwalaUtrata: { idDzU: "DU/2002/419", paramsSearchTitleText: "opłaty będącej warunkiem wyrejestrowania pojazdu w przypadku udokumentowanej trwałej i zupełnej utraty pojazdu bez zmiany w zakresie prawa własności" },
  RozProfesjonalnaRejestracja: { idDzU: "DU/2019/546", paramsSearchTitleText: "profesjonalnej rejestracji pojazdów, stosowanych oznaczeń oraz opłat związanych z profesjonalną rejestracją pojazdów" },
  RozProfesjonalnaRejestracjaDystrybucjaPtr: { idDzU: "DU/2019/547", paramsSearchTitleText: "warunków produkcji i sposobu dystrybucji profesjonalnych tablic rejestracyjnych i znaków legalizacyjnych oraz trybu legalizacji profesjonalnych tablic rejestracyjnych" },
  RozStawkaOplatZaSrodowisko: { idDzU: "DU/2017/2490", paramsSearchTitleText: "jednostkowych stawek opłat za korzystanie ze środowiska" },
  Kpw: { idDzU: "DU/2001/1148", paramsSearchTitleText: "postępowania w sprawach o wykroczenia" },
};

export const nameDzuTableByTitle = {
  ObwieszczenieProfesjonalnaRejestracja: {
    paramsSearchTitleType: typesLegalActs.obwieszczenie,
    paramsSearchTitleText: "stawek opłat za wydanie decyzji o profesjonalnej rejestracji pojazdów, blankietu profesjonalnego dowodu rejestracyjnego, profesjonalnych tablic rejestracyjnych oraz znaku legalizacyjnego",
    paramsSearchDateFrom: "2025-01-01",
    paramsSearchLimits: "20",
  },
  ObwieszczenieTrwalaUtrata: {
    paramsSearchTitleType: typesLegalActs.obwieszczenie,
    paramsSearchTitleText: "w sprawie wysokości stawek opłat za korzystanie ze środowiska na rok",
    paramsSearchDateFrom: "2023-01-01",
    paramsSearchLimits: "20",
  },
}

export async function getDzUToTableByTitle(paramsSearchTitleType: string, paramsSearchDateFrom: string, paramsSearchTitleText: string, paramsSearchLimits: string, signal?: AbortSignal): Promise<LegalActsTable> {

  const dzUTable: LegalActsTable = [];

  //Sprawdzenie paramsSearchTitleText
  const type = paramsSearchTitleType.trim();
  const title = paramsSearchTitleText.trim();
  const isValidDateFrom = isValidDateString(paramsSearchDateFrom);
  const isLimitsValid = isNumberString(paramsSearchLimits);

  if (!title || !type) {
    throw new Error("[getDzUToTableByTitle] Tytuł wyszukiwania i typ aktu nie mogą być puste.");
  }
  if (!isValidDateFrom) {
    throw new Error("[getDzUToTableByTitle] Data musi być prawidłowa.");
  }
  if (!isLimitsValid) {
    throw new Error("[getDzUToTableByTitle] Limit musi być prawidłową liczbą.");
  }

  const searchParams = new URLSearchParams({
    [queryParametersSearchTitle.type.text]: type,
    [queryParametersSearchTitle.title.text]: title,
    [queryParametersSearchTitle.dateFrom.text]: paramsSearchDateFrom,
    [queryParametersSearchTitle.limit.text]: paramsSearchLimits,
  });


  //Pobranie tekstu podstawowego
  const acts = await getDzUBySearchParams(
    searchParams,
    signal
  )

  if (acts) {
    for (const item of acts.items) {
      dzUTable.push({
        id: `${item.ELI || item.address || `${item.publisher}/${item.year}/${item.pos}`}:original`,
        ELI: item.ELI ?? "", //DU/1997/602
        address: item.address ?? "", //WDU19970980602
        announcementDate: item.announcementDate ?? "", //Data wydania - 1997-06-20
        publisher: item.publisher ?? "", //Kod wydawcy - DU
        year: item.year ?? 0, //1997
        volume: item.volume ?? 0, //98
        pos: item.pos ?? 0, //602
        title: item.title ?? "", //Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym.
        displayAddress: item.displayAddress ?? "", //Dz.U. 1997 nr 98 poz. 602
        promulgation: item.promulgation ?? "", //Data ogłoszenia - 1997-08-19
        textPDF: item.textPDF && item.ELI ? polishActApiUrls.pdf(item.ELI) : "",
        textHTML: item.textHTML && item.ELI ? polishActApiUrls.html(item.ELI) : "",
        textDetails: item.address && item.ELI ? polishActApiUrls.details(item.address) : "",
        pageDzU: item.ELI ? polishActApiUrls.pageDzU(item.ELI) : "",
        changeDate: item.changeDate ?? "", //Data ostatniej zmiany - 2026-10-21T00:00:00
        type: item.type ?? "", //Ustawa
        status: item.status ?? "", //akt posiada tekst jednolity - obowiązujący
      });
    }
  }

  return dzUTable;
}

export async function getDzUToTable(idDzU: string, paramsSearchTitleText: string, signal?: AbortSignal): Promise<LegalActsTable> {

  const dzUTable: LegalActsTable = [];

  //Sprawdzenie paramsSearchTitleText
  const title = paramsSearchTitleText.trim();
  if (!title) {
    throw new Error("Tytuł wyszukiwania nie może być pusty.");
  }

  const searchParamsPoTj = new URLSearchParams({
    [queryParametersSearchTitle.title.text]: title,
    [queryParametersSearchTitle.limit.text]: "100",
    [queryParametersSearchTitle.inForce.text]: "1",
    [queryParametersSearchTitle.sortBy.text]: "promulgation",
    [queryParametersSearchTitle.sortDir.text]: "desc"
  });

  //Pobranie tekstu podstawowego
  const startAct = await getFirstDzU(idDzU, signal);
  //Wyszukanie id tekstu ujednoliconego
  // {
  //   "fileName": "D19970602Lj.pdf",
  //     "type": "U"
  // }
  const tekstUjednolicony = startAct.texts?.find(
    (text) => text.type === "U"
  )?.fileName;

  //Pobranie obiektu references z aktu podstawowego
  const references = startAct?.references;

  //Wyszukanie najnowszego id tekstu jednolitego
  const powiazaniaTJ =
    references?.["Inf. o tekście jednolitym"] ?? []; //{"id": "DU/2024/1251"},
  const tjId = latestTjId(powiazaniaTJ);

  let tjAct: LegalActDetails | undefined;

  //Pobranie tekstu jednolitego
  if (tjId) {
    tjAct = await getFirstDzU(tjId, signal);
  }
  const promulgation = tjAct?.promulgation || startAct.promulgation;

  if (!promulgation) {
    throw new Error("Brak daty publikacji potrzebnej do wyszukiwania aktów.");
  }
  //Ustawienie daty do wyszukiwania, od której należy szukać zmian w katach prawnych
  searchParamsPoTj.set(
    queryParametersSearchTitle.pubDateFrom.text,
    promulgation
  );

  //Pobranie aktów po dacie tekstu jednolitego, jeśli istnieje lub tekstu podstawowego.
  const afterTjActs = await getDzUBySearchParams(searchParamsPoTj, signal);

  if (afterTjActs) {
    for (const item of afterTjActs.items) {
      dzUTable.push({
        id: `${item.ELI || item.address || `${item.publisher}/${item.year}/${item.pos}`}:original`,
        ELI: item.ELI ?? "", //DU/1997/602
        address: item.address ?? "", //WDU19970980602
        announcementDate: item.announcementDate ?? "", //Data wydania - 1997-06-20
        publisher: item.publisher ?? "", //Kod wydawcy - DU
        year: item.year ?? 0, //1997
        volume: item.volume ?? 0, //98
        pos: item.pos ?? 0, //602
        title: item.title ?? "", //Ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym.
        displayAddress: item.displayAddress ?? "", //Dz.U. 1997 nr 98 poz. 602
        promulgation: item.promulgation ?? "", //Data ogłoszenia - 1997-08-19
        textPDF: item.textPDF && item.ELI ? polishActApiUrls.pdf(item.ELI) : "",
        textHTML: item.textHTML && item.ELI ? polishActApiUrls.html(item.ELI) : "",
        textDetails: item.address && item.ELI ? polishActApiUrls.details(item.address) : "",
        pageDzU: item.ELI ? polishActApiUrls.pageDzU(item.ELI) : "",
        changeDate: item.changeDate ?? "", //Data ostatniej zmiany - 2026-10-21T00:00:00
        type: item.type ?? "", //Ustawa
        status: item.status ?? "", //akt posiada tekst jednolity - obowiązujący
      });
    }
  }

  if (tjAct) {
    dzUTable.push({
      id: `${tjAct.ELI || tjAct.address || tjId}:original`,
      ELI: tjAct.ELI ?? "",
      address: tjAct.address ?? "",
      announcementDate: tjAct.announcementDate ?? "",
      publisher: tjAct.publisher ?? "",
      year: tjAct.year ?? 0,
      volume: tjAct.volume ?? 0,
      pos: tjAct.pos ?? 0,
      title: tjAct.title ?? "",
      displayAddress: tjAct.displayAddress ?? "",
      promulgation: tjAct.promulgation ?? "",
      textPDF: tjAct.textPDF && tjAct.ELI ? polishActApiUrls.pdf(tjAct.ELI) : "",
      textHTML: tjAct.textHTML && tjAct.ELI ? polishActApiUrls.html(tjAct.ELI) : "",
      textDetails: tjAct.address && tjAct.ELI ? polishActApiUrls.details(tjAct.address) : "",
      pageDzU: tjAct.ELI ? polishActApiUrls.pageDzU(tjAct.ELI) : "",
      changeDate: tjAct.changeDate ?? "",
      type: tjAct.type ?? "",
      status: tjAct.status ?? "",
    });
  }

  //Dodanie pierwszego aktu do tablicy
  if (startAct) {
    dzUTable.push({
      id: `${startAct.ELI || startAct.address || idDzU}:original`,
      ELI: startAct.ELI ?? "",
      address: startAct.address ?? "",
      announcementDate: startAct.announcementDate ?? "",
      publisher: startAct.publisher ?? "",
      year: startAct.year ?? 0,
      volume: startAct.volume ?? 0,
      pos: startAct.pos ?? 0,
      title: startAct.title ?? "",
      displayAddress: startAct.displayAddress ?? "",
      promulgation: startAct.promulgation ?? "",
      textPDF: startAct.textPDF && startAct.ELI ? polishActApiUrls.pdf(startAct.ELI) : "",
      textHTML: startAct.textHTML && startAct.ELI ? polishActApiUrls.html(startAct.ELI) : "",
      textDetails: startAct.address && startAct.ELI ? polishActApiUrls.details(startAct.address) : "",
      pageDzU: startAct.ELI ? polishActApiUrls.pageDzU(startAct.ELI) : "",
      changeDate: startAct.changeDate ?? "",
      type: startAct.type ?? "",
      status: startAct.status ?? "",
    });
  }

  //Dodanie tekstu ujednoliconego do tablicy
  if (startAct && tekstUjednolicony) {
    dzUTable.push({
      id: `${startAct.ELI || startAct.address || idDzU}:unified:${tekstUjednolicony}`,
      ELI: startAct.ELI ?? "",
      address: startAct.address ?? "",
      announcementDate: startAct.announcementDate ?? "",
      publisher: startAct.publisher ?? "",
      year: startAct.year ?? 0,
      volume: startAct.volume ?? 0,
      pos: startAct.pos ?? 0,
      title: startAct.title ? `(tekst ujednolicony) ${startAct.title}` : "",
      displayAddress: startAct.displayAddress ?? "",
      promulgation: startAct.promulgation ?? "",
      textPDF: startAct.ELI ? polishActApiUrls.unifiedPdf(startAct.ELI, tekstUjednolicony) : "",
      textHTML: startAct.textHTML && startAct.ELI ? polishActApiUrls.html(startAct.ELI) : "",
      textDetails: "",
      pageDzU: startAct.ELI ? polishActApiUrls.pageDzU(startAct.ELI) : "",
      changeDate: startAct.changeDate ?? "",
      type: startAct.type ?? "",
      status: startAct.status ?? "",
    });
  }
  const seen = new Set<string>();

  return dzUTable
    .toReversed()
    .filter((act) => {
      if (seen.has(act.id)) return false;

      seen.add(act.id);
      return true;
    })
    .toReversed();
}

function latestTjId(powiazaniaTJ: LegalActReference[]) {
  const latestTjId = powiazaniaTJ.reduce<
    { id: string; year: number; position: number } | undefined
  >((latest, { id }) => {
    const match = /^DU\/(\d{4})\/(\d+)$/.exec(id ?? "");

    if (!match) return latest;

    const year = Number(match[1]);
    const position = Number(match[2]);

    if (
      !latest ||
      year > latest.year ||
      (year === latest.year && position > latest.position)
    ) {
      return { id: id!, year, position };
    }

    return latest; //"DU/2024/1251"
  }, undefined);

  return latestTjId?.id;
}



// Pobiera akty w pętli
// const obwieszczenia = await Promise.all(
//   powiazaniaTJ.map(async ({ id }) => {
//     const response = await apiClientSejm.get(`acts / ${ id }`);
//     return response.data;
//   })
// );
