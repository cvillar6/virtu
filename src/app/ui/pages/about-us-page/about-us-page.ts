import { Component } from '@angular/core';
import { Avatar } from '../../components/avatar/avatar';
import { CoreValue } from '../../components/core-value/core-value';
import { IAvatar } from '../../interfaces/avatar';
import { ICoreValue } from '../../interfaces/core-value';

@Component({
  selector: 'app-about-us-page',
  imports: [CoreValue, Avatar],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css'
})
export class AboutUsPage {
  coreValues: ICoreValue[] = [
    {
      title: 'Our Mission',
      description: 'Streamline workflows, reduce manual tasks, and enhance collaboration with a unified platform designed for healthcare providers.',
      icon: 'pi pi-bullseye'
    },
    {
      title: 'Our Vision',
      description: 'Streamline workflows, reduce manual tasks, and enhance collaboration with a unified platform designed for healthcare providers.',
      icon: 'pi pi-heart'
    }
  ]

  avatars: IAvatar[] = [
    {
      name: 'Mohamad Kamaredine',
      image: 'images/avatar-1.svg',
      position: 'CEO and Founder',
      description: 'Mr. Kamaredine has a proven executive management track record and over 17 years of experience driving sales growth in the technology industry. Working in the healthcare industry for 15 years, Mr. Kamaredine helped large healthcare organizations become HIPAA compliant, establish policies and procedures, and create a robust data security infrastructure focused on protecting patient data. The work in healthcare Data became so significant that Mr. Kamaredine decided to create Virtu Medical. Mr. Kamaredine has an Executive Certificate in Management and Leadership from MIT, Sloan School of Management, and is currently pursuing his Master’s in Business Administration specializing in Data Science.'
    },
    {
      name: 'Dr. Mourad Mourad',
      image: 'images/avatar-2.svg',
      position: 'VP of Engineering',
      description: 'Mourad is a software engineer with 17+ years of experience in building software applications. He graduated from Florida International University with Ph.D. in Electrical Engineering, a master’s degree, and a bachelor’s degree in Computer Engineering.After working as a Software Engineer for Beckman Coulter (4 years) and Microsoft (11 years), Mourad joined Virtu Medical to lead the Software Development Team. He has strong knowledge and experience with Microsoft Stack, including SQL Server, C#, Asp.Net Core, and the full software development lifecycle from the design through coding and testing to release and maintenance.'
    },
    {
      name: 'Josip Majic',
      image: 'images/avatar-3.svg',
      position: 'VP of Product and Business Development',
      description: 'Josip Majic is an experienced technology executive and software engineer with a proven track record in leading product innovation and technical teams across multiple industries, including healthcare, payroll, telecom, and financial services. Throughout his career, Josip founded and managed successful software consulting businesses in the United States and Croatia. He has architected and delivered complex microservices-based solutions and SaaS platforms, notably in healthcare, payroll systems, CRM, logistics, and identity management, significantly improving clients’ operational efficiency and scalability. His extensive experience includes collaborating with top-tier clients such as Siemens, LexisNexis, Rimini Street, Ultimate Software, and Croatian Telecom.'
    },
    {
      name: 'Dr. Hamid Zemirline',
      image: 'images/avatar-4.svg',
      position: 'Senior Data Engineer',
      description: 'Dr. Zemirline has worked in the medical and utility industries for 15+ years. He designed a comprehensive architecture for a software solution and provided strategic direction throughout the development process. Implemented end-to-end Data / IA architecture on Cloud and On-premise. Dr. Zemirline has worked for BIG DATA TRAINER, imparting training in the extensive data ecosystem Hadoop, NoSQL, Machine Learning, and Data Visualization. Dr. Zemirline holds a Ph.D. in Machine Learning specializing in Medical Data Analytics from IMT Atlantique in France and an M.S. in computer science.'
    },
    {
      name: 'Vlad Friedman',
      image: 'images/avatar-5.svg',
      position: 'CTO',
      description: 'Vlad is a seasoned IT veteran with over 25 years of mission-critical IT experience. Mr. Friedman joined the DataBank leadership team as Chief Technology Officer in 2017 with the acquisition of Edge Hosting. In his role as DataBank’s CTO, Vlad guides the direction for the development, implementation, and management of the company’s overall technology strategies. Prior to DataBank, Mr. Friedman founded Edge Hosting, a compliance-driven IaaS and PaaS Managed Cloud Hosting service provider. He did so in 1998 as a spin-off from his first IT venture, ACS, which was started while he was still a student at the University of Maryland.'
    },
    {
      name: 'Ivan Calder',
      image: 'images/avatar-6.svg',
      position: 'Advisory Board Member',
      description: 'Ivan Calder is the CEO for Health through Walls, and a seasoned senior executive with experience and expertise in healthcare delivery and justice administration. Over the course of two decades, Ivan’s career has been dedicated to helping people improve and achieve positive change - from early roles in nursing, providing patients with the information they needed to make good decisions for their own health; to leading treatment programs and custodial operations in correctional facilities; and currently working with correctional systems in an international development capacity, the scope and reach of his influence has grown, although the underlying motivation has remained the same.'
    },
    {
      name: 'Pedro das Neves',
      image: 'images/avatar-7.svg',
      position: 'Advisory Board Member',
      description: 'Pedro is a global thought leader with decades of experience in innovation, public policy, justice reform, and digital transformation. He brings a rare combination of strategic depth and purpose-driven leadership. As CEO of IPS, Pedro has led groundbreaking work in software development for offender management systems and the HORUS 360 iOMS platform; expertise that powerfully complements Virtu Care’s Electronic Health Record (EHR) system. His experience helps us advance our mission to create intelligent, integrated, and humane healthcare solutions.'
    }
  ]
}
