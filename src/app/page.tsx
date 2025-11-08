import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import TeamCard from "@/components/TeamCard";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <div>
      <section id="hero"><Hero /></section>
      <section id="features" className="py-16 text-center">
        <h2 className="section-title">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4">
          <FeatureCard title="Fast" description="Fast service." />
          <FeatureCard title="Reliable" description="Reliable service." />
          <FeatureCard title="Secure" description="Secure service." />
        </div>
      </section>
      <section id="team" className="py-16 bg-gray-100 text-center">
        <h2 className="section-title">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4">
          <TeamCard name="Alice" role="CEO" />
          <TeamCard name="Bob" role="CTO" />
          <TeamCard name="Charlie" role="Designer" />
        </div>
      </section>
      <section id="cta"><CTA /></section>
    </div>
  );
}
