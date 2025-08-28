import { Component } from '@angular/core';
import { BookDemo } from '../../components/book-demo/book-demo';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { IndustrySection } from '../../components/industry-section/industry-section';
import { Industry } from '../../components/industry/industry';
import { IBookDemo } from '../../interfaces/book-demo';
import { IHeroBanner } from '../../interfaces/hero-banner';
import { IIndustry, IIndustrySection } from '../../interfaces/industry';

@Component({
  selector: 'app-industries-page',
  imports: [HeroBanner, BookDemo, Industry, IndustrySection],
  templateUrl: './industries-page.html',
  styleUrl: './industries-page.css'
})
export class IndustriesPage {
  heroBanner: IHeroBanner = {
    title: "Industries We Serve",
    description: "From hospitals to correctional health systems, Virtu Medical supports organizations that need smart, flexible tools to deliver better outcomes—without added complexity.",
  }

  industries: IIndustry[] = [
    {
      title: "Accountable Care Organizations",
      description: "Lower costs while meeting quality benchmarks.",
      image: "images/industry-1.svg",
    },
    {
      title: "Value-Based Care Providers",
      description: "Manage outcomes and risk—without added complexity.",
      image: "images/industry-2.svg",
    },
    {
      title: "Medicare/Medicaid Payers",
      description: "Advanced your care performance goals.",
      image: "images/industry-3.svg",
    },
    {
      title: "Hospitals & Health Systems",
      description: "Unify teams, tools, and data for streamlined care delivery.",
      image: "images/industry-4.svg",
    },
    {
      title: "Physician Groups",
      description: "Simplify coordination across your growing practice.",
      image: "images/industry-5.svg",
    },
    {
      title: "Correctional Health",
      description: "Ensure compliance while safeguarding wellness.",
      image: "images/industry-6.svg",
    },
  ];

  industrySection: IIndustrySection[] = [
    {
      information: {
        title: "Accountable Care Organizations (ACOs)",
        description: "Virtu Medical connects the dots between patient needs and provider action. You get real-time dashboards, smart alerts, and centralized documentation that align care teams around the same goals—improving outcomes and maximizing shared savings. Whether you're a Single clinic or a multi-site organization, Virtu grows with you.",
      },
      solutions: [
        {
          title: "Challenges We Solve",
          description: "Virtu helps ACOs unify fragmented data, reduce unnecessary utilization, and manage patient risk proactively—without adding administrative burden.",
          image: "images/key-feature.svg",
        },
        {
          title: "Modules for ACOs",
          description: "Complex Cases, Analytics & Reports, Patient Outreach, MRA, Referrals",
          image: "images/key-feature.svg",
        },
        {
          title: "Proven Impact",
          description: "30% less paperwork. 40% faster care handoffs. Risk visibility across plans and provider groups.",
          image: "images/key-feature.svg",
        },
      ],
    },
    {
      information: {
        title: "Value-Based Care Providers",
        description: "Success in value-based care depends on data visibility, seamless coordination, and efficient workflows. Virtu equips your team with the tools to track outcomes, close care gaps, and maximize both clinical and financial performance.",
      },
      solutions: [
        {
          title: "Challenges We Solve",
          description: "We help VBC providers manage chronic conditions, improve care transitions, and reduce preventable utilization—all with real-time insights and minimal manual work.",
          image: "images/key-feature.svg",
        },
        {
          title: "Modules for VBC Providers",
          description: "Complex Cases, Labs, Hospitalization, MRA, Claims, Pharmacy, Patient Outreach",
          image: "images/key-feature.svg",
        },
        {
          title: "Proven Impact",
          description: "AI-powered dashboards improved patient risk tracking by 45%. Real-time hospitalization alerts reduced readmissions by 22%.",
          image: "images/key-feature.svg",
        },
      ],
    }

  ]

  bookDemo: IBookDemo = {
    title: "See What Virtu Medical Can Do for Your Organization",
    description: "No matter your role in healthcare, we help you do more with less.",
    buttonText: 'Book a Demo',
    buttonLink: '/contact-us',
  }
}
