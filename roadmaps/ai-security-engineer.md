<!-- Generated from data/roadmaps/ai-security-engineer.yaml by tools/render-markdown.mjs. Do not edit. -->

# AI Security Engineer Roadmap

> A defensive security path for engineers who secure LLM and agent systems, covering AI threat modelling, prompt injection defence, supply chain integrity, agent permissions, guardrails, governance and incident response.

**Advanced** · **10 phases** · **7-9 months at 10h/week** · updated 2026-08-10

This path assumes you know application security fundamentals and have called an LLM API. It is defensive work: securing systems your organisation is shipping, usually faster than anyone can review them.

One property breaks the tools you already trust: **the instruction and the data arrive in the same channel**. There is no prepared statement for a prompt. Input validation as you know it does not apply, because the payload is natural language and the parser is a model that was built to be helpful.

So the ordering follows blast radius rather than novelty. Prompt injection first because it is the delivery mechanism for most of the rest, and agent security before RAG because an agent with tools can act on what it was tricked into believing.

Expect 7–9 months. Phase five is where the threat model stops being theoretical.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$140,357` | Glassdoor Security Engineer salary estimate, 25th percentile (US, n=6,355) — proxy: the AI-specific title has too few reported salaries to publish | 2026-08-08 |
| Mid | `$172,800` | Glassdoor Security Engineer salary estimate (overall average, US, n=6,355) — proxy: measures Security Engineer, not AI Security Engineer | 2026-08-08 |
| Senior | `$213,409` | Glassdoor Senior Security Engineer salary estimate (average, US, n=1,664) — proxy: measures Senior Security Engineer, not AI Security Engineer | 2026-08-08 |

Total duration is **7-9 months at 10h/week** — <sub>SkillPilot editorial estimate, 2026-08-08</sub>

## Before you start

- Working knowledge of application security fundamentals (authn, authz, input validation)
- Practical experience calling an LLM API and reading its responses
- Comfort reading and writing code in at least one language, ideally Python
- Familiarity with cloud infrastructure and CI/CD

## The path

| # | Phase | Duration |
|---:|---|---|
| 1 | [AI Threat Landscape](#1-ai-threat-landscape) | 3-4 weeks |
| 2 | [Prompt Injection Defence](#2-prompt-injection-defence) | 3-4 weeks |
| 3 | [Data Poisoning & Model Supply Chain](#3-data-supply-chain) | 3-4 weeks |
| 4 | [Model & Inference Exposure](#4-model-inference-exposure) | 3-4 weeks |
| 5 | [Agent Security & Excessive Agency](#5-agent-security) | 4-5 weeks |
| 6 | [RAG & Data Boundary Security](#6-rag-data-boundary) | 3-4 weeks |
| 7 | [Red Teaming Your Own AI Systems](#7-red-teaming) | 3-4 weeks |
| 8 | [Guardrails & Runtime Defence](#8-guardrails-runtime) | 3-4 weeks |
| 9 | [Governance & Compliance](#9-governance-compliance) | 2-3 weeks |
| 10 | [Incident Response for AI Systems](#10-ai-incident-response) | 3-4 weeks |

---

### <a id="1-ai-threat-landscape"></a>1. AI Threat Landscape

<sub>**3-4 weeks**</sub>

Classical appsec assumes code decides and data is inert. An LLM erases that line: the text it reads becomes the instructions it follows, so there is no parser to harden. Done when you have written a threat model for one AI system you own, mapped its risks onto the OWASP LLM Top 10 and MITRE ATLAS, and can name the controls that do not transfer from your existing appsec programme.

<b>Skills</b> — `AI Threat Modelling` · `OWASP LLM Top 10` · `MITRE ATLAS` · `Trust Boundary Analysis` · `Attack Surface Mapping` · `Risk Classification` · `Security Architecture Review` · `Non-determinism as a Security Property`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Write a full threat model for one AI system you own or maintain, marking every point where untrusted text reaches the model as a trust boundary
- Map your system's risks onto the OWASP LLM Top 10 2026 and record which entries genuinely do not apply, with the reason for each
- Take your existing appsec checklist and mark every control that stops working when the input is natural language — that list is the scope of this roadmap
- Build an inventory of every model, prompt and data source your organisation runs in production, including the ones nobody registered
- Pick three ATLAS case studies and write, for each, whether your own architecture would have detected it — and what signal would have shown it
- Rank your inventory by blast radius rather than by model size: which system could take the most destructive action if it were manipulated?

</details>

<details><summary><b>Resources</b> — 10, of which 10 free</summary>

- [OWASP GenAI LLM Top 10 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) <sub>OWASP · documentation · free</sub>
- [OWASP Top 10 for LLM & GenAI (initiative hub)](https://genai.owasp.org/initiative/owasp-top-10-for-llm-and-genai/) <sub>OWASP · documentation · free</sub>
- [MITRE ATLAS](https://atlas.mitre.org/) <sub>MITRE · documentation · free</sub>
- [MITRE ATLAS Data (tactics, techniques, case studies)](https://github.com/mitre-atlas/atlas-data) <sub>MITRE · documentation · free</sub>
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) <sub>NIST · documentation · free</sub>
- [Google Secure AI Framework (SAIF)](https://saif.google/) <sub>Google · documentation · free</sub>
- [SAIF Risks Catalogue](https://saif.google/secure-ai-framework/risks) <sub>Google · documentation · free</sub>
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) <sub>OWASP · documentation · free</sub>
- [OWASP AI Security & Privacy Guide](https://owasp.org/www-project-ai-security-and-privacy-guide/) <sub>OWASP · documentation · free</sub>
- [AWS: Generative AI Security Scoping Matrix](https://aws.amazon.com/blogs/security/securing-generative-ai-an-introduction-to-the-generative-ai-security-scoping-matrix/) <sub>AWS · documentation · free</sub>

</details>

### <a id="2-prompt-injection-defence"></a>2. Prompt Injection Defence

<sub>**3-4 weeks**</sub>

The signature failure of the field, and the one with no complete fix. Untrusted content reaching the context window is treated as instruction, and indirect injection through a retrieved document or tool output is the variant teams miss. Done when you can defend a system you own with layered controls and state honestly what your defences still do not stop.

**Assumes:** ai-threat-landscape

<b>Skills</b> — `Prompt Injection Defence` · `Indirect Injection via Content` · `Input & Output Segregation` · `Instruction Hierarchy Design` · `Content Provenance & Tainting` · `Output Validation` · `Defence in Depth` · `Residual Risk Documentation`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build a test corpus of injection-shaped inputs for a system you own, and track what fraction your current defences catch as a single baseline number
- Layer three independent controls — input handling, privilege limits, output validation — and measure each one's contribution separately
- Demonstrate indirect injection against your own retrieval pipeline by planting a document you control, then design the mitigation
- Mark retrieved and tool-returned content as untrusted throughout your pipeline, so its provenance survives all the way to the model call
- Treat model output as untrusted input to whatever consumes it, and add validation at that boundary rather than trusting the model
- Write the residual risk statement for your system: what your defences do not stop, and what compensating control covers it

</details>

<details><summary><b>Resources</b> — 8, of which 8 free</summary>

- [OWASP LLM Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) <sub>OWASP · documentation · free</sub>
- [OWASP GenAI LLM Top 10 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) <sub>OWASP · documentation · free</sub>
- [Anthropic — Mitigate Jailbreaks & Prompt Injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) <sub>Anthropic · documentation · free</sub>
- [OpenAI Safety Best Practices](https://developers.openai.com/api/docs/guides/safety-best-practices) <sub>OpenAI · documentation · free</sub>
- [Not What You've Signed Up For: Indirect Prompt Injection (paper)](https://arxiv.org/abs/2302.12173) <sub>arXiv · documentation · free</sub>
- [Prompt Injection — Ongoing Analysis](https://simonwillison.net/tags/prompt-injection/) <sub>Simon Willison · documentation · free</sub>
- [OWASP Output Handling — Improper Output Handling Guidance](https://genai.owasp.org/llm-top-10/) <sub>OWASP · documentation · free</sub>
- [OWASP SSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) <sub>OWASP · documentation · free</sub>

</details>

### <a id="3-data-supply-chain"></a>3. Data Poisoning & Model Supply Chain

<sub>**3-4 weeks**</sub>

Every third-party model and dataset is code you did not write, executing with your privileges. Serialised model formats can carry arbitrary execution, and a poisoned fine-tuning set installs behaviour no code review will find. Done when you can prove the provenance of every model artefact in your pipeline and have blocked one unsigned or unscanned artefact from reaching production.

**Assumes:** prompt-injection-defence

<b>Skills</b> — `Model Supply Chain Security` · `Data Poisoning Defence` · `Artefact Provenance & Signing` · `Model Scanning` · `Serialisation Risk` · `AI Bill of Materials` · `Training Data Governance` · `Secure ML Pipelines`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build an AI bill of materials for one production system, listing every model, dataset, adapter and their licences and origins
- Scan every third-party model artefact you run for unsafe serialisation, and convert what you can to a safe-by-construction format
- Add signature verification to your model deployment pipeline so an unsigned artefact fails the build rather than shipping
- Trace one fine-tuning dataset to its origin and write down who could have modified it, at which step, without you knowing
- Add integrity checks and access controls to your training data store, then verify them by attempting an unauthorised write yourself
- Introduce a benign marker into a training set you own, then confirm your pipeline's validation catches it before the model is trained

</details>

<details><summary><b>Resources</b> — 8, of which 8 free</summary>

- [Hugging Face Hub Security](https://huggingface.co/docs/hub/en/security) <sub>Hugging Face · documentation · free</sub>
- [Pickle Serialisation Risk & Safetensors](https://huggingface.co/docs/hub/en/security-pickle) <sub>Hugging Face · documentation · free</sub>
- [ModelScan — Model Artefact Scanner](https://github.com/protectai/modelscan) <sub>Protect AI · documentation · free</sub>
- [SLSA Supply Chain Framework](https://slsa.dev/spec/v1.0/about) <sub>OpenSSF · documentation · free</sub>
- [Sigstore Documentation](https://docs.sigstore.dev/) <sub>Sigstore · documentation · free</sub>
- [NIST SP 800-218A: Secure Software Development for Generative AI](https://csrc.nist.gov/pubs/sp/800/218/a/final) <sub>NIST · documentation · free</sub>
- [OWASP Machine Learning Security Top 10](https://owasp.org/www-project-machine-learning-security-top-10/) <sub>OWASP · documentation · free</sub>
- [SAIF Controls](https://saif.google/secure-ai-framework/controls) <sub>Google · documentation · free</sub>

</details>

### <a id="4-model-inference-exposure"></a>4. Model & Inference Exposure

<sub>**3-4 weeks**</sub>

What a served model leaks simply by answering. System prompts surface, training data can be memorised and recovered, and query access alone can approximate a proprietary model. Done when you have measured what one of your own deployed models discloses under sustained querying, and shipped a rate, logging or output control that reduces it — with the before-and-after figure.

**Assumes:** data-supply-chain

<b>Skills</b> — `Sensitive Information Disclosure` · `System Prompt Leakage Defence` · `Training Data Memorisation` · `Model Extraction Defence` · `Inference-time Rate Controls` · `PII Detection & Redaction` · `Unbounded Consumption Defence` · `Privacy-preserving Design`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Query one of your own deployed models until you can characterise what it discloses about its system prompt, then treat that prompt as public and re-secure what depended on its secrecy
- Add PII detection and redaction on both the inbound and outbound path, and measure the false-positive rate before you enable blocking
- Design rate and quota controls that make sustained extraction querying expensive, and confirm normal users never hit them
- Test whether a model you fine-tuned reproduces verbatim strings from its training set, and document what you changed if it did
- Add cost and token ceilings per caller so a single client cannot exhaust your inference budget — then verify by load-testing your own endpoint
- Audit what your inference logs retain, and cut any field that stores user content longer than your privacy policy allows

</details>

<details><summary><b>Resources</b> — 7, of which 7 free</summary>

- [OWASP GenAI LLM Top 10 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) <sub>OWASP · documentation · free</sub>
- [MITRE ATLAS](https://atlas.mitre.org/) <sub>MITRE · documentation · free</sub>
- [NIST Privacy Framework](https://www.nist.gov/privacy-framework) <sub>NIST · documentation · free</sub>
- [Azure AI Content Filtering](https://learn.microsoft.com/en-us/azure/foundry-classic/foundry-models/concepts/content-filter) <sub>Microsoft · documentation · free</sub>
- [Google Cloud Model Armor Overview](https://docs.cloud.google.com/model-armor/overview) <sub>Google Cloud · documentation · free</sub>
- [OpenAI Moderation Guide](https://developers.openai.com/api/docs/guides/moderation) <sub>OpenAI · documentation · free</sub>
- [SAIF Risks Catalogue](https://saif.google/secure-ai-framework/risks) <sub>Google · documentation · free</sub>

</details>

### <a id="5-agent-security"></a>5. Agent Security & Excessive Agency

<sub>**4-5 weeks**</sub>

An agent turns a wrong answer into a wrong action. Tools, credentials and autonomy convert a text failure into a database write or an outbound payment, which is why excessive agency climbed the 2026 list. Done when every tool your agent holds runs under least privilege, destructive actions require confirmation, and you have proved a revoked permission fails closed.

**Assumes:** model-inference-exposure

<b>Skills</b> — `Least-Privilege Tool Design` · `Agent Permission Boundaries` · `Human-in-the-Loop Controls` · `Blast Radius Limitation` · `Sandboxing & Isolation` · `Credential Scoping & Secrets` · `Multi-agent Trust` · `Action Audit Logging`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Enumerate every tool and credential an agent you own can reach, then cut each one to the narrowest scope that still works
- Add explicit human confirmation for destructive or irreversible actions, and define in writing which actions qualify
- Revoke one permission and verify the agent fails closed with a clear error rather than silently degrading or improvising
- Run agent tool execution inside a sandbox with no ambient network or filesystem access, and document what broke when you removed it
- Log every tool call an agent makes with its arguments and outcome, so an investigator can reconstruct a session without the agent's help
- Threat-model an agent that reads from one system and writes to another, and identify where injected content could steer the write

</details>

<details><summary><b>Resources</b> — 10, of which 10 free</summary>

- [OWASP: Agentic AI — Threats and Mitigations](https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/) <sub>OWASP · documentation · free</sub>
- [OWASP: Securing Agentic Applications Guide](https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/) <sub>OWASP · documentation · free</sub>
- [OWASP: Multi-Agentic System Threat Modeling Guide](https://genai.owasp.org/resource/multi-agentic-system-threat-modeling-guide/) <sub>OWASP · documentation · free</sub>
- [Anthropic — Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) <sub>Anthropic · documentation · free</sub>
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/) <sub>Anthropic · documentation · free</sub>
- [Google Agentic Security Framework](https://cloud.google.com/transform/google-agentic-security-framework) <sub>Google Cloud · documentation · free</sub>
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) <sub>OWASP · documentation · free</sub>
- [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) <sub>OWASP · documentation · free</sub>
- [SPIFFE — Workload Identity](https://spiffe.io/docs/latest/spiffe-about/overview/) <sub>SPIFFE · documentation · free</sub>
- [Kubernetes Security Concepts](https://kubernetes.io/docs/concepts/security/) <sub>Kubernetes · documentation · free</sub>

</details>

### <a id="6-rag-data-boundary"></a>6. RAG & Data Boundary Security

<sub>**3-4 weeks**</sub>

Retrieval makes the vector store part of your attack surface and your access-control problem. Embeddings ignore the permissions of the documents they came from, so the default failure is a user retrieving content they were never allowed to read. Done when retrieval in a system you own enforces per-user authorisation at query time, proved by a test where two users ask the same question and get different documents.

**Assumes:** agent-security

<b>Skills</b> — `Retrieval Access Control` · `Vector Store Security` · `Document-level Permissions` · `Embedding Weaknesses` · `Multi-tenant Isolation` · `Knowledge Base Poisoning Defence` · `Data Classification` · `Ingestion Pipeline Validation`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Enforce per-user authorisation at retrieval time, then prove it by having two users with different entitlements ask the same question
- Audit an existing vector store for documents whose source permissions were lost at ingestion — the count is usually not zero
- Implement tenant isolation in a shared vector store and verify a query from one tenant cannot surface another's chunks
- Add validation and provenance tracking to your ingestion pipeline so an untrusted document cannot enter the index unlabelled
- Plant a document containing injected instructions in a test index you own, and confirm your downstream controls neutralise it
- Classify the content in one knowledge base by sensitivity, and route the most sensitive class through stricter retrieval and logging

</details>

<details><summary><b>Resources</b> — 7, of which 7 free</summary>

- [OWASP GenAI LLM Top 10 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) <sub>OWASP · documentation · free</sub>
- [OWASP Top 10 for LLM Applications 2025 (LLM08 Vector & Embedding Weaknesses)](https://genai.owasp.org/llm-top-10/) <sub>OWASP · documentation · free</sub>
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) <sub>OWASP · documentation · free</sub>
- [OWASP LLM Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) <sub>OWASP · documentation · free</sub>
- [Google Cloud Model Armor Overview](https://docs.cloud.google.com/model-armor/overview) <sub>Google Cloud · documentation · free</sub>
- [SAIF Controls](https://saif.google/secure-ai-framework/controls) <sub>Google · documentation · free</sub>
- [Azure Well-Architected — AI Application Design](https://learn.microsoft.com/en-us/azure/well-architected/ai/application-design) <sub>Microsoft · documentation · free</sub>

</details>

### <a id="7-red-teaming"></a>7. Red Teaming Your Own AI Systems

<sub>**3-4 weeks**</sub>

Adversarial evaluation as an authorised, repeatable engineering practice on systems you own. The output is not a list of clever tricks but a regression suite that fails a build. Done when an automated adversarial run executes in CI against a system you are authorised to test, and a change that weakens a defence breaks the pipeline rather than reaching production.

**Assumes:** rag-data-boundary

<b>Skills</b> — `Adversarial Evaluation Design` · `Authorisation & Rules of Engagement` · `Automated Red-Team Tooling` · `Security Regression Testing` · `Coverage Measurement` · `Finding Triage & Severity` · `Reporting to Engineering` · `Continuous Assurance`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Write rules of engagement before testing anything: what is in scope, who authorised it, what you stop for, and where findings are stored
- Run an automated adversarial scanner against a system you own and triage every finding by severity rather than by novelty
- Convert your findings into a regression suite that runs in CI, so a defence that regresses fails the build
- Measure coverage across the OWASP LLM Top 10 categories and publish the gaps — the categories you cannot test yet are the honest result
- Write the findings report engineering will actually act on, leading with the fix rather than the demonstration
- Re-run the full suite after remediation and report the delta, so the security work has a number attached rather than a claim

</details>

<details><summary><b>Resources</b> — 8, of which 8 free</summary>

- [OWASP: GenAI Red Teaming Guide](https://genai.owasp.org/resource/genai-red-teaming-guide/) <sub>OWASP · documentation · free</sub>
- [Microsoft AI Red Teaming Guidance](https://learn.microsoft.com/en-us/security/ai-red-team/) <sub>Microsoft · documentation · free</sub>
- [PyRIT — Python Risk Identification Toolkit](https://azure.github.io/PyRIT/) <sub>Microsoft · documentation · free</sub>
- [garak — LLM Vulnerability Scanner](https://github.com/NVIDIA/garak) <sub>NVIDIA · documentation · free</sub>
- [garak Documentation](https://docs.garak.ai/garak) <sub>NVIDIA · documentation · free</sub>
- [promptfoo Red Teaming Documentation](https://www.promptfoo.dev/docs/red-team/) <sub>promptfoo · documentation · free</sub>
- [Microsoft: Lessons from Red Teaming 100 Generative AI Products](https://www.microsoft.com/en-us/security/blog/2025/01/13/3-takeaways-from-red-teaming-100-generative-ai-products/) <sub>Microsoft · documentation · free</sub>
- [Anthropic — Develop Tests & Evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) <sub>Anthropic · documentation · free</sub>

</details>

### <a id="8-guardrails-runtime"></a>8. Guardrails & Runtime Defence

<sub>**3-4 weeks**</sub>

The controls that run on every request in production, where latency and false positives are real costs. A filter that blocks 2% of legitimate traffic gets switched off within a week, so tuning is the engineering. Done when a guardrail you built runs on live traffic with measured precision and recall, and you can state its latency cost per request.

**Assumes:** red-teaming

<b>Skills</b> — `Guardrail Architecture` · `Input & Output Filtering` · `Classifier Tuning` · `False Positive Management` · `Latency Budgeting` · `Fail-safe vs Fail-open Design` · `Policy Enforcement Points` · `Guardrail Evaluation`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Deploy a guardrail on live traffic and report its precision and recall against a labelled set you built first
- Measure the latency your guardrail adds per request, and decide explicitly whether it fails open or closed when it times out
- Tune a filter until legitimate traffic passes reliably, and record how many real requests the untuned version would have blocked
- Place enforcement points on both the inbound and outbound path, and show which class of failure each one catches
- Compare a managed guardrail service against your own implementation on the same labelled set, and justify the choice you keep
- Build the escape hatch: a documented, audited way to disable a guardrail in an incident without a deploy

</details>

<details><summary><b>Resources</b> — 8, of which 8 free</summary>

- [AWS Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) <sub>AWS · documentation · free</sub>
- [Bedrock Guardrails Components](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-components.html) <sub>AWS · documentation · free</sub>
- [Google Cloud Model Armor Overview](https://docs.cloud.google.com/model-armor/overview) <sub>Google Cloud · documentation · free</sub>
- [Azure AI Content Filtering](https://learn.microsoft.com/en-us/azure/foundry-classic/foundry-models/concepts/content-filter) <sub>Microsoft · documentation · free</sub>
- [OpenAI Moderation Guide](https://developers.openai.com/api/docs/guides/moderation) <sub>OpenAI · documentation · free</sub>
- [Anthropic — Mitigate Jailbreaks & Prompt Injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) <sub>Anthropic · documentation · free</sub>
- [Anthropic — Reduce Hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) <sub>Anthropic · documentation · free</sub>
- [SAIF Controls](https://saif.google/secure-ai-framework/controls) <sub>Google · documentation · free</sub>

</details>

### <a id="9-governance-compliance"></a>9. Governance & Compliance

<sub>**2-3 weeks**</sub>

Where security work becomes something an auditor and a regulator can read. The EU AI Act attaches obligations to risk tier, and NIST AI RMF gives the vocabulary most programmes are assessed against. Done when you have classified one AI system against the EU AI Act's risk tiers, mapped your controls to NIST AI RMF functions, and named the gaps with owners.

**Assumes:** guardrails-runtime

<b>Skills</b> — `NIST AI RMF Application` · `EU AI Act Risk Tiering` · `Control Mapping & Evidence` · `AI System Documentation` · `Audit Readiness` · `Policy Authoring` · `Cross-functional Governance` · `Third-party AI Risk Assessment`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Classify one AI system against the EU AI Act risk tiers and write the justification you would defend to a regulator
- Map your existing controls to the NIST AI RMF Govern, Map, Measure and Manage functions, and list every gap with a named owner
- Assemble the evidence pack for one system — model cards, evaluations, approvals — as an auditor would ask for it
- Write the acceptable-use policy for AI systems at your organisation, in language a non-engineer will follow
- Build the third-party AI vendor assessment questionnaire you would send before approving a new model provider
- Run a governance review with legal and product, and record which of your technical controls they could not evaluate — that gap is a documentation defect

</details>

<details><summary><b>Resources</b> — 10, of which 10 free</summary>

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) <sub>NIST · documentation · free</sub>
- [NIST AI 100-1: AI RMF 1.0 (full text)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) <sub>NIST · documentation · free</sub>
- [NIST AI 600-1: Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) <sub>NIST · documentation · free</sub>
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/) <sub>NIST · documentation · free</sub>
- [EU AI Act — Official Journal Text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689) <sub>European Union · documentation · free</sub>
- [EU AI Act Explorer](https://artificialintelligenceact.eu/ai-act-explorer/) <sub>Future of Life Institute · documentation · free</sub>
- [EU AI Act High-Level Summary](https://artificialintelligenceact.eu/high-level-summary/) <sub>Future of Life Institute · documentation · free</sub>
- [European Commission — Regulatory Framework for AI](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) <sub>European Commission · documentation · free</sub>
- [OWASP: LLM & GenAI Security Center of Excellence Guide](https://genai.owasp.org/resource/llm-and-generative-ai-security-center-of-excellence-guide/) <sub>OWASP · documentation · free</sub>
- [NIST SP 800-53 Rev. 5: Security & Privacy Controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) <sub>NIST · documentation · free</sub>

</details>

### <a id="10-ai-incident-response"></a>10. Incident Response for AI Systems

<sub>**3-4 weeks**</sub>

What you do once it has already happened. AI incidents resist the usual playbook: there is no stack trace, the behaviour may not reproduce, and the logs you need are ones nobody thought to keep. Done when you have run a tabletop for an AI-specific incident on a system you own and closed at least one telemetry gap it exposed.

**Assumes:** governance-compliance

<b>Skills</b> — `AI Incident Response` · `Forensic Logging for LLMs` · `Non-reproducible Investigation` · `Detection Engineering` · `Containment & Model Rollback` · `Blameless Postmortems` · `Disclosure & Communication` · `Abuse Monitoring`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Run a tabletop for an AI-specific incident on a system you own, and record every question the responders could not answer from telemetry
- Close one telemetry gap the tabletop exposed — log the prompt, retrieval set and tool calls needed to reconstruct a session
- Write the containment playbook for a compromised model or prompt, including how to roll back a model version under load
- Build a detection that fires on anomalous agent behaviour, such as an unusual tool-call sequence, and tune out the false positives
- Investigate an incident that will not reproduce, and write the finding honestly in terms of likelihood rather than certainty
- Draft the disclosure template for an AI incident affecting users, saying what happened without either minimising it or over-explaining internals

</details>

<details><summary><b>Resources</b> — 8, of which 8 free</summary>

- [NIST SP 800-61r3: Incident Response Recommendations](https://csrc.nist.gov/pubs/sp/800/61/r3/final) <sub>NIST · documentation · free</sub>
- [NIST SP 800-61r3 (full text)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf) <sub>NIST · documentation · free</sub>
- [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) <sub>PagerDuty · documentation · free</sub>
- [PagerDuty Postmortem Guide](https://postmortems.pagerduty.com/) <sub>PagerDuty · documentation · free</sub>
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) <sub>OWASP · documentation · free</sub>
- [MITRE ATLAS](https://atlas.mitre.org/) <sub>MITRE · documentation · free</sub>
- [OpenTelemetry GenAI Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) <sub>OpenTelemetry · documentation · free</sub>
- [SAIF Risks Catalogue](https://saif.google/secure-ai-framework/risks) <sub>Google · documentation · free</sub>

</details>

## Questions

<details><summary><b>What makes AI security different from regular application security?</b></summary><br>

One property breaks the tools you already trust: the instruction and the data arrive in the same channel, so there is no prepared statement for a prompt. Input validation as you know it does not apply, because the payload is natural language and the parser is a model built to be helpful. Taking your existing appsec checklist and marking every control that stops working when the input is natural language is literally the first project in the roadmap.

</details>

<details><summary><b>How long does this AI security engineer roadmap take?</b></summary><br>

Budget 7-9 months at around 10 hours a week, spread across ten phases from threat landscape through incident response. Phase five, agent security, is where the threat model stops being theoretical because tools, credentials and autonomy turn a wrong answer into a wrong action.

</details>

<details><summary><b>Why does the roadmap cover prompt injection before agent security or RAG?</b></summary><br>

The ordering follows blast radius rather than novelty. Prompt injection comes first because it is the delivery mechanism for most of the other risks, and agent security is covered before RAG because an agent holding tools can act on what it was tricked into believing, which raises the stakes of an injection considerably.

</details>

<details><summary><b>What salary can an AI security engineer expect?</b></summary><br>

Using Security Engineer salary data as a proxy (the AI-specific title has too few reported salaries to publish on its own), entry-level sits around $140,357, the overall average is about $172,800, and senior roles average around $213,409 in the US market. These are Glassdoor estimates for the broader Security Engineer title, not a title-matched AI Security Engineer figure.

</details>

<details><summary><b>What do I need to know before starting this roadmap?</b></summary><br>

You should already have working knowledge of application security fundamentals such as authentication, authorization and input validation, plus practical experience calling an LLM API and reading its responses. Comfort reading and writing code in at least one language, ideally Python, and familiarity with cloud infrastructure and CI/CD round out the prerequisites.

</details>

<details><summary><b>Why is guardrail tuning treated as real engineering work in this roadmap?</b></summary><br>

Guardrails run on every request in production, where latency and false positives are real costs, and a filter that blocks 2% of legitimate traffic gets switched off within a week. The roadmap treats tuning as the core skill: a guardrail is only done when it runs on live traffic with measured precision and recall, and you can state its latency cost per request.

</details>

## Neighbouring paths

[AI Agents Engineer](ai-agents-engineer.md) · [Site Reliability Engineer](sre.md)

## Certifications on this path

| Certification | Provider | Cost | Exam |
|---|---|---|---|
| [Artificial Intelligence Governance Professional (AIGP)](../certifications/iapp-aigp.md) | IAPP (International Association of Privacy Professionals) | `$799 USD (non-member) / $649 USD (IAPP member). Retakes $625 / $475. Excludes the $250 certification maintenance fee per two-year term, waived by $295/year IAPP membership.` | 2 hours 45 minutes, pass 300 on a scaled 100-500 range (not a percentage) — 85 of the 100 questions are scored |
| [Certified Cloud Security Professional (CCSP)](../certifications/ccsp.md) | ISC2 | `$599 USD` | 3 hours, pass 700 out of 1000 points |

---

<sub>Source of truth: [`data/roadmaps/ai-security-engineer.yaml`](../data/roadmaps/ai-security-engineer.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
