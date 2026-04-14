"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiInstagram, FiMapPin, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-stone-950 px-6 py-20 text-white md:px-10 md:py-28"
    >
      <div className="container mx-auto">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-stone-300">
            İletişim
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Bizimle iletişime geçin
          </h2>
          <p className="mt-4 text-sm leading-7 text-stone-300 md:text-base">
            Randevu, konum ve çalışma saatleri için bize kolayca
            ulaşabilirsiniz.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <motion.div
            className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <FiMapPin className="text-lg text-stone-200" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Konum</h3>
                  <p className="text-sm text-stone-300">
                    Salonumuzu harita üzerinden kolayca bulun
                  </p>
                </div>
              </div>
            </div>

            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.521600927309!2d28.949499276391006!3d40.21970347147203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca133a3ffb7447%3A0x8950d3bbde2336c8!2sBros%20Kuaf%C3%B6r%20%26%20Solarium!5e0!3m2!1str!2str!4v1738774280281!5m2!1str!2str"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale-[0.15]"
            />
          </motion.div>

          <motion.div
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-3">
                <FiPhone className="text-lg text-stone-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                İletişim Bilgileri
              </h3>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                  Adres
                </p>
                <p className="mt-2 leading-7 text-stone-200">
                  23 Nisan, Ata Blv no:19/a, 16310 Nilüfer / Bursa
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                  Telefon
                </p>
                <div className="mt-2 space-y-2">
                  <a
                    href="tel:+905441950602"
                    className="block text-stone-200 transition hover:text-white"
                  >
                    +90 544 195 06 02
                  </a>
                  <a
                    href="tel:+905449003349"
                    className="block text-stone-200 transition hover:text-white"
                  >
                    +90 544 900 33 49
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                  Sosyal Medya
                </p>
                <a
                  href="https://www.instagram.com/brosmen.kuafor/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-stone-200 transition hover:text-white"
                >
                  <FiInstagram />
                  Instagram’da bizi takip edin
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-3">
                <FiClock className="text-lg text-stone-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Çalışma Saatleri
              </h3>
            </div>

            <div className="mt-6 space-y-3 text-sm text-stone-200 md:text-base">
              {[
                ["Pazartesi", "09:30 – 21:00"],
                ["Salı", "09:30 – 21:00"],
                ["Çarşamba", "09:30 – 21:00"],
                ["Perşembe", "09:30 – 21:00"],
                ["Cuma", "09:30 – 21:00"],
                ["Cumartesi", "09:30 – 21:00"],
                ["Pazar", "Kapalı"],
              ].map(([day, hour]) => (
                <div
                  key={day}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/10 px-4 py-3"
                >
                  <span>{day}</span>
                  <span
                    className={
                      hour === "Kapalı" ? "text-stone-400" : "text-white"
                    }
                  >
                    {hour}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
