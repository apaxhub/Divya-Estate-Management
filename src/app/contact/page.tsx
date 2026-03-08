import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';

import ContactMap from '@/components/contact/ContactMap';

export const metadata = {
    title: 'Contact | Divya Estate Management',
    description: 'Reach out to Divya Estate Management for state-of-the-art industrial sheds, warehouses, and turnkey projects in Ahmedabad.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-bg">
            <ContactHero />
            <ContactMain />
            <ContactMap />
        </main>
    );
}
