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
        
        <h2 className="text-2xl sm:text-3xl font-black text-[#0B3D91] tracking-tight font-serif italic">
          多模态联合协助通道：依据伤情、预算，快速筛选适合航线
        </h2>
        
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          途泊调度网络支持包括陆路奔驰长途救护车、高铁绿通、空中医疗客专机等在内的综合运输形式。一站式解决多重气候、超长距离、过急时空等极限安全转驳条件。
        </p>
      </div>

      {/* Grid of Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRODUCT_DATA.map((product) => {
          // Dynamic icon loader
          let IconComponent = LucideIcons.FileText;
          if (product.iconName === "Truck") IconComponent = LucideIcons.Truck;
          else if (product.iconName === "Train") IconComponent = LucideIcons.Train;
          else if (product.iconName === "Plane") IconComponent = LucideIcons.Plane;
          else if (product.iconName === "Globe") IconComponent = LucideIcons.Globe;

          return (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/60 hover:border-[#0B3D91]/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border-l-4 border-l-[#0B3D91]"
            >
              <div>
                {/* Header title */}
                <div className="flex items-center space-x-3.5 mb-4">
                  <div className="p-3.5 rounded-xl bg-[#0B3D91]/5 text-[#0B3D91] group-hover:bg-[#0B3D91] group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 group-hover:text-[#0B3D91] transition-colors leading-tight">
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

              {/* Hardware specifications list */}
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

                {/* Submit Action */}
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
    </section>
  );
}
