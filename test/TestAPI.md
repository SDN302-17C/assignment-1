# Test API

## Tool 
- Manual API testing
    - Thunder Client (VSCode Extension)
    - Postman 
    - JMeter 
- Automated API testing
    - Katalon Studio
    - akaAT Studio

<br>

## Test URL

### Questions 
- Get All Questions ![GET](https://img.shields.io/badge/-GET-blue?style=flat-square&logo=add&logoColor=white)
```bash
http://localhost:3000/questions/
```

- Create Question ![POST](https://img.shields.io/badge/-POST-green?style=flat-square&logo=search&logoColor=white)
```bash
http://localhost:3000/questions/
```

- Update Question ![PUT](https://img.shields.io/badge/-PUT-yellow?style=flat-square&logo=edit&logoColor=white)
```bash
http://localhost:3000/questions/questionId
```

- Delete Question ![DELETE](https://img.shields.io/badge/-DELETE-red?style=flat-square&logo=trash&logoColor=white)
```bash
http://localhost:3000/questions/questionId
```

<br>

### Quizzes 
- Get All Quizzes ![GET](https://img.shields.io/badge/-GET-blue?style=flat-square&logo=add&logoColor=white)
```bash
http://localhost:3000/quizzes/
```

- Get Quiz by ID ![GET](https://img.shields.io/badge/-GET-blue?style=flat-square&logo=add&logoColor=white)
```bash
http://localhost:3000/quizzes/quizId
```

- Create Quizzes ![POST](https://img.shields.io/badge/-POST-green?style=flat-square&logo=search&logoColor=white)
```bash
http://localhost:3000/quizzes/
```

- Update Quizzes ![PUT](https://img.shields.io/badge/-PUT-yellow?style=flat-square&logo=edit&logoColor=white)
```bash
http://localhost:3000/quizzes/quizId
```

- Delete Quizzes ![DELETE](https://img.shields.io/badge/-DELETE-red?style=flat-square&logo=trash&logoColor=white)
```bash
http://localhost:3000/quizzes/quizId
```

- Get all questions in quizId have keyword ![GET](https://img.shields.io/badge/-GET-blue?style=flat-square&logo=add&logoColor=white)
```bash
http://localhost:3000/quizzes/quizId/populate
```

- Create new question in quizId ![POST](https://img.shields.io/badge/-POST-green?style=flat-square&logo=search&logoColor=white)
```bash
http://localhost:3000/quizzes/quizId/question
```

- Create many new questions in quizId ![POST](https://img.shields.io/badge/-POST-green?style=flat-square&logo=search&logoColor=white)
```bash
http://localhost:3000/quizzes/quizId/questions
```