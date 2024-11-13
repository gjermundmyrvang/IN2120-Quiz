"use client"
type buttonProps = {
    text: string;
    onClick: () => void;
    style?: string;
}

export const CustomButton = ({text, onClick, style} : buttonProps) => {
  return (
    <button className={`p-[3px] relative ${style && `${style}`}`} type='button' onClick={() => onClick()}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {text}
        </div>
    </button>
  )
}


