import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Film, Camera } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import c1 from "@/assets/c1.jpg";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c4 from "@/assets/c4.jpg";
import c5 from "@/assets/c5.jpg";
import c6 from "@/assets/c6.jpg";
import c7 from "@/assets/c7.jpg";
import c8 from "@/assets/c8.jpg";
import c9 from "@/assets/c9.jpg";
import c10 from "@/assets/c10.jpg";
import c11 from "@/assets/c11.jpg";
import c12 from "@/assets/c12.jpg";
import c14 from "@/assets/c14.jpeg";

import p1 from "@/assets/gallery/1.jpg";
import p2 from "@/assets/gallery/2.jpg";
import p3 from "@/assets/gallery/3.jpg";
import p4 from "@/assets/gallery/4.jpg";
import p5 from "@/assets/gallery/5.jpg";
import p6 from "@/assets/gallery/6.jpg";
import p7 from "@/assets/gallery/7.jpg";
import p8 from "@/assets/gallery/8.jpg";
import p9 from "@/assets/gallery/9.jpg";
import p10 from "@/assets/gallery/10.jpg";
import p11 from "@/assets/gallery/11.jpg";
import p12 from "@/assets/gallery/12.jpg";
import p13 from "@/assets/gallery/13.jpg";
import p15 from "@/assets/gallery/15.jpg";
import p16 from "@/assets/gallery/16.jpg";
import p17 from "@/assets/gallery/17.jpg";
import p18 from "@/assets/gallery/18.jpg";
import p19 from "@/assets/gallery/19.jpg";
import p20 from "@/assets/gallery/20.jpg";
import p21 from "@/assets/gallery/21.jpg";
import p22 from "@/assets/gallery/22.jpg";
import p23 from "@/assets/gallery/23.jpg";
import p24 from "@/assets/gallery/24.jpg";
import p25 from "@/assets/gallery/25.jpg";
import p26 from "@/assets/gallery/26.jpg";
import p27 from "@/assets/gallery/27.jpg";
import p28 from "@/assets/gallery/28.jpg";
import p29 from "@/assets/gallery/29.jpeg";
import p30 from "@/assets/gallery/30.jpeg";
import p31 from "@/assets/gallery/31.jpeg";
import p32 from "@/assets/gallery/32.jpeg";
import p33 from "@/assets/gallery/33.jpeg";
import p34 from "@/assets/gallery/34.jpeg";
import p35 from "@/assets/gallery/35.jpeg";
import p36 from "@/assets/gallery/36.jpeg";
import p37 from "@/assets/gallery/37.jpeg";
import p38 from "@/assets/gallery/38.jpeg";
import p39 from "@/assets/gallery/39.jpeg";
import p40 from "@/assets/gallery/40.jpeg";
import p41 from "@/assets/gallery/41.jpeg";
import p42 from "@/assets/gallery/42.jpeg";
import p43 from "@/assets/gallery/43.jpeg";
import p44 from "@/assets/gallery/44.jpeg";
import p45 from "@/assets/gallery/45.jpeg";
import p46 from "@/assets/gallery/46.jpeg";
import p47 from "@/assets/gallery/47.jpeg";
import p48 from "@/assets/gallery/48.jpeg";
import p49 from "@/assets/gallery/49.jpeg";
import p50 from "@/assets/gallery/50.jpeg";
import p51 from "@/assets/gallery/51.jpeg";
import p52 from "@/assets/gallery/52.jpeg";
import p53 from "@/assets/gallery/53.jpg";
import p54 from "@/assets/gallery/54.jpeg";
import p55 from "@/assets/gallery/55.jpg";
import p56 from "@/assets/gallery/56.jpg";
import p57 from "@/assets/gallery/57.jpg";
import p58 from "@/assets/gallery/58.jpeg";
import p59 from "@/assets/gallery/59.jpeg";
import p60 from "@/assets/gallery/60.jpeg";
import p61 from "@/assets/gallery/61.jpeg";
import p62 from "@/assets/gallery/62.jpeg";
import p63 from "@/assets/gallery/63.jpeg";
import p65 from "@/assets/gallery/65.jpeg";
import p66 from "@/assets/gallery/66.jpeg";
import p67 from "@/assets/gallery/67.jpeg";
import p68 from "@/assets/gallery/68.jpeg";
import p69 from "@/assets/gallery/69.jpeg";
import p70 from "@/assets/gallery/70.jpeg";
import p71 from "@/assets/gallery/71.jpeg";
import p72 from "@/assets/gallery/72.jpeg";
import p73 from "@/assets/gallery/73.jpeg";
import p74 from "@/assets/gallery/74.jpeg";
import p76 from "@/assets/gallery/76.jpeg";
import p77 from "@/assets/gallery/77.jpeg";
import p78 from "@/assets/gallery/78.jpeg";
import p79 from "@/assets/gallery/79.jpeg";
import p80 from "@/assets/gallery/80.jpeg";
import p81 from "@/assets/gallery/81.jpg";
import p82 from "@/assets/gallery/82.jpeg";
import p83 from "@/assets/gallery/83.jpeg";
import p84 from "@/assets/gallery/84.jpg";
import p85 from "@/assets/gallery/85.jpg";
import p86 from "@/assets/gallery/86.jpg";
import p87 from "@/assets/gallery/87.jpg";

import t1 from "@/assets/thumbnail/t-fokus1.png";
import t2 from "@/assets/thumbnail/t-fokus2.png";
import t3 from "@/assets/thumbnail/t-kerkol.png";
import t4 from "@/assets/thumbnail/t-lab4.png";
import t5 from "@/assets/thumbnail/t-rakit.png";
import t6 from "@/assets/thumbnail/t-ukk.png";

const photos = [
  { src: p1, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p2, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p3, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p4, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p5, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p6, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p7, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p8, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p9, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p10, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p11, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p12, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p13, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p15, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p16, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p17, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p18, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p19, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p20, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p21, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p22, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p23, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p24, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p25, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p26, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p27, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p28, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p29, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p30, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p31, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p32, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p33, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p34, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p35, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p36, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p37, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p38, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p39, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p40, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p41, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p42, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p43, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p44, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p45, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p46, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p47, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p48, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p49, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p50, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p51, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p52, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p53, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p54, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p55, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p56, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p57, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p58, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p59, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p60, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p61, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p62, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p63, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p65, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p66, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p67, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p68, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p69, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p70, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p71, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p72, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p73, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p74, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p76, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p77, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p78, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p79, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p80, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p81, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p82, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p83, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p84, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p85, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p86, alt: "Di kelas bersama", w: 800, h: 600 },
  { src: p87, alt: "Di kelas bersama", w: 800, h: 600 }
]

const carrausel = [
  { src: c1, alt: "Tasyakur di kelas bersama", w: 1440, h: 1080 },
  { src: c2, alt: "Hari Guru kelas 10", w: 1440, h: 1080 },
  { src: c3, alt: "Kunjungan industri di Hummatech Malang", w: 1440, h: 1080 },
  { src: c4, alt: "Foto bersama di sekolah sebelum berangkat PKL", w: 1440, h: 1080 },
  { src: c5, alt: "Study tour", w: 1440, h: 1080 },
  { src: c6, alt: "Study tour", w: 1440, h: 1080 },
  { src: c7, alt: "Fashion show", w: 1440, h: 1080 },
  { src: c8, alt: "Foto bersama bu Retno", w: 1440, h: 1080 },
  { src: c9, alt: "Hari Guru kelas XII", w: 1440, h: 1080 },
  { src: c10, alt: "Isra Mi'raj", w: 1440, h: 1080 },
  { src: c11, alt: "Selesai UKK hehe", w: 1440, h: 1080 },
  { src: c12, alt: "Pembuatan BTS kelulusan", w: 1440, h: 1080 },
  { src: c14, alt: "Foto bersama pak Idin hehe", w: 1440, h: 1080 },
]

const videos = [
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503963/j0g7wu9otry0ym36alav.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503960/kr6sd8wosk1srhnpwplr.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503958/krwolqp0hd0k4xlq29w0.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503957/z8avrvy0tiswi2evvibj.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503956/wyeg5naor53b8heecdo5.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503954/fotlg8bbukktfwke3ntt.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503953/w3mybypepc3kpvaxgcfw.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503952/w2ncwonnfhjcbvllhhck.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503951/cahgzmk57vqrt4s1zx7y.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503950/gjzobfm4tcj74oc7l9ad.mp4" },
  { title: "Uji Kompetensi Keahlian", thumbnail: t6, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503850/pvxqxjug2f1wqmxpcnsv.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503946/yvw5v6n96i8rfcgexfef.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503940/pvgb9yo2acxbacfcm88e.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503939/nmyetjmvgews1ruucshp.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503937/wyof7yrftxwxksvnq009.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503937/lidueadcdty2nwnfchhy.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503935/hu8m5ymgiwoegba6itop.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503935/m05q1dy7lct61ziv9zld.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503931/upm4jjxcawzzcgvfnhkx.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503933/rg79opqbmggnds08cvpb.mp4" },
  { title: "Kerja sama itu baik", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503931/jhyx30zb6jpryj7uurtk.mp4" },
  { title: "All About Lab 4", thumbnail: t4, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503928/adeswzxfjue6yxhqn2uy.mp4" },
  { title: "All About Lab 4", thumbnail: t4, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503921/rg0mcyonohssqcaflzg7.mp4" },
  { title: "All About Lab 4", thumbnail: t4, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503921/lqqgklf9j0fsjohxzb8b.mp4" },
  { title: "All About Lab 4", thumbnail: t4, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503920/sysadb0nzz3ktludxfuc.mp4" },
  { title: "All About Lab 4", thumbnail: t4, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503919/rkyccpwv5xu4wnpt4bm7.mp4" },
  { title: "All About Lab 4", thumbnail: t4, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503918/a8027epp8vmcrsbyuqss.mp4" },
  { title: "All About Lab 4", thumbnail: t4, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503917/xjy9j8dqczqwporopgn6.mp4" },
  { title: "All About Lab 4", thumbnail: t4, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503916/pd6wzlneihgx58s1xhyo.mp4" },
  { title: "All About Lab 4", thumbnail: t4, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503915/ry5zyyr0lqppppcm4ljc.mp4" },
  { title: "Fokus guys", thumbnail: t1, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503891/kviwon2djrc36x5eykc6.mp4" },
  { title: "Fokus guys", thumbnail: t2, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503889/du7nq4ziitalsam6txiv.mp4" },
  { title: "Fokus guys", thumbnail: t1, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503888/lyr0rp9qsp0wdu3alc2j.mp4" },
  { title: "Fokus guys", thumbnail: t2, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503885/cp0hu6ivfgcm3dekkbfo.mp4" },
  { title: "Fokus guys", thumbnail: t1, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503885/zurkjx8uiuzyodu1caqw.mp4" },
  { title: "Fokus guys", thumbnail: t2, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503885/ycg5wo11xk81zbsqp2iz.mp4" },
  { title: "Fokus guys", thumbnail: t1, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503885/uko5z5ne0knrurusz0bx.mp4" },
  { title: "Fokus guys", thumbnail: t2, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503884/rqvnty63gxabfzk2slpe.mp4" },
  { title: "Fokus guys", thumbnail: t1, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503884/naicze6hsd20xm4crsie.mp4" },
  { title: "Fokus guys", thumbnail: t2, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503883/ozn4gdpwnxszbqgtyozk.mp4" },
  { title: "Fokus guys", thumbnail: t1, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503882/sysfgzslqkcies8yvjxc.mp4" },
  { title: "Fokus guys", thumbnail: t2, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503882/phg7awnidz8jamfqbolh.mp4" },
  { title: "Fokus guys", thumbnail: t1, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503882/vqzqkgr79pbgnudzluxo.mp4" },
  { title: "Fokus guys", thumbnail: t2, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503881/iwwjugea7tvaakc0zniw.mp4" },
  { title: "Belajar rakit dulu", thumbnail: t5, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503910/tfaf2cxigtvyqsbmvahb.mp4" },
  { title: "Belajar rakit dulu", thumbnail: t5, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503910/qshwgr5rch6zfkvxnoom.mp4" },
  { title: "Belajar rakit dulu", thumbnail: t5, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503908/hymdi4varuslg6r1ka3s.mp4" },
  { title: "Belajar rakit dulu", thumbnail: t5, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503908/skpm2lld2cuscu1r8fer.mp4" },
  { title: "Belajar rakit dulu", thumbnail: t5, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503904/pw2ttqfelu9qg42cqhfa.mp4" },
  { title: "Belajar rakit dulu", thumbnail: t5, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503904/fs2h2fuaqdpjq3hqewwz.mp4" },
  { title: "Belajar rakit dulu", thumbnail: t5, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503899/jviusbnqwt5uomisuoyg.mp4" },
  { title: "Belajar rakit dulu", thumbnail: t5, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503899/qzjnnvcqi3xd7qvatplg.mp4" },
  { title: "Outdoor pokoknya", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503873/ryrtvaeslqr0grxmstvh.mp4" },
  { title: "Outdoor pokoknya", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503871/vduwzsp1rc8u4hwtxfsn.mp4" },
  { title: "Outdoor pokoknya", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503868/n8wngizrm0aj5wt8mdrr.mp4" },
  { title: "Outdoor pokoknya", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503864/jqf5isk74y8l7dpavrrz.mp4" },
  { title: "Outdoor pokoknya", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503859/zwhglt99iwwliqds0s0w.mp4" },
  { title: "Outdoor pokoknya", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503858/filvwecdeliihcvw2yww.mp4" },
  { title: "Outdoor pokoknya", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503856/zrmpuceptk4ashgbzphy.mp4" },
  { title: "Outdoor pokoknya", thumbnail: t3, url: "https://res.cloudinary.com/dhkfrpae6/video/upload/v1776503854/bjv2f9bnxjtswl2rgsrm.mp4" }
];

/* ── Photo Grid with Lightbox (Masonry) ── */
const PhotoGrid = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = () => setLightbox((v) => (v !== null ? (v + photos.length - 1) % photos.length : null));
  const next = () => setLightbox((v) => (v !== null ? (v + 1) % photos.length : null));

  return (
    <>
      {/* Stats bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ImageIcon className="h-4 w-4 text-primary" />
          <span><span className="font-bold text-foreground">{photos.length}</span> momen tersimpan</span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          ✨ Klik foto untuk memperbesar
        </span>
      </div>

      {/* Masonry layout via CSS columns */}
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: Math.min((i % 12) * 0.04, 0.4) }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative mb-3 sm:mb-4 cursor-pointer overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border/40 transition-all hover:shadow-elevated hover:ring-primary/30 break-inside-avoid"
            onClick={() => setLightbox(i)}
          >
            <div className="relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={photo.w}
                height={photo.h}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number badge */}
              <div className="absolute top-2 left-2 flex h-7 min-w-[28px] items-center justify-center rounded-full glass-strong px-2 text-[10px] font-bold text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                {i + 1}
              </div>

              {/* Zoom indicator */}
              <div className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full glass-strong text-primary-foreground opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                <ImageIcon className="h-3.5 w-3.5" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold text-primary-foreground line-clamp-1">{photo.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full glass-strong p-2 text-primary-foreground hover:opacity-80 z-10">
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full glass-strong p-2 sm:p-3 text-primary-foreground hover:opacity-80 z-10">
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full glass-strong p-2 sm:p-3 text-primary-foreground hover:opacity-80 z-10">
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Counter pill */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 rounded-full glass-strong px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary-foreground z-10">
              {lightbox + 1} <span className="opacity-60">/ {photos.length}</span>
            </div>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="flex flex-col items-center gap-3 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className="max-h-[80vh] max-w-[92vw] rounded-2xl object-contain shadow-elevated"
              />
              <p className="rounded-full glass-strong px-4 py-1.5 text-xs sm:text-sm font-medium text-primary-foreground">
                {photos[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── Video Grid ── */
const VideoGrid = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-elevated aspect-[9/16]"
            onClick={() => setActiveVideo(i)}
          >
            <img src={video.thumbnail} alt={video.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors group-hover:bg-foreground/40">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full glass text-primary-foreground shadow-glow"
              >
                <Play className="h-5 w-5 sm:h-7 sm:w-7 ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-3 sm:p-5">
              <p className="text-xs sm:text-sm font-bold text-primary-foreground line-clamp-2">{video.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <button onClick={() => setActiveVideo(null)} className="absolute right-6 top-6 rounded-full glass p-2 text-primary-foreground hover:opacity-80">
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-sm px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <video src={videos[activeVideo].url} controls autoPlay playsInline className="w-full rounded-2xl shadow-elevated aspect-[9/16] object-cover bg-foreground" />
              <p className="mt-4 text-center text-sm font-semibold text-primary-foreground">{videos[activeVideo].title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── Carousel ── */
const GalleryCarousel = () => {
  const allItems = [
    ...carrausel.map((p) => ({ type: "photo" as const, ...p })),
    ...videos.map((v) => ({ type: "video" as const, ...v })),
  ];

  return (
    <div className="mx-auto max-w-4xl px-12">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {allItems.map((item, i) => (
            <CarouselItem key={i}>
              <div className="overflow-hidden rounded-2xl shadow-elevated">
                {item.type === "photo" ? (
                  <img src={item.src} alt={item.alt} className="h-72 w-full object-cover sm:h-[480px] w-[640px]" />
                ) : (
                  <video src={item.url} controls poster={item.thumbnail} className="h-72 w-full object-cover sm:h-[420px]" />
                )}
              </div>
              <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                {item.type === "photo" ? item.alt : item.title}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

/* ── Main Section ── */
const GallerySection = () => (
  <section id="kenangan" className="relative py-24 bg-muted/30 overflow-hidden">
    <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center"
      >
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Camera className="h-3.5 w-3.5" />
          Galeri
        </span>
        <h2 className="mt-4 text-4xl font-black text-foreground sm:text-5xl">Kenangan Kelas</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">Foto & video momen-momen berharga kita bersama</p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <GalleryCarousel />
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="foto" className="w-full">
        <TabsList className="mx-auto mb-10 flex w-fit rounded-xl bg-card p-1 shadow-card">
          <TabsTrigger value="foto" className="flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <ImageIcon className="h-4 w-4" /> Foto
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <Film className="h-4 w-4" /> Video
          </TabsTrigger>
        </TabsList>
        <TabsContent value="foto"><PhotoGrid /></TabsContent>
        <TabsContent value="video"><VideoGrid /></TabsContent>
      </Tabs>
    </div>
  </section>
);

export default GallerySection;
