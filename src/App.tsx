/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AlertCircle, ArrowUp, Activity, Check, Heart, ShieldAlert } from "lucide-react";

// Sub Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import AuditPanel from "./components/AuditPanel";
import Products from "./components/Products";
import CaseStudies from "./components/CaseStudies";
import Calculator from "./components/Calculator";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyBottom from "./components/StickyBottom";
import WeChatModal from "./components/WeChatModal";

export default function App() {
  const [wechatOpen, setWechatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Dynamic rolling ticket simulator to mock real nationwide dispatch activity
  const [tickerIndex, setTickerIndex] = useState(0);
  const tickerLogs = [
    "🔥 1分钟前: 途泊成功配对 长沙 ➡️ 广州 返空优惠奔驰ICU轿跑监护车，已为家属签署 ¥11,200 全包干合同",
    "⚡ 5分钟前: 途泊成功协调并申请下 5月30日 武汉 ➡️ 上海 儿科重症绿色高铁通道无缝空铁接送专线",
    "🩺 12分钟前: 航空包机急救专机部：成功对接 北京天坛医院 ICU 与 昆明 远程空中ICU转运，航管飞行批准备案已完成",
    "🟢 20分钟前: 粤港双牌专通道：协助完成 香港玛丽医院 ➡️ 深圳三甲医院 免下车通关绿色重症送舱接回",
    "⚡ 1小时前: 调度网络锁定一台北方返空山东的 Sprinter 危重奔驰车，已全额核减空驶消耗，下达返乡患者家属 ¥8,900 比价单"
  ];

  useEffect(() => {
    // Scroll state watcher
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Ticker log cycler
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerLogs.length);
    }, 6000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Quick inquiry event handler
  const handleQuickInquiry = (productName: string) => {
    // Scroll nicely to calculator section
    const element = document.getElementById("estimator-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Auto focus or fill some parts of inputs to make app highly integrated
      const startInput = document.querySelector('input[placeholder*="例如：湖北省人民医院"]');
      if (startInput) {
        (startInput as HTMLInputElement).focus();
      }
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans select-none pb-20 md:pb-24">
      
      {/* 24H Emergency Activity Ticker banner */}
      <div className="bg-[#041126] text-white border-b border-slate-800 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between overflow-hidden">
          <div className="flex items-center space-x-2 w-full">
            <span className="flex-none bg-red-600 animate-pulse px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider flex items-center space-x-1">
              <Activity className="h-3 w-3 inline-block" />
              <span>LIVE 实时动态</span>
            </span>
            {/* Animated cross-fade scroll */}
            <div className="text-slate-200 font-medium truncate animate-fade-in">
              {tickerLogs[tickerIndex]}
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-1.5 text-blue-400 font-bold whitespace-nowrap">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-status-breathe"></span>
            <span>合规调度中心在线</span>
          </div>
        </div>
      </div>

      {/* Main Global Header */}
      <Header onOpenWeChat={() => setWechatOpen(true)} />

      {/* Main Core View Area */}
      <main className="flex-grow flex flex-col">
        
        {/* Banner 1: Gold Hero Segment */}
        <Hero onOpenWeChat={() => setWechatOpen(true)} />

        {/* Banner 2: Platform Compliance Audit criteria */}
        <AuditPanel />

        {/* Banner 3: Integrated Multi-mode Product catalog */}
        <Products onQuickInquiry={handleQuickInquiry} />

        {/* Banner 4: Calculated Real Reduction Cases studies */}
        <CaseStudies />

        {/* Banner 5: Interactive smart budget calculator widget */}
        <Calculator />

        {/* Banner 6: SEO GEO FAQs */}
        <FAQ />

      </main>

      {/* Bottom Global Disclaimer & Footer */}
      <Footer />

      {/* Fixed Sticky dual channels floating conversion bar */}
      <StickyBottom onOpenWeChat={() => setWechatOpen(true)} />

      {/* Floating back-to-top indicator tag strictly on desk layout */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="hidden md:flex fixed bottom-24 right-6 z-30 p-3 bg-white hover:bg-slate-50 border border-slate-200 text-[#0B3D91] rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
          title="回滚顶部"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Full screen WeChat modal handler */}
      <WeChatModal isOpen={wechatOpen} onClose={() => setWechatOpen(false)} />

    </div>
  );
}
