// ============================================================
//  DIVYA ESTATE MANAGEMENT – Single Source of Truth Data Layer
// ============================================================

export const siteConfig = {
    brandName: 'Divya Estate Management',
    brandTagline: 'A Trusted Name in Industrial Real Estate',
    description: 'Divya Estate Management specializes in industrial real estate services, offering state-of-the-art industrial sheds, warehouses, and land in Ahmedabad, Gujarat.',
    contact: {
        phone: '+9825249510', // Example placeholder, user didn't provide specific phone
        email: 'info@divyaestate.com', // Example placeholder
        address: 'Ahmedabad, Gujarat, India',
        whatsapp: '+9825249510',
    },
    social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
    },
    location: {
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
    }
};

export const navbarLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
];

export const heroData = {
    preHeading: 'Industrial Real Estate Experts',
    title: {
        plain: 'Divya',
        italic: 'Estate Management'
    },
    description: 'Offering state-of-the-art industrial sheds for rent in Ahmedabad, along with premium warehouses and industrial land solutions.',
    ctaText: 'Explore Listings',
    stats: [
        { label: 'Industrial Sheds', value: '3000+' },
        { label: 'Warehouses', value: '2000+' },
        { label: 'Land', value: '5-500 Acres', highlight: true }
    ]
};

export const projectHighlights = [
    {
        number: "3000+",
        title: "Industrial Sheds",
        description: "Extensive database of industrial sheds available for rent and lease across major industrial zones.",
        imageSrc: "/industrial_shed_highlight.png"
    },
    {
        number: "2000+",
        title: "Warehouses",
        description: "High-quality warehouses for lease and rent, ensuring excellent connectivity and infrastructure.",
        imageSrc: "/warehouse_highlight.png"
    },
    {
        number: "500",
        title: "Acres of Land",
        description: "Industrial land ranging from 5 acres to 500 acres readily available for sale for large-scale facilities.",
        imageSrc: "/industrial_land_highlight.png"
    },
    {
        number: "20+",
        title: "Years Expertise",
        description: "Two decades of expertise and professionalism in the industrial real estate sector.",
        imageSrc: "/expertise_highlight.png"
    }
];

export const amenities = [
    { name: "Industrial Sheds", icon: "Factory" },
    { name: "Warehousing", icon: "Warehouse" },
    { name: "Turnkey Projects", icon: "Settings" },
    { name: "Industrial Land", icon: "Map" },
    { name: "Pre-leased Property", icon: "Key" },
    { name: "Expert Consultation", icon: "Briefcase" }
];

export const aboutHeroData = {
    badge: 'Who We Are',
    heading: {
        plain1: 'Two Decades of',
        italic: 'Expertise',
        plain2: 'in Industrial Real Estate.'
    },
    description: 'Divya Estate Management has been the source of many dreams turning to reality with the ability to access all industrial services under one roof. We specialize in providing comprehensive industrial real estate solutions.',
    signature: 'Divya Estate Management',
    bgImage: '/about_hero_bg.png'
};

export const companyOverviewData = {
    badge: 'Our Mission',
    heading: 'Delivering Premium Industrial Real Estate Services',
    description1: 'Our mission is to deliver premium industrial real estate services and provide a seamless experience to our clients worldwide. At Divya Estate Management, customer satisfaction is our top priority.',
    description2: 'We offer transparent communication, verified and exclusive listings, and end-to-end support to help businesses find the perfect industrial space with excellent connectivity and compliance-ready features.',
    callout: 'A trusted name in industrial real estate.',
    image: '/about_overview_bg.png'
};

export const companyStats = [
    {
        value: "3000+",
        label: "Industrial Sheds",
        icon: "Building",
        description: "Ready for rent or lease in Ahmedabad and across Gujarat."
    },
    {
        value: "2000+",
        label: "Warehouses",
        icon: "Package",
        description: "Verified listings of high-quality warehouses for growing businesses."
    },
    {
        value: "500",
        label: "Acres Land",
        icon: "MapPin",
        description: "Available for sale, suitable for compact to large-scale units."
    },
    {
        value: "20",
        label: "Years Experience",
        icon: "ShieldCheck",
        description: "Professionalism and expertise ensuring seamless client experience."
    }
];

export const completedProjectsData = [
    {
        name: "Sanand Industrial Park",
        location: "Sanand, Ahmedabad",
        year: "2023",
        image: "/images/projects/sanand_park.png",
        specs: "INDUSTRIAL • SHED"
    },
    {
        name: "Bavla Logistics Hub",
        location: "Bavla, Gujarat",
        year: "2022",
        image: "/images/projects/bavla_hub.png",
        specs: "WAREHOUSE • LOGISTICS"
    },
    {
        name: "Changodar Tech Zone",
        location: "Changodar, Ahmedabad",
        year: "2021",
        image: "/images/projects/changodar_zone.png",
        specs: "INDUSTRIAL • MANUFACTURING"
    },
    {
        name: "Vithalapur Industrial",
        location: "Vithalapur, Gujarat",
        year: "2020",
        image: "/images/projects/vithalapur_estate.png",
        specs: "INDUSTRIAL • LAND"
    }
];

export const certificationsData = [
    {
        title: 'Verified Listings',
        description: 'Every property in our database is verified to ensure authenticity and trust.',
        icon: 'CheckCircle',
    },
    {
        title: 'Compliance Ready',
        description: 'We ensure all properties meet industrial compliance and infrastructure standards.',
        icon: 'Shield',
    },
    {
        title: 'Global Reach',
        description: 'Providing seamless industrial real estate experience to clients worldwide.',
        icon: 'Globe',
    },
    {
        title: 'End-to-End Support',
        description: 'From property search to final compliance, we provide full turnkey support.',
        icon: 'HeartHandshake',
    },
];

export const founderData = {
    name: 'Our Leadership Team',
    role: 'Experienced Industrial Experts',
    quote: '"Our mission is to provide a seamless experience and deliver premium industrial services tailored to business needs."',
    bio1: 'With two decades of expertise, our leadership has built Divya Estate Management into a trusted name for industrial real estate in Gujarat.',
    bio2: 'We focus on customer satisfaction, transparent communication, and providing complete industrial turnkey project solutions.',
    signature: 'Divya Estate Management',
    image: '/images/about/founder.png'
};

export const contactHeroData = {
    badge: 'Connect With Us',
    heading: {
        plain1: 'Find Your Perfect',
        italic: 'Industrial Space'
    },
    description: '"Specializing in industrial sheds, warehouses, and land in Ahmedabad. Let us help you find the right base for your business growth."',
    details: [
        { label: 'Coverage', value: 'Ahmedabad & Gujarat' },
        { label: 'Response', value: 'Within 24 Hours' }
    ]
};

export const contactInfoData = {
    headquarters: {
        label: 'Main Office',
        address: 'Ahmedabad, Gujarat,\nIndia',
        icon: 'MapPin'
    },
    globalDesk: {
        label: 'Contact Number',
        value: '+9825249510',
        phone: '+9825249510',
        icon: 'Phone'
    },
    email: {
        label: 'Inquiries',
        value: 'info@divyaestate.com',
        icon: 'Mail'
    },
    status: {
        label: 'Business Hours',
        hours: 'Mon — Sat\n09:30 — 18:30 IST',
        icon: 'Clock'
    }
};

export const mapConfig = {
    center: { lat: 23.0225, lng: 72.5714 }, // Ahmedabad center
    zoom: 12,
};

