import type { StaticImageData } from "next/image";
import mosqueExteriorDay from "@/assets/cambridge-mosque-exterior.jpg";
import reflectionImg from "@/assets/mosque-reflection.jpg";
import prayerHallImg from "@/assets/prayer-hall.jpg";
import manSmartphoneImg from "@/assets/man-smartphone-islamic-attire.jpg";
import manUrgentCallImg from "@/assets/man-urgent-phone-call.jpg";
import hijabWomanHoldingPhoneImg from "@/assets/hijab-woman-holding-phone.jpg";
import manHoldingSmartphoneImg from "@/assets/man-holding-smartphone.jpg";
import mosqueHandshakeImg from "@/assets/mosque-handshake.jpg";
import manRelaxedDeskImg from "@/assets/man-relaxed-desk.jpg";
import zareefPosterImg from "@/assets/zareef-poster.jpg";
import eidPrayerCrowdImg from "@/assets/eid-prayer-crowd.jpg";
import hijabWomanTalkingPhoneImg from "@/assets/hijab-woman-talking-phone.jpg";
import cambridgeMosqueInteriorImg from "@/assets/cambridge-mosque-interior.jpg";
import mosqueDuskMinaretsImg from "@/assets/mosque-dusk-minarets.jpg";
import mosqueDomeRoofSkyImg from "@/assets/mosque-dome-roof-sky.jpg";

export const site = {
  name: "MosqueAI",
  url: "https://mosqueai.co.uk",
  description:
    "A 24/7 phone receptionist for UK mosques. Answers routine enquiries, sends urgent calls straight to a real person, and gives your volunteers their time back.",
  phone: { display: "+44 7974 457772", href: "tel:+447974457772" },
  location: "Manchester, UK",
} as const;

export const nav = [
  { href: "/#why", label: "Why MosqueAI" },
  { href: "/#how", label: "How it works" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const images = {
  hero: {
    src: mosqueExteriorDay,
    alt: "The exterior of Cambridge Central Mosque, a modern UK mosque",
  },
  heroSlideshow: [
    { src: mosqueExteriorDay, alt: "The exterior of Cambridge Central Mosque, a modern UK mosque" },
    { src: cambridgeMosqueInteriorImg, alt: "The eco-friendly interior of Cambridge Central Mosque" },
    { src: mosqueDuskMinaretsImg, alt: "A mosque illuminated at dusk" },
    { src: mosqueDomeRoofSkyImg, alt: "Sunlight on a mosque's multi-tiered roof and dome" },
  ],
  valueProp: {
    src: prayerHallImg,
    alt: "A sunlit mosque prayer hall with arched windows and red carpet",
  },
  reflection: {
    src: reflectionImg,
    alt: "",
  },
} as const;

export const benefits = [
  {
    title: "Always available",
    body: "Answers around the clock, including nights, weekends and Eid, when no one is in the office to pick up.",
  },
  {
    title: "No hold music, no voicemail",
    body: "Callers get a real answer on the first ring instead of waiting in a queue or leaving a message nobody returns.",
  },
  {
    title: "The same answer every time",
    body: "Trained on your mosque's own information, so every caller hears the same accurate details, whoever rings.",
  },
  {
    title: "Handles busy periods with ease",
    body: "Takes several calls at once, so Ramadan and Jumu'ah rushes never mean a busy line or a long wait.",
  },
];

export const features: {
  image: StaticImageData;
  alt: string;
  title: string;
  body: string;
}[] = [
  {
    image: manSmartphoneImg,
    alt: "A man in Islamic dress checking his phone",
    title: "Routine enquiries, handled",
    body: "Prayer times, Jumu'ah, madrasah, parking and directions, answered the moment someone calls.",
  },
  {
    image: manUrgentCallImg,
    alt: "A man making an urgent phone call late at night",
    title: "Urgent calls go straight through",
    body: "Janazah arrangements and emergencies are passed to your team immediately.",
  },
  {
    image: hijabWomanHoldingPhoneImg,
    alt: "A woman in a hijab reading a message on her phone",
    title: "A text summary of every call",
    body: "A short note after each call: who rang, what they needed, what happens next.",
  },
  {
    image: manHoldingSmartphoneImg,
    alt: "A man holding up his phone to screen a call",
    title: "Nuisance calls filtered out",
    body: "Sales and spam calls are screened before they reach anyone on your team.",
  },
  {
    image: mosqueHandshakeImg,
    alt: "Two people greeting each other with a handshake at a mosque",
    title: "The right person, every time",
    body: "New Muslim enquiries and fiqh questions go to the Imam or coordinator.",
  },
  {
    image: manRelaxedDeskImg,
    alt: "A man relaxed at his desk, feet up after a busy day",
    title: "Less pressure on volunteers",
    body: "The same questions stop landing on the same few people, every day.",
  },
  {
    image: eidPrayerCrowdImg,
    alt: "A large crowd of worshippers praying together for Eid",
    title: "Open after Isha and on Eid",
    body: "Your line is answered late at night and on bank holidays. Every day of the year.",
  },
  {
    image: hijabWomanTalkingPhoneImg,
    alt: "A woman in a hijab talking naturally on her phone",
    title: "No menus, no button pressing",
    body: "Callers say what they need in their own words and get a clear reply.",
  },
];

export const steps = [
  {
    title: "Discovery",
    body: "A conversation with your committee about your services, your timetable and the calls you get most often.",
  },
  {
    title: "Information setup",
    body: "You send us what you already have: timetables, notices, contact numbers. We organise and configure it.",
  },
  {
    title: "Training and review",
    body: "We test the receptionist thoroughly, then you call it yourselves and sign it off before anyone else does.",
  },
  {
    title: "Go live",
    body: "We connect it to your existing mosque number. Most mosques are answering calls within one to two weeks.",
  },
];

export const valuePoints = [
  {
    title: "Only your mosque's information",
    body: "It answers from details you have given and approved, so callers hear what your committee would tell them.",
  },
  {
    title: "Answering when the office is closed",
    body: "Busy days, late evenings and the hours when nobody is in the building are all covered.",
  },
  {
    title: "Takes action, not just messages",
    body: "It can log a request, pass details to a coordinator and let your team know, so nothing sits in a voicemail.",
  },
];

export const videoTestimonial = {
  name: "Zareef",
  role: "Cheadle Masjid",
  video: "/testimonials.mp4",
  poster: zareefPosterImg,
};

export const faqs = [
  {
    q: "How does it know our prayer times?",
    a: "We connect to your annual prayer timetable, either through an existing feed or a file you upload. Callers get the correct time for Fajr, Jumu'ah or any other prayer on the day they ring.",
  },
  {
    q: "What happens if it can't answer a question?",
    a: "It says so politely, then takes a message or transfers the caller to the right person, following the rules you set during setup.",
  },
  {
    q: "Is the setup complicated?",
    a: "No. Our team does the setup for you. You share your prayer timetable, common questions and contact numbers, and we handle the rest.",
  },
  {
    q: "Can it speak other languages?",
    a: "Yes. It can respond in English, Arabic, Urdu, Bengali and other languages, depending on who calls your mosque.",
  },
  {
    q: "How are urgent calls handled?",
    a: "Funerals, building emergencies and other pressing matters are transferred immediately to the phone numbers you nominate.",
  },
  {
    q: "Can we change its answers later?",
    a: "Yes. Script updates are included with each plan, and our team updates the information whenever your services or notices change.",
  },
  {
    q: "Is there a contract?",
    a: "No long-term contract. Plans run month to month and you can cancel at any time. Annual plans include two months free.",
  },
  {
    q: "How quickly can we start?",
    a: "Most mosques are live within one to two weeks. The main factor is how quickly your committee can send information and review the setup.",
  },
];
