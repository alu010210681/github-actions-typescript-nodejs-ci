import 'mocha';
import {expect} from 'chai';

import {LoggerInstance} from '../src/LoggerInstance.js'


type Action = [string, string, string];

describe("Ejercicio Modificacion 1 - Probar la clase LoogerInstance", () => {
    let loggerInstance: LoggerInstance;

    it("Crear una instancia del contructor", () => {
        loggerInstance = LoggerInstance.getLoggerInstance();

        expect(loggerInstance.getAction()).to.length(0);
    });

    it("Buscar accion por nombre", () => {
        loggerInstance = LoggerInstance.getLoggerInstance();

        const date: Date = new Date();
       
        let Action1: Action = ["", "", ""];

        Action1 = ["samuel", "inicio", date.toDateString()];
        loggerInstance.addItem(Action1);

        expect(loggerInstance.searchActions("samuel")).to.length(1);
    });

    it("Buscar accion por nombre de la accion", () => {
        loggerInstance = LoggerInstance.getLoggerInstance();
        const date: Date = new Date();
        let Action2: Action = ["", "", ""];
        Action2  = ["adrian", "inicio", date.toDateString()];
        loggerInstance.addItem(Action2);
        expect(loggerInstance.searchActionsbyNameAction("inicio")).to.length(2);
    });
 
  });