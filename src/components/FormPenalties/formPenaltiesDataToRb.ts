import {
  punishmentRules,
  type EventType,
  type OwnerType,
  type PunishmentRules,
} from "../globalFunctions/calculator";
import { typedKeys } from "../globalFunctions/globalFunctions";

type RadioButtonType = {
  id: string;
  effectiveFrom: Date;
  name: string;
  value: string;
  label: string;
  layout: "vertical" | "horizontal";
}[];

type RadioButtonLabels = {
  typeOfEvent: Record<EventType, string>;
  typeOfPerson: Record<OwnerType, string>;
};

const radioButtonLabels = {
  typeOfEvent: {
    bought: "Kupiłem/sprowadziłem pojazd:",
    inheritance: "Odziedziczyłem pojazd w Polsce:",
    sold: "Sprzedałem pojazd:",
  },
  typeOfPerson: {
    otherOwner: "Jestem osobą fizyczną:",
    vehicleTrader: "Jestem przedsiębiorcą prowadzącym obrót pojazdami:",
  },
} satisfies RadioButtonLabels;

function getMainKeysFromPunishmentRules(punishmentRules: PunishmentRules) {
  const typeOfEvents = typedKeys(punishmentRules);

  const typeOfPerson = [
    ...new Set(
      typeOfEvents.flatMap((typeOfEvent) =>
        punishmentRules[typeOfEvent].flatMap((version) =>
          typedKeys(version.rules),
        ),
      ),
    ),
  ];
  return {
    typeOfEvent: typeOfEvents,
    typeOfPerson: typeOfPerson,
  };
}

function getDataToRb(
  punishmentRules: PunishmentRules,
  radioButtonLabels: RadioButtonLabels,
  rbPosition: "vertical" | "horizontal" = "vertical",
): {
  rbTypeOfPersonTable: RadioButtonType;
  rbTypeOfEventsTable: RadioButtonType;
} {
  const mainKeysFromPunishmentRules =
    getMainKeysFromPunishmentRules(punishmentRules);
  const { typeOfPerson } = mainKeysFromPunishmentRules;
  const TYPE_OF_EVENT =
    "typeOfEvent" satisfies keyof typeof mainKeysFromPunishmentRules;

  const TYPE_OF_PERSON =
    "typeOfPerson" satisfies keyof typeof mainKeysFromPunishmentRules;

  const DATE_TO_TYPE_OF_PERSON = new Date(2024, 0, 1);

  const rbTypeOfEventsTable: RadioButtonType = [];
  const rbTypeOfPersonTable: RadioButtonType = [];

  // Pętla tworząca rekordy zdarzeń
  typedKeys(punishmentRules).forEach((eventKey) => {
    const versions = punishmentRules[eventKey];

    const oldestEntity = versions.reduce((oldest, current) =>
      current.effectiveFrom.getTime() < oldest.effectiveFrom.getTime()
        ? current
        : oldest,
    );

    const startDate = oldestEntity.effectiveFrom;

    rbTypeOfEventsTable.push({
      id: `event-${eventKey}`,
      effectiveFrom: startDate,
      name: TYPE_OF_EVENT,
      value: eventKey,
      label: radioButtonLabels.typeOfEvent[eventKey],
      layout: rbPosition,
    });
  });

  // Osobna pętla tworząca rekordy osób
  typeOfPerson.forEach((personKey) => {
    rbTypeOfPersonTable.push({
      id: `person-${personKey}`,
      effectiveFrom: DATE_TO_TYPE_OF_PERSON,
      name: TYPE_OF_PERSON,
      value: personKey,
      label: radioButtonLabels.typeOfPerson[personKey],
      layout: rbPosition,
    });
  });

  return {
    rbTypeOfPersonTable,
    rbTypeOfEventsTable,
  };
}

export const getRbData = getDataToRb(punishmentRules, radioButtonLabels, "vertical");