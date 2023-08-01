import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizService } from '../quiz.service';
import { Choice, Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  quizService: QuizService = inject(QuizService);

  question: Question[];
  currentQuestionIndex = 0;
  isEnd = true;
  score = 0;

  constructor() {
    this.question = this.quizService.getQuizData();
    this.question.sort((a, b) => 0.5 - Math.random());
    this.question[this.currentQuestionIndex].choices.sort(
      (a, b) => 0.5 - Math.random()
    );
  }
  onClickChoice(isAnswer: boolean) {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.question.length) {
      this.showScore();
    }
    if (isAnswer) {
      this.score++;
    }
    this.question[this.currentQuestionIndex].choices.sort(
      (a, b) => 0.5 - Math.random()
    );
  }
  async showScore() {
    this.isEnd = false;
    await Swal.fire({
      title: 'Score',
      text: '' + this.score,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
    this.newQuizz();
  }
  newQuizz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.isEnd = true;
  }
}
