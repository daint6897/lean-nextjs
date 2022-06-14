import React, { useEffect, useMemo } from "react";
import { Form, Input, Select } from "components/test";
// import { useForm } from "react-hook-form";
import { useForm, useWatch } from "form";
export default function Test() {
    const { register, getValues, setFocus, control,watch } = useForm({});
    useWatch({
        // name: "firstName",
        control
    });
    // const watchValue = watch("firstName")
    // console.log("watchValuewatchValuewatchValue",watchValue);

    useEffect(() => {
        setFocus("firstName")
    }, [])

    const listInput = useMemo(()=>{
        return [...Array(1000).keys()].map((index)=>{
            return <Input name={`${index}a`} register={register} />
        })
    },[])
    const onSubmit = (data: any) => { console.log(data) };

    const handleGetFirstName = () => {
        console.log(getValues("firstName"))
    }
    return (
        <React.Fragment>
            <button onClick={() => {
                console.log(getValues())
            }}>get value</button>
            <p>{getValues("firstName")}</p>
            <p>aaahihihi</p>
            <p>{getValues("1a")}</p>
            <p>{getValues("lastName")}</p>



            <Form onSubmit={onSubmit} register={register}>
                <Input name="firstName" onBlur={handleGetFirstName} />
                <Input name="lastName" />
                <Select name="gender" options={["female", "male", "other"]} />

                
            </Form>
            {listInput}
            {[...Array(1000).keys()].map((index)=>{
                    return <Input name={`${index}a`} register={register} />
                })}
            {/* <Form onSubmit={onSubmit} register={register}>
            <table>
                <tr>
                    <th><Input name="firstName1" /></th>
                    <th><Input name="lastName1" /></th>
                </tr>
                <tr>
                    <th><Input name="firstName2" /></th>
                    <th><Input name="lastName2" /></th>
                </tr>
                <tr>
                    <th><Input name="firstName3" /></th>
                    <th><Input name="lastName3" /></th>
                </tr>
            </table>
            </Form> */}
        </React.Fragment>

    );
}