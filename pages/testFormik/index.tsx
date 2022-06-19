import React, {useEffect, useMemo} from "react";
// import {useFormik} from "formik";
import {useFormik} from "formik/src";

import {InputFormik} from "components/test/InputFormik";
// import { useForm } from "react-hook-form";
export default function Test() {
    const formik = useFormik({
        initialValues: {}
    });
    const errors = {}
    if (formik.values?.a2 > 10) {
        errors.a2 = "ahihi"
    }
    return (
        <div>
            {/*<button onClick={() => {*/}
            {/*    console.log('1')*/}
            {/*}}>get value*/}
            {/*</button>*/}
            <p>{formik.values?.a1}</p>
            <p>{formik.values?.a2}</p>
            <p>{errors.a2}</p>
            {/*<p>{{formik.values.2a}}</p>*/}
            {/*<p>{getValues("firstName")}</p>*/}
            {/*<p>aaahihihi</p>*/}
            {/*<p>{getValues("1a")}</p>*/}
            {/*<p>{getValues("lastName")}</p>*/}

            <InputFormik name={`a6911`} value={formik.values[`a1`]}
                         onChange={formik.handleChange}/>
            {[...Array(1000).keys()].map((index) => {
                return <div>{`a${index}`}<InputFormik name={`a${index}`} value={formik.values[`a${index}`]}
                                                      error={errors[`a${index}`]}
                                                      onChange={formik.handleChange}/></div>
            })}
        </div>
    );
}