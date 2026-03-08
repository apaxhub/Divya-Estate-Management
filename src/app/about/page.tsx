import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import CompanyOverview from '@/components/about/CompanyOverview';
import CompanyStats from '@/components/about/CompanyStats';
import CompletedProjects from '@/components/about/CompletedProjects';
import { Certifications } from '@/components/about/Certifications';
import { FounderSection } from '@/components/about/FounderSection';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
    title: 'About | Divya Estate Management',
    description: 'Learn more about Divya Estate Management, a trusted name in industrial real estate specializing in sheds, warehouses, and land in Ahmedabad.',
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-bg text-fg">
            <AboutHero />
            <CompanyOverview />
            <CompanyStats />
            <FounderSection />
            <CompletedProjects />
            <Certifications />
            <AboutCTA />
        </main>
    );
}
