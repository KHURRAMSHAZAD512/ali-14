"use client";
import { useState } from "react";

export default function DemoPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const run = async () => {
    setOutput("Processing...");
    await new Promise((r) => setTimeout(r, 700));
    setOutput(`Demo result (simulated) for: "${input.slice(0, 200)}"`);
  };

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Live Demo</h1>
      <textarea value={input} onChange={(e)=>setInput(e.target.value)} rows={6}
        className="w-full border rounded p-3" placeholder="Paste text for demo..."/>
      <div className="flex gap-3 mt-3">
        <button onClick={run} className="btn-primary">Run Demo</button>
        <button onClick={() => { setInput(""); setOutput(null); }} className="border px-4 py-2 rounded">Clear</button>
      </div>

      {output && <div className="mt-6 bg-white p-4 rounded shadow"><pre className="whitespace-pre-wrap">{output}</pre></div>}
    </section>
  );
}
