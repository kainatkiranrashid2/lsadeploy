import { useScroll, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
const WhyLsaPayValues = [
  {
    id: 0,
    icon: {
      src: "src/assets/why_choose_us/pci.png",
      alt: "pci",
    },
    heading: "Simplify Your PCI",
    details:
      "Simplify your PCI-DSS Compliance with our P2PE solution. P2PE means you get to skip   75% of the PCI-DSS certification steps vastly reducing audits making them less complex, less costly, and much quicker.",
  },
  {
    id: 1,
    icon: {
      src: "src/assets/why_choose_us/offline.png",
      alt: "no_wifi_svg",
    },
    heading: "Online / Offline",
    details:
      "No connection, no problem. Acceptify intelligently ensures that all your transactions are swift, secure, and trackable, whether your devices are online or offline.   ",
  },
  {
    id: 2,
    icon: {
      src: "src/assets/why_choose_us/ios.png",
      alt: "online_svg",
    },
    heading: "iOS, Android or Windows",
    details:
      "Whether you have iOS, Android, or Windows devices (Mobile or Tablet), LSAPay simply integrates and supports all platforms.",
  },
  {
    id: 3,
    icon: {
      src: "src/assets/why_choose_us/accept_wristbands.png",
      alt: "Accept Wristbands",
    },
    heading: "Accept Wristbands",
    details:
      "Go Cardless. Issue RFID wristbands to your customers, and automatically assign a payment card improving revenue, checkout speed, customer loyalty and customer experience.",
  },

  {
    id: 4,
    icon: {
      src: "src/assets/why_choose_us/accept_cards.png",
      alt: "Accept Cards/Wallets",
    },
    heading: "Accept Cards/Wallets",
    details:
      "Swipe, tap or insert. LSAPay safely accepts electronic payments whether your customers choose credit cards or e-wallets to run transactions.  ",
  },
  {
    id: 5,
    icon: {
      src: "src/assets/why_choose_us/configurable_data.png",
      alt: "guarantee_svg",
    },
    heading: "Configurable Data",
    details:
      "Add relevant, searchable data to each transaction. An order number, parking lot ID, flight number, event name – whatever is important to you and your customer.",
  },

  {
    id: 6,
    icon: {
      src: "src/assets/why_choose_us/global_payments.png",
      alt: "database_svg",
    },
    heading: "Global Payments",
    details:
      "We are a true enterprise payment solution. We enable you to take local payments in nearly all worldwide currencies. Bring your own processors or we can help you select one.",
  },
  {
    id: 7,
    icon: {
      src: "src/assets/why_choose_us/beautiful_branding.png",
      alt: "Beautiful Branding",
    },
    heading: "Beautiful Branding",
    details:
      "Represent your brand anywhere you take transactions. Brandable cases. Your Colors, Your logo.",
  },
  {
    id: 8,
    icon: {
      src: "src/assets/why_choose_us/recapture_engine.png",
      alt: "Recapture Engine  ",
    },
    heading: "Recapture Engine",
    details:
      "We help you increase lost revenue from declined offline transactions. Our powerful recapture engine resubmits declined transactions until they are approved or expire.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-2.5 1", "0.6 1"],
  });
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <motion.div ref={ref} className="container  rounded-3xl ">
      {/* <Heading mainText="Why choose Acceptify" /> */}

      <div className="grid grid-cols-3 gap-10 ">
        {WhyLsaPayValues.map((item, index) => (
          <div
            className="relative overflow-hidden rounded-[20px] bg-white  px-8 flex flex-col items-start "
            key={index}>
            <div className="absolute -top-40 -right-16 w-64 h-64 border border-[#E1E1E1] rounded-full"></div>
            <div
              className="my-6  bg-white  flex flex-col items-start rounded-2xl "
              key={item.id}>
              <div className="w-[62px] h-[62px]">
                <img
                  src={item.icon.src}
                  alt={item.icon.alt}
                  className="w-full h-full object-contain"
                />
                {/* <motion.video
                  src={item.icon.src}
                  alt={item.icon.alt}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 1 }}
                  loop
                  muted
                  autoPlay
                  // onMouseOver={(event) => event.target.play()}
                  // onMouseOut={(event) => event.target.pause()}
                /> */}
              </div>
              <div>
                <h1
                  className="text-h4  text-dark text-left font-bold font-PP_Mori mb-[8px] mt-[18px]"
                  style={{ lineHeight: "40px", letterSpacing: "-1px" }}>
                  {item.heading}
                </h1>
                <p className="text-[11px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] text-dark text-left font-[500] font-PP_Mori">
                  {item.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
