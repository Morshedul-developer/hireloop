import Jobs from "@/components/Jobs";

export const metadata = {
  title: "Browse Jobs | HireLoop",
  description:
    "Search and filter open roles from top companies hiring right now.",
};

export default async function JobsPage({ searchParams }) {
  const { category = "", q = "" } = await searchParams;

  return <Jobs initialCategory={category} initialQuery={q} />;
}
