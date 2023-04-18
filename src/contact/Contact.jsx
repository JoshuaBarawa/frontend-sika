import React, { useEffect, useState } from "react";
import './contact.css'

import { getCountries } from "../apis/CountryAPI";

const Contact = () => {

    const [countries, setCountries] = useState([])
    const [formErrors, setFormErrors] = useState()

    // TODO: Create user info object
    const [user, setUser] = useState({
        fName: '',
        lName: '',
        country: '',
        nationality: '',
        dateOfBirth: '',
        gender: '',
        nationalId: ''
    });

    // TODO: Check for input values in form
    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // TODO: Fetch countries from api on page load
    useEffect(() => {
        getCountries().then(resp => {
            if (resp?.status === 200) {
                resp.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                setCountries(resp?.data)
            }
        })

    }, [])


    // TODO: Validate contact form inputs
    const validateForm = () => {
        let errors = {}
        if (!user?.fName) {
            errors['fName'] = 'First name is required!'
        }
        if (!user?.lName) {
            errors['lName'] = 'Last name is required!'
        }
        if (!user?.country) {
            errors['country'] = 'Country is required!'
        }
        if (!user?.nationality) {
            errors['nationality'] = 'Nationality is required!'
        }
        if (!user?.dateOfBirth) {
            errors['dateOfBirth'] = 'Birthday is required!'
        }
        if (!user?.gender) {
            errors['gender'] = 'Gender is required!'
        }
        if (!user?.nationalId) {
            errors['nationalId'] = 'National ID is required!'
        }
        setFormErrors(errors)
        return errors
    };

 // TODO: Create new object
    const handleGetUserInfo = () => {
        if(Object.keys(validateForm()).length === 0){
            alert(JSON.stringify(user))
        }
     
    }

    return (
        <div className="contact-page">

            <div className="navbar">
                <span id="nav-icon" class="material-symbols-outlined">home</span>
                <span id="nav-icon" class="material-symbols-outlined">menu</span>
            </div>


            <div className='contact-section'>

                <div className='contact-left-section'>
                    <div className="slogan-div">
                        <p className='contact-page-slogan'>Localizing Global <br/>P<span id="slogan-span">aym</span>ents</p>
                    </div>
                </div>

                <form className='contact-form'>

                        <p className='contact-form-header1'>Personal Information</p>
                        <p className='contact-form-header2'>Help us learn a bit more about you</p>

                        <div className='inputs-section'>

                            <div className='contact-input-group'>
                                <input type="text" name='fName' className='contact-input' placeholder="First Name"
                                    onChange={(e) => handleOnChange(e)} />
                                <span id='form-error'>{formErrors?.fName}</span>
                            </div>

                            <div className='contact-input-group'>
                                <input type="text" name='lName' className='contact-input' placeholder="Last Name"
                                    onChange={(e) => handleOnChange(e)} />
                                <span id='form-error'>{formErrors?.lName}</span>
                            </div>

                            <div className="contact-input-group">
                                <select name='country' className='contact-input' defaultValue={'Kenya'}
                                    onChange={(e) => handleOnChange(e)}>
                                    <option selected disabled hidden value="" style={{color:'red'}}>Country</option>
                                    {countries.map((country, id) =>
                                        <option id='option' key={id} style={{ fontSize: '14px' }} value={country.name.common}>{country.name.common}</option>
                                    )}
                                </select>
                                <span id='form-error'>{formErrors?.country}</span>
                            </div>

                            <div className="contact-input-group">
                                <select name='nationality' className='contact-input' onChange={(e) => handleOnChange(e)}>
                                    <option selected disabled hidden value="">Nationality</option>
                                    {countries.map((country, id) =>
                                        <option id='option' key={id} style={{ fontSize: '14px' }} value={country.name.common}>{country.name.common}</option>
                                    )}
                                </select>
                                <span id='form-error'>{formErrors?.nationality}</span>
                            </div>

                            <div className='contact-input-group'>
                                <input type="text" onFocus={(e) => (e.target.type = "date")} name='dateOfBirth' className='contact-input' placeholder="Birthday"
                                    onChange={(e) => handleOnChange(e)} />
                                <span id='form-error'>{formErrors?.dateOfBirth}</span>
                            </div>

                            <div className="contact-input-group">
                                <select name='gender' className='contact-input' onChange={(e) => handleOnChange(e)}>
                                    <option selected disabled hidden value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <span id='form-error'>{formErrors?.gender}</span>
                            </div>

                            <div className='contact-input-group'>
                                <input type="number" name='nationalId' className='contact-input' placeholder="National ID"
                                    onChange={(e) => handleOnChange(e)} />
                                <span id='form-error'>{formErrors?.nationalId}</span>
                            </div>

                        </div>
                
                    <div className='contact-form-actions'>
                        <button type='button' className="skip-btn">SKIP FOR NOW</button>
                        <button type='button' className="next-btn" onClick={handleGetUserInfo} >NEXT</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Contact