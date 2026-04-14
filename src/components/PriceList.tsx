"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiInfo } from "react-icons/fi";

const priceItems = [
  {
    id: 1,
    title: "Makine Halısı",
    price: "₺100 / m²",
    description:
      "Günlük kullanıma uygun makine halıları için standart yıkama hizmeti.",
  },
  {
    id: 2,
    title: "Yün Halı",
    price: "₺150 / m²",
    description:
      "Dokusuna uygun, daha kontrollü ve özenli temizlik işlemi uygulanır.",
  },
  {
    id: 3,
    title: "Shaggy Halı",
    price: "₺120 / m²",
    description:
      "Uzun tüylü yapıya uygun özel işlem ve dikkatli kurutma süreci uygulanır.",
  },
];

export default function PriceList() {
  return (
    <section id="price" className="w-full scroll-mt-24 bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 xl:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-flex rounded-full border border-amber-100 bg-amber-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700">
            Fiyat Listesi
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
            Hizmetlerimiz için fiyat bilgileri
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-600 md:text-base">
            Halı türüne ve hizmet kapsamına göre fiyatlar değişebilir. Aşağıdaki
            liste genel bilgilendirme amaçlıdır. Net fiyat için bizimle
            iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {priceItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="rounded-[24px] border border-stone-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(41,37,36,0.08)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-white px-4 py-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                  Başlangıç / Bilgi Fiyatı
                </p>
                <p className="mt-2 text-2xl font-bold text-red-700">
                  {item.price}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[24px] border border-amber-100 bg-amber-50/70 p-5 md:p-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-red-700">
                <FiInfo />
                <p className="text-sm font-semibold">Fiyatlandırma Notu</p>
              </div>

              <div className="mt-3 space-y-2 text-sm leading-7 text-stone-700">
                <p className="flex items-start gap-2">
                  <FiCheckCircle className="mt-1 shrink-0 text-red-700" />
                  Fiyatlar halının türüne, ölçüsüne ve hizmet içeriğine göre
                  değişebilir.
                </p>
                <p className="flex items-start gap-2">
                  <FiCheckCircle className="mt-1 shrink-0 text-red-700" />
                  Büyük ölçüler, özel dokular veya ek hizmetler için net fiyat
                  telefonda veya WhatsApp üzerinden paylaşılabilir.
                </p>
                <p className="flex items-start gap-2">
                  <FiCheckCircle className="mt-1 shrink-0 text-red-700" />
                  Fatih bölgesindeki servis planlamasına göre alım ve teslimat
                  bilgisi netleştirilir.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="https://wa.me/905356148309"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                WhatsApp’tan Fiyat Sor
                <FiArrowRight />
              </a>

              <a
                href="tel:+902125850001"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-200 hover:bg-amber-50 hover:text-red-700"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
