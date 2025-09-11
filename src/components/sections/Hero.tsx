const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-mint-teal/10 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-48 h-48 bg-soft-mauve/10 rounded-full blur-2xl opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="text-mint-teal font-medium text-lg">
                Human Experience Design
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Design for <span className="text-gradient">humanity</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Shaping your service with care, from the flow of your site to the
              systems behind it. We create experiences that welcome your
              customers in, support your team, and help your business grow with
              purpose.
            </p>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative w-full h-96">
              {/* Floating Geometric Shapes */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-mint-teal rounded-2xl shadow-lg animate-float"></div>
              <div
                className="absolute top-20 left-10 w-12 h-12 bg-soft-mauve rounded-xl shadow-lg animate-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-20 right-10 w-20 h-20 bg-creamy-apricot rounded-3xl shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-14 h-14 gradient-mint-mauve rounded-2xl shadow-lg animate-float"
                style={{ animationDelay: "1.5s" }}
              ></div>

              {/* Central Design Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 gradient-teal-apricot rounded-full opacity-80 blur-sm"></div>
                <div className="absolute w-48 h-48 gradient-mint-mauve rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
