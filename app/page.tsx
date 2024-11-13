"use client"
import { CustomButton } from "@/components/CustomButton";
import { QuizModal } from "@/components/Modal";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useState } from "react";

export default function Home() {

  const [modal, setModal] = useState(false)

  const handleStartQuiz = () => {
    setModal(true);
    console.log("Morn");
  }

  return (
   <div className="flex justify-center items-center h-screen bg-white  dark:bg-black-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.3] relative">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-6xl w-full p-5">
        <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <div className="flex flex-col w-full justify-center items-center p-10 space-y-5">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">IN2120 QUIZ</h1>
            <h3 className="text-lg sm:text-2xl font-mono">Laget av Gjerry feat NotebookLM</h3>
            <p>Jeg merget alle PDFer fra forelesninger og matet de til NotebookLM og ba den lage relevante quiz-spørsmål fra pensum. Dere får bedømme selv hvor god jobb den har gjort. Jeg tar på ingen mulig måte ansvar for at spørsmålene eller svaralternativene er korrekt eller ikke</p>
            <CustomButton text="Start quiz" onClick={handleStartQuiz} />
          </div>
        </BackgroundGradient>
        {modal && 
          <QuizModal setModal={setModal} />
        }
      </div>
   </div>
  );
}
