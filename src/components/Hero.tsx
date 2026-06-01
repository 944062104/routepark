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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/50 text-slate-800 py-12 px-4 md:py-20 lg:py-24 border-b border-slate-200">
      {/* Grid Pattern overlay for tech precision */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,88,209,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,88,209,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Decorative Blur Spheres */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-24 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left column: Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-800 text-xs font-semibold tracking-wide">
            <Activity className="h-3.5 w-3.5 animate-pulse text-emerald-600" />
            <span>全国合规特种救护车辆大数据跨省联控中心</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight font-sans">
            跨省转院 <span className="text-teal-600 font-sans not-italic">｜</span> 重症送返 <span className="text-teal-600 font-sans not-italic">｜</span> 长途救护车调度中心
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            专业提供全国跨省长途重症救护车转运、中长途空铁联运绿色通道及粤港澳大湾区跨境粤港直通双牌救护车服务。拥有配置完善的移动ICU重症监护救护车及专业跟车医护团队，全程一包到底，让转院更安全、家属更放心。
          </p>

          {/* Golden Tridents Promise with Green Color (#009688) */}
          <div className="space-y-4 pt-3 border-t border-slate-200">
            <div className="flex items-start space-x-3 bg-white/80 backdrop-blur p-3.5 rounded-xl border border-slate-100 hover:border-blue-200/60 shadow-sm transition-all">
              <div className="flex-none p-1.5 rounded-lg bg-teal-50 text-teal-600 mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-[15px] sm:text-base flex items-center col-span-1">
                  🩺 【三甲级医护全程跟随】
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  配备3年以上三甲急诊、ICU在职医师或资深注册护士跟随，配备移动监护ICU设备，保全行车生命监测。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-white/80 backdrop-blur p-3.5 rounded-xl border border-slate-100 hover:border-blue-200/60 shadow-sm transition-all">
              <div className="flex-none p-1.5 rounded-lg bg-teal-50 text-teal-600 mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-[15px] sm:text-base flex items-center col-span-1">
                  ⚡ 【极速出车调度响应】
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  24小时各省救护车大队统一联控指挥，5分钟极速排班响应，提供最适合最稳健的出车方案。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-white/80 backdrop-blur p-3.5 rounded-xl border border-slate-100 hover:border-blue-200/60 shadow-sm transition-all">
              <div className="flex-none p-1.5 rounded-lg bg-teal-50 text-teal-600 mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-[15px] sm:text-base flex items-center col-span-1">
                  💰 【全程一口价包干制合同】
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  预先签署包干保障，包括油耗、过路费、过桥费、医护补助，严厉杜绝任何路途坐地起价。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Advisor Connection Card */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 border-l-4 border-l-[#1058D1] relative overflow-hidden">
            {/* Design header highlights */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-[#1058D1]"></div>
            
            {/* Advisor profile row */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-none">
                {/* Custom Vector Avatar Frame */}
                <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-[#1058D1] flex items-center justify-center text-[#1058D1] font-bold text-lg select-none">
                  调度
                </div>
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full border-2 border-white p-1">
                  <span className="block h-2 w-2 rounded-full bg-white animate-status-breathe"></span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-[16px] sm:text-lg flex items-center gap-1.5">
                  重症专运协调顾问组
                  <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">首席顾问</span>
                </h3>
                <div className="flex items-center space-x-1 mt-0.5 text-xs text-slate-500">
                  <UserCheck className="h-3 w-3 text-emerald-600" />
                  <span>已核验执业背景 ｜ 5分钟极速排班</span>
                </div>
              </div>
            </div>

            {/* Advisor quotes */}
            <blockquote className="bg-slate-50 rounded-xl p-4 border-l-4 border-[#1058D1] text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              “您好，我是您的专属重症转运顾问。长途重症转运生命攸关，家属往往面临用车难、担心设备不够专业和途中突发状况等难题。
              <span className="block mt-1 bg-amber-50 text-amber-800 px-1 py-0.5 font-bold rounded inline-block">请直接呼叫我们的热线。</span> 告诉我患者当前的医疗诊断、所在医院以及目的地，我们将在 <strong>5分钟内</strong> 为您配齐专业的出勤救护车辆和跟车医护，为您定制安全、稳妥的全程转运方案。”
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
                <span>💬 添加微信：24小时快速询价安排</span>
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

      {/* Equipment List Section with Light Frame and No #010610 reference */}
      <div className="relative max-w-7xl mx-auto mt-12 pt-10 border-t border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight flex items-center space-x-1.5 flex-wrap">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>随车生命监护核心医疗级抢救硬件设备 🩺</span>
            </h3>
            <p className="text-slate-500 text-[11px] sm:text-xs">
              合作的所有救护车辆均已通过卫生健康部门备案、具备UPS不间断电源及双套主动吸氧系统。
            </p>
          </div>
        </div>

        {/* 4 core equipments in clean modern light-mode boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="bg-white border border-slate-150 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 transition-all duration-300 shadow-sm">
            <div>
              <div className="text-2xl mb-2">🫁</div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">车载高级转运呼吸机</h4>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-normal">
                瑞士 Hamilton / 德尔格医用级呼吸支持，自适应途中肺阻力变化。
              </p>
            </div>
            <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded mt-3 self-start">HEPA 密闭气道</span>
          </div>

          <div className="bg-white border border-slate-150 rounded-xl p-4 flex flex-col justify-between hover:border-[#1058D1]/30 transition-all duration-300 shadow-sm">
            <div>
              <div className="text-2xl mb-2">🖥️</div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">高灵敏智能心电监护仪</h4>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-normal">
                多参同显监控心电、指脉氧、二氧化碳分压、无创/有创连续血压。
              </p>
            </div>
            <span className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded mt-3 self-start">24H 连续波形</span>
          </div>

          <div className="bg-white border border-slate-150 rounded-xl p-4 flex flex-col justify-between hover:border-[#1058D1]/30 transition-all duration-300 shadow-sm">
            <div>
              <div className="text-2xl mb-2">🧪</div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">高精度双通道微量注射泵</h4>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-normal">
                支持途中血管活性药物的精确匀速注入，防高速路途颠簸波动。
              </p>
            </div>
            <span className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded mt-3 self-start">误差 &lt; 0.01ml</span>
          </div>

          <div className="bg-white border border-slate-150 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-300 transition-all duration-300 shadow-sm">
            <div>
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">电动强负压车载吸痰器</h4>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-normal">
                瞬时极高真空气体流量，保证中途呕吐/严重多黏痰患者呼吸道通畅。
              </p>
            </div>
            <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded mt-3 self-start">过载主动熔断</span>
          </div>

        </div>
      </div>
    </section>
  );
}
