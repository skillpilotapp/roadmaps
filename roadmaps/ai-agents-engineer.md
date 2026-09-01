<!-- Generated from data/roadmaps/ai-agents-engineer.yaml by tools/render-markdown.mjs. Do not edit. -->

# AI Agents Engineer Roadmap

> A path from LLM and programming fundamentals through agent orchestration, tool use, and production deployment for building autonomous AI agent systems.

**Intermediate** · **8 phases** · **9-14 months** · updated 2026-08-09

This path assumes you write Python and call REST APIs comfortably, but have not built agentic systems. If you have used an LLM API for a chatbot or a summariser, you have started.

One property makes this different from everything else you have built: **the same input does not produce the same output**. Unit tests asserting exact values, bugs that reproduce, "works on my machine" — none of it holds. An agent that succeeded nine times can fail the tenth with no line of code to fix. That is why evaluation and safety come *before* production deployment here, and it is the ordering people most often skip. It is also why agents fail differently: a conventional bug throws, while an agent produces something plausible and wrong, confidently, and a user may act on it before anyone notices.

The arithmetic that constrains every design below: a single call at 95% reliability is usually fine, but ten chained calls at 95% each land near 60%.

Each phase lists what to learn, what to build, and how to know you are done. Expect 9–14 months. Treat the named frameworks as a current starting point rather than a permanent stack — the field moves, but tool design, evaluation rigour and failure analysis transfer.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$101,541` | Glassdoor AI Engineer Entry Level salary estimate (average, US) | 2026-08-04 |
| Mid | `$147,289` | Glassdoor AI Agent Engineer salary estimate (average, US) | 2026-08-04 |
| Senior | `$164,244` | Glassdoor Senior AI Agent Engineer salary estimate (average, US) | 2026-08-04 |

Total duration is **9-14 months** — <sub>SkillPilot editorial estimate, 2026-08-04</sub>

## Before you start

- Proficiency in Python
- Basic familiarity with REST APIs and JSON

## The path

| # | Phase | Duration |
|---:|---|---|
| 1 | [LLM & Programming Foundations](#1-llm-foundations) | 1-2 months |
| 2 | [Tool Use & Function Calling](#2-tool-use) | 1-2 months |
| 3 | [Agent Orchestration & Memory](#3-orchestration) | 2-3 months |
| 4 | [Evaluation, Safety & Guardrails](#4-evaluation-safety) | 1-2 months |
| 5 | [Production Deployment & Observability](#5-production-deployment) | 2-3 months |
| 6 | [Multi-Agent Systems & Coordination](#6-multi-agent-systems) | 3-4 weeks |
| 7 | [Enterprise Integration & Data Access](#7-enterprise-integration) | 3-4 weeks |
| 8 | [Specialization & Portfolio](#8-specialization-career) | 3-4 weeks |

---

### <a id="1-llm-foundations"></a>1. LLM & Programming Foundations

<sub>**1-2 months**</sub>

How models behave at a level useful for engineering. Done when you can predict which prompts will fail before running them, and explain a wrong answer in terms of context and sampling rather than "the model is dumb". Build on a system whose behaviour surprises you and you write workarounds for problems you have misdiagnosed.

<b>Skills</b> — `Python for AI` · `LLM Fundamentals` · `Tokenisation & Context Windows` · `Sampling Parameters` · `Prompt Engineering` · `Structured Output & JSON Mode` · `Model Selection & Tradeoffs` · `API Integration`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build a CLI that summarises a text file with configurable length and reports token usage and cost per run
- Write a harness that runs one task against three prompt variants and scores the outputs against a rubric you defined in advance
- Run the same prompt twenty times at temperature 0 and at temperature 1, and characterise the difference in the output distribution
- Deliberately overflow a context window and observe what the model loses first, then design around it
- Get the same task working on a small cheap model and a large one, and record the quality and cost difference — the answer is often not the expensive one
- Force structured JSON output and handle the cases where it comes back malformed anyway

</details>

<details><summary><b>Resources</b> — 6, of which 6 free</summary>

- [Anthropic API Documentation](https://platform.claude.com/docs/) <sub>Anthropic · documentation · free</sub>
- [Prompt Engineering Guide](https://www.promptingguide.ai/) <sub>DAIR.AI · documentation · free</sub>
- [Anthropic Prompt Engineering Overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) <sub>Anthropic · documentation · free</sub>
- [OpenAI Platform Documentation](https://platform.openai.com/docs/overview) <sub>OpenAI · documentation · free</sub>
- [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course/chapter1/1) <sub>Hugging Face · course · free</sub>
- [Tiktokeniser (token counting playground)](https://platform.openai.com/tokenizer) <sub>OpenAI · tutorial · free</sub>

</details>

### <a id="2-tool-use"></a>2. Tool Use & Function Calling

<sub>**1-2 months**</sub>

The smallest complete agent: one model, one tool, one decision about whether to call it. Done when your agent picks the right tool for ambiguous requests and recovers when a tool returns an error instead of stopping or inventing a result. The tool description matters more than its implementation — it is what the model actually reasons over.

**Assumes:** llm-foundations

<b>Skills</b> — `Function Calling` · `Tool Description Design` · `Structured Output Parsing` · `Argument Validation` · `Error Handling in Agent Loops` · `Retry & Fallback Strategy` · `Model Context Protocol (MCP)`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build an agent that answers questions using two tools and picks correctly based on the request
- Implement retry and fallback so one failed call does not end the task, and make the failure legible to the model rather than opaque
- Give the agent a deliberately ambiguous request and watch which tool it picks — then improve the descriptions until it picks right
- Return a malformed response from a tool on purpose and verify the agent recovers instead of hallucinating a result
- Validate tool arguments before execution and handle the case where the model invents a parameter that does not exist
- Write the same tool with a vague description and a precise one, and measure the difference in selection accuracy

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Anthropic Tool Use Documentation](https://platform.claude.com/docs/en/build-with-claude/tool-use/overview) <sub>Anthropic · documentation · free</sub>
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/) <sub>Anthropic · documentation · free</sub>
- [OpenAI Function Calling Guide](https://platform.openai.com/docs/guides/function-calling) <sub>OpenAI · documentation · free</sub>
- [Pydantic Documentation (validation for tool arguments)](https://docs.pydantic.dev/latest/) <sub>Pydantic · documentation · free</sub>

</details>

### <a id="3-orchestration"></a>3. Agent Orchestration & Memory

<sub>**2-3 months**</sub>

Where errors start compounding: ten chained calls at 95% reliability each land near 60%. Done when your agent completes a five-step task reliably, and when it fails you can say which step and why from the trace alone. This phase is about structuring work so failure does not multiply unchecked.

**Assumes:** tool-use

<b>Skills</b> — `Agent Orchestration Frameworks` · `Task Decomposition` · `Planning & Replanning` · `State Management Across Steps` · `Context Window Management` · `Long-Term Memory Design` · `Retrieval (RAG)` · `Vector Databases`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build a research agent that plans a multi-step task, executes it, and revises the plan when a step fails or returns something unexpected
- Add a memory layer so the agent recalls facts across sessions, and demonstrate correct recall after twenty-plus turns
- Measure your agent's per-step success rate, then compute the end-to-end rate — and see whether the arithmetic matches what you observe
- Take a task that fails end to end and decompose it until each step is reliable enough that the chain holds
- Handle a conversation that outgrows the context window without losing the thread
- Build the same feature twice, once with retrieval and once with a well-designed tool call, and decide which was actually warranted

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/) <sub>LangChain · documentation · free</sub>
- [Anthropic — Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) <sub>Anthropic · documentation · free</sub>
- [LlamaIndex Documentation](https://docs.llamaindex.ai/en/stable/) <sub>LlamaIndex · documentation · free</sub>
- [Anthropic Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) <sub>Anthropic · documentation · free</sub>
- [Pinecone Learning Center (retrieval concepts)](https://www.pinecone.io/learn/) <sub>Pinecone · tutorial · free</sub>

</details>

### <a id="4-evaluation-safety"></a>4. Evaluation, Safety & Guardrails

<sub>**1-2 months**</sub>

Before deployment, deliberately. With non-deterministic output, "it seemed better" is not measurement, and the evaluation harness is what tells you whether the thing works at all. Done when you can say whether a prompt change made things better with a number rather than an impression.

**Assumes:** orchestration

<b>Skills</b> — `Evaluation Set Design` · `Automated Scoring & LLM-as-Judge` · `Regression Testing for Agents` · `Guardrail Design` · `Red-Teaming` · `Prompt Injection Defence` · `Human-in-the-Loop Review` · `Least-Privilege Tool Access`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build an evaluation suite of 30+ cases covering both expected-success and expected-refusal, running in CI on every change
- Implement a guardrail that blocks destructive tool calls without explicit human confirmation
- Make a prompt change and prove with your eval set whether it helped — including the case where it helped one thing and broke another
- Red-team your own agent with prompt injection through tool output, not just through user input, and fix what gets through
- Scope your agent's credentials to the minimum, then verify by removing a permission and confirming it fails safely rather than silently
- Build a human review queue for low-confidence outputs and define what "low confidence" concretely means

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Anthropic Guide to Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) <sub>Anthropic · documentation · free</sub>
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) <sub>OWASP · documentation · free</sub>
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) <sub>NIST · documentation · free</sub>
- [Anthropic Red-Teaming Guidance](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) <sub>Anthropic · documentation · free</sub>
- [OpenAI Evals Framework](https://github.com/openai/evals) <sub>OpenAI · documentation · free</sub>

</details>

### <a id="5-production-deployment"></a>5. Production Deployment & Observability

<sub>**2-3 months**</sub>

Agent observability is its own problem: traditional metrics tell you it responded in 800ms and cost $0.02, not that it was wrong. Done when you know your per-request cost, your p95 latency and your task success rate in production — especially the third, which most teams never measure.

**Assumes:** evaluation-safety

<b>Skills</b> — `Agent Observability & Tracing` · `Task Success Rate Measurement` · `Cost & Token Monitoring` · `Caching & Cost Reduction` · `Latency Optimisation & Streaming` · `Rate Limiting & Backpressure` · `Deployment Pipelines` · `Graceful Degradation & Fallback Models`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Deploy an agent behind an API with request logging, per-user rate limiting and a dashboard for token spend and latency
- Instrument task success rate in production, not just latency and cost — decide what "success" means before you can measure it
- Alert on error rate and cost per request crossing a threshold, with a runbook for whoever is on call
- Cut cost per request by at least 30% through caching, prompt trimming or model routing, and show the before and after
- Trace one production request end to end across every model and tool call it triggered
- Add a fallback path for when the primary model is unavailable, then test it by blocking the primary

</details>

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [LangSmith Observability Documentation](https://docs.smith.langchain.com/) <sub>LangChain · documentation · free</sub>
- [OpenTelemetry GenAI Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) <sub>OpenTelemetry · documentation · free</sub>
- [Anthropic Prompt Caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) <sub>Anthropic · documentation · free</sub>
- [Anthropic Streaming Documentation](https://platform.claude.com/docs/en/build-with-claude/streaming) <sub>Anthropic · documentation · free</sub>
- **Designing Data-Intensive Applications** <sub>Martin Kleppmann · book · paid</sub>

</details>

### <a id="6-multi-agent-systems"></a>6. Multi-Agent Systems & Coordination

<sub>**3-4 weeks**</sub>

One agent hits a ceiling a team of specialists does not: a single prompt trying to plan, research and write well is worse at all three than three agents doing one each. Done when you can hand a task to a coordinator, watch it delegate to two or more sub-agents, and explain from the trace why the split made the result better rather than just slower and more expensive.

**Assumes:** orchestration

<b>Skills</b> — `Multi-Agent Architecture Patterns` · `Agent-to-Agent Communication` · `Task Delegation & Handoff` · `Shared State & Coordination` · `Deadlock & Loop Detection` · `Sub-Agent Evaluation` · `Cost-Aware Agent Routing`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build a coordinator agent that delegates research, drafting and review to three separate sub-agents and merges their output into one deliverable
- Compare a single generalist agent against your multi-agent split on the same ten tasks, and report where the split won, lost and tied — not just the average
- Add loop detection so two agents handing a task back and forth terminate with a clear failure instead of burning budget silently
- Give one sub-agent a cheaper model than the others and measure the cost and quality tradeoff on the whole pipeline
- Instrument per-agent cost and latency so you can say which sub-agent is the bottleneck, not just the total

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Anthropic — Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) <sub>Anthropic · documentation · free</sub>
- [LangGraph Multi-Agent Documentation](https://langchain-ai.github.io/langgraph/concepts/multi_agent/) <sub>LangChain · documentation · free</sub>
- [Anthropic — How We Built Our Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system) <sub>Anthropic · documentation · free</sub>
- [Microsoft AutoGen Documentation](https://microsoft.github.io/autogen/stable/) <sub>Microsoft · documentation · free</sub>

</details>

### <a id="7-enterprise-integration"></a>7. Enterprise Integration & Data Access

<sub>**3-4 weeks**</sub>

Agents earn their keep against real systems, not demo data — a CRM with inconsistent fields, a database you cannot rewrite, an API with rate limits nobody documented. Done when your agent reads from and writes to a production-shaped system under real permission constraints, and a bad write is rejected before it lands rather than cleaned up after.

**Assumes:** production-deployment

<b>Skills</b> — `Database & API Integration for Agents` · `Schema-Aware Querying` · `Write-Action Safety & Confirmation` · `Authentication & Scoped Credentials` · `Data Freshness & Caching Tradeoffs` · `Enterprise Search & Document Retrieval` · `Audit Logging`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Connect an agent to a real database schema with 10+ tables and have it answer questions that require a join, verifying the generated query before execution
- Build a write action — creating a ticket, updating a record — that requires explicit confirmation and logs who approved it and why
- Scope the agent's database credentials to read-only on everything except one table, then verify a write attempt elsewhere fails safely
- Integrate an internal document search so the agent cites the specific document and section it drew an answer from, not just "based on our docs"
- Simulate a stale-cache scenario and show your agent either refreshes the data or flags that its answer may be out of date

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/) <sub>Anthropic · documentation · free</sub>
- [Anthropic Tool Use Documentation](https://platform.claude.com/docs/en/build-with-claude/tool-use/overview) <sub>Anthropic · documentation · free</sub>
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) <sub>OWASP · documentation · free</sub>
- [PostgreSQL Documentation — Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) <sub>PostgreSQL · documentation · free</sub>

</details>

### <a id="8-specialization-career"></a>8. Specialization & Portfolio

<sub>**3-4 weeks**</sub>

Pick a direction — agent platform tooling, a vertical like legal or customer support, or research-adjacent evaluation work — and build the piece that shows judgment under real constraints, not another tutorial clone. Done when someone outside your team used something you built, on their own data, without you sitting next to them.

**Assumes:** multi-agent-systems; enterprise-integration

<b>Skills</b> — `Domain Specialization` · `Agent Platform Tooling` · `Technical Writing & Case Studies` · `Open Source Contribution` · `Stakeholder Communication` · `Cost Modelling for Agent Products`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Ship an agent for a real workflow in a domain you chose, get a person outside your team to use it unsupervised, and fix what they got stuck on
- Get one non-trivial pull request merged into an open-source agent framework — a bug fix, an integration or documentation that someone needed
- Write a case study of a production agent you built, including what failed, what the evaluation numbers actually said, and what you would change
- Build a cost model that predicts monthly spend from expected request volume, then check it against a week of real usage
- Present your production agent's failure modes and mitigations to someone technical who was not involved, and revise based on the questions they ask

</details>

<details><summary><b>Resources</b> — 3, of which 2 free</summary>

- [Anthropic Engineering Blog](https://www.anthropic.com/engineering) <sub>Anthropic · documentation · free</sub>
- [LangChain Blog](https://blog.langchain.dev/) <sub>LangChain · documentation · free</sub>
- **Designing Data-Intensive Applications** <sub>Martin Kleppmann · book · paid</sub>

</details>

## Questions

<details><summary><b>How long does it take to become an AI agents engineer?</b></summary><br>

Expect 9-14 months across eight phases, from LLM and programming foundations through tool use, orchestration, evaluation, production deployment, multi-agent systems, enterprise integration and a final specialization portfolio. The named frameworks in each phase are a current starting point rather than a permanent stack — the field moves, but tool design, evaluation rigour and failure analysis transfer.

</details>

<details><summary><b>What makes building AI agents different from regular software engineering?</b></summary><br>

The same input does not produce the same output, so unit tests asserting exact values and bugs that reliably reproduce stop holding. A conventional bug throws an error, while an agent instead produces something plausible and wrong, confidently, and a user may act on it before anyone notices — which is why evaluation and safety come before production deployment in this roadmap.

</details>

<details><summary><b>Why does reliability drop so much when an agent chains multiple steps?</b></summary><br>

A single call at 95% reliability is usually fine on its own, but ten chained calls at 95% each land near 60% end to end. That arithmetic is what the Agent Orchestration & Memory phase is built around, and it is why the roadmap treats task decomposition and per-step success measurement as core skills rather than optional polish.

</details>

<details><summary><b>What do I need to know before starting this roadmap?</b></summary><br>

You should be proficient in Python and comfortable working with REST APIs and JSON. The path assumes you have not built agentic systems yet, but if you have used an LLM API for a chatbot or a summariser, you already have a running start.

</details>

<details><summary><b>How much can an AI agents engineer earn?</b></summary><br>

In the United States, entry-level roles average around $101,541, rising to about $147,289 at mid-level and $164,244 for senior AI agent engineers, based on Glassdoor salary estimates. These figures cover the full career arc the roadmap targets, from someone finishing the foundational phases through a senior specialist with a shipped production portfolio.

</details>

<details><summary><b>Why does evaluation come before production deployment in this roadmap?</b></summary><br>

With non-deterministic output, "it seemed better" is not measurement — an evaluation harness is what tells you whether a prompt change actually helped, including cases where it helped one thing and broke another. That is why Evaluation, Safety & Guardrails is its own phase placed deliberately before Production Deployment & Observability, rather than treated as a late-stage checklist item.

</details>

## Neighbouring paths

[AI Security Engineer](ai-security-engineer.md)

## Certifications on this path

| Certification | Provider | Cost | Exam |
|---|---|---|---|
| [Artificial Intelligence Governance Professional (AIGP)](../certifications/iapp-aigp.md) | IAPP (International Association of Privacy Professionals) | `$799 USD (non-member) / $649 USD (IAPP member). Retakes $625 / $475. Excludes the $250 certification maintenance fee per two-year term, waived by $295/year IAPP membership.` | 2 hours 45 minutes, pass 300 on a scaled 100-500 range (not a percentage) — 85 of the 100 questions are scored |

---

<sub>Source of truth: [`data/roadmaps/ai-agents-engineer.yaml`](../data/roadmaps/ai-agents-engineer.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
