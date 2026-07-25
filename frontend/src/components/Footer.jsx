import React from "react";
import { Link } from "react-router-dom";

import {
  Cpu,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-14">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* Company */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="bg-cyan-500 p-3 rounded-xl">
                <Cpu 
                  size={28}
                  className="text-white"
                />
              </div>


              <div>

                <h2 className="text-2xl font-bold text-white">
                  Automation Hub
                </h2>

                <p className="text-cyan-400 text-sm">
                  PLC • HMI • SCADA
                </p>

              </div>

            </div>



            <p className="text-gray-400 leading-7">

              Professional Industrial Automation Training and Engineering
              Services. Learn PLC Programming, HMI, SCADA, VFD, Servo,
              Industrial IoT and real industrial projects.

            </p>



            {/* Social Icons */}

            <div className="flex gap-3 mt-6">


              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
              >
                <FaFacebook size={18}/>
              </a>


              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
              >
                <FaInstagram size={18}/>
              </a>


              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={18}/>
              </a>


              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
              >
                <FaYoutube size={18}/>
              </a>


            </div>


          </div>





          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>


            <ul className="space-y-4">


              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <ArrowRight size={15}/>
                  Home
                </Link>
              </li>


              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <ArrowRight size={15}/>
                  About
                </Link>
              </li>


              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <ArrowRight size={15}/>
                  Contact
                </Link>
              </li>


              <li>
                <Link
                  to="/blogs"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <ArrowRight size={15}/>
                  Blogs
                </Link>
              </li>


            </ul>


          </div>







          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Services
            </h3>


            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-cyan-400 transition">
                PLC Programming
              </li>

              <li className="hover:text-cyan-400 transition">
                HMI Development
              </li>

              <li className="hover:text-cyan-400 transition">
                SCADA System
              </li>

              <li className="hover:text-cyan-400 transition">
                Industrial Automation
              </li>

              <li className="hover:text-cyan-400 transition">
                Control Panel Design
              </li>

              <li className="hover:text-cyan-400 transition">
                Automation Training
              </li>


            </ul>


          </div>







          {/* Contact */}

          <div>


            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Us
            </h3>



            <div className="space-y-5">


              <div className="flex gap-3">

                <Phone 
                  className="text-cyan-400"
                  size={20}
                />

                <span>
                  +91 98765 43210
                </span>

              </div>





              <div className="flex gap-3">

                <Mail
                  className="text-cyan-400"
                  size={20}
                />

                <span>
                  info@automationhub.com
                </span>

              </div>





              <div className="flex gap-3">

                <MapPin
                  className="text-cyan-400"
                  size={20}
                />

                <span>
                  Kanpur, Uttar Pradesh, India
                </span>

              </div>


            </div>


          </div>



        </div>







        {/* Bottom Footer */}

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">


          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Automation Hub. All Rights Reserved.
          </p>



          <div className="flex gap-5 text-sm">


            <Link
              to="#"
              className="hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>


            <Link
              to="#"
              className="hover:text-cyan-400 transition"
            >
              Terms
            </Link>


            <Link
              to="#"
              className="hover:text-cyan-400 transition"
            >
              Support
            </Link>


          </div>


        </div>


      </div>


    </footer>
  );
};


export default Footer;