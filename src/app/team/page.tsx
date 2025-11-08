import TeamCard from "@/components/TeamCard";

export default function TeamPage() {
  return (
    <div className="py-16 text-center">
      <h1 className="section-title mb-8">Team Section</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <TeamCard name="Alice" role="CEO" />
        <TeamCard name="Bob" role="CTO" />
        <TeamCard name="Charlie" role="Designer" />
      </div>
    </div>
  );
}
