
import React from 'react';
import Header from '@/components/Header';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import WhyKanex from '@/components/about/WhyKanex';
import MissionVision from '@/components/about/MissionVision';
import QualityCertificates from '@/components/about/QualityCertificates';
import Milestones from '@/components/about/Milestones';
import CoreValues from '@/components/about/CoreValues';
import CompanyProfile from '@/components/about/CompanyProfile';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutContent />
      <WhyKanex />
      <MissionVision />
      <QualityCertificates />
      <Milestones />
      <CoreValues />
      <CompanyProfile />
      <Footer />
    </div>
  );
};

export default About;
