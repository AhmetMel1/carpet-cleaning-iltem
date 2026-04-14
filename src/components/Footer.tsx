import React from "react";
import { FiMapPin, FiMessageCircle, FiPhone, FiDroplet } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-red-700 text-white shadow-md">
            <FiDroplet className="text-lg" />
          </div>

          <div>
            <p className="text-lg font-bold text-stone-900">
              İltem Halı Yıkama
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:+902125850001"
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-amber-200 hover:bg-amber-50 hover:text-red-700"
          >
            <FiPhone />
            Hemen Ara
          </a>

          <a
            href="https://wa.me/905356148309"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-red-700 px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
          >
            <FiMessageCircle />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-stone-100">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-2 px-6 py-5 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} İltem Halı Yıkama. Tüm hakları
            saklıdır.
          </span>
          <span>Temizlikte özen, hizmette güven.</span>
        </div>
      </div>
    </footer>
  );
}
