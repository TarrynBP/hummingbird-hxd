import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Curated list of services shown in the dropdown. "Website Design" links to the
  // web-design service (currently titled "Launch with Purpose" in Sanity), and the
  // others link to their matching service slugs (fallback content covers any that
  // don't have Studio documents yet).
  const serviceNavItems = [
    { title: "Website Design", slug: "web-design" },
    { title: "Service Design", slug: "service-design" },
    { title: "Digital Integration", slug: "digital-integration" },
    { title: "AI Integration", slug: "ai-integration" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const handleScheduleCall = () => {
    // Use client-side navigation so the SPA router handles the route.
    // A hard redirect (window.location.href) to /contact triggers a full
    // server request that 404s on statically hosted builds without SPA fallback.
    navigate("/contact#booking");
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group focus:outline-none">
            <img
              src="/assets/logo-sl.svg"
              alt="HummingBird HXD"
              className="w-40 h-40 group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-all duration-200 focus:outline-none ${
                  isActive(link.path)
                    ? "text-mint-teal font-medium"
                    : "text-gray-600 hover:text-mint-teal"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-mint-teal animate-scale-in"></span>
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-mint-teal transition-all duration-200 focus:outline-none">
                <Link
                  to="/services"
                  className={`relative transition-all duration-200 focus:outline-none ${
                    isActive("/services")
                      ? "text-mint-teal font-medium"
                      : "text-gray-600 hover:text-mint-teal"
                  }`}
                >
                  Services
                  {isActive("/services") && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-mint-teal animate-scale-in"></span>
                  )}
                </Link>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {serviceNavItems.map((service) => (
                  <DropdownMenuItem key={service.slug} asChild>
                    <Link
                      to={`/service/${service.slug}`}
                      className="cursor-pointer focus:outline-none"
                    >
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={handleScheduleCall}
              className="bg-mint-teal hover:bg-mint-teal-dark text-white"
            >
              Schedule a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden bg-white border-t"
            style={{ height: "calc(100svh - 64px)" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-full flex flex-col justify-start">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none ${
                    isActive(link.path)
                      ? "text-mint-teal bg-mint-teal/10"
                      : "text-gray-600 hover:text-mint-teal hover:bg-mint-teal/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services Section for Mobile */}
              <div className="px-3 py-2">
                <Link
                  to="/services"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none ${
                    isActive("/services")
                      ? "text-mint-teal bg-mint-teal/10"
                      : "text-gray-600 hover:text-mint-teal hover:bg-mint-teal/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <div className="pl-4 space-y-1">
                  {serviceNavItems.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/service/${service.slug}`}
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-mint-teal hover:bg-mint-teal/5 transition-colors duration-200 focus:outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    handleScheduleCall();
                  }}
                  className="w-full bg-mint-teal hover:bg-mint-teal-dark text-white text-center"
                >
                  Schedule a Call
                </Button>
              </div>

              {/* Animated Loading Sphere at Bottom */}
              <div className="flex justify-center items-center pt-16 pb-8 mt-auto">
                <div className="relative w-20 h-20 mx-auto">
                  {/* Animated hummingbird icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-mint-teal to-soft-mauve rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute top-2 left-2 w-4 h-4 bg-mint-teal rounded-full animate-bounce"></div>
                  <div
                    className="absolute top-2 right-2 w-4 h-4 bg-soft-mauve rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-creamy-apricot rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
