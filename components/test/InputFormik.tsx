import React from "react";

export const InputFormik = React.memo(function Input({name, value, onChange, error}: any) {
    // console.log("input rrr");
    console.log("rr");
    return (
        <div>
            <input name={name} value={value} onChange={onChange}/>
            <p>{error}</p>
        </div>)
        ;
});

// export const InputFormik =function Input({name, value, onChange, error}: any) {
//     // console.log("input rrr");
//     console.log("rr");
//     return (
//         <div>
//             <input name={name} value={value} onChange={onChange}/>
//             <p>{error}</p>
//         </div>)
//         ;
// };