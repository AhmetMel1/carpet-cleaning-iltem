"use client";

import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMessageCircle, FiDroplet } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Ana Sayfa" },
  { id: "services", label: "Hizmetlerimiz" },
  { id: "price", label: "Fiyat Listesi" },
  { id: "process", label: "Nasıl Çalışıyoruz" },
  { id: "about", label: "Hakkımızda" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "price", "process", "about"];
      let current = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 140) current = id;
        }
      }

      setActiveSection(current);
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 90;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="px-4 pt-4 md:px-6">
        <div
          className={`mx-auto flex max-w-screen-2xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-6 ${
            scrolled
              ? "border-amber-100 bg-white/92 shadow-[0_18px_50px_rgba(41,37,36,0.08)] backdrop-blur-xl"
              : "border-white/70 bg-white/80 backdrop-blur-md"
          }`}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-red-700 text-white shadow-md">
              <FiDroplet className="text-lg" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-stone-900">
                İLTEM HALI YIKAMA
              </span>
            </div>
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500 to-red-700 text-white"
                      : "text-stone-700 hover:bg-amber-50 hover:text-red-700"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="tel:+902125850001"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-amber-200 hover:bg-amber-50 hover:text-red-700"
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

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-700 transition hover:bg-stone-50 lg:hidden"
            aria-label="Menüyü aç"
          >
            {menuOpen ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <HiMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-stone-900/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-full px-4 pt-3 lg:hidden"
            >
              <div className="mx-auto max-w-screen-2xl overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-2xl">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                          isActive
                            ? "bg-gradient-to-r from-amber-500 to-red-700 text-white"
                            : "text-stone-700 hover:bg-amber-50 hover:text-red-700"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-4 flex flex-col gap-2 border-t border-stone-100 pt-4">
                  <a
                    href="tel:+905356148309"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 px-4 py-3 text-sm font-medium text-stone-700"
                  >
                    <FiPhone />
                    Hemen Ara
                  </a>

                  <a
                    href="https://wa.me/905356148309"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-red-700 px-4 py-3 text-sm font-medium text-white"
                  >
                    <FiMessageCircle />
                    WhatsApp’tan Yazın
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
