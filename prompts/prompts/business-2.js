/* See business-1.js for editing instructions. */

addPrompts("Business", "HR, Hiring & Management", [
{
  title: "Job Description & Job Posting",
  prompt: `ROLE: You are an experienced HR business partner and recruiter who writes postings that attract strong, diverse candidates.

CONTEXT:
- Job title and level: [Job Title and Level]
- Company overview and culture: [Company Overview]
- Reports to / team: [Manager and Team]
- Location and work arrangement: [Location and Arrangement]
- Core responsibilities: [Responsibilities]
- Must-have skills and experience: [Must-Haves]
- Nice-to-have: [Nice-to-Haves]
- Pay range and benefits: [Pay and Benefits]
- What makes this role a great opportunity: [Selling Points]

TASK:
1. Write a complete job description: compelling summary, "what you will do" (6-8 outcome-focused bullets), "what you bring" (separate required from preferred), "what success looks like at 30/60/90 days and 1 year", benefits, and an equal-opportunity statement.
2. Remove unnecessary requirements, gendered or exclusionary language, and jargon. Show a short list of what you changed and why.
3. Write a shorter, punchier version for job boards (under 250 words) and a LinkedIn post version.
4. Suggest 3 alternate job titles that candidates actually search for.
5. List 5 screening questions for the application form.

RULES: Do not invent benefits or compensation. Flag legal requirements (pay transparency laws, ADA wording) I should confirm for my location.`
},
{
  title: "Structured Interview Kit & Scorecard",
  prompt: `ROLE: You are an industrial-organizational psychologist and hiring coach.

CONTEXT:
- Role: [Job Title]
- Level and team: [Level and Team]
- Top 5 competencies or outcomes for success: [Key Competencies]
- Culture and values to assess: [Values]
- Interview stages and interviewers: [Interview Stages]

TASK:
1. Define the competencies with a one-line description and what "great" looks like for each.
2. Write 12 behavioral questions and 6 situational or work-sample questions, mapped to competencies and assigned to specific interview rounds.
3. For each question provide: what a strong answer contains, what a weak answer sounds like, and 2 follow-up probes.
4. Create a 1-5 scoring rubric with behavioral anchors and a scorecard each interviewer completes independently.
5. Provide an opening script for the interviewer and the candidate's closing "questions for us" guidance.
6. List red flags, bias traps to avoid (halo effect, similarity bias, first impressions), and questions that are illegal or risky to ask.
7. Give a debrief meeting agenda and decision framework.

OUTPUT FORMAT: Tables for question-to-competency mapping and the rubric.`
},
{
  title: "Employee Performance Review",
  prompt: `ROLE: You are an experienced people manager and HR coach who writes fair, specific, development-oriented reviews.

CONTEXT:
- Employee and role: [Employee Name and Role]
- Review period: [Review Period]
- Role expectations and goals set for the period: [Goals]
- Accomplishments with evidence: [Accomplishments]
- Areas needing improvement with examples: [Improvement Areas]
- Feedback from peers or customers: [Other Feedback]
- Intended overall rating: [Overall Rating]
- Compensation or promotion context: [Compensation Context]

TASK:
1. Write the review narrative: summary, key achievements with business impact, core strengths, and development areas, each backed by specific examples and dates.
2. Use balanced, behavior-based language, avoiding vague terms (e.g. "attitude"), personality labels, and biased phrasing. Highlight anything in my input that is subjective and suggest how to make it observable.
3. Set 3-5 SMART goals for the next period and a development plan with training, stretch assignments, and mentoring.
4. Create a talking-points outline for the review conversation including how to open, how to deliver difficult feedback, and questions to invite the employee's perspective.
5. Anticipate 5 possible reactions and how to respond.
6. Provide a short version for the HR system.

RULES: Keep feedback consistent with the rating. Flag any legal or fairness risks.`
},
{
  title: "Difficult Conversation Preparation",
  prompt: `ROLE: You are an executive coach trained in crucial conversations and nonviolent communication.

SITUATION:
- Who the conversation is with and our relationship: [Person and Relationship]
- The issue: [Issue]
- Specific examples and impact: [Examples and Impact]
- What I want to achieve: [Desired Outcome]
- What I am worried about: [Concerns]
- Constraints (policy, legal, timing): [Constraints]

TASK:
1. Help me clarify my real goals: for me, for them, and for the relationship.
2. Draft a script: an opening (first 30 seconds), a clear description of the facts and impact without judgment, an invitation for their view, and how to move to solutions.
3. Give 3 example phrasings for the hardest sentence I need to say.
4. Prepare responses for likely reactions: defensiveness, denial, tears, anger, silence, counter-accusations.
5. Provide listening techniques and questions to keep the discussion productive.
6. Plan the close: agreement, next steps, follow-up date.
7. Describe how to document the conversation and when to involve HR or legal.
8. Offer a short mental and physical preparation routine for before the meeting.`
},
{
  title: "Performance Improvement Plan (PIP)",
  prompt: `ROLE: You are an HR leader experienced in fair, defensible performance management.

CONTEXT:
- Employee and role: [Employee and Role]
- Performance gaps with specific dated examples: [Performance Gaps]
- Prior feedback or coaching given: [Prior Feedback]
- Expectations for the role: [Role Expectations]
- Support available (training, tools, mentoring): [Support Available]
- Plan length and check-in schedule: [Timeline]
- Company policy and jurisdiction: [Policy and Location]

TASK:
1. Draft a PIP document: purpose, performance expectations, specific gaps with examples, measurable improvement goals and how each will be measured, timeline with check-in dates, support provided, consequences if goals are not met, and acknowledgment signatures.
2. Make every goal specific, measurable, and achievable within the timeline.
3. Write the talking points for the meeting delivering the PIP, and a script for weekly check-ins.
4. Provide a documentation template for tracking progress.
5. List legal and fairness risks (protected class issues, retaliation, inconsistency with how others were treated) and checks I should do before issuing it.

RULES: Keep language factual and neutral. State that HR and legal counsel should review before use.`
},
{
  title: "Employee Policy Writer",
  prompt: `ROLE: You are an HR policy writer who produces clear, enforceable policies.

CONTEXT:
- Policy topic (remote work, PTO, expense reimbursement, social media, code of conduct, etc.): [Policy Topic]
- Company size and location(s): [Size and Locations]
- Current practice or problem this policy solves: [Current Practice]
- Principles to reflect (flexibility, fairness, security): [Principles]

TASK:
1. Write the policy with: purpose, scope (who it applies to), definitions, the policy statements, procedures (step-by-step), roles and responsibilities, exceptions and approvals, consequences of violations, and review date.
2. Use plain language and short sentences that employees will read.
3. Add a one-page FAQ and a manager guide on applying it consistently.
4. Provide an acknowledgment form.
5. Flag the exact items where local, state, or federal law may require specific language or notice, so I can have counsel check them.`
},
{
  title: "Meeting Agenda & Facilitation Plan",
  prompt: `ROLE: You are a meeting facilitator who believes most meetings should be shorter or an email.

CONTEXT:
- Meeting topic and purpose: [Topic and Purpose]
- Duration: [Duration]
- Attendees and roles: [Attendees]
- Desired outcomes and decisions: [Desired Outcomes]
- Known tensions or sticking points: [Sticking Points]
- Format (in person, video, hybrid): [Format]

TASK:
1. First challenge: should this be a meeting? Suggest what could be handled asynchronously.
2. Write a time-boxed agenda with the owner, purpose, and expected output for each item (information, discussion, or decision).
3. List pre-reading and prep each attendee needs.
4. Provide facilitation techniques: opening, keeping time, handling dominant or quiet voices, parking lot, and decision method (consent, vote, owner decides).
5. Draft the key discussion questions.
6. Create a notes template capturing decisions, action items (owner and due date), and open questions.
7. Write the follow-up email to send within an hour.`
},
{
  title: "New Hire 30-60-90 Day Onboarding Plan",
  prompt: `ROLE: You are an HR onboarding specialist and experienced manager.

CONTEXT:
- Role and team: [Role and Team]
- Start date and work arrangement: [Start Date and Arrangement]
- Key outcomes expected in the first year: [First-Year Outcomes]
- Tools and systems needed: [Tools and Systems]
- Key stakeholders to meet: [Stakeholders]

TASK:
1. Pre-boarding checklist (equipment, accounts, paperwork, welcome message).
2. Day-one and first-week schedule, including a buddy assignment and who they meet.
3. 30-60-90 day plan with learning goals, early wins, and measurable deliverables.
4. Training and shadowing plan and reading list.
5. A manager checklist and a cadence of 1:1s with suggested questions.
6. A new hire checklist and a culture orientation guide.
7. Feedback surveys at day 7, 30, and 90, and signals that the hire is struggling or thriving.`
},
{
  title: "Reorganization / Layoff Communication Kit",
  prompt: `ROLE: You are a senior HR and internal-communications advisor handling sensitive organizational change with empathy and clarity.

SITUATION:
- What is happening (reorganization, layoffs, policy change, leadership change): [Change Description]
- Who is affected and when: [Who and When]
- Reasons we can share: [Reasons]
- Support offered (severance, benefits, outplacement): [Support Offered]
- Legal requirements known (notice, consultation): [Legal Requirements]

TASK: Create a communication kit:
1. Principles: how to be honest, humane, and consistent.
2. A leader announcement for all staff.
3. A script and checklist for manager-to-employee individual conversations, including what not to say.
4. An FAQ for affected employees and one for remaining employees.
5. A message for customers, partners, or investors if relevant.
6. A plan for the day itself (logistics, access, privacy, follow-up support).
7. A plan to re-engage and support the team that remains.

RULES: Avoid euphemisms and blame. Clearly mark every item that needs legal or HR review (WARN Act or equivalent notices, release agreements, discrimination risk).`
}
]);

addPrompts("Business", "Operations & Project Management", [
{
  title: "Project Plan Builder",
  prompt: `ROLE: You are a PMP-certified project manager who prefers practical plans to bureaucracy.

CONTEXT:
- Project name and objective: [Project Name and Objective]
- Business reason / expected benefit: [Business Case]
- Deadline and fixed dates: [Deadline]
- Team and roles: [Team]
- Budget: [Budget]
- Constraints and dependencies: [Constraints]
- Stakeholders: [Stakeholders]

TASK:
1. Write a project charter: objectives, scope (in and out), success criteria, assumptions, and constraints.
2. Create a work breakdown structure with tasks, estimated effort, and owners.
3. Build a timeline with milestones, dependencies, and the critical path. Present it as a table that can be pasted into a spreadsheet.
4. Produce a RACI matrix for the main deliverables.
5. Create a risk register (top 10) with probability, impact, mitigation, and owner.
6. Create a communication plan: audience, message, frequency, channel.
7. Define change control, status reporting format, and the definition of done.
8. Identify the 5 things most likely to cause delay and how to guard against them.`
},
{
  title: "Standard Operating Procedure (SOP) Writer",
  prompt: `ROLE: You are a process documentation specialist who writes SOPs that people actually follow.

CONTEXT:
- Process name: [Process Name]
- Purpose and when it is used: [Purpose]
- How it is done today (rough notes are fine): [Current Process Notes]
- Roles involved: [Roles]
- Tools, systems, and forms: [Tools and Systems]
- Regulatory or quality requirements: [Requirements]

TASK:
1. Write the SOP with: title and version, purpose, scope, definitions, roles and responsibilities, prerequisites, numbered step-by-step procedure (each step starts with a verb and names who does it), decision points with if/then branches, quality checks, records to keep, troubleshooting, escalation, and revision history.
2. Write so a new employee could follow it with no other help.
3. Add a one-page quick-reference checklist.
4. Identify gaps or inconsistencies in my notes and list the questions I should answer to complete the SOP.
5. Suggest a way to train staff and audit compliance, and a review schedule.`
},
{
  title: "Process Improvement & Bottleneck Finder",
  prompt: `ROLE: You are a Lean Six Sigma black belt who helps teams improve without jargon.

CONTEXT:
- Process: [Process Name]
- Current steps, who does them, and how long each takes: [Current Steps]
- Volume and frequency: [Volume]
- Pain points (delays, errors, rework, complaints): [Pain Points]
- Goal (faster, cheaper, fewer errors): [Goal]
- Constraints: [Constraints]

TASK:
1. Map the current process and calculate process time versus waiting time.
2. Identify the 8 types of waste at work (defects, overproduction, waiting, non-utilized talent, transport, inventory, motion, extra processing) with examples from my process.
3. Find the bottleneck and the root causes using a 5 Whys and cause-and-effect view.
4. Recommend improvements, ranked by impact and effort, with a simple impact/effort matrix.
5. Describe the future-state process.
6. Design a pilot with before/after metrics, sample size, and success criteria.
7. Provide a change-management plan to get the team on board and sustain the gains.`
},
{
  title: "Risk Assessment & Mitigation Plan",
  prompt: `ROLE: You are a risk management consultant.

CONTEXT:
- Project or business area: [Project or Area]
- Objectives at risk: [Objectives]
- Environment (industry, regulation, dependencies, technology): [Environment]
- Past incidents or near-misses: [Past Incidents]
- Risk appetite: [Risk Appetite]

TASK:
1. Identify at least 15 risks across strategic, operational, financial, people, technology, legal, reputational, and external categories.
2. For each: description (cause, event, consequence), likelihood (1-5), impact (1-5), score, velocity (how fast it could hit), early-warning indicators, mitigation actions, contingency plan, and owner role.
3. Present a heat-map style table and highlight the top 5.
4. Recommend risk responses (avoid, reduce, transfer, accept) with the cost versus benefit.
5. Design a simple monitoring routine and reporting format.
6. Identify risks that are linked and could cascade.`
},
{
  title: "Vendor Selection & RFP",
  prompt: `ROLE: You are a procurement specialist.

CONTEXT:
- What we need to buy: [Product or Service Needed]
- Business problem it solves: [Business Problem]
- Must-have and nice-to-have requirements: [Requirements]
- Candidates so far: [Candidate Vendors]
- Budget and timeline: [Budget and Timeline]
- Stakeholders involved in the decision: [Stakeholders]
- Integrations or constraints: [Integrations and Constraints]

TASK:
1. Draft an RFP / RFI outline with background, requirements, questions, pricing template, and submission rules.
2. Create a weighted scoring matrix (with suggested weights) covering fit, cost (total cost of ownership), risk, support, security, implementation, and references.
3. Write reference-check questions and demo scripts that force vendors to show real use cases.
4. Provide a due-diligence checklist: financial stability, security and compliance, data ownership, SLAs, and exit terms.
5. Give a contract negotiation checklist (price protections, termination, liability, auto-renewal, service credits) and red flags.
6. Describe how to run a fair evaluation and document the decision.`
},
{
  title: "Meeting Notes to Action Items",
  prompt: `ROLE: You are an executive assistant who turns messy notes into clarity.

INPUT:
Meeting name and date: [Meeting Name and Date]
Attendees: [Attendees]
Raw notes or transcript:
[Paste Notes or Transcript]

TASK:
1. Write a 3-sentence summary of what the meeting was about and what was decided.
2. List decisions made (with who made them and any conditions).
3. Create an action-item table: task, owner, due date, priority, and dependency. Use "TBD" where owner or date was not stated; never guess.
4. List open questions and unresolved disagreements.
5. List risks or issues raised.
6. Note topics to carry over to the next meeting.
7. Draft a concise follow-up email I can send to all attendees, and a one-line Slack/Teams update.

RULES: Do not add information that is not in the notes. Quote exact commitments where ownership is sensitive.`
},
{
  title: "Weekly Status Report",
  prompt: `ROLE: You are a project manager who writes status reports leaders actually read.

INPUT:
- Project / team: [Project / Team]
- Reporting week: [Week]
- Accomplishments: [Accomplishments]
- In progress: [In Progress]
- Blockers and risks: [Blockers and Risks]
- Next week's plan: [Next Week]
- Metrics: [Metrics]
- Budget and schedule status: [Budget and Schedule]

TASK: Produce a one-page report with:
1. Overall status (green / yellow / red) with a one-sentence reason.
2. Progress highlights tied to milestones and outcomes, not activity.
3. Upcoming milestones and dates.
4. Issues and risks with owner, impact, and what help is needed.
5. Decisions needed from leadership, with a recommendation.
6. Key metrics versus targets.
7. A 2-sentence executive summary at the top.
Provide the version in a table-friendly format and a short version for chat.`
},
{
  title: "Business Continuity & Contingency Plan",
  prompt: `ROLE: You are a business continuity planner.

CONTEXT:
- Business and critical functions: [Business and Critical Functions]
- Locations, systems, and key suppliers: [Locations, Systems, Suppliers]
- Scenarios to plan for (system outage, cyberattack, key person loss, supplier failure, disaster, pandemic): [Scenarios]
- Maximum tolerable downtime for each critical function: [Downtime Tolerance]
- Team size: [Team Size]

TASK:
1. Perform a business impact analysis: rank critical functions and define recovery time and data-loss objectives.
2. For each scenario provide: warning signs, first-hour actions, recovery steps, workarounds, and roles.
3. Build a contact tree and an emergency communication plan for employees, customers, and vendors, with message templates.
4. Specify backup and recovery requirements for data, systems, and key documents.
5. Create a one-page emergency checklist and a longer playbook.
6. Define a testing schedule (tabletop exercise, backup restore test) and how to update the plan.`
}
]);

addPrompts("Business", "Legal, Contracts & Compliance", [
{
  title: "Plain-English Contract Review",
  prompt: `ROLE: You are a business-savvy contracts reviewer who explains legal documents to non-lawyers. You are not providing legal advice; you are helping me understand the document and prepare questions for my attorney.

CONTEXT:
- My role in this agreement (buyer, seller, employee, contractor, tenant): [My Role]
- What I want from this deal: [My Goals]
- My biggest worries: [My Concerns]
- Jurisdiction, if known: [Jurisdiction]

CONTRACT TEXT:
[Paste Contract Text]

TASK:
1. Summarize in plain English: who the parties are, what each must do, the money terms, key dates, and the term and renewal.
2. Walk through the clauses that matter most: payment, termination, auto-renewal, liability and indemnification, limitation of liability, warranties, intellectual property, confidentiality, non-compete / exclusivity, dispute resolution and governing law, assignment, and change or amendment.
3. Flag clauses that are one-sided, unusual, ambiguous, or missing, and rate each High / Medium / Low risk for me.
4. Suggest specific alternative wording or negotiation points for each high-risk item.
5. List the questions to ask the other party and the questions to ask my attorney.
6. Give a final "sign / negotiate / walk away" assessment with reasoning.

RULES: Quote the clause you are discussing. If something is outside what you can determine from the text, say so. Remind me that an attorney should review before I sign.`
},
{
  title: "NDA Outline & Key Terms",
  prompt: `ROLE: You are a commercial attorney explaining NDAs to a business owner (general information, not legal advice).

CONTEXT:
- Type: [Mutual / One-way] NDA
- Parties: [Party A] and [Party B]
- Purpose of sharing information: [Purpose]
- Types of confidential information involved: [Information Types]
- Governing law / location: [Jurisdiction]
- Term I want: [Term]

TASK:
1. Explain each standard clause in plain English and why it matters: definition of confidential information, exclusions, permitted use, standard of care, term and survival, return or destruction, compelled disclosure, remedies, non-solicitation (if any), governing law, and signatures.
2. Provide sample clause language I can adapt for each, with options leaning toward the disclosing party and toward the receiving party.
3. Highlight common traps (overbroad definitions, perpetual terms, one-way when I need mutual, missing carve-outs).
4. Provide a checklist for deciding whether I even need an NDA and how to handle the information safely (marking, limiting access, logging).
5. List the points an attorney should confirm for my jurisdiction.`
},
{
  title: "Website Terms & Privacy Policy Starter",
  prompt: `ROLE: You are a technology lawyer who drafts website policies for small businesses (starting-point drafts for attorney review, not legal advice).

CONTEXT:
- Website / app and what it does: [Website / App Description]
- Business entity and location: [Entity and Location]
- Data we collect (names, emails, payment, cookies, analytics, location, children's data): [Data Collected]
- Third-party tools (analytics, ad pixels, payment processors, email platforms): [Third-Party Tools]
- Where our users are located: [User Locations]
- Do we sell products, take payments, or host user content: [Business Model]

TASK:
1. List the laws and rules that may apply (GDPR, CCPA/CPRA, CAN-SPAM, COPPA, state privacy laws, accessibility) and a one-line summary of what each requires of me.
2. Draft a Privacy Policy covering what we collect, why, legal basis, sharing, retention, security, user rights and how to exercise them, cookies, children, international transfers, changes, and contact details.
3. Draft Terms of Service covering acceptable use, accounts, payments and refunds, intellectual property, user content, disclaimers, limitation of liability, termination, governing law, and dispute resolution.
4. Provide a cookie banner approach and a data-request response process.
5. Mark every place that needs customization and every issue that requires attorney review.`
},
{
  title: "Compliance Checklist by Business Type",
  prompt: `ROLE: You are a compliance consultant who helps small businesses understand their obligations.

CONTEXT:
- Business type and industry: [Business Type and Industry]
- Location (country, state, city): [Location]
- Entity type: [Entity Type]
- Number of employees and contractors: [Workforce]
- Whether we sell online, handle personal data, handle money, or serve regulated customers: [Risk Factors]

TASK:
1. Build a compliance calendar organized by area: formation and licenses, taxes (income, sales, payroll, excise), employment law (wage and hour, classification, postings, I-9), health and safety, insurance, data privacy and security, advertising and consumer protection, record retention, and industry-specific regulation.
2. For each item give: what it is, who is responsible, how often, penalty for missing it, and where to find official guidance (name the agency).
3. Rank by risk and cost of non-compliance and identify the 10 things to handle first.
4. Provide a simple tracker template and an annual review routine.
5. List the professionals I should consult (attorney, CPA, insurance broker) and for what.

RULES: Requirements change by location. Tell me what to verify with official sources and avoid stating specific thresholds unless you are sure.`
},
{
  title: "Demand / Collection Letter & Dispute Response",
  prompt: `ROLE: You are a business attorney's assistant drafting professional correspondence (draft for review; not legal advice).

CONTEXT:
- Letter type (payment reminder, demand letter, breach notice, dispute response, cease and desist): [Letter Type]
- Recipient: [Recipient]
- Facts, dates, amounts, invoice or contract numbers: [Facts]
- What was agreed (contract terms, delivery, payment terms): [Agreement Terms]
- Prior communications: [Prior Communications]
- Outcome I want and deadline: [Desired Outcome and Deadline]

TASK:
1. Write a firm, factual, professional letter that states the facts chronologically, references the agreement, states the demand clearly, sets a reasonable deadline, and explains next steps without making threats you can't carry out.
2. Provide a softer first-reminder version and a final-notice version.
3. List the documents to attach and how to deliver the letter to create a record.
4. Identify risks: statute of limitations, interest and late-fee enforceability, collection law rules, and defamation risk.
5. Suggest alternatives to escalation (payment plan, mediation, small claims) with pros and cons.`
}
]);

addPrompts("Business", "Product, Tech & Data", [
{
  title: "Product Requirements Document (PRD)",
  prompt: `ROLE: You are a senior product manager.

CONTEXT:
- Feature or product: [Feature / Product]
- Problem and who has it: [Problem and Users]
- Evidence of the problem (research, data, requests): [Evidence]
- Goals and success metrics: [Goals and Metrics]
- Constraints (technology, legal, timing, budget): [Constraints]
- Related existing features: [Related Features]

TASK: Write a PRD with:
1. Overview, background, and problem statement.
2. Goals and non-goals, with measurable success metrics and target values.
3. User personas and key scenarios.
4. User stories with acceptance criteria in Given / When / Then form.
5. Functional requirements (prioritized as must / should / could) and non-functional requirements (performance, security, accessibility, reliability).
6. Description of the user flow and key screens.
7. Edge cases, error states, and permissions.
8. Analytics events to track and the dashboard to review.
9. Rollout plan (beta, phased release, feature flags), support and documentation needs.
10. Risks, dependencies, and open questions with owners.`
},
{
  title: "Analyze a Dataset",
  prompt: `ROLE: You are a senior data analyst who explains findings to business leaders.

CONTEXT:
- What the data is and where it came from: [Data Description]
- Business question or decision it should inform: [Business Question]
- Columns and what they mean: [Column Descriptions]
- Time period and known data quality issues: [Period and Quality Issues]

DATA:
[Paste Data]

TASK:
1. Describe the dataset and check data quality: missing values, duplicates, outliers, inconsistent labels, impossible values.
2. Provide summary statistics and the most important trends, comparisons, and segments.
3. Identify the top 5 insights ranked by business importance, each with the supporting numbers and a plain-English explanation.
4. Identify anomalies and possible explanations to investigate.
5. Recommend charts that best show each insight (type, axes, and what to highlight).
6. Answer the business question directly with a recommendation and confidence level.
7. List the follow-up questions and extra data that would improve the analysis.
8. Provide the Excel formulas or steps I would use to reproduce the key figures.

RULES: Show your calculations. Do not claim causation from correlation. Be explicit about the limits of this dataset.`
},
{
  title: "Excel Formula & Spreadsheet Helper",
  prompt: `ROLE: You are an Excel expert who teaches while helping.

CONTEXT:
- Excel version (or Google Sheets): [Excel Version]
- What I'm trying to do, in plain words: [Goal]
- My sheet layout (column letters, headers, sample rows): [Sheet Layout]
- Example of the input and the output I expect: [Input and Expected Output]
- What I've tried and what went wrong: [What I Tried]

TASK:
1. Give the exact formula (or steps) I can paste, using my actual column letters.
2. Explain it piece by piece in plain English.
3. Show a worked example with my sample data and the result.
4. Offer a more robust or modern alternative (XLOOKUP, FILTER, SUMIFS, LET, dynamic arrays, Power Query, PivotTable) and say when to use each.
5. List common errors (#N/A, #REF!, #VALUE!, text-numbers, hidden spaces) and how to prevent them.
6. If this task would be better done another way (PivotTable, table structure, data validation), tell me.
7. Suggest how to make the sheet easier to maintain (named ranges, tables, documentation).`
},
{
  title: "User Stories & Acceptance Criteria",
  prompt: `ROLE: You are an agile business analyst.

CONTEXT:
- Feature or idea: [Feature or Idea]
- Users and their goals: [Users and Goals]
- Business rules and constraints: [Business Rules]
- Systems involved: [Systems]

TASK:
1. Break the idea into epics and user stories using "As a [user], I want [action], so that [benefit]".
2. For each story write Given / When / Then acceptance criteria, including negative and edge-case scenarios.
3. Identify non-functional requirements (performance, security, accessibility, audit) and data requirements.
4. Prioritize with MoSCoW and suggest a minimum viable release and a following release.
5. List assumptions, dependencies, and questions for stakeholders.
6. Estimate relative size (S / M / L) with the reasoning, and suggest how to slice any story that is too big.`
},
{
  title: "Explain a Technical Concept & Vendor Questions",
  prompt: `ROLE: You are a gifted technical translator who explains complex topics to business people.

REQUEST:
- Concept or technology: [Technical Concept]
- My background: [My Background]
- Why I need to understand it (decision, meeting, vendor discussion): [Reason]

TASK:
1. Explain it in one sentence, then in one paragraph, then with a real-world analogy.
2. Give a concrete example from [Industry or Everyday Life].
3. Explain why it matters to a business: benefits, costs, and risks.
4. Clear up the 5 most common misconceptions.
5. Provide a short glossary of related terms.
6. List 10 smart questions to ask a vendor or developer about it, and what good and bad answers sound like.
7. Suggest the 3 best resources for learning more at my level.`
},
{
  title: "Software Selection Helper",
  prompt: `ROLE: You are an independent technology consultant with no vendor ties.

CONTEXT:
- Type of software (CRM, accounting, project management, HR, e-commerce, etc.): [Software Type]
- Business type and size: [Business Type and Size]
- Top problems to solve: [Problems]
- Must-have features: [Must-Haves]
- Systems it must integrate with: [Integrations]
- Budget (per user or total): [Budget]
- Users and technical skill level: [Users and Skill]

TASK:
1. Define selection criteria and weight them.
2. Compare 4-6 leading options in a table (best for, pricing model, strengths, weaknesses, integrations, ease of use, support).
3. Recommend a top pick and runner-up with reasons, and describe when each would be wrong.
4. Provide a demo script and 15 questions to ask vendors, including hidden-cost and data-export questions.
5. Describe an implementation plan: data migration, setup, training, rollout, and the first 90 days.
6. Identify common pitfalls and total cost of ownership over 3 years.

RULES: Pricing and features change. Tell me exactly what to verify on each vendor's website before deciding.`
}
]);

addPrompts("Business", "Communication & Presentations", [
{
  title: "Professional Email Writer",
  prompt: `ROLE: You are a skilled business writer who writes concise, clear, and courteous emails.

CONTEXT:
- Recipient and relationship: [Recipient and Relationship]
- Purpose of the email: [Purpose]
- Key points to include: [Key Points]
- Tone (friendly, formal, firm, apologetic, urgent): [Tone]
- Desired action and deadline: [Desired Action and Deadline]
- Sensitive points to handle carefully: [Sensitivities]

TASK:
1. Write 3 subject line options.
2. Write the email with the main point and the ask in the first two sentences, short paragraphs, and a specific next step.
3. Provide a short version (under 80 words) and a fuller version.
4. Offer a version for the same message in each of the following tones if I request: warmer, more direct.
5. List anything I may have missed that the recipient will probably ask.

RULES: No filler phrases ("I hope this email finds you well" unless I ask). Match the formality level to the relationship.`
},
{
  title: "Rewrite & Polish My Writing",
  prompt: `ROLE: You are an editor who preserves the author's voice while improving clarity and impact.

GOAL: Make the text [Improvement Goal, e.g. clearer or more persuasive] for [Audience].

TEXT:
[Paste Text]

TASK:
1. Provide the revised version, keeping my meaning, facts, and voice. Do not add information.
2. List the 7 most important changes you made and why, so I learn the pattern.
3. Point out any ambiguity, unsupported claims, or logic gaps you noticed and ask me about them rather than fixing silently.
4. Provide a second version that is 30% shorter.
5. Give a quick readability assessment and 3 habits in my writing to work on.`
},
{
  title: "Presentation Outline & Speaker Notes",
  prompt: `ROLE: You are a presentation coach who has trained executives and TED-style speakers.

CONTEXT:
- Topic: [Topic]
- Audience (their knowledge, concerns, power to decide): [Audience]
- Length and format: [Length and Format]
- The one thing the audience should remember: [Key Message]
- What I want them to do afterward: [Desired Action]
- Data or stories I have: [Material Available]

TASK:
1. Recommend a narrative structure (problem-solution, story arc, situation-complication-resolution) and why.
2. Provide a slide-by-slide outline with a headline sentence for each slide (the "so what"), 3 supporting points, and a suggested visual or chart.
3. Write speaker notes in a natural spoken style, with timing for each slide.
4. Write a compelling opening (first 30 seconds) and a memorable close with a clear call to action.
5. Prepare 10 likely questions with concise answers, including 3 hostile ones.
6. Provide delivery tips for this audience and room, and a backup plan if time gets cut in half.`
},
{
  title: "Executive Memo & One-Page Brief",
  prompt: `ROLE: You are a chief of staff who writes memos busy executives actually read.

CONTEXT:
- From and to: [Sender and Audience]
- Topic: [Topic]
- Decision or action requested: [Ask]
- Background and facts: [Facts]
- Options considered and tradeoffs: [Options]
- Deadline: [Deadline]

TASK: Write a one-page memo using this structure: Purpose, Bottom Line Up Front (the recommendation), Background, Analysis of options with pros and cons and key numbers, Risks, Recommendation, Next Steps with owners and dates. Lead with the conclusion, use plain language, and avoid jargon and passive voice. Then add a 3-bullet summary suitable for pasting in an email, and list 5 questions the reader might ask.`
},
{
  title: "LinkedIn Thought-Leadership Post",
  prompt: `ROLE: You are a LinkedIn ghostwriter whose posts earn genuine engagement without cheap tricks.

CONTEXT:
- Topic or experience: [Topic or Experience]
- My role and credibility: [My Role and Credibility]
- Audience: [Audience]
- Core message / lesson: [Core Message]
- Tone: [Tone]
- Call to action or discussion question: [Call to Action]

TASK:
1. Write 3 hook lines (the first line before "see more") using different angles.
2. Write the post in three lengths: short (under 100 words), medium (150-200), and long (250-300), using short paragraphs, one concrete story or example, and one useful takeaway.
3. End with a natural question that invites comments.
4. Suggest at most 3 hashtags and the best time to post.
5. Offer a plan to reply to the first hour of comments.

RULES: No fabricated stories or stats. No "I'm humbled to announce". Keep it specific and human.`
},
{
  title: "Speech, Toast or Remarks",
  prompt: `ROLE: You are a professional speechwriter.

CONTEXT:
- Occasion: [Occasion]
- Speaker (me) and relationship to the audience or honoree: [Speaker and Relationship]
- Honoree or subject details, stories, qualities: [Stories and Details]
- Audience: [Audience]
- Length: [Length] minutes
- Tone (warm, funny, inspiring, formal): [Tone]
- Things to avoid: [Things to Avoid]

TASK:
1. Propose a theme and structure.
2. Write the full speech with a strong opening, 2-3 specific stories, tasteful humor where appropriate, a turning point, and a memorable close.
3. Mark delivery notes: pauses, emphasis, and where to look up.
4. Give me an alternate opening and closing.
5. Provide a one-card cue sheet.
6. Give tips for calming nerves and for practicing.`
},
{
  title: "Negotiation Preparation",
  prompt: `ROLE: You are a negotiation advisor trained in the Harvard Negotiation Project approach.

CONTEXT:
- What is being negotiated: [Subject]
- Counterparty and what I know of them: [Counterparty]
- My goals, in priority order: [My Goals]
- My BATNA (best alternative if no deal): [My BATNA]
- My walk-away point: [Walk-Away Point]
- Their likely interests and constraints: [Their Interests]
- Timeline and leverage: [Timeline and Leverage]

TASK:
1. Analyze interests versus positions for both sides, and estimate their BATNA.
2. Define my target, expected, and reservation outcomes.
3. Design an opening move, anchor, and concession plan (what to give, in what order, and what to ask in return).
4. Identify creative trades that expand the pie.
5. Prepare key arguments and objective criteria that support my position.
6. Anticipate their tactics (anchoring, deadlines, good cop / bad cop, nibbling) and responses.
7. Write the first five minutes of the conversation as a script and 10 questions to ask.
8. Provide a closing checklist to confirm all terms and put them in writing.`
}
]);
