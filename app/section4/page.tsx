"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import image4 from "../../public/images/section3/image4.svg";

export default function Section4() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "Briefly what the surgery is about?",
      answer:
        "This surgery involves a minimally invasive procedure to address [specific condition]. It typically takes 1-2 hours and is performed under general anesthesia.",
    },
    {
      question: "Any medical conditions that may require extra precautions?",
      answer:
        "Patients with conditions such as diabetes, heart disease, or a history of blood clotting may require additional monitoring.",
    },
    {
      question: "Who is the ideal candidate for this surgery?",
      answer:
        "The procedure is suitable for individuals who have [condition] and have not responded to other treatments.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-center p-4">
      <div className="flex gap-3 justify-center my-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-blue-600 transition-colors">
          Learn More <ArrowRight size={16} />
        </button>

        <button className="border px-4 py-3 rounded flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <Image src={image4} alt="Demo" width={24} height={24} />
          Watch a Demo
        </button>
      </div>

      <h1 className="text-3xl font-medium my-10">Frequently asked questions</h1>

      <div className="max-w-xl mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Question row - always visible */}
            <div
              className="flex items-center p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-blue-500 font-bold mr-3 text-xl w-6 flex-shrink-0">
                {expandedIndex === index ? "−" : "+"}
              </span>
              <p className="font-medium text-left">{item.question}</p>
            </div>

            {/* Answer - appears below */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="pl-9 pr-3 pb-3 text-gray-600 text-left">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
