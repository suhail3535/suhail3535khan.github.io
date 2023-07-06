import React, { useState } from 'react';
import validator from 'validator';
const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        if (formData.name.trim() === '') {
            alert("name details missing")
            valid = false;
        } else {
            newErrors.name = '';
        }

        if (!validator.isEmail(formData.email)) {
            alert("email is missing")
            valid = false;
        } else {
            newErrors.email = '';
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            valid = false;
        } else {
            newErrors.password = '';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const existingData = localStorage.getItem('formData')
            let allData = [];

            if (existingData) {
                allData = JSON.parse(existingData);
            }

            allData.push(formData);

            localStorage.setItem('formData', JSON.stringify(allData));

            setFormData({
                name: '',
                email: '',
                password: '',
            });
            setErrors({
                name: '',
                email: '',
                password: '',
            });
            alert('Form data saved successfully!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"

                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"

                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"

                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
