<!-- Generated from data/certifications/prometheus-certified-associate.yaml by tools/render-markdown.mjs. Do not edit. -->

# Prometheus Certified Associate (PCA)

> A multiple-choice, associate-level certification covering observability concepts, Prometheus architecture, PromQL, instrumentation and exporters, and alerting with Alertmanager.

**The Linux Foundation / CNCF** · code `PCA` · **$250 USD (includes one free retake); $299 USD bundled with the LFS241 course** · 90 minutes · pass 75% · valid 2 years · updated 2026-08-08

The PCA is a knowledge exam, and an easy one. Sixty multiple-choice questions in ninety minutes, and everything it tests is published free on prometheus.io. It does not prove you can operate Prometheus at scale — it proves you have read the documentation carefully. That is worth something, but be clear about which thing.

## What it is actually good for

Learning PromQL properly. Most people who run Prometheus daily know four queries and copy the rest from dashboards someone else built. The exam forces you to learn `rate` versus `irate`, aggregation over time versus over dimensions, vector matching and `histogram_quantile` — and those are genuinely useful the day after you pass.

The badge itself is a weak signal. It is beginner-level, closed-book recall, with none of the CKA's live cluster. Treat the certificate as a side effect of the studying, not the reason for it.

## Where the marks are

PromQL is 28% and the only domain you cannot pass by reading. Everything else is definitions. Weight your prep the same way: if you have twenty hours, spend ten of them writing queries against a running server.

The trap is the Observability Concepts domain at 18%. Logs, traces, spans, push versus pull and SLO/SLI/SLA basics are barely mentioned on prometheus.io, so candidates who study only the Prometheus docs walk in having skipped nearly a fifth of the exam. PromLabs, who helped define the exam scope, say the same thing about their own training.

## Before you book

**Closed book.** No documentation, no Prometheus instance, no browser tabs. This is the opposite of the CKA, and it means memorising function names rather than knowing where to look them up.

**75% is 45 of 60.** Fifteen wrong answers is the whole margin, and multiple-select questions score all-or-nothing.

**$250 with a free retake, valid two years.** Renewal means sitting the current exam again before it expires — there is no maintenance fee and no continuing-education route.

## The exam

| | |
|---|---|
| Code | `PCA` |
| Cost | **$250 USD (includes one free retake); $299 USD bundled with the LFS241 course** |
| Duration | 90 minutes |
| Passing score | 75% |
| Valid for | 2 years |
| Format | Online, proctored, closed-book — 60 multiple-choice and multiple-select questions, no Prometheus instance and no documentation access |

<sub>Cost from Linux Foundation Training & Certification — Prometheus Certified Associate (PCA) certification page (training.linuxfoundation.org), read on 2026-08-08. Prices change and this one is not re-read continuously — check the provider before paying.</sub>

## What the exam weights

The blueprint decides where study time goes. These are the published weights.

| Domain | Weight | |
|---|---:|---|
| PromQL | 28% | `██████░░░░░░░░░░░░░░` |
| Prometheus Fundamentals | 20% | `████░░░░░░░░░░░░░░░░` |
| Observability Concepts | 18% | `████░░░░░░░░░░░░░░░░` |
| Alerting & Dashboarding | 18% | `████░░░░░░░░░░░░░░░░` |
| Instrumentation and Exporters | 16% | `███░░░░░░░░░░░░░░░░░` |

<details><summary><b>PromQL</b> — 28%</summary>

- Selecting data with instant and range vector selectors
- Rates and derivatives
- Aggregating over time
- Aggregating over dimensions
- Binary operators and vector matching
- Histograms and quantile calculation
- Timestamp metrics

</details>

<details><summary><b>Prometheus Fundamentals</b> — 20%</summary>

- System architecture
- Configuration and scraping
- Understanding Prometheus limitations
- Data model and labels
- Exposition format

</details>

<details><summary><b>Observability Concepts</b> — 18%</summary>

- Metrics
- Logs and events
- Tracing and spans
- Push versus pull collection
- Service discovery
- Basics of SLOs, SLAs and SLIs

</details>

<details><summary><b>Alerting & Dashboarding</b> — 18%</summary>

- Dashboarding basics
- Configuring alerting rules
- Understanding and using Alertmanager
- Alerting basics — when, what and why to alert

</details>

<details><summary><b>Instrumentation and Exporters</b> — 16%</summary>

- Client libraries
- Instrumenting application code
- Exporters and when to use one
- Structuring and naming metrics

</details>

## Before you book it

- Comfortable on the Linux command line
- Basic understanding of HTTP services and containers
- No formal prerequisites — the Linux Foundation classes the PCA as beginner level

## How to prepare

6 steps, **about 69 hours** in total.

### 1. Run Prometheus locally before reading about it

<sub>**~6 hours**</sub>

Download the binary, scrape itself and node_exporter, and open the expression browser. Two hours of a running server makes the architecture questions trivial later — targets, scrape intervals and the /metrics endpoint stop being abstractions once you have watched them work.

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [First steps with Prometheus](https://prometheus.io/docs/introduction/first_steps/) <sub>Prometheus · documentation · free</sub>
- [Getting started](https://prometheus.io/docs/prometheus/latest/getting_started/) <sub>Prometheus · documentation · free</sub>
- [Monitoring Linux host metrics with the Node Exporter](https://prometheus.io/docs/guides/node-exporter/) <sub>Prometheus · tutorial · free</sub>
- [PCA Curriculum (official)](https://github.com/cncf/curriculum) <sub>CNCF · documentation · free</sub>

</details>

### 2. Learn the data model, labels and exposition format exactly

<sub>**~10 hours**</sub>

Counter, gauge, histogram and summary, and what each one is for. This is 20% of the exam and it is where precise wording matters — questions distinguish a counter from a gauge, and a histogram from a summary, on details that are easy to half-know.

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Data model](https://prometheus.io/docs/concepts/data_model/) <sub>Prometheus · documentation · free</sub>
- [Exposition formats](https://prometheus.io/docs/instrumenting/exposition_formats/) <sub>Prometheus · documentation · free</sub>
- [Configuration reference](https://prometheus.io/docs/prometheus/latest/configuration/configuration/) <sub>Prometheus · documentation · free</sub>
- [Storage and the TSDB](https://prometheus.io/docs/prometheus/latest/storage/) <sub>Prometheus · documentation · free</sub>

</details>

### 3. Spend most of your study time on PromQL

<sub>**~25 hours**</sub>

The heaviest domain at 28%, and the only one you cannot learn by reading. Work through selectors, rate, aggregation over time versus over dimensions, binary operators and histogram_quantile — then write each one yourself against a live server until the syntax is automatic.

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Querying basics](https://prometheus.io/docs/prometheus/latest/querying/basics/) <sub>Prometheus · documentation · free</sub>
- [Query functions](https://prometheus.io/docs/prometheus/latest/querying/functions/) <sub>Prometheus · documentation · free</sub>
- [Operators and vector matching](https://prometheus.io/docs/prometheus/latest/querying/operators/) <sub>Prometheus · documentation · free</sub>
- [PromQL Cheat Sheet](https://promlabs.com/promql-cheat-sheet/) <sub>PromLabs · documentation · free</sub>
- [PromLabs public Prometheus demo — run queries live](https://demo.promlabs.com/) <sub>PromLabs · tutorial · free</sub>

</details>

### 4. Instrument one service yourself

<sub>**~10 hours**</sub>

Add a client library to a small application, expose counters and a histogram, and name them by the official conventions. Then read an exporter's source. Knowing why you instrument directly rather than writing an exporter is the distinction this 16% domain keeps testing.

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Client libraries](https://prometheus.io/docs/instrumenting/clientlibs/) <sub>Prometheus · documentation · free</sub>
- [Instrumentation best practices](https://prometheus.io/docs/practices/instrumentation/) <sub>Prometheus · documentation · free</sub>
- [Metric and label naming](https://prometheus.io/docs/practices/naming/) <sub>Prometheus · documentation · free</sub>
- [Exporters and integrations](https://prometheus.io/docs/instrumenting/exporters/) <sub>Prometheus · documentation · free</sub>
- [Histograms and summaries](https://prometheus.io/docs/practices/histograms/) <sub>Prometheus · documentation · free</sub>

</details>

### 5. Write alerting rules and route them through Alertmanager

<sub>**~10 hours**</sub>

Configure a rule with a for clause, fire it, and watch Alertmanager group, inhibit and silence it. Grouping and inhibition are the parts candidates skip and the parts the exam asks about, because they are what separates Alertmanager from the rule evaluator.

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Alerting rules](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/) <sub>Prometheus · documentation · free</sub>
- [Alertmanager overview](https://prometheus.io/docs/alerting/latest/overview/) <sub>Prometheus · documentation · free</sub>
- [Alertmanager configuration](https://prometheus.io/docs/alerting/latest/configuration/) <sub>Prometheus · documentation · free</sub>
- [Alerting best practices](https://prometheus.io/docs/practices/alerting/) <sub>Prometheus · documentation · free</sub>
- [Grafana dashboards](https://grafana.com/docs/grafana/latest/visualizations/dashboards/) <sub>Grafana Labs · documentation · free</sub>

</details>

### 6. Close the observability-theory gap the Prometheus docs do not cover

<sub>**~8 hours**</sub>

Logs, traces and spans, push versus pull, and SLO/SLI/SLA definitions are 18% of the exam and largely absent from prometheus.io. Read them from a vendor-neutral source, because these are vocabulary questions and the published definitions are what gets marked.

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [Observability primer — logs, metrics, traces, spans](https://opentelemetry.io/docs/concepts/observability-primer/) <sub>OpenTelemetry · documentation · free</sub>
- [Service Level Objectives — Google SRE Book](https://sre.google/sre-book/service-level-objectives/) <sub>Google · documentation · free</sub>
- [Implementing SLOs — SRE Workbook](https://sre.google/workbook/implementing-slos/) <sub>Google · documentation · free</sub>
- [PCA exam preparation notes](https://training.promlabs.com/pca-certification/) <sub>PromLabs · documentation · free</sub>
- **Observability Engineering** <sub>Charity Majors, Liz Fong-Jones, George Miranda, Austin Parker · book · paid</sub> — free alternative: [OpenTelemetry Observability Primer](https://opentelemetry.io/docs/concepts/observability-primer/)

</details>

## Where this fits

[Observability Engineer](../roadmaps/observability-engineer.md) · [Site Reliability Engineer](../roadmaps/sre.md)

## Questions

<details><summary><b>Is the Prometheus Certified Associate exam hard?</b></summary><br>

It is a knowledge exam, and an easy one — sixty multiple-choice and multiple-select questions in ninety minutes, and everything it tests is published free on prometheus.io. It does not prove you can operate Prometheus at scale, only that you have read the documentation carefully, so treat the badge as a side effect of studying rather than the goal itself.

</details>

<details><summary><b>What is the PCA exam actually good for?</b></summary><br>

Its real value is forcing you to learn PromQL properly — rate versus irate, aggregation over time versus over dimensions, vector matching and histogram_quantile — instead of copying four queries from dashboards someone else built. Those skills are genuinely useful the day after you pass, even though the badge itself is a weak, beginner-level, closed-book signal.

</details>

<details><summary><b>Which domain should I spend the most time studying for the PCA?</b></summary><br>

PromQL is weighted 28%, the heaviest domain, and it is the only one you cannot pass by reading alone — you need to write queries against a live server. If you have twenty hours to study, plan on spending roughly ten of them on PromQL specifically.

</details>

<details><summary><b>What topics do candidates most often forget to study for the PCA?</b></summary><br>

Observability Concepts is 18% of the exam, covering logs, traces, spans, push versus pull collection, and SLO/SLI/SLA basics, but these topics are barely mentioned on prometheus.io. Candidates who study only the Prometheus docs walk in having skipped nearly a fifth of the exam, so this material needs a vendor-neutral source instead.

</details>

<details><summary><b>Can I use documentation during the Prometheus Certified Associate exam?</b></summary><br>

No. The PCA is closed-book: no documentation, no running Prometheus instance, and no browser tabs are allowed, which is the opposite of exams like the CKA. That means memorising function names rather than knowing where to look them up.

</details>

<details><summary><b>How much does the PCA cost and what is the passing score?</b></summary><br>

The exam costs $250 USD and includes one free retake, or $299 USD bundled with the LFS241 course. The passing score is 75%, which is 45 of 60 questions, so fifteen wrong answers is the whole margin, and multiple-select questions score all-or-nothing; the certification stays valid for two years with no maintenance fee.

</details>

---

<sub>Source of truth: [`data/certifications/prometheus-certified-associate.yaml`](../data/certifications/prometheus-certified-associate.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
