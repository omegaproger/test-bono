import React, {useState} from "react";
import {useInView} from "react-intersection-observer";
export const Сonnection = ({title,contacts,info,inputs}) =>{

    const [formValues,setFormValues] = useState({name:'',email:'',massage:''})
    const [errors,setErrors] = useState([]);
    const { ref, inView } = useInView({
        threshold: 0
    });


    return (
        <div ref={ref} className={`connection ${inView ? 'connection_in' : ''}`}>
            <div className="connection__content">
                <h2 className={'connection__title'}>{title}</h2>
                <form className={'connection__form'} onSubmit={(e)=>{
                    e.preventDefault();
                    const currentErrors = [];
                    Object.keys(formValues).forEach((key)=>{
                        if (formValues[key] === ''){
                            currentErrors.push(key);
                        }
                    })

                    if(!currentErrors.length) {
                        console.log(formValues,'Form')
                        setErrors([]);
                    }
                    else {
                        setErrors(currentErrors);
                    }

                }}>
                    {inputList(inputs,formValues,setFormValues,errors)}
                </form>
                <span className={'connection__contacts'}>{contacts}</span>
                <a href={info.href} target={"_blank"} className={'connection__info'}>{info.text}</a>
            </div>
        </div>
    )
}

function inputList(inputs,values,setValue,errors){
    return inputs.map((item,index)=>{
        let errorClass = '';
        if(errors.includes(item.name)){
            errorClass = 'connection__input_error'
        }
        return React.createElement(item.tag || 'input',{...item,className:`${item.className} ${errorClass}`,key:`input-${index}`,value:values[item.name],onChange:(e)=>{setValue({...values,[item.name]:e.target.value})}})
    })
}