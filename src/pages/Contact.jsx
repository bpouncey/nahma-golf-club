import SeoBanner from '../components/SeoBanner'

export default function Contact() {
  return (
    <>
      <SeoBanner page="Contact" keywords="nahma golf club contact, rapid river michigan golf" />

      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-cream text-4xl sm:text-5xl mb-4">Contact Nahma Golf Club</h1>
          <p className="text-cream/70 font-sans text-lg">We're easy to reach. Come find us on LL Road.</p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* NAP block */}
          <div>
            <p className="text-sand font-sans text-sm tracking-widest uppercase mb-4">Find Us</p>
            <h2 className="font-serif text-charcoal text-2xl mb-6">Nahma Golf Club</h2>

            <div className="space-y-5 font-sans">
              <div className="flex gap-4">
                <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Address</p>
                  <address className="not-italic text-charcoal/70 text-sm leading-6">
                    8588 Ll Rd<br />
                    Rapid River, MI 49878
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Phone</p>
                  <a href="tel:+19066442648" className="text-forest hover:text-forest-light text-sm">(906) 644-2648</a>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Email</p>
                  <a href="mailto:nahmagolfclub@gmail.com" className="text-forest hover:text-forest-light text-sm">nahmagolfclub@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Hours</p>
                  <div className="text-charcoal/70 text-sm leading-6">
                    <p>Mon-Fri: 10:00 AM - 9:00 PM</p>
                    <p>Saturday: 9:00 AM - 9:00 PM</p>
                    <p>Sunday: 11:00 AM - 9:00 PM</p>
                    <p className="text-charcoal/50 text-xs mt-1 italic">Open May through September</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-gray-200 border border-gray-300 rounded-sm h-56 flex flex-col items-center justify-center gap-2">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="text-gray-400 font-sans text-xs text-center px-4">Google Map Embed</span>
              <span className="text-gray-400 font-sans text-xs text-center px-4">Place ID: ChIJ1WB78T5ITE0RqiPAKAn2RtE</span>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <p className="text-sand font-sans text-sm tracking-widest uppercase mb-4">Send a Message</p>
            <h2 className="font-serif text-charcoal text-2xl mb-6">Get in Touch</h2>
            <div className="bg-white border border-sand/30 rounded-sm shadow-sm p-6 space-y-5">
              {[
                { label: 'Name', type: 'text' },
                { label: 'Email', type: 'email' },
                { label: 'Phone', type: 'tel' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-sans font-semibold text-charcoal/60 uppercase tracking-wider mb-2">{field.label}</label>
                  <div className="border border-sand/50 rounded px-4 py-3 bg-cream/40 h-11 w-full" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-sans font-semibold text-charcoal/60 uppercase tracking-wider mb-2">Message</label>
                <div className="border border-sand/50 rounded px-4 py-3 bg-cream/40 h-28 w-full" />
              </div>
              <button
                type="button"
                className="w-full bg-forest text-cream font-sans font-semibold py-3 rounded hover:bg-forest-light transition-colors"
              >
                Send Message
              </button>
              <p className="text-charcoal/40 font-sans text-xs text-center">Form for layout reference only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Directions note */}
      <section className="bg-sand/20 border-t border-sand/40 py-10 text-center">
        <div className="max-w-xl mx-auto px-4">
          <svg className="w-5 h-5 text-forest/60 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className="text-charcoal/70 font-sans text-sm">
            We're on LL Road in Rapid River, approximately 20 miles from Escanaba. Look for the course sign off US-2.
          </p>
        </div>
      </section>
    </>
  )
}
