import { legalRegulationsTable } from "../../../../LegalRegulations/legalRegulationsTable";

function VehicleCategoryM1Page() {
  const regulations = legalRegulationsTable
    .filter((record) => record.categories.includes("M1"))
    .sort((a, b) => b.startDate.localeCompare(a.startDate));

  return (
    <>
      {regulations.map((record) => {
        const Content = record.Content;

        return <Content key={record.id} {...record} />;
      })}
    </>
  );
}

export default VehicleCategoryM1Page;
