import PageHero from '@/components/PageHero';
import { safariPackages } from '@/data/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Great Roar Safaris to request a custom Tanzania safari itinerary.'
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Plan your Tanzania safari"
        title="Tell us the journey you are dreaming about."
        image="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=80"
      >
        Share your dates, group size, comfort style, and must-see places. We will prepare a personal proposal for your Great Roar.
      </PageHero>
      <section className="section enquiry">
        <div>
          <p className="eyebrow">Get a custom itinerary</p>
          <h2>We usually reply within 24 hours.</h2>
          <p>
            Prefer direct email? Write to <a href="mailto:hello@greatroarsafaris.com">hello@greatroarsafaris.com</a>. You can also call or WhatsApp our Arusha office at +255 700 000 000.
          </p>
        </div>
        <form className="enquiryForm" action="mailto:hello@greatroarsafaris.com" method="post" encType="text/plain">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Travel interest
            <select name="interest" required defaultValue="">
              <option value="" disabled>Choose one</option>
              {safariPackages.map((safari) => (
                <option key={safari.title}>{safari.title}</option>
              ))}
              <option>Kilimanjaro, culture, or custom trip</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Dates, group size, budget, and must-see places" />
          </label>
          <button className="button primary" type="submit">Request itinerary</button>
        </form>
      </section>
    </main>
  );
}
