/*
 Requerimientos 
 * La lista debe almacenar pares clave:valor.
 * Las claves almacenadas en la lista deben ser únicas.
 * Las claves son cadenas de texto.
 * Se debe poder recuperar un valor a partir de una clave.
 * Se debe poder actualizar el valor asociado a una clave.
 * Se debe poder borrar una pareja a partir de la clave.
 * Se debe poder recuperar la cantidad de elementos almacenados en la lista.
 * Se debe poder recuperar una lista ordenada de las claves almacenadas en la lista.

 * En una lista vacía hay cero elementos.
 * Cuando se agrega un elemento a una lista vacía hay un elemento.
 * En una lista vacía no se encuentra ninguna clave.
 * Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 * Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
 * Cuando se agrega un elemento a una lista vacía la lista de claves esta ordenada.
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 * Cuando se agrega un elemento al final la lista de claves esta ordenada.
 */

const assert = require('chai').assert
const Lista = require('../src/lista.js')

// * En una lista vacía hay cero elementos.
// * En una lista vacía no se encuentra ninguna clave.
// * En una lista vacía la lista de claves devuelve [].
// * En una lista vacía al eliminar un elemento devuelve false.
describe('En una lista vacía', function () {
    var lista = new Lista()
    it('hay cero elementos', function () {
        assert.equal(lista.count(), 0)
    })

    it('no se encuentra ninguna clave', function () {
        assert.isNaN(lista.find('clave'))
    })

    it('al recuperar la lista ordenada de claves se obtiene []', function () {
        assert.deepEqual(lista.getListOrdered(), [])
    })

    it('al eliminar un elemento devuelve false', function () {
        assert.equal(lista.delete('clave'), false)
    })
})

// * Cuando se agrega un elemento a una lista vacía si la clave no es de tipo String devuelve false
// * Cuando se agrega un elemento a una lista vacía si la clave no es de tipo String, entonces hay 0 elementos
// * Cuando se agrega un elemento a una lista vacía si la clave es de tipo String devuelve true
// * Cuando se agrega un elemento a una lista vacía hay un elemento.
// * Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
// * Cuando se agrega un elemento a una lista vacía si la clave es inexistente no se encuentra ninguna clave.
// * Cuando se agrega un elemento a una lista vacía la lista de claves esta ordenada.
// * Cuando se agrega un elemento a una lista vacía y se elimina se obtiene true.
// * Cuando se agrega un elemento a una lista vacía y se intenta eliminar nuevamente se obtiene false.
// * Cuando se agrega un elemento a una lista vacía ale eliminarse la cantidad de elementos es 0.
describe('Cuando se agrega un elemento a una lista vacía', function () {
    var lista = new Lista()

    it('si la clave no es de tipo String devuelve false', function () {
        assert.equal(lista.add(1, 'valor'), false)
    })

    it('si la clave no es de tipo String, entonces hay 0 elementos', function () {
        assert.equal(lista.count(), 0)
    })

    it('si la clave es de tipo String devuelve true', function () {
        assert.equal(lista.add('clave', 'valor'), true)
    })

    it('hay un elemento', function () {
        assert.equal(lista.count(), 1)
    })

    it('se puede recuperar el valor a partir de la clave', function () {
        assert.equal(lista.find('clave'), 'valor')
    })

    it('si la clave es inexistente no se encuentra ninguna clave', function () {
        assert.isNaN(lista.find('otra-clave'))
    })

    it('la lista de claves esta ordenada', function () {
        assert.deepEqual(lista.getListOrdered(), ['clave'])
    })

    it('y se elimina se obtiene true', function () {
        assert.equal(lista.delete('clave'), true)
    })

    it('y se intenta eliminar nuevamente se obtiene false', function () {
        assert.equal(lista.delete('clave'), false)
    })

    it('al eliminarse la cantidad de elementos es 0', function () {
        assert.equal(lista.count(), 0)
    })
})

// * Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
// * Cuando se agrega una clave que ya está en la lista se obtiene el valor asociado a la clave.
// * Cuando se agrega una clave que ya está en la lista y se elimina se obtiene true.
describe('Cuando se agrega una clave que está en la lista', function () {
    var lista = new Lista()
    lista.add('clave', 'valor')

    it('se actualiza el valor correspondiente', function () {
        assert.equal(lista.add('clave', 'nuevo'), true)
    })

    it('se obtiene el nuevo valor asociado a la clave', function () {
        assert.equal(lista.find('clave'), 'nuevo')
    })

    it('y se elimina se obtiene true', function () {
        assert.equal(lista.delete('clave'), true)
    })
})

describe('Cuando se recupera la lista de claves y hay 5 elementos no ordenados', function () {
    var lista = new Lista()
    lista.add('A', 'valorA')
    lista.add('Z', 'valorZ')
    lista.add('S', 'valorS')
    lista.add('B', 'valorB')
    lista.add('C', 'valorC')

    it('La cantidad de elementos es 5', function () {
        assert.equal(lista.count(), 5)
    })

    it('se obtiene una lista de claves ordenadas', function () {
        assert.deepEqual(lista.getListOrdered(), ['A', 'B', 'C', 'S', 'Z'])
    })
})
