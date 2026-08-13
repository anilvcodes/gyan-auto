import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Cpu,
  Database,
  Gauge,
  Globe,
  LayoutDashboard,
  Monitor,
  Network,
  Server,
  Settings,
  ShoppingCart,
  Smartphone,
  Wrench,
  Zap,
} from "lucide-react";

const Services = () => {
  const services = [
    // WEBSITE DEVELOPMENT
    {
      icon: <Globe />,
      title: "Website Development",
      category: "Web Development",
      description:
        "Modern, responsive and high-performance websites designed for businesses, startups and organizations.",
      features: [
        "Responsive Website",
        "Modern UI/UX",
        "SEO Friendly Structure",
        "Mobile Optimized",
        "Performance Optimization",
      ],
    },

    {
      icon: <Code2 />,
      title: "Custom Website Development",
      category: "Web Development",
      description:
        "Fully customized websites developed according to your business requirements, design and functionality.",
      features: [
        "Custom UI Design",
        "Custom Features",
        "Business Website",
        "Landing Pages",
        "Scalable Architecture",
      ],
    },

    {
      icon: <Settings />,
      title: "WordPress Development",
      category: "WordPress",
      description:
        "Professional WordPress websites with custom themes, plugins, pages and business functionality.",
      features: [
        "WordPress Installation",
        "Custom Theme",
        "Plugin Integration",
        "Theme Customization",
        "Website Maintenance",
      ],
    },

    {
      icon: <ShoppingCart />,
      title: "WooCommerce Development",
      category: "E-Commerce",
      description:
        "Complete e-commerce websites using WooCommerce with product management, checkout and payment integration.",
      features: [
        "Online Store",
        "Product Management",
        "Shopping Cart",
        "Payment Gateway",
        "Order Management",
      ],
    },

    {
      icon: <Server />,
      title: "REST API Development",
      category: "Backend Development",
      description:
        "Secure and scalable REST APIs for websites, mobile applications, dashboards and third-party integrations.",
      features: [
        "REST API",
        "Authentication",
        "CRUD Operations",
        "Database Integration",
        "Third-Party API",
      ],
    },

    {
      icon: <LayoutDashboard />,
      title: "Admin Dashboard",
      category: "Web Application",
      description:
        "Powerful and easy-to-use admin dashboards for managing users, products, orders, reports and business data.",
      features: [
        "Admin Panel",
        "User Management",
        "Reports & Analytics",
        "Data Management",
        "Role-Based Access",
      ],
    },

    {
      icon: <Database />,
      title: "Web Application Development",
      category: "Web Application",
      description:
        "Custom web applications built for business processes, data management and automation.",
      features: [
        "Business Applications",
        "Database Systems",
        "User Authentication",
        "Custom Modules",
        "Cloud Ready",
      ],
    },

    {
      icon: <Smartphone />,
      title: "Responsive Web Design",
      category: "UI/UX",
      description:
        "Websites that provide a smooth and consistent experience across mobile, tablet and desktop devices.",
      features: [
        "Mobile Friendly",
        "Tablet Responsive",
        "Desktop Optimization",
        "Modern Layout",
        "Cross-Browser Support",
      ],
    },

    {
      icon: <Zap />,
      title: "Website Maintenance",
      category: "Support",
      description:
        "Continuous technical support, updates, security improvements and performance optimization for your website.",
      features: [
        "Website Updates",
        "Security Updates",
        "Bug Fixing",
        "Backup Management",
        "Performance Optimization",
      ],
    },

    // AUTOMATION SERVICES
    {
      icon: <Cpu />,
      title: "PLC Programming",
      category: "Industrial Automation",
      description:
        "Professional PLC programming and automation solutions for industrial machines and processes.",
      features: [
        "PLC Logic Development",
        "Ladder Programming",
        "Digital & Analog I/O",
        "PLC Troubleshooting",
        "Machine Automation",
      ],
    },

    {
      icon: <Monitor />,
      title: "HMI Development",
      category: "Industrial Automation",
      description:
        "User-friendly HMI interfaces for machine control, monitoring and industrial process visualization.",
      features: [
        "HMI Screen Design",
        "Machine Controls",
        "Alarm Systems",
        "Data Visualization",
        "PLC Communication",
      ],
    },

    {
      icon: <Gauge />,
      title: "SCADA Systems",
      category: "Industrial Automation",
      description:
        "Complete SCADA development for real-time industrial monitoring, control and data collection.",
      features: [
        "SCADA Development",
        "Real-Time Monitoring",
        "Alarm Management",
        "Historical Trends",
        "Data Logging",
      ],
    },

    {
      icon: <Network />,
      title: "Industrial Networking",
      category: "Industrial Automation",
      description:
        "Industrial communication and networking solutions for connected automation systems.",
      features: [
        "PLC Communication",
        "Industrial Protocols",
        "Device Networking",
        "Network Configuration",
        "Troubleshooting",
      ],
    },

    {
      icon: <Wrench />,
      title: "Automation Troubleshooting",
      category: "Industrial Automation",
      description:
        "Fault diagnosis and technical troubleshooting for industrial automation systems.",
      features: [
        "PLC Fault Diagnosis",
        "HMI Troubleshooting",
        "Communication Faults",
        "Sensor Problems",
        "Machine Debugging",
      ],
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
              Web Development & Industrial Automation
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Digital &
              <span className="text-cyan-400">
                {" "}Automation
              </span>
              <br />
              Solutions
            </h1>

            <p className="mt-7 text-lg md:text-xl text-gray-400 leading-8 max-w-3xl">
              We build modern websites, WordPress and WooCommerce stores,
              REST APIs, admin dashboards, custom web applications and
              professional Industrial Automation solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition">
                Start Your Project
                <ArrowRight size={20} />
              </button>

              <button className="border border-slate-700 hover:border-cyan-400 px-8 py-4 rounded-xl font-semibold transition">
                View Services
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* SERVICE CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-cyan-400 font-semibold">
            WHAT WE DO
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Our
            <span className="text-cyan-400">
              {" "}Professional Services
            </span>
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            From business websites and e-commerce platforms to custom
            software and industrial automation, we provide complete
            technology solutions.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}

        </div>

      </section>


      {/* TECHNOLOGY SECTION */}
      <section className="bg-slate-900 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-cyan-400 font-semibold">
                TECHNOLOGIES
              </p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                Technology That
                <span className="text-cyan-400">
                  {" "}Works For You
                </span>
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                We use modern technologies and development practices to
                create fast, secure, responsive and scalable digital
                solutions.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Modern and responsive design",
                  "SEO-friendly architecture",
                  "Secure backend development",
                  "API and database integration",
                  "Scalable web applications",
                  "Mobile-first development",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle
                      size={21}
                      className="text-cyan-400"
                    />

                    <span className="text-gray-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">

              <div className="grid grid-cols-2 gap-5">

                <TechCard
                  icon={<Globe />}
                  title="Web"
                />

                <TechCard
                  icon={<Code2 />}
                  title="Custom Code"
                />

                <TechCard
                  icon={<ShoppingCart />}
                  title="WooCommerce"
                />

                <TechCard
                  icon={<Server />}
                  title="REST API"
                />

                <TechCard
                  icon={<LayoutDashboard />}
                  title="Dashboard"
                />

                <TechCard
                  icon={<Database />}
                  title="Database"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* WORK PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <p className="text-cyan-400 font-semibold">
            OUR PROCESS
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            From Idea To
            <span className="text-cyan-400">
              {" "}Launch
            </span>
          </h2>

        </div>


        <div className="grid md:grid-cols-4 gap-6 mt-14">

          <ProcessCard
            number="01"
            title="Discuss"
            text="We understand your business, requirements and project goals."
          />

          <ProcessCard
            number="02"
            title="Design"
            text="We create the structure, UI and technical architecture."
          />

          <ProcessCard
            number="03"
            title="Develop"
            text="Our team builds and integrates the required features."
          />

          <ProcessCard
            number="04"
            title="Launch"
            text="We test, optimize and deploy your final project."
          />

        </div>

      </section>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-10 md:p-14 text-center">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl -top-32 -right-20" />

          <div className="relative">

            <h2 className="text-4xl md:text-5xl font-bold">
              Have A Project In Mind?
            </h2>

            <p className="mt-5 text-cyan-100 text-lg max-w-2xl mx-auto">
              Whether you need a business website, e-commerce store,
              custom dashboard, REST API or automation solution, let's
              build it together.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-10 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-gray-100 transition">
              Discuss Your Project
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};


/* SERVICE CARD */
const ServiceCard = ({ service }) => (
  <div className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">

    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition">
      {service.icon}
    </div>

    <div className="mt-6">

      <span className="text-cyan-400 text-sm font-semibold">
        {service.category}
      </span>

      <h3 className="text-2xl font-bold mt-2 group-hover:text-cyan-400 transition">
        {service.title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7">
        {service.description}
      </p>

    </div>

    <div className="mt-6 space-y-3">

      {service.features.map((feature) => (

        <div
          key={feature}
          className="flex items-center gap-2 text-sm text-gray-400"
        >

          <CheckCircle
            size={16}
            className="text-cyan-400 flex-shrink-0"
          />

          {feature}

        </div>

      ))}

    </div>

    <button className="mt-7 text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
      Learn More
      <ArrowRight size={18} />
    </button>

  </div>
);


/* TECHNOLOGY CARD */
const TechCard = ({ icon, title }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 transition">

    <div className="flex justify-center text-cyan-400 mb-4">
      {icon}
    </div>

    <h3 className="font-semibold">
      {title}
    </h3>

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


export default Services;