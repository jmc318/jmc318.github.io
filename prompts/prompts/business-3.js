/* See business-1.js for editing instructions. */

addPrompts("Business", "Startups & Fundraising", [
{
  title: "Investor Pitch Deck Outline & Script",
  prompt: `ROLE: You are a venture advisor who has helped founders raise from angels, seed funds, and Series A investors.

CONTEXT:
- Company and one-line description: [Company Description]
- Stage and traction (revenue, users, growth rate, pilots): [Stage and Traction]
- Problem and customer: [Problem and Customer]
- Solution and why it is hard to copy: [Solution and Moat]
- Market size evidence: [Market Evidence]
- Team backgrounds: [Team]
- Raise amount, use of funds, and timeline: [Raise and Use of Funds]
- Investor type I am pitching: [Investor Type]

TASK:
1. Recommend a 12-15 slide structure (problem, solution, product, traction, market, business model, go-to-market, competition, team, financials, ask, vision) and explain what each slide must prove.
2. For each slide write the headline claim, 3 supporting points, the best chart or visual, and the exact script I would say in 30-45 seconds.
3. Draft a one-paragraph company summary and a 2-minute verbal pitch.
4. Identify the weakest parts of my story and how investors are likely to challenge them, then rewrite how to address each.
5. Provide the 20 hardest investor questions with strong answers.
6. List data-room documents to prepare and a follow-up email after the pitch.

RULES: Do not inflate numbers. Mark where my evidence is thin so I can strengthen it before pitching.`
},
{
  title: "Startup Financial Model & Unit Economics",
  prompt: `ROLE: You are a startup CFO.

CONTEXT:
- Business model (SaaS, marketplace, e-commerce, services, hardware): [Business Model]
- Pricing and customer segments: [Pricing and Segments]
- Current metrics (customers, MRR or sales, churn, CAC, gross margin): [Current Metrics]
- Hiring plan and major costs: [Hiring and Costs]
- Cash on hand and funding plans: [Cash and Funding]
- Forecast horizon: [Horizon]

TASK:
1. Calculate or estimate unit economics: CAC, LTV, LTV:CAC ratio, payback period, contribution margin, and gross margin. Show formulas and the numbers I gave you.
2. Design the 3-statement model structure and key drivers, with a monthly revenue build tied to customer acquisition and churn.
3. Create base, upside, and downside scenarios and compute runway under each.
4. Identify the 3-5 levers that most improve unit economics and quantify their impact.
5. Define the metrics investors expect for this model and benchmark ranges (flag as general guidance to verify).
6. Describe the monthly board or investor reporting package.
7. Warn me about common modeling mistakes (hockey-stick assumptions, ignoring churn, free cash timing).`
},
{
  title: "Investor Update Email",
  prompt: `ROLE: You are a founder-coach who writes concise, honest investor updates.

CONTEXT:
- Company: [Company]
- Period: [Period]
- Headline metrics and changes: [Metrics]
- Wins: [Wins]
- Challenges and misses: [Challenges]
- Cash and runway: [Cash and Runway]
- Hires, product, partnerships: [Other News]
- Where I need help (introductions, advice, hiring): [Asks]

TASK:
1. Write the update with a subject line, a 2-sentence TL;DR, metrics table, wins, challenges (with what we are doing about them), cash and runway, priorities for next period, and specific asks.
2. Keep under 400 words, scannable, and honest about problems.
3. Suggest what to leave out and what supporting data to attach.
4. Provide a template for future monthly updates.`
},
{
  title: "Founder Equity & Cap Table Basics",
  prompt: `ROLE: You are a startup advisor explaining equity concepts in plain English (general education, not legal or tax advice).

CONTEXT:
- Number of founders and roles: [Founders and Roles]
- Contributions (time, money, IP, relationships): [Contributions]
- Stage and expected funding: [Stage and Funding]
- Employees or advisors who will get equity: [Equity Recipients]

TASK:
1. Explain how to think about splitting founder equity fairly, with 3 frameworks and the pros and cons of each.
2. Explain vesting, cliffs, acceleration, and why they protect everyone, with a sample schedule.
3. Explain an option pool, dilution, SAFEs, convertible notes, and priced rounds with a small worked cap-table example showing ownership before and after a seed round.
4. Suggest equity ranges commonly given to early employees and advisors (flag as general guidance that varies).
5. Provide a list of questions to discuss as co-founders and documents to put in place.
6. Specify where I must involve a startup attorney and tax advisor (83(b) election timing, entity structure).`
},
{
  title: "Customer Discovery Interview Guide",
  prompt: `ROLE: You are a lean-startup coach who trains founders to avoid false positives from friendly feedback.

CONTEXT:
- Idea / product: [Idea]
- Target customer: [Target Customer]
- Biggest assumptions I need to test: [Assumptions]
- Where I can find people to interview: [Interview Sources]

TASK:
1. Write a screener to find the right interviewees.
2. Write an interview script of 12-15 questions focused on past behavior, current workarounds, cost of the problem, and willingness to pay, with no leading or pitch-style questions.
3. Provide follow-up probes and tactics for pushing past polite answers.
4. List the warning signs of false validation ("that sounds cool") and real signals (time, money, or reputation committed).
5. Create a note-taking template and a method for synthesizing patterns across 10-20 interviews.
6. Define the decision rule: what results mean "build", "pivot", or "stop".`
},
{
  title: "Grant / SBA Loan Application Narrative",
  prompt: `ROLE: You are a grants and small-business financing consultant.

CONTEXT:
- Program or lender and what they fund: [Program or Lender]
- Organization / business: [Organization]
- Project or use of funds: [Project]
- Amount requested: [Amount]
- Impact and outcomes expected: [Outcomes]
- Evidence and track record: [Evidence]
- Budget summary: [Budget]
- Application questions and word limits: [Application Questions]

TASK:
1. Analyze what the funder likely scores and how to align my story to it.
2. Draft responses to each question within the word limits, leading with outcomes, using specific evidence and numbers, and avoiding jargon.
3. Create a logic model (inputs, activities, outputs, outcomes) and an evaluation plan with measurable indicators.
4. Draft a budget justification narrative.
5. Provide a checklist of required attachments and common reasons applications are rejected.
6. Suggest a timeline working back from the deadline.

RULES: Use only facts I provide; use placeholders for missing data.`
}
]);

addPrompts("Business", "E-Commerce & Retail", [
{
  title: "Product Listing Optimization",
  prompt: `ROLE: You are an e-commerce conversion and marketplace SEO specialist.

CONTEXT:
- Product: [Product]
- Marketplace or store (Amazon, Etsy, Shopify, eBay): [Marketplace]
- Target customer and use cases: [Customer and Use Cases]
- Features, materials, dimensions, certifications: [Product Details]
- Competitor listings and price range: [Competitors]
- Main keywords: [Keywords]
- Policy constraints I know of: [Policy Constraints]

TASK:
1. Write 5 title options that follow the marketplace's best practices and character limits.
2. Write 5 benefit-led bullet points, a long description, and backend search terms.
3. Suggest the 7-9 image slots (main, lifestyle, infographic, size comparison, packaging) with what each should show.
4. Draft an A+ / enhanced-content outline.
5. Write answers to 8 likely customer questions.
6. Suggest a pricing and promotion approach and a review-generation plan that complies with marketplace rules.

RULES: No prohibited claims (medical, "best", guaranteed results). Verify current marketplace rules before publishing.`
},
{
  title: "Online Store Launch Plan",
  prompt: `ROLE: You are an experienced e-commerce founder and consultant.

CONTEXT:
- Product(s) and sourcing: [Products and Sourcing]
- Target customer: [Target Customer]
- Platform: [Platform]
- Launch date and budget: [Launch Date and Budget]
- Existing audience or channels: [Existing Audience]

TASK: Create a 90-day launch plan:
1. Pre-launch (weeks -8 to 0): brand, store setup, product pages, policies, shipping and returns, payments, taxes, legal pages, analytics, email capture, and testing checklist.
2. Launch (weeks 0 to 4): offer, channels, content, outreach, paid tests, launch email sequence.
3. Growth (weeks 4 to 12): conversion improvements, retention flows, reviews, and referral.
4. Budget allocation and target metrics (traffic, conversion rate, AOV, CAC, repeat rate) with assumptions flagged.
5. A weekly task list and risks (inventory, fulfillment, chargebacks, ad account suspension).
6. A KPI dashboard layout.`
},
{
  title: "Inventory & Purchasing Plan",
  prompt: `ROLE: You are a supply-planning analyst for small retailers.

CONTEXT:
- Products, lead times, and minimum order quantities: [Products and Lead Times]
- Sales history or forecast: [Sales History]
- Seasonality: [Seasonality]
- Cash available for inventory: [Cash Available]
- Storage limits: [Storage Limits]
- Service level target: [Service Level]

TASK:
1. Classify items using ABC analysis and explain the approach.
2. Calculate reorder points, safety stock, and order quantities with formulas and example numbers using my data.
3. Build a simple purchasing calendar and cash plan for the next 6 months.
4. Identify slow movers and recommend actions (markdown, bundle, return to vendor).
5. Recommend metrics: sell-through, turns, days of inventory, stockout rate, GMROI.
6. Provide a spreadsheet layout I can build and reorder checklists.`
},
{
  title: "Retail Promotion & Holiday Campaign",
  prompt: `ROLE: You are a retail marketing director.

CONTEXT:
- Business type and product range: [Business and Products]
- Event or season: [Event or Season]
- Goal and margin guardrails: [Goal and Margins]
- Customer list size and channels: [Customer List and Channels]
- Budget: [Budget]
- Past promotion results: [Past Results]

TASK:
1. Design 3 promotion concepts (bundle, tiered discount, gift with purchase, limited drop, loyalty bonus) and show projected margin impact for each with formulas.
2. Recommend one and build a 6-week plan: teaser, launch, mid-campaign reminders, last-chance, and post-campaign.
3. Write sample copy for email, SMS, social, in-store signage, and homepage banner.
4. Provide inventory, staffing, and fulfillment readiness checklists.
5. Define success metrics and a post-mortem template.`
},
{
  title: "Returns, Reviews & Customer Policies",
  prompt: `ROLE: You are an e-commerce operations consultant.

CONTEXT:
- Business and products: [Business and Products]
- Current returns, shipping, and warranty policies: [Current Policies]
- Return rate and top reasons: [Return Data]
- Review ratings and common complaints: [Review Themes]

TASK:
1. Evaluate my policies versus customer expectations and cost, and recommend improvements.
2. Draft clear customer-facing policy pages (returns, shipping, warranty) in plain language.
3. Create response templates for negative reviews, refund requests, damaged items, and lost packages.
4. Recommend operational fixes that reduce the top return reasons.
5. Provide a compliant review-request flow and timing.
6. List the metrics to monitor and a quarterly review routine.`
}
]);

addPrompts("Business", "Consulting & Freelance", [
{
  title: "Consulting Service Offer & Pricing",
  prompt: `ROLE: You are a business coach for independent consultants and freelancers.

CONTEXT:
- My expertise and track record: [Expertise and Track Record]
- Ideal client and the problem I solve: [Ideal Client and Problem]
- Current rates and how I charge: [Current Pricing]
- Income target and available hours: [Income Target and Hours]
- Competitors or alternatives clients use: [Alternatives]

TASK:
1. Sharpen my niche and write a positioning statement.
2. Package my work into 3 productized offers (diagnostic, project, retainer) with scope, deliverables, timeline, and outcome.
3. Calculate my minimum hourly rate and value-based pricing ranges, including taxes, overhead, non-billable time, and utilization.
4. Show 3 pricing options for each offer and when to use each.
5. Write a one-page service description and a short website "work with me" section.
6. Provide scripts for discussing price and handling "can you do it cheaper?".`
},
{
  title: "Statement of Work & Scope Control",
  prompt: `ROLE: You are an independent consultant with a track record of avoiding scope creep.

CONTEXT:
- Client and project: [Client and Project]
- Objectives and deliverables: [Objectives and Deliverables]
- Timeline, milestones, and client responsibilities: [Timeline and Responsibilities]
- Fees and payment terms: [Fees and Terms]
- Known risks or ambiguities: [Risks]

TASK:
1. Draft a Statement of Work: background, objectives, scope, out-of-scope items, deliverables with acceptance criteria, schedule, roles, assumptions, fees, invoicing, change-order process, confidentiality, IP ownership, termination.
2. Highlight 8 places projects typically drift and the clause or practice that prevents each.
3. Write an email for when a client asks for extra work, in friendly and firm versions.
4. Provide a kickoff checklist and weekly status template.
5. Remind me to have an attorney review the final agreement.`
},
{
  title: "Client Acquisition & Follow-Up System",
  prompt: `ROLE: You are a marketing and sales advisor for service businesses.

CONTEXT:
- My services: [Services]
- Ideal clients: [Ideal Clients]
- Current lead sources and results: [Lead Sources]
- Weekly hours available for business development: [Hours for BD]
- Network and credentials: [Network and Credentials]

TASK:
1. Design a 90-day plan using 3 channels at most (referrals, LinkedIn, speaking, partnerships, content, cold outreach) with weekly routines.
2. Write 5 outreach messages (warm reconnect, referral ask, partner proposal, cold, post-meeting follow-up).
3. Create a simple pipeline tracker with stages and conversion targets.
4. Draft a case-study template that sells without exaggeration.
5. Write a referral program or ask script.
6. Provide metrics and a Friday 20-minute review checklist.`
},
{
  title: "Freelance Contract Checklist & Invoicing",
  prompt: `ROLE: You are an experienced freelancer sharing hard-won lessons (not legal advice).

CONTEXT:
- Type of work and clients: [Type of Work and Clients]
- Location: [Location]
- Typical project size: [Typical Project Size]
- Past payment or scope problems: [Past Problems]

TASK:
1. List the clauses my contract should contain and why: scope, payment schedule and deposits, late fees, kill fee, revisions, IP transfer on payment, confidentiality, non-solicit, liability cap, termination, and dispute resolution.
2. Provide sample wording for each in plain English that an attorney can refine.
3. Draft an invoice template and a payment reminder sequence (before due, on due date, 7, 14, and 30 days late).
4. Explain how to handle taxes (quarterly estimates, deductions, business structure) at a general level and what to confirm with a CPA.
5. Provide red flags to spot in a prospective client.`
}
]);

addPrompts("Business", "Executive Leadership & Board", [
{
  title: "Board Meeting Package & Presentation",
  prompt: `ROLE: You are a CEO's chief of staff and former board secretary.

CONTEXT:
- Company and stage: [Company and Stage]
- Board composition and what each member cares about: [Board Members]
- Meeting date and length: [Date and Length]
- Key topics (results, strategy, risks, approvals): [Key Topics]
- Decisions the board must make: [Decisions Needed]
- Sensitive issues: [Sensitive Issues]

TASK:
1. Build the agenda with time allocations, with strategic discussion prioritized over reporting.
2. Draft the CEO letter (1 page): performance, priorities, concerns, and asks.
3. Outline the board deck and the financial and KPI dashboards with the exact charts to include.
4. Write resolution language drafts for each decision (flag for counsel).
5. Predict the questions each board member is likely to ask and prepare answers.
6. Provide a pre-read strategy and a plan to handle contentious items with pre-wiring conversations.
7. Create a minutes template.`
},
{
  title: "Leadership Development Plan",
  prompt: `ROLE: You are an executive coach.

CONTEXT:
- My role and level: [My Role and Level]
- My strengths and feedback received: [Strengths and Feedback]
- Development areas: [Development Areas]
- Career goals: [Career Goals]
- Time available: [Time Available]

TASK:
1. Diagnose the 3 leadership skills that would most increase my impact.
2. Create a 6-month plan: specific behaviors to practice each week, experiments, books and courses, mentors to seek, and stretch assignments.
3. Provide self-assessment questions and 360-feedback questions to ask colleagues.
4. Write scripts for practicing the toughest leadership moments (delegation, feedback, saying no, managing up).
5. Define measurable indicators of progress and a monthly reflection template.`
},
{
  title: "Delegation & Time Leverage Audit",
  prompt: `ROLE: You are an executive productivity advisor.

CONTEXT:
- My role: [My Role]
- A typical week's tasks and hours: [Task List and Hours]
- My team and their strengths: [Team]
- Tasks only I can do: [Tasks Only I Can Do]

TASK:
1. Categorize each task: eliminate, automate, delegate, or keep, and estimate hours reclaimed.
2. Rank delegation candidates and for each write a delegation brief: outcome, quality standard, decision authority, deadline, check-in points, and resources.
3. Identify what I am doing out of habit versus value.
4. Design my ideal week with focus blocks and meeting rules.
5. Provide a script for delegating without micromanaging and for handling reverse delegation.`
},
{
  title: "Strategy Offsite Design",
  prompt: `ROLE: You are a facilitator who designs effective leadership offsites.

CONTEXT:
- Company and team size: [Company and Team Size]
- Objectives of the offsite: [Objectives]
- Participants and dynamics: [Participants]
- Duration and budget: [Duration and Budget]
- Hot topics and tensions: [Topics and Tensions]

TASK:
1. Define outcomes and a decision-making approach.
2. Build a detailed agenda with exercises (pre-mortem, strengths and weaknesses mapping, priority voting, scenario planning), timings, and facilitation instructions.
3. Provide pre-work and the pre-read pack.
4. Prepare discussion questions for the hardest conversations.
5. Create a post-offsite action plan, accountability system, and a 30-60-90 follow-up cadence.
6. Include logistics and a participant feedback survey.`
},
{
  title: "Crisis Communication Plan",
  prompt: `ROLE: You are a crisis communications expert.

SITUATION:
- Type of crisis (product failure, data breach, executive misconduct, safety, social media backlash): [Crisis Type]
- Known facts and unknowns: [Facts and Unknowns]
- Stakeholders affected: [Stakeholders]
- Legal and regulatory constraints: [Legal Constraints]
- Reputation and brand context: [Brand Context]

TASK:
1. Provide the first-hour, first-day, and first-week action plan with roles.
2. Draft the holding statement and the full public statement, using principles: acknowledge, take responsibility where appropriate, explain what is being done, and how people will be updated.
3. Draft messages for employees, customers, regulators, investors, and the media, plus a Q&A with hard questions.
4. Provide social media monitoring and response rules.
5. Plan for the aftermath: rebuilding trust and learning review.
6. List the points legal counsel must approve before release.`
}
]);

addPrompts("Business", "Customer Support Operations", [
{
  title: "Support Macro & Template Library",
  prompt: `ROLE: You are a head of customer support who values empathy and efficiency.

CONTEXT:
- Business and product: [Business and Product]
- Support channels: [Channels]
- Top 15 reasons customers contact us: [Top Contact Reasons]
- Brand voice: [Brand Voice]
- Policies (refunds, shipping, warranty, security): [Policies]

TASK:
1. Write template responses for each contact reason with: greeting, empathy line (where appropriate), the answer or steps, what happens next, and sign-off, with variables for personalization.
2. Provide escalation templates and "needs more info" templates.
3. Write responses for angry customers, VIP customers, and for issues we cannot fix.
4. Create guidelines for when to use templates and when to personalize.
5. Include a tagging system for reporting and a quarterly review process.`
},
{
  title: "Support Knowledge Base Article",
  prompt: `ROLE: You are a technical writer for a help center.

CONTEXT:
- Product and audience skill level: [Product and Audience]
- Topic / problem the article solves: [Topic]
- Steps and facts (rough is fine): [Rough Steps]
- Common mistakes and variations: [Common Mistakes]

TASK:
1. Write the article with a clear title using the customer's words, a one-sentence summary, prerequisites, numbered steps with expected results, screenshot placement notes, troubleshooting, and related articles.
2. Make it scannable with plain language and active voice.
3. Suggest search keywords and synonyms.
4. Provide an internal version for agents with additional diagnostic questions.
5. List what to measure to know whether the article works (deflection, ratings).`
},
{
  title: "Support Quality Review & Coaching",
  prompt: `ROLE: You are a support team lead running quality assurance.

INPUT:
Support conversation to review:
[Paste Conversation]
Our quality standards: [Quality Standards]

TASK:
1. Score the conversation on accuracy, empathy, clarity, tone, ownership, process compliance, and efficiency using a 1-5 rubric with specific evidence.
2. Identify what the agent did well and what to improve.
3. Rewrite the weakest responses to show a better version.
4. Provide a coaching conversation outline with questions that help the agent self-discover improvements.
5. Suggest process or knowledge base fixes that would prevent the issue.`
},
{
  title: "Support Metrics & Staffing Model",
  prompt: `ROLE: You are a support operations analyst.

CONTEXT:
- Ticket volume by channel and hour: [Ticket Volume]
- Current team size, hours, and average handling time: [Team and Handle Time]
- Service level goals: [Service Level Goals]
- Customer satisfaction and backlog: [CSAT and Backlog]

TASK:
1. Define the core metrics (first response time, resolution time, CSAT, first-contact resolution, backlog age, reopen rate, contact rate) and how to calculate each.
2. Calculate required staffing using a basic workload model, with the formula and assumptions.
3. Recommend scheduling and coverage patterns.
4. Identify opportunities to reduce volume (self-service, product fixes, proactive notices) and quantify potential savings.
5. Design a weekly dashboard and monthly review agenda.`
}
]);

addPrompts("Business", "Supply Chain, Purchasing & Manufacturing", [
{
  title: "Supplier Negotiation Plan",
  prompt: `ROLE: You are a strategic sourcing manager.

CONTEXT:
- Item or service and annual spend: [Item and Spend]
- Current supplier and relationship history: [Supplier History]
- Alternatives and switching costs: [Alternatives]
- Our leverage and their leverage: [Leverage]
- Goals (price, terms, quality, supply security): [Goals]

TASK:
1. Perform a spend and market analysis and a should-cost view of the price.
2. Define targets, walk-away, and a BATNA.
3. Create a negotiation agenda with the trade-offs I can offer (volume, term, payment speed, forecasting) in exchange for value.
4. Write email and meeting scripts, including how to open and how to respond to price-increase announcements.
5. Provide a contract checklist (price adjustment clauses, service levels, penalties, termination, quality, force majeure).
6. Add a supplier scorecard for ongoing management.`
},
{
  title: "Supply Chain Risk Review",
  prompt: `ROLE: You are a supply chain risk analyst.

CONTEXT:
- Products and critical components: [Products and Components]
- Supplier locations and concentration: [Supplier Locations]
- Lead times and inventory buffers: [Lead Times and Buffers]
- Transportation modes: [Transportation]
- Recent disruptions: [Recent Disruptions]

TASK:
1. Map the supply chain and find single points of failure.
2. Assess risks (supplier failure, geopolitical, logistics, quality, natural disaster, cyber, price) by likelihood and impact.
3. Recommend mitigation: dual sourcing, safety stock, nearshoring, contracts, insurance, and monitoring, with cost-benefit.
4. Create an early-warning dashboard and a response playbook.
5. Prioritize actions for 30, 90, and 365 days.`
},
{
  title: "Quality Problem Root-Cause Analysis (8D)",
  prompt: `ROLE: You are a quality engineer facilitating an 8D investigation.

PROBLEM:
- Description of defect or failure: [Problem Description]
- When and where it occurs, frequency, and quantity affected: [Occurrence Details]
- Customers affected: [Customers Affected]
- Data collected so far: [Data]
- Process involved: [Process]

TASK: Walk through 8D: team formation, problem statement (5W2H), containment actions, root cause analysis (fishbone and 5 Whys, differentiating cause of occurrence versus cause of escape), corrective action selection and verification, preventive actions, and closure. Provide a ready-to-use report template, the questions I need to answer at each step, and a customer communication draft.`
},
{
  title: "Production / Operations Capacity Plan",
  prompt: `ROLE: You are an operations planner.

CONTEXT:
- Products and process steps with cycle times: [Process and Cycle Times]
- Equipment and labor availability: [Resources]
- Demand forecast and variability: [Demand]
- Constraints (changeovers, maintenance, materials): [Constraints]

TASK:
1. Calculate capacity per resource, utilization, and identify the bottleneck.
2. Compare demand to capacity by period and highlight gaps.
3. Offer options (overtime, shifts, outsourcing, investment, scheduling changes) with cost and impact.
4. Build a simple schedule logic and a weekly planning routine.
5. Provide key metrics (OEE, throughput, on-time delivery, scrap) and a dashboard outline.`
}
]);

addPrompts("Business", "Training & Development", [
{
  title: "Training Program Design",
  prompt: `ROLE: You are an instructional designer.

CONTEXT:
- Training topic and business need: [Topic and Need]
- Audience and current skill level: [Audience]
- Desired behaviors after training: [Desired Behaviors]
- Duration and format (live, virtual, self-paced): [Duration and Format]
- Constraints: [Constraints]

TASK:
1. Define measurable learning objectives.
2. Create a module-by-module outline with timing, activities, examples, practice, and knowledge checks.
3. Write the facilitator guide for the first module, including scripts, discussion questions, and exercises.
4. Create the participant handout and a job aid.
5. Design the evaluation: reaction, learning, behavior change, and results, with survey questions and a 30/60/90-day follow-up.
6. Provide reinforcement ideas to make the learning stick.`
},
{
  title: "Quiz & Assessment Writer",
  prompt: `ROLE: You are an assessment specialist.

INPUT: Training content or topic: [Training Content]
Skill level and passing standard: [Level and Passing Score]

TASK: Write 20 questions (multiple choice, scenario-based, true/false, short answer) that test understanding and application rather than memorization, with answer keys, rationales for right and wrong options, difficulty ratings, and the learning objective each tests. Include 3 scenario-based case studies and a scoring rubric.`
},
{
  title: "Manager Coaching Conversation Guide",
  prompt: `ROLE: You are a coaching trainer who teaches managers to coach rather than tell.

CONTEXT:
- Employee situation (goal, challenge): [Employee Situation]
- My relationship and style: [Relationship and Style]
- Time available: [Time Available]

TASK:
1. Provide a coaching conversation structure (such as GROW) with sample questions for each stage.
2. Give me 20 powerful open questions and what to do when the person gives short answers.
3. Show the difference between coaching, mentoring, and feedback and when to use each.
4. Provide a sample dialogue for my situation.
5. Provide a follow-up template and tips for avoiding giving advice too soon.`
}
]);

addPrompts("Business", "Nonprofit & Community", [
{
  title: "Fundraising Appeal Letter",
  prompt: `ROLE: You are a nonprofit development director and direct-mail copywriter.

CONTEXT:
- Organization and mission: [Organization and Mission]
- Campaign purpose and goal amount: [Campaign and Goal]
- Audience (past donors, lapsed, new): [Audience]
- A specific story or beneficiary example: [Story]
- Impact per donation level (for example $50 provides X): [Impact Levels]
- Deadline and match opportunities: [Deadline and Match]

TASK:
1. Write the appeal letter: a compelling story opening, the problem, the solution, specific impact for a donation, a personal ask, urgency that is real, and a P.S.
2. Provide email versions (3-email series) and social posts.
3. Offer 5 subject lines.
4. Write a thank-you letter and a donor stewardship plan.
5. Provide guidance on segmenting donors and tracking results.

RULES: Never exaggerate impact. Protect beneficiary dignity and privacy.`
},
{
  title: "Volunteer Recruitment & Management Plan",
  prompt: `ROLE: You are a volunteer program manager.

CONTEXT:
- Organization and volunteer needs: [Organization and Needs]
- Roles and time commitments: [Roles and Time]
- Target volunteers: [Target Volunteers]
- Current challenges: [Challenges]

TASK:
1. Write volunteer role descriptions.
2. Create a recruitment message for multiple channels.
3. Design the application, screening, onboarding, and training process.
4. Plan recognition, retention, and communication practices.
5. Provide a volunteer handbook outline and feedback survey.
6. Define metrics (hours, retention, satisfaction) and legal considerations to check.`
},
{
  title: "Event Fundraiser Plan",
  prompt: `ROLE: You are a special-events fundraising consultant.

CONTEXT:
- Organization and cause: [Organization and Cause]
- Event type: [Event Type]
- Date and venue: [Date and Venue]
- Budget and fundraising goal: [Budget and Goal]
- Audience size: [Audience Size]

TASK:
1. Build a timeline from 6 months out to post-event.
2. Create a budget with revenue streams (tickets, sponsors, auctions, donations) and costs.
3. Provide a sponsorship package and pitch.
4. Draft invitations, promotion, run-of-show, volunteer roles, and day-of checklist.
5. Plan the donation ask moment and a follow-up.
6. List compliance considerations (raffle rules, permits, receipts).`
}
]);

addPrompts("Business", "Real Estate & Property Management", [
{
  title: "Rental Property Investment Analysis",
  prompt: `ROLE: You are a real estate investment analyst (general education, not investment advice).

CONTEXT:
- Property type and location: [Property Type and Location]
- Purchase price and closing costs: [Price and Closing Costs]
- Down payment, loan rate and term: [Financing]
- Expected rent and vacancy: [Rent and Vacancy]
- Operating expenses (taxes, insurance, maintenance, management, utilities): [Operating Expenses]
- Renovation costs and timeline: [Renovation]
- Holding period and expected appreciation: [Holding Period]

TASK:
1. Calculate NOI, cap rate, cash flow, cash-on-cash return, debt service coverage ratio, gross rent multiplier, and estimated IRR, showing formulas and my numbers.
2. Run sensitivity analysis on rent, vacancy, interest rate, and repairs.
3. Identify hidden costs and risks.
4. Compare to alternative investments qualitatively.
5. List due-diligence steps and questions for the seller, inspector, and lender.
6. Provide a go / no-go checklist.`
},
{
  title: "Lease Agreement Review & Tenant Communications",
  prompt: `ROLE: You are an experienced property manager (general information, not legal advice).

CONTEXT:
- My role (landlord, tenant): [My Role]
- Property and location: [Property and Location]
- Lease text or key terms: [Lease Terms]
- Situation (new lease, renewal, repair issue, late rent, move-out): [Situation]

TASK:
1. Explain the lease in plain English and flag unusual clauses, hidden fees, and risks for my role.
2. List my rights and responsibilities, and the local landlord-tenant rules I should verify.
3. Draft the communication needed for my situation (notice, repair request, rent reminder, renewal offer, security deposit letter) in a professional tone, with a firm version and a friendly version.
4. Provide a move-in and move-out inspection checklist.
5. Suggest documentation practices to protect me.`
},
{
  title: "Real Estate Listing & Marketing Copy",
  prompt: `ROLE: You are a real estate marketing copywriter who complies with fair housing rules.

CONTEXT:
- Property details (beds, baths, size, lot, year, upgrades): [Property Details]
- Neighborhood highlights: [Neighborhood]
- Target buyers or renters: [Target Audience]
- Price and terms: [Price and Terms]

TASK:
1. Write the main listing description (150-200 words) and a short version (50 words).
2. Provide 10 headline options, bullet highlights, and 5 social posts.
3. Write an open-house invitation email and a showing follow-up.
4. Suggest photo shot list and staging tips.
5. Check the copy for fair housing compliance and flag risky phrases.`
}
]);
