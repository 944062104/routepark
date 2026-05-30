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
          <span>第三方居间调度严格审查规范</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-black text-[#0B3D91] tracking-tight font-serif italic">
          为什么通过途泊（RoutePark）协调，比您自己盲目找车更安全、更省钱？
        </h2>
        
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          “我们不是单一的救护车所有者，而是您在转送协调市场上的专业 <strong>‘买方经纪人’</strong>。我们始终站在患者及家属的客观立场，用钢规铁律审查、筛选、核查出勤的每一部特种救护车辆、每一位随车急诊临床医护人员。”
        </p>
      </div>

      {/* Grid of the 3 Audits */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {AUDIT_DATA.map((item, idx) => {
          return (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl p-6 border border-slate-200/60 hover:border-[#0B3D91]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-l-4 border-l-[#0B3D91]"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#0B3D91] font-mono text-3xl font-black opacity-30 select-none">
                    0{idx + 1}
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-100">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug mb-1">
                  {item.title}
                </h3>
                
                <h4 className="text-xs font-bold text-[#009688] mb-4">
                  {item.subtitle}
                </h4>

                <p className="text-[13px] leading-relaxed text-slate-500 mb-6 bg-white p-3 rounded-xl border border-slate-100">
                  {item.description}
                </p>
              </div>

              {/* Bullet details under audit */}
              <div className="border-t border-slate-200/60 pt-4 mt-auto">
                <p className="text-xs font-bold text-slate-700 mb-2 flex items-center space-x-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>途泊准入核对细项</span>
                </p>
                <ul className="space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-xs text-slate-600">
                      <span className="text-emerald-500 mr-2 mt-0.5 flex-none font-bold">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          );
        })}
      </div>

      {/* Custom info alert block */}
      <div className="mt-10 bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 flex flex-col sm:flex-row items-start gap-3 max-w-4xl mx-auto">
        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-none" />
        <div>
          <span className="font-bold text-amber-900 text-xs sm:text-sm block">安全责任声明与透明保障：</span>
          <p className="text-amber-800 text-xs mt-1 leading-normal">
            家属随时享有资质调阅权。如遇合作方出勤时出现证照信息无法于卫健委系统查询或行驶执照与备案不符等情形，途泊调度网均立刻全额原路赔偿全部订金、永久终结该车队网络派单，并全权代偿差旅损失，确保医疗运送市场不粘染任何“黑救护车”行径。
          </p>
        </div>
      </div>
    </section>
  );
}
