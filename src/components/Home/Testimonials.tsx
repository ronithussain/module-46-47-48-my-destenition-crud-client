"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// create a arra of object for testimonials
const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned, The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: "/person2.png",
    alt: "Michael Chen",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/person1.png",
    alt: "Sarah Johnson",
  },
  {
    quote:
      "The Greek Island Hopper Was Everything We Hoped For. Seamless Logistics, Stunning Stays, And Local Guides Who Truly Cared About Our Experience.",
    name: "Amelia Turner",
    location: "London, UK",
    image: "/person1.png",
    alt: "Amelia Turner",
  },
  {
    quote:
      "Our Safari In Kenya Was Flawless From Start To Finish. Every Game Drive Felt Special And The Lodges Were Beyond Our Expectations.",
    name: "Daniel Kim",
    location: "Seoul, South Korea",
    image: "/person2.png",
    alt: "Daniel Kim",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl lg:text-[44px]">
                What Travelers Say
              </h2>
              <p className="mt-2 text-sm text-[#6B7280]">
                Real experiences from our happy travelers
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <CarouselPrevious className="static size-8 translate-y-0 border-[#D8DEDE] bg-white text-[#4B5563] hover:bg-[#F4F7F7]" />
              <CarouselNext className="static size-8 translate-y-0 border-[#D8DEDE] bg-white text-[#4B5563] hover:bg-[#F4F7F7]" />
            </div>
          </div>

          <CarouselContent className="-ml-4 mt-8 sm:mt-10">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-4 sm:basis-1/2 lg:basis-1/2"
              >
                <div className="flex h-full min-h-[260px] overflow-hidden border border-[#E4E7E7] bg-white sm:min-h-[300px] lg:min-h-[320px]">
                  <div className="flex w-[56%] flex-col justify-between px-5 py-5 sm:px-6">
                    <blockquote className="text-[15px] font-medium leading-[1.55] text-[#1F2937] sm:text-base lg:text-lg">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="mt-5">
                      <p className="text-sm font-medium text-[#15A1BF]">
                        &mdash; {testimonial.name}
                      </p>
                      <p className="mt-1 text-xs text-[#9CA3AF]">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="relative w-[44%] shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
