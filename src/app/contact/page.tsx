"use client";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section className="max-w-2xl mx-auto">
      <SectionTitle title="Contact" subtitle="Get in touch with our team" />
      {!sent ? (
        <form onSubmit={submit} className="bg-white p-6 rounded-2xl shadow space-y-4">
          <input required placeholder="Full name" className="w-full border p-2 rounded" />
          <input required type="email" placeholder="Work email" className="w-full border p-2 rounded" />
          <textarea required placeholder="Project details" rows={5} className="w-full border p-2 rounded"></textarea>
          <button className="btn-primary w-full">Request Demo</button>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-200 p-6 rounded">Thanks — our team will contact you soon.</div>
      )}
    </section>
  );
}
