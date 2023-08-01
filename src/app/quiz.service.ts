import { Injectable } from '@angular/core';
import { Choice, Question } from './question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quiz: Choice[][] = [
    // Choices for Question 1
    [
      {
        id: 1,
        text: 'Berlin',
        isAnswer: false,
      },
      {
        id: 2,
        text: 'Paris',
        isAnswer: true,
      },
      {
        id: 3,
        text: 'London',
        isAnswer: false,
      },
      {
        id: 4,
        text: 'Rome',
        isAnswer: false,
      },
    ],
    // Choices for Question 2
    [
      {
        id: 1,
        text: 'Venus',
        isAnswer: false,
      },
      {
        id: 2,
        text: 'Mars',
        isAnswer: true,
      },
      {
        id: 3,
        text: 'Jupiter',
        isAnswer: false,
      },
      {
        id: 4,
        text: 'Saturn',
        isAnswer: false,
      },
    ],
    // Choices for Question 3
    [
      {
        id: 1,
        text: 'O2',
        isAnswer: false,
      },
      {
        id: 2,
        text: 'CO2',
        isAnswer: false,
      },
      {
        id: 3,
        text: 'H2O',
        isAnswer: true,
      },
      {
        id: 4,
        text: 'NaCl',
        isAnswer: false,
      },
    ],
    // Choices for Question 4
    [
      {
        id: 1,
        text: 'William Shakespeare',
        isAnswer: true,
      },
      {
        id: 2,
        text: 'Charles Dickens',
        isAnswer: false,
      },
      {
        id: 3,
        text: 'Jane Austen',
        isAnswer: false,
      },
      {
        id: 4,
        text: 'Mark Twain',
        isAnswer: false,
      },
    ],
    // Choices for Question 5
    [
      {
        id: 1,
        text: 'Elephant',
        isAnswer: false,
      },
      {
        id: 2,
        text: 'Blue Whale',
        isAnswer: true,
      },
      {
        id: 3,
        text: 'Polar Bear',
        isAnswer: false,
      },
      {
        id: 4,
        text: 'Giraffe',
        isAnswer: false,
      },
    ],
    // Choices for Question 6
    [
      {
        id: 1,
        text: 'Isaac Newton',
        isAnswer: false,
      },
      {
        id: 2,
        text: 'Albert Einstein',
        isAnswer: true,
      },
      {
        id: 3,
        text: 'Galileo Galilei',
        isAnswer: false,
      },
      {
        id: 4,
        text: 'Nikola Tesla',
        isAnswer: false,
      },
    ],
    // Choices for Question 7
    [
      {
        id: 1,
        text: 'Ag',
        isAnswer: false,
      },
      {
        id: 2,
        text: 'Au',
        isAnswer: true,
      },
      {
        id: 3,
        text: 'Fe',
        isAnswer: false,
      },
      {
        id: 4,
        text: 'Cu',
        isAnswer: false,
      },
    ],
    // Choices for Question 8
    [
      {
        id: 1,
        text: 'India',
        isAnswer: true,
      },
      {
        id: 2,
        text: 'Egypt',
        isAnswer: false,
      },
      {
        id: 3,
        text: 'Turkey',
        isAnswer: false,
      },
      {
        id: 4,
        text: 'China',
        isAnswer: false,
      },
    ],
    // Choices for Question 9
    [
      {
        id: 1,
        text: 'Tomatoes',
        isAnswer: false,
      },
      {
        id: 2,
        text: 'Avocado',
        isAnswer: true,
      },
      {
        id: 3,
        text: 'Onions',
        isAnswer: false,
      },
      {
        id: 4,
        text: 'Cucumbers',
        isAnswer: false,
      },
    ],
    // Choices for Question 10
    [
      {
        id: 1,
        text: 'Vincent van Gogh',
        isAnswer: false,
      },
      {
        id: 2,
        text: 'Leonardo da Vinci',
        isAnswer: true,
      },
      {
        id: 3,
        text: 'Pablo Picasso',
        isAnswer: false,
      },
      {
        id: 4,
        text: 'Michelangelo',
        isAnswer: false,
      },
    ],
  ];
  quizData: Question[] = [
    {
      id: 1,
      text: 'What is the capital of France?',
      choices: this.quiz[0],
    },
    {
      id: 2,
      text: 'Which planet is known as the "Red Planet"?',
      choices: this.quiz[1],
    },
    {
      id: 3,
      text: 'What is the chemical symbol for water?',
      choices: this.quiz[2],
    },
    {
      id: 4,
      text: 'Who wrote the play "Romeo and Juliet"?',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Romeo_and_juliet_brown.jpg/330px-Romeo_and_juliet_brown.jpg',
      choices: this.quiz[3],
    },
    {
      id: 5,
      text: 'What is the largest mammal on Earth?',
      choices: this.quiz[4],
    },
    {
      id: 6,
      text: 'Which famous scientist developed the theory of general relativity?',
      choices: this.quiz[5],
    },

    {
      id: 7,
      text: 'What is the chemical symbol for gold?',
      choices: this.quiz[6],
    },
    {
      id: 8,
      text: 'In which country is the Taj Mahal located?',
      choices: this.quiz[7],
    },
    {
      id: 9,
      text: 'What is the main ingredient in guacamole?',
      choices: this.quiz[8],
    },
    {
      id: 10,
      text: 'Which famous artist who painted this image?',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/405px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      choices: this.quiz[9],
    },
  ];

  constructor() {}

  getQuizData(){
    return this.quizData
  }
}
