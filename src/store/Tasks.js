import { LEVELS } from "../models/levels.enum";
import { taskClass } from "../models/task.class";

const defaultTask1 = new taskClass(
    'Example1',
    'Default description1',
    true,
    LEVELS.NORMAL
);
const defaultTask2 = new taskClass(
    'Example2',
    'Default description2',
    false,
    LEVELS.URGENT
);
const defaultTask3 = new taskClass(
    'Example3',
    'Default description3',
    false,
    LEVELS.BLOCKING
);
let tasks = [];
tasks.push(defaultTask1, defaultTask2, defaultTask3);

export default tasks;