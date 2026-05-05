import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import ScrollFadeIn from "../components/ScrollFadeIn";

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-[#f4f5fa] text-[#0a1230] placeholder:text-[#0a1230]/40 outline-none border border-transparent focus:border-[#3B82F6] focus:bg-white transition-colors text-sm";

const Field = ({ label, children, testId }) => (
  <label className="block" data-testid={`field-${testId}`}>
    <span className="block text-xs font-bold tracking-widest text-[#0a1230]/55 mb-2">{label.toUpperCase()}</span>
    {children}
  </label>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    if (!/.+@.+\..+/.test(form.email)) {
      toast.error("Please provide a valid email address.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thanks! Our team will reach out within 1 business day.");
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <section className="javix-bg pt-36 pb-20 relative" data-testid="contact-hero">
        <div className="javix-glow-orb" style={{ width: 360, height: 360, background: "#3B82F6", top: -100, left: -80, opacity: 0.55 }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <ScrollFadeIn>
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-bold tracking-widest">CONTACT</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-6 leading-[1.05]">
              Tell us about your <span className="javix-grad-text">next move.</span>
            </h1>
            <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              We respond to every inquiry within one business day — usually faster.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="bg-white py-20" data-testid="contact-section">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <ScrollFadeIn>
            <div className="javix-card overflow-hidden h-full flex flex-col">
              <div className="relative h-72">
                <img
                  src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=900&q=80"
                  alt="Support agent"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000860]/70 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <div className="text-xs tracking-widest font-bold opacity-80">FRIENDLY SUPPORT</div>
                  <div className="text-2xl font-extrabold">Talk to a real engineer</div>
                </div>
              </div>
              <div className="p-7 flex-1 grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@javix.io" },
                  { icon: Phone, label: "Phone", value: "+1 (415) 555-0119" },
                  { icon: MapPin, label: "Office", value: "221B Innovation Blvd, SF" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri · 9am–7pm PT" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4F29B8]/10 text-[#4F29B8] grid place-items-center flex-shrink-0">
                      <c.icon size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-widest text-[#0a1230]/55">{c.label.toUpperCase()}</div>
                      <div className="text-sm font-semibold text-[#0a1230] mt-0.5">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={120}>
            <form
              onSubmit={onSubmit}
              className="javix-card p-7 md:p-9 h-full flex flex-col"
              data-testid="contact-form"
            >
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0a1230]">Send us a message</h2>
              <p className="text-[#0a1230]/60 text-sm mt-1.5">Fill the form — we'll get back within 24 hours.</p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <Field label="Full Name" testId="contact-name">
                  <input value={form.name} onChange={update("name")} placeholder="Jane Cooper" className={inputCls} data-testid="contact-input-name" />
                </Field>
                <Field label="Email" testId="contact-email">
                  <input type="text" value={form.email} onChange={update("email")} placeholder="jane@company.com" className={inputCls} data-testid="contact-input-email" />
                </Field>
                <Field label="Company" testId="contact-company">
                  <input value={form.company} onChange={update("company")} placeholder="Company name" className={inputCls} data-testid="contact-input-company" />
                </Field>
                <Field label="Budget" testId="contact-budget">
                  <select value={form.budget} onChange={update("budget")} className={inputCls} data-testid="contact-input-budget">
                    <option value="">Select range</option>
                    <option>$25k – $50k</option>
                    <option>$50k – $100k</option>
                    <option>$100k – $250k</option>
                    <option>$250k +</option>
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="How can we help?" testId="contact-message">
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your project, goals, and timelines..."
                    className={`${inputCls} resize-none`}
                    data-testid="contact-input-message"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="javix-cta mt-6 w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-semibold text-base disabled:opacity-70"
                data-testid="contact-submit"
              >
                {submitting ? "Sending..." : "Get Started Now"} {!submitting && <ArrowRight size={18} />}
              </button>
            </form>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
};

export default Contact;