const router = require('express').Router();
const stu = require('../Model/students');

router.get('/students', (req, res) => {
    const st = stu.students;
    return res.render('students', {
        title: "Students Page",
        students: st
    })
});

router.get('/', (req, res) => {
    return res.render('home');
});

module.exports = router;