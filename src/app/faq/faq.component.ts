import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqList = [
    { question: 'What is OET?', answer: 'OET is an English language test designed for healthcare professionals.', show: false },
    { question: 'How long is the course?', answer: 'The course is 8 weeks long with flexible timings.', show: false },
    { question: 'Are there any prerequisites?', answer: 'You must have basic English proficiency and be a healthcare professional.', show: false }
  ];

  toggle(item: any) {
    item.show = !item.show;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
