class Resistor {
    r: number = 0;
    constructor(r: number) {
        allowedPower: number = 0
        constructor(r: number, ap: number) {
            this.r = r;
            this.allowedPower = ap
        }
        getCurrent(u: number): number {
            return u / this.r;
        }
        getPower(u: number): number {
            return u * this.getCurrent(u);
        }
    }

    let r1 = new Resistor(220, 0.2);
    let r2 = new Resistor(110, 0.1);
    let r3 = new Resistor(4700, 5);

    let resistors: Resistor[] = []
    resistors = [r1, r2, r3]

    function controlResistorAllowed(resistors: Resistor[], u: number): Resistor[] {
        let allowedResistors: Resistor[] = []
        resistors.forEach((resistor) => {
            if(resistor.getPower(u) <= resistor.allowedPower){
                allowedResistors.push(resistor);
            }
        })
        return allowedResistors
    }

    let r1: Resistor = new Resistor(110);
    let r2: Resistor = new Resistor(220);
    let r3: Resistor = new Resistor(4700);
    let resistors: Resistor[] = [];
    resistors.push(r1)
    resistors.push(r2)
    resistors.push(r3)
    let totalCurrent: number = 0;
    resistors.forEach((resistor) => {
    totalCurrent += resistor.getCurrent(5)
})
console.log(totalCurrent);
let allowedResistors = controlResistorAllowed(resistors, 5)
console.log(allowedResistors)