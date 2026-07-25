import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Cpu,
  MonitorSmartphone,
  Factory,
  ShieldCheck,
} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-indigo-900/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-6">
                Industrial Automation Solutions
              </span>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Let's Build Your
                <span className="text-cyan-400"> Automation </span>
                Project Together
              </h1>

              <p className="mt-6 text-slate-300 text-lg leading-8">
                Whether you need PLC Programming, HMI Development, SCADA
                Systems, Industrial IoT, Electrical Automation, or complete
                industrial solutions, we're here to help you succeed.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
                >
                  Contact Now
                </a>

                <a
                  href="#services"
                  className="px-7 py-3 rounded-xl border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-5">
                <ServiceCard
                  icon={<Cpu size={30} />}
                  title="PLC Programming"
                />
                <ServiceCard
                  icon={<MonitorSmartphone size={30} />}
                  title="HMI Design"
                />
                <ServiceCard
                  icon={<Factory size={30} />}
                  title="SCADA Systems"
                />
                <ServiceCard
                  icon={<ShieldCheck size={30} />}
                  title="Industrial Support"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Our <span className="text-cyan-400">Services</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            We provide professional industrial automation training and
            engineering services for manufacturing plants, industries, and
            students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "PLC Programming",
            "HMI Development",
            "SCADA Development",
            "Industrial Automation",
            "Control Panel Design",
            "VFD & Servo Drives",
            "Industrial Networking",
            "Factory Commissioning",
            "Automation Training",
          ].map((service) => (
            <div
              key={service}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-7 hover:border-cyan-500 hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {service}
              </h3>

              <p className="mt-4 text-slate-400">
                Professional implementation, troubleshooting, and real-world
                industrial solutions with practical learning support.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold mb-5">
                Contact <span className="text-cyan-400">Us</span>
              </h2>

              <p className="text-slate-400 mb-10">
                Have a project or want to learn Industrial Automation?
                Fill out the form or contact us directly.
              </p>

              <div className="space-y-6">

                <ContactItem
                  icon={<Phone size={22} />}
                  title="Phone"
                  value="+91 98765 43210"
                />

                <ContactItem
                  icon={<Mail size={22} />}
                  title="Email"
                  value="info@automation.com"
                />

                <ContactItem
                  icon={<MapPin size={22} />}
                  title="Location"
                  value="India"
                />

                <ContactItem
                  icon={<Clock size={22} />}
                  title="Working Hours"
                  value="Mon - Sat | 9:00 AM - 7:00 PM"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8">

              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
                />

                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500">
                  <option>Select Service</option>
                  <option>PLC Programming</option>
                  <option>HMI Development</option>
                  <option>SCADA Development</option>
                  <option>Automation Training</option>
                  <option>Industrial Project</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
                ></textarea>

                <button
                  className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

              </form>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-12 text-center">

            <h2 className="text-4xl font-bold">
              Ready to Start Your Automation Journey?
            </h2>

            <p className="mt-4 text-lg text-cyan-100">
              Learn PLC, HMI, SCADA, Industrial Networking, VFD, Servo Drives,
              and work on real industrial projects.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
              Get Started Today
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title }) => (
  <div className="rounded-2xl bg-slate-800 p-6 text-center hover:bg-slate-700 transition">
    <div className="flex justify-center text-cyan-400 mb-4">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
  </div>
);

const ContactItem = ({ icon, title, value }) => (
  <div className="flex items-start gap-4">
    <div className="bg-cyan-500/20 p-3 rounded-xl text-cyan-400">
      {icon}
    </div>

    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-slate-400">{value}</p>
    </div>
  </div>
);

export default ContactUs;