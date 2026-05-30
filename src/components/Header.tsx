/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, Database, ShieldCheck } from "lucide-react";
import { HOTLINE_PHONE } from "../data";

interface HeaderProps {
  onOpenWeChat: () => void;
}

export default function Header({ onOpenWeChat }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200/80 h-14 flex items-center justify-between px-4 max-w-7xl mx-auto w-full">
      {/* Left side brand logo */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center space-x-1.5">
          <ShieldCheck className="h-4 w-4 text-[#0B3D91]" />
          <h1 className="text-base font-bold text-[#0B3D91] tracking-tight">
            RoutePark 途泊转运协调网
          </h1>
        </div>
        <div className="flex items-center space-x-1 mt-0.5 text-[10px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-slate-500 font-medium">
            24H 途泊全国运力数据库实时联网中
          </span>
        </div>
      </div>

      {/* Right side conversions */}
      <div className="flex items-center space-x-2">
        <a
          href={`tel:${HOTLINE_PHONE}`}
          className="bg-[#D90429] hover:bg-[#b80322] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1 transition-all shadow-sm shadow-rose-900/10 hover:shadow"
        >
          <Phone className="h-3 w-3 animate-pulse" />
          <span>📞 拨号申请</span>
        </a>
      </div>
    </header>
  );
}
