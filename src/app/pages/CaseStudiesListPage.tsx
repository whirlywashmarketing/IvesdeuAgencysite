import React from 'react';
import { Link } from 'react-router';
import { SectionLabel } from '../components/SectionLabel';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { caseStudies } from '../data/caseStudies';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function CaseStudiesListPage() {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Navbar />
      <section className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Case Studies</SectionLabel>
            <h1 className="text-5xl font-semibold text-primary mb-4">Real performance. Documented results.</h1>
            <p className="text-lg text-[#666666] max-w-2xl">
              We don't measure success in impressions. We measure it in revenue, efficiency, and sustained growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((work, index) => (
              <Link
                key={work.slug}
                to={`/case-studies/${work.slug}`}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-[500px] block"
              >
                <ImageWithFallback
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex gap-2 mb-4">
                    {work.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-6xl font-bold text-white mb-2">{work.metric}</div>
                  <h2 className="text-2xl font-semibold text-white mb-1">{work.title}</h2>
                  <p className="text-lg text-white/80">{work.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
