import {useState} from 'react';


export default function SignUp() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        emailNotification: false,
    });

    const [errors, setErrors] = useState([])

    function validates(){
        const errors = [];
        if(user.name.length < 1) {
            errors.push("Need Username");
        };
        if(user.email.length < 1) {
            errors.push("Need Email");
        };
        if(user.phoneNumber.length < 1) {
            errors.push("Need Phone Number");
        };
        if(user.phoneType.length < 1) {
            errors.push("Please Select Phone Type");
        };
        if(user.staff.length < 1) {
            errors.push("Please Select Staff");
        };
        if(user.bio.length < 1) {
            errors.push("Please Enter Bio");
        };
        return errors; 

    };

    function handleChange(field) {
        // const newObj = Object.assign({}, user, {[target]: user.})
        return (e) => {
            const newObj = Object.assign({}, user, {[field]: e.target.value})
            setUser(newObj);
        };
    };

    function handleCheckBox(){
        const newObj = Object.assign({}, user, {"emailNotification": !user.emailNotification})
        setUser(newObj); 
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(validates());
        console.log(user);
    };

    function showErrors() {
        if(errors.length > 0) return (
            <ul>
                {errors.map(err => <li> {err} </li>)}
            </ul>
        );
        return null 
    };

    return (
        <> 
            {showErrors()}
            <form onSubmit={handleSubmit}>
                <input type="text" value={user.name} onChange={handleChange("name")}/>
                <input type="text" value={user.email} onChange={handleChange("email")}/>
                <input type="text" value={user.phoneNumber} onChange={handleChange("phoneNumber")}/>
                <select onChange={handleChange("phoneType")}> 
                    <option disabled selected> Please Phone Type: </option>
                    <option value="home"> Home </option>
                    <option value="work"> Work </option>
                    <option value="mobile"> Mobile </option>
                </select>
                <input type="radio" name="staff" value="instuctor" onChange={handleChange("staff")}/>
                <input type="radio" name="staff" value="student" onChange={handleChange("staff")}/>
                <textarea onChange={handleChange("bio")}></textarea>
                <input type="checkbox" value="true" onChange={handleCheckBox}/>
                <button> Submit </button>
                
            </form>
        </>
    );
}