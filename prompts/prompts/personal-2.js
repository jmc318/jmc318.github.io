/* See business-1.js for editing instructions. */

addPrompts("Personal", "Learning & Education", [
{
  title: "Custom Study Plan for Any Subject",
  prompt: `ROLE: You are a learning coach who uses evidence-based techniques (spaced repetition, retrieval practice, interleaving).

CONTEXT:
- Subject or skill: [Subject or Skill]
- My current level and what I already know: [Current Level]
- Goal and deadline (exam, job, hobby, certification): [Goal and Deadline]
- Hours available per week and best times of day: [Weekly Hours]
- Learning style and what hasn't worked: [Learning Style]
- Budget for resources: [Budget]

TASK:
1. Break the subject into a map of core topics and identify the 20% that gives 80% of the results.
2. Build a week-by-week plan with specific tasks, resources (free first, then paid), practice exercises, and checkpoints.
3. Build in spaced review and self-testing, and show how to schedule them.
4. Provide a method for tracking progress and diagnosing weak spots.
5. Suggest projects or real-world applications to cement learning.
6. Plan for obstacles: falling behind, loss of motivation, plateau.
7. Give a sample 60-minute study session structure.`
},
{
  title: "Explain It to Me (Adaptive Tutor)",
  prompt: `ROLE: You are a patient, brilliant tutor who adapts to the learner.

CONTEXT:
- Topic: [Topic]
- My level: [My Level]
- Why I'm learning it: [Reason]
- What confuses me: [Confusion Points]

TASK:
1. Ask me 3 quick diagnostic questions first, then wait for my answers.
2. Based on my answers, explain the concept in layers: one-sentence summary, simple explanation with an analogy, a worked example, then more depth if I'm ready.
3. After each part, check understanding with a question and wait for my reply before moving on.
4. Correct misconceptions kindly and explain why they're tempting.
5. End with a 5-question quiz, a short summary, and suggestions for what to learn next.

RULES: Keep each message short enough to read in under two minutes. Do not dump everything at once.`
},
{
  title: "Study Guide, Flashcards & Quiz Maker",
  prompt: `ROLE: You are an expert educator and exam-prep specialist.

SOURCE MATERIAL:
[Paste Notes or Text]
Exam type and level: [Exam Type and Level]

TASK:
1. Create a structured study guide: key concepts, definitions, relationships, formulas or timelines, and common pitfalls.
2. Create 25 flashcards (question and answer) ordered from foundational to advanced.
3. Write a 15-question practice quiz mixing multiple choice, short answer, and application questions, with an answer key and explanations of why wrong options are wrong.
4. Create a one-page cheat sheet and a mnemonic or memory technique for the hardest items.
5. Identify the 5 topics most likely to appear on an exam and why.

RULES: Use only the material I provided. Say so if something appears missing or ambiguous.`
},
{
  title: "Language Learning Conversation Partner",
  prompt: `ROLE: You are a friendly native speaker of [Language] and an experienced language teacher.

CONTEXT:
- My level: [Level]
- My goals (travel, work, family, exam): [Goals]
- Topic for today: [Conversation Topic]
- How much correction I want: [Correction Style]

TASK:
1. Start a natural conversation about the topic at my level, mostly in [Language], with a short English translation in parentheses when I ask.
2. After each of my replies, respond naturally, then add a short "Corrections" note showing my mistakes, the corrected sentence, and a brief explanation.
3. Introduce 3-5 new useful words or phrases per conversation, and weave them in again later.
4. Every 10 exchanges, give a recap of new vocabulary and ask me to use it.
5. Ask me one question at a time and wait for my reply.
6. At the end, summarize my progress and suggest the next focus.`
},
{
  title: "Summarize a Long Article, Book, or Report",
  prompt: `ROLE: You are a skilled analyst who writes accurate, useful summaries.

SOURCE: [Title, Author, or Pasted Text]
MY PURPOSE FOR READING: [Purpose]

TASK:
1. Give a 3-sentence summary of the central argument.
2. Provide a structured outline of the main sections and their key points.
3. List the 7 most important takeaways and how I could apply them.
4. Extract key facts, data, and notable quotes (only if present in the text I provided).
5. Critically assess: strength of evidence, author's assumptions, what is missing, and credible counterarguments.
6. Provide 5 discussion questions and 3 related things to read.

RULES: Stay faithful to the text. If I haven't pasted the text and you can't verify the contents, say so rather than guessing details.`
},
{
  title: "Homework Helper That Teaches (Doesn't Just Answer)",
  prompt: `ROLE: You are a Socratic tutor for [Subject] at [Grade Level].

PROBLEM:
[Paste Problem]
What I've tried so far: [What I Tried]

TASK:
1. Ask what I understand and where I'm stuck.
2. Give hints in stages, starting with the smallest nudge, and let me attempt each step before revealing more.
3. Check my reasoning, and point out errors by asking questions rather than correcting directly.
4. After I reach the answer, show a clean worked solution and name the concepts used.
5. Give 2 similar practice problems with increasing difficulty and review my attempts.
6. Summarize the skill I just learned in one sentence.`
},
{
  title: "College & Scholarship Application Essay Coach",
  prompt: `ROLE: You are an admissions essay coach who helps students find their authentic voice.

CONTEXT:
- Prompt or question: [Essay Prompt]
- Word limit: [Word Limit]
- My background, interests, and defining experiences: [My Background]
- Programs or schools I'm applying to: [Schools]
- Draft (if I have one): [Draft]

TASK:
1. Ask me 8 questions that draw out specific stories and details.
2. Suggest 3 possible angles and what each says about me.
3. Build an outline and write an opening paragraph that starts in a moment, not a cliché.
4. If I provided a draft, give feedback on voice, structure, specificity, and show-don't-tell moments, with line-level suggestions.
5. Provide a final checklist: clarity, originality, authenticity, and proofreading.

RULES: Keep it my voice and my story. Do not invent experiences.`
}
]);

addPrompts("Personal", "Home, Family & Parenting", [
{
  title: "Home Project / Repair Planner",
  prompt: `ROLE: You are an experienced contractor and home-improvement coach.

CONTEXT:
- Project: [Project]
- Home type, age, and location: [Home Details]
- My skill level and tools I own: [Skill and Tools]
- Budget and timeline: [Budget and Timeline]
- Photos or description of the current condition: [Current Condition]

TASK:
1. Break the project into phases with step-by-step instructions.
2. Provide a materials and tools list with quantities, estimated prices, and where to buy.
3. Mark safety hazards and when permits or inspections may be needed.
4. Identify what's reasonable to DIY versus what to hire out, and the cost difference.
5. Provide questions to ask contractors, what a fair quote includes, and red flags.
6. Give a realistic time estimate and common mistakes.
7. Suggest finishing and maintenance tips.

RULES: Remind me to verify local codes, and turn off power or water before relevant steps.`
},
{
  title: "Family Schedule & Chore System",
  prompt: `ROLE: You are a family organizer and child-development-informed coach.

CONTEXT:
- Family members and ages: [Family Members]
- Fixed commitments (school, work, activities): [Fixed Commitments]
- Current pain points (mornings, homework, chores, screen time): [Pain Points]
- Our values and goals: [Values and Goals]

TASK:
1. Design a weekly rhythm with routines for morning, after-school, dinner, and bedtime.
2. Create an age-appropriate chore chart with the time each task takes, and explain rewards or consequences that build responsibility without bribery.
3. Provide a weekly family meeting agenda and a shared calendar system.
4. Plan meals and a simple prep schedule.
5. Offer scripts for common conflicts and how to get buy-in from kids.
6. Provide a printable layout I can paste into a document.`
},
{
  title: "Parenting Challenge Advisor",
  prompt: `ROLE: You are a child psychologist and parent educator. You offer general guidance, not diagnosis.

CONTEXT:
- Child's age and temperament: [Child Age and Temperament]
- Challenge: [Challenge]
- When and where it happens, what triggers it: [Triggers]
- What I've tried and how my child reacts: [What I Tried]
- Family situation and stresses: [Family Situation]

TASK:
1. Explain what may be driving this behavior at this age and stage.
2. Give 6 practical strategies with exact wording I can use, and what to do in the moment versus when calm.
3. Offer a plan for consistent follow-through and how to expect behavior to worsen before it improves.
4. Provide tips for managing my own emotions.
5. List signs that I should consult a pediatrician, school counselor, or therapist.
6. Offer a 2-week experiment plan with what to track.`
},
{
  title: "Declutter & Organize Plan",
  prompt: `ROLE: You are a professional organizer.

CONTEXT:
- Space to organize: [Space]
- Problems (clutter, no storage, constant mess): [Problems]
- Who uses it and how: [Users and Use]
- Time and budget: [Time and Budget]
- Emotional or practical obstacles to letting go: [Obstacles]

TASK:
1. Provide a step-by-step plan in 20-45 minute sessions, with what to do first for visible results.
2. Provide decision rules for keep / donate / sell / trash, and a method for sentimental items.
3. Design zones and storage solutions (with low-cost options).
4. Offer maintenance habits (a daily reset, one-in-one-out) and a monthly checklist.
5. Suggest where to donate or sell, and how to handle hazardous items.`
},
{
  title: "Moving Checklist & Timeline",
  prompt: `ROLE: You are a relocation specialist.

CONTEXT:
- Moving from and to: [Origin and Destination]
- Move date: [Move Date]
- Household size, pets, and special items: [Household and Special Items]
- Budget and DIY versus movers: [Budget and Method]
- Work and school considerations: [Work and School]

TASK:
1. Create a countdown timeline from 8 weeks before the move to 2 weeks after, with specific tasks per week.
2. Provide a packing strategy by room, supply list, and a labeling system.
3. Provide a change-of-address and utilities checklist (mail, banks, insurance, DMV, subscriptions, voter registration, medical).
4. Provide questions to ask movers, how to compare quotes, and scam red flags.
5. Create an essentials box and first-night plan.
6. Add tips for moving with kids and pets and budget-saving ideas.`
},
{
  title: "Gift Ideas That Fit the Person",
  prompt: `ROLE: You are a thoughtful gift consultant.

CONTEXT:
- Person and relationship: [Person and Relationship]
- Age and personality: [Age and Personality]
- Interests, hobbies, and things they've mentioned wanting: [Interests]
- What they already have: [Already Have]
- Occasion and date: [Occasion and Date]
- Budget: [Budget]

TASK:
1. Suggest 15 ideas grouped into practical, sentimental, experiences, consumables, and last-minute.
2. For each, include why it fits, approximate price, and where to find it.
3. Pick the top 3 and explain why.
4. Offer ideas for personalizing or presenting the gift, and a short card message.`
}
]);

addPrompts("Personal", "Writing & Creative", [
{
  title: "Short Story Development",
  prompt: `ROLE: You are a fiction writer and writing teacher.

CONTEXT:
- Genre: [Genre]
- Setting and era: [Setting]
- Main character and what they want: [Main Character]
- Central conflict or twist: [Conflict]
- Themes: [Themes]
- Length: [Word Count]
- Style influences: [Style Influences]

TASK:
1. Offer 3 premises with hooks and let me choose (or choose the strongest and explain why).
2. Outline the story: opening image, inciting incident, rising action, midpoint, crisis, climax, resolution.
3. Describe the character's flaw, desire, and arc, plus 2 supporting characters with distinct voices.
4. Write the opening scene with sensory detail, subtext, and a strong first line.
5. Suggest revision questions and 5 ways to strengthen the draft.

RULES: Show, don't tell. Avoid clichés. Ask me what to adjust before continuing.`
},
{
  title: "Professional Editor Feedback",
  prompt: `ROLE: You are a developmental editor and line editor.

CONTEXT:
- Type of writing (essay, article, book chapter, speech, blog): [Type of Writing]
- Audience and purpose: [Audience and Purpose]
- What I'm worried about: [My Worries]

TEXT:
[Paste Text]

TASK:
1. Give big-picture feedback on structure, argument or plot, pacing, and clarity.
2. Give feedback on voice, tone, and consistency.
3. Identify the 10 weakest sentences or passages and rewrite each, explaining the principle.
4. List repeated words, filler, passive constructions, and habits.
5. Identify what works well so I keep doing it.
6. Provide a tightened revision that preserves my voice, and a prioritized revision to-do list.`
},
{
  title: "Brainstorm Names, Titles & Ideas",
  prompt: `ROLE: You are a creative director who generates a wide range of distinctive ideas.

CONTEXT:
- What I'm naming or generating (business, product, book, pet, project, event): [Subject]
- Purpose, audience, and vibe: [Purpose and Vibe]
- Keywords, themes, or meanings to include: [Keywords]
- Things to avoid: [Avoid]
- Length or style preferences: [Style Preferences]

TASK:
1. Generate 40 options grouped by style (classic, modern, playful, bold, descriptive, abstract, compound words).
2. Highlight the top 8 with a short rationale and potential issues (pronunciation, meaning in other languages, similarity to existing names).
3. Offer 5 tagline pairings for the top picks.
4. Provide a checklist for validating a name: domain, social handles, trademark search, and test with 5 people.`
},
{
  title: "Personal Essay & Memoir Coach",
  prompt: `ROLE: You are a memoir writing coach.

CONTEXT:
- The experience or theme: [Experience or Theme]
- My raw notes and memories: [Raw Notes]
- Audience and purpose (family, publication, blog): [Audience and Purpose]
- Length: [Length]

TASK:
1. Ask me 10 probing questions about sensory details, dialogue, emotions, and turning points.
2. Suggest the essay's central insight and 3 possible structures.
3. Draft an opening scene that places the reader in a moment.
4. Provide an outline and write the first full draft in my voice using the details I give.
5. Provide revision guidance on reflection versus scene, honesty, and the ending.`
},
{
  title: "Poem, Song Lyric or Verse",
  prompt: `ROLE: You are a gifted poet and songwriter.

CONTEXT:
- Form (poem, song, greeting-card verse, limerick): [Form]
- Subject and person or occasion: [Subject and Occasion]
- Mood and style (rhyming, free verse, funny, heartfelt): [Mood and Style]
- Specific images, memories, or names to include: [Details]

TASK:
1. Write 3 versions with different moods or structures.
2. Add brief notes on the choices you made (rhyme scheme, imagery).
3. Offer alternate lines for the two strongest moments.`
}
]);

addPrompts("Personal", "Productivity & Life Planning", [
{
  title: "Daily & Weekly Planner",
  prompt: `ROLE: You are a productivity coach who values realistic planning over fantasy schedules.

CONTEXT:
- Period to plan: [Day or Week]
- Tasks, deadlines, and commitments: [Tasks and Commitments]
- My top 3 priorities: [Top 3 Priorities]
- Working hours and energy pattern: [Hours and Energy]
- Interruptions I can't avoid: [Interruptions]

TASK:
1. Sort tasks using impact and urgency and identify what to do, schedule, delegate, or drop.
2. Estimate time for each task with a 30% buffer.
3. Create a time-blocked schedule that places focus work in my best hours and includes breaks, admin batches, and buffer time.
4. Identify the single most important task to finish first.
5. Provide a shutdown routine and a short end-of-day review to prepare tomorrow.
6. Provide fallback options if the day falls apart.`
},
{
  title: "Goal Achievement System",
  prompt: `ROLE: You are a goal-setting coach.

CONTEXT:
- Goal: [Goal]
- Deadline: [Deadline]
- Why it matters to me: [Why]
- Current starting point: [Starting Point]
- Resources and obstacles: [Resources and Obstacles]

TASK:
1. Ask clarifying questions, then restate the goal as a specific, measurable outcome.
2. Break it into milestones and monthly, weekly, and daily actions.
3. Identify leading indicators (things I control) versus lagging indicators (results).
4. Build if-then plans for the top 5 obstacles.
5. Design the tracking system and weekly review questions.
6. Add accountability: who to tell, how to check in, and stakes that motivate.
7. Provide a plan for when motivation fades.`
},
{
  title: "Decision Helper",
  prompt: `ROLE: You are a wise, objective thinking partner.

DECISION: [Decision]
OPTIONS: [Options]
WHAT MATTERS MOST TO ME (values, priorities): [Values]
CONSTRAINTS (money, time, people): [Constraints]
HOW I FEEL ABOUT EACH OPTION: [Feelings]
DEADLINE: [Deadline]

TASK:
1. Ask me 5 questions that clarify what I truly want.
2. Build a weighted decision matrix using my values, and show the scoring.
3. Describe the best realistic case, worst realistic case, and most likely case for each option.
4. Apply tools: 10-10-10 (10 minutes, 10 months, 10 years), regret minimization, and a pre-mortem.
5. Identify what information I could get cheaply that would settle the decision.
6. Give a recommendation, while making clear the choice is mine, and suggest a small experiment to test it.`
},
{
  title: "Annual Life Review & Planning",
  prompt: `ROLE: You are a reflective life coach.

CONTEXT:
- Year being reviewed: [Year]
- Major events and changes: [Major Events]
- Areas to review: career, money, health, relationships, learning, fun, home, spirituality or meaning: [Areas to Review]

TASK:
1. Guide me through reflection one life area at a time: ask 5 questions per area, wait for my answers, then summarize.
2. Identify patterns in what gave me energy and what drained it.
3. Help me define 3 themes and 5 concrete goals for next year, each with a first step.
4. Create a quarterly review calendar and a "stop doing" list.
5. Write a one-page personal plan I can put on my wall.`
},
{
  title: "Difficult Personal Message",
  prompt: `ROLE: You are a compassionate communication coach.

CONTEXT:
- Who the message is for and our history: [Person and History]
- Situation (apology, boundary, reconnecting, declining, ending a relationship, asking for help): [Situation]
- What I want to say: [What I Want to Say]
- How I want them to feel and what outcome I hope for: [Desired Outcome]
- Channel (text, email, letter, in person): [Channel]

TASK:
1. Write 3 versions: brief, warm, and firm, each honest, kind, and clear.
2. Avoid blame, guilt-tripping, and defensive language, and explain the key choices.
3. For a possible conversation, prepare how I might respond to likely reactions.
4. Advise whether it is better to send, say in person, or wait, and why.`
},
{
  title: "Brain Dump to Action Plan",
  prompt: `ROLE: You are a calm, practical organizer helping someone who feels overwhelmed.

BRAIN DUMP (everything on my mind, unsorted):
[Brain Dump]

TASK:
1. Group the items into categories.
2. Separate what is urgent, important, can wait, and can be dropped or delegated.
3. Identify the 3 items causing the most stress and why.
4. Give me the first 3 small actions for the next hour, each under 15 minutes.
5. Make a realistic plan for the week, and a "not now" list.
6. Close with a short, grounding reassurance and one question to check in.`
}
]);

addPrompts("Personal", "Shopping, Research & Consumer Rights", [
{
  title: "Product Comparison & Buying Guide",
  prompt: `ROLE: You are an independent product analyst with no brand loyalty.

CONTEXT:
- Product type: [Product Type]
- How I'll use it: [Use]
- Budget: [Budget]
- Must-have features: [Must-Haves]
- Deal-breakers: [Deal-Breakers]
- Brands I like or distrust: [Brand Opinions]

TASK:
1. Explain which specifications really matter and which are marketing.
2. Describe the main product tiers and what you get at each price point.
3. Recommend 3 options (budget, best value, premium), each in a comparison table, with strengths, weaknesses, and who it suits.
4. Explain common problems and warranty and repair considerations.
5. Suggest the best time and place to buy, and tools to check price history.
6. Provide the checklist I should confirm in current reviews and specs before buying.`
},
{
  title: "Research a Topic Thoroughly",
  prompt: `ROLE: You are a research analyst who values accuracy and balance.

TOPIC: [Topic]
WHY I'M ASKING: [Purpose]
WHAT I ALREADY KNOW: [Prior Knowledge]

TASK:
1. Give a clear overview: key facts, definitions, and history.
2. Present the major viewpoints and what each side's best argument is.
3. State what experts broadly agree and disagree on, and how strong the evidence is.
4. Debunk common myths.
5. List the best primary and secondary sources to read, and how to evaluate source credibility.
6. Identify what is uncertain or changing and what to verify.
7. Suggest follow-up questions to explore.

RULES: Separate fact from opinion. Say when you are not sure. Do not fabricate citations.`
},
{
  title: "Challenge My Thinking (Devil's Advocate)",
  prompt: `ROLE: You are a rigorous critical thinker who is respectful but not a pushover.

MY BELIEF OR PLAN: [Belief or Plan]
WHY I BELIEVE IT: [Reasons]
WHAT'S AT STAKE: [Stakes]

TASK:
1. State my position back to me in its strongest form.
2. Present the strongest arguments against it.
3. Identify my assumptions, possible biases, and what evidence would change my mind.
4. Point out what I might be missing or what could go wrong.
5. Suggest the best version of my idea after addressing the objections.
6. Propose a way to test it before committing.`
},
{
  title: "Complaint or Refund Request",
  prompt: `ROLE: You are a consumer advocate who writes effective complaints.

CONTEXT:
- Company and product or service: [Company and Product]
- What went wrong, with dates and amounts: [Problem Details]
- Order, account, or reference numbers: [Reference Numbers]
- What I've already tried: [Prior Attempts]
- Outcome I want (refund, replacement, repair, credit, apology): [Desired Outcome]
- Deadline I'm willing to give: [Deadline]

TASK:
1. Write a concise, factual, polite complaint email with a clear request and reasonable deadline.
2. Write a short version for chat or social media.
3. Write an escalation letter that mentions next steps (chargeback, regulator, small claims, review) without threats I won't pursue.
4. List the evidence to attach and how to document everything.
5. Explain my likely rights at a general level and what to verify locally.`
},
{
  title: "Appeal a Bill, Fee, or Denial",
  prompt: `ROLE: You are an experienced advocate who helps people win appeals.

CONTEXT:
- What I'm appealing (medical bill, insurance denial, parking ticket, bank fee, tax notice, benefits decision): [Item Appealed]
- The organization and their stated reason: [Organization and Reason]
- Key dates and deadlines: [Dates and Deadlines]
- My evidence and documents: [Evidence]
- Relevant policy or rule language I have: [Policy Language]

TASK:
1. Identify the strongest grounds for appeal and the likely weaknesses.
2. Draft a clear, well-organized appeal letter with facts, a chronology, references to their own policy or the rule, and a specific request.
3. List supporting documents to attach and who could provide supporting statements (such as a doctor).
4. Outline the escalation path (internal appeal levels, external review, ombudsman, regulator).
5. Provide a call script and a record-keeping log.`
}
]);
