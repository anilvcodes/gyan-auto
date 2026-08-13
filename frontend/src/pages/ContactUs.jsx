import React, { useState } from "react";
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
  CheckCircle,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Backend API
  const API_URL = "http://localhost:5000/api/enquiry";

  // Handle Input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Enquiry submit failed"
        );
      }

      setSuccess("Enquiry submitted successfully!");

      // Reset Form
      setFormData({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });

    } catch (err) {
      console.error(err);

      setError(
        err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-indigo-900/30" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-6">
                Contact Us
              </span>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">

                Let's Build Your

                <span className="text-cyan-400">
                  {" "}Digital & Automation
                </span>

                {" "}Project
              </h1>

              <p className="mt-6 text-slate-300 text-lg leading-8">
                Need a custom website, WordPress website,
                WooCommerce store, REST API, admin dashboard
                or Industrial Automation solution?
                Contact us today.
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


            {/* RIGHT */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

              <h3 className="text-2xl font-bold mb-6">
                Our Expertise
              </h3>

              <div className="grid grid-cols-2 gap-5">

                <ServiceCard
                  icon={<MonitorSmartphone size={30} />}
                  title="Web Development"
                />

                <ServiceCard
                  icon={<Cpu size={30} />}
                  title="PLC Programming"
                />

                <ServiceCard
                  icon={<Factory size={30} />}
                  title="SCADA Systems"
                />

                <ServiceCard
                  icon={<ShieldCheck size={30} />}
                  title="Technical Support"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold">
            OUR SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">

            What Can We

            <span className="text-cyan-400">
              {" "}Build For You?
            </span>

          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            From modern websites and web applications to
            industrial automation solutions, we provide
            professional development and implementation.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "Website Development",
            "Custom Website",
            "WordPress Development",
            "WooCommerce Development",
            "REST API Development",
            "Admin Dashboard",
            "Web Application",
            "PLC Programming",
            "HMI Development",
            "SCADA Development",
            "Industrial Automation",
            "Industrial Networking",
          ].map((service) => (

            <div
              key={service}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-7 hover:border-cyan-500 hover:-translate-y-2 transition-all"
            >

              <CheckCircle
                className="text-cyan-400"
                size={28}
              />

              <h3 className="text-xl font-semibold mt-5">
                {service}
              </h3>

              <p className="mt-3 text-slate-400">
                Professional implementation and technical
                support according to your requirements.
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="bg-slate-900"
      >

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* CONTACT INFO */}

            <div>

              <h2 className="text-4xl font-bold mb-5">

                Contact

                <span className="text-cyan-400">
                  {" "}Us
                </span>

              </h2>

              <p className="text-slate-400 mb-10">
                Tell us about your project. Fill out the
                form and our team will contact you.
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


            {/* FORM */}

            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* SUCCESS */}

                {success && (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl p-4">
                    {success}
                  </div>
                )}


                {/* ERROR */}

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4">
                    {error}
                  </div>
                )}


                {/* NAME + EMAIL */}

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
                  />

                </div>


                {/* PHONE */}

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
                />


                {/* COURSE */}

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
                >

                  <option value="">
                    Select Course / Service
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Custom Website">
                    Custom Website
                  </option>

                  <option value="WordPress Development">
                    WordPress Development
                  </option>

                  <option value="WooCommerce Development">
                    WooCommerce Development
                  </option>

                  <option value="REST API Development">
                    REST API Development
                  </option>

                  <option value="Admin Dashboard">
                    Admin Dashboard
                  </option>

                  <option value="Web Application">
                    Web Application
                  </option>

                  <option value="PLC Programming">
                    PLC Programming
                  </option>

                  <option value="HMI Development">
                    HMI Development
                  </option>

                  <option value="SCADA Development">
                    SCADA Development
                  </option>

                  <option value="Industrial Automation">
                    Industrial Automation
                  </option>

                  <option value="Industrial Networking">
                    Industrial Networking
                  </option>

                  <option value="Automation Training">
                    Automation Training
                  </option>

                </select>


                {/* MESSAGE */}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-500"
                />


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-800 transition py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                >

                  <Send size={20} />

                  {loading
                    ? "Submitting..."
                    : "Send Enquiry"
                  }

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-12 text-center">

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready To Start Your Project?
            </h2>

            <p className="mt-4 text-lg text-cyan-100">
              Website, WordPress, WooCommerce, REST API,
              Dashboard or Industrial Automation.
            </p>

            <a
              href="#contact"
              className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Get Started Today
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};


/* ================= SERVICE CARD ================= */

const ServiceCard = ({ icon, title }) => (
  <div className="rounded-2xl bg-slate-800 p-6 text-center hover:bg-slate-700 transition">

    <div className="flex justify-center text-cyan-400 mb-4">
      {icon}
    </div>

    <h3 className="font-semibold">
      {title}
    </h3>

  </div>
);


/* ================= CONTACT ITEM ================= */

const ContactItem = ({ icon, title, value }) => (
  <div className="flex items-start gap-4">

    <div className="bg-cyan-500/20 p-3 rounded-xl text-cyan-400">
      {icon}
    </div>

    <div>

      <h4 className="font-semibold">
        {title}
      </h4>

      <p className="text-slate-400">
        {value}
      </p>

    </div>

  </div>
);


export default ContactUs;