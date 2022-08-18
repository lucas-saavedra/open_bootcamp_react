import { LEVELS } from "./levels.enum";
import { v4 as uuidv4 } from 'uuid';
export class taskClass {
    name = "";
    id = uuidv4();
    description = "";
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}