const ServiceHero = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central large circle with gradient */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-mint-teal/20 via-soft-mauve/20 to-creamy-apricot/20 blur-3xl"></div>

        {/* Top right teal square */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-mint-teal/30 rounded-2xl blur-xl"></div>

        {/* Top left purple square */}
        <div className="absolute top-32 left-32 w-20 h-20 bg-soft-mauve/30 rounded-2xl blur-xl"></div>

        {/* Bottom right yellow square */}
        <div className="absolute bottom-32 right-32 w-28 h-28 bg-creamy-apricot/30 rounded-2xl blur-xl"></div>

        {/* Bottom left teal square */}
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-mint-teal/30 rounded-2xl blur-xl"></div>

        {/* Far left faint circle */}
        <div className="absolute bottom-1/4 left-0 w-32 h-32 bg-mint-teal/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-6">
            {/* Subheading */}
            <h3 className="text-lg font-medium text-mint-teal">
              Human Experience Design
            </h3>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
              Design for <span className="text-gradient">humanity</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Shaping your service with care, from the flow of your site to the
              systems behind it. We create experiences that welcome your
              customers in, support your team, and help your business grow with
              purpose.
            </p>
          </div>

          {/* Right side - animated sphere for visual balance */}
          <div className="relative order-2 lg:order-2 hidden md:block">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
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
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 gradient-teal-apricot rounded-full border-40px solid gradient-teal-apricot; border-radius: 50%; background: transparent; box-sizing: border-box; "></div>
                <div className="absolute w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-[#F8FDFB] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 border border-gray-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default ServiceHero;



