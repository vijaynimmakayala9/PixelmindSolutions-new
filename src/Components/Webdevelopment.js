import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Webdevelopment() {
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

  const Highlight = ({ children }) => <span style={styles.highlight}>{children}</span>;

  return (
    <div>
      <Header />
      <main>

        {/* 1. Hero Section with CTA */}
        <section className="banner__inner-page py-5" style={{ backgroundImage: `url(${"/assets/images/banner/banner-inner-page.jpg"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="wow fadeInUp display-4 fw-bold text-white" data-wow-delay="00ms">
                  <Highlight>Best Web Development Company in Kukatpally</Highlight>
                </h1>
                <p className="wow fadeInUp fs-5 text-white mb-4" data-wow-delay="100ms">Professional, Responsive & SEO-Friendly Website Development Services for Startups, Small Businesses & Enterprises</p>
                <div className="wow fadeInUp" data-wow-delay="200ms">
                  <Link to="/contact" className="btn btn-lg rounded-pill me-3 mb-2" style={{ backgroundColor: '#06cabc', color: '#fff', fontWeight: '600' }}>Get Free Consultation</Link>
                  <Link to="/quote" className="btn btn-lg rounded-pill mb-2" style={{ backgroundColor: 'transparent', color: '#06cabc', border: '2px solid #06cabc', fontWeight: '600' }}>Request a Quote</Link>
                </div>
                <div className="breadcrumb-list wow fadeInUp mt-4" style={{ color: '#fff' }}>
                  <Link to="/" className="text-white">Home</Link>
                  <span><i className="fa-regular fa-angles-right mx-2" /> Web Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Introduction Section */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 style={styles.heading}>Professional <Highlight>Website Development Services in Kukatpally</Highlight>, Hyderabad</h2>
                <p style={styles.paragraph}>PixelMind Solutions is a leading <Highlight>Best Software Company in Kukatpally</Highlight> and <Highlight>Best IT Company in Kukatpally</Highlight> providing professional, responsive, and SEO-friendly website development services for startups, small businesses, and enterprises. We create fast, secure, and modern websites that help businesses grow online and generate more leads.</p>
                <p style={styles.paragraph}>Our expert developers build custom websites using the latest technologies including WordPress, React.js, Next.js, PHP, and Shopify. Whether you need a business website, ecommerce store, portfolio website, or custom web application, we provide affordable and scalable solutions tailored to your business goals. As a trusted <Highlight>Best Web Development Company in Kukatpally</Highlight>, we ensure your online presence stands out.</p>
                <p style={styles.paragraph}>We also offer <Highlight>Website Development at Low Cost in Kukatpally</Highlight> without compromising on quality. From ideation to deployment and ongoing support, we're your complete digital partner in Hyderabad and Telangana.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Detailed Services Section */}
        <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Our Comprehensive <Highlight>Web Development Services</Highlight></h2>
              </div>
            </div>
            <div className="row g-4">
              {[
                { title: 'Custom Website Development', desc: 'We build custom websites designed specifically for your business requirements. Our custom development solutions provide better flexibility, performance, scalability, and user experience.' },
                { title: 'Ecommerce Website Development', desc: 'We create secure and user-friendly ecommerce websites with payment gateway integration, inventory management, and mobile optimization. Perfect for retail businesses in Hyderabad.' },
                { title: 'WordPress Website Development', desc: 'Professional WordPress websites with custom themes, SEO optimization, and easy content management. Ideal for blogs, business sites, and portfolios.' },
                { title: 'Web Application Development', desc: 'We develop scalable web applications using React.js, Next.js, Node.js, and modern technologies for complex business needs.' },
                { title: 'Website Redesign Services', desc: 'We redesign outdated websites with modern UI/UX, improved SEO structure, and faster loading speed to boost conversions.' },
                { title: 'Mobile App Development', desc: 'As a leading <Highlight>Best App Development Company in Kukatpally</Highlight>, we create Android, iOS, and cross-platform apps using Flutter and React Native.' },
                { title: 'Digital Marketing Services', desc: 'We provide <Highlight>Best Digital Marketing Services in Kukatpally</Highlight> including SEO, Google Ads, social media marketing, and content marketing to drive traffic and leads.' }
              ].map((service, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-12">
                  <div style={styles.card} className="h-100">
                    <h3 style={styles.subheading}>{service.title}</h3>
                    <p style={styles.paragraph} dangerouslySetInnerHTML={{ __html: service.desc }} />
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
                <img src="/assets/images/service/service-image6.jpg" alt="Business Growth" className="img-fluid rounded" />
              </div>
              <div className="col-lg-6 col-md-12">
                <h2 style={styles.heading}>Why Businesses Need Professional Website Development</h2>
                <p style={styles.paragraph}>A professional website is no longer optional—it's essential for business success. Here's why:</p>
                <ul className="list-unstyled">
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Brand Credibility:</strong> A professional website builds trust and establishes your brand authority.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Lead Generation:</strong> Websites generate leads 24/7, even when you're closed.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>SEO Benefits:</strong> Fast and SEO-friendly websites help businesses rank better on Google.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Customer Trust:</strong> A modern, secure website increases customer confidence.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Better Conversions:</strong> User-friendly designs convert visitors into paying customers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Benefits Section */}
        <section className="py-5" style={{ backgroundColor: '#f0fdfb' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Key Benefits of Our Web Development</h2>
              </div>
            </div>
            <div className="row">
              {['Fast Loading Speed', 'SEO Optimized', 'Mobile Responsive Design', 'Secure Development', 'Scalable Architecture', 'User-Friendly UI/UX', 'Conversion-Focused Layouts'].map((benefit, i) => (
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
                <h2 style={styles.heading}>Our Website Development Process</h2>
              </div>
            </div>
            <div className="row">
              {['Requirement Analysis', 'UI/UX Design', 'Development', 'Testing & QA', 'Deployment', 'Maintenance & Support'].map((step, idx) => (
                <div key={idx} className="col-lg-2 col-md-4 col-6 mb-4">
                  <div style={styles.processStep}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#06cabc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem' }}>{idx+1}</div>
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
                <h5 className="mb-3">Frontend:</h5>
                {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js'].map(tech => <span key={tech} className="badge fs-6 me-2 mb-2" style={styles.techBadge}>{tech}</span>)}
                <h5 className="mb-3 mt-3">Backend:</h5>
                {['Node.js', 'PHP', 'Laravel'].map(tech => <span key={tech} className="badge fs-6 me-2 mb-2" style={styles.techBadge}>{tech}</span>)}
                <h5 className="mb-3 mt-3">CMS & Ecommerce:</h5>
                {['WordPress', 'Shopify', 'Magento'].map(tech => <span key={tech} className="badge fs-6 me-2 mb-2" style={styles.techBadge}>{tech}</span>)}
                <h5 className="mb-3 mt-3">Database:</h5>
                {['MySQL', 'MongoDB', 'PostgreSQL'].map(tech => <span key={tech} className="badge fs-6 me-2 mb-2" style={styles.techBadge}>{tech}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Industry-Specific Solutions */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Industry-Specific Website Solutions</h2>
                <p style={styles.paragraph}>Tailored websites for every sector in Hyderabad & Telangana</p>
              </div>
            </div>
            <div className="row g-4">
              {['Healthcare Websites', 'Real Estate Websites', 'Ecommerce Websites', 'Restaurant Websites', 'Educational Websites', 'Startup Websites'].map((ind, i) => (
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
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-md-12">
                <div style={styles.card} className="h-100">
                  <h4>🛍️ Ecommerce Website for Local Retail Store</h4>
                  <p><strong>Problem:</strong> No online presence, losing customers to competitors.</p>
                  <p><strong>Solution:</strong> Custom WooCommerce site with payment integration and SEO optimization.</p>
                  <p><strong>Results:</strong> 200% increase in online sales, top 3 Google rankings for key products.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div style={styles.card} className="h-100">
                  <h4>🏥 Healthcare Portal for Hyderabad Hospital</h4>
                  <p><strong>Problem:</strong> Outdated website, poor patient engagement.</p>
                  <p><strong>Solution:</strong> Modern React.js website with appointment booking and telemedicine features.</p>
                  <p><strong>Results:</strong> 150% increase in online appointments, 40% reduction in no-shows.</p>
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
              {[
                { name: 'Suresh Reddy', business: 'Business Owner, Kukatpally', text: 'PixelMind built an amazing website for our business. Truly the <Highlight>Best Web Development Company in Kukatpally</Highlight>!' },
                { name: 'Meera S.', business: 'E-commerce Entrepreneur, Hyderabad', text: 'Their team delivered on time and within budget. Highly recommend their <Highlight>Digital Marketing Services</Highlight> too.' },
                { name: 'Rajesh K.', business: 'Startup Founder, Telangana', text: 'Professional, responsive, and affordable. Best decision we made for our online presence.' }
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
                  { q: 'How much does website development cost in Kukatpally?', a: 'As a provider of <Highlight>Website Development at Low Cost in Kukatpally</Highlight>, our prices start from ₹25,000 for basic business websites. Contact us for a free quote.' },
                  { q: 'Do you provide SEO-friendly websites?', a: 'Yes, all our websites are optimized for SEO, speed, and mobile responsiveness.' },
                  { q: 'Do you provide website maintenance?', a: 'Yes, we provide ongoing support, updates, backups, and maintenance services.' },
                  { q: 'Which technologies do you use for web development?', a: 'We use React.js, Next.js, Node.js, WordPress, Shopify, PHP, and Laravel based on your project needs.' },
                  { q: 'How long does it take to build a website?', a: 'A standard business website takes 2-4 weeks, while ecommerce sites take 4-8 weeks.' },
                  { q: 'Do you also provide digital marketing?', a: 'Yes, we are a <Highlight>Best Digital Marketing Agency in Kukatpally</Highlight> offering SEO, Google Ads, and social media marketing.' },
                  { q: 'Can you redesign my existing website?', a: 'Absolutely! We offer website redesign services to modernize your site and improve performance.' },
                  { q: 'Do you provide app development too?', a: 'Yes, we are also a <Highlight>Best App Development Company in Kukatpally</Highlight> building Android, iOS, and cross-platform apps.' },
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

        {/* 12. Strong CTA Section */}
        <section className="py-5" style={{ backgroundColor: '#06cabc', color: '#fff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 style={{ ...styles.heading, color: '#fff' }}>Looking for the <span style={{ backgroundColor: '#fff', color: '#06cabc', padding: '0 8px', borderRadius: '8px' }}>Best Web Development Company in Kukatpally</span>?</h2>
                <p style={{ ...styles.paragraph, color: '#fff', maxWidth: '700px', margin: '0 auto 30px' }}>Contact PixelMind Solutions today for affordable, SEO-friendly, and responsive website development services. Let's build your online success story in Hyderabad and Telangana.</p>
                <Link to="/contact" className="btn btn-light rounded-pill me-3 mb-2" style={{ backgroundColor: '#fff', color: '#06cabc', fontWeight: '600', padding: '12px 25px' }}>Contact Us Today</Link>
                <Link to="/portfolio" className="btn rounded-pill mb-2" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', fontWeight: '600', padding: '12px 25px' }}>View Portfolio</Link>
                <div className="mt-4">
                  <p>Related Services: <Link to="/appdevelopment" className="text-white text-decoration-underline">App Development</Link> | <Link to="/digitalmarketing" className="text-white text-decoration-underline">Digital Marketing</Link> | <Link to="/blog" className="text-white text-decoration-underline">Blog</Link></p>
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

export default Webdevelopment;