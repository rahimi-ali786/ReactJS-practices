import {createContext} from 'react';
const productContext = createContext({
    //optional 
    products: [],
    onDelete: () => {},
    onIncrement: () => {},
    onDecrement: () => {}, 
    onReset: () => {}
});
export default productContext;

//die Standardwerte für den Context productContext
// Das sind leere Funktionen (Platzhalter), falls kein Provider diese Methoden bereitstellt.
// So vermeidest du Fehler, wenn ein Component den Context verwendet, aber kein Provider in der Komponentenhierarchie ist.