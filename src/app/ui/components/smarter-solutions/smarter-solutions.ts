import { Component } from '@angular/core';
import { SmarterSolutionCard } from '../smarter-solution-card/smarter-solution-card';

@Component({
  selector: 'app-smarter-solutions',
  imports: [SmarterSolutionCard],
  templateUrl: './smarter-solutions.html',
  styleUrl: './smarter-solutions.css'
})
export class SmarterSolutions {
  readonly SOLUTIONS = [
    {
      title: 'Optimize Healthcare Operations',
      description: 'Streamline workflows, reduce manual tasks, and enhance collaboration with a unified platform designed for healthcare providers.',
      image: '/images/smarter-solution-1.svg'
    },
    {
      title: 'Enhance Patient Care with Real-Time Data',
      description: 'Improve decision-making and patient outcomes with centralized, up-to-date medical records and seamless data access.',
      image: '/images/smarter-solution-2.svg'
    },
    {
      title: 'Reduce Administrative Burden',
      description: 'Automate documentation, reporting, and scheduling to give providers more time to focus on patient care.',
      image: '/images/smarter-solution-3.svg'
    }
  ]

}
