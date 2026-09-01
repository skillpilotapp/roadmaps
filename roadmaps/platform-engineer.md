<!-- Generated from data/roadmaps/platform-engineer.yaml by tools/render-markdown.mjs. Do not edit. -->

# Platform Engineer Roadmap

> The path DevOps engineers move into — building an internal developer platform as a product, covering Kubernetes as substrate, IaC at scale, GitOps, golden paths, portals, policy, multi-tenancy and adoption.

**Advanced** · **10 phases** · **8-11 months at 10h/week** · updated 2026-08-10

This path assumes two or more years running production infrastructure. It is the move DevOps engineers make when the bottleneck stops being the pipeline and starts being everyone else's pipeline.

The shift is uncomfortable and it is the entire job: **your users are engineers, and they can refuse you**. An internal platform nobody adopts is not a platform, it is a side project with a Kubernetes bill. That is why adoption is a phase rather than an afterthought, and why the portal comes after the golden paths — a catalogue of services nobody wants to use is a directory.

Write code, not just YAML. Phase three onward assumes you can build a controller, not only configure one.

Expect 8–11 months. Phase two is the longest for a reason: everything above it fails in ways you have to be able to debug.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$105,062` | Salary.com Platform Engineer salary report, early career (1-2 years experience), United States | 2026-08-08 |
| Mid | `$130,978` | Salary.com Platform Engineer salary report, mid-level (2-4 years experience), United States | 2026-08-08 |
| Senior | `$165,664` | Salary.com Platform Engineer salary report, senior level (5-8 years experience), United States | 2026-08-08 |

Total duration is **8-11 months at 10h/week** — <sub>SkillPilot editorial estimate, 2026-08-08</sub>

## Before you start

- Two or more years running production systems as a DevOps or infrastructure engineer
- Working Kubernetes knowledge — you can deploy, debug and roll back a workload
- Fluency with at least one infrastructure-as-code tool and one CI system
- Comfort writing code in Go, Python or TypeScript, not just YAML

## The path

| # | Phase | Duration |
|---:|---|---|
| 1 | [Platform Thinking](#1-platform-thinking) | 3-4 weeks |
| 2 | [Kubernetes as a Substrate](#2-kubernetes-substrate) | 5-7 weeks |
| 3 | [Infrastructure as Code at Scale](#3-infrastructure-as-code-at-scale) | 4-6 weeks |
| 4 | [CI/CD & GitOps Delivery](#4-gitops-delivery) | 4-6 weeks |
| 5 | [Golden Paths & Scaffolding](#5-golden-paths) | 3-4 weeks |
| 6 | [Developer Portals & Service Catalogue](#6-developer-portal) | 3-4 weeks |
| 7 | [Policy as Code & Guardrails](#7-policy-and-guardrails) | 3-4 weeks |
| 8 | [Platform Observability](#8-platform-observability) | 4-5 weeks |
| 9 | [Multi-tenancy & Isolation](#9-multi-tenancy) | 4-5 weeks |
| 10 | [Adoption & Platform as a Product](#10-adoption-and-product) | 4-5 weeks |

---

### <a id="1-platform-thinking"></a>1. Platform Thinking

<sub>**3-4 weeks**</sub>

A platform is a product, and its customers are engineers who can ignore it. This phase is about naming that customer, learning what they actually struggle with, and deciding what you will not build. Done when you have interviewed at least five engineers outside your team and written a one-page platform charter naming your users, the three problems you will solve first, and what stays out of scope.

<b>Skills</b> — `Platform as a Product` · `Internal Customer Discovery` · `Cognitive Load Analysis` · `Team Topologies` · `Scope & Non-Goals` · `Platform Charter Writing` · `DORA Metrics` · `Developer Experience Research`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Interview five engineers from teams you do not sit with, and write down the top three things that slow them down in their words rather than yours
- Write a one-page platform charter naming your users, the first three problems you will solve, and an explicit list of things the platform will never do
- Map the full path from a developer's commit to production for one real service, timing each step — the waiting is usually longer than the working
- Measure your organisation's current DORA four keys from real data, not from a survey, and note which one you cannot compute yet
- Take one recurring support request your team answers by hand, and write down what it would cost to make it self-service instead
- Write the argument for why a platform team should exist here, in a form a director would forward — and include what it costs

</details>

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [CNCF Platforms White Paper](https://tag-app-delivery.cncf.io/whitepapers/platforms/) <sub>CNCF TAG App Delivery · documentation · free</sub>
- [CNCF Platform Engineering Maturity Model](https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/) <sub>CNCF TAG App Delivery · documentation · free</sub>
- [Team Topologies Key Concepts](https://teamtopologies.com/key-concepts) <sub>Team Topologies · documentation · free</sub>
- [DORA Software Delivery Performance Metrics](https://dora.dev/guides/dora-metrics-four-keys/) <sub>DORA · documentation · free</sub>
- **Platform Engineering on Kubernetes** <sub>Mauricio Salatino · book · paid</sub> — free alternative: [CNCF Platforms White Paper](https://tag-app-delivery.cncf.io/whitepapers/platforms/)

</details>

### <a id="2-kubernetes-substrate"></a>2. Kubernetes as a Substrate

<sub>**5-7 weeks**</sub>

Most platforms sit on Kubernetes, and platform engineers are on the operating side of it, not the deploying side. Control planes, extension points, the reconciliation loop, and what breaks a cluster other teams depend on. Done when you have written a controller that reconciles a custom resource you defined, and can explain what happens to it when the API server is briefly unavailable.

**Assumes:** platform-thinking

<b>Skills</b> — `Kubernetes Control Plane Internals` · `Custom Resource Definitions` · `Controllers & Reconciliation Loops` · `Operator Pattern` · `Admission Control` · `API Aggregation` · `Cluster Lifecycle & Upgrades` · `Scheduling & Node Management` · `Helm & Kustomize`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Define a CRD for something your organisation provisions by hand, and write the controller that reconciles it
- Make your controller idempotent under repeated reconciliation, then prove it by deleting the underlying resource behind its back and watching it recover
- Upgrade a multi-node cluster across a minor version with workloads running, and record every deprecated API you had to fix first
- Write a validating admission webhook, then deliberately break it and document what happens to every deployment in the cluster
- Package one platform capability as a Helm chart with sane defaults, so a team gets a working install without reading the values file
- Compare a CRD against an aggregated API server for one use case, and write down why you chose the one you chose

</details>

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [Kubernetes Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) <sub>Kubernetes · documentation · free</sub>
- [Kubernetes Operator Pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) <sub>Kubernetes · documentation · free</sub>
- [Kubernetes API Aggregation Layer](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/) <sub>Kubernetes · documentation · free</sub>
- [Helm Documentation](https://helm.sh/docs/) <sub>Helm · documentation · free</sub>
- **Kubernetes: Up and Running** <sub>Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson · book · paid</sub> — free alternative: [Kubernetes Documentation — Concepts](https://kubernetes.io/docs/concepts/)

</details>

### <a id="3-infrastructure-as-code-at-scale"></a>3. Infrastructure as Code at Scale

<sub>**4-6 weeks**</sub>

Writing Terraform is not the skill; designing modules fifty teams consume without forking them is. Composition, versioning, state boundaries, and control planes that provision infrastructure from a Kubernetes API. Done when a team you did not help provisioned real infrastructure through a module or composition you published, using only its documented inputs.

**Assumes:** kubernetes-substrate

<b>Skills</b> — `Module Design & Composition` · `Terraform at Scale` · `State & Blast Radius Boundaries` · `Crossplane` · `Abstraction API Design` · `Module Versioning & Release` · `Drift Detection & Reconciliation` · `Infrastructure Testing`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Publish a versioned module that provisions a complete service environment, then hand it to a team with nothing but its README and see what they ask you
- Split one monolithic state file into bounded states, and document what a mistake can now no longer destroy
- Build a Crossplane composition that exposes a single claim — "I need a database" — and hides the twelve resources behind it
- Design the abstraction API for one capability, deliberately leaving out an option people asked for, and write the reason you left it out
- Add automated tests to a module so a breaking change fails in CI rather than in a consumer's plan
- Detect and reconcile drift on a resource somebody changed by hand, and decide whether you revert it or adopt it

</details>

<details><summary><b>Resources</b> — 4, of which 3 free</summary>

- [Terraform Module Development](https://developer.hashicorp.com/terraform/language/modules/develop) <sub>HashiCorp · documentation · free</sub>
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs) <sub>HashiCorp · documentation · free</sub>
- [Crossplane Documentation](https://docs.crossplane.io/latest/) <sub>Crossplane · documentation · free</sub>
- **Terraform: Up & Running** <sub>Yevgeniy Brikman · book · paid</sub> — free alternative: [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)

</details>

### <a id="4-gitops-delivery"></a>4. CI/CD & GitOps Delivery

<sub>**4-6 weeks**</sub>

Deployment becomes a property of a repository rather than a job someone runs. Pull-based reconciliation, environment promotion, secrets that never sit in Git, and rollbacks that are a revert. Done when a service deploys to production purely by merging to a branch, and you can point at the exact commit that produced what is running right now.

**Assumes:** infrastructure-as-code-at-scale

<b>Skills</b> — `GitOps Principles` · `Argo CD or Flux` · `Environment Promotion` · `Progressive Delivery` · `Secrets Management in GitOps` · `Pipeline Design & Reuse` · `Supply Chain Provenance` · `Rollback & Drift Correction`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Put a real service under GitOps reconciliation so the cluster converges on the repository without anyone running a deploy command
- Change a live resource with kubectl and watch the reconciler revert it — then write down which changes you deliberately let stand
- Build environment promotion from staging to production as a pull request between directories or branches, with the diff readable by a reviewer
- Deliver secrets to workloads without any secret material in Git, using sealed secrets or an external secrets operator, and document the recovery path
- Set up a canary rollout that aborts on a metric threshold rather than on somebody watching a graph, and prove it by shipping a deliberately bad build
- Write the reusable pipeline template three teams adopt unchanged, and count how many of them changed it anyway

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [OpenGitOps Principles](https://opengitops.dev/) <sub>OpenGitOps · documentation · free</sub>
- [Argo CD Documentation](https://argo-cd.readthedocs.io/en/stable/) <sub>Argo Project · documentation · free</sub>
- [Flux Documentation](https://fluxcd.io/flux/) <sub>Flux CD · documentation · free</sub>
- [Argo Rollouts Documentation](https://argo-rollouts.readthedocs.io/en/stable/) <sub>Argo Project · documentation · free</sub>

</details>

### <a id="5-golden-paths"></a>5. Golden Paths & Scaffolding

<sub>**3-4 weeks**</sub>

A golden path is the way of doing something that is so obviously easier that nobody argues. Templates, scaffolding, sane defaults, and a documented escape hatch for the team that genuinely needs to leave the path. Done when a new service was created from your template by someone you never spoke to, and reached production without a single exception request.

**Assumes:** gitops-delivery

<b>Skills</b> — `Golden Path Design` · `Service Scaffolding` · `Opinionated Defaults` · `Paved Road vs Escape Hatch` · `Template Maintenance` · `Documentation as Interface` · `Time-to-First-Deploy`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build a service template that produces a repository, a pipeline, a dashboard and a deployed staging environment from one form submission
- Measure time from 'I need a new service' to a running staging deploy before and after your template, and publish both numbers
- Define the escape hatch: write exactly how a team leaves the golden path, what they take on by doing so, and who approves it
- Update a template after ten services were already generated from it, and solve the harder half — getting the change into the ten
- Watch someone use your template without helping them, note every point they hesitated, and fix the three worst
- Write the golden path documentation as the interface itself, so the happy path needs no conversation with your team

</details>

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [Backstage Software Templates](https://backstage.io/docs/features/software-templates/) <sub>Backstage · documentation · free</sub>
- [CNCF Platforms White Paper](https://tag-app-delivery.cncf.io/whitepapers/platforms/) <sub>CNCF TAG App Delivery · documentation · free</sub>
- [CNCF Platform Engineering Maturity Model](https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/) <sub>CNCF TAG App Delivery · documentation · free</sub>

</details>

### <a id="6-developer-portal"></a>6. Developer Portals & Service Catalogue

<sub>**3-4 weeks**</sub>

The front door. A catalogue that answers who owns this, where its docs are and what it depends on — kept accurate because it is generated, not maintained by hand. Done when the catalogue answers an ownership question faster than asking in chat, and its entries update from code rather than from someone remembering to edit them.

**Assumes:** golden-paths

<b>Skills</b> — `Backstage` · `Service Catalogue Modelling` · `Ownership Metadata` · `Catalogue Auto-discovery` · `TechDocs & Docs as Code` · `Portal Plugin Development` · `Portal Information Architecture`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Stand up a developer portal and populate its catalogue by auto-discovery from repositories, not by hand-written entries
- Model ownership so every service resolves to a team that still exists — the orphans you find are the real finding
- Publish service documentation from the same repository as the code, so a docs change ships in the same pull request as the change it describes
- Write a portal plugin surfacing one thing engineers currently look up elsewhere, then check whether they stopped going elsewhere
- Wire the catalogue into your scaffolding so a new service registers itself at creation and nobody has to remember
- Race the portal against your chat channel on an ownership question, and record which was faster

</details>

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [What is Backstage?](https://backstage.io/docs/overview/what-is-backstage) <sub>Backstage · documentation · free</sub>
- [Backstage Software Catalog](https://backstage.io/docs/features/software-catalog/) <sub>Backstage · documentation · free</sub>
- [Backstage Software Templates](https://backstage.io/docs/features/software-templates/) <sub>Backstage · documentation · free</sub>

</details>

### <a id="7-policy-and-guardrails"></a>7. Policy as Code & Guardrails

<sub>**3-4 weeks**</sub>

Guardrails let people move fast without a review queue, and a guardrail engineers route around has made things worse than no guardrail. Admission policy, provisioning controls, and rejection messages that say how to comply. Done when a policy you wrote blocked a real non-compliant change, the author fixed it from the error message alone, and you can state its false-positive rate.

**Assumes:** developer-portal

<b>Skills</b> — `Policy as Code` · `Open Policy Agent & Rego` · `Kyverno` · `Admission Policy Rollout` · `Audit vs Enforce Modes` · `Actionable Policy Messages` · `Exception Handling` · `Compliance Evidence`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Write an admission policy that rejects workloads missing required ownership labels, and ship it in audit mode first
- Measure how much the policy would have blocked while in audit mode, then use that number to decide whether enforcement is safe
- Rewrite a policy rejection message so the author fixes the problem without contacting you — test it on someone who has never seen the policy
- Implement the same rule in both OPA and Kyverno, then write down which you would run in production here and why
- Build the exception process: how a team gets a documented, time-limited waiver instead of quietly working around you
- Generate compliance evidence automatically from policy results, so an audit question is a query rather than a fire drill

</details>

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [Open Policy Agent Documentation](https://www.openpolicyagent.org/docs) <sub>Open Policy Agent · documentation · free</sub>
- [Kyverno Documentation](https://kyverno.io/docs/) <sub>Kyverno · documentation · free</sub>
- [Kubernetes RBAC Authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) <sub>Kubernetes · documentation · free</sub>

</details>

### <a id="8-platform-observability"></a>8. Platform Observability

<sub>**4-5 weeks**</sub>

You have to observe the platform itself, not just what runs on it. Platform SLOs, tenant-visible signals, and telemetry teams get by default instead of building each time. Done when you can state your platform's own SLO, report last month's compliance against it, and show that a tenant service got working dashboards and alerts without its team instrumenting anything by hand.

**Assumes:** policy-and-guardrails

<b>Skills</b> — `Platform SLOs` · `Observability as a Default` · `OpenTelemetry Auto-instrumentation` · `Multi-tenant Telemetry` · `Dashboard Templating` · `Telemetry Cost Control` · `Platform Incident Response` · `Golden Signals for Platforms`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Define and publish an SLO for one platform capability — deployment pipeline availability, provisioning latency — and report a month of compliance
- Make a new service arrive with dashboards and alerts already working, generated from its catalogue entry rather than from a copied JSON file
- Instrument the platform's own control loops, so you notice reconciliation falling behind before a tenant does
- Separate telemetry per tenant so one team's query load cannot degrade another team's dashboards, and prove it under load
- Write the platform incident runbook for the case where the platform is the outage — and note who tells fifty teams
- Cut platform telemetry spend without losing a signal you use, and write down the one you were tempted to drop and did not

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Grafana Dashboard Best Practices](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/) <sub>Grafana Labs · documentation · free</sub>
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/) <sub>OpenTelemetry · documentation · free</sub>
- [Implementing SLOs (SRE Workbook chapter)](https://sre.google/workbook/implementing-slos/) <sub>Google · documentation · free</sub>
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/) <sub>Prometheus · documentation · free</sub>

</details>

### <a id="9-multi-tenancy"></a>9. Multi-tenancy & Isolation

<sub>**4-5 weeks**</sub>

Fifty teams on shared infrastructure, none of them able to hurt the others. Namespaces, quotas, network policy, node isolation, and the honest decision about where soft isolation stops being enough. Done when you have run a deliberate noisy-neighbour test — one tenant consuming everything it can — and shown the others kept meeting their SLOs throughout.

**Assumes:** platform-observability

<b>Skills</b> — `Multi-tenancy Models` · `Namespace & Tenant Boundaries` · `Resource Quotas & Limits` · `Network Policy` · `RBAC Design at Scale` · `Noisy Neighbour Mitigation` · `Cluster Sharding Strategy` · `Tenant Cost Attribution`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Run a noisy-neighbour test where one tenant consumes everything it is permitted to, and show the other tenants kept meeting their SLOs
- Design tenant onboarding as one automated action producing namespace, quota, RBAC and network policy together — never four tickets
- Apply default-deny network policy across a shared cluster, and document every legitimate flow you had to discover the hard way
- Write the decision record for shared cluster versus cluster-per-tenant here, with the cost of each and the trust assumption that decides it
- Set quotas from observed usage rather than from a round number, then track how often teams hit them and whether they were right to
- Attribute a shared cluster's cost down to tenant level, including idle capacity, and decide who pays for the slack

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Kubernetes Multi-tenancy](https://kubernetes.io/docs/concepts/security/multi-tenancy/) <sub>Kubernetes · documentation · free</sub>
- [Kubernetes Resource Quotas](https://kubernetes.io/docs/concepts/policy/resource-quotas/) <sub>Kubernetes · documentation · free</sub>
- [Kubernetes Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/) <sub>Kubernetes · documentation · free</sub>
- [Kubernetes RBAC Authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) <sub>Kubernetes · documentation · free</sub>
- [Kyverno Documentation](https://kyverno.io/docs/) <sub>Kyverno · documentation · free</sub>

</details>

### <a id="10-adoption-and-product"></a>10. Adoption & Platform as a Product

<sub>**4-5 weeks**</sub>

The only phase that decides whether any of the previous nine mattered. Adoption you had to chaperone is a demo, not a platform. Done when a team you have never worked with adopted your platform end to end without you in the room, and you can report an adoption percentage, a satisfaction signal and a deprecation you completed on schedule.

**Assumes:** multi-tenancy

<b>Skills</b> — `Adoption Measurement` · `Platform Roadmapping` · `Internal Developer Marketing` · `Deprecation & Migration Management` · `Developer Satisfaction Surveys` · `Influence Without Authority` · `Support Model & SLAs` · `Platform Maturity Assessment`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Publish an adoption metric — percentage of services on the golden path — and track it monthly after you stop actively promoting it
- Onboard a team you have never worked with using only your documentation, staying out of the room, and log every question they had to ask anyway
- Run a developer satisfaction survey, publish the results unedited including the bad ones, and change one roadmap item because of them
- Deprecate a platform capability on a published timeline and complete the migration, including the last three teams who ignored every notice
- Run a CNCF platform maturity assessment across the five aspects and turn the gaps into a prioritised six-month roadmap
- Write the platform's support model — what you respond to, how fast, and what teams own themselves — and hold to it for a quarter

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [CNCF Platform Engineering Maturity Model](https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/) <sub>CNCF TAG App Delivery · documentation · free</sub>
- [CNCF Platforms White Paper](https://tag-app-delivery.cncf.io/whitepapers/platforms/) <sub>CNCF TAG App Delivery · documentation · free</sub>
- [DORA Software Delivery Performance Metrics](https://dora.dev/guides/dora-metrics-four-keys/) <sub>DORA · documentation · free</sub>
- [Team Topologies Key Concepts](https://teamtopologies.com/key-concepts) <sub>Team Topologies · documentation · free</sub>

</details>

## Questions

<details><summary><b>What is a platform engineer, and how is it different from DevOps?</b></summary><br>

A platform engineer builds an internal developer platform as a product, where the customers are engineers who can choose to ignore it. It is the move DevOps engineers make when the bottleneck stops being the pipeline itself and starts being everyone else's pipeline — the job shifts from running production systems to designing the paved road other teams use to reach production.

</details>

<details><summary><b>What are the prerequisites for the Platform Engineer roadmap?</b></summary><br>

You need two or more years running production systems as a DevOps or infrastructure engineer, working Kubernetes knowledge — deploying, debugging and rolling back a workload — and fluency with at least one infrastructure-as-code tool and one CI system. Comfort writing code in Go, Python or TypeScript is also assumed, since phase three onward requires building a controller rather than only configuring one.

</details>

<details><summary><b>How long does the Platform Engineer roadmap take?</b></summary><br>

Expect 8-11 months at around 10 hours a week, spread across ten phases. Phase two, Kubernetes as a Substrate, is the longest at 5-7 weeks, because everything built in later phases fails in ways you need to be able to debug at that layer.

</details>

<details><summary><b>How much does a platform engineer earn?</b></summary><br>

In the United States, entry-level platform engineers (1-2 years experience) earn around $105,062, mid-level (2-4 years) around $130,978, and senior (5-8 years) around $165,664, according to Salary.com's Platform Engineer salary report. Figures are sourced per level and reflect the US market specifically.

</details>

<details><summary><b>Why does the developer portal come after golden paths in this roadmap, not before?</b></summary><br>

The roadmap orders golden paths before the developer portal because a catalogue of services nobody wants to use is just a directory — the portal is the front door, but there needs to be somewhere worthwhile for it to lead. Adoption is likewise treated as its own final phase rather than an afterthought, since a platform nobody adopts is a side project with a Kubernetes bill, not a platform.

</details>

<details><summary><b>What does the Policy as Code & Guardrails phase actually cover?</b></summary><br>

It covers admission policy, provisioning controls and writing rejection messages that tell the author how to comply, using tools like Open Policy Agent and Kyverno. The phase is considered done when a policy you wrote has blocked a real non-compliant change, the author fixed it from the error message alone without contacting you, and you can state the policy's false-positive rate.

</details>

## Neighbouring paths

[Site Reliability Engineer](sre.md) · [DevOps Engineer](devops-engineer.md) · [Cloud Architect](cloud-architect.md) · [Database Reliability Engineer](database-reliability-engineer.md)

---

<sub>Source of truth: [`data/roadmaps/platform-engineer.yaml`](../data/roadmaps/platform-engineer.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
