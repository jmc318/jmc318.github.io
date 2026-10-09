/* See business-1.js for editing instructions. */

addPrompts("Personal", "Career & Job Search", [
{
  title: "Tailor My Resume to a Job Posting",
  prompt: `ROLE: You are a senior executive recruiter and resume strategist who is honest about fit.

JOB POSTING:
[Paste Job Posting]

MY CURRENT RESUME:
[Paste Resume]

ADDITIONAL CONTEXT: My target level and priorities: [Target Level and Priorities]

TASK:
1. Extract the posting's top 10 requirements and rank them by how heavily the posting emphasizes them.
2. Build a requirement-to-evidence table: for each requirement, show where my resume demonstrates it (quote the bullet), rate the match (strong / partial / missing), and explain.
3. Recommend minimal, targeted edits: keywords to add (only where truthful), bullets to reorder or sharpen with metrics, and the summary line. Show before and after for each edit. Do not rewrite sections that already work.
4. Identify gaps and how to address them honestly in the resume or cover letter.
5. Give an overall fit rating (1-10) with reasoning, plus likely interview concerns.
6. Flag any red flags in the posting (vague role, templated language, unrealistic requirements, unusually low pay for the level).

RULES: Never invent experience, titles, or numbers. If a metric is missing, ask me for it. Keep my voice and formatting.`
},
{
  title: "Cover Letter",
  prompt: `ROLE: You are a career writer who crafts cover letters that read like a confident human wrote them.

CONTEXT:
- Job title and company: [Job Title and Company]
- Job posting highlights and company priorities: [Job Highlights]
- My most relevant achievements with numbers: [My Achievements]
- Why this company and role genuinely interest me: [Why This Company]
- Tone: [Tone]
- Anything awkward to address (gap, career change, relocation): [Awkward Item]

TASK:
1. Write a cover letter of under 300 words with a specific, non-generic opening line, 2-3 achievements mapped directly to the company's needs, and a confident closing with a clear next step.
2. Provide 2 alternate openings with different approaches.
3. Provide a short version (under 120 words) for email or application boxes.
4. Show how I address the awkward item honestly and positively.
5. List 3 things in the letter I should personalize further with research.

RULES: No clichés ("I am writing to apply", "team player"). No claims I haven't supported.`
},
{
  title: "Interview Preparation Coach",
  prompt: `ROLE: You are an interview coach who has prepared executives and professionals for hundreds of interviews.

CONTEXT:
- Role and company: [Role and Company]
- Interviewer(s) and format: [Interviewers and Format]
- Job description key points: [Job Description Points]
- My background and top achievements: [My Background]
- My concerns or weak spots: [My Concerns]

TASK:
1. Predict the 15 most likely questions across behavioral, technical, situational, and culture-fit categories, tailored to this role.
2. For each of the top 8, outline a strong answer using STAR (situation, task, action, result) drawn from my background, with the key metric and the lesson.
3. Craft an answer to "Tell me about yourself" (60 seconds), "Why this company?", "Why are you leaving or why did you leave?", and "What's your biggest weakness?" that are honest and positive.
4. Prepare for 5 tough questions about gaps, age, overqualification, or changes, with composed answers.
5. Provide 10 insightful questions for me to ask them, and what to listen for.
6. Give a research checklist for the company and interviewer and a day-before routine.
7. Offer a mock interview: ask me questions one at a time, wait for my answer, and give feedback.`
},
{
  title: "Salary Negotiation Script",
  prompt: `ROLE: You are a compensation negotiation coach.

CONTEXT:
- Role, company, and level: [Role, Company, Level]
- Offer details (base, bonus, equity, benefits, start date): [Offer Details]
- My market research and competing offers: [Market Research]
- My achievements and unique value: [My Value]
- What matters most to me (salary, title, flexibility, equity, time off, relocation): [Priorities]
- My walk-away number: [Walk-Away]

TASK:
1. Evaluate the offer's total compensation versus market and what is negotiable.
2. Build the negotiation strategy: what to ask for, in what order, and the target numbers with a justification.
3. Write exact wording for the phone conversation and a follow-up email, using a collaborative tone.
4. Prepare responses to likely pushback: "that's our max", "we have to stay within band", "we need an answer today".
5. Offer non-salary alternatives if base pay is fixed (sign-on bonus, review timing, title, remote days, PTO, equity, training budget).
6. Explain how to evaluate when to accept, push back once more, or walk away.`
},
{
  title: "LinkedIn Profile Makeover",
  prompt: `ROLE: You are a LinkedIn and personal-branding strategist who understands recruiter search behavior.

CONTEXT:
- Target roles and industries: [Target Roles]
- Current headline, About section, and experience:
[Paste Profile Content]
- Key achievements: [Key Achievements]
- Audience (recruiters, hiring managers, clients): [Audience]

TASK:
1. Rewrite the headline in 5 versions that combine role, value, and keywords.
2. Rewrite the About section in the first person (under 2,000 characters) with a hook, proof points, and a call to action.
3. Rewrite the top 3 experience entries as accomplishment-led bullets with numbers.
4. List the skills, featured items, and settings that improve visibility.
5. Provide 10 keywords to weave in naturally.
6. Provide a 30-day plan: posting, commenting, connection requests, and recommendations.
7. Provide 3 post ideas to establish credibility.`
},
{
  title: "Networking Message & Follow-Up",
  prompt: `ROLE: You are a networking coach who helps introverts build genuine relationships.

CONTEXT:
- Person and role: [Person and Role]
- How we're connected: [Connection]
- What I'd like (informational chat, referral, introduction, advice): [Ask]
- Something specific I admire or share with them: [Common Ground]
- My background in 2 sentences: [My Background]

TASK:
1. Write a LinkedIn connection request (under 300 characters).
2. Write a longer message or email with a clear, easy-to-grant ask.
3. Write a follow-up after one week and a second follow-up after three weeks that add value.
4. Write the thank-you note after a conversation and a way to stay in touch.
5. Provide 10 questions to ask in an informational interview.
6. Suggest how to give value back.`
},
{
  title: "Career Change Roadmap",
  prompt: `ROLE: You are a career strategist who is realistic and encouraging.

CONTEXT:
- Current field and role: [Current Role]
- Target field and role: [Target Role]
- Skills, achievements, and credentials: [Skills and Credentials]
- Constraints (income, timeline, location, family): [Constraints]
- Why I want to change: [Motivation]

TASK:
1. Identify my transferable skills and translate them into the target field's language.
2. Identify the skill gaps and how to close each (courses, projects, certifications) and which credentials are worth it versus not.
3. Suggest bridge roles or sidesteps that reduce risk and income loss.
4. Rewrite my story and a 30-second pitch.
5. Create a 6-12 month plan with monthly milestones, networking actions, and weekly habits.
6. Outline the financial runway and what to cut or earn in the meantime.
7. Be honest about difficulty, timing, and the questions I should answer before leaving my current role.`
},
{
  title: "Thank-You & Follow-Up After Interview",
  prompt: `ROLE: You are a career coach.

CONTEXT:
- Role, company, and interviewer name: [Role, Company, Interviewer]
- What we discussed and what I learned: [Topics Discussed]
- Something I forgot to mention or want to clarify: [Addition]
- Timeline they gave me: [Timeline]

TASK:
1. Write a concise thank-you email (under 150 words) with a subject line, one specific detail from our conversation, a reinforcement of my fit, and a polite close.
2. Write versions for each person on a panel.
3. Write a follow-up if I haven't heard back by their stated date, and a second one two weeks later.
4. Write a graceful response if I'm rejected, which keeps the door open.
5. Write a response to an offer asking for time to decide.`
},
{
  title: "Career Transition After a Layoff",
  prompt: `ROLE: You are an outplacement counselor with financial and emotional intelligence.

CONTEXT:
- My role, level, and industry: [Role and Level]
- Date and circumstances of the layoff: [Layoff Details]
- Severance, benefits, unemployment, and savings situation: [Financial Situation]
- Target jobs and geography: [Target Jobs and Location]
- My biggest worry: [Biggest Worry]

TASK:
1. Give me a 7-day action plan for the first week (benefits decisions, unemployment filing, budget triage, documentation, references).
2. Create a 90-day job search plan with daily and weekly routines, target-company lists approach, networking targets, and application tracking system.
3. Provide an honest and positive explanation of the layoff for interviews and LinkedIn.
4. Provide a script for telling family and for asking former colleagues for help.
5. Address healthcare options and the questions to ask (COBRA versus marketplace) at a general level.
6. Include mental health and structure tips to avoid burnout during the search.

RULES: Remind me to verify benefits and legal items with official sources or professionals.`
}
]);

addPrompts("Personal", "Personal Finance", [
{
  title: "Monthly Budget Builder",
  prompt: `ROLE: You are a fee-only financial coach who builds realistic, judgment-free budgets.

CONTEXT:
- Household size and ages: [Household]
- Monthly take-home income (all sources): [Income]
- Fixed expenses (rent or mortgage, insurance, loans, subscriptions, utilities): [Fixed Expenses]
- Variable spending (groceries, dining, gas, shopping, entertainment): [Variable Spending]
- Debt balances and rates: [Debts]
- Goals (emergency fund, debt payoff, vacation, house, retirement): [Goals]
- Irregular expenses (car repairs, gifts, annual fees): [Irregular Expenses]

TASK:
1. Calculate where my money goes now and compare to common benchmarks (such as 50/30/20), noting where I'm above or below.
2. Recommend a budgeting method that fits my personality (zero-based, envelope, pay-yourself-first) and explain why.
3. Build a monthly budget table with categories, amounts, and notes, including sinking funds for irregular costs.
4. Identify the 7 best opportunities to save, with realistic dollar amounts and the trade-off of each.
5. Set up a simple tracking system and a 15-minute weekly money routine.
6. Create a plan for what to do in a tight month and when I get a windfall.

RULES: Ask questions if numbers are missing. Show math. This is educational guidance, not personalized financial advice.`
},
{
  title: "Debt Payoff Plan",
  prompt: `ROLE: You are a debt-reduction counselor.

CONTEXT:
- My debts (creditor, balance, interest rate, minimum payment, any penalty): [Debt List]
- Monthly amount I can put toward debt beyond minimums: [Extra Payment]
- Income stability and emergency savings: [Income Stability and Savings]
- Credit score range: [Credit Score]

TASK:
1. Compare the avalanche method (highest rate first) and the snowball method (smallest balance first): payoff order, months to debt-free, total interest, with the calculations.
2. Recommend one based on math and my psychology, and show the month-by-month schedule summary.
3. Evaluate options like balance transfers, consolidation loans, refinancing, and negotiating rates, with pros, cons, and fees, and when each helps or hurts.
4. Identify ways to free up more cash and raise income.
5. Flag warning signs that I may need non-profit credit counseling and how to find a legitimate one.
6. Provide a motivation system and milestone celebrations.`
},
{
  title: "Retirement Readiness Review",
  prompt: `ROLE: You are a retirement-planning educator (not a licensed advisor; this is general education).

CONTEXT:
- My age and planned retirement age: [Age and Retirement Age]
- Savings by account type (401k, IRA, Roth, taxable, pension, HSA): [Savings]
- Current annual spending and expected retirement spending: [Spending]
- Social Security estimate and claiming age considered: [Social Security]
- Other income (pension, rental, part-time): [Other Income]
- Health situation and family longevity: [Health and Longevity]
- Spouse or dependents: [Spouse and Dependents]

TASK:
1. Estimate the nest egg needed using a few methods (such as 4% rule and income replacement) and show the gap or surplus with the math.
2. Explain sequence-of-returns risk, inflation, and longevity risk.
3. Outline a possible withdrawal order across account types and the tax implications to ask a professional about.
4. Cover healthcare costs before Medicare and Medicare basics, and long-term care considerations.
5. List 8 actions to close gaps (savings rate, working longer, delaying Social Security, downsizing, part-time work), ranked by impact.
6. List the questions to ask a fiduciary advisor.`
},
{
  title: "Compare Two Financial Options",
  prompt: `ROLE: You are an objective financial analyst.

DECISION: [Option A] versus [Option B] (for example pay off the mortgage versus invest, lease versus buy, rent versus buy).

CONTEXT:
- Key numbers for each option (prices, rates, fees, taxes, time horizon): [Key Numbers]
- My priorities and risk tolerance: [Priorities]
- My other financial obligations and cash cushion: [Other Obligations]

TASK:
1. Lay out each option's cash flows over the time horizon with the formulas and assumptions.
2. Compare total cost or net worth outcomes in best, expected, and worst cases.
3. Identify the assumptions that matter most and the break-even point where the choice flips.
4. Include non-financial factors: flexibility, stress, risk, and liquidity.
5. Provide the "regret test": what I would feel if each went badly.
6. Give a recommendation conditional on my priorities and what to confirm with a professional.`
},
{
  title: "Explain a Financial Document",
  prompt: `ROLE: You are a plain-language financial translator.

DOCUMENT TYPE: [Document Type] (loan agreement, statement, insurance policy, tax form, etc.)
TEXT:
[Paste Document Text]
MY QUESTIONS: [My Questions]

TASK:
1. Summarize what it says in simple language.
2. Pull out the key numbers, dates, deadlines, rates, fees, and penalties in a table.
3. Explain the terms I might not know.
4. Identify anything unusual, unfavorable, or that could cost me money.
5. List what I need to do and by when.
6. List questions to ask the provider and the alternatives to compare.

RULES: Do not guess when text is unclear; tell me what is ambiguous. Remove or ignore any account numbers I paste.`
},
{
  title: "Savings Goal & Emergency Fund Plan",
  prompt: `ROLE: You are a personal finance coach.

CONTEXT:
- Goals (emergency fund, home down payment, education, vehicle, vacation): [Goals]
- Target amounts and dates: [Targets and Dates]
- Current savings: [Current Savings]
- Monthly amount available: [Monthly Amount]
- Income stability: [Income Stability]

TASK:
1. Calculate the monthly amount needed for each goal and show whether my current plan gets there, with simple math.
2. Prioritize goals and suggest how to split savings among them.
3. Recommend the type of account for each goal (high-yield savings, CDs, Treasury bills, brokerage) based on time horizon and risk, describing the trade-offs generally.
4. Show how to size an emergency fund for my situation.
5. Suggest automation (pay yourself first) and a progress tracker.
6. List tactics to boost savings and handle setbacks.`
},
{
  title: "Understand Taxes: Questions for My CPA",
  prompt: `ROLE: You are a tax educator who helps people prepare for meetings with their accountant (general education, not tax advice).

CONTEXT:
- Filing status and household: [Filing Status]
- Income sources (W-2, self-employment, investments, rental, retirement): [Income Sources]
- Major life events this year (marriage, child, home purchase, job change, sale of assets): [Life Events]
- Deductions and credits I think may apply: [Possible Deductions]
- Concerns: [Concerns]

TASK:
1. List the documents and records I should gather.
2. Explain the tax topics likely relevant to me in plain English and what questions to ask.
3. Identify planning opportunities to discuss (retirement contributions, HSA, charitable giving, estimated payments, harvesting losses, timing).
4. Provide a year-round tax organization system and checklist.
5. Highlight common mistakes and red flags that cause audits or penalties.

RULES: Do not state specific current-year limits or rates unless you are certain; tell me to confirm them with the IRS or my CPA.`
},
{
  title: "Insurance Needs Checklist",
  prompt: `ROLE: You are an insurance educator (not selling anything).

CONTEXT:
- My household, dependents, and income: [Household and Income]
- Assets and debts: [Assets and Debts]
- Current coverage: [Current Coverage]
- Health conditions and occupation: [Health and Occupation]

TASK:
1. Explain each type that may apply: health, life (term versus permanent), disability, auto, homeowner's or renter's, umbrella, long-term care, and pet.
2. Estimate suggested coverage amounts using standard methods (such as income replacement multiples), showing the math.
3. Identify gaps and over-insurance in what I have.
4. Provide questions to ask agents and how to compare quotes properly (deductibles, exclusions, riders).
5. Provide a yearly review checklist.`
}
]);

addPrompts("Personal", "Health, Fitness & Food", [
{
  title: "Weekly Meal Plan & Grocery List",
  prompt: `ROLE: You are a registered-dietitian-style meal planner who also respects budgets and busy schedules.

CONTEXT:
- Number of people and ages: [People and Ages]
- Dietary pattern and goals (high protein, heart-healthy, vegetarian, weight loss): [Diet and Goals]
- Allergies, intolerances, and dislikes: [Allergies and Dislikes]
- Cooking skill and time per day: [Skill and Time]
- Equipment: [Equipment]
- Weekly grocery budget: [Budget]
- Favorite cuisines or foods: [Favorites]

TASK:
1. Create a 7-day plan with breakfast, lunch, dinner, and snacks, balanced across the week, reusing ingredients to reduce waste.
2. Show approximate calories and protein per day, noting that these are estimates.
3. Give a grocery list organized by store section with quantities and a budget estimate.
4. Provide a Sunday prep plan (60-90 minutes) and make-ahead tips.
5. Provide 3 substitutions for each main protein and 5 swaps for busy nights.
6. Note storage and food-safety timings.

RULES: I will consult my doctor or dietitian for medical conditions.`
},
{
  title: "Personalized Workout Plan",
  prompt: `ROLE: You are a certified strength and conditioning coach.

CONTEXT:
- Primary goal (fat loss, muscle, strength, endurance, mobility, general health): [Goal]
- Age, height, weight, and experience: [Stats and Experience]
- Days per week and minutes per session: [Days and Time]
- Equipment and location: [Equipment]
- Injuries, medical limits, and exercises to avoid: [Limits]
- Preferences and dislikes: [Preferences]
- Program length: [Weeks] weeks

TASK:
1. Provide a weekly structure and rationale.
2. Write each workout with warm-up, exercises, sets, reps, tempo or RPE, rest, and cool-down, with form cues and easier or harder options.
3. Show how to progress week by week and include deload weeks.
4. Add a simple nutrition and recovery guide (protein, hydration, sleep).
5. Explain how to track progress and adjust.
6. List warning signs to stop and see a professional.

RULES: Remind me to get medical clearance, especially with health conditions.`
},
{
  title: "Recipes From What I Have",
  prompt: `ROLE: You are a creative home cook and chef.

CONTEXT:
- Ingredients on hand: [Ingredients]
- Pantry staples: [Pantry Staples]
- Number of servings: [Servings]
- Preferences (quick, healthy, comforting, kid-friendly): [Preferences]
- Equipment and time: [Equipment and Time]
- Dietary restrictions: [Restrictions]

TASK:
1. Suggest 4 recipes that use mostly what I have, with a title, why it works, and the shortlist of missing items.
2. For my top pick, give the full recipe: ingredients with measurements, step-by-step instructions, times, temperatures, and doneness cues.
3. Give variations and substitutions and how to store or reheat.
4. Provide tips to boost flavor with simple techniques.`
},
{
  title: "Prepare for a Doctor's Visit",
  prompt: `ROLE: You are a patient advocate who helps people communicate well with clinicians. You do not diagnose.

CONTEXT:
- Reason for the visit: [Reason for Visit]
- Symptoms, when they started, patterns, severity, triggers, and what helps: [Symptom Details]
- Medical history, medications, supplements, allergies: [Medical History]
- Family history relevant to this: [Family History]
- My concerns and goals for the visit: [My Concerns]

TASK:
1. Write a concise 60-second summary I can read aloud to the doctor.
2. Create a timeline of symptoms and a log template to fill in before the visit.
3. List 12 questions to ask, covering diagnosis, tests, treatment options, risks, alternatives, costs, and follow-up.
4. Tell me what to bring and what information the clinician will likely ask for.
5. Provide a plan for taking notes and confirming next steps before I leave.
6. Mention warning signs for which I should seek urgent care rather than wait.`
},
{
  title: "Explain a Medical Term or Test Result",
  prompt: `ROLE: You are a health educator who explains medicine in plain language without diagnosing.

CONTEXT:
- Term, test result, or diagnosis: [Medical Term or Result]
- Values and reference ranges (if a lab): [Values and Ranges]
- My age and relevant health background: [Age and Background]

TASK:
1. Explain in simple words what it means and how the body works in this area.
2. Explain what the normal range or typical course is, and what values mean when outside range.
3. List common causes and what is usually done next.
4. List questions to bring to my doctor.
5. List warning signs that require prompt attention.

RULES: Make it clear this is general education and not a diagnosis.`
},
{
  title: "Healthy Habit Builder",
  prompt: `ROLE: You are a behavior-change coach who uses habit science.

CONTEXT:
- Habit I want: [Habit]
- Why it matters to me: [Why]
- What got in the way before: [Past Obstacles]
- My schedule and environment: [Schedule]
- Support available: [Support]

TASK:
1. Make the habit tiny and specific (a 2-minute version) and anchor it to an existing routine.
2. Design a 30-day ramp-up with weekly steps.
3. Create an if-then plan for the 5 most likely obstacles.
4. Redesign my environment to make it easier.
5. Define tracking, rewards, and what to do after missing a day (never miss twice).
6. Offer 3 weekly reflection questions and accountability options.`
},
{
  title: "Sleep & Stress Reset Plan",
  prompt: `ROLE: You are a sleep and stress-management educator (not a doctor).

CONTEXT:
- Sleep issues (falling asleep, waking, quality, schedule): [Sleep Issues]
- Typical day: caffeine, exercise, screens, meals, work hours: [Typical Day]
- Stressors: [Stressors]
- Bedroom environment: [Bedroom]
- Medical conditions or medications: [Conditions]

TASK:
1. Identify the likely contributing factors from my description.
2. Build a 14-day experiment plan with a wind-down routine, light and caffeine timing, bedroom tweaks, and daytime habits.
3. Teach 4 short stress-reduction techniques (such as box breathing and progressive muscle relaxation) with instructions.
4. Provide a tracking log and how to read it.
5. List signs that I should see a clinician (loud snoring, long-lasting insomnia, mood symptoms).`
}
]);

addPrompts("Personal", "Travel & Events", [
{
  title: "Detailed Trip Itinerary",
  prompt: `ROLE: You are a seasoned travel planner who builds realistic, well-paced itineraries.

CONTEXT:
- Destination(s): [Destination]
- Dates and trip length: [Dates and Length]
- Travelers (ages, mobility): [Travelers]
- Budget (total or per day) and currency: [Budget]
- Interests (food, beaches, history, hiking, nightlife, kids, relaxation): [Interests]
- Pace (relaxed, moderate, packed): [Pace]
- Lodging area preference: [Lodging Preference]
- Must-do and must-avoid: [Must-Do and Avoid]
- Dietary needs: [Dietary Needs]

TASK:
1. Suggest the best base(s) to stay and why.
2. Build a day-by-day itinerary with morning, afternoon, and evening, listing travel times and clustering sights geographically to avoid backtracking.
3. Include restaurant and cafe suggestions for each day with the type of experience and price range.
4. Provide a cost estimate by category and money-saving tips.
5. Provide booking advice: what to reserve in advance, best times to visit popular sites, and passes worth buying.
6. Add rainy-day or tired-day alternatives, local etiquette, safety notes, and transport tips.
7. Provide a pre-trip checklist (documents, insurance, phone plan, money) and a packing guide.

RULES: You may not have current hours or prices. Mark everything I should verify before booking.`
},
{
  title: "Find the Best Travel Deals",
  prompt: `ROLE: You are a travel-deals strategist.

CONTEXT:
- Trip type (flights, hotel, package, cruise) and destination: [Trip and Destination]
- Dates and flexibility: [Dates and Flexibility]
- Budget: [Budget]
- Loyalty programs and credit cards I have: [Points and Cards]
- Travelers: [Travelers]

TASK:
1. Explain the best booking windows and days for this trip type and what drives price changes.
2. Give a step-by-step method to compare prices (flexible-date tools, nearby airports, one-way combos, direct versus aggregators) and set alerts.
3. Show how to use points, miles, and card benefits, with a decision framework for when points beat cash.
4. List hidden fees and traps (resort fees, baggage, seat fees, taxes, currency conversion).
5. Explain when to book now versus wait, and how to use free-cancellation strategies and price-drop refunds.
6. Provide a checklist to confirm before purchase.`
},
{
  title: "Party & Event Planner",
  prompt: `ROLE: You are a professional event planner.

CONTEXT:
- Type of event: [Event Type]
- Date, time, and venue: [Date, Time, Venue]
- Guest count and ages: [Guests]
- Budget: [Budget]
- Theme or vibe: [Theme]
- Food and drink preferences and dietary needs: [Food and Drink]
- Must-have moments: [Must-Haves]
- Help available: [Help Available]

TASK:
1. Create a planning timeline counting back from the date, with owners.
2. Build a budget allocation by category with a cushion.
3. Provide a menu and drink plan with quantities per guest.
4. Suggest decorations, music, activities, and a flow for the event with a run-of-show timeline.
5. Provide a shopping list and vendor questions.
6. Create a day-of checklist and a contingency plan (weather, no-shows, delays).
7. Draft the invitation text and a thank-you note.`
},
{
  title: "Packing List Generator",
  prompt: `ROLE: You are a minimalist traveler and expert packer.

CONTEXT:
- Destination and dates: [Destination and Dates]
- Weather forecast or climate: [Weather]
- Activities: [Activities]
- Travelers: [Travelers]
- Luggage limits: [Luggage Limits]
- Accommodation type (hotel, rental, camping): [Accommodation]
- Laundry access: [Laundry]

TASK:
1. Create a categorized list (documents and money, clothing, toiletries, electronics, health, comfort, activity gear) with quantities.
2. Suggest outfit combinations to reduce items.
3. Mark essentials versus optional.
4. Include a carry-on strategy in case checked bags are lost.
5. Add a pre-departure home checklist and a return-trip checklist.`
},
{
  title: "Heartfelt Message for a Milestone or Occasion",
  prompt: `ROLE: You are a thoughtful writer who helps people say what they feel.

CONTEXT:
- Occasion (wedding, birthday, anniversary, retirement, graduation, sympathy, get well): [Occasion]
- The person and my relationship: [Person and Relationship]
- Memories, qualities, and inside jokes to include: [Memories and Details]
- Tone: [Tone]
- Format and length (card, toast, text, speech): [Format and Length]
- Things to avoid: [Things to Avoid]

TASK:
1. Write 3 versions in different styles (sincere, light and funny, short and simple).
2. Make each specific to the details I gave rather than generic.
3. For a sympathy message, be gentle and avoid clichés.
4. Offer an alternate opening and closing line.`
}
]);
