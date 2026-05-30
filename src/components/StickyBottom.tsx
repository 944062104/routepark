/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, Phone } from "lucide-react";
import { HOTLINE_PHONE } from "../data";

interface StickyBottomProps {
  onOpenWeChat: () => void;
}

export default function StickyBottom({ onOpenWeChat }: StickyBottomProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:max-w-lg md:rounded-2xl md:border md:border-slate-200/80 md:shadow-2xl h-[60px] flex shadow-[0_-4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
      
      {/* Left side WeChat (emerald-green theme #07C160) */}
      <button
        type="button"
        onClick={onOpenWeChat}
        className="w-1/2 h-full bg-[#07C160] hover:bg-[#069e4f] active:bg-[#058b44] text-white flex flex-col justify-center items-center text-center cursor-pointer transition-colors px-2 border-r border-[#07C160]"
      >
        <div className="flex items-center space-x-1">
          <MessageSquare className="h-4 w-4 fill-current text-white flex-none" />
          <span className="font-extrabold text-[13px] sm:text-sm tracking-wide">
            💬 微信获取比价单
          </span>
        </div>
        <span className="text-[9px] text-emerald-100 font-bold tracking-wider mt-0.5 opacity-90">
          点击复制微信号并打开
        </span>
      </button>

      {/* Right side Hotline Calling (alarm-red theme #D90429) */}
      <a
        href={`tel:${HOTLINE_PHONE}`}
        className="w-1/2 h-full bg-[#D90429] hover:bg-[#b80322] active:bg-[#900219] text-white flex flex-col justify-center items-center text-center transition-colors px-2"
      >
        <div className="flex items-center space-x-1">
          <Phone className="h-4 w-4 fill-current text-white flex-none" />
          <span className="font-extrabold text-[13px] sm:text-sm tracking-wide">
            📞 拨打顾问调度专线
          </span>
        </div>
        <span className="text-[9px] text-rose-100 font-bold tracking-wider mt-0.5 opacity-90">
          5分钟内匹配出车方案
        </span>
      </a>

    </div>
  );
}
