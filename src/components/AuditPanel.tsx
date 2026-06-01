/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, Crosshair, HelpCircle, FileText, Activity, AlertCircle } from "lucide-react";
import { AUDIT_DATA } from "../data";

export default function AuditPanel() {
  return (
    <section className="py-16 px-4 bg-white max-w-7xl mx-auto w-full border-b border-slate-100">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold mb-3">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>重症救护车队 ｜ 专注长途安全转运保障</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-black text-[#1058D1] tracking-tight font-serif italic">
          为什么选择全国重症长途协调网？
        </h2>
        
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          我们拥有高配置的移动ICU重症救护车与资深跟车医护团队，全程坚守最高等效医疗监护标准，100%拒绝无证车辆，安全、专业送达目的地医院。
        </p>
      </div>

      {/* Styled exactly like the user's uploaded mobile screenshot section: "为什么选择优护送" */}
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Card 1: ① 全国平台 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/75 hover:border-[#1058D1]/30 hover:shadow-md transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
              1
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight">
              全国平台 ｜ 跨地区运力大联网
            </h3>
          </div>
          
          {/* Inner badge-pills row */}
          <div className="flex flex-wrap gap-2.5 mb-2">
            <span className="px-3 py-1 bg-slate-50 text-[#1058D1] rounded-full border border-slate-200/80 text-[11px] font-bold">
              ⚡ 24小时极速调度响
            </span>
            <span className="px-3 py-1 bg-slate-50 text-[#1058D1] rounded-full border border-slate-200/80 text-[11px] font-bold">
              🗺️ 覆盖各省/不分远近派车
            </span>
            <span className="px-3 py-1 bg-slate-50 text-[#1058D1] rounded-full border border-slate-200/80 text-[11px] font-bold">
              🏷️ 车辆就近调派快速出车
            </span>
          </div>

          <p className="text-xs text-slate-500 mt-3 leading-relaxed">
            我们在全国各省主要城市建立特种重症救护车驻守点，全天候24小时急救热线待命，接单后立即组配就近车辆及随车医护人员，保障高效率出勤服务。
          </p>
        </div>

        {/* Card 2: ② 正规合规 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/75 hover:border-[#1058D1]/30 hover:shadow-md transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
              2
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight">
              正规合规 ｜ 手续完备合法执业
            </h3>
          </div>
          
          {/* Inner badge-pills row */}
          <div className="flex flex-wrap gap-2.5 mb-2">
            <span className="px-3 py-1 bg-green-50 text-emerald-800 rounded-full border border-green-100 text-[11px] font-bold">
              🩺 卫生监督局卫健委在册
            </span>
            <span className="px-3 py-1 bg-green-50 text-emerald-800 rounded-full border border-green-100 text-[11px] font-bold">
              📋 车辆具备合规特种行驶许可证
            </span>
            <span className="px-3 py-1 bg-green-50 text-emerald-800 rounded-full border border-green-100 text-[11px] font-bold">
              👤 随行医生可查全国执业医师执照
            </span>
            <span className="px-3 py-1 bg-green-50 text-emerald-800 rounded-full border border-green-100 text-[11px] font-bold">
              ✓ 100%人证本车合一
            </span>
          </div>

          <p className="text-xs text-slate-500 mt-3 leading-relaxed">
            出车前我们主动向家属提供实体《医疗机构执业许可证》、救护车特种行驶执照及随行医护人员的纸质执业在册证明，实现完全透明、可靠的行前资质核验。
          </p>
        </div>

        {/* Card 3: ③ 专业服务 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/75 hover:border-[#1058D1]/30 hover:shadow-md transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
              3
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight">
              专业服务 ｜ 高阶重症护送团队
            </h3>
          </div>
          
          {/* Inner badge-pills row */}
          <div className="flex flex-wrap gap-2.5 mb-2">
            <span className="px-3 py-1 bg-amber-50/50 text-amber-800 rounded-full border border-amber-100 text-[11px] font-bold">
              👨‍⚕️ 具备3年以上三甲在职背景医护人员
            </span>
            <span className="px-3 py-1 bg-amber-50/50 text-amber-800 rounded-full border border-amber-100 text-[11px] font-bold">
              🏥 精通车载无创无休止呼吸机操作
            </span>
            <span className="px-3 py-1 bg-amber-50/50 text-amber-800 rounded-full border border-amber-100 text-[11px] font-bold">
              🔄 在途平稳监护/特种突发状况在途抢救
            </span>
          </div>

          <p className="text-xs text-slate-500 mt-3 leading-relaxed">
            全程跟随转驳保障，医护人员配有呼吸急救、气道管理、液体监护、心血管维持等系统性重症看护经验，随时应对复杂的异地长途生命支持。
          </p>
        </div>

        {/* Card 4: ④ 安全保障 (styled with a dedicated bordered sub-box like screenshot) */}
        <div className="bg-white rounded-2xl p-6 border-2 border-blue-600/30 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
              4
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
              安全保障 ｜ 全程重症安全大保障
            </h3>
          </div>

          {/* Screenshot-like gray border layout box */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4.5 space-y-4">
            
            <div className="flex items-start space-x-2.5">
              <span className="text-blue-600 text-sm font-bold mt-0.5">◆</span>
              <div>
                <p className="text-xs sm:text-[13px] font-bold text-slate-900">
                  【严苛正规出勤标准】:
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  我们执行最高规格的车辆安全审查，绝不采用任何私人挂靠或者篡改非标小客车的“非法救护”。所有随车设备与急诊级医护资质均真实透明。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2.5 border-t border-slate-200/60 pt-3.5">
              <span className="text-blue-600 text-sm font-bold mt-0.5">◆</span>
              <div>
                <p className="text-xs sm:text-[13px] font-bold text-slate-900">
                  【一口价包干·拒绝路上坐地起价】:
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  出车前双方白纸黑字签署《一口价无加价一站式包干保障协议》，路途中的燃油费、高速过路费、随车急救医护餐津、氧气消耗费及逆变设备等全部打入一口价包干包。
                </p>
              </div>
            </div>

          </div>

          <p className="text-[11px] text-slate-400 mt-4 leading-normal italic">
            * 我们郑重承诺：转送在途绝无任何中途要价、索要红包等行为。所有医护人员坚守严谨的执业道德，一切收费项目合同一包到底，让生命通道畅通无阻。
          </p>
        </div>

      </div>

      {/* Custom info alert block */}
      <div className="mt-10 bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 flex flex-col sm:flex-row items-start gap-3 max-w-4xl mx-auto">
        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-none" />
        <div>
          <span className="font-bold text-amber-900 text-xs sm:text-sm block">安全责任声明与透明保障：</span>
          <p className="text-amber-800 text-xs mt-1 leading-normal">
            家属随时享有资质调查核验权。我们深知长途保障的重托，承诺所有随行执业医生、注册护士执照和专业改装救护车辆特种证照均在国家系统真实可查。从床旁到床旁全方位坚守安全底线。
          </p>
        </div>
      </div>
    </section>
  );
}
