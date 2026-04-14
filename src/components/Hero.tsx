"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiPhone,
  FiMessageCircle,
  FiTruck,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-stone-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(185,28,28,0.10),transparent_30%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-screen-2xl px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-stone-900 sm:text-5xl md:text-6xl">
              Halılarınız için
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                temiz, güvenilir ve düzenli hizmet
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
              İltem Halı Yıkama olarak halılarınızı adresinizden alıyor, özenle
              yıkıyor ve zamanında teslim ediyoruz. Hijyenik temizlik, kontrollü
              kurutma ve dikkatli servis anlayışıyla hizmet veriyoruz.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
              <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-4 shadow-sm">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                  <FiTruck />
                </div>
                <div>
                  <p className="font-semibold text-stone-900">
                    Adresten Alım & Teslimat
                  </p>
                  <p className="text-sm text-stone-500">
                    Pratik ve zaman kazandıran servis
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-4 shadow-sm">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                  <FiCheckCircle />
                </div>
                <div>
                  <p className="font-semibold text-stone-900">
                    Derinlemesine Temizlik
                  </p>
                  <p className="text-sm text-stone-500">
                    Halı türüne uygun özenli işlem
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-4 shadow-sm">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                  <FiClock />
                </div>
                <div>
                  <p className="font-semibold text-stone-900">
                    Zamanında Teslim
                  </p>
                  <p className="text-sm text-stone-500">
                    Planlı ve düzenli hizmet süreci
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-4 shadow-sm">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                  <FiMapPin />
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Özel Hizmet</p>
                  <p className="text-sm text-stone-500">
                    Bölgesel ve hızlı servis ağı
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/905356148309"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                <FiMessageCircle />
                WhatsApp’tan Bilgi Al
              </a>

              <a
                href="tel:+902125850001"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-200 hover:bg-amber-50 hover:text-red-700"
              >
                <FiPhone />
                Hemen Ara
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="w-full"
          >
            <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-[0_24px_80px_rgba(41,37,36,0.08)]">
              <div className="bg-gradient-to-r from-amber-500 to-red-700 px-6 py-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-50">
                  Hızlı İletişim
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Hemen servis talebi oluşturun
                </h2>
                <p className="mt-2 text-sm leading-7 text-white/90">
                  Halı yıkama hizmeti için bize ulaşın, size en kısa sürede geri
                  dönüş sağlayalım.
                </p>
              </div>

              <div className="space-y-4 p-6">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-sm font-semibold text-stone-900">
                    Hizmet Bölgemiz
                  </p>
                  <p className="mt-1 text-sm leading-7 text-stone-600">
                    Fatih ve Zeytinburnu ilçelerinde halı yıkama, alım ve
                    teslimat hizmeti sunuyoruz.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-sm font-semibold text-stone-900">
                    Hizmet İçeriği
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-stone-600">
                    <li>• Adresten alım</li>
                    <li>• Yıkama ve kontrollü kurutma</li>
                    <li>• Paketleme ve teslimat</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-sm font-semibold text-stone-900">
                    İletişim
                  </p>
                  <div className="mt-3 flex flex-col gap-3">
                    <a
                      href="tel:+905356148309"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 transition hover:border-amber-200 hover:bg-amber-50 hover:text-red-700"
                    >
                      <FiPhone />
                      0212 585 00 01
                    </a>

                    <a
                      href="https://wa.me/905356148309"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-red-700 px-4 py-3 text-sm font-medium text-white transition hover:opacity-95"
                    >
                      <FiMessageCircle />
                      WhatsApp’tan Yazın
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-50 px-4 py-3 text-xs text-amber-800">
                  Hızlı servis, düzenli teslimat ve özenli temizlik anlayışıyla
                  hizmet veriyoruz.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
