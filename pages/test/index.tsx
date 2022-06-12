import React, { useEffect } from "react";
import { Form, Input, Select } from "components/test";
import { useForm } from "react-hook-form";

export default function Test() {
    const { register, getValues, setFocus } = useForm({});


    useEffect(() => {
        setFocus("lastName")
    }, [])

    const onSubmit = (data: any) => { console.log(data) };

    const handleGetFirstName = () => {
        console.log(getValues("firstName"))
    }
    return (
        <React.Fragment>
            <button onClick={() => {
                console.log(getValues())
            }}>get value</button>
            <Form onSubmit={onSubmit} register={register}>
                <Input name="firstName" onBlur={handleGetFirstName} />
                <Input name="lastName" />
                <Select name="gender" options={["female", "male", "other"]} />

                <Input type="submit" name="ahihi" value="Submit" />
            </Form>
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