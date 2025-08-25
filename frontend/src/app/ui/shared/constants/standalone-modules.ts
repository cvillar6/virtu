import { IStandaloneModule } from "../../interfaces/standalone-module";

export const STANDALONE_MODULES: IStandaloneModule[] = [
    {
        id: 'transportation',
        heroBanner: {
            title: 'Healthcare Transportation Module – Medical Transportation Software',
            description: 'The Transportation Module is a first-of-its-kind medical transportation software integrated with Uber Health, designed specifically for healthcare environments. Built for transportation officers, clinical coordinators, and mobile teams, it centralizes scheduling, real-time tracking, and patient syncing into one intuitive, HIPAA-compliant platform. Whether you are running your own fleet or using external vendors, this stand - alone solution streamlines operations, cuts costs, and helps ensure patients get to care—safely, reliably, and on time.',
        },
        moduleFeatures: [
            {
                title: 'Fewer Missed Appointments',
                description: 'Automated scheduling and real-time ride coordination keep patients on track for care.',
            },
            {
                title: 'Smarter, Faster Dispatching',
                description: 'Assign trips instantly, optimize routes, and reduce wait times with live driver tracking.',
            },
            {
                title: 'Workflow Simplicity for Staff',
                description: 'Built for transportation officers and healthcare teams to reduce manual steps and communication gaps.',
            },
            {
                title: 'Integrated Patient Coordination',
                description: 'Sync appointments and patient data automatically through seamless EHR integration.',
            },
            {
                title: 'Accountable, Reliable Operations',
                description: 'Track routes, log ride histories, and maintain vehicles proactively with real-time alerts.',
            },
        ],
        keyFeatures: [
            {
                title: 'First to Integrate Uber Health',
                description: 'Use Uber Health as a flexible backup or primary transportation option—fully embedded into your medical transportation software dispatch system.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Automated Scheduling & Dispatch',
                description: 'Monitor live vehicle locations and access detailed route logs to ensure transparency and compliance with your medical transportation software.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Real-Time GPS & Route Logs',
                description: 'Monitor live vehicle locations and access detailed route logs to ensure transparency and compliance.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Driver Communication Tools',
                description: 'Enable real-time updates and task changes with built-in messaging on driver tablets.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'EHR & Appointment Syncing',
                description: 'Automatically sync patient details, appointments, and transportation needs in real time through the medical transportation software platform.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Maintenance & Safety Alerts',
                description: 'Stay ahead of compliance and safety with automated reminders for vehicle checks and maintenance logs.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Standalone or Integrated',
                description: 'Use independently or as part of Virtu\'s connected medical transportation software platform for end-to-end care coordination.',
                icon: 'images/key-feature.svg'
            },
        ],
        bookDemo: {
            title: 'Take the Complexity Out of Medical Transport',
            description: 'Coordinate smarter, drive efficiency, and ensure every patient gets to care without the chaos.',
            buttonText: 'Book a Demo',
            buttonLink: '/contact-us'
        }
    },
    {
        id: 'disenrollments',
        heroBanner: {
            title: 'Disenrollment Module - Patient retention software',
            description: 'The Disenrollment Module helps healthcare organizations uncover the reasons behind patient attrition—and do something about it. With built-in trend tracking, targeted surveys, and plan-level insights, your team can address the drivers of disengagement and strengthen patient relationships before it’s too late. Whether youare managing network performance or patient experience, this stand - alone patient retention software brings retention into focus.'
        },
        moduleFeatures: [
            {
                title: 'Visibility Into Patient Churn',
                description: 'Spot patterns and problem areas across health plans, business lines, and locations with our patient retention software.',
            },
            {
                title: 'Stronger Retention Strategies',
                description: 'Use data-backed insights to reduce turnover and improve the care experience.',
            },
            {
                title: 'Win-Back Opportunities',
                description: 'Learn from reenrollment trends to better support returning patients.',
            },
            {
                title: 'Performance Accountability',
                description: 'Equip quality, compliance, and provider relations teams with the insights they need to drive improvement.',
            },
        ],
        keyFeatures: [
            {
                title: 'Patient Retention',
                description: 'Keep patients engaged and informed with automated reminders, appointment confirmations, and personalized communications.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Disenrollment Trend Reports',
                description: 'Track disenrollment by plan, line of business, and center—with easy-to-read visuals and comparison tools using our patient retention software.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Exit Survey Automation',
                description: 'Send tailored surveys to departing patients to capture experience feedback in real time.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Top Driver Analysis',
                description: 'Identify the most common reasons for leaving and uncover gaps in services or access.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Reenrollment Monitoring',
                description: 'View patterns of returning patients and analyze which efforts are driving reengagement.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Standalone or Integrated',
                description: 'Use independently or integrate with your Virtu modules or EHR system for a unified patient view.',
                icon: 'images/key-feature.svg'
            },
        ],
        bookDemo: {
            title: 'Take Control of Retention',
            description: 'Get ahead of disenrollment with our patient retention software that provides insights to drive better decisions and outcomes.',
            buttonText: 'Book a Demo',
            buttonLink: '/contact-us'
        }
    },
    {
        id: 'patient-outreach',
        heroBanner: {
            title: 'Patient Engagement Platform',
            description: 'The Patient Outreach Module transforms how healthcare organizations communicate with their patients. Whether you are reminding patients about upcoming appointments, sharing educational materials, or following up after a visit, this stand-alone Patient Engagement Platform centralizes and automates outreach — while staying fully HIPAA-compliant. With built-in analytics, multi-channel communication, and customizable workflows, it helps your team engage patients proactively, reduce no-shows, and improve the care experience across the board.'
        },
        moduleFeatures: [
            {
                title: 'Fewer No-Shows, More Completed Visits',
                description: 'Keep schedules full with automated reminders and easy rescheduling tools through our Patient Engagement Platform.',
            },
            {
                title: 'More Informed, Engaged Patients',
                description: 'Send personalized health education, updates, and post-visit follow-ups that actually get read.',
            },
            {
                title: 'Stronger Patient Relationships',
                description: 'Enable secure, two-way messaging to support timely communication and build trust.',
            },
            {
                title: 'Smarter Outreach Decisions',
                description: 'Track open rates, response trends, and satisfaction scores to optimize your engagement strategy.',
            },
        ],
        keyFeatures: [
            {
                title: 'Automated Reminder System',
                description: 'Trigger appointment reminders via SMS, email, or voice — and let patients confirm or reschedule with ease using our Patient Engagement Platform.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Content & Survey Delivery Tools',
                description: 'Share customized education content, satisfaction surveys, and care tips based on patient history.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Secure Two-Way Messaging',
                description: 'Empower patients to ask questions, receive updates, and stay connected — all in a HIPAA-compliant environment.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Outreach Analytics & Reporting',
                description: 'Monitor real-time engagement metrics and export insights to continuously improve performance.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Standalone or Integrated',
                description: 'Use independently or sync with your Virtu modules or EHR system to create a seamless communication experience.',
                icon: 'images/key-feature.svg'
            },
        ],
        bookDemo: {
            title: 'Modernize Patient Communication',
            description: 'Deliver the personalized, timely touchpoints patients expect — with less effort from your team using our Patient Engagement Platform.',
            buttonText: 'Book a Demo',
            buttonLink: '/contact-us'
        }
    },
    {
        id: 'referral-managements',
        heroBanner: {
            title: 'Referral Management Module',
            description: 'The Referral Management Module gives your team full visibility into the referral lifecycle — from initial submission to scheduled appointments and follow-up. Built to reduce delays and eliminate manual tracking, this stand-alone solution keeps providers, patients, and care coordinators aligned every step of the way. Whether you are coordinating specialty referrals, lab orders, or external consultations, Virtu makes the process seamless and accountable.'
        },
        moduleFeatures: [
            {
                title: 'Real-Time Referral Visibility',
                description: 'Know the exact status of every referral — accepted, scheduled, completed, or overdue with our Referral Management Module.',
            },
            {
                title: 'Faster, Smoother Coordination',
                description: 'Reduce delays, close care gaps, and streamline communication between referring and receiving providers.',
            },
            {
                title: 'Patient Engagement Built In',
                description: 'Keep patients in the loop with a user-friendly portal for updates, alerts, and appointment info.',
            },
            {
                title: 'Data-Driven Efficiency',
                description: 'Monitor turnaround times, identify bottlenecks, and improve team performance with referral analytics.',
            },
        ],
        keyFeatures: [
            {
                title: 'Centralized Referral Tracking',
                description: 'Manage all incoming and outgoing referrals in one place — searchable, filterable, and up to date with our Referral Management Module.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Secure Provider Messaging',
                description: 'Enable direct, HIPAA-compliant communication between providers to coordinate patient care.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Patient Referral Portal',
                description: 'Give patients access to view status, receive automated reminders, and prepare for upcoming appointments.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Automated Status Updates',
                description: 'Trigger alerts when referrals are scheduled, delayed, or require follow-up — reducing manual work.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Turnaround Metrics & Bottleneck Analysis',
                description: 'Track response times, measure referral outcomes, and uncover workflow inefficiencies.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Standalone or Integrated',
                description: 'Use independently or connect with your existing EHR and Virtu modules for streamlined coordination.',
                icon: 'images/key-feature.svg'
            },
        ],
        bookDemo: {
            title: 'Make Referrals Work for Patients—Not Against Them',
            description: 'Streamline handoffs, reduce no-shows, and improve the referral experience across your network with our Referral Management Module.',
            buttonText: 'Book a Demo',
            buttonLink: '/contact-us'
        }
    },
    {
        id: 'hospitalization',
        heroBanner: {
            title: 'Hospitalization Module - Bed management system',
            description: 'The Hospitalization Module equips care teams with real-time insights into hospital admissions, ER visits, and readmissions—empowering smarter, faster decisions. Whether you are managing transitions of care or monitoring utilization patterns, this stand - alone bed management system keeps you ahead of risk. From live event tracking to follow- up coordination, it connects the dots between hospital data and better outcomes.'
        },
        moduleFeatures: [
            {
                title: 'Real-Time Hospitalization Alerts',
                description: 'Get notified the moment a patient is admitted, discharged, or visits the ER with our bed management system.',
            },
            {
                title: 'Better Readmission Prevention',
                description: 'Spot high-risk trends early and deploy timely interventions to reduce avoidable returns.',
            },
            {
                title: 'Data-Driven Coordination',
                description: 'Track follow-up completion and guide care planning across teams and providers.',
            },
            {
                title: 'Smarter Resource Allocation',
                description: 'See where usage is highest and prioritize support where it\'s needed most.',
            },
        ],
        keyFeatures: [
            {
                title: 'Live Hospital & ER Event Monitoring',
                description: 'Receive immediate updates on admissions, observation stays, and emergency visits with our bed management system.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Utilization & Readmission Analytics',
                description: 'Visualize trends by patient, provider, or site —perfect for ACOs and value-based contracts.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Provider Performance Comparison',
                description: 'Identify top-performing and high-utilization providers to inform strategic decisions.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Discharge & Follow-Up Tracking',
                description: 'Monitor transitions of care and ensure timely post-discharge engagement.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Custom Dashboards & Exportable Reports',
                description: 'Choose how you see your data—with flexible visualizations and downloadable insights.',
                icon: 'images/key-feature.svg'
            },
        ],
        bookDemo: {
            title: 'Take Control of Transitions',
            description: 'Improve outcomes and reduce hospital-based costs with proactive, coordinated care.',
            buttonText: 'Book a Demo',
            buttonLink: '/contact-us'
        }
    },
    {
        id: 'imaging',
        heroBanner: {
            title: 'Imaging Module - Medical image management software',
            description: 'The Imaging Module is a secure, stand-alone medical image management software solution designed to streamline every step of diagnostic imaging—from scheduling and documentation to results sharing and billing. Whether you’re a radiology center, referring provider, or care coordinator, this module centralizes key workflows into a single, easy-to-use platform. With real-time access to imaging history, modality tracking, and physician communication tools, it helps you deliver faster, more coordinated care.'
        },
        moduleFeatures: [
            {
                title: 'Seamless Scheduling & Follow-Up',
                description: 'Manage appointments with a built-in calendar that keeps your imaging pipeline organized.',
            },
            {
                title: 'Full Imaging Visibility',
                description: 'Track completed, pending, or missed exams across all modalities—MRI, CT, X-ray, and more—with our medical image management software.',
            },
            {
                title: 'Streamlined Communication',
                description: 'Upload, share, and access results securely—no phone calls or paper faxes required.',
            },
            {
                title: 'Centralized Billing & Authorization',
                description: 'Simplify insurance data collection and superbill management from one platform.',
            },
        ],
        keyFeatures: [
            {
                title: 'Built-In Imaging Calendar',
                description: 'Schedule and adjust appointments by day, week, or month with full visibility into availability.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Secure Uploads & Results Sharing',
                description: 'Exchange referrals, authorizations, and imaging results with both patients and providers through our medical image management software.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Modality-Based Reporting',
                description: 'Filter and monitor exams by type to ensure complete diagnostic coverage and reduce delays.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Authorization & Billing Integration',
                description: 'Capture superbill details and insurance documentation without jumping between systems.',
                icon: 'images/key-feature.svg'
            },
            {
                title: 'Access to Historical Imaging Data',
                description: 'Quickly view past imaging records for each patient—supporting more informed decisions.',
                icon: 'images/key-feature.svg'
            },
        ],
        bookDemo: {
            title: 'Take the Complexity Out of Imaging',
            description: 'Coordinate faster. Reduce administrative burden. And make diagnostics clearer—for everyone.',
            buttonText: 'Book a Demo',
            buttonLink: '/contact-us'
        }
    }
]