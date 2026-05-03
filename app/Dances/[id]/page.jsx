import React from "react";
import Link from "next/link";

// This dynamic page will catch /dance/bharatanatyam, /dance/kathak, etc.
export default async function DanceDetail({ params }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/Dances"
          className="text-orange-500 mb-8 inline-block hover:text-white transition-colors"
        >
          &larr; Back to Dances
        </Link>
        <h1 className="text-5xl font-serif text-orange-400 capitalize mb-6">
          {id}
        </h1>
        <p className="text-gray-300 text-lg">
          This is where you will put the specific history, mudras, and beautiful
          imagery for the {id} dance!
        </p>
      </div>
    </div>
  );
}
