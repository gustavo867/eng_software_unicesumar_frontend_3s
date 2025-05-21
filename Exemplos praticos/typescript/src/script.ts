document.getElementById('calculadora')?.addEventListener('submit', handleSubmit);

function getInputValue(elementId: string): number | null {
    const inputElement = document.getElementById(elementId) as HTMLInputElement;
    const value = parseFloat(inputElement?.value);
    return isNaN(value) ? null : value;
}

function handleSubmit(event: Event): void{
    event.preventDefault();
    const num1 = getInputValue("num1");
    const num2 = getInputValue("num2");

    const result = document.getElementById("result")

    
    if(num1 != null && num2 != null){
        const res = soma(num1, num2);
        if(result){
            result.textContent = ` ${res}`;
        }
    }else {
        if(result){
            result.textContent = `Erro`;
        }
    }
}

function soma(a: number, b: number): number{
    return a+b;
}