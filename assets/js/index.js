const selector = e => document.querySelector(e) 

const submitButton = selector("#submitBtn") 
const emailInput = selector("#email") 

const sendData = async (url, data) => {
    try {
        let useData = await fetch(url, {
            method: "POST",
            cors: "cors",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let parseRes = await useData.json();
        return parseRes;
    } catch (error) {
        return error;
    }
};
const handleSubmit = async (e )=> {
    e.preventDefault() 
    const emptySpacePattern =/\s+/g 

    const email = emailInput.value.replace(emptySpacePattern,"") 
    const responseElement = document.createElement("span")
    let responseMessage = "Email submission successful"
    if (email.length === 0){
        responseMessage =  "Wrong Input"
    }

    responseElement.textContent = responseMessage 
    const submitSibling = submitButton.nextElementSibling  
    if (submitSibling){
        submitSibling.remove()
    }
    const data = {
        email , 
        name :"Ojukwu Bella",
        age :90
    }
    const subscriptionURL = "https://woveusruhsqxlnua5e2j3wsj5u0xrhvl.lambda-url.us-east-1.on.aws/"
    const response = await sendData(subscriptionURL , data)
    console.log(response)
    submitButton.parentNode.append(responseElement) 
    
}
submitButton.addEventListener("click" , handleSubmit) 
