"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiDroplet, FiMapPin, FiTruck } from "react-icons/fi";

const highlights = [
  {
    id: 1,
    title: "Özenli Temizlik",
    description:
      "Halı türüne uygun işlem adımlarıyla daha dikkatli ve kontrollü temizlik sunuyoruz.",
    icon: FiDroplet,
  },
  {
    id: 2,
    title: "Fatih ve Zeytinburnu Bölgesine Hizmet",
    description:
      "Bölgesel çalışma düzenimiz sayesinde daha hızlı iletişim ve daha planlı servis sağlıyoruz.",
    icon: FiMapPin,
  },
  {
    id: 3,
    title: "Adresten Alım ve Teslim",
    description:
      "Halılarınızı adresinizden alıyor, işlem sonrası temiz şekilde teslim ediyoruz.",
    icon: FiTruck,
  },
  {
    id: 4,
    title: "Memnuniyet Odaklı Yaklaşım",
    description:
      "Hizmetin her aşamasında düzenli, güven veren ve çözüm odaklı iletişim kuruyoruz.",
    icon: FiCheckCircle,
  },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-20 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-10 xl:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-flex rounded-full border border-amber-100 bg-amber-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700">
              Hakkımızda
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
              Temizlikte özen, hizmette güven
            </h2>

            <p className="mt-5 text-sm leading-7 text-stone-600 md:text-base">
              <strong className="font-semibold text-stone-900">
                İltem Halı Yıkama
              </strong>{" "}
              olarak Fatih bölgesinde halı yıkama hizmetini düzenli, dikkatli ve
              güvenilir bir anlayışla sunuyoruz. Her halının yapısına uygun
              işlem uygulamaya, temizlik kalitesini korumaya ve müşterilerimize
              memnuniyet odaklı bir süreç yaşatmaya önem veriyoruz.
            </p>

            <p className="mt-4 text-sm leading-7 text-stone-600 md:text-base">
              Amacımız yalnızca halılarınızı temizlemek değil; alım, yıkama,
              kurutma ve teslimat sürecinin tamamında düzenli ve güven veren bir
              hizmet sunmaktır. Zamanında teslimat, açık iletişim ve özenli
              çalışma bizim için önceliklidir.
            </p>

            <div className="mt-6 rounded-[24px] border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm font-semibold text-stone-900">
                Hizmet anlayışımız
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Kaliteli temizlik, dikkatli işlem, planlı servis ve müşteri
                memnuniyetini merkeze alan bir yaklaşım benimsiyoruz.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.id}
                  className="rounded-[24px] border border-stone-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(41,37,36,0.08)]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-red-700">
                    <Icon className="text-lg" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-stone-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
