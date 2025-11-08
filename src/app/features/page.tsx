import FeatureCard from "@/components/FeatureCard";

export default function FeaturesPage() {
  return (
    <div className="py-16 text-center">
      <h1 className="section-title mb-8">Features Section</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <FeatureCard title="Fast" description="Fast service." />
        <FeatureCard title="Reliable" description="Reliable service." />
        <FeatureCard title="Secure" description="Secure service." />
      </div>
    </div>
  );
}
