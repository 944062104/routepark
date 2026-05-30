/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, MessageSquare, Shield, CheckCircle2, UserCheck, Star, Activity } from "lucide-react";
import { HOTLINE_PHONE, WECHAT_ID } from "../data";

interface HeroProps {
  onOpenWeChat: () => void;
}

export default function Hero({ onOpenWeChat }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a1e3f] text-slate-100 py-12 px-4 md:py-20 lg:py-24">
      {/* Absolute ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0d3473] via-[#041126] to-[#010610] opacity-95"></div>
      
      {/* Grid Pattern overlay for tech precision */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Decorative Blur Spheres */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#009688]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-24 right-10 w-96 h-96 bg-[#0B3D91]/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left column: Branding & Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#009688]/15 border border-[#009688]/30 px-3 py-1 rounded-full text-[#02c3b1] text-xs font-semibold tracking-wide">
            <Activity className="h-3.5 w-3.5 animate-pulse" />
            <span>全国合规特种救护车辆大数据跨省联控中心</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight font-serif italic">
            跨省转院 <span className="text-[#02c3b1] font-sans not-italic">｜</span> 重症送返 <span className="text-[#02c3b1] font-sans not-italic">｜</span> 长途救护车调度中心
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            途泊（RoutePark）是面向全国患者家属构建的非急救重症居间比价网。我们不是单一车队，而是您在危急重症跨区域转送时的<strong>“专属经纪人”</strong>。协助您在数千家特种持牌运力中，一键检索最经济的返程车辆，安全一包到底。
          </p>

          {/* Golden Tridents Promise with Green Color (#009688) */}
          <div className="space-y-4 pt-3 border-t border-slate-700/50">
            <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-[#009688]/20 transition-all">
              <div className="flex-none p-1.5 rounded-lg bg-[#009688]/20 text-[#02c3b1] mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white text-[15px] sm:text-base flex items-center col-span-1">
                  🩺 【三甲级医护全程跟随】
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  配备3年以上三甲急诊、ICU在职医师或资深注册护士跟随，配备移动监护ICU设备，保全行车生命监测。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-[#009688]/20 transition-all">
              <div className="flex-none p-1.5 rounded-lg bg-[#009688]/20 text-[#02c3b1] mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white text-[15px] sm:text-base flex items-center col-span-1">
                  ⚡ 【5分钟出车响应锁定】
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  动态检索全国干线在执行车辆路线，24小时为家属锁定就就近车队或省钱“返程空驶车”名额。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-[#009688]/20 transition-all">
              <div className="flex-none p-1.5 rounded-lg bg-[#009688]/20 text-[#02c3b1] mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white text-[15px] sm:text-base flex items-center col-span-1">
                  💰 【全程一口价包干制合同】
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  预先签署包干保障，包括油耗、过路费、过桥费、医护补助，严厉杜绝任何路途坐地起价。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Advisor Connection Card */}
        <div className="lg:col-span-5">
          <div className="glass-card text-slate-800 rounded-2xl p-6 shadow-2xl border-l-4 border-l-[#0B3D91] relative overflow-hidden">
            {/* Design header highlights */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#009688] to-[#0B3D91]"></div>
            
            {/* Advisor profile row */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-none">
                {/* Custom Vector Avatar Frame instead of non-persistent URL image */}
                <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-[#0B3D91] flex items-center justify-center text-[#0B3D91] font-bold text-lg select-none">
                  途泊
                </div>
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full border-2 border-white p-1">
                  <span className="block h-2 w-2 rounded-full bg-white animate-status-breathe"></span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-[16px] sm:text-lg flex items-center gap-1.5">
                  途泊业务调度中心
                  <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">首席顾问</span>
                </h3>
                <div className="flex items-center space-x-1 mt-0.5 text-xs text-slate-500">
                  <UserCheck className="h-3 w-3 text-emerald-600" />
                  <span>已核验执业背景 ｜ 5分钟极速排班</span>
                </div>
              </div>
            </div>

            {/* Advisor quotes written in simple white logic */}
            <blockquote className="bg-slate-50 rounded-xl p-4 border-l-4 border-[#0B3D91] text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              “您好，我是途泊的专属转运顾问。长途转院是一项复杂的系统工程，家属往往面临找车难、怕黑车中途要价、不懂设备和路途风险等难题。
              <span className="block mt-1 bg-amber-50 text-amber-800 px-1 py-0.5 font-bold rounded inline-block">请把这些繁琐的工作交给我。</span> 告诉我患者当前的病情、所在的医院以及目的地，我将在 <strong>5分钟内</strong> 帮您在全国合作的持牌车队中调取底价，制定安全、省钱的比价配置表。”
            </blockquote>

            {/* Core CTE actions (Alarm Red high conversion buttons) */}
            <div className="space-y-3">
              <a
                href={`tel:${HOTLINE_PHONE}`}
                className="w-full py-3 px-4 bg-[#D90429] hover:bg-[#b80322] text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all shadow-md shadow-rose-900/10 animate-cta-pulse"
                id="cta-hotline-v1"
              >
                <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
                <span>📞 立即拨打：调度顾问特办热线</span>
              </a>

              <button
                type="button"
                onClick={onOpenWeChat}
                className="w-full py-3 px-4 bg-[#07C160] hover:bg-[#069e4f] text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all shadow-md shadow-emerald-900/10"
              >
                <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5" />
                <span>💬 添加顾问微信：免费获取比价单</span>
              </button>
            </div>

            {/* Star badge review metrics */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-4 text-[10px] sm:text-xs text-slate-400 font-medium">
              <div className="flex items-center space-x-1">
                <div className="flex text-amber-500">
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                </div>
                <span className="text-slate-600 font-semibold">99.7% 家属五星满意率</span>
              </div>
              <span>累计协助转运 4,289 例</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
