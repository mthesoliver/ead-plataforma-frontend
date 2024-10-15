export function formatCurrency(value: number) {
    return value.toLocaleString('pt-BR');
}

export function taxesCalc(value: number, fee: number, aditional: number) {
    let subtract = (value * fee) + aditional;
    let finalValue = value - subtract;
    console.log('main ' + value);
    return finalValue < 0 ? '0.00' : finalValue.toString();
}

// export function taxesCalcFixed(value: number, fee: number, aditional: number) {
//     let subtract = (value * fee) + aditional;
//     let finalValue = value - subtract;
//     console.log('fixed ' + value);
//     return finalValue < 0 ? '0.00' : finalValue.toFixed(3);
// }