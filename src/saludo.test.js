import { describe, it , expect } from "vitest";
import { saludo, suma } from "./saludo.js";

describe(
    'saludo',()=> {
        it('saluda correctamente', ()=> {
            expect(saludo()).toBe('Hola Noelia');
        })
    });
describe(
    'Validacion suma',()=> {
        it('suma', ()=> {
            expect(suma()).toBe(17);
        })
    });