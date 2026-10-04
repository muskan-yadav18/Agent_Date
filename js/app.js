const engine = new AgenticEngine(profilesDB);
let currentProfile = null;

// DOM Elements
const screens = {
    landing: document.getElementById('landing-screen'),
    loading: document.getElementById('loading-screen'),
    profile: document.getElementById('profile-screen'),
    simulation: document.getElementById('simulation-screen'),
    rankings: document.getElementById('rankings-screen')
};

function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

document.getElementById('start-btn').addEventListener('click', async () => {
    const linkedin = document.getElementById('linkedin-url').value;
    const instagram = document.getElementById('instagram-url').value;

    if (!linkedin || !instagram) {
        alert("Please enter both LinkedIn and Instagram URLs.");
        return;
    }

    showScreen('loading');
    document.getElementById('loading-text').innerText = "Agents are analyzing the profiles...";

    // Analyze the profile
    currentProfile = await engine.analyzeProfile(linkedin, instagram);
    
    renderProfile(currentProfile);
    showScreen('profile');
});

function renderProfile(profile) {
    document.getElementById('prof-name').innerText = profile.name;
    document.getElementById('prof-role').innerText = profile.role;
    
    const generateTags = (items) => items.map(i => `<span class="tag">${i}</span>`).join('');
    
    document.getElementById('prof-needs').innerHTML = generateTags(profile.needs);
    document.getElementById('prof-hobbies').innerHTML = generateTags(profile.hobbies);
    document.getElementById('prof-interests').innerHTML = generateTags(profile.interests);
}

document.getElementById('start-dating-btn').addEventListener('click', async () => {
    showScreen('simulation');
    document.getElementById('sim-agent-a').innerText = currentProfile.name.charAt(0);
    
    const logBox = document.getElementById('sim-log');
    logBox.innerHTML = '';
    
    const results = await engine.rankMatches(currentProfile);
    
    // Simulate finding the top match for the demo effect
    const topMatch = results[0];
    document.getElementById('sim-agent-b').innerText = topMatch.candidate.name.charAt(0);
    
    // Play back the log for the top match to show "dating" in action
    for (let msg of topMatch.log) {
        const div = document.createElement('div');
        div.className = 'log-entry';
        div.innerText = "> " + msg;
        logBox.appendChild(div);
        logBox.scrollTop = logBox.scrollHeight;
        await new Promise(r => setTimeout(r, 600));
    }
    
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.style.color = '#ec4899';
    div.innerText = "> DATE CONCLUDED. GENERATING RANKINGS...";
    logBox.appendChild(div);
    
    await new Promise(r => setTimeout(r, 2000));
    
    renderRankings(results);
    showScreen('rankings');
});

function renderRankings(results) {
    const list = document.getElementById('rankings-list');
    list.innerHTML = '';
    
    results.slice(0, 10).forEach((res, index) => {
        const card = document.createElement('div');
        card.className = 'glass ranking-card';
        card.innerHTML = `
            <div class="rank-info">
                <div class="rank-number">#${index + 1}</div>
                <div>
                    <h3 style="font-size: 1.25rem;">${res.candidate.name}</h3>
                    <p>${res.candidate.role}</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem; color: #a7f3d0;">${res.summary}</p>
                </div>
            </div>
            <div class="match-score">${res.score}% Match</div>
        `;
        list.appendChild(card);
    });
}
