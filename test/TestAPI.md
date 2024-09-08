# Test API

## Tool 
- Manual API testing
    - Thunder Client (VSCode Extension)
    - Postman 
    - JMeter 
- Automated API testing
    - Katalon Studio
    - akaAT Studio

## Test URL

### Questions 
- Get All Questions (GET method)
```bash
http://localhost:3000/questions/
```

- Create Question (POST method)
```bash
http://localhost:3000/questions/
```

- Update Question (PUT method)
```bash
http://localhost:3000/questions/questionId
```

- Delete Question (DELETE method)
```bash
http://localhost:3000/questions/questionId
```


### Quizzes 
- Get All Quizzes (GET method)
```bash
http://localhost:3000/quizzes/
```

- Get Quiz by ID (GET method)
```bash
http://localhost:3000/quizzes/quizId
```

- Create Quizzes (POST method)
```bash
http://localhost:3000/quizzes/
```

- Update Quizzes (PUT method)
```bash
http://localhost:3000/quizzes/quizId
```

- Delete Quizzes (DELETE method)
```bash
http://localhost:3000/quizzes/quizId
```

- Get all questions in quizId have keyword (GET method)
```bash
http://localhost:3000/quizzes/quizId/populate
```

- Create new question in quizId (POST method)
```bash
http://localhost:3000/quizzes/quizId/question
```

- Create many new questions in quizId (POST method)
```bash
http://localhost:3000/quizzes/quizId/questions
```
