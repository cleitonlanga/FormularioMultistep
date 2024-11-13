import { useState } from "react";

export function useForm(steps){
    const [currentstep, setCurrentStep] = useState(0);

    function changeStep(i, e){
        e.preventDefault();

        if(i< 0 || i>= steps.length){
            return;
        }else{
            setCurrentStep(i);
        }
    }


    return{
       currentstep,
       currentComponent: steps[currentstep],
       changeStep,
       isLastStep: currentstep + 1 === steps.length ? true : false,
       isFirstStep: currentstep === 0 ? true : false,
    }

}