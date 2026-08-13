import React from "react";
import {
  Cpu,
  Factory,
  GraduationCap,
  CheckCircle,
  ShieldCheck,
  Users,
  Target,
  Lightbulb,
  Award,
  Settings,
  ArrowRight,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-slate-950 text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-950 to-blue-900/30" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">

          <div className="max-w-4xl">

            <p className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              About Our Automation Platform
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Building The Future Of{" "}
              <span className="text-cyan-400">
                Industrial Automation
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-400 leading-8 max-w-3xl">
              We provide professional Industrial Automation training,
              engineering solutions and practical project-based learning
              designed to prepare students and professionals for modern
              industries.
            </p>

            <button className="mt-10 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition">
              Explore Our Expertise
              <ArrowRight size={20} />
            </button>

          </div>

        </div>
      </section>


      {/* ABOUT COMPANY */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-cyan-400 font-semibold">
              WHO WE ARE
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Complete{" "}
              <span className="text-cyan-400">
                Automation Solutions
              </span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Our platform focuses on bridging the gap between theoretical
              knowledge and real industrial requirements. We help students,
              engineers and professionals develop practical automation
              skills through hands-on training and real-world projects.
            </p>

            <p className="mt-5 text-gray-400 leading-8">
              From PLC programming and HMI development to SCADA systems,
              industrial networking, VFD, servo drives and Industrial IoT,
              our goal is to provide complete automation knowledge under
              one platform.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Practical Industrial Automation Training",
                "Real-World PLC, HMI & SCADA Projects",
                "Industry-Focused Technical Skills",
                "Professional Engineering Solutions",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={22}
                    className="text-cyan-400"
                  />

                  <span className="text-gray-200">
                    {item}
                  </span>
                </div>

              ))}

            </div>

          </div>


          {/* AUTOMATION CARD */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl">

            <div className="flex items-center gap-4 mb-8">

              <div className="p-4 rounded-2xl bg-cyan-500/10">
                <Factory
                  size={38}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Our Expertise
                </h3>

                <p className="text-gray-400">
                  Industrial Automation Technologies
                </p>
              </div>

            </div>


            <div className="grid grid-cols-2 gap-5">

              <TechCard
                icon={<Cpu />}
                title="PLC"
              />

              <TechCard
                icon={<Settings />}
                title="HMI"
              />

              <TechCard
                icon={<Factory />}
                title="SCADA"
              />

              <TechCard
                icon={<Target />}
                title="VFD"
              />

              <TechCard
                icon={<ShieldCheck />}
                title="Control Systems"
              />

              <TechCard
                icon={<Lightbulb />}
                title="Industrial IoT"
              />

            </div>

          </div>

        </div>

      </section>


      {/* MISSION / VISION */}
      <section className="bg-slate-900 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-cyan-400 font-semibold">
              OUR PURPOSE
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Our Mission &{" "}
              <span className="text-cyan-400">
                Vision
              </span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              We believe practical automation skills can create better
              career opportunities and help industries build smarter,
              safer and more efficient systems.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-8 mt-14">

            <InfoCard
              icon={<Target />}
              title="Our Mission"
              text="To provide high-quality, practical and industry-oriented automation education and engineering solutions that help learners become confident automation professionals."
            />

            <InfoCard
              icon={<Lightbulb />}
              title="Our Vision"
              text="To become a trusted platform for Industrial Automation learning, engineering innovation and professional skill development."
            />

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <p className="text-cyan-400 font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Why Learn With{" "}
            <span className="text-cyan-400">
              Us?
            </span>
          </h2>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          <FeatureCard
            icon={<Users />}
            title="Expert Trainers"
            text="Learn from experienced professionals with practical industry knowledge."
          />

          <FeatureCard
            icon={<GraduationCap />}
            title="Practical Training"
            text="Focus on hands-on learning instead of only theoretical concepts."
          />

          <FeatureCard
            icon={<Award />}
            title="Certification"
            text="Build your professional profile with automation training certificates."
          />

          <FeatureCard
            icon={<ShieldCheck />}
            title="Technical Support"
            text="Get continuous guidance while working on automation projects."
          />

        </div>

      </section>


      {/* CORE VALUES */}
      <section className="bg-slate-900 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-cyan-400 font-semibold">
                OUR VALUES
              </p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                What Drives{" "}
                <span className="text-cyan-400">
                  Us
                </span>
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                Our approach is based on practical knowledge, innovation,
                continuous learning and a strong connection with real
                industrial requirements.
              </p>

            </div>


            <div className="space-y-5">

              {[
                "Practical & Project-Based Learning",
                "Industry-Oriented Curriculum",
                "Continuous Innovation",
                "Professional Excellence",
                "Student Success",
              ].map((value, index) => (

                <div
                  key={value}
                  className="flex items-center gap-5 bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 transition"
                >

                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">
                    0{index + 1}
                  </div>

                  <span className="font-semibold">
                    {value}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-10 md:p-14 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Start Your Automation Journey
          </h2>

          <p className="mt-5 text-cyan-100 text-lg">
            Develop practical skills and become ready for the future of
            Industrial Automation.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            Get Started
            <ArrowRight size={20} />
          </button>

        </div>

      </section>

    </div>
  );
};


// TECHNOLOGY CARD
const TechCard = ({ icon, title }) => (
  <div className="bg-slate-800 rounded-2xl p-6 text-center hover:bg-slate-700 hover:border-cyan-400 border border-transparent transition">

    <div className="text-cyan-400 flex justify-center mb-4">
      {icon}
    </div>

    <h3 className="font-semibold">
      {title}
    </h3>

  </div>
);


// INFO CARD
const InfoCard = ({ icon, title, text }) => (
  <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
      {icon}
    </div>

    <h3 className="text-2xl font-bold mt-6">
      {title}
    </h3>

    <p className="text-gray-400 mt-4 leading-7">
      {text}
    </p>

  </div>
);


// FEATURE CARD
const FeatureCard = ({ icon, title, text }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">

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


export default AboutUs;