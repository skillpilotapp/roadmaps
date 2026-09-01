<!-- Generated from data/roadmaps/sre.yaml by tools/render-markdown.mjs. Do not edit. -->

# Site Reliability Engineer Roadmap

> A path from DevOps fundamentals into the specialized discipline of site reliability engineering, covering SLOs, observability, incident response, data reliability, and capacity planning.

**Advanced** · **10 phases** · **8-11 months at 10h/week** · updated 2026-08-10

This path assumes you have run production systems and want the discipline that makes reliability a decision rather than a reflex. If you already carry a pager, phases one and four are where the vocabulary you use daily gets precise.

The whole subject rests on one idea: **reliability is a target you choose, not a maximum you chase**. An SLO set at what the system currently does guarantees no work is ever safe, because any change looks like a regression. Set it from what users need and you get a budget to spend.

Phase order matters more here than elsewhere. Instrumentation before alerting, because you cannot alert on a signal you do not have; incidents before postmortems, because a postmortem process with no incidents to feed it is a template.

Expect 8–11 months. Phase eight is the wall — stateful systems are where "just redeploy it" stops being an answer.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$95,000 - $161,000` | Glassdoor Site Reliability Engineer salary estimate, up to 1 year experience (US) | 2026-08-04 |
| Mid | `$172,508` | Glassdoor Site Reliability Engineer salary estimate (overall average, US) | 2026-08-04 |
| Senior | `$185,489` | Glassdoor Senior Site Reliability Engineer salary estimate (average, US) | 2026-08-04 |

Total duration is **8-11 months at 10h/week** — <sub>SkillPilot editorial estimate, 2026-08-08</sub>

## Before you start

- Working knowledge of Linux and the command line
- Basic cloud infrastructure experience (VMs, networking)
- Comfort reading and writing code in at least one language

## The path

**Define reliability** <sub>phases 1–3</sub> → **Run it in production** <sub>phases 4–6</sub> → **Learn from failure** <sub>phase 7</sub> → **Hold it at scale** <sub>phases 8–10</sub>

| # | Phase | Duration |
|---:|---|---|
| 1 | [Reliability Foundations](#1-reliability-foundations) | 3-4 weeks |
| 2 | [Instrumentation & Metrics](#2-instrumentation-metrics) | 4-6 weeks |
| 3 | [Tracing, Logging & Debugging Production](#3-tracing-logging) | 4-6 weeks |
| 4 | [Alerting on SLOs & On-Call Health](#4-alerting-on-slos) | 3-4 weeks |
| 5 | [Automation & Toil Reduction](#5-automation-toil) | 4-6 weeks |
| 6 | [Incident Response](#6-incident-response) | 3-4 weeks |
| 7 | [Postmortems & Organisational Learning](#7-incident-learning) | 2-3 weeks |
| 8 | [Data & Stateful Systems Reliability](#8-data-reliability) | 4-6 weeks |
| 9 | [Capacity Planning & Cost Efficiency](#9-capacity-and-cost) | 3-4 weeks |
| 10 | [Reliability at Platform Scale](#10-platform-scale) | 5-7 weeks |

---

### <a id="1-reliability-foundations"></a>1. Reliability Foundations

<sub>**3-4 weeks**</sub>

The vocabulary that makes every later conversation precise. Done when you can write an SLO for a service you did not build, defend the target against "why not higher?", and say what happens when the budget runs out. Targets come from what users need, not from what the system currently does — setting the SLO at current performance guarantees no work is ever safe.

<b>Skills</b> — `SLI Selection` · `SLO Design` · `Error Budgets & Burn Rate` · `SLA vs SLO Distinction` · `Availability Arithmetic` · `Risk & Tradeoff Analysis` · `Reliability Economics` · `Stakeholder Negotiation`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Define SLIs and SLOs for a checkout API, including a written error-budget policy stating exactly what stops when the budget is exhausted and who decides
- Take a service you did not build and write its SLO from the outside, then defend the number against both "why not higher?" and "why not lower?"
- Calculate the permitted downtime for 99%, 99.9%, 99.95% and 99.99% and write down what each would actually cost to defend
- Find a service whose current performance was quietly adopted as its target, and write the argument for what the target should be instead
- Write the one-page error-budget policy you would actually take to a product manager, in language that survives contact with someone who does not care about percentiles
- Pick a real outage from a public postmortem and work out what it cost in error budget — then say whether the SLO was set correctly

</details>

<details><summary><b>Resources</b> — 7, of which 6 free</summary>

- [Google SRE Book (free online)](https://sre.google/sre-book/table-of-contents/) <sub>Google · book · free</sub>
- [Google SRE Workbook](https://sre.google/workbook/table-of-contents/) <sub>Google · book · free</sub>
- [Service Level Objectives (SRE Book chapter)](https://sre.google/sre-book/service-level-objectives/) <sub>Google · documentation · free</sub>
- [Implementing SLOs (SRE Workbook chapter)](https://sre.google/workbook/implementing-slos/) <sub>Google · documentation · free</sub>
- [Embracing Risk (SRE Book chapter)](https://sre.google/sre-book/embracing-risk/) <sub>Google · documentation · free</sub>
- [Simplicity (SRE Book chapter)](https://sre.google/sre-book/simplicity/) <sub>Google · documentation · free</sub>
- **Site Reliability Engineering** <sub>Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy · book · paid</sub> — free alternative: [Site Reliability Engineering (full text, free online)](https://sre.google/sre-book/table-of-contents/)

</details>

### <a id="2-instrumentation-metrics"></a>2. Instrumentation & Metrics

<sub>**4-6 weeks**</sub>

An SLO with no instrumentation is a wish. This phase is about producing the signal: what to measure, how to name it, and what it costs to keep. Done when a service you instrumented can answer a question you had not thought of when you instrumented it. Averages hide the users you are failing — if you only learn one thing here, make it percentiles.

**Assumes:** reliability-foundations

<b>Skills</b> — `Metrics & Instrumentation` · `Prometheus & PromQL` · `OpenTelemetry` · `Histograms & Percentiles` · `Metric Naming Conventions` · `Cardinality Management` · `Grafana & Dashboard Design` · `The Four Golden Signals`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Instrument a service with the four golden signals — latency, traffic, errors, saturation — using OpenTelemetry rather than a vendor SDK
- Build a dashboard an on-call engineer can read at 3am without you, then test that claim by handing it to someone else and saying nothing
- Replace an average-latency panel with a histogram-backed p50/p95/p99 view and write down which users the average was hiding
- Deliberately blow up metric cardinality in a test environment, watch what it costs, and then fix it
- Write the metric naming convention for a service and apply it retroactively to everything already emitting
- Compute an SLO compliance figure directly from your own metrics, and reconcile it against what your provider's dashboard claims

</details>

<details><summary><b>Resources</b> — 10, of which 10 free</summary>

- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/) <sub>Prometheus · documentation · free</sub>
- [Prometheus Metric & Label Naming](https://prometheus.io/docs/practices/naming/) <sub>Prometheus · documentation · free</sub>
- [Prometheus Histograms & Summaries](https://prometheus.io/docs/practices/histograms/) <sub>Prometheus · documentation · free</sub>
- [Prometheus Instrumentation Practices](https://prometheus.io/docs/practices/instrumentation/) <sub>Prometheus · documentation · free</sub>
- [PromQL Querying Basics](https://prometheus.io/docs/prometheus/latest/querying/basics/) <sub>Prometheus · documentation · free</sub>
- [OpenTelemetry Metrics Concepts](https://opentelemetry.io/docs/concepts/signals/metrics/) <sub>OpenTelemetry · documentation · free</sub>
- [Monitoring Distributed Systems (SRE Book chapter)](https://sre.google/sre-book/monitoring-distributed-systems/) <sub>Google · documentation · free</sub>
- [PromLabs PromQL Cheat Sheet](https://promlabs.com/promql-cheat-sheet/) <sub>PromLabs · tutorial · free</sub>
- [Grafana Dashboard Best Practices](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/) <sub>Grafana Labs · documentation · free</sub>
- [Grafana Fundamentals](https://grafana.com/tutorials/grafana-fundamentals/) <sub>Grafana Labs · tutorial · free</sub>

</details>

### <a id="3-tracing-logging"></a>3. Tracing, Logging & Debugging Production

<sub>**4-6 weeks**</sub>

Metrics tell you something is wrong; traces and logs tell you where and why. Done when you can follow one request across service boundaries in a single trace and answer a question about last week from telemetry alone — no SSH, no log files on disk. Monitoring answers questions you knew to ask; this phase is what lets you ask new ones mid-incident.

**Assumes:** instrumentation-metrics

<b>Skills</b> — `Distributed Tracing` · `Context Propagation` · `Structured Logging` · `Log Aggregation & Retention` · `Semantic Conventions` · `Sampling Strategies` · `Systematic Troubleshooting` · `Telemetry Cost Control`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Instrument a multi-service application so one request can be followed end to end in a single trace, including across an async queue boundary
- Take an incident you have already resolved and re-derive its cause using only traces and logs — then note every step where you wanted to SSH somewhere
- Convert a service's plaintext logs to structured events with consistent field names, and delete the fields nobody queried in six months
- Implement tail-based sampling and prove you still captured the slow requests you cared about
- Cut a telemetry bill in half without losing the ability to debug — write down what you gave up and why it was safe
- Correlate a trace, its logs and its metrics for a single failing request, so a responder can move between all three without copying identifiers by hand

</details>

<details><summary><b>Resources</b> — 8, of which 8 free</summary>

- [OpenTelemetry Documentation](https://opentelemetry.io/docs/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Traces Concepts](https://opentelemetry.io/docs/concepts/signals/traces/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) <sub>OpenTelemetry · documentation · free</sub>
- [Jaeger Documentation](https://www.jaegertracing.io/docs/latest/) <sub>Jaeger · documentation · free</sub>
- [Grafana Loki Documentation](https://grafana.com/docs/loki/latest/) <sub>Grafana Labs · documentation · free</sub>
- [Effective Troubleshooting (SRE Book chapter)](https://sre.google/sre-book/effective-troubleshooting/) <sub>Google · documentation · free</sub>
- [The Production Environment at Google (SRE Book chapter)](https://sre.google/sre-book/production-environment/) <sub>Google · documentation · free</sub>

</details>

### <a id="4-alerting-on-slos"></a>4. Alerting on SLOs & On-Call Health

<sub>**3-4 weeks**</sub>

The bridge between telemetry and a human being woken up. Done when every page in your rotation is actionable and you can defend each one, and when you have deleted an alert someone else wrote. An alert that fires without a clear action trains people to ignore alerts — alert fatigue is not a personality flaw, it is a design defect.

**Assumes:** tracing-logging

<b>Skills</b> — `Alert Design` · `Burn-rate Alerting` · `Multi-window Multi-burn-rate` · `Symptom vs Cause Alerting` · `Alert Fatigue Management` · `On-Call Rotation Design` · `Escalation Policies` · `Runbook Authoring`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Replace a static threshold alert with a multi-window burn-rate alert and explain what each window is designed to catch
- Audit an alerting setup and cut false positives by at least half, proving no real incident would have been missed
- Review three months of pages: how many were actionable, and what would you delete?
- Write a runbook for one service, then have someone unfamiliar with it follow the runbook during a simulated incident — the gaps they hit are the real output
- Write an on-call rotation policy covering escalation, handoff and burnout rules for a four-person team
- Convert a cause-based alert ("disk is 80% full") into a symptom-based one ("users are seeing errors") and argue which you would rather be woken by

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Alerting on SLOs (SRE Workbook chapter)](https://sre.google/workbook/alerting-on-slos/) <sub>Google · documentation · free</sub>
- [Practical Alerting (SRE Book chapter)](https://sre.google/sre-book/practical-alerting/) <sub>Google · documentation · free</sub>
- [Being On-Call (SRE Book chapter)](https://sre.google/sre-book/being-on-call/) <sub>Google · documentation · free</sub>
- [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) <sub>PagerDuty · documentation · free</sub>
- [Prometheus Alerting Rules](https://prometheus.io/docs/prometheus/latest/querying/basics/) <sub>Prometheus · documentation · free</sub>

</details>

### <a id="5-automation-toil"></a>5. Automation & Toil Reduction

<sub>**4-6 weeks**</sub>

Toil is manual, repetitive, automatable work that scales with the service. Done when you measured it before automating and can state the hours reclaimed, and your automation has a documented failure mode that does not require you personally to be awake. Automating before measuring builds tooling for problems you assumed rather than problems you have.

**Assumes:** alerting-on-slos

<b>Skills</b> — `Toil Measurement` · `Terraform` · `Kubernetes Operators` · `Automated Remediation` · `Runbook Automation` · `Chaos Engineering` · `Load & Stress Testing` · `Failure Mode Analysis` · `Progressive Delivery`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Track where your operational time actually goes for two weeks, then rank the toil by hours before automating anything
- Write a self-healing automation for one specific failure mode, with audit logging and a documented way to disable it in a hurry
- Run a controlled chaos experiment against staging — terminate a pod under load — and document blast radius and recovery time
- Automate the top item from your toil ranking, then measure the hours actually reclaimed and compare against what you predicted
- Write the failure mode analysis for your own automation, answering what happens when it misfires at 3am
- Build a canary deployment that automatically rolls back on an SLO burn-rate signal rather than on a human noticing

</details>

<details><summary><b>Resources</b> — 8, of which 8 free</summary>

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs) <sub>HashiCorp · documentation · free</sub>
- [Eliminating Toil (SRE Book chapter)](https://sre.google/sre-book/eliminating-toil/) <sub>Google · documentation · free</sub>
- [Canarying Releases (SRE Workbook chapter)](https://sre.google/workbook/canarying-releases/) <sub>Google · documentation · free</sub>
- [Release Engineering (SRE Book chapter)](https://sre.google/sre-book/release-engineering/) <sub>Google · documentation · free</sub>
- [Chaos Engineering Principles](https://principlesofchaos.org/) <sub>Chaos Community · documentation · free</sub>
- [Kubernetes Operator Pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) <sub>Kubernetes · documentation · free</sub>
- [k6 Load Testing Documentation](https://grafana.com/docs/k6/latest/) <sub>Grafana Labs · documentation · free</sub>
- [Software Engineering in SRE (SRE Book chapter)](https://sre.google/sre-book/software-engineering-in-sre/) <sub>Google · documentation · free</sub>

</details>

### <a id="6-incident-response"></a>6. Incident Response

<sub>**3-4 weeks**</sub>

What you do while the system is broken and people are watching. Done when you have run an incident as commander without touching a terminal — the commander who starts debugging stops coordinating. Roles beat heroics: an incident with a named commander, a scribe and a comms lead resolves faster than one with five engineers all fixing the same thing.

**Assumes:** automation-toil

<b>Skills</b> — `Incident Command` · `Severity Classification` · `Incident Communication` · `Stakeholder Updates` · `Mitigation Before Diagnosis` · `Debugging Under Pressure` · `Incident Roles & Handoff`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Run a tabletop simulation with assigned incident commander and scribe roles, and hold the commander to coordinating rather than debugging
- Define severity levels for your service, with a concrete example of each, so classification does not get argued about during an incident
- Write the stakeholder update template for a live incident — the one that says what is broken and what to expect next without promising a fix time
- Practise mitigating before diagnosing: roll back, drain, or fail over first, and note how much faster users recovered than root cause was found
- Run an incident handoff across a shift boundary and document what the incoming commander needed that was not written down

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Managing Incidents (SRE Book chapter)](https://sre.google/sre-book/managing-incidents/) <sub>Google · documentation · free</sub>
- [Emergency Response (SRE Book chapter)](https://sre.google/sre-book/emergency-response/) <sub>Google · documentation · free</sub>
- [Incident Response (SRE Workbook chapter)](https://sre.google/workbook/incident-response/) <sub>Google · documentation · free</sub>
- [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) <sub>PagerDuty · documentation · free</sub>

</details>

### <a id="7-incident-learning"></a>7. Postmortems & Organisational Learning

<sub>**2-3 weeks**</sub>

Where an outage stops being a loss. Done when you have run a postmortem that produced action items someone actually completed — an unowned action item is a wish with a due date. The document explains what made the failure possible, never who typed the command: a blameful postmortem teaches everyone present to report less next time.

**Assumes:** incident-response

<b>Skills</b> — `Blameless Postmortems` · `Root Cause & Contributing Factors` · `Action Item Follow-through` · `Incident Metrics & Trends` · `Writing for Non-Engineers` · `Psychological Safety` · `Knowledge Sharing`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Produce a full postmortem within 48 hours of a simulated incident, with owners and dates on every action item
- Rewrite a blameful postmortem into a blameless one and note exactly what changed in the findings, not just the tone
- Go back to postmortems from six months ago and check which action items were actually completed — the completion rate is the real health metric
- Analyse a quarter of incidents for patterns: which contributing factor shows up repeatedly, and what would fix the class rather than the instance?
- Write the public-facing version of an incident report for customers, saying what happened without either hiding it or drowning them in internals
- Run a postmortem review meeting where the author is not the most senior person in the room, and note what that changed

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Postmortem Culture (SRE Book chapter)](https://sre.google/sre-book/postmortem-culture/) <sub>Google · documentation · free</sub>
- [Postmortem Culture (SRE Workbook chapter)](https://sre.google/workbook/postmortem-culture/) <sub>Google · documentation · free</sub>
- [Google Postmortem Example](https://sre.google/sre-book/example-postmortem/) <sub>Google · documentation · free</sub>
- [PagerDuty Postmortem Guide](https://postmortems.pagerduty.com/) <sub>PagerDuty · documentation · free</sub>
- [Postmortem Templates Collection](https://github.com/dastergon/postmortem-templates) <sub>Pavlos Ratis · documentation · free</sub>

</details>

### <a id="8-data-reliability"></a>8. Data & Stateful Systems Reliability

<sub>**4-6 weeks**</sub>

Stateless services are the easy half. Done when you have restored a database from backup into a clean environment and recorded the real recovery time — a backup nobody has restored is a hypothesis, not a backup. Data has a property compute does not: you can lose it permanently, so the failure modes here are the ones that end companies.

**Assumes:** incident-learning

<b>Skills</b> — `Replication & Consistency Models` · `Backup & Restore Verification` · `RTO & RPO Definition` · `Zero-downtime Migrations` · `Data Integrity & Corruption` · `Database Failover` · `Connection Pooling & Saturation` · `Stateful Workloads on Kubernetes`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Restore a production-sized database from backups into a clean environment and record the real recovery time, not the estimated one
- Run a schema migration on a live table with no downtime, using expand-and-contract, and document the rollback path at each step
- Trigger a database failover under write load and measure exactly how much data and how many seconds were lost
- Define RTO and RPO for one stateful service, then test whether your current setup actually meets them — most do not
- Detect a deliberately introduced data corruption using checksums or reconciliation, and write the runbook for how it would be caught in production
- Exhaust a connection pool under load and document what the application did — the failure mode is rarely the one people expect

</details>

<details><summary><b>Resources</b> — 8, of which 7 free</summary>

- [Managing Critical State (SRE Book chapter)](https://sre.google/sre-book/managing-critical-state/) <sub>Google · documentation · free</sub>
- [Data Integrity (SRE Book chapter)](https://sre.google/sre-book/data-integrity/) <sub>Google · documentation · free</sub>
- [PostgreSQL High Availability & Replication](https://www.postgresql.org/docs/current/high-availability.html) <sub>PostgreSQL · documentation · free</sub>
- [Jepsen Distributed Systems Analyses](https://jepsen.io/analyses) <sub>Jepsen · documentation · free</sub>
- [Patterns of Distributed Systems](https://martinfowler.com/articles/patterns-of-distributed-systems/) <sub>Martin Fowler · documentation · free</sub>
- [Google Cloud DR Planning Guide](https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide) <sub>Google Cloud · documentation · free</sub>
- [Cloud SQL Backups — Types, Retention & Restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups) <sub>Google Cloud · documentation · free</sub>
- **Designing Data-Intensive Applications** <sub>Martin Kleppmann · book · paid</sub>

</details>

### <a id="9-capacity-and-cost"></a>9. Capacity Planning & Cost Efficiency

<sub>**3-4 weeks**</sub>

Reliability you cannot afford is not reliability. Done when you have forecast demand, sized infrastructure from that forecast rather than from habit, and cut spend without moving your SLO. Overprovisioning hides design problems and bills you monthly for the privilege — the goal is headroom you chose deliberately, not headroom you inherited.

**Assumes:** data-reliability

<b>Skills</b> — `Capacity Planning` · `Demand Forecasting` · `Load Shedding` · `Autoscaling Design` · `Resource Limits & Requests` · `Cost Attribution & FinOps` · `Performance Bottleneck Analysis` · `Queueing & Backpressure`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Run a capacity exercise forecasting infrastructure for 3x traffic growth over six months, showing the arithmetic rather than a guess
- Load-test a service to the point of failure and record which resource ran out first — it is rarely the one you sized for
- Implement load shedding so the service degrades predictably under overload instead of collapsing, and prove it with a load test
- Cut infrastructure spend by 20% on one service without changing its SLO, and document what headroom you gave up
- Right-size Kubernetes requests and limits from observed usage rather than from the defaults someone copied, and measure the reclaimed capacity
- Tune an autoscaler until it responds to a real traffic spike without flapping — then write down the tradeoff you settled on

</details>

<details><summary><b>Resources</b> — 10, of which 10 free</summary>

- [Handling Overload (SRE Book chapter)](https://sre.google/sre-book/handling-overload/) <sub>Google · documentation · free</sub>
- [Managing Load (SRE Workbook chapter)](https://sre.google/workbook/managing-load/) <sub>Google · documentation · free</sub>
- [Non-Abstract Large System Design (SRE Workbook chapter)](https://sre.google/workbook/non-abstract-design/) <sub>Google · documentation · free</sub>
- [AWS Builders' Library: Using Load Shedding to Avoid Overload](https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/) <sub>AWS · documentation · free</sub>
- [AWS Builders' Library: Avoiding Insurmountable Queue Backlogs](https://aws.amazon.com/builders-library/avoiding-insurmountable-queue-backlogs/) <sub>AWS · documentation · free</sub>
- [Kubernetes Resource Management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) <sub>Kubernetes · documentation · free</sub>
- [Kubernetes Horizontal Pod Autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) <sub>Kubernetes · documentation · free</sub>
- [What is FinOps?](https://www.finops.org/introduction/what-is-finops/) <sub>FinOps Foundation · documentation · free</sub>
- [AWS Well-Architected Cost Optimization Pillar](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [OpenCost Documentation](https://opencost.io/docs/) <sub>OpenCost · documentation · free</sub>

</details>

### <a id="10-platform-scale"></a>10. Reliability at Platform Scale

<sub>**5-7 weeks**</sub>

The multiplier. Making one service reliable is engineering; making it easy for fifty teams to run reliable services is what changes an organisation. Done when a team you do not sit with adopted something you built without you walking them through it — adoption you had to chaperone is a demo, not a platform.

**Assumes:** capacity-and-cost

<b>Skills</b> — `Multi-Region Architecture` · `Dependency Mapping` · `Disaster Recovery` · `Production Readiness Reviews` · `Reliability as a Platform Service` · `Graceful Degradation` · `Circuit Breakers & Bulkheads` · `Technical Influence Without Authority` · `Cascading Failure Prevention`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Design a multi-region failover for a stateful service with RTO and RPO targets, then actually test the failover rather than only documenting it
- Map dependencies across a five-plus service system, identify the single points of failure, and fix the highest-risk one
- Write a production readiness review checklist and run it against a service that is already live — what it fails is the point
- Build a reliability capability other teams consume as a service, such as a default dashboard or SLO template they get for free
- Implement graceful degradation somewhere, so the system sheds a non-critical feature under load instead of failing whole
- Add circuit breakers with timeouts and jittered retries to a service-to-service call, then prove the retry storm you prevented was real

</details>

<details><summary><b>Resources</b> — 9, of which 9 free</summary>

- [Addressing Cascading Failures (SRE Book chapter)](https://sre.google/sre-book/addressing-cascading-failures/) <sub>Google · documentation · free</sub>
- [Production Readiness Reviews (SRE Book chapter)](https://sre.google/sre-book/evolving-sre-engagement-model/) <sub>Google · documentation · free</sub>
- [Datacenter Load Balancing (SRE Book chapter)](https://sre.google/sre-book/load-balancing-datacenter/) <sub>Google · documentation · free</sub>
- [AWS Disaster Recovery Whitepaper](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html) <sub>AWS · documentation · free</sub>
- [AWS Fault Isolation Boundaries](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/abstract-and-introduction.html) <sub>AWS · documentation · free</sub>
- [AWS Builders' Library: Timeouts, Retries and Backoff with Jitter](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/) <sub>AWS · documentation · free</sub>
- [AWS Builders' Library: Workload Isolation Using Shuffle Sharding](https://aws.amazon.com/builders-library/workload-isolation-using-shuffle-sharding/) <sub>AWS · documentation · free</sub>
- [Circuit Breaker Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker) <sub>Microsoft · documentation · free</sub>
- [AWS Well-Architected Reliability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html) <sub>AWS · documentation · free</sub>

</details>

---

## The job itself

<sub>Editorial throughout — nothing here is a sourced figure.</sub>

### Day to day

Less firefighting than the job's reputation suggests, and more writing. A normal week is reviewing other teams' launch plans against their error budgets, extending automation so a manual runbook step stops needing a human, and arguing about whether a proposed SLO reflects what users notice. On-call is the exception rather than the shape of the role: a healthy rotation is quiet, and a rotation that is not quiet is the problem you are being paid to fix. The uncomfortable part is that most of your influence is exercised over teams you do not manage, through a budget number they agreed to before anything broke.

### What interviews ask

Three recognisable rounds. A debugging or incident exercise where you are handed a misbehaving system and watched for how you narrow the problem — the reasoning is being scored, not the answer. A systems design round pitched at failure rather than throughput: what happens when this dependency is slow, what does the client do, how do you know before your users tell you. And a behavioural round built almost entirely on real incidents, where the expected answer names what you got wrong and what changed afterwards; a story with no mistake in it reads as a story that was rehearsed. Expect SLO and error-budget vocabulary to be probed for whether you have set one, not whether you can define one.

### How people get here

Almost nobody starts here — the prerequisites say Linux, cloud and code for a reason. The three common origins are backend engineers who kept getting pulled into production problems and found they preferred them, systems administrators or ops engineers formalising what they already do, and DevOps engineers moving from building pipelines toward owning service behaviour. If you are on the DevOps engineer path, phases one and four here are the specialisation. Coming from the data side, database reliability engineering shares this roadmap's phase eight and diverges after it. What transfers from any of them is production instinct; what does not is the assumption that reliability is a maximum rather than a target.

### After senior

The ladder forks rather than continuing straight. Staff and principal SREs stay technical and widen their blast radius, owning reliability standards across an organisation instead of services — which is phase ten as a full-time job. The second fork is platform or infrastructure engineering, where the product becomes the thing other engineers build on. The third is management of an SRE org, which trades the debugging for headcount and on-call sustainability. Salary data on this page stops at senior because that is where public estimates stop being reliable, not because the ladder does.

### Why people leave

Two, and both are structural rather than technical. The first is joining an organisation that wanted a rebranded operations team: if nobody will let you spend an error budget, or every incident review ends with a name rather than a change, the title is the only part of the job you actually got. Ask in the interview who last blocked a launch and what happened. The second is on-call that never gets better, which is the same failure seen from underneath — pages that are not actionable, a rotation too thin to absorb one bad week, and no time budgeted to fix any of it. Burnout here is not a resilience problem, it is an unspent budget.

## Questions

<details><summary><b>How long does it take to become an SRE, and what should I know first?</b></summary><br>

The full path runs 8-11 months at around 10 hours a week across ten phases. You should already have working knowledge of Linux and the command line, some basic cloud infrastructure experience with VMs and networking, and be comfortable reading and writing code in at least one language before starting.

</details>

<details><summary><b>What does an SRE roadmap actually cover?</b></summary><br>

It moves from reliability foundations — SLIs, SLOs and error budgets — into instrumentation with metrics, then tracing and logging, alerting, automation and toil reduction, incident response, postmortems, data and stateful systems reliability, capacity planning, and finally reliability at platform scale. Phase order matters: instrumentation comes before alerting because you cannot alert on a signal you do not have, and incidents come before postmortems because a postmortem process with no incidents to feed it is only a template.

</details>

<details><summary><b>How much does a site reliability engineer earn?</b></summary><br>

In the United States, entry-level SRE pay ranges from about $95,000 to $161,000 for candidates with up to a year of experience, according to Glassdoor. The overall average sits around $172,508, and senior SREs average about $185,489.

</details>

<details><summary><b>What do SRE interviews ask?</b></summary><br>

Three rounds are near-universal. A debugging or incident exercise where you are handed a misbehaving system and scored on how you narrow the problem rather than on reaching the answer. A systems design round pitched at failure rather than throughput — what happens when a dependency is slow, and how you find out before users tell you. And a behavioural round built on real incidents, where naming what you got wrong and what changed afterwards is the expected answer. SLO and error-budget vocabulary gets probed for whether you have actually set one, not whether you can define it.

</details>

<details><summary><b>How do you become an SRE, and what job do most people come from?</b></summary><br>

Almost nobody starts here directly. The three common origins are backend engineers who kept being pulled into production problems and found they preferred them, systems administrators and ops engineers formalising work they already do, and DevOps engineers moving from building pipelines toward owning service behaviour. What transfers is production instinct; what does not is the habit of treating reliability as a maximum to chase rather than a target you choose. The roadmap assumes Linux, basic cloud infrastructure and comfort reading code before phase one.

</details>

<details><summary><b>What comes after senior SRE?</b></summary><br>

The ladder forks rather than continuing straight. Staff and principal SREs stay technical and own reliability standards across an organisation instead of individual services, which is this roadmap's tenth phase as a full-time job. The second fork is platform or infrastructure engineering, where the product becomes what other engineers build on. The third is managing an SRE organisation, trading debugging for headcount and on-call sustainability. Public salary estimates stop at senior because that is where the data thins, not because the ladder ends.

</details>

<details><summary><b>Why do people leave SRE jobs?</b></summary><br>

Usually for one structural reason with two faces. The first is joining a team that wanted a rebranded operations function — if nobody will let you spend an error budget, or incident reviews end with a name rather than a change, the title is the only part of the role you got. The second is on-call that never improves: pages that are not actionable, a rotation too thin to absorb one bad week, and no time budgeted to fix either. Burnout in this role is rarely a resilience problem; it is an unspent error budget.

</details>

<details><summary><b>Which phase of the SRE path is hardest, and why?</b></summary><br>

Data and stateful systems reliability is described as the wall in this roadmap, because stateless services are the easy half of the job. It only counts as done once you have restored a database from backup into a clean environment and recorded the real recovery time, since a backup nobody has restored is a hypothesis, not a backup.

</details>

## Neighbouring paths

[DevOps Engineer](devops-engineer.md) · [Database Reliability Engineer](database-reliability-engineer.md) · [Observability Engineer](observability-engineer.md) · [Cloud Architect](cloud-architect.md)

---

<sub>Source of truth: [`data/roadmaps/sre.yaml`](../data/roadmaps/sre.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
