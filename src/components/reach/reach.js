import React, { useState} from 'react';
import './reach.css'
import Gmap from "../gmap/gmap";

const Reach = () => {

    const [selectedfirstname, setSelectedfirstname] = useState('');
    const [selectedlastname, setSelectedlastname] = useState('');
    const [selectedemail, setSelectedemail] = useState('');
    const [selectedtelephone, setSelectedtelephone] = useState('');
    const [selectedmessage, setSelectedmessage] = useState('');
    const [selectedtandc, setSelectedtandc] = useState(false);

    const [selectedfirstnameerror, setSelectedfirstnameerror] = useState('');
    const [selectedlastnameerror, setSelectedlastnameerror] = useState('');
    const [selectedemailerror, setSelectedemailerror] = useState('');
    const [selectedtelephoneerror, setSelectedtelephoneerror] = useState('');
    const [selectedmessageerror, setSelectedmessageerror] = useState('');
    const [selectedtandcerror, setSelectedtandcerror] = useState('');

    const handleSubmit = () => {
        setSelectedfirstnameerror('');
        setSelectedlastnameerror('');
        setSelectedemailerror('');
        setSelectedtelephoneerror('');
        setSelectedmessageerror('');
        setSelectedtandcerror('');
        const fnamevalidationscheck = namevalidation(setSelectedfirstnameerror, 'first', selectedfirstname)
        const lnamevalidationscheck = namevalidation(setSelectedlastnameerror, 'last', selectedlastname)
        const validateEmailscheck = validateEmail(setSelectedemailerror, selectedemail)
        const validateMessegescheck = selectedmessage !== '';
        const validatePhoneNumberscheck = validatePhoneNumber(setSelectedtelephoneerror, selectedtelephone)
        let ischecked = false;
        if (selectedtandc) {
            ischecked = true;
        }
        if (fnamevalidationscheck && lnamevalidationscheck && validateEmailscheck && validateMessegescheck && validatePhoneNumberscheck && ischecked) {
            const alertMessage = `All Values are correct\n\nFirst name is ${selectedfirstname}\nLast name is ${selectedlastname}\nEmail is ${selectedemail}\nTelephone number is ${selectedtelephone}\nMessage is "${selectedmessage}"\nT&C is ${selectedtandc ? "checked" : "unchecked"}`;
            alert(alertMessage);
        }
    }

    function namevalidation(func, nametype, name) {

        if (!name) {
            func('Please enter a ' + nametype + ' name.');
            return false;
        }
        // Regular expression for valid first name (allows only letters and spaces)
        const nameRegex = /^[A-Za-z ]+$/;
        // Check if the first name is valid
        if (!nameRegex.test(name)) {
            func('Invalid ' + nametype + ' name. Only letters and spaces are allowed.');
            return false;
        } else {
            func(''); // Clear any previous error messages
            return true;
        }
    }


    function validateEmail(func, email) {
        if (!email) {
            func("Please enter a email");
            return false;

        }
        // Regular expression for a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the email is valid
        if (emailRegex.test(email)) {
            func('');
            return true
        } else {
            func("Invalid email address! ");
            return false;
        }

    }


    function validatePhoneNumber(func, tel) {
        if (!tel) {
            func("Please enter a email");
            return false;
        }
        // Regular expression for a valid North American phone number
        const phoneRegex = /^(\+\d{11}|\d{10})$/;

        // Check if the phone number is valid
        if (phoneRegex.test(tel)) {
            func('');
            return true
        } else {
            func("Invalid phone number! enter 10 numbers or 11 numbers with + mark(country code)");
            return false;
        }
    }

    return (
        <div className={'reach-Main'} id={'reach'}>
            <div className={'reach-header'}>
                <h3 className={'reach-title'}>
                    How to reach us
                </h3>
                <p className={'reach-description'}>
                    Lorem ipsum dolor sit amet, consetetur.
                </p>
            </div>
            <div className={'form-and-map'}>
                <div className={'reach-form'}>
                    <form className={'reach-form-form row'}>
                        <div className="col-sm-6 field">
                            <label htmlFor="firstname" className="form-label">First Name *

                                <input type="input" className="form-control" id="firstname" value={selectedfirstname}
                                       onChange={e => setSelectedfirstname(e.target.value)}
                                       aria-describedby="firstname"/>
                            </label>
                            <div id="fnameHelp"
                                 className={selectedfirstnameerror === '' ? 'form-text' : 'form-text active'}>{selectedfirstnameerror}
                            </div>
                        </div>
                        <div className="col-sm-6 field">
                            <label htmlFor="lastname" className="form-label">Last Name *
                                <input type="input" className="form-control" id="lastname" value={selectedlastname}
                                       onChange={e => setSelectedlastname(e.target.value)}
                                       aria-describedby="lastnameHelp"/></label>
                            <div id="lnameHelp"
                                 className={selectedlastnameerror === '' ? 'form-text' : 'form-text active'}>{selectedlastnameerror}
                            </div>
                        </div>
                        <div className="col-12 field">
                            <label htmlFor="email" className="form-label">Email address *
                                <input type="email" className="form-control " id="email" value={selectedemail}
                                       onChange={e => setSelectedemail(e.target.value)}
                                       aria-describedby="emailHelp"/></label>
                            <div id="emailHelp"
                                 className={selectedemailerror === '' ? 'form-text' : 'form-text active'}>{selectedemailerror}
                            </div>
                        </div>
                        <div className="col-12 field">
                            <label htmlFor="telephone" className="form-label">Telephone
                                <input type="tel" className="form-control" id="telephone" value={selectedtelephone}
                                       onChange={e => setSelectedtelephone(e.target.value)}
                                       aria-describedby="lastnameHelp"/></label>
                            <div id="telHelp"
                                 className={selectedtelephoneerror === '' ? 'form-text' : 'form-text active'}>{selectedtelephoneerror}
                            </div>
                        </div>
                        <div className="col-12 field">
                            <label htmlFor="message" className="form-label">Message
                                <textarea className="form-control text-area" id="message" value={selectedmessage}
                                          onChange={e => setSelectedmessage(e.target.value)}
                                          rows="3"></textarea>
                            </label><div id="messsageHelp"
                                 className={selectedmessageerror === '' ? 'form-text' : 'form-text active'}>{selectedmessageerror}
                            </div>
                        </div>
                        <p className={'requird-field-txt'}>*required ﬁelds</p>
                        <div className="col-12  form-check">
                            <input type="checkbox" className="form-check-input" id="tandc" checked={selectedtandc}
                                   onChange={e => setSelectedtandc(e.target.checked)}/>
                            {/*<br/>*/}
                            {/*<input type="checkbox" className="form-check-input" id="tandc"*/}
                            {/*       />*/}
                            <label className="form-check-label" htmlFor="tandc">I agree to the <span
                                className={'t-and-c-link'}>
                                    <a href="#" className={'t-and-c-link'}>Terms & Conditions</a></span></label>
                            <div id="tandcHelp"
                                 className={selectedtandcerror === '' ? 'form-text' : 'form-text active'}>{selectedtandcerror}
                            </div>
                        </div>
                        <div className="contact-form-submition-btn"
                             onClick={() => handleSubmit()}>Submit
                        </div>
                    </form>
                </div>
                <Gmap/>
            </div>
        </div>
    )

}

export default Reach;
