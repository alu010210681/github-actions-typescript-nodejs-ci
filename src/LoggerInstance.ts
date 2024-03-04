

type Action = [string, string, string];

/**
 * @description "Clase creada por el patron de diseño singleton sobre el registro de acciones en el sistema"
 * @class
 * @return LoogerInstance
 */
export class LoggerInstance {
    /**
     * @description Atributo que continene una lista de todas las acciones
     */
    private accion: Action[] = [];

    /**
     * @description Atributo que contiene una instancia de la clase 
     */
    private static LoggerInstance: LoggerInstance;

    /**
     * @description Contructor vacio que es privado
     * @param empty
     */

    private constructor() {
        this.accion = [];
    }

    public static getLoggerInstance(): LoggerInstance {
        if (!LoggerInstance.LoggerInstance) {
          LoggerInstance.LoggerInstance = new LoggerInstance();
        }
        return LoggerInstance.LoggerInstance;
    }

    /**
     * @description Añadir un elemento al logger
     * @param item Action
     * @return void
     */
    addItem(item: Action): void {
        LoggerInstance.LoggerInstance.accion.push(item);
    }

    /**
     * @description Devolver todas las acciones de Logger
     * @param 
     * @return action[]
     */
    getAction() : Action[] {
        return LoggerInstance.LoggerInstance.accion;
    }
    /**
     * @description Buscar elementos dado un nombre concreto de un usuario
     * @param name Nombre del usuario 
     * @return Action[] acciones filtradas por un nombre de usuario
     */
    searchActions(name: string): Action[] {
        const actionUser: Action[] = [];
       
        LoggerInstance.LoggerInstance.accion.forEach(element => {
            if (element[0] == name) {
                console.log(element);
                actionUser.push(element);
            }
        });
        
        return actionUser;
    }

    /**
     * @description Filtrar por los nombres de un usuario concreto 
     * @param nameActions Acccion especificas dadas por un usuario
     * @returns Action[] devuelve las acciones de un usuario
     */

    searchActionsbyNameAction(nameActions: string): Action[] {
        const actionUser: Action[] = [];
     
        LoggerInstance.LoggerInstance.accion.forEach(element => {
            if (element[1].match(nameActions)) actionUser.push(element);
        });

        return actionUser;
    }


}


