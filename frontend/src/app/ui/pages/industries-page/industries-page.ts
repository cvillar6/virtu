import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
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
  constructor(private viewportScroller: ViewportScroller) {}

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
          image: "images/industry-icon-1.svg",
        },
        {
          title: "Modules for ACOs",
          description: "Complex Cases, Analytics & Reports, Patient Outreach, MRA, Referrals",
          image: "images/industry-icon-2.svg",
        },
        {
          title: "Proven Impact",
          description: "30% less paperwork. 40% faster care handoffs. Risk visibility across plans and provider groups.",
          image: "images/industry-icon-3.svg",
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
          image: "images/industry-icon-1.svg",
        },
        {
          title: "Modules for VBC Providers",
          description: "Complex Cases, Labs, Hospitalization, MRA, Claims, Pharmacy, Patient Outreach",
          image: "images/industry-icon-2.svg",
        },
        {
          title: "Proven Impact",
          description: "AI-powered dashboards improved patient risk tracking by 45%. Real-time hospitalization alerts reduced readmissions by 22%.",
          image: "images/industry-icon-3.svg",
        },
      ],
    },
    {
      information: {
        title: "Medicare Advantage Plans",
        description: "Virtu helps MA plans meet CMS requirements, close HEDIS and Star rating gaps, and improve member satisfaction—without overwhelming your internal teams.",
      },
      solutions: [
        {
          title: "Challenges We Solve",
          description: "We support MA organizations with accurate risk scoring, timely follow-up, and clear views into member engagement, disenrollment, and plan performance.",
          image: "images/industry-icon-1.svg",
        },
        {
          title: "Modules for Medicare Advantage",
          description: "Disenrollment, Membership, MRA, Patient Outreach, Analytics & Reports.",
          image: "images/industry-icon-2.svg",
        },
        {
          title: "Proven Impact",
          description: "Organizations using Virtu saw a 15% increase in member retention and faster closure of HEDIS gaps across multiple markets.",
          image: "images/industry-icon-3.svg",
        },
      ],
    },
    {
      information: {
        title: "Hospitals & Health Systems",
        description: "Virtu enables integrated care across hospital departments and facilities—making it easier to track performance, reduce delays, and support smooth transitions across inpatient and outpatient services.",
      },
      solutions: [
        {
          title: "Challenges We Solve",
          description: "We eliminate silos in data, improve visibility into operations, and enable system-wide reporting and quality oversight.",
          image: "images/industry-icon-1.svg",
        },
        {
          title: "Modules for Hospitals & Health Systems",
          description: "Hospitalization, Referrals, Patient App, Internal Messaging, Complex Cases, Analytics & Reports",
          image: "images/industry-icon-2.svg",
        },
        {
          title: "Proven Impact",
          description: "One hospital network reduced referral delays by 40% and gained full reporting visibility within 60 days of implementation.",
          image: "images/industry-icon-3.svg",
        },
      ],
    },
    {
      information: {
        title: "Physician Groups",
        description: "As your practice grows, Virtu keeps operations smooth and coordinated. From appointment follow-ups to performance tracking, we make it easier for you to deliver greatcare at scale.",
      },
      solutions: [
        {
          title: "Challenges We Solve",
          description: "We help physician groups reduce no-shows, track productivity, simplify coordination, and gain better control over financial performance.",
          image: "images/industry-icon-1.svg",
        },
        {
          title: "Modules for Physician Groups",
          description: "Patient Outreach, Claims, Reports, Internal Messaging, Revenue, Analytics & Reports",
          image: "images/industry-icon-2.svg",
        },
        {
          title: "Proven Impact",
          description: "Groups using Virtu cut no-shows by 25% and improved revenue visibility across locations in under 3 weeks.",
          image: "images/industry-icon-3.svg",
        },
      ],
    },
    {
      information: {
        title: "Correctional Health",
        description: "Virtu is purpose-built for the complex realities of correctional healthcare. Our EHR and analytics tools help providers deliver continuous, compliant care in high-risk environments—without compromising security or usability.",
      },
      solutions: [
        {
          title: "Challenges We Solve",
          description: "We support intake, behavioral health, medication management, and community reintegration—while handling connectivity, compliance, and data privacy challenges.",
          image: "images/industry-icon-1.svg",
        },
        {
          title: "Modules for Correctional Health",
          description: "EHR Platform: Case Management, Medication Management, Labs, Patient App, Analytics",
          image: "images/industry-icon-2.svg",
        },
        {
          title: "Proven Impact",
          description: "Deployed in the Dominican Republic and Haiti, Virtu’s system reduced documentation time by 30% and enabled continuity across over 36,000 incarcerated individuals",
          image: "images/industry-icon-3.svg",
        },
      ],
    },

  ]

  bookDemo: IBookDemo = {
    title: "See What Virtu Medical Can Do for Your Organization",
    description: "No matter your role in healthcare, we help you do more with less.",
    buttonText: 'Book a Demo',
    buttonLink: '/contact-us',
  }

  onIndustryClick(index: number) {
    const elementId = `industry-${index}`;
    const element = document.getElementById(elementId);
    if (element) {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }
}
