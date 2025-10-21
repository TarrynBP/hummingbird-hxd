import { Card, CardContent } from "@/components/ui/card";

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understand your business, audience, and goals through form questions and relaxed, focused conversations.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Map out the structure, pages, and content you'll need to guide your customers step by step.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Define a brand identity. Then design a site with SEO optimisation and integrations like forms or payments.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Test, refine, and launch your new website with training and ongoing support.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collaborative and thoughtful approach to help you launch a website
            that's easy to love, built for small business growth, and smooth for
            your customers to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full border-2 border-mint-teal flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-mint-teal">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;



