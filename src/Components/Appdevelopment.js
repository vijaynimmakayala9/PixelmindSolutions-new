import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Appdevelopment() {
  // Inline styles object - only color for highlight, no background
  const styles = {
    highlight: { color: '#06cabc', fontWeight: '600' },
    heading: { fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#1a1a2e' },
    subheading: { fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#1a1a2e' },
    paragraph: { fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '20px' },
    ctaButton: { display: 'inline-block', padding: '12px 25px', borderRadius: '30px', fontWeight: '600', textDecoration: 'none', marginRight: '15px', marginBottom: '15px', border: 'none', cursor: 'pointer' },
    primaryButton: { backgroundColor: '#06cabc', color: '#fff' },
    secondaryButton: { backgroundColor: 'transparent', color: '#06cabc', border: '2px solid #06cabc' },
    card: { backgroundColor: '#f8f9fa', borderRadius: '10px', padding: '25px', marginBottom: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' },
    listItem: { marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' },
    techBadge: { display: 'inline-block', padding: '8px 18px', margin: '0 10px 10px 0', backgroundColor: '#06cabc', borderRadius: '30px', fontSize: '0.9rem' },
    testimonialCard: { backgroundColor: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', marginBottom: '20px', height: '100%' },
    faqItem: { border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '15px', overflow: 'hidden' },
    faqQuestion: { padding: '15px 20px', backgroundColor: '#f8f9fa', fontWeight: '600', margin: 0 },
    faqAnswer: { padding: '15px 20px', borderTop: '1px solid #dee2e6' },
    processStep: { textAlign: 'center', marginBottom: '30px' },
    industryCard: { textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.05)', marginBottom: '20px', height: '100%' }
  };

  // Helper component for highlighted keywords - no background, only color
  const Highlight = ({ children }) => <span style={styles.highlight}>{children}</span>;

  return (
    <div>
      <Header />
      <main>

        {/* 1. Hero Section with CTA */}
        <section className="banner__inner-page py-5" style={{ backgroundImage: `url(${"/assets/images/banner/banner-inner-page.jpg"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="shape2 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
            <img src="/assets/images/banner/inner-banner-shape2.png" alt="shape" className="d-none d-md-block" />
          </div>
          <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <img src="/assets/images/banner/inner-banner-shape1.png" alt="shape" className="d-none d-md-block" />
          </div>
          <div className="shape3 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
            <img className="sway__animationX" src="/assets/images/banner/inner-banner-shape3.png" alt="shape" className="d-none d-md-block" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="wow fadeInUp display-4 fw-bold text-white" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Highlight>Best App Development Company in Kukatpally</Highlight>
                </h1>
                <p className="wow fadeInUp fs-5 text-white mb-4" data-wow-delay="100ms">Innovative, Scalable & High-Performance Mobile Apps for Your Business Growth</p>
                <div className="wow fadeInUp" data-wow-delay="200ms">
                  <Link to="/contact" className="btn btn-lg rounded-pill me-3 mb-2" style={{ backgroundColor: '#06cabc', color: '#fff', fontWeight: '600' }}>Get Free Consultation</Link>
                  <Link to="/quote" className="btn btn-lg rounded-pill mb-2" style={{ backgroundColor: 'transparent', color: '#06cabc', border: '2px solid #06cabc', fontWeight: '600' }}>Request a Quote</Link>
                </div>
                <div className="breadcrumb-list wow fadeInUp mt-4" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#fff' }}>
                  <Link to="/" className="text-white">Home</Link>
                  <span><i className="fa-regular fa-angles-right mx-2" /> App Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Introduction Section with SEO Keywords */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 style={styles.heading}>Professional <Highlight>Mobile App Development Services in Kukatpally</Highlight>, Hyderabad</h2>
                <p style={styles.paragraph}>Businesses today face the challenge of staying connected with their customers 24/7. A mobile app solves this by providing a direct, personalized channel for engagement, boosting brand loyalty and sales. At <Highlight>PixelMind Solutions</Highlight>, we bridge the gap between your business and its digital potential.</p>
                <p style={styles.paragraph}>We are a leading <Highlight>Best IT Company in Kukatpally</Highlight> and <Highlight>Best Software Company in Kukatpally</Highlight>, providing end-to-end mobile solutions for startups, SMEs, and enterprises. Our expert team creates high-performance Android, iOS, and cross-platform apps that are secure, scalable, and user-friendly. As the <Highlight>Best App Development Services in Kukatpally</Highlight>, we ensure your app stands out.</p>
                <p style={styles.paragraph}>Why choose PixelMind? We focus on understanding your unique business goals, then craft custom apps that solve real problems, enhance customer experience, and drive measurable growth. From ideation to post-launch support, we're your trusted technology partner in Telangana. Whether you need <Highlight>Application Development Company Near Me</Highlight> or a global solution, we deliver excellence.</p>
                <p style={styles.paragraph}>We also offer <Highlight>Website Development at Low Cost in Kukatpally</Highlight> and <Highlight>Application Development at Low Cost in Kukatpally</Highlight>, making us the most affordable yet quality-driven choice in the region.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Detailed Services Section */}
        <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Our Comprehensive <Highlight>App Development Services</Highlight></h2>
                <p style={styles.paragraph}>Tailored solutions to meet every business need</p>
              </div>
            </div>
            <div className="row g-4">
              {[
                { title: 'Android App Development', desc: 'We build feature-rich, Google Play Store-ready Android apps using Kotlin and Java. Our apps offer seamless performance, offline support, and integration with Google services, ensuring maximum reach among billions of Android users in India and globally.' },
                { title: 'iOS App Development', desc: 'Get high-quality, secure, and intuitive iOS apps for iPhone and iPad. We follow Apple\'s strict design guidelines to deliver smooth, fast, and engaging apps that your customers will love, helping you tap into the premium iOS user base.' },
                { title: 'Cross-Platform App Development', desc: 'Save time and cost with cross-platform apps using Flutter and React Native. We write code once and deploy on both Android and iOS, ensuring consistent UI/UX and faster time-to-market without compromising on performance.' },
                { title: 'E-commerce App Development', desc: 'Drive sales with powerful e-commerce apps featuring payment gateways, product catalogs, cart management, and order tracking. Perfect for retail businesses in Hyderabad looking to expand their digital footprint.' },
                { title: 'Business & Enterprise Apps', desc: 'Streamline operations with custom business apps for CRM, ERP, inventory management, and employee productivity. We build secure, scalable solutions that integrate with your existing systems.' },
                { title: 'On-Demand App Development', desc: 'Launch your own Uber-like, Swiggy-like, or task service app with our ready-to-customize solutions. Includes real-time tracking, push notifications, and admin dashboards.' }
              ].map((service, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-12">
                  <div style={styles.card} className="h-100">
                    <h3 style={styles.subheading}>{service.title}</h3>
                    <p style={styles.paragraph}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Businesses Need This Service */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img src="/assets/images/service/service-image5.jpg" alt="Business Growth" className="img-fluid rounded" />
              </div>
              <div className="col-lg-6 col-md-12">
                <h2 style={styles.heading}>Why Your Business Needs a Custom Mobile App</h2>
                <p style={styles.paragraph}>In today's mobile-first world, having just a website is no longer enough. As a <Highlight>Best Web Development Company in Kukatpally</Highlight>, we know the power of apps. A dedicated mobile app offers unparalleled advantages:</p>
                <ul className="list-unstyled">
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Enhanced Brand Credibility:</strong> A professional app positions you as a modern, trustworthy brand.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Direct Lead Generation:</strong> Push notifications and in-app offers drive repeat business.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Better SEO & Visibility:</strong> App store optimization (ASO) helps customers find you easily.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Increased Customer Trust & Loyalty:</strong> A smooth app experience builds long-term relationships.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Higher Conversions:</strong> Apps convert 3x more than mobile websites due to faster load times and personalized UX.</li>
                </ul>
                <p style={styles.paragraph}>We also provide <Highlight>Best Mobile App Maintenance Company in Kukatpally</Highlight> services to keep your app running smoothly post-launch.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Benefits Section */}
        <section className="py-5" style={{ backgroundColor: '#f0fdfb' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Key Benefits of Our App Development</h2>
              </div>
            </div>
            <div className="row">
              {['Fast Loading & High Performance', 'SEO & ASO Optimized', 'Fully Responsive UI/UX', 'Bank-Grade Security', 'Scalable Architecture', 'User-Friendly Design'].map((benefit, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="d-flex align-items-center gap-3"><i className="fa-solid fa-check-circle fs-3" style={{ color: '#06cabc' }} /><span style={{ fontWeight: '500' }}>{benefit}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Process Section */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Our App Development Process</h2>
                <p style={styles.paragraph}>A streamlined, transparent approach from idea to launch</p>
              </div>
            </div>
            <div className="row">
              {['Requirement Analysis', 'UI/UX Design', 'Development (Agile)', 'Testing & QA', 'Deployment', 'Maintenance & Support'].map((step, idx) => (
                <div key={idx} className="col-lg-2 col-md-4 col-6 mb-4">
                  <div style={styles.processStep}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#06cabc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem' }}>{idx + 1}</div>
                    <h5 className="fs-6">{step}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Technologies Section */}
        <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Technologies We Master</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                {['Flutter', 'Dart', 'Provider', 'Firebase'].map(tech => <span key={tech} className="badge fs-6 me-2 mb-2" style={styles.techBadge}>{tech}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Industry-Specific Solutions */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Industry-Specific App Solutions</h2>
                <p style={styles.paragraph}>Tailored apps for every sector in Hyderabad & Telangana</p>
              </div>
            </div>
            <div className="row g-4">
              {['Healthcare (Telemedicine, Appointments)', 'Real Estate (Property Listings, AR Tours)', 'E-commerce (Multi-vendor, Payments)', 'Restaurants (Ordering, Loyalty)', 'Educational (E-learning, Live Classes)', 'Startups (MVP, Scalable Apps)'].map((ind, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12">
                  <div style={styles.industryCard}>
                    <i className="fa-solid fa-building fs-1" style={{ color: '#06cabc', marginBottom: '15px' }} />
                    <h5>{ind}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Case Studies Section */}
        <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Success Stories</h2>
                <p style={styles.paragraph}>Real results from our Kukatpally clients</p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-md-12">
                <div style={styles.card} className="h-100">
                  <h4>🛒 E-commerce App for Local Retail Chain</h4>
                  <p><strong>Problem:</strong> Low online sales, poor mobile experience.</p>
                  <p><strong>Solution:</strong> Flutter-based app with one-click checkout & push notifications.</p>
                  <p><strong>Results:</strong> 150% increase in mobile orders, 40% repeat customer rate.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div style={styles.card} className="h-100">
                  <h4>📚 Educational App for Hyderabad Coaching Center</h4>
                  <p><strong>Problem:</strong> Limited student engagement offline.</p>
                  <p><strong>Solution:</strong> Cross-platform app with live classes, quizzes, and progress tracking.</p>
                  <p><strong>Results:</strong> 200% growth in user base, 4.8 star rating.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Testimonials Section */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>What Our Clients Say</h2>
              </div>
            </div>
            <div className="row g-4">
              {[{ name: 'Ramesh K.', business: 'Startup Founder, Kukatpally', text: 'PixelMind delivered our MVP in record time. The Flutter app is smooth and bug-free. Truly the <Highlight>Best App Development Company in Kukatpally</Highlight>!' },
              { name: 'Priya S.', business: 'E-commerce Owner, Hyderabad', text: 'Their e-commerce app transformed our business. Excellent support and post-launch maintenance. Highly recommend their <Highlight>Digital Marketing Services</Highlight> too.' },
              { name: 'Anil Reddy', business: 'Real Estate Agent, Telangana', text: 'Professional team, great UI/UX, and on-time delivery. Our clients love the new property search app. Best decision to hire them.' }
              ].map((t, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12">
                  <div style={styles.testimonialCard}>
                    <i className="fa-solid fa-quote-left fs-1 mb-3" style={{ color: '#06cabc', opacity: 0.3 }} />
                    <p style={styles.paragraph} dangerouslySetInnerHTML={{ __html: `"${t.text}"` }} />
                    <h5 className="mb-1">{t.name}</h5>
                    <small style={{ color: '#06cabc' }}>{t.business}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FAQ Section */}
        <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {[
                  { q: 'How much does app development cost in Kukatpally?', a: 'As a provider of <Highlight>Application Development at Low Cost in Kukatpally</Highlight>, our prices start from ₹50,000 for basic apps. Contact us for a free quote.' },
                  { q: 'Do you provide SEO-friendly and ASO-optimized apps?', a: 'Yes, we optimize app titles, descriptions, and keywords for App Store Optimization (ASO) to improve visibility.' },
                  { q: 'Do you provide app maintenance after launch?', a: 'Absolutely. We are known as the <Highlight>Best Mobile App Maintenance Company in Kukatpally</Highlight>, offering updates, security patches, and monitoring.' },
                  { q: 'Which technologies do you use for app development?', a: 'We use React Native, Flutter, Kotlin, Swift, Node.js, Firebase, and more based on your project needs.' },
                  { q: 'How long does it take to build an app?', a: 'A basic MVP takes 6-8 weeks, while complex apps may take 3-6 months. We follow agile methodology for quick delivery.' },
                  { q: 'Do you also provide digital marketing?', a: 'Yes, we are the <Highlight>Best Digital Marketing Agency in Kukatpally</Highlight> offering SEO, Google Ads, and social media marketing at affordable costs.' },
                  { q: 'Can you integrate payment gateways?', a: 'Yes, we integrate Razorpay, PayPal, Stripe, and other gateways for secure transactions.' },
                  { q: 'Is my app idea safe with you?', a: 'We sign NDAs and follow strict data privacy policies to protect your intellectual property.' },
                  { q: 'Do you offer website development too?', a: 'Yes, we are also a <Highlight>Best Web Development Company in Kukatpally</Highlight> offering <Highlight>Website Development at Low Cost in Kukatpally</Highlight>.' },
                  { q: 'How do I find an Application Development Company Near Me?', a: 'You\'ve found us! PixelMind Solutions is locally based in Kukatpally, Hyderabad, ready to serve you.' },
                ].map((faq, idx) => (
                  <div key={idx} style={styles.faqItem} className="mb-3">
                    <h4 style={styles.faqQuestion} className="mb-0">{faq.q}</h4>
                    <div style={styles.faqAnswer}><p style={styles.paragraph} dangerouslySetInnerHTML={{ __html: faq.a }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12 + 14. Strong CTA Section with Local SEO & Internal Links */}
        <section className="py-5" style={{ backgroundColor: '#06cabc', color: '#fff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 style={{ ...styles.heading, color: '#fff' }}>Looking for the <span style={{ backgroundColor: '#fff', color: '#06cabc', padding: '0 8px', borderRadius: '8px' }}>Best App Development Company in Kukatpally</span>?</h2>
                <p style={{ ...styles.paragraph, color: '#fff', maxWidth: '700px', margin: '0 auto 30px' }}>Partner with PixelMind Solutions for affordable, SEO-friendly, and high-performance mobile apps. We also provide <span style={{ backgroundColor: '#fff', color: '#06cabc', padding: '0 4px', borderRadius: '4px' }}>Best Digital Marketing Services in Kukatpally</span> and <span style={{ backgroundColor: '#fff', color: '#06cabc', padding: '0 4px', borderRadius: '4px' }}>Best IT Company in Kukatpally</span> solutions. Let's turn your idea into the next big thing in Hyderabad and Telangana.</p>
                <Link to="/contact" className="btn btn-light rounded-pill me-3 mb-2" style={{ backgroundColor: '#fff', color: '#06cabc', fontWeight: '600', padding: '12px 25px' }}>Contact Us Today</Link>
                <Link to="/portfolio" className="btn rounded-pill mb-2" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', fontWeight: '600', padding: '12px 25px' }}>View Portfolio</Link>
                <div className="mt-4">
                  <p>Related Services: <Link to="/webdevelopment" className="text-white text-decoration-underline">Website Development</Link> | <Link to="/digital-marketing" className="text-white text-decoration-underline">Digital Marketing</Link> | <Link to="/blog" className="text-white text-decoration-underline">Blog</Link></p>
                  <p className="small mt-3"><span style={{ backgroundColor: '#fff', color: '#06cabc', padding: '0 4px', borderRadius: '4px' }}>Digital Marketing Services at Low Cost in Kukatpally</span> | <span style={{ backgroundColor: '#fff', color: '#06cabc', padding: '0 4px', borderRadius: '4px' }}>Application Development Company Near Me</span> | Serving Kukatpally, Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default Appdevelopment;