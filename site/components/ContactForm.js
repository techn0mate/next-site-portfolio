import React, { useState } from 'react'

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    return (
        <>
        <section className="w-full md:w-3/5 m-auto">
                <form action="https://formspree.io/f/myylkyrp" method="POST" className="space-y-4 w-full">
                    <div className="w-full">
                        <label for="email" className="block mb-2 text-sm font-medium">Your email</label>
                        <input name="email" type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} className="shadow-md bg-gray-50 border-2 border-gray-100 text-black text-sm rounded-lg focus:ring-primary-500 focus:outline-none focus:border-primary-500 block w-full p-2.5 dark:shadow-sm-light" placeholder="name@email.com" required />
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium  ">Subject</label>
                        <input name="subject" type="text" id="subject" value={subject} onChange={e=>setSubject(e.target.value)} className="block p-3 w-full text-sm  bg-gray-50 rounded-lg border-2 text-black  border-gray-100 shadow-md focus:outline-none  focus:border-primary-500 dark:bg-gray-100 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium ">Your message</label>
                        <textarea name="message" id="message" rows="6" value={message} onChange={e=>setMessage(e.target.value)} className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg text-black  shadow-md border-2 border-gray-100 focus:outline-none  focus:border-primary-500 dark:bg-gray-100 " placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-indigo-600 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
        </section>
        </>
    )
}

export default ContactForm