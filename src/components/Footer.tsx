/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldAlert, Scale, Info, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 max-w-7xl mx-auto w-full">
      <div className="border-t border-slate-800 pt-8 space-y-6">
        
        {/* Header Icon Indicator */}
        <div className="flex items-center space-x-2 text-slate-200 text-xs sm:text-sm font-bold opacity-80">
          <Scale className="h-4 w-4 text-amber-500" />
          <span>【重症长途转送全国调度中心 法律合规及风险豁免公示】</span>
        </div>

        {/* Legal Disclaimer clauses list - size 11px, light gray */}
        <div className="text-[11px] sm:text-[12px] leading-relaxed space-y-3.5 text-slate-400 select-text bg-[#030d1d]/30 p-5 rounded-xl border border-slate-800">
          <p>
            1. 本中心为您提供符合国家和地方行业规范的非急救长途重症转运、空铁联运及大湾区跨境医疗送返服务，属于具备专业安全保障与统筹能力的重症运输服务管理网络。
            <strong className="text-slate-200">
              我们并非各地方政府设立的公益性 120 院前急救中心，而是为异地转院、平稳出院返乡等长途重症需求提供高规格定制化生命支持和监护转运的专业承运保障中心。
            </strong>
          </p>

          <p>
            2. 本中心安排出勤的所有重症监护救护车辆均执有正规有效的《医疗机构执业许可证》与特种专用车辆《行驶证》。在组配出车前，我们均主动向家属出勤出示相关证照、随行急诊科或 ICU 医护之卫健委在册《医师/护士执业证书》，保障转院一路合法正规、人证车辆高度合一。
          </p>

          <p>
            3. 
            <strong className="text-slate-200">
              在长途护运途中，我们将由具备多年急诊重症科室背景的资深医生及护士进行在途连续指征监测，并全额配套高额意外客运险。我们承诺在出发前同病患家属白纸黑字签署正规《包干保障转运合同》，燃油、路桥通行费、急救耗材一次定价全部包干，绝无任何巧立名目的中途追加收费，全天候守护生命健康底线。
            </strong> 
          </p>

          <p>
            4. 本中心专门承接生命体征相对平稳、处于稳定药物或无创呼吸支持维持期之下的跨区域院际转院协调、重症患者送返。
            <strong className="text-amber-500 block font-bold mt-1.5 flex items-center gap-1">
              <ShieldAlert className="h-3.5 w-3.5" />
              如遇突发特大外伤、大面积急性心梗、心跳骤停等需要第一时间执行“就近、就急”现场快速建立气道及医学急重抢救的场景，请家属切莫在此页面等待并立刻直拨国家 120 服务，行使公共紧急避险特许权！
            </strong>
          </p>
        </div>

        {/* Copyright, ICP rows, links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800 pt-6 text-[10px] sm:text-xs">
          <div className="space-y-1">
            <p className="text-slate-500">
              © 2026 全国非急救重症长途转院调度咨询服务网 版权所有。
            </p>
            <p className="text-slate-600 font-mono">
              粤ICP备25048289号-1 ｜ 信息安全服务等保评估核录编号: NS-4289091
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-[10px] text-slate-500 bg-slate-800/45 px-3 py-1 bg-slate-950 rounded-lg border border-slate-800">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-none" />
            <span>三合资质链双重HTTPS安全加密防护中 · 防御信息泄漏</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
