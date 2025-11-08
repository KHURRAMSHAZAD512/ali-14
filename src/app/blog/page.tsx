import SectionTitle from "@/components/SectionTitle";

export default function BlogPage() {
  return (
    <section>
      <SectionTitle title="Blog" subtitle="Latest on AI, MLOps & case studies" />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold">How to productionize ML models</h3>
          <p className="text-sm text-gray-500 mt-2">Best practices for reliable model deployments.</p>
        </article>
        <article className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold">Case Study: Document Understanding</h3>
          <p className="text-sm text-gray-500 mt-2">From data collection to 99% extraction accuracy.</p>
        </article>
      </div>
    </section>
  );
}
