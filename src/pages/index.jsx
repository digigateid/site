import Image from "next/image";
import RootLayout from "@/app/layout";
import { useState, useEffect } from 'react';
import Link from "next/link";

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


  const FAQItem = ({ question, answer }) => {
      const [isCollapsed, setIsCollapsed] = useState(true);

      const toggleCollapse = () => {
          setIsCollapsed(!isCollapsed);
      };

      return (
          <div className="mb-4">
              <button
                  className="flex justify-between items-center text-left bg-white border border-black border-solid font-bold p-2 md:py-2 md:px-4 rounded-md text-xs md:text-sm"
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
                  className={`bg-gray-200 p-2 md:p-4 rounded w-fit ${isCollapsed ? 'hidden' : 'block'}`}
              >
                  {answer}
              </div>
          </div>
      );
  };

  const FAQ = () => {
      return (
          <div>
              <FAQItem
                  question="Perangkat apa sih DigiGate Router Series?"
                  answer="DigiGate Router Series adalah perangkat server yang dirancang khusus untuk networking berbasis open-source dengan arsitektur x86. Anda dapat menginstal sistem operasi yang mendukung arsitektur x86 pada perangkat ini."
              />
              <FAQItem
                  question="Saya ingin membeli, tetapi saya ragu perangkat yang saya beli tidak mampu mengatasi jaringan saya. Apa yang bisa saya lakukan?"
                  answer="Jangan khawatir, kami menawarkan garansi refund selama 7 hari apabila perangkat yang disarankan oleh admin kami tidak mampu mengatasi kebutuhan jaringan Anda."
              />
              <FAQItem
                  question="Apabila perangkat saya mengalami kerusakan, berapa lama garansi yang akan berlaku?"
                  answer="Untuk kerusakan yang umum seperti bagian power supply, SFP Port, kipas, dan lain-lain, kami memiliki suku cadang yang tersedia untuk penggantian segera. Anda dapat mengajukan klaim garansi dalam waktu yang singkat."
              />
              <FAQItem
                  question="Bisakah saya meminta instalasi OS dan konfigurasi pada perangkat yang akan saya beli?"
                  answer="Tentu saja, Anda dapat berkonsultasi mengenai biaya konfigurasi dan kompatibilitas dengan kebutuhan layanan yang Anda inginkan."
              />
              <FAQItem
                  question="Dimana saya bisa memesan DigiGate?"
                  answer="Anda dapat memesan perangkat DigiGate melalui platform e-commerce kami atau menghubungi admin kami."
              />
              <FAQItem
                  question="Berapa lama waktu pengiriman setelah saya melakukan pemesanan?"
                  answer="Waktu pengiriman tergantung ketersediaan stock perangkat. Untuk informasi lebih lanjut mengenai estimasi waktu pengiriman, silakan hubungi tim penjualan kami."
              />
              <FAQItem
                  question="Bagaimana cara menginstal sistem operasi pada perangkat ini?"
                  answer="Anda dapat menginstal sistem operasi pada perangkat ini menggunakan media instalasi seperti USB drive atau DVD. Instruksi instalasi biasanya dapat ditemukan dalam panduan pengguna atau dokumentasi yang disertakan dari sistem operasi."
              />
          </div>
      );
  };

  const whatsApp = 'https://wa.me/6281511207866?text=Hallo,%20Saya%20tertarik%20dengan%20product%20anda';

  return (
    <RootLayout>
      <>
        <div>
          <Link href={`${whatsApp}`} target="_blank" className="fixed bottom-4 right-4 bg-sky-400 border border-sky-600 hover:bg-sky-200 border-solid rounded-full p-2 z-50yjhyu">
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
            <div className="font-bold text-2xl lg:text-6xl">
              <h1>We are here to help you</h1>
              <h1 className="text-sky-600">by providing the best products</h1>
              <h1>based on your needs.</h1>
            </div>
            <div className="font-normal text-[12px] lg:text-xl">
              <h5 className="mt-2">Since our establishment, we have been focused</h5>
              <h5>on delivering the best products tailored to your needs.</h5>
            </div>
            <Link href="#about">
              <div className="absolute bottom-10 animate-bounce bg-transparent border border-sky-600 border-solid rounded-2xl mx-auto px-1 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="text-sky-600 fill-sky-600 stroke-sky-600" width={20} height={20}><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
              </div>
            </Link>
          </div>
        </section>
        
        <section id="about" className=" bg-white py-20">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
            <div className="mb-4 lg:mb-0 lg:w-1/2 lg:pr-4">
              {/* <h1 className="text-lg text-gray-400 font-bold md:text-xl">About Us</h1> */}
              <h1 className="text-xl font-bold md:text-3xl my-4"><span className="text-sky-600">DigiGate</span> is here to <br/>give you a solution</h1>
              <p className="leading-6 md:leading-8 tracking-wide text-sm md:text-base">Didirikan pada tahun 2023, PT. Gerbang Digital Indonesia adalah perusahaan pionir yang berkomitmen untuk menyediakan solusi jaringan terkini. Produk utama kami, DigiGate, mencakup berbagai jenis perangkat jaringan, termasuk perangkat jaringan sumber terbuka, serta perangkat OLT dan ONU.
              <span className="font-bold"> Pilih DigiGate untuk kualitas, daya tahan, dan harga yang tak tertandingi dalam solusi jaringan.</span> Bergabunglah dengan kami saat kami membuka jalan menuju masa depan yang lebih terhubung dan sejahtera.
              Kuatkan jaringan Anda dengan DigiGate.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image src="/Assets/images/animasi1-nbg.png" alt="animasi1" width={400} height={400} />
            </div>
          </div>
        </section>

        <section id="product" className="container mx-auto py-8 lg:pt-20 px-4">
          <h1 className="text-xl font-semibold md:text-2xl">Our Product</h1>
          <div className="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/asus.png" alt="router asus" layout="responsive" width={100} height={100} className="object-cover w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">ASUS RT-AX3000</h1>
                <p className=" text-sm line-clamp-5">Router RT-AX3000 menawarkan kecepatan WiFi yang sangat tinggi. Total kecepatan jaringan yang ditawarkannya adalah sekitar 3000 Mbps — 574 Mbps pada pita 2,4 GHz dan 2402 Mbps pada pita 5 GHz.</p>
              </div>
            </div>
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/tplink.png" alt="router tp-link" layout="responsive" width={100} height={100} className="w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">TP-Link TL-WR940N</h1>
                <p className=" text-sm line-clamp-5">Router TL-WR940N yang dijual di angka Rp 300 ribuan menawarkan kecepatan jaringan hingga 450 Mbps, ideal untuk aplikasi sensitif gangguan seperti streaming video HD. Router ini dibekali dengan tiga buah antena yang berfungsi meningkatkan ketahanan dan stabilitas nirkabel.</p>
              </div>
            </div>
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/netgear.png" alt="router netgear" layout="responsive" width={100} height={100} className="w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">Netgear RAX50 Nighthawk</h1>
                <p className=" text-sm line-clamp-5">Netgear RAX50 Nighthawk yang dijual di angka Rp 3 jutaan ini juga dilengkapi dengan sejumlah fitur canggih. Salah satunya adalah dukungan keamanan siber Netgear Armor yang menjaga jaringan dan data pribadi Anda aman dari ancaman online.</p>
              </div>
            </div>
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/linksys.png" alt="router linksys" layout="responsive" width={100} height={100} className="w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">Linksys E5600</h1>
                <p className=" text-sm line-clamp-5">Dengan harga di angka Rp 700 ribuan, router WiFi 5 Linksys E5600 dapat mencakup ruang hingga 1.000 kaki persegi, menangani 10 lebih perangkat, dan kecepatan hingga 1,2 Gbps. Lalu ada teknologi Dual-Band untuk menggandakan bandwidth untuk menghindari gangguan dan memaksimalkan throughput.</p>
              </div>
            </div>
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/totolink.png" alt="router xiaomi" layout="responsive" width={100} height={100} className="w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">Totolink N300RT</h1>
                <p className=" text-sm line-clamp-5">Router N300RT dilengkapi dengan antena ganda untuk kestabilan performa saat jaringan digunakan secara bersamaan oleh beberapa perangkat. Menariknya, router ini memungkinkan orang tua untuk mengatur jadwal akses jaringan WiFi di rumah, sehingga penggunaan internet untuk anak-anak dapat dikontrol.</p>
              </div>
            </div>
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/prolink.png" alt="router xiaomi" layout="responsive" width={100} height={100} className="w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">Prolink PRN3009</h1>
                <p className=" text-sm line-clamp-5">Prolink PRN3009 adalah salah satu router WiFi yang populer di merek ini. Router yang dijual di angka Rp 200 ribuan ini memiliki antena 7dBi yang diperluas yang memiliki kinerja dan cakupan yang bagus. Kecepatan jaringannya adalah hingga 300 Mbps.</p>
              </div>
            </div>
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/tenda.jpg" alt="router xiaomi" layout="responsive" width={100} height={100} className="w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">Tenda AC6</h1>
                <p className=" text-sm line-clamp-5">Dengan harga di kisaran Rp 400 ribuan, router Tenda AC6 memiliki kemampuan 2x menembus dinding daripada router normal dengan amplifier daya yang terpisah, teknologi beamforming+ canggih dan 4x antena 5dBi HG.</p>
              </div>
            </div>
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/mercusys.png" alt="router xiaomi" layout="responsive" width={100} height={100} className="w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">Mercusys MW305R</h1>
                <p className=" text-sm line-clamp-5">Mercusys MW305R memiliki tiga antena 5dBi yang mampu meningkatkan kekuatan, ukuran, dan stabilitas sinyal nirkabel. Selain itu, adanya halaman web yang intuitif memudahkan proses penyetelan router ini.</p>
              </div>
            </div>
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/dlink.png" alt="router xiaomi" layout="responsive" width={100} height={100} className="w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">D-Link DIR-612</h1>
                <p className=" text-sm line-clamp-5">D-Link DIR-612 menjadi salah satu router terlaris dari merek ini. Router dengan kecepatan hingga 300 Mbps ini memiliki keistimewaan berupa adanya mode repeater yang memungkinkan pengguna untuk memperluas jaringan nirkabel di rumah agar koneksi internet dapat mencapai setiap sudut ruangan dengan kapasitas yang sama besar.</p>
              </div>
            </div>
            <div className="bg-white relative h-[300px] md:h-[360px] border border-white rounded-xl">
              <div className="h-36 md:h-52">
                <Image src="/assets/images/xiaomi.png" alt="router xiaomi" layout="responsive" width={100} height={100} className="w-full h-full rounded-xl" />
              </div>
              <div className="p-3">
                <h1 className="font-semibold mb-1">Mi Router 4C</h1>
                <p className=" text-sm line-clamp-5">Mi Router 4C dibekali dengan empat buah antena eksternal omnidireksional dengan penguatan sinyal 5dBi yang dapat secara efektif meningkatkan efek penguatan sinyal untuk meningkatkan kinerja transmisi, dan dapat digunakan dengan mudah di berbagai lingkungan yang kompleks.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="supplier" className="container mx-auto p-4 my-8 lg:my-16">
          <h1 className="text-xl font-semibold md:text-2xl">Our Supplier</h1>
          <div className="flex flex-wrap items-center justify-center my-4 lg:my-16 text-center gap-x-8 gap-y-4 brand lg:justify-between">
            <div className="lg:w-48 h-auto">
              <Image src="/assets/icons/logo-asus.png" alt="Logo Asus" layout="responsive" width={100} height={100}/>
            </div>
            <div className="lg:w-48 h-auto">
              <Image src="/assets/icons/logo-netgear.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
            <div className="lg:w-48 h-auto">
            <Image src="/assets/icons/logo-ProLink.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
            <div className="lg:w-48 h-auto">
            <Image src="/assets/icons/logo-tplink.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
            <div className="lg:w-48 h-auto">
            <Image src="/assets/icons/logo-xiaomi.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
            <div className="lg:w-48 h-auto">
            <Image src="/assets/icons/totolink.png" alt="Logo Asus" layout="responsive" width={100} height={100} />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-semibold md:text-2xl mb-4">FAQ</h1>
            <FAQ/>
          </div>
        </section>
      </>
    </RootLayout>
  );
}
