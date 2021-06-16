module.exports = class Lista {
  // atributos
  #elementos

  // constructor
  constructor() {
    this.#elementos = []
  }

  // Devuelve la cantidad de elementos de la lista
  count() {
    return this.#elementos.length
  }

  // Devuelve el valor asociado a la clave pasada como argumento
  find(clave) {
    for (let i in this.#elementos) {
      if (this.#elementos[i].clave == clave) {
        return this.#elementos[i].valor
      }
    }
    return NaN
  }

  // Agrega un par clave / valor (funciona como un mapa o diccionario)
  // controla la clave sea de tipo String
  // devuelve verdadero si se agrega o actualiza
  // devuelve falso si no es de tipo String
  add(clave, valor) {
    if (typeof clave == 'string') {
      for (let i in this.#elementos) {
        if (this.#elementos[i].clave == clave) {
          this.#elementos[i].valor = valor
          return true
        }
      }
      this.#elementos.push({
        clave,
        valor,
      })
      return true
    } else {
      return false
    }
  }

  // Elimina un elemento de acuerdo a laa clave pasada como argumento
  // retorna verdadero si se elimina un elemento
  // retorna falso si no se elimina un elemento
  delete(clave) {
    for (let i in this.#elementos) {
      if (this.#elementos[i].clave == clave) {
        this.#elementos.splice(i)
        return true
      }
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
