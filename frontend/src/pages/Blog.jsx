import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Cpu,
  Factory,
  Wifi,
  Settings,
  Search,
} from "lucide-react";

const Blog = () => {
  const blogs = [
    {
      title: "PLC Programming: Complete Beginner's Guide",
      category: "PLC",
      description:
        "Understand PLC basics, programming concepts, ladder logic and how PLCs are used in modern industrial automation.",
      date: "Aug 10, 2026",
      readTime: "6 min read",
      icon: <Cpu />,
    },
    {
      title: "HMI vs SCADA: What's the Difference?",
      category: "HMI & SCADA",
      description:
        "Learn the difference between HMI and SCADA systems and understand where each technology is used in industrial plants.",
      date: "Aug 06, 2026",
      readTime: "5 min read",
      icon: <Settings />,
    },
    {
      title: "Industrial IoT: The Future of Smart Factories",
      category: "Industrial IoT",
      description:
        "Discover how Industrial IoT connects machines, sensors and automation systems to create smarter manufacturing environments.",
      date: "Aug 02, 2026",
      readTime: "7 min read",
      icon: <Wifi />,
    },
    {
      title: "Understanding VFD in Industrial Automation",
      category: "Drives",
      description:
        "Explore how Variable Frequency Drives control motor speed, improve efficiency and provide better process control.",
      date: "Jul 28, 2026",
      readTime: "6 min read",
      icon: <Factory />,
    },
    {
      title: "Industrial Networking Basics for Engineers",
      category: "Networking",
      description:
        "Learn the fundamentals of industrial communication networks and protocols used in automation systems.",
      date: "Jul 24, 2026",
      readTime: "8 min read",
      icon: <Wifi />,
    },
    {
      title: "How to Start a Career in Industrial Automation",
      category: "Career",
      description:
        "A practical roadmap for students and engineers who want to build a successful career in Industrial Automation.",
      date: "Jul 20, 2026",
      readTime: "7 min read",
      icon: <Cpu />,
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
              Industrial Automation Knowledge Hub
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Learn.
              <span className="text-cyan-400"> Build.</span>
              <br />
              Automate.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-gray-400 leading-8 max-w-3xl">
              Explore practical articles, tutorials, industry insights and
              career guidance related to PLC, HMI, SCADA, VFD, Industrial IoT
              and modern automation technologies.
            </p>

            {/* SEARCH */}
            <div className="mt-10 max-w-xl relative">

              <Search
                size={21}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search automation articles..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-14 pr-5 outline-none focus:border-cyan-400 transition text-white"
              />

            </div>

          </div>

        </div>

      </section>


      {/* FEATURED BLOG */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between gap-5 flex-wrap">

          <div>

            <p className="text-cyan-400 font-semibold">
              FEATURED ARTICLE
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Featured{" "}
              <span className="text-cyan-400">
                Automation Guide
              </span>
            </h2>

          </div>

        </div>


        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition">

          <div className="grid lg:grid-cols-2">

            {/* VISUAL */}
            <div className="min-h-[320px] bg-gradient-to-br from-cyan-600/30 via-blue-700/20 to-slate-950 flex items-center justify-center relative overflow-hidden">

              <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

              <div className="relative bg-slate-900/80 border border-cyan-400/30 rounded-3xl p-12">

                <Cpu
                  size={90}
                  className="text-cyan-400"
                />

              </div>

            </div>


            {/* CONTENT */}
            <div className="p-8 md:p-12">

              <span className="text-cyan-400 text-sm font-semibold">
                PLC PROGRAMMING
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mt-4">
                PLC Programming Roadmap:
                <span className="text-cyan-400">
                  {" "}From Beginner to Industrial Engineer
                </span>
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                Learn the step-by-step path to mastering PLC programming,
                ladder logic, industrial troubleshooting and real-world
                automation projects.
              </p>


              <div className="flex flex-wrap gap-5 mt-7 text-sm text-gray-500">

                <div className="flex items-center gap-2">
                  <CalendarDays size={17} />
                  Aug 12, 2026
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={17} />
                  8 min read
                </div>

              </div>


              <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition">

                Read Article

                <ArrowRight size={19} />

              </button>

            </div>

          </div>

        </div>

      </section>


      {/* BLOG SECTION */}
      <section className="bg-slate-900 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-cyan-400 font-semibold">
              LATEST ARTICLES
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Explore Our{" "}
              <span className="text-cyan-400">
                Blogs
              </span>
            </h2>

            <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
              Practical knowledge and insights to help you understand
              Industrial Automation and grow your technical career.
            </p>

          </div>


          {/* CATEGORIES */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">

            {[
              "All",
              "PLC",
              "HMI & SCADA",
              "Drives",
              "Industrial IoT",
              "Networking",
              "Career",
            ].map((category) => (

              <button
                key={category}
                className={`px-5 py-2.5 rounded-full border transition ${
                  category === "All"
                    ? "bg-cyan-500 border-cyan-500 text-white"
                    : "border-slate-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>

            ))}

          </div>


          {/* BLOG GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {blogs.map((blog) => (

              <article
                key={blog.title}
                className="group bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
              >

                {/* CARD IMAGE AREA */}
                <div className="h-48 bg-gradient-to-br from-cyan-900/40 to-blue-900/20 flex items-center justify-center">

                  <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-300">
                    {blog.icon}
                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-7">

                  <span className="text-cyan-400 text-sm font-semibold">
                    {blog.category}
                  </span>

                  <h3 className="text-xl font-bold mt-3 leading-7 group-hover:text-cyan-400 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {blog.description}
                  </p>


                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-800">

                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <CalendarDays size={16} />
                      {blog.date}
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock3 size={16} />
                      {blog.readTime}
                    </div>

                  </div>


                  <button className="mt-6 text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">

                    Read More

                    <ArrowRight size={18} />

                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* NEWSLETTER / CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-10 md:p-14 text-center">

          <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl -top-32 -right-20" />

          <div className="relative">

            <h2 className="text-4xl md:text-5xl font-bold">
              Stay Updated With Automation
            </h2>

            <p className="mt-5 text-cyan-100 text-lg max-w-2xl mx-auto">
              Get the latest Industrial Automation tutorials, career tips
              and technology insights.
            </p>


            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">

              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-xl text-slate-900 outline-none"
              />

              <button className="bg-slate-950 hover:bg-slate-900 px-7 py-4 rounded-xl font-bold transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Blog;