'use strict';

const Student = function(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.attendance = new Array(10).fill(null);
    this.assessments = new Array(10).fill(null);

    this.age = function() {
        return 2024 - this.yearOfBirth;
    };

    this.present = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log('Відвідування заповнене');
        }
    };

    this.absent = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log('Відвідування заповнене');
        }
    };

    this.mark = function(grade) {
        if (grade >= 0 && grade <= 10) {
            const index = this.assessments.indexOf(null);
            if (index !== -1) {
                this.assessments[index] = grade;
            } else {
                console.log('Оцінки заповнені');
            }
        } else {
            console.log('Недопустима оцінка');
        }
    };

    this.getAverageScore = function() {
        const validScores = this.assessments.filter(score => score !== null);
        const totalScore = validScores.reduce((sum, score) => sum + score, 0);
        return validScores.length ? totalScore / validScores.length : 0;
    };

    this.getAverageAttendance = function() {
        const validAttendances = this.attendance.filter(day => day !== null);
        const totalAttendance = validAttendances.filter(day => day === true).length;
        return validAttendances.length ? totalAttendance / validAttendances.length : 0;
    };

    this.summary = function() {
        const averageScore = this.getAverageScore();
        const averageAttendance = this.getAverageAttendance();

        if (averageScore > 9 && averageAttendance > 0.9) {
            return 'Ух ти, який молодчинка!';
        } else if (averageScore > 9 || averageAttendance > 0.9) {
            return 'Нормально, але можна краще';
        } else {
            return 'Редька!';
        }
    };
};

const student1 = new Student("Petro", "Joel", 1999);
const student2 = new Student("Soil", "Lisa", 2003);

student1.present();
student1.present();
student1.mark(10);
student1.mark(9);

console.log("Student 1 age:", student1.age());
console.log("Student 1 summary:", student1.summary());

student2.present();
student2.absent();
student2.mark(7);
student2.mark(8);

console.log("Student 2 age:", student2.age());
console.log("Student 2 summary:", student2.summary());

