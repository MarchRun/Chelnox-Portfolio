"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";
import { useInView } from "@/hooks/useInView";
import MegaMendungBg from "./MegaMendungBg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectSlider() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.3);
  const { ref: sliderRef, isInView: sliderInView } = useInView(0.2);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Same gradient background as Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.3) 0%, transparent 50%),
                                         radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.2) 0%, transparent 50%),
                                         radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 dark:opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.2) 0%, transparent 40%),
                                         radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* Mega Mendung Particles */}
      <MegaMendungBg />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-4xl font-bold text-center text-orange-500 dark:text-sky-400 mb-12 transition-all duration-700 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          My Projects
        </h2>

        <div
          ref={sliderRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 delay-100 ${sliderInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="projects-swiper !pb-14"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="py-4">
                <div className="flex justify-center">
                  <ProjectCard project={project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
                .projects-swiper {
                    padding-bottom: 60px !important;
                }

                .projects-swiper .swiper-slide {
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }

                .projects-swiper .swiper-slide-active {
                    transform: scale(1.05);
                    z-index: 10;
                }

                .projects-swiper .swiper-slide:not(.swiper-slide-active) {
                    opacity: 0.6;
                }

                /* Navigation arrows - positioned at bottom with pagination */
                .projects-swiper .swiper-button-prev,
                .projects-swiper .swiper-button-next {
                    top: auto;
                    bottom: 8px;
                    width: 40px;
                    height: 40px;
                    margin: 0;
                    color: #f97316;
                    background: transparent;
                    border: 3px solid #f97316;
                    border-radius: 50%;
                    box-shadow: none;
                    cursor: pointer;
                    z-index: 20;
                }

                .projects-swiper .swiper-button-prev {
                    left: calc(50% - 130px);
                }

                .projects-swiper .swiper-button-next {
                    right: calc(50% - 130px);
                }

                .projects-swiper .swiper-button-prev::after,
                .projects-swiper .swiper-button-next::after {
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 1;
                }

                .projects-swiper .swiper-button-prev:hover,
                .projects-swiper .swiper-button-next:hover {
                    background: #f97316;
                    color: white;
                }

                .projects-swiper .swiper-pagination {
                    bottom: 12px !important;
                }

                .projects-swiper .swiper-pagination-bullet {
                    background: #f97316;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                }

                .projects-swiper .swiper-pagination-bullet-active {
                    background: #f97316;
                    opacity: 1;
                }

                .dark .projects-swiper .swiper-slide:not(.swiper-slide-active) {
                    opacity: 0.4;
                }

                .dark .projects-swiper .swiper-button-prev,
                .dark .projects-swiper .swiper-button-next {
                    color: #38bdf8;
                    border-color: #38bdf8;
                    background: transparent;
                }

                .dark .projects-swiper .swiper-button-prev:hover,
                .dark .projects-swiper .swiper-button-next:hover {
                    background: #38bdf8;
                    color: #1e293b;
                }

                .dark .projects-swiper .swiper-pagination-bullet {
                    background: #38bdf8;
                }
            `}</style>
    </section>
  );
}
