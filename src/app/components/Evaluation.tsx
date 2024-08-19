import CircleTick from "../../../public/check_circle.png";
import Vector_Warning from "../../../public/Vector_Warning.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
export default function Evaluation() {
  return (
    <div className="flex flex-col gap-3 lg:w-[24rem] xl:w-[26rem]">
      <div className=" bg-white rounded-[1.5rem] lg:w-[24rem] 2xl:w-[28rem] xl:w-[26rem] 3xl:w-[35rem]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="hover:no-underline pr-4 py-1">
              <div className="flex gap-3 items-center">
                <div className="relative">
                  <svg
                    className="w-[8rem] h-[8rem] lg:w-[6rem] lg:h-[6rem]"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-[#EAF0F2] stroke-current"
                      stroke-width="7"
                      cx="50"
                      cy="50"
                      r="32"
                      fill="transparent"
                    ></circle>

                    <circle
                      className="text-[#3CC28A]  progress-ring__circle stroke-current"
                      stroke-width="7"
                      stroke-linecap="round"
                      cx="50"
                      cy="50"
                      r="32"
                      fill="transparent"
                      stroke-dasharray="200.2"
                      stroke-dashoffset="calc(200.2 - (200.2 * 70) / 100)"
                    ></circle>
                  </svg>
                  <div className="text-2xl font-bold text-[#1E2026] absolute inset-0 flex items-center justify-center font-bricolage">
                    7/10
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[#98A1BB] text-left text-[12px] font-bold">
                    Criteria A:
                  </div>
                  <div className="text-[20px] lg:text-[16px] max-w-[5rem] lg:max-w-[15rem] font-bold text-left text-[#3D404B]">
                    Understanding Knowledge Questions
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t p-4">
              <div className="flex flex-col gap-4">
                <div className="text-[#5B6170] pt-4 text-[16px] font-semibold">
                  The essay identifies and focuses on the knowledge question
                  regarding the resolvability of disputes over knowledge claims
                  within disciplines.
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold text-[20px]">Strengths</div>
                  <div className="rounded-[1rem] p-3 flex flex-col gap-3 border bg-[#fafdfc] border-[#71d3a9]">
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={CircleTick}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Demonstrates a good understanding of the prescribed
                        title and the associated knowledge questions.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={CircleTick}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Addresses the nature of disputes in both the Natural
                        Sciences and Human Sciences effectively.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold text-[20px]">
                    Scope of Improvement
                  </div>
                  <div className="rounded-[1rem] p-3 flex flex-col gap-3 border bg-[#fffefc] border-[#fbe3a5]">
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={Vector_Warning}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Demonstrates a good understanding of the prescribed
                        title and the associated knowledge questions.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={Vector_Warning}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Addresses the nature of disputes in both the Natural
                        Sciences and Human Sciences effectively.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className=" bg-white rounded-[1.5rem] lg:w-[24rem] 2xl:w-[28rem] xl:w-[26rem] 3xl:w-[35rem]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="hover:no-underline pr-4 py-1">
              <div className="flex gap-3 items-center">
                <div className="relative">
                  <svg
                    className="w-[8rem] h-[8rem] lg:w-[6rem] lg:h-[6rem]"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-[#EAF0F2] stroke-current"
                      stroke-width="7"
                      cx="50"
                      cy="50"
                      r="32"
                      fill="transparent"
                    ></circle>

                    <circle
                      className="text-[#F9C94E]  progress-ring__circle stroke-current"
                      stroke-width="7"
                      stroke-linecap="round"
                      cx="50"
                      cy="50"
                      r="32"
                      fill="transparent"
                      stroke-dasharray="200.2"
                      stroke-dashoffset="calc(200.2 - (200.2 * 50) / 100)"
                    ></circle>
                  </svg>
                  <div className="text-2xl font-bold text-[#1E2026] absolute inset-0 flex items-center justify-center font-bricolage">
                    5/10
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[#98A1BB] text-left text-[12px] font-bold">
                    Criteria A:
                  </div>
                  <div className="text-[20px] lg:text-[16px] max-w-[5rem] lg:max-w-[15rem] font-bold text-left text-[#3D404B]">
                    Understanding Knowledge Questions
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t p-4">
              <div className="flex flex-col gap-4">
                <div className="text-[#5B6170] pt-4 text-[16px] font-semibold">
                  The essay identifies and focuses on the knowledge question
                  regarding the resolvability of disputes over knowledge claims
                  within disciplines.
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold text-[20px]">Strengths</div>
                  <div className="rounded-[1rem] p-3 flex flex-col gap-3 border bg-[#fafdfc] border-[#71d3a9]">
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={CircleTick}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Demonstrates a good understanding of the prescribed
                        title and the associated knowledge questions.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={CircleTick}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Addresses the nature of disputes in both the Natural
                        Sciences and Human Sciences effectively.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold text-[20px]">
                    Scope of Improvement
                  </div>
                  <div className="rounded-[1rem] p-3 flex flex-col gap-3 border bg-[#fffefc] border-[#fbe3a5]">
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={Vector_Warning}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Demonstrates a good understanding of the prescribed
                        title and the associated knowledge questions.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={Vector_Warning}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Addresses the nature of disputes in both the Natural
                        Sciences and Human Sciences effectively.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className=" bg-white rounded-[1.5rem] lg:w-[24rem] 2xl:w-[28rem] xl:w-[26rem] 3xl:w-[35rem]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="hover:no-underline pr-4 py-1">
              <div className="flex gap-3 items-center">
                <div className="relative">
                  <svg
                    className="w-[8rem] h-[8rem] lg:w-[6rem] lg:h-[6rem]"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-[#EAF0F2] stroke-current"
                      stroke-width="7"
                      cx="50"
                      cy="50"
                      r="32"
                      fill="transparent"
                    ></circle>

                    <circle
                      className="text-[#EB751F]  progress-ring__circle stroke-current"
                      stroke-width="7"
                      stroke-linecap="round"
                      cx="50"
                      cy="50"
                      r="32"
                      fill="transparent"
                      stroke-dasharray="200.2"
                      stroke-dashoffset="calc(200.2 - (200.2 * 30) / 100)"
                    ></circle>
                  </svg>
                  <div className="text-2xl font-bold text-[#1E2026] absolute inset-0 flex items-center justify-center font-bricolage">
                    3/10
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[#98A1BB] text-left text-[12px] font-bold">
                    Criteria A:
                  </div>
                  <div className="text-[20px] lg:text-[16px] max-w-[5rem] lg:max-w-[15rem] font-bold text-left text-[#3D404B]">
                    Understanding Knowledge Questions
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t p-4">
              <div className="flex flex-col gap-4">
                <div className="text-[#5B6170] pt-4 text-[16px] font-semibold">
                  The essay identifies and focuses on the knowledge question
                  regarding the resolvability of disputes over knowledge claims
                  within disciplines.
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold text-[20px]">Strengths</div>
                  <div className="rounded-[1rem] p-3 flex flex-col gap-3 border bg-[#fafdfc] border-[#71d3a9]">
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={CircleTick}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Demonstrates a good understanding of the prescribed
                        title and the associated knowledge questions.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={CircleTick}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Addresses the nature of disputes in both the Natural
                        Sciences and Human Sciences effectively.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold text-[20px]">
                    Scope of Improvement
                  </div>
                  <div className="rounded-[1rem] p-3 flex flex-col gap-3 border bg-[#fffefc] border-[#fbe3a5]">
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={Vector_Warning}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Demonstrates a good understanding of the prescribed
                        title and the associated knowledge questions.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <Image
                          width={60}
                          height={60}
                          src={Vector_Warning}
                          alt="circle_tick"
                        />
                      </div>
                      <div className="text-[#3D404B] text-[18px] font-bold">
                        Addresses the nature of disputes in both the Natural
                        Sciences and Human Sciences effectively.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
