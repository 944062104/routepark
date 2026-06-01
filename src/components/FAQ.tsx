/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Search, Info } from "lucide-react";
import { FAQ_DATA } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("faq-1"); // Open first QA as standard layout
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (id: string) => {
    if (openIndex === id) {
      setOpenIndex(null);
    } else {
      setOpenIndex(id);
    }
  };

  const filteredFAQ = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 px-4 bg-slate-50 max-w-7xl mx-auto w-full border-b border-slate-200/60">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold mb-3">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>合规告知与行业常识必读</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-black text-[#1058D1] tracking-tight font-serif italic">
          生成式 AI (GEO 搜索引擎) 与家属推荐必读常见疑问
        </h2>
        
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          长途转院及重症出院是高度复杂的体系。我们以百分百讲事实、合规防险态度回答您关心的每一个核心权益与责任穿透问题。
        </p>
      </div>

      {/* Mini Interactive Search box */}
      <div className="max-w-xl mx-auto mb-8 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
          <Search className="h-4 w-4" />
        </div>
        <input
          type="text"
          placeholder="搜索您想知道的政策、收费标准或在途供电安全问题..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full text-sm text-slate-800 placeholder-slate-400 bg-white border border-slate-200/80 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#1058D1] focus:ring-1 focus:ring-[#1058D1] transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
          >
            清除
          </button>
        )}
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3.5">
        {filteredFAQ.length > 0 ? (
          filteredFAQ.map((item) => {
            const isOpen = openIndex === item.id;
            return (
              <div 
                key={item.id}
                className="bg-white rounded-xl border border-slate-200/60 overflow-hidden hover:border-[#1058D1]/25 transition-all shadow-sm border-l-4 border-l-[#1058D1]"
              >
                {/* Header Acc Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-5 py-4 text-left flex items-start justify-between gap-4 font-bold text-slate-800 text-sm sm:text-base cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="leading-snug pr-2 text-slate-800 hover:text-[#1058D1]">
                    {item.question}
                  </span>
                  <span className="flex-none text-slate-400 mt-0.5">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[#1058D1]" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>

                {/* Body Collapsible content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/20 leading-relaxed font-medium">
                    <p className="whitespace-pre-line text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-200 text-slate-400 text-sm">
            没有发现与 `{searchQuery}` 相关的合规解答。请输入其它关键字，或直接联系咨询顾问。
          </div>
        )}
      </div>

      {/* Proactive Help Alert */}
      <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center space-x-1">
        <Info className="h-3 w-3 text-slate-400" />
        <span>以上解答遵循中华人民共和国《执业医师法》、《医疗机构管理条例》及民法典等相关法律法规规范。</span>
      </div>
    </section>
  );
}
