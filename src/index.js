import Immutable from 'immutable';

let pregunta = new Immutable.Record({
    idPregunta: 0,
    texto: undefined
});

let pregunta1 = new pregunta();


pregunta1 = pregunta1.set('texto', 'Quien?');


alert(pregunta1.get('texto'));

let map = new Immutable.Map();

map = map.set('vaca', {a:'b', c:'d'});

alert(map.get('vaca').a);


let lista = new Immutable.List();

lista.push({a:'b', c:'d'});

alert(lista.size);