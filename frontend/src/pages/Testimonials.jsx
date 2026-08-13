import React from "react";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle,
  Quote,
  Star,
  Users,
} from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Automation Engineer",
      company: "Industrial Solutions",
      initials: "RS",
      rating: 5,
      text: "The PLC and SCADA training was very practical. The real project-based approach helped me understand industrial automation much better.",
    },
    {
      name: "Priya Verma",
      role: "Web Development Client",
      company: "Business Owner",
      initials: "PV",
      rating: 5,
      text: "We needed a professional business website and the final result was excellent. The website is responsive, modern and easy to manage.",
    },
    {
      name: "Amit Kumar",
      role: "Electrical Engineer",
      company: "Manufacturing Industry",
      initials: "AK",
      rating: 5,
      text: "The automation support was very helpful. Their troubleshooting approach and technical knowledge made our project implementation much easier.",
    },
    {
      name: "Neha Singh",
      role: "E-Commerce Business Owner",
      company: "Online Store",
      initials: "NS",
      rating: 5,
      text: "Our WooCommerce store looks professional and works smoothly on mobile as well. The development and support experience was great.",
    },
    {
      name: "Vikas Yadav",
      role: "Automation Engineer",
      company: "Manufacturing",
      initials: "VY",
      rating: 5,
      text: "I learned PLC programming, HMI and industrial networking through practical exercises. The training was easy to understand and industry focused.",
    },
    {
      name: "Anjali Gupta",
      role: "Startup Founder",
      company: "Technology Startup",
      initials: "AG",
      rating: 5,
      text: "They understood our requirements properly and developed a custom web solution that matched our business workflow perfectly.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-950 to-blue-900/30" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <div className="max-w-4xl">

            <p className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              Client Reviews & Success Stories
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              What Our
              <span className="text-cyan-400">
                {" "}Clients Say
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-gray-400 leading-8 max-w-3xl">
              Discover what students, engineers, businesses and organizations
              say about their experience working with us.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition">
                Work With Us
                <ArrowRight size={20} />
              </button>

              <button className="border border-slate-700 hover:border-cyan-400 px-8 py-4 rounded-xl font-semibold transition">
                View Our Services
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">

          <Stat
            icon={<Users />}
            number="500+"
            text="Happy Clients & Students"
          />

          <Stat
            icon={<Star />}
            number="4.9/5"
            text="Average Rating"
          />

          <Stat
            icon={<BriefcaseBusiness />}
            number="100+"
            text="Projects Completed"
          />

          <Stat
            icon={<Award />}
            number="95%"
            text="Client Satisfaction"
          />

        </div>

      </section>


      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-cyan-400 font-semibold">
            TESTIMONIALS
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Real People.
            <span className="text-cyan-400">
              {" "}Real Experiences.
            </span>
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Feedback from people who have worked with us for training,
            website development, e-commerce and automation projects.
          </p>

        </div>


        {/* REVIEW GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {testimonials.map((testimonial) => (

            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />

          ))}

        </div>

      </section>


      {/* FEATURED REVIEW */}
      <section className="bg-slate-900 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-14 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

            <Quote
              size={65}
              className="relative text-cyan-400/30"
            />

            <p className="relative mt-6 text-2xl md:text-3xl font-semibold leading-10 max-w-4xl">
              "The best part was the practical approach. Instead of only
              explaining concepts, the team helped us understand how these
              technologies are actually used in real projects."
            </p>

            <div className="relative flex items-center gap-4 mt-8">

              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold">
                RK
              </div>

              <div>

                <h3 className="font-bold">
                  Rahul Kumar
                </h3>

                <p className="text-gray-500">
                  Industrial Automation Professional
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* WHY CLIENTS CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <p className="text-cyan-400 font-semibold">
            WHY CLIENTS CHOOSE US
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Built Around
            <span className="text-cyan-400">
              {" "}Your Success
            </span>
          </h2>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          <Feature
            icon={<CheckCircle />}
            title="Quality Work"
            text="We focus on delivering reliable and professional solutions."
          />

          <Feature
            icon={<Users />}
            title="Customer Focus"
            text="Your requirements and business goals remain our priority."
          />

          <Feature
            icon={<Award />}
            title="Professional Support"
            text="Get technical guidance before, during and after your project."
          />

          <Feature
            icon={<BriefcaseBusiness />}
            title="Practical Experience"
            text="Solutions are designed with real-world requirements in mind."
          />

        </div>

      </section>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-10 md:p-14 text-center">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl -top-32 -right-20" />

          <div className="relative">

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready To Start Your Project?
            </h2>

            <p className="mt-5 text-cyan-100 text-lg max-w-2xl mx-auto">
              Join our growing community of students, professionals and
              businesses who trust us for technology solutions.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-10 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-gray-100 transition">
              Get Started
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};


/* TESTIMONIAL CARD */
const TestimonialCard = ({ testimonial }) => (
  <div className="group bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">

    <div className="flex justify-between items-start">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold">
          {testimonial.initials}
        </div>

        <div>

          <h3 className="font-bold">
            {testimonial.name}
          </h3>

          <p className="text-gray-500 text-sm">
            {testimonial.role}
          </p>

        </div>

      </div>

      <Quote
        size={28}
        className="text-cyan-400/30"
      />

    </div>


    {/* STARS */}
    <div className="flex gap-1 mt-6">

      {[...Array(testimonial.rating)].map((_, index) => (

        <Star
          key={index}
          size={17}
          className="text-yellow-400 fill-yellow-400"
        />

      ))}

    </div>


    <p className="text-gray-400 mt-5 leading-7">
      "{testimonial.text}"
    </p>


    <div className="mt-6 pt-5 border-t border-slate-800">

      <span className="text-sm text-cyan-400">
        {testimonial.company}
      </span>

    </div>

  </div>
);


/* STAT */
const Stat = ({ icon, number, text }) => (
  <div className="text-center">

    <div className="flex justify-center text-cyan-400 mb-3">
      {icon}
    </div>

    <h3 className="text-3xl font-bold">
      {number}
    </h3>

    <p className="text-gray-500 text-sm mt-1">
      {text}
    </p>

  </div>
);


/* FEATURE */
const Feature = ({ icon, title, text }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400 transition">

    <div className="text-cyan-400">
      {icon}
    </div>

    <h3 className="text-xl font-bold mt-5">
      {title}
    </h3>

    <p className="text-gray-400 mt-3 leading-7">
      {text}
    </p>

  </div>
);


export default Testimonials;