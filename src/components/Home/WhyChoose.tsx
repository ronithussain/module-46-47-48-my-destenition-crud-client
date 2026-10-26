import Image from "next/image";

const features = [
  {
    icon: "/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#EAF7F9] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl lg:text-[44px]">
            Why Choose Wanderlast
          </h2>
          <p className="mt-2 text-sm text-[#5B6B6E]">
            Your trusted partner for exceptional travel experiences.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#C9E6EA]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="sm:px-8 sm:first:pl-0 sm:last:pr-0 lg:px-12"
            >
              <div className="flex size-10 items-center justify-center rounded-md border border-[#A9D9E1] bg-[#DFF2F5]">
                <Image
                  src={feature.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-[#111111]">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-[300px] text-sm leading-6 text-[#5B6B6E]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
