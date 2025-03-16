export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ` 
            <h1>Untitled Document</h1>
            <p>Start typing here...</p>
        `
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: ` 
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, Zip Code]</p>
            <p>[Email]</p>
            <p>[Phone Number]</p>
            <p>[Date]</p>

            <p>[Recipient's Name]</p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>

            <h2>Subject: [Business Letter Subject]</h2>

            <p>Dear [Recipient's Name],</p>

            <p>[Introduction: State the purpose of your letter]</p>

            <p>[Main content: Provide details, context, and any required actions]</p>

            <p>[Conclusion: Summarize your letter and state the next steps]</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: ` 
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, Zip Code]</p>
            <p>[Email]</p>
            <p>[Phone Number]</p>
            <p>[Date]</p>

            <p>[Hiring Manager’s Name]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>

            <h2>Subject: Application for [Job Title]</h2>

            <p>Dear [Hiring Manager’s Name],</p>

            <p>I am excited to apply for the [Job Title] position at [Company Name]. With my background in [Your Field/Experience], I am confident in my ability to contribute effectively to your team.</p>

            <p>[Highlight your key skills and experiences relevant to the job]</p>

            <p>[Express enthusiasm for the company and mention how you can add value]</p>

            <p>Thank you for considering my application. I look forward to the opportunity to discuss my candidacy further.</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: ` 
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, Zip Code]</p>
            <p>[Email]</p>
            <p>[Phone Number]</p>
            <p>[Date]</p>

            <p>[Recipient's Name]</p>
            <p>[Recipient's Address]</p>
            <p>[City, State, Zip Code]</p>

            <p>Dear [Recipient's Name],</p>

            <p>[Start with a friendly introduction]</p>

            <p>[Main message of the letter]</p>

            <p>[Closing statement]</p>

            <p>Best regards,</p>
            <p>[Your Name]</p>
        `
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: ` 
            <h1>Project Proposal</h1>
            <h2>[Project Title]</h2>

            <h3>1. Introduction</h3>
            <p>[Brief overview of the project and its objectives]</p>

            <h3>2. Problem Statement</h3>
            <p>[Describe the problem the project aims to solve]</p>

            <h3>3. Proposed Solution</h3>
            <p>[Explain how the project will address the problem]</p>

            <h3>4. Timeline</h3>
            <p>[Provide an estimated timeline for project completion]</p>

            <h3>5. Budget</h3>
            <p>[Outline the budget requirements]</p>

            <h3>6. Conclusion</h3>
            <p>[Summarize the proposal and call for action]</p>
        `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: ` 
            <h1>[Your Name]</h1>
            <p>[Your Email] | [Your Phone] | [LinkedIn Profile]</p>

            <h2>Summary</h2>
            <p>[Brief professional summary highlighting your skills and experience]</p>

            <h2>Experience</h2>
            <h3>[Job Title]</h3>
            <p>[Company Name] | [Start Date] - [End Date]</p>
            <ul>
                <li>[Key responsibility or achievement]</li>
                <li>[Key responsibility or achievement]</li>
            </ul>

            <h2>Education</h2>
            <p>[Degree] - [University Name] ([Year])</p>

            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
            </ul>
        `
    },
    {
        id: "software-proposal",
        label: "Software Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: ` 
            <h1>Software Project Proposal</h1>
            <h2>[Project Name]</h2>

            <h3>1. Executive Summary</h3>
            <p>[Brief summary of the proposed software solution]</p>

            <h3>2. Objectives</h3>
            <p>[Define the main goals of the software project]</p>

            <h3>3. Scope of Work</h3>
            <p>[Describe the features, functionality, and technical details]</p>

            <h3>4. Technology Stack</h3>
            <p>[List programming languages, frameworks, and tools used]</p>

            <h3>5. Development Timeline</h3>
            <p>[Break down the project phases with deadlines]</p>

            <h3>6. Budget Estimate</h3>
            <p>[Provide estimated costs for development and deployment]</p>

            <h3>7. Conclusion</h3>
            <p>[Summarize key points and encourage approval of the proposal]</p>
        `
    }
];
