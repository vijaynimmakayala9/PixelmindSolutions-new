import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Digitalmarketing() {
  const styles = {
    highlight: { color: '#06cabc', fontWeight: '600' },
    heading: { fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#1a1a2e' },
    subheading: { fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#1a1a2e' },
    paragraph: { fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '20px' },
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

        {/* Hero Section */}
        <section className="banner__inner-page py-5" style={{ backgroundImage: `url(${"/assets/images/banner/banner-inner-page.jpg"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="wow fadeInUp display-4 fw-bold text-white"><Highlight>Best Digital Marketing Agency in Kukatpally</Highlight></h1>
                <p className="wow fadeInUp fs-5 text-white mb-4">Result-Driven Digital Marketing Services to Grow Your Business Online</p>
                <div className="wow fadeInUp">
                  <Link to="/contact" className="btn btn-lg rounded-pill me-3 mb-2" style={{ backgroundColor: '#06cabc', color: '#fff', fontWeight: '600' }}>Get Free Consultation</Link>
                  <Link to="/quote" className="btn btn-lg rounded-pill mb-2" style={{ backgroundColor: 'transparent', color: '#06cabc', border: '2px solid #06cabc', fontWeight: '600' }}>Request a Quote</Link>
                </div>
                <div className="breadcrumb-list wow fadeInUp mt-4" style={{ color: '#fff' }}>
                  <Link to="/" className="text-white">Home</Link>
                  <span><i className="fa-regular fa-angles-right mx-2" /> Digital Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 style={styles.heading}>Professional <Highlight>Digital Marketing Services in Kukatpally</Highlight>, Hyderabad</h2>
                <p style={styles.paragraph}>PixelMind Solutions is a leading <Highlight>Best Digital Marketing Agency in Kukatpally</Highlight> offering affordable, result-driven digital marketing services including SEO, Google Ads, Social Media Marketing, Content Marketing, Local SEO, and Lead Generation. We help businesses improve Google rankings, increase website traffic, build brand awareness, generate online leads, and boost customer engagement.</p>
                <p style={styles.paragraph}>As a trusted <Highlight>Best IT Company in Kukatpally</Highlight>, we combine technical expertise with creative marketing strategies to deliver measurable results. Our data-driven approach ensures maximum ROI for your marketing investment. We also offer <Highlight>Digital Marketing Services at Low Cost in Kukatpally</Highlight> without compromising on quality.</p>
                <p style={styles.paragraph}>Whether you're a startup, small business, or enterprise in Hyderabad and Telangana, our customized digital marketing solutions help you reach your target audience and achieve your business goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Our Comprehensive <Highlight>Digital Marketing Services</Highlight></h2>
              </div>
            </div>
            <div className="row g-4">
              {[
                { title: 'SEO (Search Engine Optimization)', desc: 'We help your website rank higher on Google, Bing, and other search engines. Our SEO services include on-page optimization, off-page link building, technical SEO, local SEO, and content optimization to drive organic traffic.' },
                { title: 'Google Ads (PPC) Management', desc: 'Get instant visibility with targeted Google Ads campaigns. We manage PPC campaigns across search, display, and YouTube to generate qualified leads and maximize your ad spend ROI.' },
                { title: 'Social Media Marketing', desc: 'Build your brand presence on Facebook, Instagram, LinkedIn, and Twitter. We create engaging content, run targeted ads, and grow your social media following.' },
                { title: 'Content Marketing', desc: 'Quality content drives engagement and SEO. We create blog posts, articles, infographics, videos, and eBooks that educate your audience and convert them into customers.' },
                { title: 'Local SEO', desc: 'Dominate local search results in Kukatpally, Hyderabad, and Telangana. We optimize your Google My Business profile, local citations, and reviews to attract nearby customers.' },
                { title: 'Email Marketing', desc: 'Nurture leads and retain customers with personalized email campaigns. We design and execute email sequences that drive repeat business and loyalty.' }
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

        {/* Why Businesses Need Digital Marketing */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img src="/assets/images/service/service-image2.jpg" alt="Digital Marketing Growth" className="img-fluid rounded" />
              </div>
              <div className="col-lg-6 col-md-12">
                <h2 style={styles.heading}>Why Your Business Needs Digital Marketing</h2>
                <ul className="list-unstyled">
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Brand Awareness:</strong> Reach millions of potential customers online.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Lead Generation:</strong> Attract qualified leads actively searching for your products/services.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Better ROI:</strong> Digital marketing delivers higher ROI than traditional advertising.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Customer Engagement:</strong> Build relationships and loyalty through social media and email.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Measurable Results:</strong> Track every campaign's performance in real-time.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-5" style={{ backgroundColor: '#f0fdfb' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Benefits of Our Digital Marketing Services</h2>
              </div>
            </div>
            <div className="row">
              {['Increased Online Visibility', 'Targeted Traffic', 'Higher Conversion Rates', 'Cost-Effective Marketing', 'Brand Authority Building', '24/7 Lead Generation', 'Detailed Analytics & Reporting', 'Competitive Advantage'].map((benefit, i) => (
                <div key={i} className="col-lg-3 col-md-6 col-12 mb-3">
                  <div className="d-flex align-items-center gap-3"><i className="fa-solid fa-check-circle fs-3" style={{ color: '#06cabc' }} /><span>{benefit}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Our Digital Marketing Process</h2>
              </div>
            </div>
            <div className="row">
              {['Discovery & Research', 'Strategy Development', 'Campaign Setup', 'Execution', 'Monitoring & Optimization', 'Reporting & Analysis'].map((step, idx) => (
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

        {/* Industry-Specific Solutions */}
        <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Industry-Specific Digital Marketing</h2>
              </div>
            </div>
            <div className="row g-4">
              {['Healthcare Marketing', 'Real Estate Marketing', 'Ecommerce Marketing', 'Restaurant Marketing', 'Educational Marketing', 'Startup Marketing'].map((ind, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12">
                  <div style={styles.industryCard}>
                    <i className="fa-solid fa-chart-line fs-1" style={{ color: '#06cabc', marginBottom: '15px' }} />
                    <h5>{ind}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Success Stories</h2>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-md-12">
                <div style={styles.card} className="h-100">
                  <h4>📈 Local Restaurant - SEO Success</h4>
                  <p><strong>Problem:</strong> Low online visibility, minimal footfall.</p>
                  <p><strong>Solution:</strong> Local SEO + Google Maps optimization + social media marketing.</p>
                  <p><strong>Results:</strong> #1 ranking for "best restaurant in Kukatpally", 300% increase in online orders.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div style={styles.card} className="h-100">
                  <h4>🏢 Real Estate Agency - Lead Generation</h4>
                  <p><strong>Problem:</strong> Low quality leads, high ad spend.</p>
                  <p><strong>Solution:</strong> Targeted Google Ads + landing page optimization + remarketing.</p>
                  <p><strong>Results:</strong> 65% lower cost per lead, 200+ qualified leads per month.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>What Our Clients Say</h2>
              </div>
            </div>
            <div className="row g-4">
              {[
                { name: 'Vikram Reddy', business: 'Restaurant Owner, Kukatpally', text: 'PixelMind transformed our online presence. Best <Highlight>Digital Marketing Agency in Kukatpally</Highlight> by far!' },
                { name: 'Neha S.', business: 'E-commerce Store, Hyderabad', text: 'Our sales have doubled since we started working with them. Highly recommend their SEO services.' },
                { name: 'Prakash Raj', business: 'Real Estate Agent, Telangana', text: 'Professional team, transparent reporting, and amazing results. Worth every rupee!' }
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

        {/* FAQ Section */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {[
                  { q: 'How much do digital marketing services cost in Kukatpally?', a: 'We offer <Highlight>Digital Marketing Services at Low Cost in Kukatpally</Highlight> starting from ₹15,000/month. Contact us for a customized quote.' },
                  { q: 'Do you provide SEO services for local businesses?', a: 'Yes, we specialize in Local SEO for businesses in Kukatpally, Hyderabad, and Telangana.' },
                  { q: 'How long does it take to see SEO results?', a: 'Typically 3-6 months for significant ranking improvements, but we deliver incremental wins along the way.' },
                  { q: 'Do you also provide website development?', a: 'Yes, we are a <Highlight>Best Web Development Company in Kukatpally</Highlight> building SEO-friendly websites.' },
                  { q: 'Do you provide app development too?', a: 'Yes, we are also a <Highlight>Best App Development Company in Kukatpally</Highlight>.' },
                  { q: 'Which platforms do you advertise on?', a: 'We run campaigns on Google, Facebook, Instagram, LinkedIn, and YouTube based on your target audience.' },
                  { q: 'Do you provide monthly reports?', a: 'Absolutely! We provide detailed monthly reports with KPIs, ROI analysis, and actionable insights.' },
                  { q: 'Can you help with social media management?', a: 'Yes, we offer complete social media management including content creation, posting, and engagement.' }
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

        {/* CTA Section */}
        <section className="py-5" style={{ backgroundColor: '#06cabc', color: '#fff' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 style={{ ...styles.heading, color: '#fff' }}>Looking for the <span style={{ backgroundColor: '#fff', color: '#06cabc', padding: '0 8px', borderRadius: '8px' }}>Best Digital Marketing Agency in Kukatpally</span>?</h2>
                <p style={{ ...styles.paragraph, color: '#fff', maxWidth: '700px', margin: '0 auto 30px' }}>Contact PixelMind Solutions today for affordable, result-driven digital marketing services. Let's grow your business online in Hyderabad and Telangana.</p>
                <Link to="/contact" className="btn btn-light rounded-pill me-3 mb-2" style={{ backgroundColor: '#fff', color: '#06cabc', fontWeight: '600' }}>Contact Us Today</Link>
                <Link to="/portfolio" className="btn rounded-pill mb-2" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff' }}>View Portfolio</Link>
                <div className="mt-4">
                  <p>Related Services: <Link to="/webdevelopment" className="text-white text-decoration-underline">Web Development</Link> | <Link to="/appdevelopment" className="text-white text-decoration-underline">App Development</Link></p>
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

export default Digitalmarketing;