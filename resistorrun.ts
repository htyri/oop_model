class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getResistance(): number {
        return this.r;
    }
}

class ToggleSwitch extends Resistor {
    isOn = false
    constructor() {
        super(0);
        this.on()
    }
    on() {
        this.r = 0;
        this.isOn = true
    }
    off() {
        this.r = 1000000000;
        this.isOn = false
    }

    toggle() {
        if(this.isOn){
            this.off()
        }  else {
            this.on()
        }
    }
}

class SeriesCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
    @@ -31,34 +49,6 @@ class SeriesCircuit {
            getTotalPower(u: number){
                return u * this.getCurrent(u)
            }

            getBiggestResistance(): Resistor{
                this.resistors.sort((a, b) => (a.getResistance() > b.getResistance()) ? 1 : -1).reverse()
                return this.resistors[0]
            }

            getBiggestPotential(u: number): number{
                let biggestPotential: number = 0
                this.resistors.forEach((resistor) => {
                    let resistorPotential: number = this.getCurrent(u) * resistor.getResistance()
                    if(resistorPotential > biggestPotential){
                        biggestPotential = resistorPotential
                    }
                })
                return  biggestPotential
            }

            getBiggestPower(u: number): number{
                let biggestPower: number = 0
                this.resistors.forEach((resistor) => {
                    let resistorPotential: number = this.getCurrent(u) * resistor.getResistance()
                    let resistorPower: number = resistorPotential * this.getCurrent(u)
                    if(resistorPower > biggestPower){
                        biggestPower = resistorPower
                    }
                })
                return  biggestPower
            }
        }

        class ParalellCircuit {
            resistors: Resistor[] = []
            push(r: Resistor) {
                this.resistors.push(r);
            }
            getTotalResistance(): number {
                let inversesum: number = 0;
                this.resistors.forEach((resistor) => {
                    inversesum += 1 / resistor.getResistance()
                })
                return 1/inversesum;
            }
            getCurrent(u: number) {
                return u / this.getTotalResistance();
            }
            getTotalPower(u: number){
                return u * this.getCurrent(u)
            }
        }

        let sc1: ParalellCircuit = new ParalellCircuit();
        sc1.push(new Resistor(4.5));
        sc1.push(new Resistor(9));
        console.log(sc1.getTotalPower(4.5));
        let r1: Resistor = new Resistor(220);
        let sw1: ToggleSwitch = new ToggleSwitch();
        let sc1: SeriesCircuit = new SeriesCircuit();
        sc1.push(r1);
        sc1.push(sw1);
        console.log(sc1.getTotalResistance());
        console.log(sc1.getCurrent(4.5))

        console.log(sc1.getCurrent(12));
        sw1.toggle();
        console.log(sc1.getTotalResistance());
        console.log(sc1.getCurrent(12));
        console.log('--------------------------------')
        console.log(sc1.getTotalResistance());
        console.log(sc1.getCurrent(5));
        console.log(sc1.getTotalPower(5))
        sw1.toggle();
        console.log(sc1.getTotalResistance());
        console.log(sc1.getCurrent(5));
        console.log(sc1.getTotalPower(5))
        console.log('--------------------------------')
        let r2: Resistor = new Resistor(220);
        let sw2: ToggleSwitch = new ToggleSwitch();
        let sw3: ToggleSwitch = new ToggleSwitch();
        let sc2: SeriesCircuit = new SeriesCircuit();
        sc2.push(r2)
        sc2.push(sw2)
        sc2.push(sw3)
        sw2.toggle()
        sw3.toggle()
        console.log(sc2.getTotalResistance());
        sw2.toggle()
        console.log(sc2.getTotalResistance());
        sw3.toggle()
        console.log(sc2.getTotalResistance());
        console.log('--------------------------------')
        let r3: Resistor = new Resistor(220);
        let sw4: ToggleSwitch = new ToggleSwitch();
        let sc3: ParalellCircuit = new ParalellCircuit();
        sc3.push(r3)
        sc3.push(sw4)
        console.log(sc3.getTotalResistance());
        sw4.toggle()
        console.log(sc3.getTotalResistance());
        console.log('--------------------------------')
        let r4: Resistor = new Resistor(220);
        let sw5: ToggleSwitch = new ToggleSwitch();
        let sw6: ToggleSwitch = new ToggleSwitch();
        let sc4: ParalellCircuit = new ParalellCircuit();
        sc4.push(r4)
        sc4.push(sw5)
        sc4.push(sw6)
        sw5.toggle()
        sw6.toggle()
        console.log(sc4.getTotalResistance());
        sw5.toggle()
        console.log(sc4.getTotalResistance());
        sw6.toggle()
        console.log(sc4.getTotalResistance());