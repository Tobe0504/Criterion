import classes from "./AboutTheTeam.module.css";
import hakeemBakare from "../../Assets/Images/hakeemBakare.svg";
import letamWiwa from "../../Assets/Images/letamWiwa.svg";
import babatunde from "../../Assets/Images/babatunde.svg";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "../../Components/Image/Image";

const AboutTheTeam = () => {
  // Refs
  const infoRef = useRef<HTMLDivElement>(null);

  // Utils
  const team = [
    {
      name: "Hakeem Bakare",
      role: "Managing Director/CEO",
      image: hakeemBakare,
      information: [
        "For 15 years, Hakeem Bakare, the CEO and Managing Director of Criterion Homes has cultivated a distinguished career in real estate, marked by consistent advancement and a demonstrably successful track record. Hakeem's professional journey commenced within Propertymart Real Estate's (2009) sales and marketing division. His exceptional talent fostered rapid progression through diverse roles, equipping him with an unparalleled understanding of the industry's intricacies.",
        "In 2017. Hakeem transitioned to Grenadines Homes as the Regional Director of two subsidiaries in the northern region where he successfully delivered two projects: Grenadines Resort, Katampe, Abuja; and Micheville Estate, Lokogoma District, Abuja. He played a comprehensive leadership role, encompassing sales and marketing, business development, strategic execution, construction management, and the skillful coordination of the two subsidiaries.",
        "In 2022, Hakeem returned to Propertymart's Lagos headquarters to lead a pivotal turnaround project. He empowered middle management and spearheaded sales and marketing efforts. He delivered four major projects totaling approximately 200 units within a two-year period. Additionally, he played a key role in formulating strategy, managing resources (human, financial, and material), business development, overseeing projects, and forging strategic partnerships. Data-driven analyses informed his decision-making.",
        "Hakeem holds a Bachelor of Arts (Education) from the University of Lagos and has further bolstered his expertise through professional development opportunities and certificates from both Lagos and Harvard Business Schools.",
      ],
      hash: "LfD]#lM_tljF_NRjo#WAX9jZRPbI",
    },
    {
      name: "Letam Wiwa, MA, LLB, BL",
      role: "Director",
      image: letamWiwa,
      information: [
        "With an illustrious career spanning nearly three decades in property law and real estate development, Letam Wiwa has continually raised the bar for industry standards and best practices. He has developed high-profile properties in Lagos, Port Harcourt, and Abuja, including the prestigious Katampe Heights Apartments (KHA) 1 and KHA 2, along with other luxury residences. As the Managing Partner at Bogana Chambers and based in Abuja, Letam Wiwa's profound legal expertise and development acumen ensure exceptional value and reliable outcomes for all stakeholders involved.",
      ],
      hash: "L?H2=]xux^Ri_4t7ogV@tQRiRibI",
    },
    {
      name: "Arasi Olayinka",
      role: "Director",
      image: babatunde,
      information: [
        "Demonstrating a remarkable 16-year tenure in real estate and construction, Babatope Akola excels in leading teams and managing projects from inception to completion. With a proven track record of delivering projects on time and within budget, Babatope is proficient in budgeting, risk management, and stakeholder engagement. Renowned for exceptional communication skills and a passion for leveraging innovation and technology to solve complex problems, Babatope is a detail-oriented professional with a track record of developing unique, results-driven initiatives. Both creative and visionary, Babatope has thrived in creating solutions in environments that present constant challenges and diversity.",
      ],
      hash: "LULXS#xu.TV?~Vj[?aog?wWA4nWB",
    },
  ];

  // Router
  const location = useLocation();
  // const params = new URLSearchParams(location.search);
  const [searchparams, setSearchParams] = useSearchParams(location.search);

  const activeMemberId = searchparams.get("activeTeamMember");

  const activeTeamMember = team.find(
    (_, i) => String(i + 1) === activeMemberId
  );

  // Effects
  useEffect(() => {
    const removeDropdownHandler = (e: any) => {
      if (infoRef && !infoRef?.current?.contains(e.target)) {
        searchparams.delete("activeTeamMember");
        setSearchParams(searchparams.toString());
      }
    };
    document.addEventListener("mousedown", removeDropdownHandler);

    return () => {
      document.removeEventListener("mousedown", removeDropdownHandler);
    };

    // eslint-disable-next-line
  }, []);

  // Effects
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={classes.container}>
      <h2 data-aos="fade-up">{"The Team".toUpperCase()}</h2>
      {!activeTeamMember ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {team.map((data, i) => {
            return (
              <div className={classes.member} key={i} data-aos="fade-up">
                <Image
                  src={data.image}
                  alt={data.name}
                  loading="lazy"
                  hash={data.hash}
                  width={248}
                  height={410}
                />
                <p>{data.name}</p>
                <p>{data.role}</p>
                <p
                  onClick={() => {
                    searchparams.set("activeTeamMember", String(i + 1));
                    setSearchParams(searchparams.toString());
                  }}
                >
                  READ MORE
                </p>
              </div>
            );
          })}
        </motion.div>
      ) : (
        <div className={classes.details} ref={infoRef} data-aos="fade-up">
          <img src={activeTeamMember?.image} alt={activeTeamMember?.name} />

          <div>
            <h4>{activeTeamMember?.name}</h4>
            <h6>{activeTeamMember?.role}</h6>
            <div>
              {activeTeamMember?.information?.map((data, i) => {
                return <p key={i}>{data}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutTheTeam;
