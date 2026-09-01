<!-- Generated from data/roadmaps/devops-engineer.yaml by tools/render-markdown.mjs. Do not edit. -->

# DevOps Engineer Roadmap

> A structured path from Linux fundamentals through cloud infrastructure, automation, containers, and monitoring to a production-ready DevOps engineering career.

**Intermediate** · **9 phases** · **15-21 months** · updated 2026-08-10

This path assumes you write some code or scripts and are comfortable in a terminal, but have not yet run cloud infrastructure or production deployments professionally. If you already administer Linux servers, phase one is a two-week refresher rather than two months.

Each phase below lists what to learn, what to build, and how to know you are done. The exit criteria are deliberately checkable — "you can `terraform destroy` your environment and recreate it" is verifiable in a way that "you understand Terraform" is not. Work through them in order: each phase assumes the one before it.

Expect 15–21 months alongside a job. Phase three is where most people slow down, because infrastructure as code is the first point where you have to hold a whole system in your head.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$118,895` | Glassdoor DevOps Engineer salary estimate (average, US) | 2026-08-04 |
| Mid | `$174,243` | Glassdoor Mid-Level DevOps Engineer salary estimate (average, US) | 2026-08-04 |
| Senior | `$181,848` | Glassdoor Senior DevOps Engineer salary estimate (average, US) | 2026-08-04 |

Total duration is **15-21 months** — <sub>SkillPilot editorial estimate, 2026-08-09</sub>

## Before you start

- Basic programming or scripting exposure
- Comfort using a computer's command line

## The path

| # | Phase | Duration |
|---:|---|---|
| 1 | [Foundation & Linux Mastery](#1-foundation) | 1-2 months |
| 2 | [Cloud Infrastructure & Platforms](#2-infrastructure) | 2-3 months |
| 3 | [CI/CD & Infrastructure as Code](#3-automation) | 2-3 months |
| 4 | [Containerization & Orchestration](#4-containers) | 2-3 months |
| 5 | [Monitoring & Site Reliability](#5-monitoring) | 3-4 months |
| 6 | [DevSecOps & Supply Chain Security](#6-security-supply-chain) | 3-4 weeks |
| 7 | [Platform Engineering & Developer Experience](#7-platform-engineering) | 3-4 weeks |
| 8 | [Cost Governance & Resilience](#8-cost-resilience) | 3-4 weeks |
| 9 | [Specialization & Advanced Topics](#9-specialization) | 2-3 months |

---

### <a id="1-foundation"></a>1. Foundation & Linux Mastery

<sub>**1-2 months**</sub>

Linux administration, the shell, and Git. Done when you can rebuild your server from your own notes without searching, and read someone else's bash script and predict what it does before running it. Kubernetes troubleshooting is Linux troubleshooting: skip this and every later phase becomes guesswork.

<b>Skills</b> — `Linux Administration` · `Filesystem & Permissions` · `Process & Service Management` · `Bash Scripting` · `Text Processing (grep, sed, awk)` · `Git & GitHub` · `SSH & Key Management` · `Networking Basics (DNS, TCP/IP, ports)` · `Package Management`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Set up a Linux server from scratch, harden SSH access with key-based auth, disable password login, and document every configuration change in a README you could hand to someone else
- Write a bash script that backs up a directory to a remote host on a nightly cron schedule, rotates old backups, and reports success or failure — including what happens when the remote host is unreachable
- Build a Git branching workflow for a 3-person team, including pull request templates, a protected main branch, and a documented procedure for reverting a bad merge
- Diagnose a deliberately broken service — wrong permissions, a full disk, a port already bound — using only journalctl, systemctl and standard tooling, and write up what the symptom looked like versus what the cause was
- Write a script that audits a server and reports drift from a known-good baseline: unexpected open ports, users with shell access, world-writable files

</details>

<details><summary><b>Resources</b> — 7, of which 7 free</summary>

- [The Linux Command Line (free book)](https://linuxcommand.org/tlcl.php) <sub>William Shotts · book · free</sub>
- [Linux Journey](https://linuxjourney.com/) <sub>Linux Journey · tutorial · free</sub>
- [Git Documentation](https://git-scm.com/doc) <sub>Git · documentation · free</sub>
- [Pro Git (free book)](https://git-scm.com/book/en/v2) <sub>Scott Chacon, Ben Straub · book · free</sub>
- [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html) <sub>GNU · documentation · free</sub>
- [OverTheWire Bandit (hands-on shell wargame)](https://overthewire.org/wargames/bandit/) <sub>OverTheWire · tutorial · free</sub>
- [systemd Documentation](https://www.freedesktop.org/software/systemd/man/latest/) <sub>freedesktop.org · documentation · free</sub>

</details>

### <a id="2-infrastructure"></a>2. Cloud Infrastructure & Platforms

<sub>**2-3 months**</sub>

Build cloud infrastructure by hand before automating it. Done when you can explain why a resource in a private subnet cannot reach the internet, fix it without a guide, and draw your VPC from memory. Pick one provider and go deep — three shallow is worth less than one deep, and the second takes a fortnight once the concepts hold.

**Assumes:** foundation

<b>Skills</b> — `Cloud Provider Fundamentals` · `Virtual Machines & Compute` · `VPC & Subnetting` · `Security Groups & Network ACLs` · `IAM & Least Privilege` · `Load Balancers` · `Object & Block Storage` · `DNS & CDN` · `Cloud Cost Fundamentals`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Deploy a three-tier web application with an auto-scaling group behind a load balancer, then prove the scaling works by generating enough load to trigger it
- Configure a VPC with public and private subnets, a NAT gateway, and security groups following least privilege — then write down, in your own words, the path a packet takes from the internet to a private instance and back
- Set up DNS records and a CDN in front of a static site with HTTPS enforced and a documented cache invalidation procedure
- Write an IAM policy that grants exactly the permissions one service needs and nothing more, then verify it by removing a permission and observing what breaks
- Deliberately misconfigure a security group or route table, hand it to someone else, and have them diagnose it — then swap roles
- Estimate the monthly cost of your architecture before deploying it, then compare against the actual bill after a week and account for the difference

</details>

<details><summary><b>Resources</b> — 7, of which 7 free</summary>

- [AWS Cloud Practitioner Essentials](https://aws.amazon.com/training/learn-about/cloud-practitioner/) <sub>AWS · course · free</sub>
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/) <sub>AWS · documentation · free</sub>
- [AWS Skill Builder (free tier)](https://skillbuilder.aws/) <sub>AWS · course · free</sub>
- [Microsoft Learn — Azure Fundamentals](https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/) <sub>Microsoft · course · free</sub>
- [Google Cloud Skills Boost](https://www.cloudskillsboost.google/) <sub>Google · course · free</sub>
- [AWS VPC Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) <sub>AWS · documentation · free</sub>
- [Last Week in AWS (newsletter, cost and service commentary)](https://www.lastweekinaws.com/newsletter/) <sub>Corey Quinn · documentation · free</sub>

</details>

### <a id="3-automation"></a>3. CI/CD & Infrastructure as Code

<sub>**2-3 months**</sub>

Make infrastructure repeatable, reviewed and version controlled. Done when you can destroy your entire environment and recreate it, and the result works. That test is binary: if you are afraid to run destroy, your infrastructure is not actually code. This is where most people slow down — it is the first phase that demands holding a whole system in your head.

**Assumes:** infrastructure

<b>Skills</b> — `Infrastructure as Code` · `Terraform` · `State Management & Locking` · `Module Design` · `CI/CD Pipelines` · `GitHub Actions` · `Ansible` · `Secrets Management` · `Artifact & Dependency Management`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build a pipeline that lints, tests, builds and deploys to staging on every merge to main, with the deploy gated on the tests actually passing
- Provision a complete VPC, compute fleet and database entirely from Terraform modules, with remote state and locking configured
- Run terraform destroy against your whole environment and rebuild it from scratch — then fix everything that did not come back, because something will not
- Write an Ansible playbook that configures five servers identically and idempotently, then run it twice and confirm the second run changes nothing
- Add a manual approval gate and a documented rollback to your pipeline, then practise the rollback under time pressure
- Move a hardcoded secret out of your pipeline into a secrets manager, and verify it no longer appears in logs or state files

</details>

<details><summary><b>Resources</b> — 7, of which 6 free</summary>

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs) <sub>HashiCorp · documentation · free</sub>
- [HashiCorp Terraform Tutorials](https://developer.hashicorp.com/terraform/tutorials) <sub>HashiCorp · tutorial · free</sub>
- [GitHub Actions Documentation](https://docs.github.com/en/actions) <sub>GitHub · documentation · free</sub>
- [Ansible Getting Started](https://docs.ansible.com/ansible/latest/getting_started/index.html) <sub>Red Hat · tutorial · free</sub>
- **Terraform: Up & Running** <sub>Yevgeniy Brikman · book · paid</sub> — free alternative: [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform Best Practices](https://developer.hashicorp.com/terraform/language/style) <sub>HashiCorp · documentation · free</sub>
- [Google Cloud — DevOps Research (DORA) reports](https://dora.dev/research/) <sub>Google · documentation · free</sub>

</details>

### <a id="4-containers"></a>4. Containerization & Orchestration

<sub>**2-3 months**</sub>

Docker and Kubernetes in depth. Done when you can explain why your image is 1.2GB and get it under 200MB, and diagnose a CrashLoopBackOff from logs and events rather than by deleting the pod and hoping. The manifests are the surface — the pages are about networking, scheduling and resource contention.

**Assumes:** automation

<b>Skills</b> — `Docker` · `Image Optimisation & Multi-stage Builds` · `Kubernetes` · `Pod Scheduling & Resource Limits` · `Kubernetes Networking & Services` · `Persistent Storage & Volumes` · `Helm Charts` · `Container Security` · `Container Registry`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Containerise a multi-service application with a Dockerfile per service and a compose file for local development
- Cut one of those images by at least 60% using multi-stage builds and a smaller base, and record what each change saved
- Deploy to a Kubernetes cluster with resource limits, liveness and readiness probes, and a rolling update strategy that you verify causes no dropped requests
- Package the application as a Helm chart with separate values for staging and production
- Break a running deployment four ways — bad image tag, missing config, insufficient memory, failing probe — and diagnose each from kubectl output alone
- Add a vulnerability scan to your image build and fix what it finds, or document why a finding is acceptable

</details>

<details><summary><b>Resources</b> — 7, of which 6 free</summary>

- [Kubernetes Documentation](https://kubernetes.io/docs/home/) <sub>Kubernetes · documentation · free</sub>
- [Docker Get Started Guide](https://docs.docker.com/get-started/) <sub>Docker · tutorial · free</sub>
- [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) <sub>Kelsey Hightower · tutorial · free</sub>
- [Play with Kubernetes (browser lab)](https://labs.play-with-k8s.com/) <sub>Docker · tutorial · free</sub>
- **Kubernetes: Up and Running** <sub>Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson · book · paid</sub> — free alternative: [Kubernetes Documentation — Concepts](https://kubernetes.io/docs/concepts/)
- [Docker Best Practices for Dockerfiles](https://docs.docker.com/build/building/best-practices/) <sub>Docker · documentation · free</sub>
- [Helm Documentation](https://helm.sh/docs/) <sub>Helm · documentation · free</sub>

</details>

### <a id="5-monitoring"></a>5. Monitoring & Site Reliability

<sub>**3-4 months**</sub>

Make the system you built observable. Done when you can answer "was it healthy last Tuesday at 3pm?" with data rather than opinion, and your alerts fire on user-visible symptoms rather than on CPU. Cause-based alerting is the direct route to fatigue, and fatigue is how the real page gets missed.

**Assumes:** containers

<b>Skills</b> — `Metrics & Instrumentation` · `Prometheus` · `Grafana & Dashboard Design` · `Log Aggregation` · `Distributed Tracing` · `Alert Design & Routing` · `SLI/SLO Definition` · `Incident Response` · `On-call & Runbooks`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Deploy Prometheus and Grafana against the cluster from the previous phase, with a dashboard per service that someone else could read without you
- Define SLOs for one service — for example 99.5% of requests under 300ms — and build an alert that fires on error-budget burn rate rather than on a raw threshold
- Add structured logging and correlate a single request across services using a trace ID
- Rewrite one cause-based alert (high CPU, disk filling) as a symptom-based one, and explain what user impact it now represents
- Write an on-call runbook for one service, then have someone unfamiliar with it follow the runbook during a simulated incident
- Run a tabletop incident exercise and produce a blameless postmortem with action items that are assigned to someone

</details>

<details><summary><b>Resources</b> — 6, of which 6 free</summary>

- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/) <sub>Prometheus · documentation · free</sub>
- [Grafana Fundamentals](https://grafana.com/tutorials/grafana-fundamentals/) <sub>Grafana Labs · tutorial · free</sub>
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/) <sub>OpenTelemetry · documentation · free</sub>
- [Google SRE Book — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) <sub>Google · documentation · free</sub>
- [Google SRE Workbook — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/) <sub>Google · documentation · free</sub>
- [PromLabs PromQL Tutorial](https://promlabs.com/promql-cheat-sheet/) <sub>PromLabs · tutorial · free</sub>

</details>

### <a id="6-security-supply-chain"></a>6. DevSecOps & Supply Chain Security

<sub>**3-4 weeks**</sub>

Security as a pipeline gate, not a final review. Done when a dependency with a known critical CVE or an unsigned image cannot reach production, and you can name the policy that blocked it rather than a person who happened to notice.

**Assumes:** containers

<b>Skills</b> — `DevSecOps Practices` · `Dependency & Vulnerability Scanning` · `Container & Image Signing` · `Policy as Code` · `Secrets Scanning` · `Software Bill of Materials (SBOM)` · `Supply Chain Threat Modelling`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Add dependency and container scanning to your pipeline and configure it to block a merge when a critical vulnerability is found
- Sign your container images and add a policy that refuses to deploy an unsigned image, then verify by attempting to deploy one
- Generate an SBOM for a real service and use it to answer "are we affected by this CVE" in under five minutes
- Write a policy-as-code rule that blocks a deploy failing a specific compliance check, and show it failing on a deliberately bad manifest
- Scan your git history for a secret that was committed and removed, and document the rotation procedure you would run for a real leak

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/) <sub>OWASP · documentation · free</sub>
- [SLSA — Supply-chain Levels for Software Artifacts](https://slsa.dev/) <sub>OpenSSF · documentation · free</sub>
- [Sigstore Documentation](https://docs.sigstore.dev/) <sub>Sigstore · documentation · free</sub>
- [Open Policy Agent Documentation](https://www.openpolicyagent.org/docs/latest/) <sub>OPA · documentation · free</sub>
- [Trivy Documentation](https://trivy.dev/) <sub>Aqua Security · documentation · free</sub>

</details>

### <a id="7-platform-engineering"></a>7. Platform Engineering & Developer Experience

<sub>**3-4 weeks**</sub>

Build the platform other engineers use to ship, not just your own deploys. Done when a developer outside your team provisions a new environment from a self-service template without opening a ticket to you, and the golden path is the fast path, not a document nobody follows.

**Assumes:** automation; containers

<b>Skills</b> — `Internal Developer Platforms` · `Golden-Path Templates` · `Self-Service Provisioning` · `Kubernetes Operators & CRDs` · `Developer Portal Design` · `Platform API Design`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Design and document an internal developer platform that lets a team self-serve a new environment from a golden-path template, and have someone use it without your help
- Build a self-service template that provisions a new service with CI/CD, monitoring and access control already wired in, and time how long it takes a new user
- Write a custom Kubernetes operator or CRD that automates a repetitive provisioning task, and show it handling a failure case correctly
- Stand up a developer portal listing your platform's templates and services, then get feedback from a real user and act on it
- Measure how long a golden-path deployment takes versus the old manual process, and report the difference

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [What Is Platform Engineering](https://platformengineering.org/blog/what-is-platform-engineering) <sub>Platform Engineering Community · documentation · free</sub>
- [Backstage Documentation](https://backstage.io/docs/overview/what-is-backstage) <sub>Spotify / CNCF · documentation · free</sub>
- [Kubernetes Operator Pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) <sub>Kubernetes · documentation · free</sub>
- [CNCF Cloud Native Landscape](https://landscape.cncf.io/) <sub>CNCF · documentation · free</sub>

</details>

### <a id="8-cost-resilience"></a>8. Cost Governance & Resilience

<sub>**3-4 weeks**</sub>

The two failure modes nobody notices until the invoice or the outage: spend that grows quietly, and a recovery procedure that was never actually tested. Done when you can show a real rightsizing saving with a number attached, and you have restored a service from backup into a clean environment and timed it — not assumed it would work.

**Assumes:** monitoring

<b>Skills</b> — `Cost Optimisation (FinOps)` · `Resource Rightsizing` · `Disaster Recovery Planning` · `Backup & Restore Strategy` · `Chaos Engineering Basics` · `Budget Alerts & Showback`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Run a cost audit on a real cloud account, identify reclaimable spend with a rightsizing plan, and quantify what you actually saved after acting on it
- Set up budget alerts and a per-team cost showback report, and get one team to change behaviour based on what it showed them
- Write and test a disaster recovery procedure by restoring a service from backups into a clean environment, and record the real recovery time against your target
- Run a chaos experiment that kills a production-representative instance during business hours (in a non-production environment) and confirm your system recovers as designed
- Find one over-provisioned resource in a real account, resize it, and monitor for a week to confirm nothing broke

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [FinOps Foundation Framework](https://www.finops.org/framework/) <sub>FinOps Foundation · documentation · free</sub>
- [AWS Well-Architected Framework — Reliability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [Principles of Chaos Engineering](https://principlesofchaos.org/) <sub>Chaos Community · documentation · free</sub>
- [Last Week in AWS (newsletter, cost and service commentary)](https://www.lastweekinaws.com/newsletter/) <sub>Corey Quinn · documentation · free</sub>

</details>

### <a id="9-specialization"></a>9. Specialization & Advanced Topics

<sub>**2-3 months**</sub>

Pick a direction — platform engineering, cloud architecture, or a specific compliance domain — and build the portfolio piece that shows judgment rather than tool familiarity. Done when someone outside your team used something you built without you walking them through it.

**Assumes:** security-supply-chain; platform-engineering; cost-resilience

<b>Skills</b> — `Cloud Architecture` · `Multi-Cloud & Hybrid Strategy` · `Technical Writing & Documentation` · `Open Source Contribution` · `Architecture Decision Records` · `Stakeholder Communication`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Get one non-trivial pull request merged into an open-source DevOps tool — a fix, a feature or documentation that someone needed
- Write a design document for a system you have not built, get it reviewed by someone more senior, and revise it based on their feedback
- Write an architecture decision record for a real tradeoff you made earlier in this roadmap, including the options you rejected and why
- Present a system you built to someone technical who was not involved, and answer their questions without falling back on "it just works"
- Mentor someone earlier in this roadmap through one project from your own path, and note what you had to re-explain that you thought was obvious

</details>

<details><summary><b>Resources</b> — 3, of which 2 free</summary>

- [CNCF Cloud Native Landscape](https://landscape.cncf.io/) <sub>CNCF · documentation · free</sub>
- [Google SRE Workbook](https://sre.google/workbook/table-of-contents/) <sub>Google · documentation · free</sub>
- **The Phoenix Project** <sub>Gene Kim, Kevin Behr, George Spafford · book · paid</sub> — free alternative: [The Three Ways: The Principles Underpinning DevOps](https://itrevolution.com/articles/the-three-ways-principles-underpinning-devops/)

</details>

## Questions

<details><summary><b>How long does it take to become a DevOps engineer?</b></summary><br>

Expect 15-21 months alongside a job, spread across nine phases from Linux fundamentals through cloud infrastructure, automation, containers, monitoring and specialization. If you already administer Linux servers professionally, the first phase shrinks to a two-week refresher instead of one to two months, which shortens the overall timeline.

</details>

<details><summary><b>Do I need programming experience to start this roadmap?</b></summary><br>

You need some programming or scripting exposure and comfort using a computer's command line, but the roadmap assumes you have not yet run cloud infrastructure or production deployments professionally. It is built as a structured path from Linux fundamentals through cloud, automation, containers and monitoring to a production-ready career, so it starts from that baseline rather than assuming prior ops experience.

</details>

<details><summary><b>How much does a DevOps engineer earn?</b></summary><br>

In the United States, entry-level DevOps engineers average around $118,895, mid-level around $174,243, and senior engineers around $181,848, based on Glassdoor salary estimates. These are average figures for the US market and will vary by region and company.

</details>

<details><summary><b>Why does the roadmap start with Linux instead of cloud or containers?</b></summary><br>

Kubernetes troubleshooting is Linux troubleshooting, so skipping the Linux and shell fundamentals phase turns every later phase into guesswork. That first phase is considered done when you can rebuild your server from your own notes without searching and read someone else's bash script and predict what it does before running it.

</details>

<details><summary><b>Which phase of the DevOps roadmap takes the longest to get through?</b></summary><br>

Infrastructure as Code and CI/CD is where most people slow down, because it is the first phase that demands holding a whole system in your head. It is considered done when you can destroy your entire environment with Terraform and recreate it successfully — a binary test, since being afraid to run destroy means the infrastructure is not actually code yet.

</details>

<details><summary><b>What does the monitoring and site reliability phase actually cover?</b></summary><br>

It covers making the system you built observable: metrics, Prometheus, Grafana dashboards, log aggregation, distributed tracing, SLI/SLO definition, and incident response. It is considered done when you can answer whether the system was healthy at a specific past moment with data rather than opinion, and your alerts fire on user-visible symptoms rather than raw CPU thresholds, since cause-based alerting leads directly to alert fatigue.

</details>

## Neighbouring paths

[Site Reliability Engineer](sre.md) · [Platform Engineer](platform-engineer.md) · [Cloud Architect](cloud-architect.md) · [FinOps Engineer](finops-engineer.md) · [Observability Engineer](observability-engineer.md)

## Certifications on this path

| Certification | Provider | Cost | Exam |
|---|---|---|---|
| [Certified Kubernetes Administrator (CKA)](../certifications/cka.md) | The Linux Foundation / CNCF | `$445 USD` | 2 hours, pass 66% |
| [AWS Certified Solutions Architect – Associate (SAA-C03)](../certifications/aws-solutions-architect-associate.md) | Amazon Web Services | `$150 USD` | 130 minutes, pass 720 out of 1,000 (scaled) |
| [Microsoft Certified — Azure Administrator Associate (AZ-104)](../certifications/az-104.md) | Microsoft | `Price varies by the country or region in which the exam is proctored — Microsoft publishes the local price at checkout` | 100 minutes, pass 700 out of 1,000 |
| [Linux Foundation Certified System Administrator (LFCS)](../certifications/lfcs.md) | The Linux Foundation | `$445 USD` | 2 hours, pass 67% |

---

<sub>Source of truth: [`data/roadmaps/devops-engineer.yaml`](../data/roadmaps/devops-engineer.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
