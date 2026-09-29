import { describe, it , expect } from "vitest";
import { formatearPrecio, aplicarDescuento } from "./precio.js";

describe(
    'Formatear precio',()=>{
        it('formatea correctamente', ()=>{
            expect(formatearPrecio(1000)).toBe('$1.000')
        });
        it('redondea a decimal', ()=>{
            expect(formatearPrecio(101.1)).toBe('$101')
        });
        it('dato invalido', ()=>{
            expect(()=>formatearPrecio(null)).toThrow('Valor inválido')
            expect(()=>formatearPrecio()).toThrow('Valor inválido')
            expect(()=>formatearPrecio(NaN)).toThrow('Valor inválido')
        })
    });

describe(
    'Aplicar descuento', ()=>{
        it('Aplicar descuento correctamente', ()=>{
            expect(aplicarDescuento(100 ,20)).toBe(80)
        });
        it('descuento con redondeo', ()=>{
            expect(aplicarDescuento(99,15)).toBe(84)
        });
        it('dato invalido', ()=>{
            expect(()=> aplicarDescuento(100,101).toThrow('Porcentaje inválido'))
        })
    });