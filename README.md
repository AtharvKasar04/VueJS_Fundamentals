# VueJS_Fundamentals

This is a simple **task management app** built with **Vue.js** to learn and practice the key concepts of Vue.js. The project demonstrates important features such as component-based design, reactive data handling, and event-driven communication between components. 

Through this project, I focused on learning the **fundamentals** of Vue.js, building an app where users can create, and delete tasks, while understanding the underlying Vue concepts and best practices.

## Key Concepts Explored:

- **Vue Component System**: Breaking down the app into reusable and modular components.
- **Reactivity in Vue**: Managing state changes using Vue’s reactive system.
- **Handling DOM Events**: Listening for and emitting events between parent and child components.
- **Conditional Rendering**: Using `v-if`, `v-else`, and `v-for` for dynamic rendering based on conditions.
- **CSS Binding & Transitions**: Dynamically applying CSS classes and adding animations to tasks.
- **State Management with Arrays**: Understanding reactivity when updating arrays in Vue.

### What You Can Do:
- Add tasks to the list.
- Mark tasks as complete or incomplete.
- Remove tasks from the list.
- Reset forms after adding tasks.
- Filter tasks by their completion status.

## Features Implemented:
1. **Task Creation**: Add new tasks to the list with a form.
2. **Task Completion**: Mark tasks as complete or incomplete.
3. **Task Removal**: Remove tasks from the list.
4. **Form Reset**: Reset the task form after submission.
5. **Filter Tasks**: Filter tasks by their state (complete/incomplete).
6. **CSS Class Binding**: Dynamically add CSS classes to task items based on their state.
7. **Vue Transitions**: Smooth transitions for adding/removing tasks.

---

## Setup & Installation

To run the project locally, follow these instructions:

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/VueJS_Fundamentals.git
```

### 2. Navigate to the project's directory:
```bash
cd VueJS_Fundamentals
```

### 3. Install dependencies:
```bash
npm install
```

### 4. Run the application:
```bash
npm run dev
```

### You can now access the app in your browser at http://localhost:5173

## Folder Structure
```bash
.
└── src/
    ├── assets/                 # Static assets like images and styles
    ├── components/             # Vue components (e.g., TaskList, TaskItem)
    │   ├── FilterButton.vue    # A button component for filtering tasks by completion status
    │   ├── TaskForm.vue        # A form component for adding tasks
    │   └── TaskList.vue        # A component that renders the list of the tasks
    ├── App.vue                 # Main application component
    ├── main.ts                 # The entry point for the App
    ├── style.css               # Global styles for application
    ├── types.ts                # TypeScript definitions for the app's types
    └── vite-env.d.ts
```
