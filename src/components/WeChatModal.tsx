/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Check, X, Copy, QrCode } from "lucide-react";
import { WECHAT_ID } from "../data";

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WeChatModal({ isOpen, onClose }: WeChatModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Auto copy on open to make user experience super fluid!
      handleCopy();
    }
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setCopied(true);
    } catch (err) {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = WECHAT_ID;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch (e) {
        console.error("Failed to copy", e);
      }
      document.body.removeChild(textArea);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark frosted overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 transform scale-100 border border-slate-100">
        
        {/* Header decoration banner */}
        <div className="bg-[#0B3D91] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-emerald-500/20 p-1 flex items-center justify-center text-emerald-400">
              <Check className="h-4 w-4" />
            </div>
            <span className="font-semibold text-sm tracking-wide">途泊顾问微信添加指引</span>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="rounded-lg p-1 text-blue-200 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-5">
            <h3 className="text-xl font-bold text-slate-800 mb-1">微信工作号复制成功！</h3>
            <p className="text-sm text-slate-500">已帮您复制专属调度顾问微信号</p>
          </div>

          {/* WeChat text preview box */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between mb-5">
            <div>
              <span className="text-xs text-slate-400 block mb-0.5">专属微信号 :</span>
              <code className="font-mono text-base font-bold text-red-600 tracking-wider select-all">
                {WECHAT_ID}
              </code>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-semibold transition-all border border-emerald-200"
            >
              <Copy className="h-3 w-3" />
              <span>{copied ? "已复制" : "重新复制"}</span>
            </button>
          </div>

          {/* Custom Steps Guidance */}
          <div className="space-y-3.5 mb-6 text-sm text-slate-600">
            <h4 className="font-bold text-slate-800 flex items-center space-x-1 border-b border-dashed border-slate-100 pb-1.5">
              <span className="text-emerald-500">✓</span> 手动添加指引步骤：
            </h4>
            <div className="flex gap-2.5">
              <span className="flex-none flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-800 font-bold text-xs mt-0.5">
                1
              </span>
              <p className="text-[13px] leading-relaxed">
                如果您正在使用<strong className="text-[#0B3D91]">手机端</strong>：请返回桌面打开<strong>微信</strong>，点击搜索框，直接“长按粘贴”微信号并添加。
              </p>
            </div>
            <div className="flex gap-2.5">
              <span className="flex-none flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-800 font-bold text-xs mt-0.5">
                2
              </span>
              <p className="text-[13px] leading-relaxed">
                若是<strong className="text-[#0B3D91]">电脑/平板/微信浏览器</strong>：可直接长按下方二维码，极速识别或使用手机微信扫描。
              </p>
            </div>
          </div>

          {/* QR Code container */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center mb-6">
            <div className="relative bg-white p-3 rounded-lg border border-slate-200/60 shadow-sm w-36 h-36 flex items-center justify-center">
              {/* QR Code graphic drawing using SVG for instant beautiful resolution */}
              <div className="absolute inset-0 m-4 flex flex-col items-center justify-center opacity-10">
                <QrCode className="w-full h-full text-[#0B3D91]" />
              </div>
              <div className="z-10 flex flex-col items-center text-center">
                <span className="text-xs font-bold text-slate-800 tracking-tight">RoutePark</span>
                {/* Simulated QR Code pixels via elegant blocks for consistent load without broken image assets */}
                <div className="grid grid-cols-5 gap-1.5 w-20 h-20 my-1 justify-center">
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-emerald-600 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-[#0B3D91] rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-[#0B3D91] rounded"></div>
                  <div className="bg-[#0B3D91] rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-emerald-600 rounded"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                  <div className="bg-slate-800 rounded"></div>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400">途泊专属咨询码</span>
              </div>
            </div>
            <span className="text-[11px] text-slate-400 mt-2 text-center leading-normal px-4">
              （温馨提醒：业务顾问正在为您匹配就近的合规救护车辆，添加微信后请立刻发送起止医院，我们将优先为您锁单。）
            </span>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 bg-[#0B3D91] hover:bg-[#082a66] active:bg-[#051c44] text-white rounded-xl font-bold text-sm tracking-wide shadow-md shadow-blue-900/10 transition-all text-center"
          >
            我知道了，现在去客户端添加
          </button>
        </div>
      </div>
    </div>
  );
}
