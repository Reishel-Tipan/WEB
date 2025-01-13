class Conductor {
    #nombre;
    #licencia;
    rutas = [];

    constructor(nombre, licencia) {
        this.#nombre = nombre;
        this.#licencia = licencia;
    }

    registrarRuta(ruta) {
        this.rutas.push(ruta);
    }

    obtenerInformacion() {
        return {
            nombre: this.#nombre,
            rutas: this.rutas
        };
    }
}

class Vehiculo {
    #estado = 'disponible';

    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
    }

    asignar() {
        this.#estado = 'asignado';
    }

    liberar() {
        this.#estado = 'disponible';
    }

    obtenerEstado() {
        return this.#estado;
    }
}


class ConductorVIP extends Conductor {
    vehiculoPreferido = null;

    asignarVehiculoPreferido(vehiculo) {
        if (vehiculo.obtenerEstado() === 'disponible') {
            this.vehiculoPreferido = vehiculo;
            vehiculo.asignar();
        } else {
            console.log('El vehículo no está disponible.');
        }
    }
}

const conductor1 = new Conductor('Juan Perez', 'LIC12345');
conductor1.registrarRuta('Ruta 1');
console.log(conductor1.obtenerInformacion());

const vehiculo1 = new Vehiculo('Toyota Corolla', 'ABC-1234');
console.log(`Estado inicial del vehículo: ${vehiculo1.obtenerEstado()}`);
vehiculo1.asignar();
console.log(`Estado del vehículo tras asignarlo: ${vehiculo1.obtenerEstado()}`);

const conductorVIP1 = new ConductorVIP('Ana Lopez', 'VIP98765');
conductorVIP1.registrarRuta('Ruta VIP');
conductorVIP1.asignarVehiculoPreferido(vehiculo1);
console.log(conductorVIP1.obtenerInformacion());