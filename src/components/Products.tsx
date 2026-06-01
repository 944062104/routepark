/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as LucideIcons from "lucide-react";
import { PRODUCT_DATA } from "../data";

interface ProductsProps {
  onQuickInquiry: (productName: string) => void;
}

export default function Products({ onQuickInquiry }: ProductsProps) {
  return (
    <section className="py-16 px-4 bg-slate-50 max-w-7xl mx-auto w-full border-b border-slate-200/60">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>空地一体化重症监护护送通道</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-black text-[#1058D1] tracking-tight font-serif italic">
          多模态联合协助通道：依据伤情、预算，快速筛选适合航线
        </h2>
        
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          途泊调度网络支持包括陆路奔驰长途救护车、高铁绿通、空中医疗客专机等在内的综合运输形式。一站式解决多重气候、超长距离、过急时空等极限安全转驳条件。
        </p>
      </div>

      {/* CATEGORY 1: 陆路长途与大湾区跨境 */}
      <div className="mb-14">
        {/* Horizontal Divider Label styled exactly like user screenshot */}
        <div className="relative flex py-4 items-center justify-center mb-8">
          <div className="flex-grow border-t border-slate-300/60"></div>
          <span className="flex-shrink mx-4 text-xs font-bold text-[#1058D1] tracking-widest uppercase flex items-center gap-1">
            —— 🚑 陆运长途与粤港大湾区跨境转运调度专区 ——
          </span>
          <div className="flex-grow border-t border-slate-300/60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_DATA.filter(p => p.id === "ambulance" || p.id === "border").map((product) => {
            let IconComponent = product.id === "ambulance" ? LucideIcons.Truck : LucideIcons.Globe;

            return (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/60 hover:border-[#1058D1]/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border-l-4 border-l-[#1058D1]"
              >
                <div>
                  <div className="flex items-center space-x-3.5 mb-4">
                    <div className="p-3.5 rounded-xl bg-[#1058D1]/5 text-[#1058D1] group-hover:bg-[#1058D1] group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 group-hover:text-[#1058D1] transition-colors leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-xs font-bold text-[#009688] tracking-wide mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100/50">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="bg-slate-50/50 rounded-xl px-4 py-3 border border-slate-100 mb-6">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      ◆ 途泊准入标准配备 / 资质要求
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.equipment.map((item, index) => (
                        <li key={index} className="flex items-center text-xs text-slate-600 space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#009688]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => onQuickInquiry(product.title)}
                    className="w-full py-2.5 px-4 bg-slate-100 hover:bg-[#D90429] hover:text-white text-slate-700 font-bold rounded-xl text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 border border-slate-200/50 hover:border-[#D90429]"
                  >
                    <LucideIcons.PhoneCall className="h-4 w-4" />
                    <span>📞 立即咨询 `{product.title}` 报价预算</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CATEGORY 2: 空铁高速绿通 */}
      <div>
        {/* Horizontal Divider Label */}
        <div className="relative flex py-4 items-center justify-center mb-8">
          <div className="flex-grow border-t border-slate-300/60"></div>
          <span className="flex-shrink mx-4 text-xs font-bold text-[#1058D1] tracking-widest uppercase flex items-center gap-1">
            —— 🚄 铁路绿通与航空重症包机联运专区 ——
          </span>
          <div className="flex-grow border-t border-slate-300/60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_DATA.filter(p => p.id === "railway" || p.id === "airplane").map((product) => {
            let IconComponent = product.id === "railway" ? LucideIcons.Train : LucideIcons.Plane;

            return (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/60 hover:border-[#1058D1]/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border-l-4 border-l-[#1058D1]"
              >
                <div>
                  <div className="flex items-center space-x-3.5 mb-4">
                    <div className="p-3.5 rounded-xl bg-[#1058D1]/5 text-[#1058D1] group-hover:bg-[#1058D1] group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 group-hover:text-[#1058D1] transition-colors leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-xs font-bold text-[#009688] tracking-wide mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100/50">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="bg-slate-50/50 rounded-xl px-4 py-3 border border-slate-100 mb-6">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      ◆ 途泊准入标准配备 / 资质要求
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.equipment.map((item, index) => (
                        <li key={index} className="flex items-center text-xs text-slate-600 space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#009688]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => onQuickInquiry(product.title)}
                    className="w-full py-2.5 px-4 bg-slate-100 hover:bg-[#D90429] hover:text-white text-slate-700 font-bold rounded-xl text-xs sm:text-sm transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 border border-slate-200/50 hover:border-[#D90429]"
                  >
                    <LucideIcons.PhoneCall className="h-4 w-4" />
                    <span>📞 立即咨询 `{product.title}` 报价预算</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
