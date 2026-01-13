import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Portfolio() {
    const [expandedItems, setExpandedItems] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');

    const toggleExpand = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const portfolioItems = [
        {
            id: 1,
            title: "PIXELMINDSOLUTIONS",
            description: "Pixelmind Solutions is a leading IT services provider, offering innovative solutions in website development, mobile application design, and digital marketing. We are dedicated to helping businesses thrive in the digital world by delivering tailored, high-quality services that enhance user experiences, drive growth, and build a strong online presence.",
            image: "/assets/images/banner/pixelmind.jpg",
            icon: "/assets/images/logo/pixelmind.jpg",
            link: "https://www.pixelmindsolutions.com/",
            type: "website"
        },
        {
            id: 2,
            title: "QR AND CARDS",
            description: "with the help of the clever e-commerce platform QRandCards.com, users can design and personalize QR code cards for events, businesses, and private use. The website provides secure online ordering, real-time previews, and a smooth design experience.With a focus on innovation, it bridges traditional cards with digital interactivity using QR technology.",
            image: "/assets/images/banner/qrandcards.jpg",
            icon: "/assets/images/logo/qrandcards.jpg",
            link: "https://qrandcards.com/",
            type: "website"
        },
        {
            id: 3,
            title: "BINGENJOY",
            description: "Bingenjoy.com transforms private theater events by providing custom celebrations in a lavish, stage-inspired atmosphere, whether they are wedding anniversaries, birthday parties, poignant proposals, or designer cake unveilings. Guests put together completely unique packages that include gourmet meals, custom cakes, and live performances ranging from musicians and actors to interactive spectacles. They can also select from a variety of stunning décor themes.The sleek, mobile‑friendly site guides users through themed event options, showcases photo highlights from past parties, and streamlines booking so that selecting dates and add‑ons takes only a few effortless clicks. Every detail is crafted to ensure your special occasion unfolds with dramatic style and seamless ease.",
            image: "/assets/images/banner/binenjoy.jpg",
            icon: "/assets/images/logo/binenjoy.png",
            link: "https://bingenjoy.com/",
            type: "website"
        },
        {
            id: 4,
            title: "CARNIVAL CASTLE",
            description: "CarnivalCastle.com is a versatile private‑theater and events venue that transforms every celebration into a theatrical experience, whether it's a wedding anniversary, birthday party, love proposal, or custom cake unveiling.With immersive stage-like settings, vibrant decor themes, and a curated lineup  of live entertainment—from musicians and performers to interactive shows—Carnival Castle offers fully customizable packages that include catering, gourmet.The responsive, easy‑to‑navigate website allows guests to browse event themes, view photo galleries of past celebrations, and secure their preferred date and add‑ons in just a few clicks, ensuringeach A unique moment is brought to life with style and elegance.",
            image: "/assets/images/banner/carnival.jpg",
            icon: "/assets/images/logo/carnival.png",
            link: "https://carnivalcastle.com/",
            type: "website"
        },
        {
            id: 5,
            title: "1 SQUARE",
            description: "A clever and safe community marketplace platform created especially for Hyderabad is called 1Square. It facilitates the discovery, listing, and trading of goods within the community by bringing together local consumers and sellers. Offering users a smooth listing procedure, transparent communication, and secure transactions is the primary objective.",
            image: "/assets/images/banner/onesquare.png",
            icon: "/assets/images/logo/onesquare.png",
            link: "https://play.google.com/store/apps/details?id=com.onesquare.onesquare",
            type: "app"
        },
        {
            id: 6,
            title: "ATOZ KEY SOLUTION",
            description: "Atoz Key Solution is a modern social media and digital platform designed to connect people, businesses, and creators in one ecosystem. It enables users to share posts, run advertisements, manage campaigns, and interact with communities while offering powerful tools for digital growth, brand promotion, and online engagement.",
            image: "/assets/portfolio/atoz.png",
            icon: "/assets/portfolio/atozlogo.png",
            link: "https://atozkeysolution.com/",
            type: "website"
        },
        {
            id: 7,
            title: "Vegiffyy",
            description: "Vegiffyy is a cutting-edge mobile food delivery application focused on providing fresh, hygienic, and delicious vegetarian meals. It connects users with trusted local restaurants and home kitchens, offering easy ordering, quick delivery, and a seamless user experience for healthy food lovers.",
            image: "/assets/portfolio/veg.jpeg",
            icon: "/assets/portfolio/veglogo.png",
            link: "https://play.google.com/store/apps/details?id=com.veggify.veegify",
            type: "app"
        },
        {
            id: 8,
            title: "Redemly",
            description: "Redemly is an innovative mobile application that simplifies the process of redeeming rewards, discounts, and offers from various brands and retailers. It provides users with a seamless experience to discover, collect, and redeem points or vouchers directly from their smartphones, enhancing customer loyalty and engagement.",
            image: "/assets/portfolio/redemly.png",
            icon: "/assets/portfolio/redemlylogo.png",
            link: "https://apps.apple.com/in/app/redemly/id6755115759",
            type: "app"
        },
        {
            id: 9,
            title: "EditEZY",
            description: "EditEZY is an easy-to-use poster and graphic design platform that helps users create eye-catching posters, banners, and social media creatives in minutes. With ready-made templates, drag-and-drop editing, and powerful customization tools, EditEZY makes professional design accessible to everyone.",
            image: "/assets/portfolio/editezy.png",
            icon: "/assets/portfolio/editezy.png",
            link: "https://play.google.com/store/apps/details?id=com.posternova.posternova",
            type: "app"
        },
        {
            id: 10,
            title: "Varahi SelfDriveCars",
            description: "Varahi SelfDriveCars is a premier car rental service that offers a wide range of vehicles for self-drive, catering to both leisure and business travelers. With a focus on convenience, affordability, and customer satisfaction, Varahi SelfDriveCars provides flexible rental options, easy booking processes, and well-maintained vehicles to ensure a smooth driving experience.",
            image: "/assets/portfolio/carrentlogo.png",
            icon: "/assets/portfolio/carrentlogo.png",
            link: "https://play.google.com/store/apps/details?id=com.self_drive_cars",
            type: "app"
        },
        {
            id: 11,
            title: "Techsterker",
            description: "Techsterker is a Instuite to teach coding to students and professionals. They provide courses on various programming languages and technologies, helping learners to enhance their skills and advance their careers in the tech industry.",
            image: "/assets/portfolio/tech.png",
            icon: "/assets/portfolio/techlogo.png",
            link: "https://techsterker.com/",
            type: "website"
        },
        {
            id: 12,
            title: "Dharmadwajam",
            description: "Dharmadwajam is a digital platform that provides news, informative articles, and creative posters focused on culture, society, and awareness. It serves as a hub for meaningful content, delivering timely updates and visually engaging designs to keep users informed and inspired.",
            image: "/assets/portfolio/news.png",
            icon: "/assets/portfolio/news.png",
            link: "https://play.google.com/store/apps/details?id=com.dhama.dharmadhvajam",
            type: "app"
        },
        {
            id: 13,
            title: "BackUp Tickets",
            description: "BackUp Tickets is a secure ticket resale and exchange platform that allows users to buy and sell event tickets with ease. The platform connects verified buyers and sellers, ensuring transparent pricing, safe transactions, and a reliable way to transfer tickets for concerts, movies, sports, and live events.",
            image: "/assets/portfolio/atoz.png",
            icon: "/assets/portfolio/atoz.png",
            link: "https://play.google.com/store/apps/details?id=com.backup.backup_ticket",
            type: "app"
        },
        {
            id: 14,
            title: "SS Air Conditioners",
            description: "SS Air Conditioners is a trusted provider of air conditioning solutions, offering a wide range of products and services for residential and commercial needs. With a focus on energy efficiency, reliability, and customer satisfaction, SS Air Conditioners delivers expert installation, maintenance, and repair services to ensure optimal indoor comfort.",
            image: "/assets/portfolio/ss.png",
            icon: "/assets/portfolio/sslogo.png",
            link: "https://www.ssairconditioners.com/",
            type: "digital"
        },
        {
            id: 15,
            title: "EditEZY",
            description: "EditEZY is an easy-to-use poster and graphic design platform that helps users create eye-catching posters, banners, and social media creatives in minutes. With ready-made templates, drag-and-drop editing, and powerful customization tools, EditEZY makes professional design accessible to everyone.",
            image: "/assets/portfolio/editezy.png",
            icon: "/assets/portfolio/editezy.png",
            link: "https://editezy.com/",
            type: "digital"
        },
        {
            id: 16,
            title: "Varahi SelfDriveCars",
            description: "Varahi SelfDriveCars is a premier car rental service that offers a wide range of vehicles for self-drive, catering to both leisure and business travelers. With a focus on convenience, affordability, and customer satisfaction, Varahi SelfDriveCars provides flexible rental options, easy booking processes, and well-maintained vehicles to ensure a smooth driving experience.",
            image: "/assets/portfolio/carrentlogo.png",
            icon: "/assets/portfolio/carrentlogo.png",
            link: "https://varahiselfdrivecars.com/",
            type: "digital"
        },
        {
            id: 17,
            title: "Nupura Car Service",
            description: "Nupura Car Service is a reliable and affordable car service provider offering a wide range of automotive services. With a commitment to quality and customer satisfaction, Nupura Car Service ensures your vehicle is well-maintained and ready for any journey.",
            image: "/assets/portfolio/carservicelogo.png",
            icon: "/assets/portfolio/carservicelogo.png",
            link: "https://play.google.com/store/apps/details?id=com.nupura.nupura_cars",
            type: "app"
        },
        {
            id: 18,
            title: "Vegiffyy",
            description: "Vegiffyy is a cutting-edge mobile food delivery application focused on providing fresh, hygienic, and delicious vegetarian meals. It connects users with trusted local restaurants and home kitchens, offering easy ordering, quick delivery, and a seamless user experience for healthy food lovers.",
            image: "/assets/portfolio/veg.jpeg",
            icon: "/assets/portfolio/veglogo.png",
            link: "https://vegiffy.com/",
            type: "website"
        },
        {
            id: 19,
            title: "Redemly",
            description: "Redemly is an innovative mobile application that simplifies the process of redeeming rewards, discounts, and offers from various brands and retailers. It provides users with a seamless experience to discover, collect, and redeem points or vouchers directly from their smartphones, enhancing customer loyalty and engagement.",
            image: "/assets/portfolio/redemly.png",
            icon: "/assets/portfolio/redemlylogo.png",
            link: "https://redemly.com/",
            type: "website"
        },
        {
            id: 20,
            title: "EditEZY",
            description: "EditEZY is an easy-to-use poster and graphic design platform that helps users create eye-catching posters, banners, and social media creatives in minutes. With ready-made templates, drag-and-drop editing, and powerful customization tools, EditEZY makes professional design accessible to everyone.",
            image: "/assets/portfolio/editezy.png",
            icon: "/assets/portfolio/editezy.png",
            link: "https://editezy.com/",
            type: "website"
        },
        {
            id: 21,
            title: "Varahi SelfDriveCars",
            description: "Varahi SelfDriveCars is a premier car rental service that offers a wide range of vehicles for self-drive, catering to both leisure and business travelers. With a focus on convenience, affordability, and customer satisfaction, Varahi SelfDriveCars provides flexible rental options, easy booking processes, and well-maintained vehicles to ensure a smooth driving experience.",
            image: "/assets/portfolio/carrentlogo.png",
            icon: "/assets/portfolio/carrentlogo.png",
            link: "https://varahiselfdrivecars.com/",
            type: "website"
        },
        {
            id: 22,
            title: "Clynix",
            description: "Clynix is a smart medicine booking and delivery application that allows users to order prescribed and over-the-counter medicines easily from nearby pharmacies. The app offers features like digital prescription uploads, real-time order tracking, secure payments, and fast doorstep delivery, making healthcare access simple and reliable.",
            image: "/assets/portfolio/clynixlogo.png",
            icon: "/assets/portfolio/clynixlogo.png",
            link: "https://play.google.com/store/apps/details?id=com.clynix.clynix",
            type: "app"
        },
        {
            id: 23,
            title: "Clynix",
            description: "Clynix is a smart medicine booking and delivery application that allows users to order prescribed and over-the-counter medicines easily from nearby pharmacies. The app offers features like digital prescription uploads, real-time order tracking, secure payments, and fast doorstep delivery, making healthcare access simple and reliable.",
            image: "/assets/portfolio/clynixlogo.png",
            icon: "/assets/portfolio/clynixlogo.png",
            link: "https://clynix.com/",
            type: "website"
        },
        {
            id: 24,
            title: "Nupura Car Service",
            description: "Nupura Car Service is a reliable and affordable car service provider offering a wide range of automotive services. With a commitment to quality and customer satisfaction, Nupura Car Service ensures your vehicle is well-maintained and ready for any journey.",
            image: "/assets/portfolio/carservicelogo.png",
            icon: "/assets/portfolio/carservicelogo.png",
            link: "https://nupuraselfdrivecars.vercel.app/",
            type: "website"
        },
        {
            id: 25,
            title: "Dharmadwajam",
            description: "Dharmadwajam is a digital platform that provides news, informative articles, and creative posters focused on culture, society, and awareness. It serves as a hub for meaningful content, delivering timely updates and visually engaging designs to keep users informed and inspired.",
            image: "/assets/portfolio/news.png",
            icon: "/assets/portfolio/news.png",
            link: "https://dharmadhwajam.vercel.app/",
            type: "website"
        }
    ];

    // Filter portfolio items based on active filter
    const filteredItems = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.type === activeFilter);

    // Get counts for each category
    const websiteCount = portfolioItems.filter(item => item.type === 'website').length;
    const appCount = portfolioItems.filter(item => item.type === 'app').length;
    const digitalCount = portfolioItems.filter(item => item.type === 'digital').length;

    return (
        <div>
            <Helmet>
                <title>Portfolio | Our Creative Work & Projects - PixelMind Solutions</title>
                <meta name="description" content="Explore our diverse portfolio including websites, mobile apps, branding projects and digital experiences delivered for top clients." />
                <meta name="keywords" content="portfolio, case studies, app development projects, website design samples, branding, PixelMind Solutions portfolio" />
                <link rel="preload" as="image" href="/assets/images/banner/banner-inner-page.jpg" />
            </Helmet>

            <Header />
            <main>
                <section
                    className="banner__inner-page bg-image pt-100 pb-100"
                    style={{
                        backgroundImage: `url(${"/assets/images/banner/banner-inner-page.jpg"})`,
                    }}
                >
                    <div className="container">
                        <h2 className="wow fadeInUp">Portfolio</h2>
                        <div className="breadcrumb-list wow fadeInUp">
                            <Link to="/">Home</Link>
                            <span><i className="fa-regular fa-angles-right mx-2" /> Portfolio</span>
                        </div>
                    </div>
                </section>

                {/* Modern Filter Navigation */}
                <section className="portfolio-filter-area pt-40 pb-40">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="portfolio-filter-wrapper">
                                    <div className="filter-nav d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4">
                                        <button
                                            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                                            onClick={() => setActiveFilter('all')}
                                        >
                                            <span className="filter-text">All Projects</span>
                                            <span className="filter-count">{portfolioItems.length}</span>
                                        </button>
                                        <button
                                            className={`filter-btn ${activeFilter === 'website' ? 'active' : ''}`}
                                            onClick={() => setActiveFilter('website')}
                                        >
                                            <span className="filter-text">Websites</span>
                                            <span className="filter-count">{websiteCount}</span>
                                        </button>
                                        <button
                                            className={`filter-btn ${activeFilter === 'app' ? 'active' : ''}`}
                                            onClick={() => setActiveFilter('app')}
                                        >
                                            <span className="filter-text">Mobile Apps</span>
                                            <span className="filter-count">{appCount}</span>
                                        </button>
                                        <button
                                            className={`filter-btn ${activeFilter === 'digital' ? 'active' : ''}`}
                                            onClick={() => setActiveFilter('digital')}
                                        >
                                            <span className="filter-text">Digital Marketing</span>
                                            <span className="filter-count">{digitalCount}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Styles for Filter Navigation */}
                    <style jsx>{`
                        .portfolio-filter-area {
                            background: #f8f9fa;
                        }
                        .portfolio-filter-wrapper {
                            background: white;
                            border-radius: 16px;
                            padding: 25px 30px;
                            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
                            border: 1px solid rgba(0, 0, 0, 0.05);
                        }
                        .filter-nav {
                            gap: 15px;
                        }
                        .filter-btn {
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            padding: 12px 24px;
                            background: #f8f9fa;
                            border: 2px solid transparent;
                            border-radius: 50px;
                            color: #6c757d;
                            font-weight: 600;
                            font-size: 15px;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            position: relative;
                            overflow: hidden;
                        }
                        .filter-btn:hover {
                            background: #e9ecef;
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        }
                        .filter-btn.active {
                            background: linear-gradient(135deg, #06cabc 0%, #2e77b0 100%);
                            color: white;
                            border-color: #06cabc;
                            box-shadow: 0 4px 15px rgba(6, 202, 188, 0.3);
                        }
                        .filter-btn.active::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
                            border-radius: 50px;
                        }
                        .filter-count {
                            background: rgba(255, 255, 255, 0.2);
                            color: white;
                            padding: 2px 10px;
                            border-radius: 20px;
                            font-size: 13px;
                            font-weight: 700;
                        }
                        .filter-btn:not(.active) .filter-count {
                            background: #dee2e6;
                            color: #6c757d;
                        }
                        .filter-btn.active .filter-count {
                            background: rgba(255, 255, 255, 0.3);
                            color: white;
                        }
                        .filter-text {
                            position: relative;
                            z-index: 1;
                        }
                        
                        @media (max-width: 768px) {
                            .portfolio-filter-wrapper {
                                padding: 20px;
                            }
                            .filter-btn {
                                padding: 10px 20px;
                                font-size: 14px;
                            }
                            .filter-nav {
                                gap: 10px;
                            }
                        }
                        @media (max-width: 576px) {
                            .portfolio-filter-wrapper {
                                padding: 15px;
                            }
                            .filter-btn {
                                padding: 8px 16px;
                                font-size: 13px;
                            }
                            .filter-count {
                                padding: 1px 8px;
                                font-size: 12px;
                            }
                        }
                    `}</style>
                </section>

                <section className="service-inner-area pt-30 pb-90">
                    <div className="container">
                        {filteredItems.length === 0 ? (
                            <div className="text-center py-5">
                                <div className="empty-state">
                                    <i className="fa-regular fa-folder-open fa-3x mb-3" style={{ color: '#06cabc' }}></i>
                                    <h4>No projects found</h4>
                                    <p className="text-muted">No projects match the selected filter.</p>
                                    <button
                                        className="btn btn-primary mt-3"
                                        onClick={() => setActiveFilter('all')}
                                    >
                                        Show All Projects
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="row g-4">
                                {filteredItems.map((item) => {
                                    const isExpanded = expandedItems[item.id];
                                    const shouldTruncate = item.description.length > 100;
                                    const displayedText = isExpanded || !shouldTruncate
                                        ? item.description
                                        : item.description.slice(0, 100) + '...';

                                    return (
                                        <div key={item.id} className="col-lg-4 col-md-6">
                                            <div className="service-two__item">
                                                <div className="image">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="img-fluid w-100"
                                                        style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }}
                                                    />
                                                    {/* Type Badge */}
                                                    <div className="type-badge">
                                                        {item.type === 'website' ? (
                                                            <span className="website-badge">
                                                                <i className="fa-solid fa-globe me-1"></i> Website
                                                            </span>
                                                        ) : (
                                                            <span className="app-badge">
                                                                <i className="fa-solid fa-mobile-screen-button me-1"></i> Mobile App
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="service-two__content">
                                                    <div className="icon">
                                                        <img src={item.icon} alt="icon" className='img-fluid' />
                                                    </div>
                                                    <div className="shape">
                                                        <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                                                    </div>
                                                    <h4>
                                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="primary-hover">
                                                            {item.title}
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        {displayedText}
                                                        {shouldTruncate && (
                                                            <span
                                                                onClick={() => toggleExpand(item.id)}
                                                                className="ms-1"
                                                                style={{ color: "#06cabc", cursor: 'pointer', fontWeight: 'bold' }}
                                                            >
                                                                {isExpanded ? 'View Less' : 'View More'}
                                                            </span>
                                                        )}
                                                    </p>
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => window.open(item.link, '_blank')}
                                                    >
                                                        Visit Us
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Styles for Type Badges */}
                    <style jsx>{`
                        .service-two__item {
                            position: relative;
                        }
                        .type-badge {
                            position: absolute;
                            top: 15px;
                            right: 15px;
                            z-index: 2;
                        }
                        .website-badge, .app-badge {
                            display: inline-flex;
                            align-items: center;
                            padding: 6px 12px;
                            border-radius: 20px;
                            font-size: 12px;
                            font-weight: 600;
                            backdrop-filter: blur(10px);
                            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                        }
                        .website-badge {
                            background: rgba(37, 99, 235, 0.9);
                            color: white;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                        }
                        .app-badge {
                            background: rgba(16, 185, 129, 0.9);
                            color: white;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                        }
                        .empty-state {
                            padding: 60px 20px;
                        }
                        .empty-state i {
                            font-size: 60px;
                            margin-bottom: 20px;
                        }
                        .empty-state h4 {
                            color: #333;
                            margin-bottom: 10px;
                        }
                        .empty-state p {
                            color: #666;
                        }
                        .btn-primary {
                            background: #06cabc;
                            border: none;
                            padding: 10px 25px;
                            border-radius: 5px;
                            transition: all 0.3s ease;
                        }
                        .btn-primary:hover {
                            background: #05b8ab;
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(6, 202, 188, 0.3);
                        }
                    `}</style>
                </section>

                <section className="counter-area pt-60 pb-60">
                    <div className="container">
                        <div className="counter__wrp gradient-bg position-relative overflow-hidden p-4 p-md-5">
                            {/* Background Shape */}
                            <div
                                className="counter__shape wow slideInRight"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <img
                                    src="/assets/images/shape/counnter-bg-shape.png"
                                    alt="shape"
                                    className="img-fluid"
                                />
                            </div>

                            {/* Section Title */}
                            <h2 className="text-light text-center mb-4 mb-md-5">
                                Our Achievements
                            </h2>

                            <div className="row g-4 justify-content-center">
                                {/* Counter Item 1 */}
                                <div
                                    className="col-6 col-sm-6 col-md-4 col-lg-3 wow bounceInUp"
                                    data-wow-delay="00ms"
                                    data-wow-duration="1000ms"
                                >
                                    <div className="counter__item h-100">
                                        <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                                            <div className="icon-bg rounded-circle bg-white d-flex align-items-center justify-content-center me-sm-3 me-md-4 mb-3 mb-sm-0 mx-auto mx-sm-0">
                                                <img
                                                    src="/assets/images/icon/counter-icon1.png"
                                                    alt="icon"
                                                    className="img-fluid"
                                                    style={{ maxWidth: '40px' }}
                                                />
                                            </div>
                                            <div className="content">
                                                <h3 className="mb-0">
                                                    <span className="count">499</span>+
                                                </h3>
                                                <p className="text-white mb-0">Satisfied Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Counter Item 2 */}
                                <div
                                    className="col-6 col-sm-6 col-md-4 col-lg-3 wow bounceInUp"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1000ms"
                                >
                                    <div className="counter__item h-100">
                                        <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                                            <div className="icon-bg rounded-circle bg-white d-flex align-items-center justify-content-center me-sm-3 me-md-4 mb-3 mb-sm-0 mx-auto mx-sm-0">
                                                <img
                                                    src="/assets/images/icon/counter-icon2.png"
                                                    alt="icon"
                                                    className="img-fluid"
                                                    style={{ maxWidth: '40px' }}
                                                />
                                            </div>
                                            <div className="content">
                                                <h3 className="mb-0">
                                                    <span className="count">25</span>+
                                                </h3>
                                                <p className="text-white mb-0">Finished Projects</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Counter Item 3 */}
                                <div
                                    className="col-6 col-sm-6 col-md-4 col-lg-3 wow bounceInUp"
                                    data-wow-delay="400ms"
                                    data-wow-duration="1000ms"
                                >
                                    <div className="counter__item h-100">
                                        <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                                            <div className="icon-bg rounded-circle bg-white d-flex align-items-center justify-content-center me-sm-3 me-md-4 mb-3 mb-sm-0 mx-auto mx-sm-0">
                                                <img
                                                    src="/assets/images/icon/counter-icon3.png"
                                                    alt="icon"
                                                    className="img-fluid"
                                                    style={{ maxWidth: '40px' }}
                                                />
                                            </div>
                                            <div className="content">
                                                <h3 className="mb-0">
                                                    <span className="count">50</span>+
                                                </h3>
                                                <p className="text-white mb-0">Skilled Experts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Counter Item 4 */}
                                <div
                                    className="col-6 col-sm-6 col-md-4 col-lg-3 wow bounceInUp"
                                    data-wow-delay="800ms"
                                    data-wow-duration="1000ms"
                                >
                                    <div className="counter__item h-100">
                                        <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                                            <div className="icon-bg rounded-circle bg-white d-flex align-items-center justify-content-center me-sm-3 me-md-4 mb-3 mb-sm-0 mx-auto mx-sm-0">
                                                <img
                                                    src="/assets/images/icon/counter-icon4.png"
                                                    alt="icon"
                                                    className="img-fluid"
                                                    style={{ maxWidth: '40px' }}
                                                />
                                            </div>
                                            <div className="content">
                                                <h3 className="mb-0">
                                                    <span className="count">30</span>+
                                                </h3>
                                                <p className="text-white mb-0">Media Posts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Styles */}
                    <style jsx>{`
    .counter-area {
      position: relative;
    }
    .gradient-bg {
      background: linear-gradient(135deg, #06cabc 0%, #2e77b0 100%);
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    .counter__item {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      border-radius: 10px;
      padding: 15px;
      transition: all 0.3s ease;
    }
    .counter__item:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    .icon-bg {
      width: 50px;
      height: 50px;
      padding: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    .counter__item h3 {
      color: white;
      font-size: 24px;
      font-weight: 700;
    }
    .counter__item p {
      font-size: 13px;
      opacity: 0.9;
    }
    .counter__shape {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
    }
    .counter__shape img {
      opacity: 0.2;
      max-width: 150px;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
      .counter__item {
        padding: 20px;
      }
      .icon-bg {
        width: 60px;
        height: 60px;
        padding: 10px;
      }
      .counter__item h3 {
        font-size: 28px;
      }
      .counter__item p {
        font-size: 14px;
      }
      .counter__shape img {
        max-width: 180px;
      }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
      .counter__shape img {
        max-width: 220px;
      }
      .counter__item h3 {
        font-size: 30px;
      }
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
      .counter__shape img {
        max-width: 280px;
      }
      .counter__item h3 {
        font-size: 32px;
      }
      .counter__item p {
        font-size: 15px;
      }
    }

    /* X-Large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
      .counter__shape img {
        max-width: 350px;
      }
      .icon-bg {
        width: 70px;
        height: 70px;
        padding: 15px;
      }
    }

    /* XX-Large devices (larger desktops, 1400px and up) */
    @media (min-width: 1400px) {
      .counter__shape img {
        max-width: 400px;
      }
    }
  `}</style>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Portfolio;