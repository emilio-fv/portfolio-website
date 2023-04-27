import React, { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    // Set state for name, email, subject, and message
    const initialFormState = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    const [formData, setFormData] = useState(initialFormState);
    const [status, setStatus] = useState(null)

    // Form
    const form = useRef();

    // Handle form changes
    const handleChanges = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    // Handle submit form 
    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if all fields filled
        for (const [key, value] of Object.entries(formData)) {
            if (value === "") {
                console.log(`Missing ${key}`);
                setStatus("invalid form")
                return;
            }
        }

        emailjs.sendForm('portfolio_website', 'template_jbnjdgf', form.current, 'tHeaGfRdFZHccy_bq')
            .then((result) => {
                console.log(result.text);
                setStatus("success");
            }, (error) => {
                console.log(error.text);
            })
    }

    return (
        <div id="contact" className="container px-40 flex flex-col justify-center gap-10 h-screen border-solid border-b-[.5px] border-white">
            <p className="text-4xl">Contact</p>
            <div className="flex flex-col justify-center items-center">
                {status === 'invalid form' ? <p className="text-red-500 ">All fields required.</p> : null}
                {status === 'success' ? <p>Message successfully sent!</p> : null}
                <form className="flex flex-col items-center gap-[10px] w-[40%]" ref={form} onSubmit={handleSubmit}>
                    <label className="flex flex-col gap-[5px] w-[100%] text-2xl">
                        Name
                        <input className="text-black px-3 py-1" type="text" name="name" id="name" value={formData.name} onChange={event => handleChanges(event)}/>
                    </label>
                    <label className="flex flex-col gap-[5px] w-[100%] text-2xl">
                        Email
                        <input className="text-black px-3 py-1" type="email" name="email" id="email" value={formData.email} onChange={event => handleChanges(event)}/>
                    </label>
                    <label className="flex flex-col gap-[5px] w-[100%] text-2xl">
                        Subject
                        <input className="text-black px-3 py-1" type="text" name="subject" id="subject" value={formData.subject} onChange={event => handleChanges(event)}/>
                    </label>
                    <label className="flex flex-col gap-[5px] w-[100%] text-2xl">
                        Message
                        <textarea className=" text-black px-3 py-1" name="message" id="message" rows="5" value={formData.message} onChange={event => handleChanges(event)}/>
                    </label>
                    <div className="flex justify-center gap-[50px] w-[40%] pt-3">
                        <button className="bg-accent-medium border-solid border-[.5px] border-white w-full py-2 hover:border-slate-400" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;