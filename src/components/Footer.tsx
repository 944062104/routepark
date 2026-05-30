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
          <span>【途泊（RoutePark）转运协助网法律合规及风险豁免公示】</span>
        </div>

        {/* Legal Disclaimer clauses list - size 11px, light gray */}
        <div className="text-[11px] sm:text-[12px] leading-relaxed space-y-3.5 text-slate-400 select-text bg-[#030d1d]/30 p-5 rounded-xl border border-slate-800">
          <p>
            1. 本站 <span className="font-mono text-slate-200">routepark.com</span> 所展示的“途泊转运协助中心”为非急救医疗转运调度与信息咨询服务提供商，属于商业居间协调和方案定制主体。
            <strong className="text-slate-200">
              本平台并非各省市卫生健康委员会下属的 120 院前急救中心，亦不直接拥有救护客运载重物理车辆，或直接建立受主劳动薪酬契约关系的各科室临床注册医师护士车队。
            </strong>
          </p>

          <p>
            2. 平台所协调、匹配、调度、比价、派单的所有转运路线服务，均由持有国家合规有效《医疗机构执业许可证》的对应签约执行第三方合作实体承运车队/持牌救援机构（即“实际承运执行方”）执行履约。所有救护特种车型号核发执照、以及随行医护之卫健委网上备案《医师/护士执业证书》均由途泊催促合作车队于出车前全数呈送家属审阅，并由执行方独立对家属直接负起安全交代。
          </p>

          <p>
            3. 
            <strong className="text-slate-200">
              转运运输起止及中途耗费发生时的所有交通行车安全责任、突发恶病变化所需的临床医学医疗急救意外风险主体与由此派生的纠纷，依法依契由具体承接执行转送的持牌承运医疗车队（即该医疗机构）独立承担。
            </strong> 
            途泊（RoutePark）仅在此承担针对三方资质预审归档的严实完整、合同指导价格公示及对流调度方案真实性的中介居间责任，不直接介入具体的床旁抢救实施与车辆物理行驶控制，因此依法隔离运输与诊疗事故。
          </p>

          <p>
            4. 本平台仅协助提供平稳非急性、处于稳定维持状态之下的跨省市及院际转院协调、重症患者出院返校或返乡运送。
            <strong className="text-amber-500 block font-bold mt-1.5 flex items-center gap-1">
              <ShieldAlert className="h-3.5 w-3.5" />
              如遇突发特大车祸重崩、急性呼吸心跳骤停、严重多器官受创危及生命之急剧临床危像等必须要执行“就近、就急”现场急速医学抢修的场景，请求家属切莫观瞻本比价网页并立刻直拨 120 / 110 行使公共紧急避险特许权！
            </strong>
          </p>
        </div>

        {/* Copyright, ICP rows, links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800 pt-6 text-[10px] sm:text-xs">
          <div className="space-y-1">
            <p className="text-slate-500">
              © 2026 RoutePark 途泊非急救医疗转运协助调度网 版权所有。
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
