import { Component, inject } from '@angular/core';
import { Choice, Question } from '../question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent {
  quizService: QuizService = inject(QuizService);

  isEach: boolean = true;
  currentQuestionIndex = 0;
  question: Question[];

  constructor() {
    this.question = this.quizService.getQuizData();
    this.question.sort((a, b) => 0.5 - Math.random());
    this.question[this.currentQuestionIndex].choices.sort(
      (a, b) => 0.5 - Math.random()
    );
  }
  setEachQuestion() {
    this.isEach = true;
    console.log('T');
  }
  setAllQuestion() {
    this.isEach = false;
    console.log('F');
  }
  findTrueChoice(ch: Choice[]) {
    const answer = ch.find((element, index) => {
      return element.isAnswer == true;
    });
    return answer?.text;
  }
  nextQuestion() {
    this.currentQuestionIndex++;
  }
  previousQuestion() {
    this.currentQuestionIndex--;
  }
  getQuizDataNoImage() {
    return this.question.filter((element, index) => {
      return !element.image;
    });
  }
}
