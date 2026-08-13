import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Clock3,
  Cpu,
  Factory,
  GraduationCap,
  Monitor,
  Settings,
  ShieldCheck,
  Star,
  Users,
  Wifi,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "PLC Programming Master Course",
      category: "PLC",
      level: "Beginner to Advanced",
      duration: "8 Weeks",
      students: "250+ Students",
      icon: <Cpu />,
      description:
        "Master PLC programming, ladder logic, timers, counters, analog signals and industrial troubleshooting with practical projects.",
      topics: [
        "PLC Fundamentals",
        "Ladder Logic",
        "Timers & Counters",
        "Analog I/O",
        "Troubleshooting",
      ],
    },
    {
      title: "HMI + SCADA Complete Course",
      category: "HMI & SCADA",
      level: "Intermediate",
      duration: "6 Weeks",
      students: "180+ Students",
      icon: <Monitor />,
      description:
        "Learn HMI designing and SCADA development including industrial screens, alarms, tags, trends and real-time monitoring.",
      topics: [
        "HMI Designing",
        "SCADA Architecture",
        "Alarm Management",
        "Data Logging",
        "Industrial Monitoring",
      ],
    },
    {
      title: "Industrial Automation Expert",
      category: "Complete Automation",
      level: "Advanced",
      duration: "12 Weeks",
      students: "150+ Students",
      icon: <Factory />,
      description:
        "A complete industrial automation program covering PLC, HMI, SCADA, drives, networking and industrial projects.",
      topics: [
        "PLC & HMI",
        "SCADA",
        "VFD & Servo",
        "Industrial Networking",
        "Final Project",
      ],
    },
    {
      title: "VFD & Servo Drive Training",
      category: "Drives",
      level: "Intermediate",
      duration: "4 Weeks",
      students: "100+ Students",
      icon: <Settings />,
      description:
        "Understand motor control, VFD configuration, speed control, servo systems and industrial drive troubleshooting.",
      topics: [
        "VFD Fundamentals",
        "Parameter Setting",
        "Motor Control",
        "Servo Basics",
        "Troubleshooting",
      ],
    },
    {
      title: "Industrial IoT & Smart Factory",
      category: "Industrial IoT",
      level: "Advanced",
      duration: "6 Weeks",
      students: "80+ Students",
      icon: <Wifi />,
      description:
        "Explore Industrial IoT, connected machines, sensors, data collection and smart manufacturing concepts.",
      topics: [
        "IIoT Fundamentals",
        "Sensors",
        "Data Acquisition",
        "Connectivity",
        "Smart Factory",
      ],
    },
    {
      title: "Industrial Networking",
      category: "Networking",
      level: "Intermediate",
      duration: "4 Weeks",
      students: "90+ Students",
      icon: <ShieldCheck />,
      description:
        "Learn industrial communication concepts and networking technologies used in modern automation systems.",
      topics: [
        "Network Basics",
        "Industrial Protocols",
        "PLC Communication",
        "Troubleshooting",
        "Network Design",
      ],
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-950 to-blue-900/30" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">

          <div className="max-w-4xl">

            <p className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              Industrial Automation Training
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Learn Skills.
              <br />
              <span className="text-cyan-400">
                Build Your Career.
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-gray-400 leading-8 max-w-3xl">
              Learn PLC, HMI, SCADA, VFD, Servo, Industrial IoT and
              Networking through practical, industry-oriented automation
              courses.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition">
                Explore Courses
                <ArrowRight size={20} />
              </button>

              <button className="border border-slate-700 hover:border-cyan-400 px-8 py-4 rounded-xl font-semibold transition">
                Talk To Trainer
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 gap-6">

          <Stat
            number="500+"
            text="Students Trained"
          />

          <Stat
            number="10+"
            text="Automation Courses"
          />

          <Stat
            number="100+"
            text="Industrial Projects"
          />

          <Stat
            number="95%"
            text="Practical Learning"
          />

        </div>

      </section>


      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-cyan-400 font-semibold">
            OUR COURSES
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Choose Your{" "}
            <span className="text-cyan-400">
              Automation Course
            </span>
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Choose from beginner, intermediate and advanced programs
            designed around practical industrial automation skills.
          </p>

        </div>


        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">

          {[
            "All Courses",
            "PLC",
            "HMI & SCADA",
            "Drives",
            "Industrial IoT",
            "Networking",
          ].map((item, index) => (

            <button
              key={item}
              className={`px-5 py-2.5 rounded-full border transition ${
                index === 0
                  ? "bg-cyan-500 border-cyan-500 text-white"
                  : "border-slate-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {item}
            </button>

          ))}

        </div>


        {/* COURSE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {courses.map((course) => (

            <CourseCard
              key={course.title}
              course={course}
            />

          ))}

        </div>

      </section>


      {/* WHY OUR COURSES */}
      <section className="bg-slate-900 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-cyan-400 font-semibold">
                WHY OUR COURSES
              </p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                Learn Automation The{" "}
                <span className="text-cyan-400">
                  Practical Way
                </span>
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                Our courses are designed to help learners understand
                industrial automation concepts and apply them to
                real-world systems.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Hands-on PLC programming",
                  "Real HMI & SCADA projects",
                  "Industrial troubleshooting",
                  "Project-based learning",
                  "Industry-oriented curriculum",
                  "Technical guidance from trainers",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle
                      size={21}
                      className="text-cyan-400 flex-shrink-0"
                    />

                    <span className="text-gray-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* LEARNING CARD */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-10">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <GraduationCap
                    className="text-cyan-400"
                    size={30}
                  />
                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    What You'll Learn
                  </h3>

                  <p className="text-gray-400">
                    From fundamentals to industrial projects
                  </p>

                </div>

              </div>


              <div className="mt-8 space-y-4">

                <LearningItem
                  title="Automation Fundamentals"
                  number="01"
                />

                <LearningItem
                  title="PLC Programming"
                  number="02"
                />

                <LearningItem
                  title="HMI & SCADA"
                  number="03"
                />

                <LearningItem
                  title="Drives & Motion Control"
                  number="04"
                />

                <LearningItem
                  title="Industrial Networking"
                  number="05"
                />

                <LearningItem
                  title="Real Industrial Project"
                  number="06"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* COURSE PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <p className="text-cyan-400 font-semibold">
            LEARNING PROCESS
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Your Journey From{" "}
            <span className="text-cyan-400">
              Learning To Industry
            </span>
          </h2>

        </div>


        <div className="grid md:grid-cols-4 gap-6 mt-14">

          <ProcessCard
            number="01"
            title="Learn"
            text="Understand core automation concepts."
          />

          <ProcessCard
            number="02"
            title="Practice"
            text="Work on practical programming exercises."
          />

          <ProcessCard
            number="03"
            title="Build"
            text="Create real-world automation projects."
          />

          <ProcessCard
            number="04"
            title="Grow"
            text="Build skills for your automation career."
          />

        </div>

      </section>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-10 md:p-14 text-center">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl -top-32 -right-20" />

          <div className="relative">

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready To Master Industrial Automation?
            </h2>

            <p className="mt-5 text-cyan-100 text-lg max-w-2xl mx-auto">
              Start learning practical automation skills and take the next
              step toward your professional career.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-10 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-gray-100 transition">
              Start Learning
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};


/* COURSE CARD */
const CourseCard = ({ course }) => (
  <div className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-1 transition duration-300">

    {/* ICON */}
    <div className="h-48 bg-gradient-to-br from-cyan-900/40 to-blue-900/20 flex items-center justify-center">

      <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-300">
        {course.icon}
      </div>

    </div>


    <div className="p-7">

      <span className="text-cyan-400 text-sm font-semibold">
        {course.category}
      </span>

      <h3 className="text-2xl font-bold mt-3 group-hover:text-cyan-400 transition">
        {course.title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7">
        {course.description}
      </p>


      {/* META */}
      <div className="grid grid-cols-2 gap-3 mt-6">

        <div className="bg-slate-950 rounded-xl p-3">

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock3 size={15} />
            Duration
          </div>

          <p className="mt-1 font-semibold text-sm">
            {course.duration}
          </p>

        </div>


        <div className="bg-slate-950 rounded-xl p-3">

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Users size={15} />
            Students
          </div>

          <p className="mt-1 font-semibold text-sm">
            {course.students}
          </p>

        </div>

      </div>


      {/* TOPICS */}
      <div className="mt-6 space-y-2">

        {course.topics.map((topic) => (

          <div
            key={topic}
            className="flex items-center gap-2 text-sm text-gray-400"
          >

            <CheckCircle
              size={16}
              className="text-cyan-400"
            />

            {topic}

          </div>

        ))}

      </div>


      <button className="w-full mt-7 bg-cyan-500 hover:bg-cyan-600 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition">

        View Course

        <ArrowRight size={18} />

      </button>

    </div>

  </div>
);


/* STAT */
const Stat = ({ number, text }) => (
  <div className="text-center">

    <h3 className="text-3xl font-bold text-cyan-400">
      {number}
    </h3>

    <p className="text-gray-400 text-sm mt-1">
      {text}
    </p>

  </div>
);


/* LEARNING ITEM */
const LearningItem = ({ number, title }) => (
  <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4">

    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-sm">
      {number}
    </div>

    <span className="font-semibold">
      {title}
    </span>

  </div>
);


/* PROCESS CARD */
const ProcessCard = ({ number, title, text }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400 transition">

    <span className="text-cyan-400 font-bold text-lg">
      {number}
    </span>

    <h3 className="text-2xl font-bold mt-4">
      {title}
    </h3>

    <p className="text-gray-400 mt-3 leading-7">
      {text}
    </p>

  </div>
);


export default Courses;