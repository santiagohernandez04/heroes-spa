import { authReducer } from "../../../src/auth/context/authReducer"

describe('Pruebas en authReducer', () => { 
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {})
        expect(state).toEqual({logged: false})
    })
    
    test('debe de autenticar el usuario', () => {
        
    })
    
    test('debe de realizar el logout del usuario', () => {
        
    })
    
    test('no debe de hacer cambios en el state', () => {
        
    })
 })