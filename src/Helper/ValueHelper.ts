export function formatCurrency(value: number) {
    return value.toLocaleString('pt-BR');
}

export function taxesCalc(value: number, fee: number, aditional: number) {
    let subtract = (value * fee) + aditional;
    let finalValue = value - subtract;
    return finalValue < 0 ? '0.00' : finalValue.toString();
}