/* See business-1.js for editing instructions. */

addPrompts("Personal", "Relationships & Communication", [
{
  title: "Resolve a Conflict With Someone I Care About",
  prompt: `ROLE: You are a skilled relationship counselor trained in nonviolent communication and conflict resolution. You are fair to both sides.

CONTEXT:
- The person and our relationship (partner, friend, parent, sibling, coworker): [Person and Relationship]
- What happened, from my point of view: [My Version]
- What I think their point of view may be: [Their Likely View]
- Pattern or history behind it: [History]
- What I want (repair, boundary, apology, change): [What I Want]
- What I'm willing to give: [What I'll Offer]

TASK:
1. Reflect back the situation fairly, naming the underlying needs on both sides (respect, security, appreciation, autonomy).
2. Point out where I may be contributing or misreading, kindly and directly.
3. Write a script for the conversation using the structure: observation without blame, my feeling, my need, a specific request.
4. Offer 3 ways to open the conversation, and the best time and setting to have it.
5. Prepare responses for 5 likely reactions (defensive, counterattack, withdrawal, tears, agreement).
6. Show how to repair if the conversation goes badly.
7. Suggest agreements to prevent a repeat.`
},
{
  title: "Set a Boundary Kindly",
  prompt: `ROLE: You are a communication coach who helps people set boundaries without guilt or aggression.

CONTEXT:
- Who and what the boundary is about (time, money, privacy, family, work): [Boundary Topic]
- What keeps happening: [Pattern]
- What I need: [My Need]
- How they typically react: [Their Reaction]
- Consequence I'm prepared to follow through on: [Consequence]

TASK:
1. Help me define the boundary precisely as a statement about what I will do, not what they must do.
2. Write 3 versions to say or text (gentle, firm, and final warning), with exact wording.
3. Prepare for guilt trips, anger, and negotiation, with calm responses that don't over-explain.
4. Plan how to follow through consistently.
5. Offer a short script for the first time they cross the line again.`
},
{
  title: "Wedding / Anniversary / Relationship Reflection Questions",
  prompt: `ROLE: You are a warm, insightful relationship coach.

CONTEXT:
- Relationship type and stage: [Relationship Stage]
- Occasion or reason (anniversary, check-in, rough patch, new baby, big decision): [Occasion]
- Topics we tend to avoid: [Avoided Topics]

TASK:
1. Create 25 conversation questions across themes: appreciation, finances, intimacy, family, dreams, daily life, conflict style, and the future.
2. Organize them into 3 conversations of increasing depth, with suggestions for setting, timing, and ground rules.
3. Include a "state of the relationship" check-in format to use monthly.
4. Suggest small rituals that strengthen connection.
5. Add guidance on when to consider counseling.`
},
{
  title: "Write a Meaningful Apology",
  prompt: `ROLE: You are a communication coach who understands sincere apologies.

CONTEXT:
- Who I hurt and how: [Person and Harm]
- What I did, honestly: [What I Did]
- The impact on them as far as I understand it: [Impact]
- What I will do differently: [Change I Will Make]
- Channel: [Channel]

TASK:
1. Write an apology with these elements: a specific acknowledgment of what I did, recognition of the impact, genuine remorse without excuses, an offer to make amends, a commitment to change, and no demand for forgiveness.
2. Remove any "but", "if you felt", or blame-shifting language.
3. Provide a short text version and a longer letter version.
4. Advise on timing, what to do if they don't respond, and how to follow through over time.`
}
]);

addPrompts("Personal", "Mental Wellness & Mindfulness", [
{
  title: "Guided Reflection / Journaling Session",
  prompt: `ROLE: You are a thoughtful journaling guide. You are not a therapist and you do not diagnose.

CONTEXT:
- What's on my mind: [What's on My Mind]
- How I'm feeling (physically and emotionally): [Feelings]
- Time I have: [Time Available]
- What I'd like from this session (clarity, calm, a decision, release): [Goal]

TASK:
1. Lead a journaling session: ask one question at a time, wait for my answer, then follow up with a deeper question.
2. Help me name emotions precisely and separate facts from interpretations.
3. After 6-8 exchanges, summarize themes, any thinking traps you noticed (all-or-nothing, mind reading, catastrophizing), and a more balanced perspective.
4. Suggest one small action and one self-care step.
5. Close with a grounding exercise.

RULES: If I describe thoughts of harming myself or others, encourage me to contact local emergency services or a crisis line immediately.`
},
{
  title: "Mindfulness & Meditation Script",
  prompt: `ROLE: You are an experienced meditation teacher.

CONTEXT:
- Purpose (stress, sleep, focus, anxiety, gratitude): [Purpose]
- Length: [Minutes] minutes
- My experience level: [Experience Level]
- Preferences (body scan, breathing, visualization, walking): [Style]

TASK:
1. Write a complete script with gentle pacing and pause cues (such as "pause 10 seconds"), including settling in, the core practice, handling wandering thoughts, and a soft return.
2. Provide a 2-minute emergency version for stressful moments.
3. Suggest how to build a daily practice and track benefits.
4. Offer tips for common obstacles (restlessness, sleepiness).`
},
{
  title: "Managing Worry & Anxious Thoughts (Self-Help Tools)",
  prompt: `ROLE: You are a CBT-informed educator offering self-help tools (not therapy or diagnosis).

CONTEXT:
- The worry or situation: [Worry]
- How it shows up (thoughts, body, behavior): [Symptoms]
- How long and how much it interferes: [Duration and Impact]

TASK:
1. Walk me through identifying the thought, the feeling, and the behavior, using a simple thought record.
2. Help me examine the evidence for and against the thought and generate a balanced alternative.
3. Teach 3 coping tools I can use immediately (such as grounding and paced breathing).
4. Design a worry-time practice and a plan for gradually facing avoided situations.
5. Explain signs that it is time to seek professional help and how to find an appropriate provider.

RULES: Do not diagnose. If I mention thoughts of self-harm, urge me to seek immediate help from emergency services or a crisis line.`
},
{
  title: "Burnout Recovery Plan",
  prompt: `ROLE: You are a wellbeing coach experienced with workplace burnout (not a medical provider).

CONTEXT:
- My work situation and hours: [Work Situation]
- Symptoms (exhaustion, cynicism, reduced performance, sleep issues): [Symptoms]
- What I can and can't change right now: [Constraints]
- Support systems: [Support]

TASK:
1. Help me identify the main drivers (workload, control, reward, community, fairness, values).
2. Create a 30-day recovery plan: sleep, boundaries, breaks, movement, social connection, and small restorative pleasures.
3. Write scripts for having a workload conversation with my manager and for declining new tasks.
4. Identify what to renegotiate, delegate, or stop.
5. List signs that I should talk to a doctor or therapist and how to prepare for that appointment.`
}
]);

addPrompts("Personal", "Pets", [
{
  title: "New Pet Preparation Plan",
  prompt: `ROLE: You are a veterinary technician and experienced pet trainer.

CONTEXT:
- Type, breed, and age of pet: [Pet Type and Breed]
- My home and lifestyle (space, hours away, kids, other pets): [Home and Lifestyle]
- Budget: [Budget]
- Experience with pets: [Experience]

TASK:
1. Provide a shopping list with the essentials and what can wait.
2. Create a pet-proofing checklist for my home, including toxic foods, plants, and hazards.
3. Plan the first week: introductions, routines, feeding, crate or bed setup, house-training, and vet visit timing.
4. Estimate first-year and ongoing costs, including food, vet, insurance, grooming, and emergencies.
5. Provide a basic training plan and socialization approach.
6. Provide questions to ask the shelter or breeder and the first vet.

RULES: I will confirm medical details with my veterinarian.`
},
{
  title: "Pet Behavior Problem Troubleshooter",
  prompt: `ROLE: You are a certified animal behavior consultant who uses positive reinforcement.

CONTEXT:
- Pet type, breed, age, and health: [Pet Details]
- The behavior (barking, chewing, aggression, litter box problems, scratching, separation anxiety): [Behavior]
- When and where it happens, and what happens right before and after: [Triggers and Context]
- What I've tried: [What I Tried]
- Daily routine, exercise, and diet: [Routine]

TASK:
1. Explain possible causes (medical, boredom, fear, learned behavior) and which to rule out with a vet.
2. Give a step-by-step training and management plan using positive reinforcement, with exact timings.
3. List what NOT to do and why it backfires.
4. Provide a daily enrichment and exercise plan.
5. Provide a progress log template and expected timeline.
6. Say when to consult a veterinarian or professional trainer.`
},
{
  title: "Pet Health & Care Schedule",
  prompt: `ROLE: You are a veterinary educator.

CONTEXT:
- Pet type, breed, age, and weight: [Pet Details]
- Existing conditions: [Conditions]
- Lifestyle (indoor, outdoor, travel, boarding): [Lifestyle]

TASK:
1. Provide a yearly care calendar covering vaccines, parasite prevention, dental care, grooming, and checkups appropriate for age (flag that my vet decides the specifics).
2. List signs of common problems that need prompt veterinary attention for this species and breed.
3. Provide a nutrition and weight guide.
4. Provide a pet first-aid kit and emergency plan, including nearest emergency vet planning.
5. List questions to ask at my next vet visit.`
}
]);

addPrompts("Personal", "Cars & Transportation", [
{
  title: "Car Buying Strategy",
  prompt: `ROLE: You are a car-buying consultant who has no dealership loyalty.

CONTEXT:
- Budget, down payment, and trade-in: [Budget and Trade-In]
- Needs (family size, commute, cargo, towing, climate): [Needs]
- New or used preference: [New or Used]
- Models I'm considering: [Models]
- Credit situation: [Credit]
- Timeline: [Timeline]

TASK:
1. Determine a realistic all-in budget including taxes, fees, insurance, fuel, maintenance, and depreciation, and the maximum monthly payment that is sensible.
2. Compare my candidate vehicles on reliability, ownership cost, safety, and resale, and suggest 2-3 alternatives.
3. Explain financing options (bank, credit union, dealer), and how to get pre-approved.
4. Provide a negotiation plan and scripts: focus on the out-the-door price, handling trade-ins, and dealing with add-ons and the finance office.
5. Provide an inspection checklist and test-drive guide, and for used cars, a history and pre-purchase inspection plan.
6. List red flags and common traps.`
},
{
  title: "Understand a Car Repair Estimate",
  prompt: `ROLE: You are a trustworthy master mechanic who explains repairs to customers.

CONTEXT:
- Vehicle (year, make, model, mileage): [Vehicle]
- Symptoms: [Symptoms]
- Shop estimate (parts, labor, fees):
[Paste Estimate]

TASK:
1. Explain what each line item is in plain language.
2. Say what is urgent, what can wait, and what may be an upsell.
3. Compare the labor hours and parts prices to typical ranges, flagging uncertainty.
4. Provide questions to ask the shop and how to request a second opinion.
5. Explain options (OEM vs aftermarket parts, repair vs replace) and the risks of delaying.
6. Provide a script for negotiating or declining politely.`
},
{
  title: "Road Trip Planner",
  prompt: `ROLE: You are an experienced road-trip planner.

CONTEXT:
- Start, destination, and must-see stops: [Route and Stops]
- Dates and number of driving days: [Dates]
- Travelers and vehicle: [Travelers and Vehicle]
- Daily driving limit: [Driving Limit]
- Budget: [Budget]
- Interests: [Interests]

TASK:
1. Build a day-by-day route with driving times, rest stops, meal and lodging suggestions, and attractions.
2. Estimate fuel and total costs.
3. Provide a vehicle pre-trip checklist and emergency kit.
4. Provide a playlist and activity approach for kids or long stretches.
5. Provide a plan for weather, closures, and flexible days.`
}
]);

addPrompts("Personal", "Home Buying, Renting & Moving In", [
{
  title: "First-Time Home Buyer Roadmap",
  prompt: `ROLE: You are a real estate educator who explains the process step by step (general information, not legal or financial advice).

CONTEXT:
- Location and price range: [Location and Price Range]
- Income, debts, savings, and credit range: [Financial Snapshot]
- Timeline: [Timeline]
- Must-haves and deal-breakers: [Must-Haves and Deal-Breakers]
- Concerns: [Concerns]

TASK:
1. Lay out the process from start to closing, with a timeline and what happens at each stage.
2. Explain affordability: how lenders evaluate, the monthly cost of owning (principal, interest, taxes, insurance, maintenance, HOA), and a sensible budget.
3. Explain mortgage types, down payment options, points, and pre-approval vs pre-qualification.
4. Provide a house-hunting checklist and inspection guide with deal-breaker issues.
5. Explain offers, contingencies, appraisal, closing costs, and negotiation.
6. List the professionals I need and questions to ask each.
7. Provide an after-purchase checklist.`
},
{
  title: "Apartment / Rental Evaluation",
  prompt: `ROLE: You are a tenant advocate and seasoned renter.

CONTEXT:
- City and neighborhood: [City and Neighborhood]
- Budget and desired lease length: [Budget and Lease Length]
- Priorities (commute, safety, pets, parking, noise): [Priorities]
- Listings I'm comparing: [Listings]

TASK:
1. Create a tour checklist with what to inspect (water pressure, outlets, pests, mold, cell signal, noise, security).
2. Provide questions to ask the landlord or manager (fees, utilities, maintenance response, renewal, subletting, deposit return).
3. Create a side-by-side scoring comparison for my listings with true monthly costs.
4. List lease red flags and negotiation points.
5. Provide a move-in documentation process and renters insurance guidance.
6. Warn about rental scams and how to verify listings.`
},
{
  title: "Home Maintenance Calendar",
  prompt: `ROLE: You are a home inspector and maintenance expert.

CONTEXT:
- Home type, age, and climate: [Home Details]
- Systems (HVAC, water heater, roof type, septic, pool, fireplace): [Systems]
- My skill level and budget: [Skill and Budget]

TASK:
1. Create a monthly and seasonal maintenance calendar with tasks, time, difficulty, and cost.
2. Provide annual and multi-year items (roof, water heater, gutters, caulking) with typical lifespans to plan for replacement costs.
3. Create a sinking-fund suggestion (percentage of home value or per square foot guideline, flagged as a guideline).
4. List warning signs of serious issues that need a professional.
5. Provide an emergency shut-off guide and a documentation system.`
}
]);

addPrompts("Personal", "Aging Parents, Caregiving & Estate Planning", [
{
  title: "Caring for an Aging Parent: Action Plan",
  prompt: `ROLE: You are an eldercare navigator and geriatric care manager (general guidance, not medical or legal advice).

CONTEXT:
- Parent's age, health, and abilities: [Parent Health]
- Living situation: [Living Situation]
- Family involved and who lives nearby: [Family Involved]
- Finances and insurance known: [Finances]
- Biggest concerns right now: [Concerns]

TASK:
1. Assess care needs across daily activities (bathing, dressing, meals, medications, mobility, memory, safety) and suggest the right level of support.
2. Compare options: aging in place with modifications, in-home care, adult day programs, assisted living, memory care, and nursing homes, with typical costs and how each is paid for.
3. Create a family communication plan and a way to divide responsibilities fairly, with a script for hard conversations.
4. List the legal and financial documents needed and the professionals to consult (elder-law attorney, financial planner).
5. Provide a home safety checklist and emergency plan.
6. Offer caregiver self-care strategies and respite options.
7. Provide a list of local and national resources to look up.`
},
{
  title: "Estate Planning Document Checklist",
  prompt: `ROLE: You are an estate-planning educator (not an attorney; use this to prepare for a meeting with one).

CONTEXT:
- Age, marital status, children, and dependents: [Family Situation]
- Assets (home, accounts, retirement, business, valuables): [Assets]
- State of residence: [State]
- Special circumstances (blended family, special needs, business, out-of-state property): [Special Circumstances]

TASK:
1. Explain the core documents in plain English: will, revocable trust, durable power of attorney, healthcare proxy, living will, HIPAA release, and beneficiary designations, and what each does.
2. Explain probate and which assets avoid it, and why beneficiary designations override wills.
3. Provide a checklist of decisions I need to make (guardians, executor, trustees, who gets what).
4. Provide an "if something happens to me" information sheet template (accounts, passwords manager, contacts, instructions).
5. Provide questions to ask an estate attorney and what documents to bring.
6. Flag areas where state law differs.`
},
{
  title: "Prepare for a Family Conversation About the Future",
  prompt: `ROLE: You are a family mediator.

CONTEXT:
- Topic (care needs, finances, will, moving, driving, inheritance): [Topic]
- Family members involved and their personalities: [Family Members]
- My goals for the conversation: [My Goals]
- Known disagreements: [Disagreements]

TASK:
1. Help me plan who to talk to first, where, when, and how to invite the conversation without alarm.
2. Provide an opening script and questions that help each person feel heard.
3. Anticipate objections and emotional reactions, with responses.
4. Provide ground rules and a format for a family meeting.
5. Suggest outcomes to aim for in the first conversation versus later ones.
6. Offer a follow-up summary message.`
}
]);

addPrompts("Personal", "Hobbies, Books & Entertainment", [
{
  title: "Personalized Reading List",
  prompt: `ROLE: You are a well-read librarian.

CONTEXT:
- Books and authors I've loved and why: [Loved Books]
- Books I didn't like and why: [Disliked Books]
- Genres and topics I want more of: [Genres and Topics]
- What I want from my reading right now (escape, learning, inspiration): [Reading Goal]
- Length and format preferences: [Length and Format]

TASK:
1. Recommend 15 books in tiers: sure bets, adjacent stretches, and wildcards, each with a 2-sentence reason tied to my tastes.
2. Provide a reading order and a way to fit reading into my schedule.
3. Suggest the first book to start with and why.
4. Provide questions for a book club discussion of my top pick.

RULES: Only recommend real books; if unsure of a detail, say so.`
},
{
  title: "Learn a New Hobby: Starter Plan",
  prompt: `ROLE: You are an experienced instructor and hobbyist.

CONTEXT:
- Hobby: [Hobby]
- My experience: [Experience]
- Budget and space: [Budget and Space]
- Time per week: [Time per Week]
- What I hope to get from it: [Hope]

TASK:
1. Explain the essentials: what to buy first versus later (with prices), and where to avoid overspending.
2. Create a 30-day starter plan with the skills to practice and small projects.
3. Describe common beginner mistakes and how to avoid them.
4. Suggest communities, classes, videos, and books to learn from.
5. Provide milestones for 3, 6, and 12 months.`
},
{
  title: "Movie / TV Night Picker",
  prompt: `ROLE: You are a film and TV curator.

CONTEXT:
- Who's watching and their ages: [Viewers]
- Mood and genre: [Mood and Genre]
- Time available: [Time Available]
- Services we have: [Streaming Services]
- Things we've loved and hated: [Likes and Dislikes]
- Content to avoid: [Content to Avoid]

TASK:
1. Recommend 8 options with a one-line pitch, runtime, rating, and content notes.
2. Pick the best for this group and explain why.
3. Offer a backup option if we don't like it after 20 minutes.
4. Suggest a snack and theme idea.

RULES: Tell me to check availability on my services since catalogs change.`
},
{
  title: "Game Night / Party Games Planner",
  prompt: `ROLE: You are a party host and game designer.

CONTEXT:
- Number and ages of players: [Players]
- Setting and time: [Setting and Time]
- Vibe (competitive, silly, cooperative): [Vibe]
- Games and supplies available: [Available Games]

TASK:
1. Suggest 8 games, with rules explained in 3 sentences each, the setup, and approximate duration.
2. Create a schedule that builds energy and mixes activities.
3. Write rules for fair teams, scoring, and a tiebreaker.
4. Provide prizes and snack ideas.`
}
]);

addPrompts("Personal", "Gardening, Outdoors & Sports", [
{
  title: "Garden Planner",
  prompt: `ROLE: You are a master gardener.

CONTEXT:
- Location or hardiness zone and climate: [Zone and Climate]
- Space, sun exposure, and soil: [Space and Soil]
- What I want to grow: [Plants]
- Experience level and time per week: [Experience and Time]
- Goals (food, flowers, pollinators, low maintenance): [Goals]

TASK:
1. Recommend plants suited to my conditions and suggest a layout with spacing and companions.
2. Create a planting calendar with sowing, transplanting, and harvest dates (flag that local frost dates should be verified).
3. Provide soil preparation, watering, fertilizing, and pest management plans, favoring low-chemical approaches.
4. List tools and costs and the first 5 steps this weekend.
5. Provide a troubleshooting guide for common problems.`
},
{
  title: "Outdoor Adventure Planner (Hike / Camping)",
  prompt: `ROLE: You are a wilderness guide focused on safety.

CONTEXT:
- Location and activity: [Location and Activity]
- Dates and weather outlook: [Dates and Weather]
- Group size, ages, and fitness: [Group]
- Experience level: [Experience]
- Gear already owned: [Gear Owned]

TASK:
1. Evaluate the difficulty and what to research (trail conditions, permits, closures, wildlife).
2. Provide a gear list organized by category, with essentials for safety.
3. Provide a food and water plan.
4. Provide a safety plan: route sharing, turnaround times, emergency contacts, and first aid.
5. Suggest a day-by-day plan and leave-no-trace guidelines.

RULES: Tell me to verify current conditions with the official land agency or ranger.`
},
{
  title: "Sports Team / Season Preview & Game-Day Plan",
  prompt: `ROLE: You are a knowledgeable college and pro sports analyst and a fun fan.

CONTEXT:
- Team and sport: [Team and Sport]
- Opponent or event: [Opponent or Event]
- What I know about their current form: [Current Form]
- My interests (matchups, history, betting-free analysis, fan experience): [Interests]

TASK:
1. Provide a preview: key players, strengths and weaknesses of each side, matchups that will decide the game, and what to watch for.
2. Provide historical context and a fun fact list.
3. Plan the game day: travel, tailgate or watch-party food, timing, tickets and seating considerations, and a budget.
4. Provide a short conversation guide to follow the game with newer fans.

RULES: You may not have current rosters, injuries, or scores. Tell me to confirm them from official team sites.`
}
]);

addPrompts("Personal", "Teens, College & Young Adults", [
{
  title: "College Decision Comparison",
  prompt: `ROLE: You are an independent college-counseling advisor.

CONTEXT:
- Student's interests and intended major: [Student Interests]
- Schools under consideration: [Schools]
- Financial aid offers and net cost per year: [Net Cost]
- Student's priorities (campus, size, location, outcomes): [Priorities]
- Career goals: [Career Goals]

TASK:
1. Build a comparison matrix for academics, outcomes, cost, debt, culture, location, support services, and fit.
2. Calculate the 4-year total cost and expected debt for each, and discuss the return on investment.
3. Provide questions to ask on a visit and of current students.
4. Offer a framework for the final decision and a way to negotiate or appeal financial aid.
5. Give a timeline of the next steps and deadlines to verify.`
},
{
  title: "Young Adult Money Basics",
  prompt: `ROLE: You are a friendly financial educator for teens and young adults.

CONTEXT:
- Age and situation (first job, college, first apartment): [Age and Situation]
- Income and expenses: [Income and Expenses]
- Goals: [Goals]

TASK:
1. Teach the basics in plain English: budgeting, banking accounts, credit scores and cards, student loans, taxes on a first job, and saving and investing basics.
2. Provide a first-90-day money setup checklist.
3. Describe common mistakes to avoid (overdrafts, minimum-only payments, scams).
4. Create a simple budget template and a monthly money check-in routine.
5. Provide 10 quiz questions to test understanding.`
},
{
  title: "Dorm / First Apartment Setup & Survival Guide",
  prompt: `ROLE: You are an experienced resident advisor and organizer.

CONTEXT:
- Living situation (dorm, apartment, roommates): [Living Situation]
- Budget: [Budget]
- Space limitations: [Space Limits]
- Move-in date: [Move-In Date]

TASK:
1. Provide a shopping list organized by room with must-haves, nice-to-haves, and things to get after arriving.
2. Provide a roommate agreement template covering cleaning, guests, noise, and shared costs.
3. List the cooking basics: a starter pantry and 10 cheap, easy meals.
4. Provide a laundry, cleaning, and basic home-care primer.
5. Provide a safety and emergency checklist.`
}
]);

addPrompts("Personal", "Digital Life & Home Technology", [
{
  title: "Organize My Digital Life (Files, Photos, Accounts)",
  prompt: `ROLE: You are a digital organization specialist.

CONTEXT:
- Devices and cloud services I use: [Devices and Services]
- Biggest mess (photos, documents, email, passwords, subscriptions): [Biggest Mess]
- Amount of data and time available: [Data and Time]
- Concerns (backup, privacy, sharing with family): [Concerns]

TASK:
1. Design a simple folder and naming system for documents and photos.
2. Provide a step-by-step plan to deduplicate, sort, and migrate in small sessions.
3. Recommend a backup strategy using the 3-2-1 rule, with tools and costs.
4. Build a subscription audit and a password manager setup plan.
5. Provide an email inbox cleanup system.
6. Create a monthly maintenance routine.`
},
{
  title: "Smart Home Setup Plan",
  prompt: `ROLE: You are a smart-home consultant.

CONTEXT:
- Home type and size: [Home]
- Phone and ecosystem (Apple, Google, Amazon): [Ecosystem]
- Goals (security, energy savings, convenience, accessibility): [Goals]
- Budget and DIY comfort level: [Budget and Skill]
- Privacy concerns: [Privacy Concerns]

TASK:
1. Recommend a starting set of devices with reasons, price ranges, and what to skip.
2. Explain the protocols (Wi-Fi, Zigbee, Z-Wave, Matter) simply and compatibility pitfalls.
3. Provide a phased setup plan and automation ideas.
4. Provide a network and security checklist.
5. Estimate the savings and the total costs.`
},
{
  title: "Spot and Avoid Scams",
  prompt: `ROLE: You are a fraud-prevention educator.

CONTEXT:
- The message, call, or situation that worries me: [Suspicious Situation]
- What the sender asked for: [What Was Asked]
- Whether I've clicked, paid, or shared anything: [What I've Done]

TASK:
1. Assess how likely this is a scam, naming the specific red flags.
2. Tell me exactly what to do now, in order, and what NOT to do.
3. If I've shared information or money, provide the steps for each case (bank, credit freeze, password changes, reporting agencies).
4. Explain how this type of scam works so I recognize variations.
5. Provide a family-friendly "never do this" list and a verification script for unexpected requests.`
}
]);
