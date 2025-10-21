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

          {/* Right side - shapes for visual balance */}
          <div className="relative h-96 lg:h-full">
            {/* Additional decorative elements for mobile/tablet */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-mint-teal/20 rounded-full blur-lg"></div>
            <div className="absolute bottom-10 left-10 w-12 h-12 bg-soft-mauve/20 rounded-full blur-lg"></div>
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



