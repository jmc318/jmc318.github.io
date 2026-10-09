/*
  HOW TO EDIT THIS FILE
  - Each prompt has a title and the prompt text between the backtick marks ( ` ).
  - Anything in [Square Brackets] becomes a fill-in box on the website. Use square brackets ONLY for blanks.
  - To add a prompt: copy one { title: ..., prompt: `...` }, block, paste it below, and change the words.
  - Do not use the backtick character ( ` ) or the two-character combo ${ inside a prompt's text.
  - Keep the comma after each closing }
*/

addPrompts("Business", "Strategy & Planning", [
{
  title: "One-Page Business Plan",
  prompt: `ROLE: You are a seasoned business strategist and former operator who has helped hundreds of companies build practical plans. You are candid, numbers-minded, and allergic to fluff.

CONTEXT:
- Business name / idea: [Business Name / Idea]
- What we sell: [Product or Service]
- Target customer: [Customer Description]
- Market / location: [Market]
- Starting budget and resources: [Budget and Resources]
- Founder strengths and gaps: [Strengths and Gaps]

TASK: Build a one-page business plan with these sections:
1. Problem and solution (what pain exists, why now, why our answer is better)
2. Target customers (who is the first 100 customers, specifically)
3. Revenue model and pricing, with a simple unit-economics example (price, cost to deliver, margin, cost to acquire a customer)
4. Go-to-market approach (how the first customers actually find and buy)
5. Competitive advantage and what could copy it
6. Key costs and break-even estimate
7. 12-month milestones by quarter
8. Top 5 risks, each with an early warning sign and a mitigation
9. The 3 assumptions that, if wrong, sink the plan, and the cheapest way to test each

OUTPUT FORMAT: Clean headings, short bullets, one small table for the numbers. Maximum 1.5 pages when printed.

RULES: List every assumption you make in a separate "Assumptions to confirm" block. If a key input is missing, ask up to 5 clarifying questions before writing. Do not invent market statistics; label estimates as estimates.`
},
{
  title: "SWOT Analysis With Strategic Moves",
  prompt: `ROLE: You are a strategy consultant known for turning generic SWOTs into decisions.

CONTEXT:
- Subject of the analysis: [Company / Product / Business Unit]
- Industry and size: [Industry and Size]
- Situation in 3-4 sentences (growth, problems, recent changes): [Situation]
- Key competitors: [Competitors]
- Time horizon: [Time Horizon]

TASK:
1. Produce a SWOT with 6-8 specific, evidence-based points per quadrant. No generic items like "good team" unless you explain what makes it distinctive. Tag each point as High / Medium / Low importance.
2. Build a TOWS matrix: pair strengths and opportunities (growth moves), strengths and threats (defensive moves), weaknesses and opportunities (fix-to-capture moves), weaknesses and threats (survival moves).
3. Recommend the 3 highest-value strategic moves, with rationale, rough effort (low/med/high), expected impact, and the first 3 actions for each.
4. Identify the single biggest blind spot a leadership team in this position typically has.
5. List the questions and data I should gather to validate the analysis.

OUTPUT FORMAT: Four-quadrant table, then the TOWS table, then a prioritized recommendations list.

RULES: Separate facts I gave you from your inferences. Flag any claim that needs outside verification.`
},
{
  title: "Competitor Deep-Dive & Positioning Map",
  prompt: `ROLE: You are a competitive intelligence analyst.

CONTEXT:
- My business / product: [My Business / Product]
- What makes us different today: [Our Differentiators]
- Target customer: [Target Customer]
- Competitors to analyze: [Competitor 1, Competitor 2, Competitor 3]
- What I already know about them: [Known Facts]

TASK:
1. For each competitor build a profile: positioning statement, target customer, pricing and packaging, core strengths, weaknesses, typical customer complaints, marketing channels and messaging style, and likely strategic direction.
2. Create a side-by-side comparison table across 10-12 criteria that customers really use to decide.
3. Propose a 2x2 positioning map: pick the two axes that best separate the players, place everyone, and explain where white space exists.
4. Identify 5 gaps competitors serve poorly and rank them by market size and how defensible they are.
5. Recommend how we should position, what to emphasize, what NOT to claim, and 3 moves competitors could make that would hurt us, with our response to each.
6. List the research steps I should run next (review sites, job postings, pricing pages, ads libraries, customer interviews).

RULES: You may not have current data. Clearly mark anything that is general knowledge versus something I must verify, and never fabricate specific numbers, quotes, or customer names.`
},
{
  title: "Annual Strategic Plan & OKRs",
  prompt: `ROLE: You are a COO-level strategic planner who has run annual planning for growing companies.

CONTEXT:
- Company / team: [Company / Team]
- Planning year: [Year]
- Mission and long-term vision: [Mission and Vision]
- Last year's results (wins and misses): [Last Year Results]
- Top 3 priorities from leadership: [Priority 1, Priority 2, Priority 3]
- Resources (headcount, budget): [Resources]
- Known constraints: [Constraints]

TASK:
1. Restate the strategy in one paragraph and name what we will deliberately NOT do this year.
2. Write 3-4 company Objectives (inspiring, qualitative), each with 3 Key Results (measurable, with baseline, target, and how it is measured).
3. Cascade to quarterly milestones with named owner roles, dependencies, and the budget or headcount each needs.
4. Build a risk register (top 8) with likelihood, impact, mitigation, and trigger points that cause us to re-plan.
5. Design the operating rhythm: weekly, monthly, quarterly review agendas and the 8-10 metrics on the dashboard.
6. Provide a one-page communication outline for rolling this out to the whole company.

OUTPUT FORMAT: Tables where possible; each KR must be measurable with a number and a date.

RULES: Challenge any goal that looks like an activity rather than an outcome. Point out conflicts between objectives and resources.`
},
{
  title: "Go / No-Go Decision Analysis",
  prompt: `ROLE: You are a skeptical but fair senior advisor. Your job is to make sure I make a good decision, not to please me.

DECISION: [Decision]
FACTS AND NUMBERS: [Key Facts]
OPTIONS CONSIDERED: [Options]
CONSTRAINTS (time, money, people): [Constraints]
DEFINITION OF SUCCESS: [Success Definition]
DEADLINE FOR DECIDING: [Deadline]

TASK:
1. Restate the decision and the real underlying question in one sentence.
2. Make the strongest case FOR, then the strongest case AGAINST, as if arguing for each side in front of a board.
3. List the assumptions that must be true for success and rate each on confidence and impact. Show how to test the 3 most important ones cheaply and quickly.
4. Estimate best, expected, and worst-case outcomes (with the logic, not just numbers), including the cost of doing nothing.
5. Check for common decision traps: sunk cost, optimism bias, confirmation bias, urgency pressure.
6. Describe a reversible or staged version of the decision that reduces risk.
7. Give a clear recommendation, the conditions that would change it, and the 5 questions I must answer before committing.

OUTPUT FORMAT: Headings for each step, with a final one-paragraph recommendation.

RULES: If my information is thin, say what is missing instead of guessing.`
},
{
  title: "Market Entry / Expansion Assessment",
  prompt: `ROLE: You are a corporate development advisor who evaluates expansion opportunities.

CONTEXT:
- Our business today: [Current Business]
- Expansion being considered (new market, region, segment, product line): [Expansion Idea]
- Our strengths that transfer: [Transferable Strengths]
- Budget and timeline: [Budget] over [Timeframe]
- Risk tolerance: [Risk Tolerance]

TASK:
1. Size the opportunity using a bottoms-up approach (customers x frequency x price) and a top-down sanity check. Show the formula and flag every estimate.
2. Assess customer needs, buying process, and how different the new market is from our current one.
3. Map competition and substitutes, and describe how entrenched they are.
4. Identify regulatory, operational, cultural, or distribution hurdles.
5. Compare entry options: pilot, partnership, reseller, acquisition, build from scratch. Give pros, cons, cost, speed, and control for each.
6. Draft a phased plan (test, validate, scale) with stage-gate criteria that must be met before more money is spent.
7. Build a simple financial view: investment, break-even timing, and the sensitivity to the 3 most uncertain assumptions.
8. Recommend go / pilot / no-go and outline the first 30 days.

RULES: Be explicit about which numbers are placeholders I must replace with real data.`
},
{
  title: "Business Model Canvas & Stress Test",
  prompt: `ROLE: You are a startup coach who uses the Business Model Canvas and lean-startup methods.

CONTEXT:
- Business idea: [Business Idea]
- Customer segments in mind: [Customer Segments]
- Offering: [Product / Service]
- How we think we will make money: [Revenue Idea]

TASK:
1. Fill in all nine canvas blocks (customer segments, value propositions, channels, customer relationships, revenue streams, key resources, key activities, key partners, cost structure) with specific bullets, not generalities.
2. Identify the 3 weakest or riskiest blocks and explain why.
3. For each risky block, propose one inexpensive experiment (landing page test, customer interviews, pre-sales, concierge MVP) with the success metric and a pass/fail threshold.
4. Run a "what would have to be true" test: list 6 statements that must be true for this model to be profitable.
5. Suggest 2 alternative business models (pricing, channel, or customer-segment variations) that might work better.

OUTPUT FORMAT: Canvas as a table, then a prioritized experiment plan with a 30-day schedule.`
},
{
  title: "Quarterly Business Review (QBR) Preparation",
  prompt: `ROLE: You are a chief of staff preparing a leader for a tough quarterly business review.

CONTEXT:
- Company / department: [Company / Department]
- Quarter and year: [Quarter and Year]
- Audience (CEO, board, investors, clients): [Audience]
- Targets for the quarter: [Targets]
- Actual results and metrics: [Actual Results]
- Wins, misses, notable events: [Notes]

TASK:
1. Write a 5-bullet executive summary that leads with the single most important message.
2. Present performance versus plan and prior year, with a clear explanation of each material variance (what happened, why, whether it will recur).
3. Highlight wins and what made them work; identify misses and the lessons.
4. Provide a risk and issue log with owners and next steps.
5. Set priorities for next quarter and the specific decisions or support needed from this audience.
6. Anticipate the 10 hardest questions this audience may ask and draft concise, honest answers.
7. Suggest a 10-slide outline with the headline message of each slide.

RULES: Do not hide bad news. Show how to present it with credibility and a recovery plan. Mark any gaps in the data I provided.`
}
]);

addPrompts("Business", "Marketing & Content", [
{
  title: "90-Day Marketing Plan",
  prompt: `ROLE: You are a fractional Chief Marketing Officer for small and mid-sized businesses who is judged on results per dollar.

CONTEXT:
- Product / service: [Product / Service]
- Target audience: [Audience]
- Primary goal and number (leads, revenue, signups): [Goal]
- Budget (total and per month): [Budget]
- Current channels and results: [Current Channels and Results]
- Team capacity (hours per week, skills): [Team Capacity]
- Main competitors: [Competitors]

TASK:
1. Diagnose: based on the above, what is the likely biggest constraint (awareness, conversion, retention, offer)?
2. Define positioning and the one-sentence core message, plus 3 supporting proof points.
3. Recommend 3-4 channels only, with reasoning, and explicitly list channels to skip for now. Split the budget by channel.
4. Build a week-by-week action calendar for 13 weeks with owner, deliverable, and expected outcome.
5. Describe the funnel: expected traffic or reach, conversion rates (state assumptions), leads, customers, and cost per acquisition.
6. Set KPIs, a weekly dashboard layout, and decision rules (when to double down, fix, or kill a tactic).
7. Provide 3 quick wins I can launch in the first 7 days.

OUTPUT FORMAT: Headings, a calendar table, and a funnel table.

RULES: Be realistic for my budget and capacity. Clearly label all conversion-rate assumptions so I can replace them with real data.`
},
{
  title: "Customer Persona & Buyer Journey Builder",
  prompt: `ROLE: You are a customer research strategist.

CONTEXT:
- Product / service: [Product / Service]
- Category and price range: [Category and Price]
- What I know about my best customers (real data, anecdotes): [Customer Notes]
- Number of personas wanted: [Number]

TASK: For each persona create a profile with:
- Name, role or life stage, demographics (only those relevant)
- Goals, motivations, and the "job to be done"
- Frustrations and fears, and what they have tried before
- Buying triggers (what makes them act now) and objections (what stops them)
- Decision process: who else is involved, how long it takes, what they compare
- Where they get information and the exact words and phrases they use
- The message, offer, and proof that would convince them
Then map the buyer journey (awareness, consideration, decision, onboarding, advocacy) for the primary persona with questions they ask, content that helps, and touchpoints at each stage.
End with 8 interview questions I can ask real customers to validate each persona.

RULES: Label what is based on my input versus assumption. Avoid stereotypes; ground details in behavior and needs.`
},
{
  title: "Social Media Content Calendar (4 Weeks)",
  prompt: `ROLE: You are a social media strategist and copywriter who understands platform-specific formats.

CONTEXT:
- Brand / business: [Brand / Business]
- Audience: [Audience]
- Platforms: [Platforms]
- Brand voice: [Brand Voice]
- Goals: [Goals]
- Posting frequency per platform: [Posts per Week]
- Upcoming events, launches, holidays: [Key Dates]
- Content assets we have (photos, video, testimonials, expertise): [Assets]

TASK:
1. Define 4-5 content pillars with the purpose of each and the share of posts (e.g. 30% educational).
2. Create a 4-week calendar as a table: date, platform, pillar, format (reel, carousel, story, text, poll, etc.), hook (first line), full caption, visual direction, hashtags (max 5), and call to action.
3. Write 10 attention-grabbing hook lines that can be reused across posts.
4. Include 5 ways to repurpose each long-form piece into multiple posts.
5. Add an engagement plan: how and when to reply to comments and what to say.
6. Recommend the metrics to track and what a good week looks like.

RULES: Do not make up statistics or testimonials. Use placeholders such as [Testimonial Here] where real proof is needed.`
},
{
  title: "SEO Blog Post / Article Writer",
  prompt: `ROLE: You are an expert content writer and SEO editor who writes for humans first.

BRIEF:
- Topic: [Topic]
- Primary keyword: [Primary Keyword]
- Secondary keywords: [Secondary Keywords]
- Reader: [Audience] who wants to [Reader Goal]
- Search intent (learn, compare, buy): [Search Intent]
- Word count: [Word Count]
- Tone: [Tone]
- Our expertise or unique angle: [Unique Angle]
- Call to action: [Call to Action]

TASK:
1. First give 5 headline options and one recommended outline with H2 / H3 headings, and wait for my approval if I ask you to; otherwise continue.
2. Write the article: a hook intro that names the reader's problem in the first two sentences, scannable subheadings, short paragraphs, concrete examples, step lists, and a clear takeaway section.
3. Include a "common mistakes" section and an FAQ with 4-5 questions (good for featured snippets).
4. Add suggestions for internal links, 3 image ideas with alt text, a meta title (under 60 characters), and a meta description (under 155 characters).
5. Close with a natural call to action.

RULES: No filler, no clichés ("in today's fast-paced world"). Do not invent statistics, quotes, or studies; where a fact needs support, write [SOURCE NEEDED]. Write in a distinct, human voice and vary sentence length.`
},
{
  title: "Email Marketing Sequence",
  prompt: `ROLE: You are a direct-response email copywriter.

CONTEXT:
- Sequence type (welcome, launch, nurture, abandoned cart, win-back): [Sequence Type]
- Number of emails: [Number of Emails]
- Offer / product: [Offer]
- Audience and what they know about us: [Audience]
- Their biggest objection or hesitation: [Main Objection]
- Desired action: [Desired Action]
- Brand voice: [Brand Voice]
- Proof available (reviews, results, guarantees): [Proof]

TASK: For each email provide:
- Send timing and the purpose of that email in the sequence
- 3 subject line options plus preview text
- The full email body (under 200 words), starting with a hook, one idea per email, benefit-focused, with one clear call-to-action button text and link placeholder
- A plain-text P.S. where useful
Then provide: the logic of the sequence (how emails build on each other), an A/B test plan (what to test first and how to read results), segmentation and exit rules, and a quick compliance checklist (unsubscribe, physical address, honest subject lines).

RULES: Keep it conversational and specific. No hype, fake urgency, or invented claims.`
},
{
  title: "Ad Copy Variations & Test Plan",
  prompt: `ROLE: You are a performance marketer who writes and tests ads for [Platform].

CONTEXT:
- Product / service: [Product / Service]
- Audience: [Audience]
- Main benefit and differentiator: [Main Benefit]
- Offer: [Offer]
- Landing page promise: [Landing Page Promise]
- Platform: [Platform] (apply its current character limits and policies)
- Budget and goal (cost per lead / ROAS): [Budget and Goal]

TASK:
1. Write 10 headlines and 6 descriptions / primary texts, each labeled with its angle: pain point, benefit, social proof, urgency, curiosity, comparison, objection-handling.
2. Provide 3 complete ad combinations for each of the top 3 angles.
3. Suggest creative direction (image or video concepts, first 3 seconds for video).
4. Propose an audience and keyword or targeting plan, including negatives.
5. Design a structured test: what to test first, sample size or spend per variation, and decision rules to pick winners.
6. List policy risks to avoid (claims, personal attributes, before-and-after).

RULES: No unverifiable claims. Make each variation meaningfully different, not a rewording.`
},
{
  title: "Brand Voice & Messaging Guide",
  prompt: `ROLE: You are a brand strategist and editor.

CONTEXT:
- Brand: [Brand]
- What we do and why we exist: [Mission and Description]
- Audience: [Audience]
- Values: [Values]
- Three adjectives for how we want to sound: [Adjective 1, Adjective 2, Adjective 3]
- Brands whose tone we admire (and why): [Admired Brands]
- Samples of our current writing: [Current Copy Samples]

TASK: Produce a usable brand voice and messaging guide containing:
1. Brand personality summary and voice principles (4-5), each with a "we are / we are not" pairing and do / don't examples.
2. Tone adjustments by situation: sales, support, social, apology, announcements, internal.
3. Messaging architecture: one-line positioning statement, tagline options (10), elevator pitches (10-second, 30-second, 60-second), and 3 core messages with proof points.
4. Vocabulary: words to use, words to avoid, grammar and style rules (contractions, humor, emoji, formatting).
5. Five before-and-after rewrites of my current copy that show the voice in action.
6. A one-page cheat sheet for new team members and freelancers.`
},
{
  title: "SEO Keyword & Content Strategy",
  prompt: `ROLE: You are a senior SEO strategist.

CONTEXT:
- Website / business: [Website / Business]
- Products or services: [Products or Services]
- Audience: [Audience]
- Geographic focus: [Location]
- Current content and rankings (if known): [Current State]
- Competitors: [Competitors]
- Resources (writers, budget, tools): [Resources]

TASK:
1. Define 5 topic clusters aligned to how customers search and buy.
2. For each cluster give a pillar page concept and 6-10 supporting article ideas, the search intent of each (informational, commercial, transactional, navigational), a suggested title, and primary keyword idea.
3. Prioritize by business value and likely difficulty into a 6-month publishing roadmap.
4. Provide an on-page checklist, internal-linking plan, and schema suggestions.
5. Recommend technical and local SEO basics to verify (speed, mobile, Google Business Profile, reviews).
6. Suggest how to earn links ethically (resources, partnerships, original data).
7. Specify the metrics and reporting cadence.

RULES: You cannot see live search data. Say clearly that keyword volume, difficulty, and competitor rankings must be verified in a real SEO tool, and show me which exact checks to run.`
},
{
  title: "Press Release & Media Pitch",
  prompt: `ROLE: You are a PR professional who has placed stories in major outlets.

CONTEXT:
- Announcement: [Announcement]
- Company and one-line description: [Company Description]
- Date and location: [Date and Location]
- Key facts, numbers, and milestones: [Key Facts]
- Quote 1 (speaker and main point): [Quote Source and Point]
- Quote 2 (customer or partner): [Second Quote Source and Point]
- Media contact: [Media Contact]
- Target outlets or journalists: [Target Media]

TASK:
1. Write the press release in standard format: headline, subhead, dateline, inverted-pyramid body (who, what, when, where, why it matters), quotes, boilerplate, contact block, and "###". Keep to about 450 words and avoid hype words ("revolutionary", "world-class").
2. Give 3 alternate headlines.
3. Write a short pitch email (under 120 words) to a journalist that explains why their readers will care, with 3 subject line options.
4. Draft 5 social posts announcing the news.
5. Suggest a media list approach and a follow-up schedule.

RULES: Stick to facts I provided. Mark any claim that needs verification or legal review.`
},
{
  title: "Landing Page & Product Copy",
  prompt: `ROLE: You are a conversion copywriter.

CONTEXT:
- Product / service: [Product / Service]
- Ideal customer: [Ideal Customer]
- Biggest problem we solve: [Problem Solved]
- Key features and the benefit of each: [Features and Benefits]
- Proof available (testimonials, data, awards, guarantee): [Proof]
- Price / offer: [Price and Offer]
- Primary call to action: [Primary Call to Action]
- Objections people raise: [Objections]

TASK: Write full landing page copy with:
1. Headline and subheadline (5 options each), led by the customer's desired outcome.
2. Hero section with a bullet list of the top 3 benefits.
3. Problem section that shows we understand their situation.
4. Solution and how-it-works in 3 steps.
5. Feature-to-benefit blocks.
6. Social proof section, with placeholders where real proof is needed.
7. Objection-handling section and an FAQ (6-8 questions).
8. Guarantee / risk reversal and a closing call to action with two button text options.
9. Short versions: a product description (50 words), and a 2-line email-preview blurb.

RULES: Plain language, specific over vague, benefit over feature. No invented testimonials or numbers.`
},
{
  title: "Video Script (YouTube / Reels / Training)",
  prompt: `ROLE: You are a scriptwriter for short-form and long-form video.

CONTEXT:
- Topic: [Topic]
- Audience: [Audience]
- Platform and length: [Platform and Length]
- Goal (educate, sell, entertain, recruit): [Goal]
- Presenter style: [Presenter Style]
- Key points that must be covered: [Key Points]

TASK:
1. Offer 5 hook options for the first 3 seconds.
2. Write a full script in two columns: what is SAID and what is SHOWN (visuals, b-roll, on-screen text).
3. Structure: hook, promise, delivery of value in clear beats, a pattern interrupt around the midpoint, summary, and call to action.
4. Provide a shot list, caption text, title options, and a thumbnail idea.
5. Suggest 3 ways to repurpose this into other content.

RULES: Write the way people speak: short sentences, no jargon. Time the script to the target length.`
}
]);

addPrompts("Business", "Sales & Customer Success", [
{
  title: "Cold Outreach Sequence",
  prompt: `ROLE: You are a top-performing outbound sales rep who writes short, respectful, and relevant messages.

CONTEXT:
- What I sell: [Product / Service]
- Prospect role and company type: [Prospect Role and Company Type]
- The problem I solve for them: [Problem Solved]
- Specific proof or result I can cite: [Proof]
- Something specific I know about this prospect or company: [Personalization Detail]
- Channel (email, LinkedIn, both): [Channel]
- The single ask I want to make: [Ask]

TASK:
1. Write a first message (under 100 words): a relevant opener tied to their situation, one sentence on the value with proof, and a low-friction ask. 3 subject line options.
2. Write 3 follow-ups spaced 3, 5, and 7 business days apart. Each must add new value (an insight, a case study, a useful resource, a different angle), not just "checking in".
3. Write a polite break-up message.
4. Provide a LinkedIn connection note (under 300 characters) and a LinkedIn follow-up.
5. Explain the strategy behind the sequence and how to personalize quickly at scale.
6. List the metrics to watch and how to adjust if open or reply rates are low.

RULES: No flattery, buzzwords, or false urgency. Never pretend a prior relationship that does not exist.`
},
{
  title: "Discovery Call Guide & Questions",
  prompt: `ROLE: You are a consultative sales coach.

CONTEXT:
- Product / service: [Product / Service]
- Buyer role and industry: [Buyer Role and Industry]
- Typical deal size and sales cycle: [Deal Size and Cycle]
- Top reasons customers buy: [Why Customers Buy]
- Top reasons we lose: [Why We Lose]

TASK: Create a discovery call playbook:
1. A 30-second opening that sets an agenda and earns permission to ask questions.
2. 15 discovery questions grouped by theme: current situation, pain and its cost, impact on the business and people, past attempts, decision-makers and process, budget and timeline, success criteria.
3. Follow-up probes to go deeper on vague answers.
4. A framework for quantifying the cost of the problem so value can be tied to a number.
5. Responses to the 8 most likely objections, written as exact words to say.
6. How to summarize what I heard and propose a next step, with 3 closing options depending on the buyer's readiness.
7. A post-call notes template (pain, impact, stakeholders, timeline, next steps) and a follow-up email draft.

RULES: Keep the tone curious and helpful, not pushy. Emphasize listening more than pitching.`
},
{
  title: "Client Proposal Document",
  prompt: `ROLE: You are a senior consultant who writes winning proposals.

CONTEXT:
- Client: [Client Name]
- Their situation and goals (in their words if possible): [Client Situation]
- Our solution: [Our Solution]
- Scope of work (included and excluded): [Scope]
- Timeline and milestones: [Timeline]
- Pricing and payment terms: [Pricing]
- Why we are the right choice: [Differentiators]
- Relevant past results: [Past Results]

TASK: Draft the proposal with:
1. An executive summary that stands on its own (problem, our approach, outcome, investment).
2. Our understanding of their needs and objectives.
3. Proposed approach and methodology in phases.
4. Deliverables and acceptance criteria.
5. Timeline with milestones and client responsibilities.
6. Investment: present 2-3 options (good / better / best) with what is included, and the value tied to their goals.
7. Assumptions, exclusions, and change-order process.
8. About us and relevant case studies (placeholders if needed).
9. Terms summary and clear next steps with a decision date.

OUTPUT FORMAT: Professional, warm tone, scannable headings, no jargon. Mark any content that needs legal review.`
},
{
  title: "Objection Handling Coach",
  prompt: `ROLE: You are a seasoned sales trainer.

SITUATION:
- I am selling: [Product / Service] at [Price]
- The prospect said: "[Objection]"
- Context of the conversation so far: [Context]
- Their role and company: [Prospect Role and Company]

TASK:
1. Explain what this objection usually really means (budget, trust, timing, authority, priority, fear of change) and how to tell which one it is.
2. Give 3 response styles written as exact words I could say: empathetic, question-led, and evidence-based.
3. Provide a follow-up question that moves the conversation forward.
4. Show a short role-play dialogue of how the best case would go and how a poor reply would go, with commentary.
5. Describe when the objection is a legitimate "no" and how to leave the door open gracefully.
6. Suggest how to prevent this objection earlier in the sales process.`
},
{
  title: "Customer Complaint Response",
  prompt: `ROLE: You are a customer experience leader known for turning angry customers into loyal ones.

COMPLAINT RECEIVED:
"[Paste Complaint]"

CONTEXT:
- What actually happened (internal facts): [Internal Facts]
- What we can offer (refund, replacement, credit, other): [What We Can Offer]
- Company policy: [Policy]
- Channel (email, review reply, social, phone): [Channel]
- Customer history: [Customer History]

TASK:
1. Briefly diagnose the customer's emotional state and the real underlying need.
2. Write the response: sincere acknowledgment without excuses or blame, a clear explanation only if helpful, the specific action we are taking, a concrete resolution with timing, and an easy way to reach a real person.
3. Provide a short version (public reply or social) and a longer version (email).
4. Give a phone talking-points version.
5. Suggest how to log the issue and what process fix could prevent a repeat.

RULES: Do not admit legal liability beyond the facts. Avoid canned phrases like "we value your feedback". Keep it human.`
},
{
  title: "Customer Onboarding Plan",
  prompt: `ROLE: You are a customer success leader.

CONTEXT:
- Product / service: [Product / Service]
- Typical customer: [Customer Type]
- What "first value" looks like and the target time to reach it: [First Value and Target Time]
- Common reasons new customers struggle or churn: [Churn Reasons]
- Team available: [Team]

TASK: Build a complete onboarding program:
1. A 30-60-90 day plan with goals, milestones, and success measures for each stage.
2. Welcome email and a kickoff call agenda with talking points.
3. A checklist of tasks for us and for the customer, with owners and due dates.
4. A communication cadence and templates for day 1, day 7, day 30, and day 90 check-ins.
5. Leading indicators of health (usage, engagement, support tickets, sentiment) and early-warning signs of churn with a playbook to respond.
6. A plan to find upsell and referral moments naturally.
7. A short survey to measure onboarding satisfaction.`
},
{
  title: "Customer Feedback Survey Design",
  prompt: `ROLE: You are a survey designer and customer insights analyst.

CONTEXT:
- Product / service: [Product / Service]
- What I want to learn: [Research Goal]
- Who will receive it and how many: [Audience and Size]
- Delivery method (email, in-app, text, after purchase): [Delivery Method]

TASK:
1. Write the invitation message and thank-you message.
2. Create 10-12 questions in a logical order, mixing scale questions, multiple-choice, and open-ended ones; include an NPS question and a follow-up for promoters and detractors.
3. Show how to word each question neutrally (avoid leading, double-barreled, or jargon-filled questions) and explain why each question is there.
4. Recommend the timing, incentive, and length to maximize response rate.
5. Explain how to analyze the results: coding open-text themes, segmenting, finding drivers, and deciding what to act on.
6. Draft a "You said, we did" follow-up message.`
},
{
  title: "Pricing Strategy Review",
  prompt: `ROLE: You are a pricing strategist who has worked with both product and service businesses.

CONTEXT:
- Product / service: [Product / Service]
- Current price and packaging: [Current Price]
- Costs and current margin: [Costs and Margin]
- Competitor prices: [Competitor Prices]
- Customer type and what they value most: [Customer Value Drivers]
- Goal (grow volume, grow margin, premium positioning): [Pricing Goal]

TASK:
1. Evaluate the current pricing against cost-plus, competitor-based, and value-based approaches, with simple math.
2. Recommend a pricing model (flat, tiered, subscription, usage-based, retainer, bundle) and explain why it fits.
3. Design 3 tiers with names, features, and prices, including the "decoy" or anchoring logic.
4. Model the impact of a 5% and 10% price increase or decrease on volume and profit, showing the break-even volume change.
5. Recommend a low-risk way to test (grandfathering, new customers only, A/B on a landing page) and how to communicate a price change.
6. List the discount rules that protect margin.

RULES: Show formulas. Flag which assumptions (like price elasticity) I must validate with real customers.`
}
]);

addPrompts("Business", "Finance & Accounting", [
{
  title: "Monthly Financial Results Commentary",
  prompt: `ROLE: You are a CFO writing management commentary for the executive team and board. You are precise, plain-spoken, and numerate.

CONTEXT:
- Company / division: [Company / Division]
- Period: [Month / Quarter and Year]
- Audience: [Audience]
- Results (revenue, gross margin, operating expenses, EBITDA, cash, backlog, KPIs) versus budget and prior year:
[Paste Figures]
- Known one-time items or events: [One-Time Items]

TASK:
1. Write a one-paragraph headline summary: how we did, versus what, and the most important driver.
2. Break down revenue and margin variances into volume, price, mix, and timing where the data supports it.
3. Explain operating expense and EBITDA variances, separating one-time from run-rate items.
4. Cover cash flow, working capital, and liquidity, including any covenant or runway considerations.
5. Provide the outlook: updated forecast, risks, and opportunities, with quantified ranges.
6. List the 10 questions a CEO or board member will likely ask, each with a crisp answer drawn from the data provided.
7. Provide a short "so what / now what" list of decisions or actions.

OUTPUT FORMAT: Narrative sections with a small table of key figures.

RULES: Do not invent numbers. If data is missing, list exactly what you need. Calculate percentages and show the math for any figure you derive.`
},
{
  title: "Budget & Forecast Model Design",
  prompt: `ROLE: You are an FP&A director who builds driver-based models.

CONTEXT:
- Business: [Business]
- Horizon and granularity (for example 12 months by month, 3 years by quarter): [Horizon]
- Revenue drivers (customers, price, volume, churn, seasonality): [Revenue Drivers]
- Cost structure (fixed and variable costs, headcount plan): [Cost Structure]
- Starting balance sheet / cash: [Starting Cash]
- Planned investments and financing: [Investments and Financing]
- Key assumptions I already have: [Assumptions]

TASK:
1. Design the model structure tab by tab: assumptions, revenue build, COGS, headcount and payroll, operating expenses, capex and depreciation, working capital, income statement, balance sheet, cash flow, and scenarios.
2. For each tab describe the rows, the drivers, and the formulas in plain English plus Excel formula patterns.
3. Recommend base, upside, and downside scenarios with the specific driver changes for each.
4. Identify the 5 assumptions that move the result most, and describe a sensitivity table to show them.
5. Provide checks to include (balance sheet balances, cash ties, sign checks).
6. Describe how to present results to a lender or board in 5 charts.
7. Provide a process for monthly actual-versus-forecast updating.

OUTPUT FORMAT: Structured headings and tables; keep formulas clear for a non-modeler to follow.`
},
{
  title: "Variance Analysis Explainer",
  prompt: `ROLE: You are a financial analyst skilled at explaining numbers to non-financial managers.

DATA:
[Paste Data]
Comparison basis (budget, forecast, prior year): [Comparison Basis]
Business context and known events: [Business Context]

TASK:
1. Calculate the dollar and percent variance for each line, and rank by materiality.
2. For each material variance, give the most likely drivers (volume, price, mix, timing, one-time, error, accounting change) and rate your confidence.
3. For each, list the specific question I should ask the business owner to confirm the cause, and what supporting data to request.
4. Say whether the variance is favorable or unfavorable, whether it is likely to recur, and the effect on the full-year forecast.
5. Write a short management summary (under 200 words) and a detailed version for the finance file.
6. Suggest follow-up actions or process changes.

RULES: Show the math. Do not assert causes as facts when you only have hypotheses; label them.`
},
{
  title: "13-Week Cash Flow Plan",
  prompt: `ROLE: You are a turnaround and treasury advisor focused on liquidity.

CONTEXT:
- Business and industry: [Business and Industry]
- Current cash and available credit: [Cash and Credit]
- Receivables (aging if known): [Receivables]
- Payables and upcoming large payments: [Payables]
- Payroll and fixed obligations: [Payroll and Fixed Costs]
- Inventory and seasonality: [Inventory and Seasonality]
- Biggest cash problem right now: [Cash Problem]

TASK:
1. Design a 13-week direct cash flow forecast layout (receipts by source, disbursements by category, net, beginning and ending cash) and explain how to populate it weekly from my data.
2. Identify the major levers to improve cash in 30 days: accelerate collections, adjust payment terms, stage payables ethically, reduce inventory, trim discretionary costs, financing options. Estimate the likely dollar range of each.
3. Provide scripts for talking with customers about overdue invoices and with vendors about terms.
4. Describe the financing options (line of credit, factoring, equipment loan, vendor financing) with costs, risks, and when each makes sense.
5. Define weekly monitoring metrics and trigger points that require action.
6. Give me a prioritized action list for the next 30 days.

RULES: Be practical and realistic. Note any legal or covenant implications to confirm with my accountant or lender.`
},
{
  title: "Financial Health Check & Ratio Analysis",
  prompt: `ROLE: You are a CPA-level financial analyst performing a diagnostic review.

DATA:
- Company and industry: [Company and Industry]
- Income statement, balance sheet, and cash flow figures (current and prior periods):
[Paste Financial Statements]

TASK:
1. Calculate and interpret key ratios: liquidity (current, quick), leverage (debt to equity, interest coverage), profitability (gross, operating, net margin, ROA, ROE), efficiency (DSO, DIO, DPO, asset turnover), and cash conversion cycle. Show formulas and inputs.
2. Analyze trends year over year and common-size statements.
3. Compare to typical benchmarks for the industry, stating clearly where benchmarks are uncertain and should be verified.
4. Identify red flags (quality of earnings, rising receivables, thin liquidity, covenant risk) and strengths.
5. Provide a plain-English summary for a non-financial owner and a more technical section for the finance team.
6. Recommend the top 5 improvement actions with estimated impact.`
},
{
  title: "Month-End Close Checklist & Calendar",
  prompt: `ROLE: You are a controller who has run fast, clean closes.

CONTEXT:
- Company size and type: [Size and Type]
- Accounting system and other tools: [Accounting System]
- Current close length and pain points: [Current Close Issues]
- Reporting deadlines: [Deadlines]
- Special areas (inventory, revenue recognition, multiple entities, foreign currency): [Special Areas]

TASK:
1. Build a day-by-day close calendar (Day -2 through Day [Close Day]) with tasks, owner roles, deliverables, and dependencies.
2. Provide detailed checklists by area: cash and bank reconciliations, AR, AP and accruals, payroll, inventory and COGS, fixed assets and depreciation, prepaids and deferrals, debt and equity, revenue recognition, intercompany, taxes, balance sheet reconciliations, flux analysis, review and sign-off.
3. Include the typical errors and review checks for each area.
4. Recommend a standard set of close reports and a flux analysis threshold approach.
5. Identify the 5 changes (cutoffs, automation, estimates, standard journal entries, preliminary closes) most likely to shorten the close.
6. Provide a close status tracker layout.`
},
{
  title: "Internal Controls Review & Control Matrix",
  prompt: `ROLE: You are an internal audit and controls specialist.

CONTEXT:
- Company size and industry: [Size and Industry]
- Process under review (purchasing, payroll, expense reimbursement, revenue, cash handling, inventory): [Process]
- How it works today, step by step: [Current Process]
- People and systems involved: [People and Systems]
- Past incidents or concerns: [Past Issues]

TASK:
1. Map the process and identify key risks at each step (errors, fraud, unauthorized access, misstatement).
2. Evaluate segregation of duties, approval limits, reconciliations, system access, and documentation.
3. List control gaps ranked by severity (high, medium, low) with a realistic fraud scenario for each high-risk gap.
4. Recommend cost-appropriate fixes, including compensating controls if the team is too small to separate duties.
5. Produce a control matrix: risk, control, type (preventive or detective), owner, frequency, evidence.
6. Outline a simple testing approach and an annual review calendar.

RULES: Keep recommendations proportional to company size. Note that findings should be validated with auditors or professional advisors.`
},
{
  title: "Investor / Lender Financial Package",
  prompt: `ROLE: You are a CFO preparing a financing request.

CONTEXT:
- Audience (bank, SBA lender, investor, board): [Audience]
- Purpose and amount sought: [Purpose and Amount]
- Business summary: [Business Summary]
- Key financials (revenue, margins, EBITDA, cash, debt, growth): [Key Financials]
- Use of funds: [Use of Funds]
- Collateral or guarantees: [Collateral]
- Repayment source / exit logic: [Repayment Source]

TASK:
1. Write a one-page financial summary telling the story behind the numbers.
2. Create a key metrics table and a trend narrative.
3. Show debt service coverage or return logic with the formulas and my numbers.
4. Present a use-of-funds table and a milestones timeline.
5. Provide a risk section with mitigations and downside scenario results.
6. List the documents I should assemble (statements, tax returns, forecasts, schedules, contracts).
7. Prepare the 15 toughest questions this audience will ask with strong, honest answers.
8. Give me presentation tips and red flags to fix before submitting.

RULES: Do not make up figures. Show what is missing.`
},
{
  title: "Cost Reduction Opportunity Finder",
  prompt: `ROLE: You are a cost-optimization consultant.

CONTEXT:
- Company / department: [Company / Department]
- Annual spend and main categories: [Spend Categories]
- Savings target: [Target]
- Constraints (service levels, contracts, morale, growth plans): [Constraints]
- What has already been tried: [Past Efforts]

TASK:
1. Triage spend categories by size and addressability (Pareto view).
2. For each major category list specific levers: renegotiate, consolidate vendors, change specification, reduce usage, automate, insource or outsource, delay, eliminate.
3. Estimate a realistic savings range, one-time cost to achieve, time to realize, effort, and risk for each lever.
4. Identify quick wins (under 30 days), medium-term moves (3-6 months), and structural changes.
5. Flag where cuts could harm revenue, quality, safety, or morale, and suggest alternatives.
6. Provide vendor negotiation scripts and a request-for-quote outline.
7. Build a tracking template for committed versus realized savings, with an owner for each item.`
},
{
  title: "Accounting Treatment Research Memo",
  prompt: `ROLE: You are a technical accounting advisor with deep knowledge of US GAAP (and IFRS where noted).

QUESTION:
- Transaction or issue: [Transaction or Issue]
- Facts and contract terms: [Facts and Terms]
- Entity type and reporting framework: [Entity and Framework]
- Materiality context: [Materiality]

TASK: Draft an accounting memo with:
1. Issue statement and summary of facts.
2. Relevant guidance areas (ASC topics or IFRS standards) to consult, with the reasoning of how each applies.
3. Analysis of alternative treatments, including the one you believe is most supportable and why.
4. Proposed journal entries with account names and illustrative amounts.
5. Disclosure considerations and tax implications to confirm.
6. Open questions and the facts that could change the conclusion.

RULES: This is a drafting aid, not authoritative guidance. Cite standards by topic name only, and remind me to verify against the current codification and consult my auditors.`
}
]);
