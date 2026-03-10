import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { CaseStudiesListPage } from './pages/CaseStudiesListPage';
import { CaseStudyFullPage } from './pages/CaseStudyFullPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudiesListPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyFullPage />} />
      </Routes>
    </BrowserRouter>
  );
}
