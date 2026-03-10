import React from 'react';
import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { getCaseStudyBySlug } from '../data/caseStudies';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function CaseStudyFullPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) {
    return (
      <div className="min-h-screen bg-gradient-page">
        <Navbar />
        <div className="max-w-[1200px] mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-semibold text-primary mb-4">Case study not found</h1>
          <Link to="/case-studies" className="text-cta hover:underline">← Back to Case Studies</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navbar />
      <motion.main
        className="max-w-[1200px] mx-auto px-6 pt-24 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Header: number + title + tags, brand description on right */}
        <div className="grid md:grid-cols-[1fr,1fr] gap-12 mb-12 pt-2">
          <div className="min-h-0">
            <p className="text-sm text-[#666666] mb-2 leading-normal pt-px">{study.number}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
              {study.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-[#e8e8e8] text-sm text-primary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#666666] leading-relaxed">{study.brandDescription}</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
          <ImageWithFallback
            src={study.heroImage}
            alt={study.title}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Client info: labels left, values right, horizontal lines */}
        <dl className="border-t border-border divide-y divide-border mb-16">
          {[
            { label: 'Client', value: study.client },
            { label: 'Category', value: study.category },
            { label: 'Work Period', value: study.workPeriod },
            { label: 'Industry', value: study.industry },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center py-4 gap-4">
              <dt className="text-[#666666] font-medium">{label}</dt>
              <dd className="text-primary font-semibold text-right">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Challenge, Strategy (left), Results in navy box (right) */}
        <div className="grid md:grid-cols-[1fr,1fr] gap-8 mb-24 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">• The Challenge</h2>
              <p className="text-[#666666] leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">• Our Strategy</h2>
              <ul className="space-y-3 text-[#666666] leading-relaxed list-disc list-inside">
                {study.strategy.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-primary rounded-2xl p-8 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-4">• The Results</h2>
            <ul className="space-y-3 text-white/95 leading-relaxed list-disc list-inside">
              {study.results.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <Link to="/case-studies" className="text-cta hover:underline font-medium">
            ← Back to Case Studies
          </Link>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
