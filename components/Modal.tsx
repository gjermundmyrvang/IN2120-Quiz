"use client";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter
} from "@/components/ui/animated-modal";
import { questions } from "@/data/questions";
import { CustomButton } from "./CustomButton";
import { Quiz } from "./Quiz";


type props = {
    setModal: (value: boolean) => void
}

const quiz = questions

export const QuizModal = ({setModal}:props) => {

    const handleRestart = () => {
        console.log();
    }

    return (
        <div className="flex items-center justify-center flex-col w-full">
            <Modal setModal={setModal}>
                <ModalBody className="overflow-y-auto max-h-[80vh] sm:max-h-[90vh]">
                    <ModalContent>
                        <div className="flex flex-col p-1 sm:p-5 items-center">
                            <h1 className="text-center font-extrabold text-lg sm:text-2xl">{quiz.quizTitle}</h1>
                            <p>{quiz.description}</p>
                            <Quiz questions={quiz.questions} />
                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <CustomButton text="Start på nytt" onClick={handleRestart} />
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    );
}
