"use client";

import Image from "next/image";
import Link from "next/link";
import { sendEmailHook } from "../hooks/sendEmailHook";

export function HeroPage() {
  const { email, isLoading, sendEmail, setEmail } = sendEmailHook();
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 grid grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-16 py-12">
            <div className="max-w-xl">
              <h1 className="text-6xl font-bold mb-6">William Mayhood</h1>

              <div className="mb-4">
                <p className="text-xl font-semibold text-gray-900">
                  Production Support/Endur Developer
                </p>
                <p className="text-gray-500">Commodities Trading</p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-12">
                Navigating complex distributed systems in the modern financial
                world. Every line of code is crafted with precision,
                prioritizing scalability, performance, and the tactile
                relationship between user and interface.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
                    Commits
                  </p>
                  <p className="text-3xl font-bold">342</p>
                </div>
                <div>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
                    Stack
                  </p>
                  <p className="text-3xl font-bold">JWS</p>
                </div>
                <div>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
                    Availability
                  </p>
                  <p className="text-3xl font-bold">1/4</p>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <p className="text-sm font-semibold mb-3">Newsletter Updates</p>
                <form
                  className="flex gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendEmail(e);
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="px-8 py-2.5 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium" disabled={isLoading === "loading"} type="submit">
                    {isLoading === "loading" ? "Submitting..." : "Subscribe"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-full flex items-center justify-center bg-gray-50 p-8">
            <div className="relative w-full h-full max-h-[600px] overflow-hidden rounded-lg shadow-2xl border-4 border-black">
              ///Image
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
                alt="Coding Environment"
                fill
                className="object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-8">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
            <span className="text-white text-lg">↓</span>
          </div>
        </div> */}
      </div>
    </>
  );


  function ArticleRow({
    date,
    title,
    excerpt,
    tag,
    href,
  }: {
    date: string;
    title: string;
    excerpt: string;
    tag: string;
    href: string;
  }) {
    return (
      <Link
        href={href}
        className="group block border-b border-zinc-100 hover:bg-white transition-colors"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 p-8 lg:p-10 items-center gap-6">
          <div className="md:col-span-2 text-base text-zinc-400 font-normal font-mono">
            {date}
          </div>
          <div className="md:col-span-7">
            <h4 className="text-2xl font-medium tracking-tight text-zinc-900 group-hover:text-cyan-700 transition-colors mb-2">
              {title}
            </h4>
            <p className="text-lg text-zinc-500 font-light line-clamp-1">
              {excerpt}
            </p>
          </div>
          <div className="md:col-span-3 flex justify-end">
            <span className="px-3 py-1 rounded-full border border-zinc-200 text-xs font-medium uppercase tracking-wide text-zinc-500 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-all">
              {tag}
            </span>
          </div>
        </div>
      </Link>
    );
  }
}
