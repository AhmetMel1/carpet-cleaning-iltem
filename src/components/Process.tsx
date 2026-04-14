"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiClipboard, FiTruck, FiDroplet, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    id: 1,
    title: "Talebinizi Oluşturun",
    description:
      "Telefon veya WhatsApp üzerinden bize ulaşıp halı yıkama talebinizi kolayca iletin.",
    icon: FiClipboard,
  },
  {
    id: 2,
    title: "Adresten Teslim Alalım",
    description:
      "Fatih bölgesindeki adresinizden halılarınızı planlı şekilde teslim alıyoruz.",
    icon: FiTruck,
  },
  {
    id: 3,
    title: "Özenle Yıkayalım",
    description:
      "Halı türüne uygun işlem, kontrollü yıkama ve kurutma süreci ile temizliği tamamlıyoruz.",
    icon: FiDroplet,
  },
  {
    id: 4,
    title: "Temiz Şekilde Teslim Edelim",
    description:
      "İşlem tamamlandıktan sonra halılarınızı düzenli ve zamanında adresinize teslim ediyoruz.",
    icon: FiCheckCircle,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="w-full bg-stone-50 py-16 md:py-24 scroll-mt-24"
    >
      <div className="container mx-auto px-6 md:px-10 xl:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-flex rounded-full border border-amber-100 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700">
              Nasıl Çalışıyoruz
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
              Pratik, düzenli ve güven veren bir hizmet süreci
            </h2>

            <p className="mt-4 text-sm leading-7 text-stone-600 md:text-base">
              İltem Halı Yıkama’da süreç baştan sona sade ve kontrollü ilerler.
              Siz bize ulaşırsınız, biz halılarınızı adresinizden alır, özenle
              temizler ve teslim ederiz.
            </p>

            <div className="mt-6 rounded-[24px] border border-amber-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-stone-900">
                Hizmet anlayışımız
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Temizlikte kaliteyi, teslimatta düzeni ve iletişimde güveni ön
                planda tutuyoruz. Her aşamada memnuniyet odaklı çalışıyoruz.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[27px] top-6 hidden h-[calc(100%-48px)] w-px bg-amber-200 md:block" />

            <div className="space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.id}
                    className="relative flex gap-4 rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-red-700">
                      <Icon className="text-xl" />
                    </div>

                    <div>
                      <div className="mb-2 inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-500">
                        Adım {step.id}
                      </div>

                      <h3 className="text-lg font-semibold text-stone-900">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-stone-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
