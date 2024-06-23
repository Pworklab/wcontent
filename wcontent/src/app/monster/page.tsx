"use client"
import { Back_btn } from "@/components/btn_controller";
import M_pannel from "@/components/m_pannel";
export default function Home() 
{
  return (
    <main className="bg-fullscreen">
    <div className="text-white">monsterPage

    <div className="mx-20">
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    <M_pannel></M_pannel>
    </div>
    </div>   
    <Back_btn></Back_btn>
    </div>
    </main>
    );
}
// update it later