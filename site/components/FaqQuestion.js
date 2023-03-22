import { useState } from 'react'

function FaqQuestion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="faq-question px-3 py-3">
        <input
            id={question}
            type="checkbox"
            className="hidden panel"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
        />
        <span className="flex">
            <div className="plus text-lg pr-4 font-bold">{isOpen ? '-' : '+'}</div>
            <label htmlFor={question} className="panel-title cursor-pointer font-bold text-md md:text-xl select-none">
                {question}
            </label>
        </span>
        <div className={`panel-content transition-all duration-500 ${isOpen ? '' : 'hidden'}`}>
            {answer}
        </div>
        </div>
    )
}

export default FaqQuestion;