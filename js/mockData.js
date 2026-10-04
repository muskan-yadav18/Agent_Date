const profilesDB = [
    {
        id: 1,
        name: "Alex Rivera",
        linkedin: "https://linkedin.com/in/arivera",
        instagram: "https://instagram.com/alexr_tech",
        role: "Software Engineer",
        rawBio: "Building scalable backend systems. Love hiking, rock climbing, and specialty coffee. Looking for someone driven but knows how to relax.",
        interests: ["Coding", "Hiking", "Coffee"],
        needs: ["Intellectual stimulation", "Outdoor activity partner"],
        hobbies: ["Rock climbing", "Brewing espresso"]
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        linkedin: "https://linkedin.com/in/sjenkins",
        instagram: "https://instagram.com/sarahj.design",
        role: "UX Designer",
        rawBio: "Designing experiences that matter. Plant mom, weekend painter, and avid reader. I value empathy and clear communication.",
        interests: ["Art", "Design", "Literature"],
        needs: ["Emotional intelligence", "Creative expression"],
        hobbies: ["Painting", "Plant care", "Reading"]
    },
    {
        id: 3,
        name: "Michael Chen",
        linkedin: "https://linkedin.com/in/mchen_finance",
        instagram: "https://instagram.com/mikec.ventures",
        role: "Venture Capitalist",
        rawBio: "Investing in the future of AI. Always on the go. Enjoy fine dining, tennis, and traveling the world. Need someone who can keep up.",
        interests: ["Investing", "Travel", "Technology"],
        needs: ["Ambition", "Independence"],
        hobbies: ["Tennis", "Fine dining", "Wine tasting"]
    },
    {
        id: 4,
        name: "Emily Watson",
        linkedin: "https://linkedin.com/in/emilyw_marketing",
        instagram: "https://instagram.com/emilyw_life",
        role: "Marketing Director",
        rawBio: "Storyteller. Dog lover. Yoga enthusiast. Seeking a partner who is grounded, kind, and loves spontaneous road trips.",
        interests: ["Marketing", "Wellness", "Travel"],
        needs: ["Stability", "Kindness"],
        hobbies: ["Yoga", "Dog walking", "Road trips"]
    },
    {
        id: 5,
        name: "David Smith",
        linkedin: "https://linkedin.com/in/dsmith_data",
        instagram: "https://instagram.com/david.codes",
        role: "Data Scientist",
        rawBio: "Numbers guy by day, musician by night. Play the guitar and love indie rock. Want someone who appreciates good music and deep conversations.",
        interests: ["Data", "Music", "Philosophy"],
        needs: ["Deep connection", "Shared musical taste"],
        hobbies: ["Playing guitar", "Attending concerts"]
    },
    {
        id: 6,
        name: "Jessica Lee",
        linkedin: "https://linkedin.com/in/jlee_product",
        instagram: "https://instagram.com/jesslee.pm",
        role: "Product Manager",
        rawBio: "Organizing chaos into products. Avid runner, marathon finisher. Love cooking healthy meals. Need a partner who values fitness.",
        interests: ["Product Management", "Fitness", "Nutrition"],
        needs: ["Active lifestyle", "Goal-oriented partner"],
        hobbies: ["Running", "Cooking", "Meal prep"]
    },
    {
        id: 7,
        name: "Ryan Gosling (Tech Edition)",
        linkedin: "https://linkedin.com/in/ryan_g_dev",
        instagram: "https://instagram.com/ryang.tech",
        role: "Frontend Developer",
        rawBio: "Making the web beautiful. Skateboarder, vintage camera collector. Looking for a creative soul.",
        interests: ["Web Dev", "Photography", "Skateboarding"],
        needs: ["Creativity", "Spontaneity"],
        hobbies: ["Film photography", "Skateboarding"]
    },
    {
        id: 8,
        name: "Amanda Patel",
        linkedin: "https://linkedin.com/in/apatel_med",
        instagram: "https://instagram.com/amanda.md",
        role: "Pediatrician",
        rawBio: "Helping kids grow healthy. Love baking, sci-fi movies, and board games. Need someone with a good sense of humor.",
        interests: ["Medicine", "Sci-Fi", "Board Games"],
        needs: ["Humor", "Compassion"],
        hobbies: ["Baking", "Hosting game nights"]
    },
    {
        id: 9,
        name: "Chris Evans",
        linkedin: "https://linkedin.com/in/cevans_sales",
        instagram: "https://instagram.com/chris.sells",
        role: "Sales Executive",
        rawBio: "Always closing. Extrovert, love networking, sports, and craft beer. Looking for a fun, outgoing partner.",
        interests: ["Sales", "Sports", "Craft Beer"],
        needs: ["Social partner", "High energy"],
        hobbies: ["Watching football", "Brewery tours"]
    },
    {
        id: 10,
        name: "Olivia Kim",
        linkedin: "https://linkedin.com/in/okim_writer",
        instagram: "https://instagram.com/olivia.writes",
        role: "Freelance Writer",
        rawBio: "Words are my world. Introvert, tea drinker, cat mom. Seek a quiet, thoughtful partner who loves cozy nights in.",
        interests: ["Literature", "Poetry", "Cats"],
        needs: ["Quiet companionship", "Understanding"],
        hobbies: ["Reading", "Writing poetry", "Tea tasting"]
    },
    {
        id: 11,
        name: "Daniel Garcia",
        linkedin: "https://linkedin.com/in/dgarcia_arch",
        instagram: "https://instagram.com/daniel.architect",
        role: "Architect",
        rawBio: "Designing sustainable homes. Passionate about environment, cycling, and modern art. Need someone eco-conscious.",
        interests: ["Architecture", "Sustainability", "Art"],
        needs: ["Shared values", "Aesthetic appreciation"],
        hobbies: ["Cycling", "Visiting museums"]
    },
    {
        id: 12,
        name: "Sophia Martinez",
        linkedin: "https://linkedin.com/in/smartinez_hr",
        instagram: "https://instagram.com/sophia.hr",
        role: "HR Manager",
        rawBio: "People person. Love organizing events, dancing salsa, and trying new restaurants. Want someone who loves to dance.",
        interests: ["Human Resources", "Dance", "Food"],
        needs: ["Outgoing personality", "Rhythm"],
        hobbies: ["Salsa dancing", "Food blogging"]
    },
    {
        id: 13,
        name: "Matthew Taylor",
        linkedin: "https://linkedin.com/in/mtaylor_edu",
        instagram: "https://instagram.com/matt.teaches",
        role: "High School Teacher",
        rawBio: "Educating the next gen. History nerd, camper, amateur astronomer. Looking for someone curious about the universe.",
        interests: ["Education", "History", "Astronomy"],
        needs: ["Curiosity", "Patience"],
        hobbies: ["Stargazing", "Camping", "Reading history"]
    },
    {
        id: 14,
        name: "Isabella Rossi",
        linkedin: "https://linkedin.com/in/irossi_chef",
        instagram: "https://instagram.com/bella.cooks",
        role: "Executive Chef",
        rawBio: "Food is love. Work late hours, but love spending days off at the farmer's market. Need someone who loves to eat.",
        interests: ["Culinary Arts", "Agriculture", "Wine"],
        needs: ["Flexibility", "Appreciation for food"],
        hobbies: ["Farmer's markets", "Wine pairing"]
    },
    {
        id: 15,
        name: "Ethan Wright",
        linkedin: "https://linkedin.com/in/ewright_game",
        instagram: "https://instagram.com/ethan.games",
        role: "Game Developer",
        rawBio: "Creating virtual worlds. Avid gamer, D&D dungeon master, anime fan. Seek a fellow geek.",
        interests: ["Gaming", "Fantasy", "Anime"],
        needs: ["Shared geeky interests", "Imagination"],
        hobbies: ["Playing RPGs", "Watching anime"]
    },
    {
        id: 16,
        name: "Mia Turner",
        linkedin: "https://linkedin.com/in/mturner_law",
        instagram: "https://instagram.com/mia.lawyer",
        role: "Corporate Lawyer",
        rawBio: "Driven and detail-oriented. Love debating, podcasts, and luxury travel. Need someone confident and articulate.",
        interests: ["Law", "Politics", "Travel"],
        needs: ["Intellectual challenge", "Confidence"],
        hobbies: ["Listening to podcasts", "Debating"]
    },
    {
        id: 17,
        name: "Noah Adams",
        linkedin: "https://linkedin.com/in/nadams_fitness",
        instagram: "https://instagram.com/noah.fit",
        role: "Personal Trainer",
        rawBio: "Health is wealth. Gym addict, surfer, loves the beach. Looking for a beach bum partner.",
        interests: ["Fitness", "Surfing", "Outdoors"],
        needs: ["Physical activity", "Love for the ocean"],
        hobbies: ["Surfing", "Weightlifting"]
    },
    {
        id: 18,
        name: "Ava Scott",
        linkedin: "https://linkedin.com/in/ascott_photo",
        instagram: "https://instagram.com/ava.snaps",
        role: "Freelance Photographer",
        rawBio: "Capturing moments. Nomad, van lifer, always exploring. Need someone adventurous and free-spirited.",
        interests: ["Photography", "Travel", "Nature"],
        needs: ["Wanderlust", "Adaptability"],
        hobbies: ["Van life", "Hiking"]
    },
    {
        id: 19,
        name: "Liam Baker",
        linkedin: "https://linkedin.com/in/lbaker_music",
        instagram: "https://instagram.com/liam.beats",
        role: "Music Producer",
        rawBio: "Making hits. Night owl, loves clubbing, synthwave. Seek someone with good vibes.",
        interests: ["Music Production", "Nightlife", "Electronic Music"],
        needs: ["Tolerance for late hours", "Good energy"],
        hobbies: ["DJing", "Collecting vinyl"]
    },
    {
        id: 20,
        name: "Charlotte King",
        linkedin: "https://linkedin.com/in/cking_ngo",
        instagram: "https://instagram.com/charlotte.cares",
        role: "Non-profit Director",
        rawBio: "Trying to save the world. Passionate volunteer, vegan, loves animals. Need someone compassionate.",
        interests: ["Social Justice", "Animal Rights", "Veganism"],
        needs: ["Empathy", "Shared ethical views"],
        hobbies: ["Volunteering", "Vegan cooking"]
    },
    {
        id: 21,
        name: "James Hill",
        linkedin: "https://linkedin.com/in/jhill_eng",
        instagram: "https://instagram.com/james.builds",
        role: "Mechanical Engineer",
        rawBio: "Building machines. Car enthusiast, tinkerer, DIY expert. Looking for someone who doesn't mind greasy hands.",
        interests: ["Engineering", "Automotive", "DIY"],
        needs: ["Patience", "Appreciation for craftsmanship"],
        hobbies: ["Restoring cars", "Woodworking"]
    },
    {
        id: 22,
        name: "Amelia Green",
        linkedin: "https://linkedin.com/in/agreen_art",
        instagram: "https://instagram.com/amelia.arts",
        role: "Art Curator",
        rawBio: "Surrounded by beauty. Love gallery hopping, classical music, and vintage fashion. Seek someone refined.",
        interests: ["Fine Art", "Classical Music", "Fashion"],
        needs: ["Cultural appreciation", "Sophistication"],
        hobbies: ["Attending galleries", "Thrifting"]
    },
    {
        id: 23,
        name: "Benjamin Hall",
        linkedin: "https://linkedin.com/in/bhall_pilot",
        instagram: "https://instagram.com/ben.flies",
        role: "Commercial Pilot",
        rawBio: "Living in the clouds. Travel constantly, love exploring new cities, learning languages. Need someone independent.",
        interests: ["Aviation", "Languages", "Travel"],
        needs: ["Independence", "Trust"],
        hobbies: ["Learning Spanish", "City exploring"]
    },
    {
        id: 24,
        name: "Harper Young",
        linkedin: "https://linkedin.com/in/hyoung_vet",
        instagram: "https://instagram.com/harper.vet",
        role: "Veterinarian",
        rawBio: "Animal lover. Have 3 dogs and 2 cats. Love horseback riding. Must love animals.",
        interests: ["Veterinary Medicine", "Equestrian", "Animals"],
        needs: ["Love for pets", "Patience with animals"],
        hobbies: ["Horseback riding", "Dog training"]
    },
    {
        id: 25,
        name: "Lucas White",
        linkedin: "https://linkedin.com/in/lwhite_crypto",
        instagram: "https://instagram.com/lucas.web3",
        role: "Blockchain Developer",
        rawBio: "Building the decentralized future. Crypto trader, tech futurist. Love discussing philosophy and economics.",
        interests: ["Blockchain", "Economics", "Philosophy"],
        needs: ["Open-mindedness", "Intellectual curiosity"],
        hobbies: ["Trading", "Reading philosophy"]
    }
];

// Helper to simulate a user input not in the DB
const generateCustomProfile = (linkedinUrl, instagramUrl) => {
    return {
        id: Date.now(),
        name: "You (Custom Profile)",
        linkedin: linkedinUrl,
        instagram: instagramUrl,
        role: "Mystery Professional",
        rawBio: "An enigmatic individual whose profile is currently being analyzed by our agents...",
        interests: ["Innovation", "Connection"],
        needs: ["Authenticity", "Adventure"],
        hobbies: ["Exploring new things", "Learning"]
    };
};
