const createCalc = (initialValue) => {
    let value = 0;
    return {
        set: (value) => (initialValue = value ),
        add: (value) => (initialValue += value),
        sub: (value) => (initialValue -= value),
        mult: (value) => (initialValue *= value),
        div: (value) => (initialValue /= value),
    };
};

export const calculator = createCalc();

