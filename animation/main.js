const quiz = [
    {
        questionId:1,
        question:"What is nodejs?",
        options:['Programming Language', 'Runtime Envirunment', 'A Framework', 'A library'],
        answer:"Runtime Envirunment",
        correct:Boolean
    },
    {
        questionId:2,
        question:"In which programming language is nodejs written?",
        options:['Python', 'JavaScript', 'C', 'C++', "C & C++ Both"],
        answer:"C & C++ Both",
        correct:Boolean
    },
    {
        questionId:3,
        question:"Which is the core module of Nodejs",
        options:['Morgan', 'Cors', 'events', 'nodemon'],
        answer:"events",
        correct:Boolean
    },
    {
        questionId:4,
        question:"Identify the parameter of the module wrapper function.",
        options:['process', '_dirname', 'env', 'express'],
        answer:"_dirname",
        correct:Boolean
    },
    {
        questionId:5,
        question:"Identify the correct syntax of exporting module.",
        options:['exports.module = function_name', 'module = function_name', 'exports = function_name', 'module.exports = function_name'],
        answer:"module.exports = function_name",
        correct:Boolean
    },
    {
        questionId:6,
        question:"Is Nodejs single threaded?",
        options:['Yes', 'No', 'Nether Yes Nor No'],
        answer:"Yes",
        correct:Boolean
    },
    {
        questionId:7,
        question:"Which one is the global object in the environment of Node APIs?",
        options:['module', 'exports', 'setTimeout', 'parse(_filename)'],
        answer:"setTimeout",
        correct:Boolean
    },
    {
        questionId:8,
        question:"Can you access DOM in node?",
        options:['No', 'Yes'],
        answer:"No",
        correct:Boolean
    },
    {
        questionId:9,
        question:"Does node run on windows?",
        options:['Yes', 'No'],
        answer:"Yes",
        correct:Boolean
    },
    {
        questionId:10,
        question:"Using the event loop what are the tasks that should be done asynchronously?",
        options:['Image Processing', 'I/O operations', 'Data Binding', 'Error Handling'],
        answer:"I/O operations",
        correct:Boolean
    }
]

const navbar = document.querySelector('#navbar');
document.onkeydown = (e) => {
    if((e.keyCode == 40 && document.documentElement.scrollTop > 80) || e.keyCode == 35){
        navbar.classList.add('hide');
    }
    setTimeout(() => {
        if(e.keyCode == 38 || document.documentElement.scrollTop == 0){
            navbar.classList.remove('hide');
        }
    }, 200)
    console.log(e.keyCode)
}
