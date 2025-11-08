import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <SectionTitle title="About Malitation AI" subtitle="Building reliable AI for enterprises" />
      <p className="text-gray-600 mt-4">
        Malitation AI designs production-ready AI systems — from data engineering and model training
        to deployment and monitoring. We partner with companies to deliver measurable business impact.
      </p>
    </section>
  );
}
