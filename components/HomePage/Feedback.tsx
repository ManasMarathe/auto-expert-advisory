"use client";

import React from "react";
import { FeedbackData as data } from "@/utils/data";
import {
  Play,
  ArrowRight,
  PlayIcon,
  Pause,
  PauseIcon,
} from "@phosphor-icons/react";
import useInView from "@/hooks/useInView";

const VideoCard = ({ video }: { video: { src: string; label: string } }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch((err) => {
          console.error("Playback failed:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="group relative cursor-pointer" onClick={handleTogglePlay}>
      <div className="relative aspect-[3/4.5] overflow-hidden rounded-sm bg-dark">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isPlaying
              ? "opacity-100"
              : "opacity-80 group-hover:opacity-100 group-hover:scale-105"
          }`}
          loop
          playsInline
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={video.src} type="video/mp4" />
        </video>

        {/* Gradient Overlay - Hidden when playing */}
        <div
          className={`absolute inset-0 bg-linear-to-t from-dark/90 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Play Button Overlay - Visible only on Laptops */}
        {!isPlaying && (
          <div className="absolute inset-0 hidden lg:flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
              <PlayIcon size={24} weight="fill" className="text-white ml-1" />
            </div>
          </div>
        )}

        {/* Pause Button Overlay - Visible only on Laptops (on hover) */}
        {isPlaying && (
          <div className="absolute inset-0 hidden lg:flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-500">
              <PauseIcon size={24} weight="fill" className="text-white" />
            </div>
          </div>
        )}

        {/* Content Info - Hidden when playing */}
        {!isPlaying && (
          <div className="absolute bottom-0 left-0 w-full p-8 pointer-events-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="h-0.5 w-12 bg-secondary mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
            {/* <p className="heading-text text-lg text-white font-medium tracking-wide">
              {video.label}
            </p> */}
          </div>
        )}
      </div>
    </div>
  );
};

const Feedback = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  const videos = [
    { src: "/VID-2.mp4", label: "Heritage Preservation" },
    { src: "/VID-(1).mp4", label: "Mechanical Precision" },
    { src: "/VID-3.mp4", label: "Bespoke Care" },
  ];

  return (
    <section
      ref={ref}
      className={`section-padding bg-cream relative overflow-hidden ${
        isVisible
          ? "animate__animated animate__fadeInUp animate__delay-0.8s"
          : "opacity-0"
      }`}
      id="feedback"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-24 gap-12 text-center lg:text-left">
          <div className="space-y-6 max-w-2xl">
            <p className="logo-text text-md text-secondary tracking-[0.3em] uppercase">
              {data.title}
            </p>
            <h2 className="heading-text text-5xl md:text-6xl lg:text-7xl text-dark leading-[0.95] tracking-tight">
              Why you should <br />
              <span className="text-primary italic font-serif">
                become a member?
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Feedback;
