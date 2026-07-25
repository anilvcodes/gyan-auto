import React from "react";
import {
  Cpu,
  Monitor,
  Factory,
  Wifi,
  Settings,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  BriefcaseBusiness,
} from "lucide-react";


const HomePage = () => {
  return (
    <div className="bg-slate-950 text-white">


      {/* HERO SECTION */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-950 to-blue-900/30"></div>


        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">


          <div>


            <p className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              Industrial Automation Training & Solutions
            </p>


            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">

              Master The Future Of

              <span className="text-cyan-400">
                {" "}Industrial Automation
              </span>

            </h1>


            <p className="mt-8 text-lg text-gray-400 leading-8">

              Learn PLC Programming, HMI Designing, SCADA Development,
              Industrial IoT, VFD, Servo Drives and Automation Engineering
              with real industrial projects.

            </p>



            <div className="flex flex-wrap gap-5 mt-10">


              <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2">

                Start Learning

                <ArrowRight size={20}/>

              </button>



              <button className="border border-slate-700 px-8 py-4 rounded-xl hover:border-cyan-400">

                Explore Services

              </button>


            </div>



            <div className="grid grid-cols-3 gap-5 mt-12">


              <Stat 
                number="500+"
                text="Students"
              />

              <Stat 
                number="100+"
                text="Projects"
              />


              <Stat 
                number="10+"
                text="Industries"
              />


            </div>


          </div>





          {/* Hero Card */}


          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">


            <h3 className="text-2xl font-bold mb-8">
              Automation Technologies
            </h3>



            <div className="grid grid-cols-2 gap-6">


              <Box
                icon={<Cpu/>}
                title="PLC"
              />


              <Box
                icon={<Monitor/>}
                title="HMI"
              />


              <Box
                icon={<Factory/>}
                title="SCADA"
              />


              <Box
                icon={<Wifi/>}
                title="Industrial IoT"
              />


            </div>



          </div>



        </div>

      </section>








      {/* ABOUT SECTION */}


      <section className="max-w-7xl mx-auto px-6 py-24">


        <div className="grid lg:grid-cols-2 gap-16">


          <div>


            <h2 className="text-4xl md:text-5xl font-bold">

              Complete Industrial

              <span className="text-cyan-400">
                {" "}Automation Platform
              </span>

            </h2>


            <p className="mt-6 text-gray-400 leading-8">

              We provide professional automation training and engineering
              solutions designed according to industry requirements.
              Our focus is practical learning, troubleshooting skills,
              and real-world implementation.

            </p>



            <div className="mt-8 space-y-5">


              {
                [
                  "Hands-on PLC Programming",
                  "Real HMI & SCADA Projects",
                  "Industrial Control Systems",
                  "Job Oriented Automation Training"
                ].map(item=>(

                  <div
                    key={item}
                    className="flex gap-3 items-center"
                  >

                    <CheckCircle
                      className="text-cyan-400"
                    />

                    {item}

                  </div>

                ))
              }


            </div>


          </div>





          <div className="grid sm:grid-cols-2 gap-6">


            <Card
              icon={<Users/>}
              title="Expert Trainers"
              text="Industry experienced professionals"
            />


            <Card
              icon={<Award/>}
              title="Certification"
              text="Professional automation certificates"
            />


            <Card
              icon={<BriefcaseBusiness/>}
              title="Industrial Projects"
              text="Real plant based projects"
            />


            <Card
              icon={<ShieldCheck/>}
              title="Support"
              text="Continuous technical support"
            />


          </div>



        </div>


      </section>








      {/* SERVICES */}


      <section className="bg-slate-900 py-24">


        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-center text-5xl font-bold">

            Our

            <span className="text-cyan-400">
              {" "}Automation Services
            </span>

          </h2>




          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">


          {
            [
              "PLC Programming",
              "HMI Development",
              "SCADA Systems",
              "VFD & Servo Drives",
              "Control Panel Design",
              "Industrial Networking"
            ].map(service=>(

              <div
                key={service}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition"
              >

                <Settings className="text-cyan-400"/>


                <h3 className="text-xl font-bold mt-5">
                  {service}
                </h3>


                <p className="text-gray-400 mt-4">
                  Complete industrial automation solutions with practical implementation.
                </p>


              </div>

            ))
          }


          </div>


        </div>


      </section>








      {/* COURSE SECTION */}


      <section className="max-w-7xl mx-auto px-6 py-24">


        <h2 className="text-center text-5xl font-bold">

          Popular

          <span className="text-cyan-400">
            {" "}Courses
          </span>

        </h2>


        <div className="grid md:grid-cols-3 gap-8 mt-14">


          {
            [
              "PLC Programming Master Course",
              "HMI + SCADA Complete Course",
              "Industrial Automation Expert"
            ].map(course=>(

              <div
                key={course}
                className="bg-slate-900 rounded-3xl p-8 border border-slate-800"
              >

                <GraduationCap
                  className="text-cyan-400"
                  size={35}
                />

                <h3 className="text-xl font-bold mt-6">
                  {course}
                </h3>


                <p className="mt-4 text-gray-400">
                  Learn from basics to advanced industrial applications.
                </p>


              </div>

            ))
          }


        </div>


      </section>








      {/* CTA */}


      <section className="max-w-6xl mx-auto px-6 pb-24">


        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-14 text-center">


          <h2 className="text-4xl md:text-5xl font-bold">

            Build Your Automation Career Today

          </h2>


          <p className="mt-5 text-cyan-100 text-lg">

            Learn Industrial Automation skills required by modern industries.

          </p>



          <button className="mt-8 bg-white text-blue-700 px-10 py-4 rounded-xl font-bold">

            Contact Us

          </button>


        </div>


      </section>


    </div>
  );
};





const Box = ({icon,title}) => (
  <div className="bg-slate-800 rounded-2xl p-8 text-center">

    <div className="text-cyan-400 flex justify-center mb-4">
      {icon}
    </div>

    <h3 className="font-semibold">
      {title}
    </h3>

  </div>
);





const Card = ({icon,title,text}) => (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">

    <div className="text-cyan-400">
      {icon}
    </div>

    <h3 className="text-xl font-bold mt-5">
      {title}
    </h3>

    <p className="text-gray-400 mt-3">
      {text}
    </p>

  </div>
);





const Stat = ({number,text}) => (
  <div>

    <h3 className="text-3xl font-bold text-cyan-400">
      {number}
    </h3>

    <p className="text-gray-400 text-sm">
      {text}
    </p>

  </div>
);



export default HomePage;