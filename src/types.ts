// types.ts
// -------------------------------------------------------------
// Purpose: Contains TypeScript type definitions for the Tasks app
// Keeping types in a separate file improves organization, especially in larger projects
// -------------------------------------------------------------

/**
 * Interface representing a single task in the application.
 * 
 * Why use 'interface' here?
 * - Interfaces are recommended for defining object structures
 * - They are extendable and ideal for representing models of structured data
 */
export interface Task {
    /** Unique identifier for the task (typically generated using crypto.randomUUID()) */
    id: string;

    /** The content/title/description of the task */
    title: string;

    /** Indicates whether the task is marked as completed (true) or not (false) */
    done: boolean;
}

/**
 * Type representing the possible filter options for tasks.
 * 
 * Why use 'type' here?
 * - Type unions are ideal for limiting a variable to specific, allowed values
 * - Useful for things like filter options, states, or constant values
 */
export type TaskFilter = "all" | "todo" | "done";

