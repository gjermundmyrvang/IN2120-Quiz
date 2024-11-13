"use client"
type buttonProps = {
    text: string;
    onClick: () => void;
    style?: string;
    disabled?: boolean;
}

export const CustomButton = ({text, onClick, style, disabled} : buttonProps) => {

  return (
    <button className={`p-[3px] relative ${style && `${style}`}`} type='button' onClick={() => onClick()} disabled={disabled}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className={`px-8 py-2 rounded-[6px]  relative group transition duration-200 text-white  ${disabled? `bg-gray-500` : `bg-black`} ${disabled? `hover:bg-gray-500` : `hover:bg-transparent`}`}>
            {text}
        </div>
    </button>
  )
}


