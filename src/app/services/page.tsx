import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

const services = [
  { title: "Consulting", desc: "Strategic AI roadmaps and feasibility studies." },
  { title: "Custom Models", desc: "NLP, vision, time-series & multimodal solutions." },
  { title: "MLOps", desc: "CI/CD, monitoring, and scalable inference." },
];

export default function ServicesPage() {
  return (
    <section>
      <SectionTitle title="Services" subtitle="How we help organizations adopt AI" />
      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {services.map((s) => <FeatureCard key={s.title} title={s.title} desc={s.desc} />)}
      </div>
    </section>
  );
}
