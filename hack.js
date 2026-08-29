
const SKILL_DICTIONARY = [

  {
    pattern: /\bpython\b/i,
    name: "Python",
    type: "language"
  },

  {
    pattern: /\bjava\b(?!script)/i,
    name: "Java",
    type: "language"
  },

  {
    pattern: /\bjavascript\b|\bjs\b/i,
    name: "JavaScript",
    type: "language"
  },

  {
    pattern: /\btypescript\b/i,
    name: "TypeScript",
    type: "language"
  },

  {
    pattern: /\bgo(lang)?\b/i,
    name: "Go",
    type: "language"
  },

  {
    pattern: /\bc\+\+\b/i,
    name: "C++",
    type: "language"
  },

  {
    pattern: /\bc#\b/i,
    name: "C#",
    type: "language"
  },

  {
    pattern: /\bruby\b/i,
    name: "Ruby",
    type: "language"
  },

  {
    pattern: /\bsql\b/i,
    name: "SQL",
    type: "language"
  },

  {
    pattern: /\bdjango\b/i,
    name: "Django",
    type: "framework"
  },

  {
    pattern: /\bflask\b/i,
    name: "Flask",
    type: "framework"
  },

  {
    pattern: /\breact\b/i,
    name: "React",
    type: "framework"
  },

  {
    pattern: /\bangular\b/i,
    name: "Angular",
    type: "framework"
  },

  {
    pattern: /\bvue\b/i,
    name: "Vue",
    type: "framework"
  },

  {
    pattern: /\bnode(\.js)?\b/i,
    name: "Node.js",
    type: "framework"
  },

  {
    pattern: /\bspring\b/i,
    name: "Spring",
    type: "framework"
  },

  {
    pattern: /\bexpress\b/i,
    name: "Express",
    type: "framework"
  },

  {
    pattern: /\bpostgres(ql)?\b/i,
    name: "PostgreSQL",
    type: "database"
  },

  {
    pattern: /\bmysql\b/i,
    name: "MySQL",
    type: "database"
  },

  {
    pattern: /\bmongodb\b/i,
    name: "MongoDB",
    type: "database"
  },

  {
    pattern: /\bredis\b/i,
    name: "Redis",
    type: "database"
  },

  {
    pattern: /\belasticsearch\b/i,
    name: "Elasticsearch",
    type: "database"
  },


  {
    pattern: /\baws\b/i,
    name: "AWS",
    type: "cloud"
  },

  {
    pattern: /\bazure\b/i,
    name: "Azure",
    type: "cloud"
  },

  {
    pattern: /\bgcp\b|\bgoogle cloud\b/i,
    name: "GCP",
    type: "cloud"
  },

  {
    pattern: /\bdocker\b/i,
    name: "Docker",
    type: "cloud"
  },

  {
    pattern: /\bkubernetes\b|\bk8s\b/i,
    name: "Kubernetes",
    type: "cloud"
  },

  {
    pattern: /\bci\/cd\b|\bci-cd\b/i,
    name: "CI/CD",
    type: "cloud"
  },

  {
    pattern: /\bterraform\b/i,
    name: "Terraform",
    type: "cloud"
  },

  {
    pattern: /\bkafka\b/i,
    name: "Kafka",
    type: "cloud"
  },


  /* -------------------------
     CONCEPTS
     ------------------------- */

  {
    pattern: /\bmicroservices?\b/i,
    name: "Microservices",
    type: "concept"
  },

  {
    pattern: /\brest(ful)? api\b/i,
    name: "REST API design",
    type: "concept"
  },

  {
    pattern: /\bsystem design\b/i,
    name: "System Design",
    type: "concept"
  },

  {
    pattern: /\bagile\b|\bscrum\b/i,
    name: "Agile/Scrum",
    type: "concept"
  },

  {
    pattern: /\bmachine learning\b|\bml\b/i,
    name: "Machine Learning",
    type: "concept"
  },

  {
    pattern: /\bdata pipeline\b|\betl\b/i,
    name: "Data Pipelines/ETL",
    type: "concept"
  }

];



/* ============================================================
   2. SOFT-SKILL SIGNALS
   ============================================================ */

const SOFT_SKILL_SIGNALS = [

  {
    pattern: /\bmentor(ing)?\b/i,
    tag: "mentorship"
  },

  {
    pattern: /\bcross-functional\b|\bcollaborat/i,
    tag: "collaboration"
  },

  {
    pattern: /\bfast-paced\b|\bstartup\b/i,
    tag: "ambiguity"
  },

  {
    pattern: /\bindependent(ly)?\b|\bself-starter\b/i,
    tag: "autonomy"
  },

  {
    pattern: /\bcommunication\b/i,
    tag: "communication"
  },

  {
    pattern: /\bdeadline\b|\btight timeline\b/i,
    tag: "pressure"
  },

  {
    pattern: /\blead(ership)?\b|\bmanage(d|s)?\b/i,
    tag: "leadership"
  }

];


const TECHNICAL_TEMPLATES = {

  /* PROGRAMMING LANGUAGES */

  language: [

    "Walk me through a challenging problem you solved recently using {{skill}}.",

    "What {{skill}} features or idioms do you rely on most, and why?",

    "How do you approach debugging a hard-to-reproduce issue in {{skill}}?"

  ],


  /* FRAMEWORKS */

  framework: [

    "What's a project where you used {{skill}} in production? What tradeoffs did you make?",

    "How would you structure a new feature within {{skill}} to keep it testable and maintainable?",

    "What are the biggest pitfalls you've seen teams run into with {{skill}}?"

  ],


  /* DATABASES */

  database: [

    "How do you approach schema design or query optimization in {{skill}}?",

    "Describe a time {{skill}} performance became a bottleneck. How did you diagnose and fix it?"

  ],


  /* CLOUD */

  cloud: [

    "How have you used {{skill}} to solve a scaling or reliability problem?",

    "Walk me through how you'd deploy and monitor a service using {{skill}}."

  ],


  /* CONCEPTS */

  concept: [

    "How do you approach {{skill}} when starting a new project?",

    "Tell me about a time {{skill}} decisions had a major impact on a project's outcome."

  ]

};


const BEHAVIORAL_TEMPLATES = {

  mentorship: [

    "Tell me about a time you mentored a junior colleague. What was the outcome?",

    "How do you adjust your communication style when helping someone less experienced?"

  ],


  collaboration: [

    "Describe a time you had to align with a cross-functional team that disagreed with your approach.",

    "Tell me about a project where close collaboration with non-engineers was critical to success."

  ],


  ambiguity: [

    "Tell me about a time you had to make a decision with incomplete information.",

    "Describe how you prioritize when everything feels urgent."

  ],


  autonomy: [

    "Tell me about a project you owned end-to-end with minimal oversight.",

    "How do you stay productive when priorities aren't clearly defined?"

  ],


  communication: [

    "Describe a time you had to explain a technical concept to a non-technical stakeholder.",

    "Tell me about a time miscommunication caused a problem. What did you change afterward?"

  ],


  pressure: [

    "Tell me about a time you had to deliver under a tight deadline. What gave?",

    "Describe a high-pressure situation at work and how you handled it."

  ],


  leadership: [

    "Tell me about a time you led a project or initiative without formal authority.",

    "Describe a difficult decision you made as a lead and how you communicated it to your team."

  ],


  /* FALLBACK QUESTIONS */

  general: [

    "Tell me about a time you disagreed with a teammate's technical decision. How did you handle it?",

    "Describe a mistake you made at work and what you learned from it.",

    "Tell me about a time you had to give difficult feedback to a colleague.",

    "What's a piece of feedback you received that changed how you work?"

  ]

};


const SITUATIONAL_TEMPLATES = {

  /* JUNIOR */

  junior: [

    "You're assigned a task using a technology you've never worked with before. What's your first move?",

    "You notice a bug in code a teammate wrote. What do you do?",

    "You're blocked waiting on another team. How do you keep making progress?"

  ],


  /* MID LEVEL */

  mid: [

    "You inherit a poorly documented codebase and need to ship a feature in it quickly. How do you approach it?",

    "Two stakeholders want conflicting things from the same feature. How do you resolve it?",

    "You realize a production bug is affecting users right now. Walk me through what you do."

  ],


  /* SENIOR */

  senior: [

    "You disagree with a technical direction leadership has already committed to. What do you do?",

    "You're asked to cut scope to hit a deadline. How do you decide what to cut?",

    "A junior engineer on your team is struggling but hasn't asked for help. How do you approach it?",

    "You're designing a system that needs to scale 10x in the next year. What's your approach?"

  ]

};



/* ============================================================
   6. ANALYZE JOB DESCRIPTION
   ============================================================ */

function analyzeJobDescription(text) {

  const foundSkills = [];

  const seenNames = new Set();


  /* FIND SKILLS */

  SKILL_DICTIONARY.forEach(entry => {

    if (
      entry.pattern.test(text) &&
      !seenNames.has(entry.name)
    ) {

      foundSkills.push({
        name: entry.name,
        type: entry.type
      });

      seenNames.add(entry.name);

    }

  });


  /* FIND SOFT SKILLS */

  const foundSignals = SOFT_SKILL_SIGNALS

    .filter(signal =>
      signal.pattern.test(text)
    )

    .map(signal =>
      signal.tag
    );


  /* SENIORITY DETECTION */

  let seniority = "mid";


  if (
    /\bsenior\b|\bstaff\b|\bprincipal\b|\b(5|6|7|8|9|10)\+?\s*years\b/i
      .test(text)
  ) {

    seniority = "senior";

  }

  else if (
    /\bjunior\b|\bentry[- ]level\b|\bnew grad\b|\b0-2 years\b|\b1-2 years\b/i
      .test(text)
  ) {

    seniority = "junior";

  }


  return {
    foundSkills,
    foundSignals,
    seniority
  };

}


function buildQuestionSet(
  analysis,
  seniorityOverride
) {

  const seniority =
    seniorityOverride === "auto"
      ? analysis.seniority
      : seniorityOverride;


  /* ==========================================================
     TECHNICAL QUESTIONS
     ========================================================== */

  const technicalGroups = {};


  analysis.foundSkills.forEach(skill => {

    const templates =
      TECHNICAL_TEMPLATES[skill.type] || [];


    if (!templates.length) {
      return;
    }


    /* Senior candidates get more questions */

    const count =
      seniority === "senior"
        ? 2
        : 1;


    const chosen =
      templates
        .slice(0, count)
        .map(template =>
          template.replace(
            /{{skill}}/g,
            skill.name
          )
        );


    if (!technicalGroups[skill.name]) {
      technicalGroups[skill.name] = [];
    }


    technicalGroups[skill.name].push(
      ...chosen
    );

  });


  let behavioral = [];


  if (analysis.foundSignals.length) {

    analysis.foundSignals.forEach(tag => {

      if (BEHAVIORAL_TEMPLATES[tag]) {

        behavioral.push(
          ...BEHAVIORAL_TEMPLATES[tag].slice(0, 2)
        );

      }

    });

  }


  /* Add general questions */

  behavioral.push(
    ...BEHAVIORAL_TEMPLATES.general.slice(0, 2)
  );


  /* Remove duplicate questions */

  behavioral = [
    ...new Set(behavioral)
  ];

  const situational =
    SITUATIONAL_TEMPLATES[seniority]
      || SITUATIONAL_TEMPLATES.mid;


  return {

    technicalGroups,

    behavioral,

    situational,

    seniority

  };

}


const jdInput =
  document.getElementById("jdInput");

const generateBtn =
  document.getElementById("generateBtn");

const output =
  document.getElementById("output");

const tabsEl =
  document.getElementById("tabs");

const detectedMeta =
  document.getElementById("detectedMeta");

const seniorityOverride =
  document.getElementById("seniorityOverride");



let currentResult = null;

let activeTab = "technical";


function renderMeta(
  analysis,
  seniority
) {

  const skillNames =
    analysis.foundSkills
      .map(skill => skill.name)
      .join(", ")
      || "none detected";


  detectedMeta.innerHTML =

    `<b>Detected seniority:</b> ${seniority}<br>` +

    `<b>Skills found:</b> ${skillNames}`;

}

function renderTabs() {

  tabsEl.style.display = "flex";


  tabsEl
    .querySelectorAll(".tab")
    .forEach(button => {

      button.dataset.active =
        button.dataset.cat === activeTab
          ? "true"
          : "false";

    });

}


function renderOutput() {

  if (!currentResult) {
    return;
  }


  const {
    technicalGroups,
    behavioral,
    situational
  } = currentResult;


  let html =
    '<div class="qlist">';

  if (activeTab === "technical") {

    const skillNames =
      Object.keys(technicalGroups);


    if (!skillNames.length) {

      html += `
        <div class="empty-state">
          No specific technical skills detected —
          try pasting a more detailed job description.
        </div>
      `;

    }


    skillNames.forEach(name => {

      html += `
        <div class="qgroup">

          <div class="qgroup-label">
            ${name}
          </div>
      `;
      technicalGroups[name]
        .forEach((question, index) => {

          html += `
            <div class="qitem">

              <span class="qnum">
                ${index + 1}.
              </span>

              <span>
                ${question}
              </span>

            </div>
          `;

        });


      html += `
        </div>
      `;

    });

  }

  if (activeTab === "behavioral") {

    html += `
      <div class="qgroup">

        <div class="qgroup-label">
          Behavioral
        </div>
    `;


    behavioral.forEach(
      (question, index) => {

        html += `
          <div class="qitem">

            <span class="qnum">
              ${index + 1}.
            </span>

            <span>
              ${question}
            </span>

          </div>
        `;

      }
    );


    html += `
      </div>
    `;

  }

  if (activeTab === "situational") {

    html += `
      <div class="qgroup">

        <div class="qgroup-label">
          Situational
        </div>
    `;


    situational.forEach(
      (question, index) => {

        html += `
          <div class="qitem">

            <span class="qnum">
              ${index + 1}.
            </span>

            <span>
              ${question}
            </span>

          </div>
        `;

      }
    );


    html += `
      </div>
    `;

  }


  html += "</div>";


  output.innerHTML = html;

}

tabsEl.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(".tab");


    if (!button) {
      return;
    }


    activeTab =
      button.dataset.cat;


    renderTabs();

    renderOutput();

  }
);


generateBtn.addEventListener(
  "click",
  () => {

    const text =
      jdInput.value.trim();


    /* Don't generate if textarea is empty */

    if (!text) {
      return;
    }


    /* Analyze job description */

    const analysis =
      analyzeJobDescription(text);


    /* Build questions */

    currentResult =
      buildQuestionSet(
        analysis,
        seniorityOverride.value
      );


    /* Display detected information */

    renderMeta(
      analysis,
      currentResult.seniority
    );


    /* Start from Technical tab */

    activeTab = "technical";


    renderTabs();

    renderOutput();

  }
);


generateBtn.click();