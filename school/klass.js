const student = require('./student');
const teacher = require('./teacher');

function add(teacherName,students) {
  teacher.add(teacherName);
  students.forEach(function (val,indx) {
    student.add(val)
  });
}

exports.add = add;
