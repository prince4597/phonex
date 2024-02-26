import phone1 from "../../assets/products/phone-1.png";
import phone2 from "../../assets/products/phone-2.png";
import phone3 from "../../assets/products/phone-3.png";
import phone4 from "../../assets/products/phone-4.png";
import phone5 from "../../assets/products/phone-5.png";
import head1 from "../../assets/products/headphone-prod-1.webp";
import head2 from "../../assets/products/headphone-prod-2.webp";
import head3 from "../../assets/products/headphone-prod-3.webp";
import head4 from "../../assets/products/headphone-prod-4.webp";
import head5 from "../../assets/products/headphone-prod-5.webp";
import head6 from "../../assets/products/headphone-prod-6.webp";
import buds1 from "../../assets/products/earbuds-prod-1.webp";
import buds2 from "../../assets/products/earbuds-prod-2.webp";
import buds3 from "../../assets/products/earbuds-prod-3.webp";
import buds4 from "../../assets/products/earbuds-prod-4.webp";
import buds5 from "../../assets/products/earbuds-prod-5.webp";


const products = [
  {
    id: "01",
    title: "Apple iPhone 14 Pro Max (1 TB)",
    price: 150000,
    img: phone1,
    category: "phone",
    quantity: 1,
    desc: "The iPhone 14 Pro Max comes with a stainless steel frame. Due to its IP68 rating, the phone is resistant to dust and water. The mobile also has dimensions of 160.70 mm x 77.60 mm x 7.85 mm (height x width x thickness), and weighs around 240 grams.",
  },

  {
    id: "02",
    title: "Apple iphone 5s",
    price: 19900,
    img: phone2,
    category: "phone",
    quantity: 1,
    desc: "Apple iPhone 5s mobile was launched in November 2012. The phone comes with a 4.00-inch touchscreen display offering a resolution of 640x1136 pixels at a pixel density of 326 pixels per inch (ppi). Apple iPhone 5 is powered by a 1.3GHz dual-core Apple A6 processor. It comes with 1GB of RAM.",
  },

  {
    id: "03",
    title: "Google Pixel 3a",
    price: 14999,
    img: phone3,
    category: "phone",
    quantity: 1,
    desc: "The Google Pixel 3a is positioned as an affordable alternative to Pixel 3. This smartphone promises the same Google Pixel experience but at a relatively affordable",
  },

  {
    id: "04",
    title: "Samsung Galaxy J7",
    price: 17900,
    img: phone4,
    category: "phone",
    quantity: 1,
    desc: "If you have been waiting for a phablet from the Korean electronics giant, the Samsung Galaxy J7 2015 is here. It falls in the mid range portfolio and will expand Samsung's youngest J series. It boasts of a powerful processor along with exciting cameras but misses out a good display. And just like most other phablets, it is too heavy. The new Samsung Galaxy J7 2016 a powerful and elegant smartphone with its excellent design and good features.",
  },

  {
    id: "05",
    title: "HTC One M8 Eye",
    price: 11900,
    img: phone5,
    category: "phone",
    quantity: 1,
    desc: "The HTC One M8 Eye is built for those who prefer ultra powerful performance and for whom money is not a problem. The brilliant cameras make it an exceptional option for shutterbugs. It runs on the latest Android platform and boasts of 4G, Infrared and WiFi connectivity features. You can choose from Glacial Silver, Gunmetal Gray and Amber Gold finishes.",
  },

  {
    id: "06",
    title: "boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver",
    price: 1999,
    img: head1,
    category: "headphone",
    quantity: 1,
    desc: "There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with #DCYou. ",
  },

  {
    id: "07",
    title: "boAt Rockerz 518 Wireless Headphone",
    price: 1799,
    img: head2,
    category: "headphone",
    quantity: 1,
    desc: "Now just stop worrying about Wires hanging from here and there. Pair with any Bluetooth device, connect and play. Dead Batteries can kill your vibe. boAt Rockerz 518 is designed to play Up to 20 hours. Don't just be loud, be loud and clear. We assure you have not heard such powerful bass and vocal clarity from a wireless comfortable headphone with Extra Comfort Ear cups. The boAt Super Bass Rockerz 518 Wireless Headphones will make your listening experience personal and for real. So, just plug it in and Plug into Nirvana.",
  },

  {
    id: "08",
    title: "Rockerz 550 Over Ear Bluetooth Headphone",
    price: 1599,
    img: head3,
    category: "headphone",
    quantity: 1,
    desc: "boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX. ",
  },

  {
    id: "09",
    title: "boAt Wave Neo | 1.69 HD Display, Upto 7 Days Battery Life, IP68 Sweat",
    price: 1799,
    img: head4,
    category: "headphone",
    quantity: 1,
    desc: "Introducing a #NeoWay to live smart and stylish – the all-new Watch Wave Neo. Check everything that you need in a smartwatch and then get some more. Packed with a 1.69 inches screen, 550 nits brightness & 2.5D Curved Display – Watch Wave Neo will make your world better & brighter.",
  },

  {
    id: "10",
    title: "boAt Iris | Round Dial Smart Watch with 1.39 AMOLED Display, Multiple Watch Faces",
    price: 4499,
    img: head5,
    category: "headphone",
    quantity: 1,
    desc: "Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. Thrive through your success with all the important notifications on your smartwatch. The timeless look comes with multiple watch faces and strap options to go with all versions of your style. Nail every sport you play with 8 active sports modes tracking your performance. Don’t worry about sweat and water, it is IP68. Being healthy is an imperative when your watch has a heart rate monitor, oxygen level monitor, sedentary reminder tracking your health 24x7. Pump up your style!",
  },

  {
    id: "11",
    title: "boAt Vertex | Smartwatch with Fitness Trackers, 1.69 HD Display, Sleep Tracking, 100+ Watch Faces",
    price: 2299,
    img: head6,
    category: "headphone",
    quantity: 1,
    desc: "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.",
  },

  {
    id: "12",
    title: "TRebel Airdopes 141 | 8mm drivers, Upto 42 Hours Total Playback, ENxTM Technology, ASAPTM Charge",
    price: 1499,
    img: buds1,
    category: "ear",
    quantity: 1,
    desc: "Hello sassy and fierce ladies! We see you soaring high for your dreams, and we want to support them. Let TRebel Airdopes 141 be your biggest cheerleader while you win the world with your go-getter attitude! Shun their opinions by indulging in your rhythm with the 8mm Dynamic Drivers. Ace those business calls with its ENx™ Technology that makes you heard every time. ASAP™ Charge empowers you with 75 minutes of playback with just 5 minutes of charging. IPX4 makes it easier to roll in the good times as you rock that sweat, changing your lifestyle. Connect instantly with its IWP™ Technology & keep everything under control with its Quick Response Touch.",
  },

  {
    id: "13",
    title: "Airdopes 131 DC Edition with 13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music",
    price: 1399,
    img: buds2,
    category: "ear",
    quantity: 1,
    desc: "Sleek. Comfortable. Stylish. And a splash of amazing acoustic powers. Airdopes 131 true wireless earbuds are equipped with 13mm drivers that offer you beyond the ordinary sound. Keep going on for long like the DC heroes with its 12 hours of capacity. Plug-in be prepared to be awe struck",
  },

  {
    id: "14",
    title: "boAt Airdopes 141 Pro | 12mm Drivers, Upto 45 Hours Playback, Quad Mics with ENx™️ Technology",
    price: 1499,
    img: buds3,
    category: "ear",
    quantity: 1,
    desc: "Take a step up on your listening experience with boAt Airdopes 141 Pro. Start playing your tracks on our best wireless earbuds and don't stop with a total playback of 45 hours. Never miss a beat with boAt Signature Sound on our all-new boAt Airdopes so that every song that you listen to shines through. Plug-in and live the sound.",
  },

  {
    id: "15",
    title: "boAt Airdopes 441 | Wireless Earbuds with 6mm Driver For Immersive Sound",
    price: 2499,
    img: buds4,
    category: "ear",
    quantity: 1,
    desc: "Plug Into Nirvana with boAt Airdopes 441 TWS earbuds to enjoy your music in a truly wireless way. It has the IWP (Insta Wake N’ Pair) Technology, meaning as soon as one opens the charging case lid, the best earbuds power on and enter connection mode. The TWS Airdopes 441 come equipped with 6mm drivers for immersive sound. It offers a seamless user experience via its capacitive touch controls",
  },

  {
    id: "16",
    title: "eaboAt TRebel Airdopes 402 | In-Ear Earbuds With 10mm Driver, IPX4 Sweat",
    price: 1999,
    img: buds5,
    category: "ear",
    quantity: 1,
    desc: "The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality. These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with total 30 hours of playtime and Bluetooth V5.2 that never lets you down. Let yourself loose and free, choosing for your own self, with this immersive audio built just to make you experience the unreal boAt signature sound. Weighing as light as opinions should, TRebel Airdopes 402 with its 450mAh battery charging case will assist you in blocking the outside world for a long time.",
  },
];

export default products;
