import React, { useEffect } from "react";
import { useState } from "react";
import Input from "../componants/Input";
import Button from "../componants/Button";
function Form() {
    const patternOfEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [isFormSubmitted, setIseFormSubmiited] = useState(false);
    const [userInfo, setUserInfo] = useState({
        Name: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: null
    });

    const [userInfoErrs, setUserInfoErrors] = useState({
        NameErr: "",
        emailErr: "",
        passwordErr: "",
        confirmPasswordErr: "",
        imageErr: ""
    });

    useEffect(() => {
        if (
            !userInfoErrs.NameErr &&
            !userInfoErrs.emailErr &&
            !userInfoErrs.passwordErr &&
            !userInfoErrs.confirmPasswordErr &&
            !userInfoErrs.imageErr &&

            isFormSubmitted
        ) {
            console.log("request ur api");
        }
    }, [userInfoErrs, isFormSubmitted]);

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIseFormSubmiited(true);
        console.log(userInfo);
        validateForm();
    };

    const validateForm = () => {
        setUserInfoErrors({
            NameErr: !userInfo.Name
                ? "name is required"
                : userInfo.Name.length < 5
                    ? " name should be more than 5 chars "
                    : "",
            emailErr: !userInfo.email
                ? "email is reuired"
                : !patternOfEmail.test(userInfo.email)
                    ? "incorrect email format"
                    : "",
            passwordErr: !userInfo.password
                ? "password is is reuired"
                : userInfo.password < 8
                    ? "password should be more that 8"
                    : "",
            confirmPasswordErr: userInfo.confirmPassword !== userInfo.password
                ? "Don't match"
                : "",
            imageErr: userInfo.image === null ? 'required' : ""
        });
    };





    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Name</label>
                <Input type='text' onchange={handleChange} name="Name"></Input>
                {userInfoErrs.firstNameErr && <p>{userInfoErrs.firstNameErr}</p>}
            </div>

            <div>
                <label> email</label>
                <Input type='text' onchange={handleChange} name="email"></Input>

                {userInfoErrs.emailErr && <p>{userInfoErrs.emailErr}</p>}
            </div>

            <div>
                <label> password</label>
                <Input type='text' onchange={handleChange} name="password"></Input>

                {userInfoErrs.passwordErr && <p>{userInfoErrs.passwordErr}</p>}
            </div>

            <div>
                <label> confirmPassword</label>
                <Input type='text' onchange={handleChange} name="confirmPassword"></Input>
                {userInfoErrs.confirmPasswordErr && <p>{userInfoErrs.confirmPasswordErr}</p>}
            </div>
            <div>
                <label> Photo</label>
                <Input type='file' onchange={handleChange} name="image"></Input>
                {userInfoErrs.imageErr && <p>{userInfoErrs.imageErr}</p>}
            </div>

            <Button  name={"submit"} color={"black"} onClick={handleSubmit}/>

        </form>
    );
}

export default Form;
