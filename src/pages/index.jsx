import Image from "next/image";
import RootLayout from "@/app/layout";
import { useState, useEffect } from 'react';
import Link from "next/link";
import Card from "@/app/components/card.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);


  // const FAQItem = ({ question, answer }) => {
  //     const [isCollapsed, setIsCollapsed] = useState(true);

  //     const toggleCollapse = () => {
  //         setIsCollapsed(!isCollapsed);
  //     };

  //     return (
  //         // <div className="mb-4">
  //         //     <button
  //         //         className="flex justify-between items-center text-left bg-white border border-black border-solid font-bold p-2 md:py-2 md:px-4 rounded-md text-xs md:text-sm"
  //         //         onClick={toggleCollapse}
  //         //     >
  //         //         <span>{question}</span>
  //         //         <span className="ml-4">
  //         //           {isCollapsed ? (
  //         //               <svg
  //         //                   xmlns="http://www.w3.org/2000/svg"
  //         //                   viewBox="0 0 448 512"
  //         //                   className="w-4 h-4"
  //         //               >
  //         //                   <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
  //         //               </svg>
  //         //           ) : (
  //         //               <svg
  //         //                   xmlns="http://www.w3.org/2000/svg"
  //         //                   viewBox="0 0 448 512"
  //         //                   className="w-4 h-4"
  //         //               >
  //         //                   <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
  //         //               </svg>
  //         //           )}
  //         //       </span>
  //         //     </button>
  //         //     <div
  //         //         className={`bg-gray-200 p-2 md:p-4 rounded w-fit ${isCollapsed ? 'hidden' : 'block'}`}
  //         //     >
  //         //         {answer}
  //         //     </div>
  //         // </div>
  //       // <div className="grid grid-cols-2 gap-4">
  //       <div>
  //         <div>
  //           <button
  //             className="flex justify-between items-center text-left w-full bg-white border border-black border-solid font-bold p-2 md:py-2 md:px-4 rounded-md text-xs md:text-sm"
  //             onClick={toggleCollapse}
  //           >
  //             <span>{question}</span>
  //             <span className="ml-4">
  //               {isCollapsed ? (
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   viewBox="0 0 448 512"
  //                   className="w-4 h-4"
  //                 >
  //                   <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
  //                 </svg>
  //               ) : (
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   viewBox="0 0 448 512"
  //                   className="w-4 h-4"
  //                 >
  //                   <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
  //                 </svg>
  //               )}
  //             </span>
  //           </button>
  //         </div>
  //         <div>
  //           <div
  //             className={`bg-gray-200 p-2 md:p-4 rounded w-fit ${
  //               isCollapsed ? 'hidden' : 'block'
  //             }`}
  //           >
  //             {answer}
  //           </div>
  //         </div>
  //       </div>
   
  //     );
  // };

  // const FAQ = () => {
  //     return (
  //         <div className="grid grid-cols-2 gap-4">
  //             <FAQItem
  //                 question="Perangkat apa sih DigiGate Router Series?"
  //                 answer="DigiGate Router Series adalah perangkat server yang dirancang khusus untuk networking berbasis open-source dengan arsitektur x86. Anda dapat menginstal sistem operasi yang mendukung arsitektur x86 pada perangkat ini."
  //             />
  //             <FAQItem
  //                 question="Dimana saya bisa memesan DigiGate?"
  //                 answer="Anda dapat memesan perangkat DigiGate melalui platform e-commerce kami atau menghubungi admin kami."
  //             />
  //             <FAQItem
  //                 question="Berapa lama waktu pengiriman setelah saya melakukan pemesanan?"
  //                 answer="Waktu pengiriman tergantung ketersediaan stock perangkat. Untuk informasi lebih lanjut mengenai estimasi waktu pengiriman, silakan hubungi tim penjualan kami."
  //             />
  //             <FAQItem
  //                 question="Bagaimana cara menginstal sistem operasi pada perangkat ini?"
  //                 answer="Anda dapat menginstal sistem operasi pada perangkat ini menggunakan media instalasi seperti USB drive atau DVD. Instruksi instalasi biasanya dapat ditemukan dalam panduan pengguna atau dokumentasi yang disertakan dari sistem operasi."
  //             />
  //             <FAQItem
  //                 question="Apabila perangkat saya mengalami kerusakan, berapa lama garansi yang akan berlaku?"
  //                 answer="Untuk kerusakan yang umum seperti bagian power supply, SFP Port, kipas, dan lain-lain, kami memiliki suku cadang yang tersedia untuk penggantian segera. Anda dapat mengajukan klaim garansi dalam waktu yang singkat."
  //             />
  //             <FAQItem
  //                 question="Bisakah saya meminta instalasi OS dan konfigurasi pada perangkat yang akan saya beli?"
  //                 answer="Tentu saja, Anda dapat berkonsultasi mengenai biaya konfigurasi dan kompatibilitas dengan kebutuhan layanan yang Anda inginkan."
  //             />
  //             <FAQItem
  //                 question="Saya ingin membeli, tetapi saya ragu perangkat yang saya beli tidak mampu mengatasi jaringan saya. Apa yang bisa saya lakukan?"
  //                 answer="Jangan khawatir, kami menawarkan garansi refund selama 7 hari apabila perangkat yang disarankan oleh admin kami tidak mampu mengatasi kebutuhan jaringan Anda."
  //             />
  //         </div>
  //     );
  // };

  const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="grid grid-cols-2 gap-4 md:gap-6">
            {faqData.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isCollapsed={openIndex !== index}
                    toggleCollapse={() => toggleCollapse(index)}
                />
            ))}
        </div>
    );
  };

  const FAQItem = ({ question, answer, isCollapsed, toggleCollapse }) => {
    return (
        <div className="grid" style={{ gridRow: 'span 1' }}>
            <button
                className="flex justify-between items-center text-left h-fit bg-white border border-slate-200 border-solid shadow-md font-bold p-2 md:py-2 md:px-4 rounded-md text-xs md:text-sm"
                onClick={toggleCollapse}
            >
                <span>{question}</span>
                <span className="ml-4">
                    {isCollapsed ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-4 h-4"
                        >
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-4 h-4"
                        >
                            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                        </svg>
                    )}
                </span>
            </button>
            <div
                className={`bg-white shadow-md p-2 md:p-4 rounded w-fit ${isCollapsed ? 'hidden' : 'block'}`}
            >
                {answer}
            </div>
        </div>
    );
  };

  const faqData = [
      {
          question: "Perangkat apa sih DigiGate Router Series?",
          answer: "DigiGate Router Series adalah perangkat server yang dirancang khusus untuk networking berbasis open-source dengan arsitektur x86. Anda dapat menginstal sistem operasi yang mendukung arsitektur x86 pada perangkat ini."
      },
      {
          question: "Dimana saya bisa memesan DigiGate?",
          answer: "Anda dapat memesan perangkat DigiGate melalui platform e-commerce kami atau menghubungi admin kami."
      },
      {
          question: "Berapa lama waktu pengiriman setelah saya melakukan pemesanan?",
          answer: "Waktu pengiriman tergantung ketersediaan stock perangkat. Untuk informasi lebih lanjut mengenai estimasi waktu pengiriman, silakan hubungi tim penjualan kami."
      },
      {
          question: "Bagaimana cara menginstal sistem operasi pada perangkat ini?",
          answer: "Anda dapat menginstal sistem operasi pada perangkat ini menggunakan media instalasi seperti USB drive atau DVD. Instruksi instalasi biasanya dapat ditemukan dalam panduan pengguna atau dokumentasi yang disertakan dari sistem operasi."
      },
      {
          question: "Apabila perangkat saya mengalami kerusakan, berapa lama garansi yang akan berlaku?",
          answer: "Untuk kerusakan yang umum seperti bagian power supply, SFP Port, kipas, dan lain-lain, kami memiliki suku cadang yang tersedia untuk penggantian segera. Anda dapat mengajukan klaim garansi dalam waktu yang singkat."
      },
      {
          question: "Bisakah saya meminta instalasi OS dan konfigurasi pada perangkat yang akan saya beli?",
          answer: "Tentu saja, Anda dapat berkonsultasi mengenai biaya konfigurasi dan kompatibilitas dengan kebutuhan layanan yang Anda inginkan."
      },
      {
          question: "Saya ingin membeli, tetapi saya ragu perangkat yang saya beli tidak mampu mengatasi jaringan saya. Apa yang bisa saya lakukan?",
          answer: "Jangan khawatir, kami menawarkan garansi refund selama 7 hari apabila perangkat yang disarankan oleh admin kami tidak mampu mengatasi kebutuhan jaringan Anda."
      },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };  

  const whatsApp = 'https://wa.me/6281511207866?text=Hallo,%20Saya%20tertarik%20dengan%20product%20anda';

  return (
    <RootLayout>
      <>
        <div>
          <Link href={`${whatsApp}`} target="_blank" className="fixed bottom-4 right-4 bg-sky-400 border border-sky-600 hover:bg-sky-200 border-solid rounded-full p-2 z-50">
              <span className="absolute -top-0 -right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 border border-sky-600 border-solid"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="" width="40" height="40"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
          </Link>
        </div>
        <section id="hero-section" className="relative">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mx-auto w-full h-[420px] lg-[560px] xl:h-[640px] bg-gray-400 animate-pulse"></div>
            </div>
          )}
          <Image src="/Assets/images/banner1.jpeg" alt="hero image" width="1400" height="800" className={`${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 object-cover w-full h-[420px] lg-[560px] xl:h-[640px] brightness-[.15] blur-[2px]`} onLoad={handleImageLoaded}/>
          <div className="container mx-auto hero-text absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
          <div className="font-bold text-lg md:text-xl lg:text-6xl text-center">
            <h1>Kami hadir untuk membantu Anda<br/>
            <span className="text-sky-600">dengan menyediakan produk terbaik</span>
            <br/>berdasarkan kebutuhan Anda.</h1>
          </div>
          <div className="font-normal text-[12px] lg:text-xl">
            <h5 className="mt-2">Sejak berdiri, kami telah fokus</h5>
            <h5>pada penyediaan produk terbaik yang disesuaikan dengan kebutuhan Anda.</h5>
          </div>
            <Link href="#about">
              <div className="absolute bottom-10 animate-bounce bg-transparent border border-sky-600 border-solid rounded-2xl mx-auto px-1 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="text-sky-600 fill-sky-600 stroke-sky-600" width={20} height={20}><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
              </div>
            </Link>
          </div>
        </section>
        
        <section id="about" className=" bg-white py-10 md:py-20">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
            <div className="mb-4 lg:mb-0 lg:w-1/2 lg:pr-4">
            <h1 className="text-xl font-bold md:text-3xl my-4"><span className="text-sky-600">DigiGate</span> hadir untuk <br/>menyediakan solusi bagi Anda</h1>
            <p className="leading-6 md:leading-8 tracking-wide text-sm md:text-base">Didirikan pada tahun 2023, PT. Gerbang Digital Indonesia adalah perusahaan yang berkomitmen untuk menyediakan solusi jaringan terbaru. Produk andalan kami, DigiGate, mencakup berbagai jenis perangkat jaringan, termasuk perangkat jaringan open-source, serta perangkat OLT dan ONU. <span className="font-bold">Pilih DigiGate untuk kualitas, daya tahan, dan harga yang tak tertandingi dalam solusi jaringan. </span>Bergabunglah dengan kami saat kami membuka jalan menuju masa depan yang lebih terhubung dan makmur. Perkuat jaringan Anda dengan DigiGate.
            </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image src="/Assets/images/animasi1-nbg.png" alt="animasi1" width={400} height={400} />
            </div>
          </div>
        </section>

        <section id="product" className="container mx-auto py-10 md:py-20 px-4">
          <h1 className="text-xl font-semibold md:text-2xl">Produk Kami</h1>
          <div className="container mx-auto grid justify-center grid-cols-1 gap-4 mt-8 md:grid-cols-3">
          {/* <div className="container mx-auto flex"> */}
            <Card
              title="OLT"
              description="OLT (Optical Line Terminal) adalah perangkat jaringan pada akses serat optik pasif (PON), yang menghubungkan operator dengan perangkat pelanggan seperti ONU atau ONT untuk mengelola koneksi."
              imageUrl="/Assets/images/olt.png"
            />
            <Card
              title="ONU"
              description="ONU (Optical Network Unit) adalah perangkat pada akses serat optik pasif (PON) di sisi pelanggan, menghubungkan jaringan operator dengan perangkat pelanggan. Router dilengkapi AC1200 untuk konektivitas tangguh dan QoS."
              imageUrl="/Assets/images/onu.webp"
            />
            <Card
              title="ROUTER"
              description="Router adalah perangkat jaringan untuk mengirimkan paket data antar jaringan dengan menganalisis alamat tujuan dan memilih jalur terbaik, beroperasi pada tingkat jaringan (Layer 3) dalam model OSI."
              imageUrl="/Assets/images/netgear.png"
            />
          </div>
        </section>

        {/* <section id="supplier" className="container mx-auto p-4 my-8 lg:my-10 ">
          <h1 className="text-xl font-semibold md:text-2xl mb-8 md:mb-10">Our Supplier</h1>
          <Slider {...sliderSettings}>
            <div className="lg:w-48 h-auto flex justify-center align-middle p-4">
              <Image src="/Assets/icons/logo-asus.png" alt="Logo Asus" layout="responsive" width={100} height={100}/>
            </div>
            <div className="lg:w-48 h-auto flex justify-center align-middle p-4">
              <Image src="/Assets/icons/logo-netgear.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
            <div className="lg:w-48 h-auto flex justify-center align-middle p-4">
              <Image src="/Assets/icons/logo-ProLink.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
            <div className="lg:w-48 h-auto flex justify-center align-middle p-4">
              <Image src="/Assets/icons/logo-tplink.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
            <div className="lg:w-48 h-auto flex justify-center align-middle p-4">
              <Image src="/Assets/icons/logo-xiaomi.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
            <div className="lg:w-48 h-auto flex justify-center align-middle p-4">
              <Image src="/Assets/icons/totolink.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
          </Slider>
        </section> */}

        <section id="faq" className="bg-white py-10 md:py-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-semibold md:text-2xl mb-4">Pertanyaan Umum</h1>
            <FAQ/>
          </div>
        </section>
      </>
    </RootLayout>
  );
}
