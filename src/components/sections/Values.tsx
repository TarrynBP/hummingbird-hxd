import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useValues } from "@/hooks/useSanityData";
import * as LucideIcons from "lucide-react";

const Values = () => {
  const { data: values, isLoading, error } = useValues();

  // Use Sanity data directly
  const valuesData = values;

  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || LucideIcons.Heart;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 animate-fade-in">
            Our Values
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            These core principles guide every project we take on and every
            relationship we build with our clients.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="animate-pulse">
                    <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-4 mx-auto"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : error || !valuesData || valuesData.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Values not found
            </h3>
            <p className="text-gray-600">
              Please add values in your Sanity Studio.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuesData.map((value, index) => {
              const Icon = getIconComponent(value.icon);
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-white animate-slide-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(120, 206, 195, 0.25) 0%, rgba(195, 162, 179, 0.25) 100%)",
                      }}
                    >
                      <Icon
                        className={`h-8 w-8 text-mint-teal group-hover:rotate-12 transition-transform duration-300`}
                      />
                    </div>
                    <CardTitle className="text-xl font-serif font-semibold">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Values;
