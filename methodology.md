# Methodology and Experiment Plan

## Research design
A prototype-building and comparative evaluation study.

## Data plan
- Prefer synthetic profiles during early development.
- Define a permitted source for vacancy descriptions and record its access date.
- Check the source's terms and licensing before reusing vacancy text.
- Exclude personal identifiers and do not upload real CVs to the demo.
- Record dataset size, fields, collection process, and exclusions.

## Baselines
1. **Keyword overlap:** matched required skills divided by total required skills.
2. **Weighted skill match:** essential skills receive a predeclared higher weight than desirable skills.
3. **Optional semantic method:** compare profile and vacancy text with a documented model; use only if feasible.

## Example weighted formula
For a vacancy with skills i:

Score = 100 × (sum of weights for matched skills) / (sum of weights for all listed skills)

This is a design choice, not a validated employability score. State weights before evaluating and test whether conclusions change under alternative reasonable weights.

## Evaluation
Use a documented relevance rubric. If feasible, have two reviewers label a subset independently. Report how labels were created and how disagreements were handled.

- Precision@K = relevant results among top K / K.
- Recall@K = relevant results among top K / all relevant results in the evaluation set.
- MRR = average reciprocal rank of the first relevant result.
- Usability: short task-based review, clear consent, and anonymised feedback.

Report dataset size, splits if applicable, parameters, software versions, and limitations. Never report a metric without explaining the data and relevance labels it depends on.

## Ethics and reproducibility
- Use synthetic profiles unless real data is necessary and approved.
- Do not publish private CVs, names, emails, or other identifying details.
- Keep a README with setup instructions and data provenance.
- Save evaluation scripts and a versioned results file.
- Clearly separate demonstration data from research data.
