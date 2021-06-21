module.exports = class Lista {
    // atributos
    #elementos

    // constructor
    constructor() {
        this.#elementos = []
    }

    // buscar elemento
    // si existe devuelve posición, sino existe devuelve -1
    #buscarPosicionElemento(clave) {
        for (let i in this.#elementos) {
            if (this.#elementos[i].clave == clave) {
                return i
            }
        }
        return -1;
    }

    // Devuelve la cantidad de elementos de la lista
    count() {
        return this.#elementos.length
    }

    // Devuelve el valor asociado a la clave pasada como argumento
    find(clave) {
        let posicion = this.#buscarPosicionElemento(clave);
        if (posicion !== -1) {
            return this.#elementos[posicion].valor
        }
        return NaN
    }

    // Agrega un par clave / valor (funciona como un mapa o diccionario)
    // controla la clave sea de tipo String
    // devuelve verdadero si se agrega o actualiza
    // devuelve falso si no es de tipo String
    add(clave, valor) {
        if (typeof clave == 'string') {
            let posicion = this.#buscarPosicionElemento(clave)
            if (posicion !== -1) {
                this.#elementos[posicion].valor = valor
            } else {
                this.#elementos.push({
                    clave,
                    valor,
                })
            }
            return true
        }
        return false
    }

    // Elimina un elemento de acuerdo a laa clave pasada como argumento
    // retorna verdadero si se elimina un elemento
    // retorna falso si no se elimina un elemento
    delete(clave) {
        let posicion = this.#buscarPosicionElemento(clave)
        if (posicion !== -1) {
            this.#elementos.splice(posicion)
            return true
        }
        return false
    }

    // Devuelve una lista ordenada de manera ascendente por clave
    getListOrdered() {
        let ordenada = []
        for (let i in this.#elementos) ordenada.push(this.#elementos[i].clave)
        ordenada.sort()
        return ordenada
    }
}
