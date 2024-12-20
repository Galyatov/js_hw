function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

class TaskQueue {
    constructor(delayMs) {
        this.delayMs = delayMs;
        this.tasks = [];
        this.isRunning = false;
    }
    addTask(task) {
        if (typeof task !== "function") {
            throw new Error("Завдання має бути функцією, яка повертає Promise.");
        }
        this.tasks.push(task);
    }
    run() {
        if (this.isRunning) {
            return Promise.reject(new Error("Черга вже виконується."));
        }

        this.isRunning = true;

        let promiseChain = Promise.resolve();

        this.tasks.forEach((task, index) => {
            promiseChain = promiseChain
                .then(() => task())
                .then((result) => console.log(result))
                .catch((error) => console.error(`Помилка в завданні ${index + 1}:`, error))
                .then(() => delay(this.delayMs));
        });

        return promiseChain
            .then(() => "Усі завдання завершено")
            .finally(() => {
                this.isRunning = false;
            });
    }
}
const queue = new TaskQueue(1000);

queue.addTask(() => Promise.resolve("Task 1 виконано"));
queue.addTask(() => Promise.resolve("Task 2 виконано"));
queue.addTask(() => Promise.resolve("Task 3 виконано"));

queue.run().then((message) => {
    console.log(message);
});
