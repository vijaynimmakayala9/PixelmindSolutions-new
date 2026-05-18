import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Uiuxdesign() {
  const styles = {
    highlight: { color: '#06cabc', fontWeight: '600' },
    heading: { fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#1a1a2e' },
    subheading: { fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#1a1a2e' },
    paragraph: { fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '20px' },
    card: { backgroundColor: '#f8f9fa', borderRadius: '10px', padding: '25px', marginBottom: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' },
    listItem: { marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' },
    testimonialCard: { backgroundColor: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', marginBottom: '20px', height: '100%' },
    faqItem: { border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '15px', overflow: 'hidden' },
    faqQuestion: { padding: '15px 20px', backgroundColor: '#f8f9fa', fontWeight: '600', margin: 0 },
    faqAnswer: { padding: '15px 20px', borderTop: '1px solid #dee2e6' },
    processStep: { textAlign: 'center', marginBottom: '30px' }
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
                <h1 className="wow fadeInUp display-4 fw-bold text-white"><Highlight>Professional UI/UX Design Services in Kukatpally</Highlight></h1>
                <p className="wow fadeInUp fs-5 text-white mb-4">User-Centered Design That Drives Engagement & Conversions</p>
                <div className="wow fadeInUp">
                  <Link to="/contact" className="btn btn-lg rounded-pill me-3 mb-2" style={{ backgroundColor: '#06cabc', color: '#fff', fontWeight: '600' }}>Get Free Consultation</Link>
                  <Link to="/quote" className="btn btn-lg rounded-pill mb-2" style={{ backgroundColor: 'transparent', color: '#06cabc', border: '2px solid #06cabc', fontWeight: '600' }}>Request a Quote</Link>
                </div>
                <div className="breadcrumb-list wow fadeInUp mt-4" style={{ color: '#fff' }}>
                  <Link to="/" className="text-white">Home</Link>
                  <span><i className="fa-regular fa-angles-right mx-2" /> UI/UX Design</span>
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
                <h2 style={styles.heading}><Highlight>UI/UX Design Company in Kukatpally</Highlight> - Creating Digital Experiences That Matter</h2>
                <p style={styles.paragraph}>At PixelMind Solutions, we believe that a well-designed user interface (UI) and seamless user experience (UX) are essential to the success of any digital product. Our UI/UX design services are focused on creating visually appealing, user-centric designs that not only look great but also ensure ease of use. As a trusted <Highlight>Best IT Company in Kukatpally</Highlight>, we combine creativity with functionality.</p>
                <p style={styles.paragraph}>Our expert design team works closely with you to understand your brand identity, target audience, and business goals to craft designs that engage users and drive conversion. We focus on simplicity, functionality, and accessibility, making sure your app or website provides a smooth, intuitive experience for all users.</p>
                <p style={styles.paragraph}>We also provide UI/UX design as part of our <Highlight>Best Web Development Company in Kukatpally</Highlight> and <Highlight>Best App Development Company in Kukatpally</Highlight> services, ensuring end-to-end digital product excellence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Services */}
        <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Our <Highlight>UI/UX Design Services</Highlight></h2>
              </div>
            </div>
            <div className="row g-4">
              {[
                { title: 'User Research & Analysis', desc: 'We conduct in-depth user research, competitor analysis, and persona development to understand your target audience and their needs.' },
                { title: 'Wireframing & Prototyping', desc: 'We create low-fidelity and high-fidelity wireframes and interactive prototypes to visualize the user flow and test concepts before development.' },
                { title: 'UI Visual Design', desc: 'Our designers craft beautiful, modern, and brand-consistent interfaces with attention to typography, color theory, and visual hierarchy.' },
                { title: 'UX Strategy & Information Architecture', desc: 'We structure content logically and design intuitive navigation paths that make it easy for users to find what they need.' },
                { title: 'Usability Testing', desc: 'We test designs with real users to identify pain points and optimize the experience before launch.' },
                { title: 'Design Systems & Guidelines', desc: 'We create comprehensive design systems and style guides to ensure consistency across all your digital products.' }
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

        {/* Why UI/UX Matters */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img src="/assets/images/service/service-image5.jpg" alt="UI UX Design" className="img-fluid rounded" />
              </div>
              <div className="col-lg-6 col-md-12">
                <h2 style={styles.heading}>Why Your Business Needs Professional UI/UX Design</h2>
                <ul className="list-unstyled">
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Higher User Engagement:</strong> Intuitive designs keep users on your platform longer.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Increased Conversion Rates:</strong> Well-designed interfaces guide users to take action.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Reduced Development Costs:</strong> Catching issues early in design saves money on rework.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Brand Consistency:</strong> Unified design across all touchpoints builds trust.</li>
                  <li style={styles.listItem}><i className="fa-solid fa-check" style={{ color: '#06cabc' }} /> <strong>Competitive Advantage:</strong> Superior UX differentiates you from competitors.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-5" style={{ backgroundColor: '#f0fdfb' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Benefits of Our UI/UX Design</h2>
              </div>
            </div>
            <div className="row">
              {['User-Centered Design', 'Enhanced User Engagement', 'Brand Consistency', 'Increased Conversion Rates', 'Faster Development Process', 'Improved Customer Satisfaction', 'Accessibility Compliance', 'Ongoing Support & Optimization'].map((benefit, i) => (
                <div key={i} className="col-lg-3 col-md-6 col-12 mb-3">
                  <div className="d-flex align-items-center gap-3"><i className="fa-solid fa-check-circle fs-3" style={{ color: '#06cabc' }} /><span>{benefit}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 style={styles.heading}>Our UI/UX Design Process</h2>
              </div>
            </div>
            <div className="row">
              {['Discover & Research', 'Define Strategy', 'Wireframing', 'UI Design', 'Prototyping', 'Testing & Handoff'].map((step, idx) => (
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
                { name: 'Kiran M.', business: 'Product Manager, Hyderabad', text: 'The UI/UX team at PixelMind transformed our app. Users love the new interface!' },
                { name: 'Divya Reddy', business: 'Startup Founder, Kukatpally', text: 'Their design process was thorough and collaborative. Highly recommend their services.' },
                { name: 'Suresh Babu', business: 'E-commerce Owner, Telangana', text: 'Our conversion rate doubled after the redesign. PixelMind is the <Highlight>Best IT Company in Kukatpally</Highlight> for design.' }
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

        {/* FAQ */}
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
                  { q: 'How much does UI/UX design cost in Kukatpally?', a: 'We offer <Highlight>Website Development at Low Cost in Kukatpally</Highlight> and UI/UX design packages starting from ₹30,000. Contact us for a custom quote.' },
                  { q: 'Do you provide design for both web and mobile?', a: 'Yes, we design responsive websites, mobile apps (iOS/Android), and web applications.' },
                  { q: 'How long does the design process take?', a: 'A typical website UI/UX design takes 2-4 weeks. Complex app designs may take 4-6 weeks.' },
                  { q: 'Do you also develop the designs?', a: 'Yes, as a <Highlight>Best Web Development Company in Kukatpally</Highlight> and <Highlight>Best App Development Company in Kukatpally</Highlight>, we implement our designs.' },
                  { q: 'Can you redesign my existing website/app?', a: 'Absolutely! We specialize in redesigning outdated interfaces for better user experience.' },
                  { q: 'Do you provide design systems?', a: 'Yes, we create comprehensive design systems for enterprise clients.' },
                  { q: 'Is user testing included?', a: 'Yes, we conduct usability testing to validate our designs before handoff.' },
                  { q: 'What tools do you use?', a: 'We use Figma, Adobe XD, Sketch, and InVision for design and prototyping.' }
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
                <h2 style={{ ...styles.heading, color: '#fff' }}>Ready to Transform Your Digital Experience?</h2>
                <p style={{ ...styles.paragraph, color: '#fff', maxWidth: '700px', margin: '0 auto 30px' }}>Contact PixelMind Solutions today for professional UI/UX design services in Kukatpally, Hyderabad. Let's create designs that users love.</p>
                <Link to="/contact" className="btn btn-light rounded-pill me-3 mb-2" style={{ backgroundColor: '#fff', color: '#06cabc', fontWeight: '600' }}>Contact Us Today</Link>
                <Link to="/portfolio" className="btn rounded-pill mb-2" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff' }}>View Portfolio</Link>
                <div className="mt-4">
                  <p>Related Services: <Link to="/webdevelopment" className="text-white text-decoration-underline">Web Development</Link> | <Link to="/appdevelopment" className="text-white text-decoration-underline">App Development</Link> | <Link to="/digitalmarketing" className="text-white text-decoration-underline">Digital Marketing</Link></p>
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

export default Uiuxdesign;