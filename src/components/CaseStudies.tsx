/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Sparkles, TrendingDown, Receipt, CheckCircle, Flame, Navigation } from "lucide-react";
import { CASE_STUDIES } from "../data";

export default function CaseStudies() {
  return (
    <section className="py-16 px-4 bg-white max-w-7xl mx-auto w-full border-b border-slate-100">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-xs font-bold mb-3">
          <Sparkles className="h-3.5 w-3.5 text-amber-600" />
          <span>途泊网络特种调运真价降低实况</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-black text-[#0B3D91] tracking-tight font-serif italic">
          在途泊，每一张协定比价单都在为家属“压干水分，优化开支”
        </h2>
        
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          “救护车长途行驶，由于涉及两端城市，空驶费（即执行车单向放空跑返）占比非常高。途泊通过全域合规网络动态拼单对流，协助家属合理规避单向空负载空耗费。”
        </p>
      </div>

      {/* Grid of Case lists */}
      <div className="space-y-10">
        {CASE_STUDIES.map((study, idx) => {
          // Calculate discount percent
          const savings = study.details.originalPrice - study.details.price;
          const savingsPercent = Math.round((savings / study.details.originalPrice) * 100);

          return (
            <div 
              key={study.id}
              className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-[#0B3D91]"
            >
              {/* Header Badge & Title bar */}
              <div className="bg-slate-100 px-6 py-4 border-b border-slate-200/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5">
                  <span className="bg-[#0B3D91] text-white text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                    案例 0{idx + 1}
                  </span>
                  <h3 className="text-[15px] sm:text-base font-extrabold text-[#0B3D91] flex items-center gap-1.5">
                    <Navigation className="h-3.5 w-3.5 text-blue-600" />
                    {study.route} 跨省协调支持
                  </h3>
                </div>
                <div className="flex items-center space-x-1 text-xs text-slate-500 font-bold bg-white px-2.5 py-1 rounded-lg border border-slate-200/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>已签署一揽子包干转运保障</span>
                </div>
              </div>

              {/* Grid content blocks */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left side case textual logic */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Loc Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-3.5 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 block font-bold mb-0.5">● 出发出院院区：</span>
                      <span className="font-extrabold text-slate-700">{study.startLoc}</span>
                    </div>
                    <div className="border-t sm:border-t-0 sm:border-l border-slate-100 pt-2 sm:pt-0 sm:pl-3">
                      <span className="text-red-500 block font-bold mb-0.5">● 接收目标医院：</span>
                      <span className="font-extrabold text-slate-700">{study.endLoc}</span>
                    </div>
                  </div>

                  {/* Patient status */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      [ 患者病情概述 ]
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed bg-white p-3.5 rounded-xl border border-slate-100">
                      {study.patientCondition}
                    </p>
                  </div>

                  {/* Pain Point */}
                  <div className="border-l-4 border-red-500 bg-red-50/40 p-3.5 rounded-r-xl">
                    <span className="text-red-700 text-xs font-bold block mb-1">
                      ⚠️ 家属自主盲目询价痛点：
                    </span>
                    <p className="text-xs text-red-950 leading-relaxed">
                      {study.painPoint}
                    </p>
                  </div>

                  {/* Leverage Strategy */}
                  <div className="border-l-4 border-emerald-500 bg-emerald-50/40 p-3.5 rounded-r-xl">
                    <span className="text-emerald-700 text-xs font-bold block mb-1">
                      💡 途泊大数据网中介协调调货方案：
                    </span>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      {study.strategy}
                    </p>
                  </div>
                </div>

                {/* Right side Price Comparison Cards */}
                <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 flex items-center space-x-1.5">
                      <Receipt className="h-3.5 w-3.5 text-slate-400" />
                      <span>方案配置及包干预算核销表</span>
                    </h4>

                    {/* Configuration List */}
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start text-xs text-slate-600 gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-none mt-0.5" />
                        <div>
                          <strong className="text-slate-800">匹配载具：</strong>
                          {study.details.vehicle}
                        </div>
                      </li>
                      <li className="flex items-start text-xs text-slate-600 gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-none mt-0.5" />
                        <div>
                          <strong className="text-slate-800">在途监配：</strong>
                          {study.details.staff}
                        </div>
                      </li>
                      <li className="flex items-start text-xs text-slate-600 gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-none mt-0.5" />
                        <div>
                          <strong className="text-slate-800">搭载医疗器：</strong>
                          {study.details.equipment}
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Contrast Bar Graph Representation */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>传统单向车估算市场价(包含空驶费)</span>
                      <del className="font-bold text-slate-600 font-mono">
                        ¥{study.details.originalPrice.toLocaleString()}
                      </del>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-800 border-t border-slate-200/60 pt-2.5">
                      <span className="font-bold text-[#0B3D91] flex items-center space-x-1">
                        <TrendingDown className="h-4 w-4 text-emerald-500 animate-bounce" />
                        <span>途泊一包到底合同审定价</span>
                      </span>
                      <strong className="text-xl font-mono text-[#D90429] tracking-tight">
                        ¥{study.details.price.toLocaleString()}
                      </strong>
                    </div>

                    {/* Green Saving Banner */}
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 px-3 py-2 rounded-lg flex items-center justify-between text-xs font-bold">
                      <span className="flex items-center space-x-1">
                        <Flame className="h-3.5 w-3.5 text-emerald-600" />
                        <span>途泊返程协调帮家属省钱</span>
                      </span>
                      <span>
                        省下 ¥{savings.toLocaleString()} ({savingsPercent}% 降幅)
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
