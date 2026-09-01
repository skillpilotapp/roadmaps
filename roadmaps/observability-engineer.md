<!-- Generated from data/roadmaps/observability-engineer.yaml by tools/render-markdown.mjs. Do not edit. -->

# Observability Engineer Roadmap

> A path into observability as a craft of its own — wide events, signal correlation, telemetry cost, collector pipelines, high-cardinality analysis, continuous profiling, and running observability as a platform other teams consume.

**Advanced** · **10 phases** · **6-8 months at 10h/week** · updated 2026-08-10

This path assumes you have shipped services and used a metrics or logging tool, but have never owned the telemetry itself. It is a craft distinct from SRE: an SRE decides what reliability to target, an observability engineer builds the system that can answer why it missed.

The premise, and the reason the ordering looks unusual: **you cannot ask a question of data you already aggregated away**. A metric with the cardinality stripped out cannot tell you which customer is affected. So wide events come early, and dashboards do not come at all — they answer questions you already knew to ask.

Cost is phase five rather than an appendix, because telemetry is the one system whose bill scales with how well it works.

Expect 6–8 months. Phase seven is where the mental model clicks or does not.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$135,441` | Glassdoor Observability Engineer total pay estimate, 25th percentile (US, 27 salaries submitted) | 2026-08-08 |
| Mid | `$164,046` | Glassdoor Observability Engineer total pay estimate (US average, 27 salaries submitted) | 2026-08-08 |
| Senior | `$202,686` | Glassdoor Observability Engineer total pay estimate, 75th percentile (US, 27 salaries submitted) | 2026-08-08 |

Total duration is **6-8 months at 10h/week** — <sub>SkillPilot editorial estimate, 2026-08-08</sub>

## Before you start

- Working knowledge of Linux, containers and HTTP services
- Comfort reading and writing code in at least one language
- Some exposure to a metrics or logging tool in production

## The path

| # | Phase | Duration |
|---:|---|---|
| 1 | [Observability vs Monitoring](#1-observability-vs-monitoring) | 2-3 weeks |
| 2 | [Wide Events as the Unit of Telemetry](#2-wide-events) | 4-5 weeks |
| 3 | [Context Propagation Across Boundaries](#3-context-propagation) | 3-4 weeks |
| 4 | [Signal Correlation](#4-correlation) | 3-4 weeks |
| 5 | [Telemetry Cost as a Design Constraint](#5-telemetry-cost) | 2-3 weeks |
| 6 | [Sampling Strategies](#6-sampling) | 3-4 weeks |
| 7 | [Query & High-Cardinality Analysis](#7-query-and-analysis) | 3-4 weeks |
| 8 | [Telemetry Pipelines & Collectors](#8-telemetry-pipelines) | 4-5 weeks |
| 9 | [Observability as a Platform Service](#9-observability-platform) | 2-3 weeks |
| 10 | [Continuous Profiling](#10-continuous-profiling) | 2-3 weeks |

---

### <a id="1-observability-vs-monitoring"></a>1. Observability vs Monitoring

<sub>**2-3 weeks**</sub>

Monitoring answers questions you wrote down in advance. Observability is the property that lets you answer one nobody anticipated, without shipping new code first. Done when you take a live service, ask three questions its dashboards were never built for, and record which ones its telemetry can already answer. The unanswerable ones define the rest of this roadmap.

<b>Skills</b> — `Observability vs Monitoring` · `Cardinality & Dimensionality` · `Unknown-unknowns Debugging` · `Signal Taxonomy` · `Telemetry Data Models` · `Question-driven Design` · `Debugging from First Principles`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Take a service you did not build, write down three questions its dashboards cannot answer, and classify each as missing signal, missing dimension or missing correlation
- Reproduce a bug that only affects one customer, and record every point where you had to add code or SSH somewhere to make progress
- Write the one-page distinction between monitoring and observability you would give a sceptical engineering manager, without using the word platform
- Take one existing dashboard and list what it would take to slice every panel by customer, region and build version — the cost estimate is the deliverable
- Catalogue every telemetry signal a single service emits today, with its data model, its owner and whether anyone queried it in the last quarter
- Find a past incident whose diagnosis needed a code deploy to add a log line, and write what dimension would have made the deploy unnecessary

</details>

<details><summary><b>Resources</b> — 7, of which 6 free</summary>

- [What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Observability Primer](https://opentelemetry.io/docs/concepts/observability-primer/) <sub>OpenTelemetry · documentation · free</sub>
- [Monitoring Distributed Systems (SRE Book chapter)](https://sre.google/sre-book/monitoring-distributed-systems/) <sub>Google · documentation · free</sub>
- [Monitoring (SRE Workbook chapter)](https://sre.google/workbook/monitoring/) <sub>Google · documentation · free</sub>
- [Effective Troubleshooting (SRE Book chapter)](https://sre.google/sre-book/effective-troubleshooting/) <sub>Google · documentation · free</sub>
- [OpenTelemetry Signals Overview](https://opentelemetry.io/docs/concepts/signals/logs/) <sub>OpenTelemetry · documentation · free</sub>
- **Observability Engineering** <sub>Charity Majors, Liz Fong-Jones, George Miranda, Austin Parker · book · paid</sub> — free alternative: [OpenTelemetry Observability Primer](https://opentelemetry.io/docs/concepts/observability-primer/)

</details>

### <a id="2-wide-events"></a>2. Wide Events as the Unit of Telemetry

<sub>**4-5 weeks**</sub>

The craft's central idea: emit one wide, richly dimensioned event per unit of work instead of scattering the story across counters and log lines. Done when a single service emits events carrying at least thirty attributes each, and you can answer a new question by filtering on a dimension rather than by deploying. Pre-aggregated metrics discard exactly the outliers you will be asked about.

**Assumes:** observability-vs-monitoring

<b>Skills</b> — `Wide Event Design` · `Attribute Modelling` · `OpenTelemetry SDKs` · `Semantic Conventions` · `Structured Logging` · `Auto vs Manual Instrumentation` · `Instrumentation Libraries` · `Aggregation Loss`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Instrument one service to emit a single wide event per request carrying build version, customer tier, region, feature flags and downstream timings
- Take a question your metrics cannot answer, answer it from wide events instead, and write down which aggregation had destroyed the information
- Adopt OpenTelemetry semantic conventions across a service and list every custom attribute you kept, with the reason each one is not covered by the spec
- Add zero-code auto-instrumentation to a service, then measure what it captured and what it missed against a hand-instrumented path
- Write and enforce the attribute naming schema for a codebase, including which attributes are forbidden because they are unbounded identifiers
- Convert one service's plaintext logs into structured events joined to their trace context, then delete every log line the new events made redundant

</details>

<details><summary><b>Resources</b> — 8, of which 8 free</summary>

- [OpenTelemetry Instrumentation Concepts](https://opentelemetry.io/docs/concepts/instrumentation/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Instrumentation Libraries](https://opentelemetry.io/docs/concepts/instrumentation/libraries/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Zero-code Instrumentation](https://opentelemetry.io/docs/zero-code/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Semantic Conventions Specification](https://opentelemetry.io/docs/specs/semconv/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Language SDKs](https://opentelemetry.io/docs/languages/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Logs Specification](https://opentelemetry.io/docs/specs/otel/logs/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Demo Application](https://opentelemetry.io/docs/demo/) <sub>OpenTelemetry · tutorial · free</sub>

</details>

### <a id="3-context-propagation"></a>3. Context Propagation Across Boundaries

<sub>**3-4 weeks**</sub>

Wide events only compose into a story if they share a trace context, and context is what breaks first at every boundary you did not write. Done when one request keeps its trace context across an async queue, a thread pool and a third-party SDK, and you can name the exact library that dropped it when it broke. Baggage is how a dimension known at the edge reaches a service ten hops down.

**Assumes:** wide-events

<b>Skills</b> — `Context Propagation` · `W3C Trace Context` · `Baggage Propagation` · `Async & Queue Boundaries` · `Span Design & Nesting` · `Cross-language Interop` · `Broken Trace Debugging` · `OTLP Protocol`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Propagate trace context through a message queue so a producer span and its consumer span appear in one trace, and document the header you had to carry by hand
- Break context propagation deliberately in a thread pool, observe the orphaned spans, then fix it and write the diagnostic that identified the gap
- Use baggage to carry a customer tier attribute from the edge gateway to a service four hops downstream, and query events by it at the far end
- Trace one request across two services written in different languages, and record every place the two SDKs disagreed about span naming
- Audit a service's span hierarchy and cut the spans that carry no decision value — depth without information makes traces slower to read, not richer
- Instrument a call through a third-party client library that does not propagate context, and write the wrapper that makes it behave

</details>

<details><summary><b>Resources</b> — 7, of which 7 free</summary>

- [OpenTelemetry Context Propagation](https://opentelemetry.io/docs/concepts/context-propagation/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Traces Concepts](https://opentelemetry.io/docs/concepts/signals/traces/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Baggage](https://opentelemetry.io/docs/concepts/signals/baggage/) <sub>OpenTelemetry · documentation · free</sub>
- [W3C Trace Context Specification](https://www.w3.org/TR/trace-context/) <sub>W3C · documentation · free</sub>
- [OpenTelemetry Trace API Specification](https://opentelemetry.io/docs/specs/otel/trace/api/) <sub>OpenTelemetry · documentation · free</sub>
- [OTLP Protocol Specification](https://opentelemetry.io/docs/specs/otel/protocol/) <sub>OpenTelemetry · documentation · free</sub>
- [Jaeger Architecture](https://www.jaegertracing.io/docs/latest/architecture/) <sub>Jaeger · documentation · free</sub>

</details>

### <a id="4-correlation"></a>4. Signal Correlation

<sub>**3-4 weeks**</sub>

Three tools holding three signals is three tools, not observability. This phase is the joins: exemplars from a metric into a trace, a trace into its events, a profile into the span that produced it. Done when a responder moves from a latency spike to the exact slow trace to its logs without copying an identifier by hand, and you can name every field that makes each hop possible.

**Assumes:** context-propagation

<b>Skills</b> — `Metric-to-Trace Exemplars` · `Trace-to-Log Correlation` · `Resource Attributes` · `Identifier Consistency` · `Grafana Data Source Links` · `Exploratory Workflows` · `Investigation Ergonomics`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Wire exemplars from a histogram metric into traces so clicking a p99 bucket lands on a real slow request
- Configure trace-to-log correlation so every span links to the log lines it emitted, then time a responder doing the hop with and without it
- Standardise resource attributes — service, version, environment, instance — across every signal, and find the service that was silently naming itself two different things
- Run a timed investigation drill: from an alert to a named root cause, counting every manual copy-paste of an identifier as a defect to fix
- Build the single exploration view an on-call responder starts from, then hand it to someone unfamiliar and watch where they get stuck
- Correlate a deployment marker with a latency change, so a responder can see which build introduced the regression without asking anyone

</details>

<details><summary><b>Resources</b> — 7, of which 7 free</summary>

- [Grafana Explore](https://grafana.com/docs/grafana/latest/visualizations/explore/) <sub>Grafana Labs · documentation · free</sub>
- [Grafana Tempo Data Source Configuration](https://grafana.com/docs/grafana/latest/datasources/tempo/configure-tempo-data-source/) <sub>Grafana Labs · documentation · free</sub>
- [Grafana Loki Data Source](https://grafana.com/docs/grafana/latest/datasources/loki/) <sub>Grafana Labs · documentation · free</sub>
- [Using Exemplars in Grafana Mimir](https://grafana.com/docs/mimir/latest/manage/use-exemplars/) <sub>Grafana Labs · documentation · free</sub>
- [Send OpenTelemetry Data to Loki](https://grafana.com/docs/loki/latest/send-data/otel/) <sub>Grafana Labs · documentation · free</sub>
- [Grafana Dashboard Best Practices](https://grafana.com/docs/grafana/latest/visualizations/dashboards/build-dashboards/best-practices/) <sub>Grafana Labs · documentation · free</sub>
- [Grafana Tempo Documentation](https://grafana.com/docs/tempo/latest/) <sub>Grafana Labs · documentation · free</sub>

</details>

### <a id="5-telemetry-cost"></a>5. Telemetry Cost as a Design Constraint

<sub>**2-3 weeks**</sub>

Every attribute you add has a price, and observability budgets are cut by finance, not by engineers. This phase makes cost a first-class input rather than a quarterly surprise. Done when you can state the cost per million events for your own pipeline, attribute the bill to the services generating it, and cut it by a third while naming exactly which question you gave up answering.

**Assumes:** correlation

<b>Skills</b> — `Telemetry Cost Modelling` · `Cost per Signal Attribution` · `Retention Tiering` · `Cardinality Budgets` · `Storage & Ingest Economics` · `Vendor Pricing Models` · `Value-per-Byte Analysis`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Calculate the cost per million events for your own telemetry pipeline, broken down into ingest, storage and query
- Attribute a month of telemetry spend to the services that generated it, and take the top spender its own number
- Cut telemetry cost by a third and document the exact question you can no longer answer — an unnamed loss means you did not measure the tradeoff
- Set a cardinality budget per service, enforce it, and record what the first team to breach it was actually trying to do
- Implement tiered retention so recent data is queryable and older data is cheap, then test that a three-month-old investigation is still possible
- Model the same telemetry volume under two vendors' pricing and write the one-page comparison, including what each pricing model quietly incentivises

</details>

<details><summary><b>Resources</b> — 6, of which 6 free</summary>

- [Prometheus Storage](https://prometheus.io/docs/prometheus/latest/storage/) <sub>Prometheus · documentation · free</sub>
- [Grafana Loki Retention](https://grafana.com/docs/loki/latest/operations/storage/retention/) <sub>Grafana Labs · documentation · free</sub>
- [Prometheus Metric & Label Naming](https://prometheus.io/docs/practices/naming/) <sub>Prometheus · documentation · free</sub>
- [Prometheus Data Model](https://prometheus.io/docs/concepts/data_model/) <sub>Prometheus · documentation · free</sub>
- [Grafana Mimir Documentation](https://grafana.com/docs/mimir/latest/) <sub>Grafana Labs · documentation · free</sub>
- [Prometheus Remote Write Tuning](https://prometheus.io/docs/practices/remote_write/) <sub>Prometheus · documentation · free</sub>

</details>

### <a id="6-sampling"></a>6. Sampling Strategies

<sub>**3-4 weeks**</sub>

Sampling is how you keep the interesting telemetry and drop the rest, and getting it wrong deletes the evidence for the incident you have not had yet. Done when you run tail-based sampling in production and can prove, against a held-out full-fidelity window, that every slow and every failed request survived. Head sampling is cheap and decides before it knows whether the request was interesting.

**Assumes:** telemetry-cost

<b>Skills</b> — `Head vs Tail Sampling` · `Tail Sampling Policies` · `Sampling Bias Analysis` · `Statistical Reweighting` · `Consistent Sampling Decisions` · `Error & Latency Preservation` · `Sampling Verification`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Implement tail-based sampling with separate policies for errors, slow requests and a baseline of successes, and document each policy's intent
- Run full fidelity and your sampling configuration side by side for a day, then prove no error trace and no p99 request was lost
- Reweight sampled counts back to true traffic volume and reconcile the estimate against an unsampled counter
- Find a sampling configuration that silently drops one customer's traffic entirely, and write the check that would have caught it
- Make sampling decisions consistent across services so a trace is never half kept, and demonstrate a partial trace before and after
- Compare the cost and the fidelity of head and tail sampling on the same workload, and write which you would run and under what volume you would switch

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [OpenTelemetry Sampling Concepts](https://opentelemetry.io/docs/concepts/sampling/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Tail Sampling Processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/tailsamplingprocessor/README.md) <sub>OpenTelemetry · documentation · free</sub>
- [Jaeger Sampling Documentation](https://www.jaegertracing.io/docs/latest/sampling/) <sub>Jaeger · documentation · free</sub>
- [OpenTelemetry Filter Processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/filterprocessor/README.md) <sub>OpenTelemetry · documentation · free</sub>
- [Prometheus Histograms & Summaries](https://prometheus.io/docs/practices/histograms/) <sub>Prometheus · documentation · free</sub>

</details>

### <a id="7-query-and-analysis"></a>7. Query & High-Cardinality Analysis

<sub>**3-4 weeks**</sub>

Telemetry you cannot interrogate quickly is an archive. This phase is the analytical craft: slicing by high-cardinality dimensions until an anomaly resolves into a population. Done when you take an unexplained latency spike and identify the shared attribute of the affected requests through query alone, in under fifteen minutes, with no prior hypothesis about the cause.

**Assumes:** sampling

<b>Skills</b> — `PromQL` · `LogQL` · `TraceQL` · `High-Cardinality Slicing` · `Outlier & Population Analysis` · `Percentiles & Distributions` · `Query Performance Tuning` · `Hypothesis-free Investigation`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Take an unexplained latency spike and find the shared attribute of the affected requests by iterative slicing, timing yourself from alert to answer
- Write the ten PromQL, LogQL and TraceQL queries an on-call engineer actually needs, and store them where they are found under pressure rather than in a wiki
- Find a case where the median improved while the p99 degraded, and identify the population hiding behind the average
- Rewrite a query that times out on a month of data until it returns in seconds, and document which part of the data layout made the difference
- Diagnose an incident using only query, no dashboards, and record which panels you never needed — those are candidates for deletion
- Build a saved analysis that segments errors by build version and customer tier simultaneously, so a bad release is visible before anyone reports it

</details>

<details><summary><b>Resources</b> — 7, of which 7 free</summary>

- [PromQL Querying Basics](https://prometheus.io/docs/prometheus/latest/querying/basics/) <sub>Prometheus · documentation · free</sub>
- [PromQL Functions](https://prometheus.io/docs/prometheus/latest/querying/functions/) <sub>Prometheus · documentation · free</sub>
- [PromQL Operators](https://prometheus.io/docs/prometheus/latest/querying/operators/) <sub>Prometheus · documentation · free</sub>
- [LogQL Log Queries](https://grafana.com/docs/loki/latest/query/log_queries/) <sub>Grafana Labs · documentation · free</sub>
- [Grafana Loki Query Documentation](https://grafana.com/docs/loki/latest/query/) <sub>Grafana Labs · documentation · free</sub>
- [TraceQL Query Language](https://grafana.com/docs/tempo/latest/traceql/) <sub>Grafana Labs · documentation · free</sub>
- [Prometheus Recording & Alerting Rules](https://prometheus.io/docs/practices/rules/) <sub>Prometheus · documentation · free</sub>

</details>

### <a id="8-telemetry-pipelines"></a>8. Telemetry Pipelines & Collectors

<sub>**4-5 weeks**</sub>

The layer between what applications emit and where it lands, and the thing that turns telemetry from a per-service decision into infrastructure. Done when you run a collector fleet that receives, transforms, redacts and routes telemetry to more than one backend, survives a backend outage without losing data, and reports on its own health. A pipeline you cannot observe is a blind spot on the observability team.

**Assumes:** query-and-analysis

<b>Skills</b> — `OpenTelemetry Collector` · `Receivers, Processors & Exporters` · `Pipeline Topology Design` · `Telemetry Transformation` · `PII Redaction & Scrubbing` · `Backpressure & Buffering` · `Collector Scaling & HA` · `Pipeline Self-observability`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Deploy the OpenTelemetry Collector in both agent and gateway roles, and write down which processing belongs at each tier and why
- Route the same telemetry stream to two backends at once, then cut one over to a new vendor without touching a single application
- Write a transform pipeline that redacts PII from attributes before export, and verify it against a payload deliberately seeded with test identifiers
- Kill a backend under load and measure exactly how much telemetry the collector's queue and retry saved — the number is usually not what the defaults imply
- Scale a collector fleet to handle a 10x ingest burst, and document which resource saturated first
- Instrument the collector itself, so an on-call engineer can tell telemetry loss from a genuine drop in traffic

</details>

<details><summary><b>Resources</b> — 12, of which 12 free</summary>

- [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) <sub>OpenTelemetry · documentation · free</sub>
- [Collector Configuration](https://opentelemetry.io/docs/collector/configuration/) <sub>OpenTelemetry · documentation · free</sub>
- [Collector Deployment Patterns](https://opentelemetry.io/docs/collector/deployment/) <sub>OpenTelemetry · documentation · free</sub>
- [Scaling the Collector](https://opentelemetry.io/docs/collector/scaling/) <sub>OpenTelemetry · documentation · free</sub>
- [Transforming Telemetry](https://opentelemetry.io/docs/collector/transforming-telemetry/) <sub>OpenTelemetry · documentation · free</sub>
- [Collector Internal Telemetry](https://opentelemetry.io/docs/collector/internal-telemetry/) <sub>OpenTelemetry · documentation · free</sub>
- [Collector Troubleshooting](https://opentelemetry.io/docs/collector/troubleshooting/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Transform Processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/transformprocessor/README.md) <sub>OpenTelemetry · documentation · free</sub>
- [Building a Custom Collector Distribution](https://opentelemetry.io/docs/collector/extend/ocb/) <sub>OpenTelemetry · documentation · free</sub>
- [Grafana Alloy Documentation](https://grafana.com/docs/alloy/latest/) <sub>Grafana Labs · documentation · free</sub>
- [Vector Documentation](https://vector.dev/docs/) <sub>Datadog · documentation · free</sub>
- [OpenTelemetry Collector Security](https://opentelemetry.io/docs/security/) <sub>OpenTelemetry · documentation · free</sub>

</details>

### <a id="9-observability-platform"></a>9. Observability as a Platform Service

<sub>**2-3 weeks**</sub>

The multiplier, and where this role stops being a specialism and becomes infrastructure. Done when a team you do not sit with instruments a new service to your standard on their own, using your defaults, without asking you a question. Adoption you had to chaperone is a demo. Governance that only says no produces shadow telemetry pipelines you find out about on the invoice.

**Assumes:** telemetry-pipelines

<b>Skills</b> — `Observability as a Platform` · `Golden Path Instrumentation` · `OpenTelemetry Operator` · `Telemetry Governance` · `Self-service Onboarding` · `Multi-tenancy & Isolation` · `Internal Developer Enablement` · `Influence Without Authority`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Publish an instrumentation golden path — an SDK wrapper and a default collector config — and count teams who adopt it without you in the room
- Deploy the OpenTelemetry Operator so new workloads are instrumented by annotation rather than by a code change in each repository
- Write the telemetry governance policy covering attribute naming, retention and cardinality limits, then measure how often teams request exceptions
- Run a multi-tenant backend where one team's cardinality explosion cannot degrade another team's queries, and prove it with a deliberate blast
- Onboard a new service end to end using only your documentation, with someone else driving — the questions they ask are the real backlog
- Report platform-level adoption to leadership as a small set of KPIs, each with the query behind it so nobody recalculates by hand

</details>

<details><summary><b>Resources</b> — 6, of which 6 free</summary>

- [OpenTelemetry Kubernetes Operator](https://opentelemetry.io/docs/kubernetes/operator/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Collector Architecture](https://opentelemetry.io/docs/collector/architecture/) <sub>OpenTelemetry · documentation · free</sub>
- [Kubernetes Logging Architecture](https://kubernetes.io/docs/concepts/cluster-administration/logging/) <sub>Kubernetes · documentation · free</sub>
- [Building Custom Collector Components](https://opentelemetry.io/docs/collector/extend/custom-component/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry at the CNCF](https://www.cncf.io/projects/opentelemetry/) <sub>CNCF · documentation · free</sub>
- [Grafana Mimir Documentation](https://grafana.com/docs/mimir/latest/) <sub>Grafana Labs · documentation · free</sub>

</details>

### <a id="10-continuous-profiling"></a>10. Continuous Profiling

<sub>**2-3 weeks**</sub>

The signal almost nobody has. Traces tell you which service was slow; profiles tell you which line of code burned the CPU while it was. Done when profiling runs continuously in production at acceptable overhead and you have used a flame graph to find a hot path that traces alone had only narrowed to a service. Profiling on demand finds nothing, because you enable it after the interesting minute has passed.

**Assumes:** observability-platform

<b>Skills</b> — `Continuous Profiling` · `Flame Graph Analysis` · `CPU & Memory Profiling` · `eBPF-based Profilers` · `Grafana Pyroscope` · `Profile-to-Trace Correlation` · `Profiling Overhead Management`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Run continuous CPU profiling in production for a week and measure the actual overhead against the claimed figure
- Use a flame graph to find a hot path traces had only narrowed to a service, and quantify the CPU reclaimed after fixing it
- Correlate a profile with the span that produced it, so a slow trace links to the function that made it slow
- Track allocation profiles across a release and identify a memory regression before it became an out-of-memory incident
- Deploy an eBPF-based profiler that requires no application changes, and compare its resolution against in-process profiling on the same workload
- Write the guidance a product team needs to read a flame graph without you — then test it by asking one to diagnose a seeded regression

</details>

<details><summary><b>Resources</b> — 7, of which 7 free</summary>

- [Grafana Pyroscope Documentation](https://grafana.com/docs/pyroscope/latest/) <sub>Grafana Labs · documentation · free</sub>
- [Pyroscope Introduction](https://grafana.com/docs/pyroscope/latest/introduction/) <sub>Grafana Labs · documentation · free</sub>
- [Configure the Pyroscope Client](https://grafana.com/docs/pyroscope/latest/configure-client/) <sub>Grafana Labs · documentation · free</sub>
- [View & Analyze Profile Data](https://grafana.com/docs/pyroscope/latest/view-and-analyze-profile-data/) <sub>Grafana Labs · documentation · free</sub>
- [OpenTelemetry Profiles Signal](https://opentelemetry.io/docs/concepts/signals/profiles/) <sub>OpenTelemetry · documentation · free</sub>
- [OpenTelemetry Profiles Specification](https://opentelemetry.io/docs/specs/otel/profiles/) <sub>OpenTelemetry · documentation · free</sub>
- [Grafana Pyroscope Source & Examples](https://github.com/grafana/pyroscope) <sub>Grafana Labs · documentation · free</sub>

</details>

## Questions

<details><summary><b>How is observability engineering different from SRE?</b></summary><br>

The two roles split the same problem differently: an SRE decides what reliability to target, while an observability engineer builds the system that can answer why a target was missed. This path assumes you have already shipped services and used a metrics or logging tool, but have never owned the telemetry itself as a craft of its own.

</details>

<details><summary><b>What does the observability engineer roadmap actually cover?</b></summary><br>

It runs from the distinction between monitoring and observability through wide events, context propagation, signal correlation, telemetry cost, sampling, query and high-cardinality analysis, collector pipelines, running observability as a platform, and continuous profiling. The ordering is deliberate: wide events come early because you cannot ask a question of data you already aggregated away, and dashboards do not get their own phase because they only answer questions you already knew to ask.

</details>

<details><summary><b>Why does the roadmap put wide events before dashboards?</b></summary><br>

A pre-aggregated metric discards exactly the outliers you will later be asked about, so the roadmap teaches emitting one wide, richly dimensioned event per unit of work instead of scattering the story across counters and log lines. The mark of success is being able to answer a new question by filtering on a dimension rather than by shipping new code.

</details>

<details><summary><b>How long does it take to become an observability engineer, and how much does it pay?</b></summary><br>

SkillPilot's editorial estimate is 6-8 months at 10 hours a week. In the United States, Glassdoor's Observability Engineer total pay data (27 salaries submitted) puts entry pay around $135,441, the average around $164,046, and senior pay around $202,686.

</details>

<details><summary><b>Why is telemetry cost treated as its own phase instead of an afterthought?</b></summary><br>

Every attribute added to telemetry has a price, and observability budgets get cut by finance rather than by engineers, so the roadmap makes cost a first-class design input rather than a quarterly surprise. Being done with this phase means you can state the cost per million events for your own pipeline, attribute the bill to the services generating it, and cut it by a third while naming exactly which question you gave up answering.

</details>

<details><summary><b>What do I need to know before starting this roadmap?</b></summary><br>

You need working knowledge of Linux, containers and HTTP services, comfort reading and writing code in at least one language, and some prior exposure to a metrics or logging tool running in production. It is pitched as an advanced-level path, not an entry point into engineering generally.

</details>

## Neighbouring paths

[Site Reliability Engineer](sre.md) · [DevOps Engineer](devops-engineer.md) · [Platform Engineer](platform-engineer.md) · [Database Reliability Engineer](database-reliability-engineer.md)

## Certifications on this path

| Certification | Provider | Cost | Exam |
|---|---|---|---|
| [Prometheus Certified Associate (PCA)](../certifications/prometheus-certified-associate.md) | The Linux Foundation / CNCF | `$250 USD (includes one free retake); $299 USD bundled with the LFS241 course` | 90 minutes, pass 75% |
| [Certified Kubernetes Administrator (CKA)](../certifications/cka.md) | The Linux Foundation / CNCF | `$445 USD` | 2 hours, pass 66% |

---

<sub>Source of truth: [`data/roadmaps/observability-engineer.yaml`](../data/roadmaps/observability-engineer.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
