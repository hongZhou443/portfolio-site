import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);

    }

    const addEmail = async (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            console.log(`Invalid email: ${email}`);
            props.onError(`Invalid email: ${email}`);
            props.onNotify();
            return;
        }

        if (!name) {
            console.log('Empty name field');
            props.onError(`Empty name field`);
            props.onNotify();
            return;
        }

        if (!message) {
            console.log('Empty message field');
            props.onError(`Empty message field`);
            props.onNotify();
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "emails"), {
                email: email,
                name: name,
                message: message,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        setName('');
        setEmail('');
        setMessage('');

        document.getElementById("contact-name-field").value = "";
        document.getElementById("contact-email-field").value = "";
        document.getElementById("contact-text-field").value = "";

    }

    return (
        <div id='contact' className='page-wrapper'>
            <div className='content'>
                <div className='panel full'>
                    <div className='content'>

                        <div className='text title'>
                            Contact me.
                        </div>

                        <div className='line thin margin-wide' />

                        <div className='contact-form'>
                            <div className='contact-outer'>
                                <div className='contact-inner'>
                                    <div>
                                        <textarea
                                            id='contact-name-field'
                                            className='contact-box text body small'
                                            type="name"
                                            placeholder="name"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            id='contact-email-field'
                                            className='contact-box text body small'
                                            type="email"
                                            placeholder="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="contact-inner">
                                    <textarea
                                        id = 'contact-text-field'
                                        className='contact-box tall text body small'
                                        type="message"
                                        placeholder="message"
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="contact-outer">
                                <button
                                    className='contact-button hover text small light'
                                    type="submit"
                                    onClick={addEmail}
                                >
                                    Send
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;