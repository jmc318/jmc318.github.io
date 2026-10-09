/* See business-1.js for editing instructions. */

addPrompts("Business", "Slide Decks by Situation", [
{
  title: "Universal Slide Deck Builder (Any Situation)",
  prompt: `ROLE: You are a senior presentation strategist and designer who has built decks for executives, investors, and conferences. You write slides that make one point each.

DECK BRIEF:
- Situation / type of presentation: [Presentation Type]
- Audience (who they are, what they know, what they care about, who decides): [Audience]
- Setting and length (room or virtual, minutes, Q&A time): [Setting and Length]
- The one thing I want them to remember: [Key Message]
- What I want them to do or decide afterward: [Desired Action]
- Content, data, and stories I have: [Source Material]
- Brand, tone, and any template rules: [Brand and Tone]
- Likely objections or sensitivities: [Objections]

TASK:
1. Recommend the narrative structure that fits this situation (for example situation-complication-resolution, problem-solution-proof, or story arc) and explain why in two sentences.
2. Give the slide count that fits the time (roughly one slide per 1-2 minutes) and a one-line storyline of the whole deck.
3. For each slide provide: slide number, action title written as a full-sentence takeaway (not a topic label), 2-4 supporting bullets of 8 words or fewer, the best visual (chart type with what to highlight, diagram, photo concept, or icon), speaker notes in natural spoken language, and time allotted.
4. Mark which slides are essential and which can be cut if time shrinks.
5. Write the opening (first 30 seconds) and closing (last 60 seconds with the ask).
6. List the 8 hardest questions I will get with concise answers, and which backup slides to prepare for them.
7. Finish with a design checklist: font sizes, contrast, charts, consistency, and file-size and handout tips.

OUTPUT FORMAT: A table or clearly numbered slide blocks I can paste straight into PowerPoint, Google Slides, or an AI slide tool.

RULES: One idea per slide. No walls of text. Do not invent data; use [Data Needed] placeholders where I must supply numbers.`
},
{
  title: "Investor Pitch Deck",
  prompt: `ROLE: You are a venture advisor who has helped founders raise seed and Series A rounds.

CONTEXT:
- Company and one-line description: [Company Description]
- Stage and traction (revenue, users, growth, pilots, letters of intent): [Traction]
- Problem and who has it: [Problem]
- Solution and why we win: [Solution and Moat]
- Market size and how I calculated it: [Market Size]
- Business model and unit economics: [Business Model]
- Team backgrounds: [Team]
- Raise amount, use of funds, milestones it buys: [Raise and Use of Funds]
- Investor type and meeting length: [Investor and Length]

TASK: Build a 12-14 slide deck: cover, problem, solution, product, why now, market, business model, traction, go-to-market, competition, team, financials, the ask, and appendix slides.
For each slide give an action title that states the claim, supporting points, the exact chart or visual, and a 30-45 second spoken script.
Then: identify the three weakest claims investors will challenge and how to strengthen them; list the metrics investors expect for this model; write a 2-minute verbal version of the pitch; and prepare the 20 toughest questions with answers.

RULES: Do not inflate numbers or invent customers. Mark thin evidence so I can fix it before pitching.`
},
{
  title: "Board of Directors Deck",
  prompt: `ROLE: You are a CEO's chief of staff who prepares board materials that focus the board on decisions, not reporting.

CONTEXT:
- Company and stage: [Company and Stage]
- Board members and what each cares about: [Board Members]
- Meeting date and time allotted: [Date and Time]
- Period results and key metrics: [Results and Metrics]
- Strategic topics for discussion: [Strategic Topics]
- Decisions or approvals needed: [Decisions Needed]
- Bad news the board must hear: [Bad News]

TASK:
1. Propose the deck order: executive summary, decisions requested up front, performance dashboard, strategy discussion items, risks, financials, appendix. Explain how to keep reporting short so discussion time is protected.
2. For each slide give an action title, content, the chart that shows it best, and the discussion question to put to the board.
3. Draft the executive summary slide and the "decisions requested" slide with exact wording and a recommendation for each.
4. Show how to present the bad news with credibility: what happened, impact, root cause, recovery plan, and timeline.
5. Anticipate each board member's likely questions and prepare answers.
6. Provide a pre-read email and pre-wiring plan for contentious items.
7. Provide a one-page minutes and action-item template.`
},
{
  title: "Sales Pitch / Proposal Presentation",
  prompt: `ROLE: You are a top enterprise sales leader and presentation coach.

CONTEXT:
- What I sell: [Product or Service]
- The prospect, their role, and decision process: [Prospect and Decision Process]
- Their stated problems and goals from discovery: [Discovery Findings]
- Competitors they are considering: [Competitors]
- Proof I have (case studies, ROI data, references): [Proof]
- Price and package: [Pricing]
- Meeting length and attendees: [Meeting Details]

TASK: Build a customer-centered deck of 10-12 slides:
1. Open with their situation and goals in their words, not about us.
2. Cost of the problem (quantified), the vision of the solution, how it works for their use cases, proof and results from similar customers, implementation plan and timeline, investment with options, risks and how we reduce them, and a clear next-step slide with dates.
3. For each slide give the action title, key points, visual, and speaker notes.
4. Provide a 5-slide short version for a 15-minute meeting.
5. List the objections likely in the room and where in the deck to address each.
6. Write the follow-up email that recaps the deck and confirms next steps.`
},
{
  title: "Quarterly Business Review (QBR) Deck",
  prompt: `ROLE: You are an operations leader who produces concise, honest review decks.

CONTEXT:
- Team or company: [Team or Company]
- Quarter: [Quarter and Year]
- Audience (executives, client, board): [Audience]
- Targets and actual results: [Targets and Actuals]
- Wins, misses, and lessons: [Wins and Misses]
- Risks and next-quarter priorities: [Risks and Priorities]
- Support or decisions needed: [Asks]

TASK:
1. Outline a 10-slide deck: headline summary, scorecard versus plan, performance by area, wins and what drove them, misses with root causes and corrective actions, customer or market insights, risks and issues, next-quarter priorities with owners and metrics, financial view, and asks.
2. For each slide give the action title, the exact numbers or chart to show, and speaker notes.
3. Write the scorecard design (green / yellow / red logic) and explain how to present variances without defensiveness.
4. Provide the 10 toughest questions with suggested answers.
5. Provide a one-slide version for a leader who has two minutes.`
},
{
  title: "Executive Steering Committee / Project Status Deck",
  prompt: `ROLE: You are a program manager who reports to senior leaders.

CONTEXT:
- Project name and objective: [Project and Objective]
- Phase and timeline: [Phase and Timeline]
- Budget status: [Budget Status]
- Progress, milestones hit and missed: [Progress]
- Top risks and issues: [Risks and Issues]
- Decisions needed from the committee: [Decisions]

TASK: Design a 6-8 slide status deck: executive summary with overall status and reason, milestone timeline, budget versus forecast, key accomplishments, risks and issues with owners and mitigations, decisions and escalations needed, and next period plan.
For each slide give an action title, the content, and the best visual (Gantt, burndown, RAG table).
Write the one-sentence status for each workstream, a plain-language explanation of any red item, and a recommended action for each decision.
Add guidance for keeping the meeting to 30 minutes.`
},
{
  title: "Project Kickoff Deck",
  prompt: `ROLE: You are an experienced project manager launching a cross-functional project.

CONTEXT:
- Project and business goal: [Project and Goal]
- Sponsor and team members with roles: [Team and Roles]
- Scope in and out: [Scope]
- Timeline and milestones: [Timeline]
- Budget and constraints: [Budget and Constraints]
- Known risks: [Risks]
- How the team will communicate: [Communication Norms]

TASK: Build an 8-10 slide kickoff deck: why this matters, objectives and success measures, scope, team and RACI, timeline and milestones, ways of working (meetings, tools, decision rights), risks and assumptions, first 30 days plan, and questions and commitments.
Provide action titles, content, visuals, and speaker notes, and include 3 interactive moments (such as a risk brainstorm) to keep the room engaged.
Write the kickoff meeting agenda and follow-up email.`
},
{
  title: "All-Hands / Company Update Deck",
  prompt: `ROLE: You are an internal communications lead working with the CEO.

CONTEXT:
- Company size and culture: [Company Size and Culture]
- Topics to cover (results, strategy, changes, wins, recognition): [Topics]
- Difficult topics employees are worried about: [Employee Concerns]
- Meeting length and format (live, remote, Q&A): [Format]
- Tone: [Tone]

TASK:
1. Propose an agenda with a strong opening, 3-4 core messages, recognition moments, and a long Q&A.
2. Build the slide-by-slide deck with action titles, simple visuals, and a script that sounds human, not corporate.
3. Provide a plain-language way to explain numbers and strategy to non-finance employees.
4. Draft honest answers to the 12 hardest questions employees will ask.
5. Provide a follow-up email and an anonymous feedback pulse question set.`
},
{
  title: "Training / Workshop Deck",
  prompt: `ROLE: You are an instructional designer and corporate trainer.

CONTEXT:
- Topic: [Topic]
- Audience and their experience level: [Audience and Level]
- Length and format (in person, virtual, hybrid): [Length and Format]
- Learning objectives: [Learning Objectives]
- Skills they must be able to perform afterward: [Target Skills]

TASK:
1. Write 3-5 measurable learning objectives.
2. Build the deck as a teaching sequence: hook, why it matters, concept, example, practice, check, recap. Give the slide-by-slide plan with titles, content, visuals, and facilitator notes with timing.
3. Add interactive elements every 8-10 minutes (poll, pair discussion, case study, quiz, role-play) with instructions.
4. Include a knowledge-check quiz, a one-page job aid, and a participant handout.
5. Provide a plan for reinforcing learning after the session and a feedback survey.`
},
{
  title: "Conference Talk / Keynote Deck",
  prompt: `ROLE: You are a keynote speaker coach.

CONTEXT:
- Event, audience, and expectations: [Event and Audience]
- Talk title or topic: [Talk Topic]
- Time slot: [Minutes] minutes
- My credibility and unique perspective: [My Credibility]
- Stories, data, or lessons I want to include: [Material]
- What I want the audience to feel and do: [Desired Outcome]

TASK:
1. Offer 5 title options and a one-sentence big idea.
2. Craft the structure: a memorable opening story, the core idea in three parts, a turning point, practical takeaways, and an emotional close.
3. Build the slide plan with minimal text, strong images or single numbers, and notes about what to say, with timing.
4. Write the opening 90 seconds and closing 60 seconds word for word.
5. Provide delivery coaching: pacing, pauses, stage movement, handling technical problems, and nerves.
6. Include a Q&A preparation list and a call to action slide.`
},
{
  title: "Business Case / Budget Request Deck",
  prompt: `ROLE: You are a finance partner who builds persuasive, numbers-driven business cases.

CONTEXT:
- What I'm requesting (budget, headcount, project, investment): [Request]
- Amount and timeframe: [Amount and Timeframe]
- Problem or opportunity: [Problem or Opportunity]
- Expected benefits and how they are measured: [Benefits]
- Alternatives considered, including doing nothing: [Alternatives]
- Decision makers and what they care about: [Decision Makers]

TASK: Build a 8-10 slide deck: executive summary with the ask, the problem and cost of inaction, the proposed solution, options compared, financial case (costs, benefits, payback, NPV or ROI with the formulas and assumptions), risks and mitigations, implementation plan and milestones, how success will be measured, and the decision requested.
Provide action titles, the exact tables or charts for the numbers, and speaker notes. Show a sensitivity view of the 3 key assumptions.
List the finance and operations questions I should expect and how to answer them.`
},
{
  title: "Client Deliverable / Consulting Findings Deck",
  prompt: `ROLE: You are a management consultant who presents findings clearly and recommends action.

CONTEXT:
- Client and engagement objective: [Client and Objective]
- Analysis performed and key findings: [Findings]
- Data and evidence: [Evidence]
- Recommendations I'm leaning toward: [Recommendations]
- Client sensitivities and politics: [Sensitivities]

TASK:
1. Structure the deck using the pyramid principle: answer first, then supporting arguments, then evidence.
2. Draft the executive summary slide, then each section with action titles that read as a complete story when scanned alone.
3. Recommend the chart for each finding and how to label it so it needs no explanation.
4. Build the recommendation slides with impact, effort, risks, and a phased roadmap.
5. Prepare backup slides for methodology and data detail.
6. Advise how to handle findings the client may not like.`
},
{
  title: "Product Launch / Feature Announcement Deck",
  prompt: `ROLE: You are a product marketing manager.

CONTEXT:
- Product or feature: [Product or Feature]
- Audience (customers, sales team, press, internal): [Audience]
- Problem solved and key benefits: [Problem and Benefits]
- Differentiators and competitors: [Differentiators]
- Launch date, pricing, availability: [Launch Details]
- Proof (beta results, quotes): [Proof]

TASK: Build a launch deck: the customer problem, the announcement, demo flow slides, benefits by persona, how it compares, pricing and packaging, roadmap teaser, customer proof, how to get it, and FAQs.
Include messaging pillars, an elevator pitch, and sales-enablement slides (objection handling and competitive talk track).
Provide the slide-by-slide plan with action titles, visuals, and notes.`
},
{
  title: "Strategic Plan / Annual Planning Deck",
  prompt: `ROLE: You are a strategy director.

CONTEXT:
- Organization and planning period: [Organization and Period]
- Where we are: results, market, competition: [Current State]
- Strategic choices under consideration: [Strategic Choices]
- Goals and targets: [Goals]
- Resources and constraints: [Resources]
- Audience and decisions needed: [Audience and Decisions]

TASK: Build a 12-15 slide deck: situation assessment, key insights, strategic options with pros and cons, recommended strategy and what we will not do, objectives and key results, initiatives and owners, resource plan, financial outlook, risks, roadmap by quarter, governance and metrics, and next steps.
Provide action titles, visuals (matrices, roadmaps, scorecards), and notes. Include a one-slide strategy-on-a-page summary.`
},
{
  title: "Webinar / Online Presentation Deck",
  prompt: `ROLE: You are a webinar producer and presenter coach.

CONTEXT:
- Topic and audience: [Topic and Audience]
- Goal (leads, education, product demo, community): [Goal]
- Length: [Minutes] minutes
- Offer or call to action: [Call to Action]
- Tools and platform: [Platform]

TASK:
1. Provide a minute-by-minute run of show with a strong first 2 minutes, a content body in 3 parts, interaction moments (polls, chat prompts), a demo or case study, the offer, and Q&A.
2. Build the slides with large text, minimal words, and visuals that work on small screens.
3. Write the registration page copy, reminder emails, and follow-up email with replay link.
4. Provide a technical checklist and a plan if something fails live.
5. Suggest ways to repurpose the webinar into clips and posts.`
}
]);

addPrompts("Personal", "Presentations & Slideshows", [
{
  title: "Job Interview Presentation / Case Study Deck",
  prompt: `ROLE: You are an executive recruiter and presentation coach.

CONTEXT:
- Role and company: [Role and Company]
- The assignment given to me (topic, time limit, audience): [Assignment]
- My background and relevant achievements: [My Background]
- What the company cares about: [Company Priorities]
- Data or materials provided: [Provided Materials]

TASK:
1. Interpret what the assignment is really testing (thinking, judgment, communication, leadership) and what a hiring committee will score.
2. Build a slide-by-slide deck outline sized to the time limit: key insight up front, my analysis, recommendations, a 30-60-90 day plan, risks, and how my experience applies.
3. For each slide provide the action title, content, visual, and speaker notes with timing.
4. Write the opening and close, and a 3-bullet executive summary.
5. List the questions the panel will likely ask, including pushback, and prepare answers.
6. Provide a rehearsal plan and a day-of checklist (backup files, logistics).`
},
{
  title: "School / College Class Presentation",
  prompt: `ROLE: You are a teacher who helps students create engaging presentations.

CONTEXT:
- Subject and assignment instructions: [Assignment]
- Grade or course level: [Level]
- Time limit: [Minutes] minutes
- Grading criteria: [Grading Criteria]
- Key facts or sources I have: [Sources]

TASK:
1. Break down what the teacher is looking for.
2. Create a slide outline with titles, 3 short bullets per slide, and a visual idea for each.
3. Write speaker notes in my own voice, with timing, so I do not read the slides.
4. Suggest an attention-grabbing opening and a memorable conclusion.
5. Create a source list format and tips for making slides look professional.
6. Provide a practice plan and 5 questions the class might ask with answers.

RULES: Help me understand and present the material in my own words; do not write it in a way that misrepresents my own work.`
},
{
  title: "Memorial, Retirement or Tribute Slideshow",
  prompt: `ROLE: You are a sensitive, skilled storyteller who designs tribute slideshows.

CONTEXT:
- The person and occasion (retirement, memorial, anniversary, milestone birthday): [Person and Occasion]
- Audience and setting: [Audience and Setting]
- Length: [Minutes] minutes
- Stories, qualities, and memories: [Memories]
- Photos and videos available: [Photos Available]
- Tone (celebratory, reflective, humorous): [Tone]
- Music ideas: [Music]

TASK:
1. Propose a structure in chapters (early years, work or family life, passions, impact, legacy) and the arc of the emotions.
2. List the slides: which photo goes where, the caption or short quote for each, and transitions.
3. Write brief narration or captions that are warm and specific.
4. Suggest music pacing, slide timing, and how many photos per minute.
5. Provide a list of questions to ask family and friends to collect better stories.
6. Give practical tips for creating it in PowerPoint, Google Slides, or Photos.`
},
{
  title: "Family Reunion / Holiday / Trip Photo Slideshow",
  prompt: `ROLE: You are a creative photo-story designer.

CONTEXT:
- Event or trip: [Event or Trip]
- Who will watch it: [Audience]
- Number of photos and videos: [Number of Photos]
- Highlights and funny moments: [Highlights]
- Length: [Minutes] minutes

TASK:
1. Suggest how to sort and select the best photos (including culling rules) and a storyline in chronological or themed order.
2. Create the slide plan with captions, running jokes, and a surprise or tribute moment.
3. Recommend transitions, music, and timing so it doesn't drag.
4. Write 10 caption ideas in a witty, warm style.
5. Explain the step-by-step process to build and share it with family (including a link or video export).`
},
{
  title: "Community, PTA, or Nonprofit Presentation",
  prompt: `ROLE: You are a communications volunteer who helps community groups pitch their causes.

CONTEXT:
- Organization and mission: [Organization and Mission]
- Audience (donors, city council, parents, volunteers): [Audience]
- What we are asking for: [Ask]
- Impact stories and data: [Impact and Data]
- Time available: [Minutes] minutes

TASK:
1. Build a persuasive, human-centered deck of 8-10 slides: the need, our story, impact so far, the plan, the budget, how the audience can help, and the clear ask.
2. Provide action titles, visuals, and speaker notes.
3. Write a short spoken version for 3 minutes.
4. Suggest how to present beneficiaries respectfully and use real stories ethically.
5. Provide a follow-up thank-you and a one-page handout.`
},
{
  title: "Turn a Document or Notes Into a Slide Deck",
  prompt: `ROLE: You are a presentation designer who converts documents into clear decks.

SOURCE CONTENT:
[Paste Document or Notes]
AUDIENCE AND PURPOSE: [Audience and Purpose]
LENGTH: [Number of Slides] slides or [Minutes] minutes

TASK:
1. Identify the main message, the supporting arguments, and what to leave out.
2. Convert the content into a slide-by-slide deck with action titles, minimal bullets, and the best visual for each point (including which data should become a chart).
3. Move detail into speaker notes or an appendix and mark which slides can be cut.
4. Flag anything missing, unclear, or contradictory instead of inventing information.
5. Provide a summary slide and a closing slide with the key takeaway or ask.`
},
{
  title: "Critique & Improve My Existing Deck",
  prompt: `ROLE: You are a ruthless but constructive presentation critic.

MY DECK (paste slide titles and content, or describe each slide):
[Paste Deck Content]
AUDIENCE AND GOAL: [Audience and Goal]
TIME LIMIT: [Minutes] minutes

TASK:
1. Evaluate the storyline: does the deck make one clear argument, and does each slide earn its place?
2. Give slide-by-slide feedback: rewrite the title as a takeaway, cut text, recommend a better visual, and flag slides to merge, split, or delete.
3. Identify common problems: too much text, weak opening, buried ask, unclear charts, inconsistent design, jargon.
4. Provide a rewritten outline with before and after for the weakest 5 slides.
5. Provide a score from 1-10 for story, clarity, design, and persuasion, and the 3 changes that would raise it most.
6. Suggest what to rehearse and the questions the audience might raise.`
},
{
  title: "AI Slide-Tool Prompt (Gamma, Copilot, Canva, Google Slides)",
  prompt: `ROLE: You are an expert at writing prompts for AI slide-generation tools.

DECK GOAL: [Deck Goal]
AUDIENCE: [Audience]
NUMBER OF SLIDES: [Number of Slides]
TONE AND STYLE (clean, bold, minimal, corporate): [Tone and Style]
KEY CONTENT AND DATA: [Key Content]
BRAND COLORS AND FONTS: [Brand Details]

TASK:
1. Write a single detailed prompt I can paste into an AI slide tool. It should specify the audience, purpose, slide count, slide-by-slide outline with titles and key points, tone, visual style, chart requirements, and what to avoid (clip art, walls of text).
2. Write a second, shorter version for quick generation.
3. Provide follow-up prompts to refine: tighten text, change the layout, add a chart, improve the opening, or make it more visual.
4. Provide a checklist to review AI-generated decks for accuracy, invented facts, inconsistent numbers, and design problems before presenting.`
}
]);
