import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "AWS Secruity",
    issuer: "Amazon Web Services",
    date: "Dec 2025",
    link: "https://www.linkedin.com/in/gopi-banjara/details/certifications/",
    image: '/assets/image3.png',
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    date: "Jan 2026",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_694a6564e83f31dcdb71f5fd_1769346098155_completion_certificate.pdf",
    image: '/assets/image2.png',
  },
  {
    title: "C++ Essentials 1",
    issuer: "CISCO",
    date: "feb 2026",
    link: "https://www.credly.com/badges/d4e6928b-690a-46f0-9599-7b58af251222/linked_in_profile",
    image: '/assets/image1.png',
  },
  {
    title: "Web Development with AI-Tools",
    issuer: "Sunstone & GOOGLE DEVELOPER GROUPS",
    date: "Jan 2025",
    link: "https://www.linkedin.com/posts/gopi-banjara_webdevelopment-artificialintelligence-continuouslearning-activity-7295743236235550720-xxtg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUShrIBsBzjNM-bGEu1sSJupqJ8IJYyqCg",
    image: '/assets/web.png',
  },
  {
    title: "Git and GitHub! ",
    issuer: "GOOGLE DEVELOPER GROUPS ",
    date: "Dec 2024",
    link: "https://www.linkedin.com/posts/gopi-banjara_git-github-versioncontrol-activity-7273165253411024900-nzjd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUShrIBsBzjNM-bGEu1sSJupqJ8IJYyqCg",
    image: '/assets/github.png'  },
  {
    title: "Student Development Program",
    issuer: "Sage University indore",
    date: "Mar 2024",
    link: "https://www.linkedin.com/posts/gopi-banjara_sageuniversity-instituteofcomputerapplication-activity-7267362373911416832-GUZJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUShrIBsBzjNM-bGEu1sSJupqJ8IJYyqCg",
    image: '/assets/dev.png'  },
  // {
  //   title: "JAVA Course - Mastering the Fundamentals",
  //   issuer: "Scaler",
  //   date: "Mar 2024",
  //   link: "https://moonshot.scaler.com/s/image/li/8T4eLJyeF",
  //   image: "https://moonshot.scaler.com/s/image/li/8T4eLNyeF?scope=body",
  // },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
