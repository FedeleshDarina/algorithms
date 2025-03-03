class Stack {
    constructor() {
        this.items = [];
    }

    // Додала елемент до стеку.
    addToStack(element) {
        this.items.push(element);
    }

    // Видалила останній елемент з стеку
    removeFromStack() {
        if (this.items.length === 0) {
            return "Цей стек порожній";
        }
        this.items.pop();
        return "Елемент видалено";
    }

    // Перевірила останній елемент в стеці
    checkStack() {
        if (this.items.length === 0) {
            return "Цей стек порожній";
        }
        return this.items[this.items.length - 1];
    }
    // Очистила стек
    clearStack() {
        this.items = [];
    }

    // Показую всі елементи в стеці
    testShow() {
        if (this.items.length === 0) {
            return "Цей стек порожній";
        }
        return this.items.toString();
    }
}

// Створила новий стек
let stack = new Stack();

// Додала елементів у стек
stack.addToStack("Квартира 1: Вулиця 1, будинок 10, квартира 1");
stack.addToStack("Квартира 2: Вулиця 1, будинок 10, квартира 2");
stack.addToStack("Квартира 3: Вулиця 2, будинок 15, квартира 1");

// Перегляд всіх елементів в стеці
console.log(stack.testShow());

// Перевірка останнього елемента
console.log(stack.checkStack());

// Видалення елемента
console.log(stack.removeFromStack());

// Перегляд всіх елементів після видалення
console.log(stack.testShow());

// Очищення стеку
stack.clearStack();
console.log("Після очищення:", stack.testShow());
