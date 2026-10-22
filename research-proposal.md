# Research Proposal Draft

## Title
**An AI-Powered Career Recommendation System for University Students: A Data-Driven Approach to Skills Matching and Employability**

**Conference context:** RNU Science Week 2027 — Applied Research and Innovation  
**Thematic area:** Artificial Intelligence, Data Science, and Intelligent Systems  
**Status:** Proposal draft. The study has not yet been conducted; results must be added only after testing.

## Abstract
University students entering the labour market may find it difficult to identify entry-level roles that match their current skills and to understand the skills required for roles they want. This project proposes a transparent career recommendation prototype that compares student skill profiles with job descriptions, ranks vacancies, and explains both matched and missing skills. The planned study will compare a keyword-overlap baseline with a weighted skill-matching approach and, if feasible, a semantic similarity method. A documented set of anonymised or synthetic profiles and vacancy descriptions will be used, with the data source and limitations reported transparently. Ranking quality may be evaluated using precision at K and recall at K, while a small usability review will examine whether users understand the explanations. No performance result is claimed at the proposal stage. The expected contribution is a reproducible prototype and an evaluation framework for student-focused, explainable career matching.

**Keywords:** recommender systems, employability, skills matching, explainable AI, data science, higher education

## 1. Introduction
The transition from university to employment requires students to interpret job descriptions, communicate their abilities, and identify skills they still need to develop. A student may have acquired relevant abilities through coursework, projects, volunteering, or part-time work but may not know how to connect them to employer requirements.

Job recommendation systems offer one possible way to support this process. However, a recommendation score alone may be difficult to interpret. A useful student-facing tool should explain which skills match a vacancy, which requirements are missing, and how the recommendation was produced.

This research proposes a lightweight prototype that matches student-provided skills against entry-level vacancy requirements. It focuses on transparent explanations and measurable evaluation rather than presenting an opaque score as a definitive judgement of employability.

## 2. Research Problem, Aim, and Questions
**Problem:** Students need understandable support when comparing their current skills with entry-level job requirements. Basic keyword search may miss equivalent terminology and does not necessarily explain skill gaps.

**Aim:** To design and evaluate a transparent, data-driven prototype for matching student skill profiles with entry-level vacancies.

**Research questions**
1. How does a weighted skill-matching method compare with basic keyword overlap when ranking relevant vacancies?
2. Can explicit matched-skill and missing-skill explanations help users understand why a vacancy was recommended?
3. What limitations arise from incomplete profiles, inconsistent skill terminology, and small or synthetic datasets?

**Objectives**
- Review research on recommender systems, career guidance, and responsible AI.
- Define a documented dataset and a reproducible skill-normalization process.
- Implement a keyword baseline and a weighted matching method.
- Evaluate ranking quality using suitable metrics and record errors.
- Discuss privacy, fairness, transparency, and limitations.

## 3. Proposed System
The prototype will accept a user-entered skill profile and compare it with a set of vacancy descriptions. The initial implementation can use a browser-based interface and a small, manually curated demonstration dataset. The research evaluation should use a separate documented dataset rather than treating the demo examples as evidence.

The pipeline consists of:
1. **Profile input:** skills and optional learning interests.
2. **Preprocessing:** lowercase text, trim whitespace, and map documented aliases to canonical skill names.
3. **Vacancy representation:** each vacancy is represented by a list of required or preferred skills.
4. **Ranking:** calculate a baseline overlap score and a weighted score that gives different importance to required and preferred skills.
5. **Explanation:** display matched skills, missing skills, and a plain-language explanation.
6. **Evaluation:** compare rankings against relevance labels created using a documented annotation procedure.

A semantic model may be included only if time and resources allow. Its use, model version, settings, and limitations must be documented.

## 4. Methodology
The study will use a design-and-evaluation approach. First, a literature review will define the problem and guide the evaluation. Second, a small dataset of vacancy descriptions and fictional, synthetic, or appropriately consented anonymised skill profiles will be assembled. Data sources, collection dates, inclusion criteria, and any licensing restrictions will be recorded.

Three possible approaches are:
- **Baseline:** proportion of listed vacancy skills present in the student profile.
- **Weighted matching:** assign documented weights to essential and desirable skills, then normalize the score.
- **Optional semantic matching:** compare text representations to identify related terms, with the model and configuration specified.

Relevant vacancies should be labelled using a predefined rubric. If possible, two reviewers should independently label a subset and disagreements should be recorded and resolved transparently.

**Possible metrics**
- Precision@K: proportion of the top K recommendations judged relevant.
- Recall@K: proportion of all labelled relevant vacancies found in the top K.
- Mean reciprocal rank (MRR): how highly the first relevant result appears.
- Usability feedback: task completion and short user ratings or comments, subject to appropriate consent.

Metrics must be selected to match the dataset and study design. If there are no reliable relevance labels, ranking metrics cannot be interpreted as evidence of real-world recommendation quality.

## 5. Ethics, Privacy, and Limitations
CVs may contain personal data. The prototype should avoid collecting or storing real CVs by default. Use synthetic profiles for initial development, remove identifiers from any research dataset, obtain appropriate consent where required, and follow university ethics and data-protection requirements.

Recommendations must be described as decision support, not as a judgement of a person's worth or guaranteed employability. The study should examine whether terminology, missing information, or the selected dataset systematically disadvantage certain users. Students should be able to inspect and correct their profiles.

Potential limitations include a small dataset, imperfect relevance labels, changes in employer terminology, self-reported skills, and the difference between a prototype and a deployed recruitment system. Synthetic data can test software behaviour but cannot establish real-world effectiveness.

## 6. Expected Contribution and Planned Evaluation
The planned outputs are a working web demonstrator, a documented comparison of matching methods, a reproducible evaluation procedure, and design recommendations for explainable student career tools. These are expected outputs, not completed findings.

After experiments, this section must report the dataset size, evaluation setup, numerical results, uncertainty where possible, and examples of ranking errors. Do not invent results to fill this section.

## 7. Conclusion
This proposal describes a feasible applied-research project at the intersection of data science, higher education, and employability. Its central contribution is the evaluation of transparent skills matching and explanations, with attention to privacy and responsible use. The final conclusion must be based on the completed experiment rather than the intended benefits.

## References to verify and expand
1. Riga Nordic University. (2026). *Call for Research Submissions for RNU Science Week 2027*. https://rnu.lv/en/call-for-research-submissions-for-rnu-science-week-2027/
2. NIST. *AI Risk Management Framework*. https://www.nist.gov/itl/ai-risk-management-framework
3. scikit-learn developers. *Model evaluation: quantifying the quality of predictions*. https://scikit-learn.org/stable/modules/model_evaluation.html
4. Add peer-reviewed literature specifically about job recommendation, skills extraction, recommender-system evaluation, and explainable recommendations after reading and verifying each source.

**Important:** This is a structured starting draft, not a final conference-ready paper. Check the official RNU DOCX template and replace this structure with the required format before submission.
