
import { useEffect, useState } from "react";
const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

const Country = () => {
    // state to store the value of the country
    const [country, setCountry] = useState([]);



    return (
        <div className="App">
            {/* 1st DropDown */}
            <select
                value={country}
                onChange={(e) => {
                    console.log(e.target.value);
                    setCountry([e.target.value]);
                }}
            >
                {countries.map((item, index) => {
                    return (
                        <option key={index} value={index}>
                            {item.name}
                        </option>
                    );
                })}
            </select>

            {/* 2nd DropDown */}

            <select>
                {countries[country] &&
                    countries[country].cities.map((item, index) => {
                        return <option value={index}>{item}</option>;
                    })}
            </select>
        </div>
    );
}
export default Country