/* See business-1.js for editing instructions. */

addPrompts("Any Use", "Prompt Power Tools", [
{
  title: "Improve My Prompt",
  prompt: `ROLE: You are an expert prompt engineer who has optimized thousands of prompts for large language models.

MY DRAFT PROMPT:
"""
[Paste Your Prompt]
"""
WHAT I WANT THE AI TO PRODUCE: [Desired Output]
WHO WILL USE THE RESULT: [Audience]

TASK:
1. Diagnose the draft: what is ambiguous, missing, contradictory, or likely to cause generic output.
2. Ask me up to 7 questions whose answers would most improve the result. Wait for my replies if the answers are critical; otherwise proceed with stated assumptions.
3. Rewrite the prompt with: a clear role, context, a precise task broken into steps, constraints, desired output format, quality criteria, and instructions for handling uncertainty.
4. Show a side-by-side of what changed and why.
5. Offer a shorter version for quick use and a more detailed version for important work.
6. Suggest follow-up prompts I can use to refine the AI's first answer.

OUTPUT FORMAT: Put the final improved prompt in a clearly separated block I can copy.`
},
{
  title: "Interview Me, Then Do the Task",
  prompt: `I want your help with: [Task].

Before producing anything, interview me. Ask questions one at a time (no more than [Number of Questions]) to understand: the goal and why it matters, the audience, constraints and must-includes, examples or styles I like, what has been tried before, and what a great result looks like. Make each question build on my previous answer, and skip anything I've already told you.

When you have enough, summarize your understanding in a short brief and ask me to confirm or correct it. Then produce the deliverable, followed by 3 ways it could be improved and 2 questions you'd want answered to take it further.`
},
{
  title: "Set a Role, Standards & Working Style",
  prompt: `For this conversation, act as [Role] with [Years of Experience] years of experience in [Field]. Your audience is me, a [My Background].

HOW I WANT YOU TO WORK:
- Style: [Concise / Detailed / Plain language / Direct]
- Challenge my assumptions when you think I'm wrong, and explain why.
- If you are unsure or lack current information, say so plainly rather than guessing.
- Ask a clarifying question if something is ambiguous or if the answer depends on details I haven't given.
- Show your reasoning for recommendations and calculations.
- Give a short answer first, then offer to expand.
- Keep answers under [Length] unless I ask for more.
- Format: [Preferred Format, such as headings, tables, bullet points]

Confirm you understand by summarizing these instructions in two sentences, then ask me what we're working on.`
},
{
  title: "Turn Messy Notes Into a Polished Document",
  prompt: `ROLE: You are a professional editor and business writer.

INPUT:
Document type wanted: [Memo / Report / Outline / Email / Checklist / Proposal]
Audience: [Audience]
Purpose and desired reaction: [Purpose]
Rough notes:
[Paste Notes]

TASK:
1. Identify the main message and structure the content logically with clear headings.
2. Keep all of my facts and decisions. Remove repetition, tighten sentences, fix grammar, and use consistent terminology.
3. Where my notes are unclear, incomplete, or contradictory, list them as questions at the end rather than inventing details.
4. Provide the final document and an executive summary of 3 bullets.
5. Suggest what additional information would make it stronger.`
},
{
  title: "Compare Options in a Decision Table",
  prompt: `ROLE: You are an objective analyst.

CONTEXT:
- Options: [Option A], [Option B], [Option C]
- Purpose of the decision: [Purpose]
- Criteria that matter, in order of importance: [Criteria]
- Constraints: [Constraints]

TASK:
1. Build a table with a row per criterion and a column per option, with concise evidence in each cell.
2. Apply weights and a score from 1-5 per cell, show the total, and explain the scoring.
3. Describe each option's biggest risk and who it suits best.
4. Give a recommendation, the main tradeoff, and what would change it.
5. Point out information gaps I should fill before deciding.`
},
{
  title: "Create a Reusable Checklist or Template",
  prompt: `ROLE: You are an operations expert who designs tools people actually use.

CONTEXT:
- Task or situation: [Task or Situation]
- Who will use it and how often: [User and Frequency]
- Level of detail: [Quick / Thorough]
- Common mistakes or things that get forgotten: [Common Mistakes]

TASK:
1. Create the checklist or template in logical order, with checkboxes or fill-in fields and clear action wording.
2. Group items into phases (before, during, after) and mark critical items.
3. Add short notes explaining why items matter where it isn't obvious.
4. Keep it within [Length].
5. Add a "lessons learned" section to update after each use.`
},
{
  title: "Pre-Mortem: Find the Holes in My Plan",
  prompt: `ROLE: You are a skeptical, constructive risk analyst.

MY PLAN:
[Describe Plan]
GOAL AND DEADLINE: [Goal and Deadline]
RESOURCES: [Resources]

TASK:
1. Imagine it is [Time Horizon] from now and the plan has failed badly. Write the 12 most plausible reasons it failed, across people, process, money, timing, market, and assumptions.
2. Rank by likelihood and impact.
3. For each of the top 6, list early warning signs and the prevention step.
4. Identify the 3 assumptions I'm least entitled to make.
5. Suggest changes that would make the plan more resilient, and a cheaper way to test it first.
6. Provide a go / adjust / stop checklist.`
},
{
  title: "Summarize & Extract Action Items",
  prompt: `ROLE: You are an executive assistant.

CONTENT TYPE: [Email Thread / Document / Transcript / Chat Log]
CONTENT:
[Paste Content]
MY ROLE AND WHAT I NEED: [My Role and Needs]

TASK:
1. Provide a 5-bullet summary.
2. List decisions made and who made them.
3. List action items in a table: task, owner, due date, status (use TBD where not stated).
4. List open questions and anything that needs my response, with the suggested reply for each.
5. Flag risks, disagreements, and commitments with deadlines.

RULES: Do not add information that is not in the content.`
}
]);

addPrompts("Any Use", "Thinking Frameworks & Analysis", [
{
  title: "First-Principles Breakdown",
  prompt: `ROLE: You are a first-principles thinker in the style of a physicist.

PROBLEM OR BELIEF: [Problem or Belief]
CURRENT CONVENTIONAL WISDOM: [Conventional Wisdom]

TASK:
1. List the assumptions embedded in how this is normally done or viewed.
2. Break the problem down to its fundamental truths (physics, math, human nature, cost components).
3. Rebuild solutions from those basics, ignoring convention, and list 5 novel approaches.
4. Evaluate feasibility, cost, and risk for each.
5. Identify the one experiment that would best test the most promising idea.`
},
{
  title: "Root Cause Analysis (5 Whys & Fishbone)",
  prompt: `ROLE: You are a problem-solving facilitator.

PROBLEM: [Problem]
DATA AND FACTS KNOWN: [Facts]
WHEN IT STARTED AND PATTERN: [Pattern]

TASK:
1. Restate the problem precisely (what, where, when, how much).
2. Run a 5 Whys analysis, branching if there are multiple causes.
3. Build a fishbone (cause-and-effect) list across people, process, tools, materials, environment, and measurement.
4. Identify the most probable root causes and the evidence needed to confirm each.
5. Propose corrective and preventive actions and how to verify they worked.
6. Highlight where I may be treating symptoms instead of causes.`
},
{
  title: "Prioritization Matrix (What Should I Do First?)",
  prompt: `ROLE: You are a prioritization coach.

ITEMS TO PRIORITIZE:
[List of Items]
GOALS AND CONSTRAINTS: [Goals and Constraints]
TIME AND RESOURCES: [Time and Resources]

TASK:
1. Score each item on impact, effort, urgency, and risk of delay (1-5), and show the table.
2. Place items on an impact-versus-effort matrix and name the quick wins, major projects, fill-ins, and time-wasters.
3. Recommend a sequenced plan with rationale and dependencies.
4. Identify what to stop, delegate, or defer.
5. Highlight any item where my scoring would change if one assumption were wrong.`
},
{
  title: "Scenario Planning (Best / Likely / Worst)",
  prompt: `ROLE: You are a strategic foresight analyst.

SITUATION: [Situation]
TIME HORIZON: [Time Horizon]
KEY UNCERTAINTIES AND DRIVERS: [Uncertainties]
WHAT I CONTROL: [What I Control]

TASK:
1. Build 3-4 distinct scenarios (best, likely, worst, and a surprise) with narratives and the conditions that would trigger each.
2. Estimate rough probabilities and explain the reasoning.
3. For each scenario list the effects and the actions I should take.
4. Identify actions that are good in all scenarios ("no-regret moves") and options to preserve flexibility.
5. List leading indicators to watch and decision trigger points.`
},
{
  title: "Explain Both Sides Fairly (Steelman)",
  prompt: `ROLE: You are an impartial moderator.

TOPIC OR DEBATE: [Topic]
MY CURRENT LEANING: [My Leaning]

TASK:
1. State each major position in its strongest, most charitable form (as its smartest supporters would).
2. List the best evidence and values behind each.
3. Identify where the disagreement is factual and where it is about values.
4. Point out weak arguments on each side and common misrepresentations.
5. Offer questions that would help me decide for myself, without telling me what to think.`
}
]);

addPrompts("Any Use", "Practice & Role-Play", [
{
  title: "Practice a Tough Conversation (Role-Play)",
  prompt: `ROLE: You will play [Person's Role] (for example my manager, a difficult customer, or a skeptical investor) in a realistic role-play so I can practice.

SCENARIO: [Scenario]
THE PERSON'S PERSONALITY AND LIKELY REACTIONS: [Personality]
MY GOAL: [My Goal]
MY BIGGEST FEAR IN THIS CONVERSATION: [My Fear]

RULES OF THE ROLE-PLAY:
- Stay in character and respond as this person realistically would, including pushback and emotion at a moderate intensity.
- Speak one turn at a time and wait for my reply.
- After every 4 exchanges, pause and give brief coaching: what worked, what to improve, and a stronger phrase I could try.
- When I say "end", give a final debrief: scorecard, my 3 strongest moments, 3 improvements, and a recommended opening line for the real conversation.

Begin by describing the setting in one sentence and saying your first line.`
},
{
  title: "Mock Interview (Any Role)",
  prompt: `ROLE: You are a tough but fair hiring manager conducting an interview for [Job Title] at [Company Type].

CANDIDATE (me): [My Background]
INTERVIEW STYLE: [Behavioral / Technical / Panel / Case]
DIFFICULTY: [Easy / Realistic / Hard]

RULES:
- Ask one question at a time and wait for my answer.
- Ask realistic follow-up questions that probe weak spots.
- After each answer, give a rating from 1-5 and 2 sentences of feedback, then continue.
- After 10 questions, provide a full evaluation: strengths, concerns a real interviewer might have, my best answer, my weakest answer with a model response, and a hire / no-hire verdict with reasoning.

Start with a short introduction as the interviewer and your first question.`
},
{
  title: "Debate Practice Partner",
  prompt: `ROLE: You are my debate opponent.

TOPIC: [Debate Topic]
MY SIDE: [My Side]
FORMAT: [Format, such as 3 rounds with opening, rebuttal, closing]
LEVEL: [Level]

RULES:
- Argue the opposite side as persuasively as possible.
- Use logic and evidence, and call out my logical fallacies when you see them.
- After each round, step out of character to critique my arguments, suggest stronger points, and rate my performance.
- At the end, give a judge's scorecard and the three best counterarguments I did not address.

Begin with your opening statement after I give mine.`
},
{
  title: "Brainstorming Partner With Rules",
  prompt: `ROLE: You are a creative brainstorming partner and facilitator.

CHALLENGE: [Challenge]
CONSTRAINTS: [Constraints]
WHAT'S BEEN TRIED: [What's Been Tried]

PROCESS:
1. Generate 30 diverse ideas quickly without judging: include safe, bold, absurd, and combinations of existing ideas.
2. Use prompts such as "what would make this 10x cheaper?", "what if we did the opposite?", "what would [Famous Company or Person] do?", and "what if there were no constraints?".
3. Cluster the ideas into themes.
4. Score the top 10 on impact, feasibility, and novelty.
5. Develop the top 3 into one-paragraph concepts with a first test I could run this week.`
}
]);

addPrompts("Any Use", "Image & Creative AI Prompts", [
{
  title: "Image Generation Prompt Builder",
  prompt: `ROLE: You are an expert at writing prompts for AI image generators.

WHAT I WANT TO CREATE: [Image Idea]
PURPOSE (logo, social post, product mockup, illustration, book cover, presentation): [Purpose]
STYLE REFERENCES (photography, watercolor, flat vector, 3D render, cinematic): [Style]
MOOD AND COLORS: [Mood and Colors]
ASPECT RATIO AND USE: [Aspect Ratio]
THINGS TO AVOID: [Avoid]

TASK:
1. Write 5 detailed prompts, each describing subject, composition, camera angle or perspective, lighting, color palette, style, background, and quality terms.
2. Provide a negative prompt where applicable.
3. Provide variations for different tools (describe how to adjust for conversational image tools versus those with parameter flags).
4. Suggest how to iterate: what to change if the first result is too busy, off-style, or has anatomy problems.
5. Remind me about checking licensing and not requesting real people's likenesses or copyrighted characters.`
},
{
  title: "Logo & Brand Identity Brief",
  prompt: `ROLE: You are a brand designer writing a brief for yourself or a freelance designer.

CONTEXT:
- Business name and what it does: [Business Name and Description]
- Audience: [Audience]
- Personality words: [Personality Words]
- Competitors and what to differentiate from: [Competitors]
- Where the logo will appear: [Usage]
- Colors or symbols I like and dislike: [Preferences]

TASK:
1. Write a one-page design brief covering objectives, audience, tone, concept directions, color and typography guidance, deliverables (formats, sizes, variations), and timeline.
2. Propose 3 distinct logo concepts in words, with the idea behind each.
3. Provide image-generation prompts for exploring each concept.
4. List questions a designer would ask me, and a checklist for evaluating the final logo (scalability, one-color version, memorability).`
},
{
  title: "Presentation Slide Visual Ideas",
  prompt: `ROLE: You are a presentation designer.

CONTEXT:
- Presentation topic and audience: [Topic and Audience]
- Slide content (text and data): [Slide Content]
- Brand colors and style: [Brand Style]

TASK:
1. For each slide, propose a visual idea that makes the point instantly: chart type with what to emphasize, diagram, icon set, photo concept, or simple metaphor.
2. Rewrite each slide's headline as a clear takeaway sentence and cut the text to the minimum.
3. Provide layout guidance (hierarchy, whitespace, font sizes) and an accessible color palette.
4. Suggest an animation or build sequence only where it helps understanding.`
}
]);

addPrompts("Any Use", "Tech & Coding Help", [
{
  title: "Fix an Error Message",
  prompt: `ROLE: You are a patient technical support engineer who explains things clearly.

CONTEXT:
- The exact error message:
[Paste Error]
- What I was doing when it happened: [What I Was Doing]
- Device, operating system, and software versions: [System Details]
- What changed recently: [Recent Changes]
- What I've already tried: [What I Tried]

TASK:
1. Explain in plain language what the error means.
2. List the most likely causes in order of probability.
3. Provide step-by-step fixes starting with the safest and easiest, with exact clicks or commands, and what I should see after each step.
4. Tell me before any step that could delete data or change important settings, and how to back up first.
5. Provide what to check or what information to send to support if nothing works.`
},
{
  title: "Write Code for a Task (Beginner Friendly)",
  prompt: `ROLE: You are a senior developer who is excellent at teaching beginners.

CONTEXT:
- Language or tool (Python, JavaScript, Excel VBA, Google Apps Script, PowerShell): [Language or Tool]
- What the code should do: [Task]
- Example input and desired output: [Input and Output]
- My environment (operating system, what is installed): [Environment]
- My experience level: [Experience Level]

TASK:
1. Provide the complete, working code in one block I can copy.
2. Provide exact instructions: where to save it, what to name it, and how to run it, step by step.
3. Explain the code in plain English, section by section, with comments inside the code.
4. Provide a small test I can run to confirm it works and what the right output looks like.
5. Explain common errors I might hit and how to fix each.
6. Suggest how to extend it later. Prefer the simplest approach that works.`
},
{
  title: "Explain This Code",
  prompt: `ROLE: You are a code reviewer who explains clearly.

CODE:
[Paste Code]
MY LEVEL: [My Level]

TASK:
1. Summarize what the code does in 2 sentences.
2. Walk through it line by line or block by block in plain English.
3. Identify inputs, outputs, and side effects (files, network, data changes).
4. Point out bugs, risks, security concerns, and improvements, ranked by importance.
5. Provide an improved version with changes marked.
6. List what would break if the inputs changed.`
},
{
  title: "Automate a Repetitive Task",
  prompt: `ROLE: You are an automation consultant who finds the simplest solution first.

CONTEXT:
- The task I repeat, step by step: [Task Steps]
- How often and how long it takes: [Frequency and Time]
- Apps and tools involved: [Apps and Tools]
- My technical comfort level: [Comfort Level]
- Budget: [Budget]

TASK:
1. Suggest approaches ordered from simplest to most advanced (built-in features, templates, rules and filters, no-code tools, macros, scripts), with pros, cons, costs, and time saved.
2. Recommend one and give step-by-step setup instructions.
3. Identify risks (errors, security, data privacy) and how to test safely.
4. Provide a plan to maintain it and a fallback when it breaks.
5. Estimate annual time saved.`
},
{
  title: "Home Network & Device Troubleshooting",
  prompt: `ROLE: You are a friendly IT help-desk technician.

CONTEXT:
- Problem: [Problem]
- Devices, router, internet provider, and operating systems: [Equipment]
- When it started and how often: [Timing]
- What I've tried: [What I Tried]

TASK:
1. Walk me through diagnosis one step at a time. Give me one step, ask what I see, then give the next based on my answer.
2. Start with the least invasive checks (restart order, cables, signal, other devices).
3. Tell me clearly before any step that changes settings or could cause data loss.
4. Help determine whether the problem is the device, the router, or the provider.
5. Summarize what we learned and what to tell my provider if it needs a call.`
},
{
  title: "Online Privacy & Security Check-Up",
  prompt: `ROLE: You are a cybersecurity educator.

CONTEXT:
- Accounts and services I use (email, banking, social, shopping, work): [Accounts]
- Devices (phone type, computer, tablets, smart home): [Devices]
- Past incidents or concerns: [Concerns]
- My comfort with technology: [Comfort Level]

TASK:
1. Provide a prioritized checklist: password manager and unique passwords, two-factor authentication (prefer app or key over text), account recovery settings, email security, device updates and encryption, backups, Wi-Fi security, and privacy settings on major platforms.
2. Teach me to recognize phishing, smishing, and impersonation with examples.
3. Show what to do if an account is hacked, step by step.
4. Provide a 30-minute-per-week plan to get this done in a month.
5. Provide a family version of the rules.`
}
]);
