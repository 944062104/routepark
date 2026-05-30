import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#060d1b] text-slate-400 text-xs leading-relaxed border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-4">
        {/* Legal & Disclaimer */}
        <div className="space-y-2 text-[11px] leading-relaxed">
          <p className="font-semibold text-slate-300 text-xs">⚖️ 法律声明与免责条款</p>
          <p>
            1. 本站 <span className="font-mono text-slate-200">routepark.com</span> 所展示的&ldquo;途泊转运协助中心&rdquo;为非急救医疗转运调度与信息咨询服务提供商，属于商业协调调度和方案定制主体。
          </p>
          <p>
            2. 所有展示的车辆型号、医疗设备配置、医护资质信息等仅供案例参考说明，具体执行方案以实际签约为准。
          </p>
          <p>
            3. 途泊（RoutePark）仅在此承担针对三方资质预审归档的严实完整、合同指导价格公示及调度方案真实性的协调责任，不直接介入具体的床旁抢救实施与车辆物理行驶控制，因此依法隔离运输与诊疗事故。
          </p>
          <p>
            4. 紧急救援请拨打 <span className="font-mono text-red-400">120</span>。途泊仅承接非急救性质的转运调度服务，不涉及120院前急救体系。
          </p>
        </div>

        <div className="border-t border-slate-800/50 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <Heart className="w-3 h-3 text-red-500 animate-pulse" />
            <span className="text-slate-300 font-semibold">途泊 RoutePark</span>
            <span className="text-slate-600">&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>ICP备案号: 湘ICP备2025XXXXXX号</span>
            <span className="hidden sm:inline">|</span>
            <span>湘公网安备 430XXXXXXXXXXXXX号</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
