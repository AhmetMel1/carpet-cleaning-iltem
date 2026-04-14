"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiDroplet,
  FiHome,
  FiLayers,
  FiShield,
  FiTruck,
  FiWind,
} from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Makine Halısı Yıkama",
    description:
      "Günlük kullanıma uygun halılar için derinlemesine temizlik ve hijyenik yıkama hizmeti.",
    icon: FiDroplet,
  },
  {
    id: 2,
    title: "Yün Halı Yıkama",
    description:
      "Dokusuna uygun, özenli ve kontrollü işlemlerle yün halılar için güvenli temizlik.",
    icon: FiShield,
  },
  {
    id: 3,
    title: "Shaggy Halı Yıkama",
    description:
      "Uzun tüylü halılarda özel temizlik süreci ile kir ve tozdan arındırılmış sonuç.",
    icon: FiWind,
  },
  {
    id: 4,
    title: "Yolluk & Küçük Ölçü Halılar",
    description:
      "Koridor ve küçük alan halıları için dikkatli yıkama ve düzenli teslimat hizmeti.",
    icon: FiLayers,
  },
  {
    id: 5,
    title: "Adresten Alım ve Teslimat",
    description:
      "Halılarınızı adresinizden alıyor, işlem sonrası tekrar teslim ediyoruz.",
    icon: FiTruck,
  },
  {
    id: 6,
    title: "Overlok Hizmeti",
    description:
      "Yıpranmış halılarınızın kenarlarını güçlendirmek ve ömrünü uzatmak için profesyonel overlok hizmeti.",
    icon: FiHome,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-white py-16 md:py-24 scroll-mt-24"
    >
      <div className="container mx-auto px-6 md:px-10 xl:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-flex rounded-full border border-amber-100 bg-amber-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700">
            Hizmetlerimiz
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
            Halılarınıza uygun, özenli temizlik çözümleri
          </h2>

          <p className="mt-4 text-sm leading-7 text-stone-600 md:text-base">
            İltem Halı Yıkama olarak farklı halı türlerine uygun temizlik
            uygulamalarıyla, hijyenik ve düzenli bir hizmet süreci sunuyoruz.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                className="group rounded-[24px] border border-stone-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(41,37,36,0.08)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-red-700">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-stone-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
