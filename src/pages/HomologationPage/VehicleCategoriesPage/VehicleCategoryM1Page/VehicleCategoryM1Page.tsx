import { legalRegulationsTable } from "../../../../LegalRegulations/legalRegulationsTable";

function VehicleCategoryM1Page() {
  const regulations = legalRegulationsTable
    .filter((record) => record.categories.includes("M1"))
    .sort((a, b) => b.startDate.localeCompare(a.startDate));
  return (
    <>
      {regulations.map((record) => {
        const Content = record.Content;

        return (
          <Content
            key={record.id}
            id={record.id}
            title={record.title}
            startDate={record.startDate}
            endDate={record.endDate}
            legalActs={record.legalActs}
          />
        );
      })}
    </>
  );
}

export default VehicleCategoryM1Page;
