import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/brandmark.svg"
                alt="HummingBird HXD"
                className="w-8 h-8"
              />
              <span className="text-xl font-serif font-semibold text-gray-900">
                HummingBird HXD
              </span>
            </div>
            <p className="text-gray-600 max-w-md mb-4">
              Shaping your service with care, from the flow of your site to the
              systems behind it. We create experiences that welcome your
              customers in, support your team, and help your business grow with
              purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-mint-teal transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-mint-teal transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#portfolio"
                  className="text-gray-600 hover:text-mint-teal transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-mint-teal transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>tarryn.pietersen@hummingbirdhxd.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+72 (072) 608 5749</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 HummingBird HXD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
