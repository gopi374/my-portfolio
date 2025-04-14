import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Web Development with AI-Tools",
    issuer: "Sunstone & GOOGLE DEVELOPER GROUPS",
    date: "Jan 2025",
    link: "https://www.linkedin.com/posts/gopi-banjara_webdevelopment-artificialintelligence-continuouslearning-activity-7295743236235550720-xxtg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUShrIBsBzjNM-bGEu1sSJupqJ8IJYyqCg",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQGYnpIInEpXjw/feedshare-shrink_800/B4DZT.vzleHkAg-/0/1739440733896?e=1745452800&v=beta&t=MZDihSxI_q__dUCYD0bzA0KyVcyFe-3VJK8EATqvSu0",
  },
  {
    title: "Git and GitHub! ",
    issuer: "GOOGLE DEVELOPER GROUPS ",
    date: "Dec 2024",
    link: "https://www.linkedin.com/posts/gopi-banjara_git-github-versioncontrol-activity-7273165253411024900-nzjd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUShrIBsBzjNM-bGEu1sSJupqJ8IJYyqCg",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQE6y4SiQqjlTQ/feedshare-shrink_1280/B4DZO95PlKGgAk-/0/1734057722468?e=1745452800&v=beta&t=SBL7OIN1C4G3Jv0OmMy1stJACVNZqsQT66otA7y_eQM",
  },
  {
    title: "Student Development Program",
    issuer: "Sage University indore",
    date: "Mar 2024",
    link: "https://www.linkedin.com/posts/gopi-banjara_sageuniversity-instituteofcomputerapplication-activity-7267362373911416832-GUZJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUShrIBsBzjNM-bGEu1sSJupqJ8IJYyqCg",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQFidnWYcaRKOA/feedshare-shrink_800/feedshare-shrink_800/0/1732674208902?e=1745452800&v=beta&t=VdyC2Cfc7ai5cp0x6v185mUPxRRPwMSYp6QJPfEmYuY",
  },
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
