<!-- Generated from data/roadmaps/cloud-architect.yaml by tools/render-markdown.mjs. Do not edit. -->

# Cloud Architect Roadmap

> A path into cloud architecture as the job it actually is — trade-off analysis, migration of systems you did not write, disaster recovery you have rehearsed, decision records, and influence without formal authority.

**Advanced** · **10 phases** · **8-11 months at 10h/week** · updated 2026-08-10

Most cloud architecture writing describes greenfield systems. Real architects
spend their time on systems that already exist, that nobody fully understands,
and that cannot be switched off — which is why migration, disaster recovery you
have actually rehearsed, and the ability to persuade a team you do not manage
get as much room here as the design patterns do.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$159,276` | Glassdoor Cloud Architect total pay estimate, 25th percentile (US, 1,420 salaries submitted) | 2026-08-10 |
| Mid | `$202,355` | Glassdoor Cloud Architect total pay estimate (US average, 1,420 salaries submitted) | 2026-08-10 |
| Senior | `$260,623` | Glassdoor Cloud Architect total pay estimate, 75th percentile (US, 1,420 salaries submitted) | 2026-08-10 |

Total duration is **8-11 months at 10h/week** — <sub>SkillPilot editorial estimate, 2026-08-10</sub>

## Before you start

- Two or more years building or operating systems in production
- Working knowledge of Linux, networking and HTTP services
- Comfort reading code in at least one language, even if you no longer write it daily

## The path

| # | Phase | Duration |
|---:|---|---|
| 1 | [Cloud Fundamentals and Service Models](#1-cloud-fundamentals-and-service-models) | 3-4 weeks |
| 2 | [Compute and Networking Design](#2-compute-and-networking-design) | 4-6 weeks |
| 3 | [Storage and Data Architecture](#3-storage-and-data-architecture) | 4-5 weeks |
| 4 | [Identity, Security and Compliance](#4-identity-security-and-compliance) | 5-6 weeks |
| 5 | [High Availability and Disaster Recovery](#5-high-availability-and-disaster-recovery) | 4-5 weeks |
| 6 | [Cost and Performance Trade-offs](#6-cost-and-performance-tradeoffs) | 3-4 weeks |
| 7 | [Migration and Modernisation](#7-migration-and-modernisation) | 5-6 weeks |
| 8 | [Multi-Cloud and Hybrid](#8-multi-cloud-and-hybrid) | 3-4 weeks |
| 9 | [Architecture Decision Records](#9-architecture-decision-records) | 2-3 weeks |
| 10 | [Influence and Stakeholder Architecture](#10-influence-and-stakeholder-architecture) | 3-4 weeks |

---

### <a id="1-cloud-fundamentals-and-service-models"></a>1. Cloud Fundamentals and Service Models

<sub>**3-4 weeks**</sub>

Before designing anything, learn what you are actually buying: a rented failure domain with someone else's operational assumptions baked in. IaaS, PaaS and serverless differ less in features than in which failures become your problem. Done when you can take one workload and state, for each of the three models, what you stop being responsible for and what new constraint you accept in exchange.

<b>Skills</b> — `Shared Responsibility Model` · `IaaS, PaaS and Serverless Trade-offs` · `Regions, Zones and Failure Domains` · `Cloud Service Taxonomy` · `Managed vs Self-hosted Analysis` · `Provider Pricing Models` · `Well-Architected Framework`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Take one existing workload and write the same design three times — on VMs, on a managed platform, and serverless — with the operational burden each one removes and the constraint each one adds
- Map a provider's region and availability zone topology for the two regions you would actually use, and record which of your dependencies are zonal, regional or global
- Run a Well-Architected review against a system you did not design, and rank the findings by what would hurt first rather than by pillar
- Write the shared responsibility boundary for a specific managed database, naming three failures that remain yours after the provider takes over
- Price the same workload under on-demand, committed-use and spot pricing, and state the utilisation point where each becomes the cheapest

</details>

<details><summary><b>Resources</b> — 6, of which 5 free</summary>

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) <sub>AWS · documentation · free</sub>
- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/) <sub>AWS · documentation · free</sub>
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) <sub>Microsoft · documentation · free</sub>
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework) <sub>Google Cloud · documentation · free</sub>
- [Regions and Availability Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html) <sub>AWS · documentation · free</sub>
- **Fundamentals of Software Architecture** <sub>Mark Richards, Neal Ford · book · paid</sub> — free alternative: [AWS Prescriptive Guidance — Architecture Decision Records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

</details>

### <a id="2-compute-and-networking-design"></a>2. Compute and Networking Design

<sub>**4-6 weeks**</sub>

Networking is where cloud designs fail quietly and expensively. Addressing decisions made in week one constrain the architecture for years, because renumbering a live VPC is close to impossible. Done when you have designed an address plan for three environments that can absorb a corporate VPN and a second region without overlapping, and can defend every subnet boundary in it.

<b>Skills</b> — `VPC and Subnet Design` · `IP Address Planning` · `Routing and Egress Control` · `Load Balancing Strategy` · `Compute Sizing and Families` · `Container and Serverless Placement` · `Hybrid Connectivity` · `DNS Architecture`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Produce an IP address plan for dev, staging and production that leaves room for a second region and a corporate VPN, and justify every CIDR boundary
- Build a three-tier network with public, private and data subnets, then prove the data tier cannot reach the internet by testing it rather than by reading the route table
- Compare a layer 7 and a layer 4 load balancer for one real workload, measuring the latency difference rather than quoting the documentation
- Design egress for a private subnet three ways — NAT gateway, VPC endpoints, proxy — and price each at your actual traffic volume
- Take a monolith and write the placement decision for each component across VMs, containers and functions, with the reason each one landed where it did
- Document a hybrid connectivity design for an office network, including what breaks during a failover and who notices first

</details>

<details><summary><b>Resources</b> — 6, of which 6 free</summary>

- [Amazon VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) <sub>AWS · documentation · free</sub>
- [Build a Modern Application on AWS](https://aws.amazon.com/getting-started/hands-on/build-modern-app-fargate-lambda-dynamodb-python/) <sub>AWS · tutorial · free</sub>
- [Azure Virtual Network Documentation](https://learn.microsoft.com/en-us/azure/virtual-network/) <sub>Microsoft · documentation · free</sub>
- [Google Cloud VPC Documentation](https://cloud.google.com/vpc/docs/vpc) <sub>Google Cloud · documentation · free</sub>
- [Elastic Load Balancing Documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html) <sub>AWS · documentation · free</sub>
- [Amazon Route 53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html) <sub>AWS · documentation · free</sub>

</details>

### <a id="3-storage-and-data-architecture"></a>3. Storage and Data Architecture

<sub>**4-5 weeks**</sub>

Choosing a data store is the least reversible decision an architect makes: compute can be rewritten in a sprint, but a data model that no longer fits takes a migration project. Done when you can justify a store choice for a real workload from its access pattern, consistency need and growth curve, and say what it would cost to move off it later.

<b>Skills</b> — `Object, Block and File Storage` · `Relational vs Non-relational Selection` · `Consistency and Replication Models` · `Access Pattern Modelling` · `Caching Strategy` · `Storage Tiering and Lifecycle` · `Data Migration Paths`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Write the access patterns for one application first, then pick its data store from those patterns, and record which candidate you rejected and why
- Design an S3 lifecycle policy for a real retention requirement and calculate the annual saving against storing everything in the hot tier
- Add a cache to a read-heavy workload, measure the hit rate under realistic traffic, and document the staleness the design now tolerates
- Model the same dataset relationally and in a document store, and write the query that is trivial in one and painful in the other
- Estimate the cost and downtime of migrating one production dataset to a different engine, including the dual-write period

</details>

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) <sub>AWS · documentation · free</sub>
- [DynamoDB Data Modeling](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-general-nosql-design.html) <sub>AWS · documentation · free</sub>
- [Amazon EBS Volume Types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) <sub>AWS · documentation · free</sub>
- [Google Cloud Storage Classes](https://cloud.google.com/storage/docs/storage-classes) <sub>Google Cloud · documentation · free</sub>
- **Designing Data-Intensive Applications** <sub>Martin Kleppmann · book · paid</sub>

</details>

### <a id="4-identity-security-and-compliance"></a>4. Identity, Security and Compliance

<sub>**5-6 weeks**</sub>

In cloud architecture identity is the perimeter, and most breaches are a permissions design failure rather than an exploit. The architect's job is the account topology and the trust boundaries, not the individual policy document. Done when you have designed a multi-account structure with guardrails that make the insecure action difficult by default rather than merely forbidden by policy.

<b>Skills</b> — `IAM Policy and Role Design` · `Multi-account Topology` · `Least Privilege in Practice` · `Encryption and Key Management` · `Federation and SSO` · `Compliance Controls` · `Guardrails and Service Control Policies` · `Secrets Management`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Design an account structure separating production, non-production and security tooling, with the service control policies that enforce the separation
- Take an over-permissioned role, rebuild it from observed usage logs, and record what broke when you removed the extra permissions
- Implement a key management design with rotation, and document who can decrypt what and who can grant that ability
- Write the control mapping for one compliance requirement, naming the specific cloud control that satisfies each line
- Federate a directory into cloud roles and prove that removing a user upstream revokes their access within a stated time
- Audit a running account for public exposure and produce a prioritised remediation list ordered by blast radius

</details>

<details><summary><b>Resources</b> — 6, of which 5 free</summary>

- [AWS IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) <sub>AWS · documentation · free</sub>
- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [AWS Organizations Service Control Policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) <sub>AWS · documentation · free</sub>
- [AWS Key Management Service Documentation](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html) <sub>AWS · documentation · free</sub>
- [Microsoft Entra ID Documentation](https://learn.microsoft.com/en-us/entra/identity/) <sub>Microsoft · documentation · free</sub>
- **Practical Cloud Security** <sub>Chris Dotson · book · paid</sub> — free alternative: [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html)

</details>

### <a id="5-high-availability-and-disaster-recovery"></a>5. High Availability and Disaster Recovery

<sub>**4-5 weeks**</sub>

Every system has a disaster recovery plan; most have never run it, which means they have a document rather than a capability. The architect's contribution is turning vague availability ambitions into an RTO and RPO someone will fund. Done when you have executed a failover in a non-production environment and the measured recovery time is written next to the one you promised.

<b>Skills</b> — `RTO and RPO Definition` · `Multi-AZ and Multi-region Patterns` · `DR Strategy Selection` · `Failover Design and Testing` · `Backup and Restore Verification` · `Single Point of Failure Analysis` · `Graceful Degradation`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Write RTO and RPO for three tiers of one system and get a non-engineer to agree the numbers are worth their cost
- Compare backup-and-restore, pilot light, warm standby and active-active for the same workload, pricing each and stating the recovery time each buys
- Execute a region failover in a test environment and record the real recovery time against the target you published
- Restore a production backup into a clean environment and time it — a backup that has never been restored is a hypothesis
- Map single points of failure in an existing architecture, including the ones outside the cloud account such as DNS registrar and CI system
- Design a degraded mode for one service that keeps its core function working when its main dependency is unavailable

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [AWS Well-Architected Reliability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [Disaster Recovery of Workloads on AWS](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html) <sub>AWS · documentation · free</sub>
- [Azure Reliability Documentation](https://learn.microsoft.com/en-us/azure/reliability/) <sub>Microsoft · documentation · free</sub>
- [Google SRE Book — Managing Critical State](https://sre.google/sre-book/managing-critical-state/) <sub>Google · documentation · free</sub>
- [Amazon Route 53 Health Checks and Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html) <sub>AWS · documentation · free</sub>

</details>

### <a id="6-cost-and-performance-tradeoffs"></a>6. Cost and Performance Trade-offs

<sub>**3-4 weeks**</sub>

An architecture nobody can afford is a failed architecture, and cost is the constraint most designs discover only after the first full month of billing. This phase turns cost from a finance report into a design input. Done when you can present two designs for the same requirement with their monthly cost, and recommend one on grounds a finance stakeholder finds legible.

<b>Skills</b> — `Cost Modelling Before Build` · `Commitment and Spot Purchasing` · `Rightsizing and Autoscaling` · `Data Transfer Cost Analysis` · `Performance Benchmarking` · `Cost Attribution and Tagging` · `Build vs Buy Analysis`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Model the monthly cost of a design before building it, then compare the estimate against the first real bill and explain the gap
- Find the data transfer charges in an existing bill and trace each one to the architectural decision that created it
- Benchmark two instance families on the same workload and calculate cost per unit of work rather than cost per hour
- Design a tagging scheme that lets every line of a bill be attributed to a team, and test it against a month of real spend
- Write a build-versus-buy analysis for one managed service, costing the engineering time the self-hosted option consumes

</details>

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [AWS Well-Architected Cost Optimization Pillar](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [AWS Pricing Calculator](https://calculator.aws/) <sub>AWS · documentation · free</sub>
- [The FinOps Framework](https://www.finops.org/framework/) <sub>FinOps Foundation · documentation · free</sub>
- [AWS Cost Explorer Documentation](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html) <sub>AWS · documentation · free</sub>
- **Cloud FinOps** <sub>J. R. Storment, Mike Fuller · book · paid</sub> — free alternative: [The FinOps Framework](https://www.finops.org/framework/)

</details>

### <a id="7-migration-and-modernisation"></a>7. Migration and Modernisation

<sub>**5-6 weeks**</sub>

Most cloud architecture work is not greenfield: it is moving something that already runs, that nobody fully understands, and that cannot stop. The seven migration strategies matter less than knowing which applies to each application and why. Done when you have produced a migration plan for a real system with its cutover sequence, its rollback point and the strategy chosen per component.

<b>Skills</b> — `Migration Strategy Selection` · `Application Discovery and Dependency Mapping` · `Strangler Fig Pattern` · `Data Migration and Dual Writes` · `Cutover and Rollback Planning` · `Legacy Constraint Analysis` · `Modernisation Sequencing`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Take an application you did not write, map its real dependencies including the undocumented ones, and mark which block a move
- Assign a migration strategy to each component of one system and write the reason each was not simply rehosted
- Design a strangler fig migration for a monolith, naming the first slice to extract and how traffic gets routed during the transition
- Write a cutover runbook with a rollback point at each step, and identify the step after which rollback stops being possible
- Plan a data migration with a dual-write period, including how you verify both stores agree before switching reads
- Estimate a migration in engineering weeks and record which assumption would hurt most if it were wrong

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [AWS Migration Strategies — the 7 Rs](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html) <sub>AWS · documentation · free</sub>
- [Strangler Fig Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig) <sub>Microsoft · documentation · free</sub>
- [Cloud Adoption Framework for Azure](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/) <sub>Microsoft · documentation · free</sub>
- [Google Cloud Migration Center Documentation](https://cloud.google.com/migration-center/docs) <sub>Google Cloud · documentation · free</sub>
- [AWS Database Migration Service User Guide](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html) <sub>AWS · documentation · free</sub>

</details>

### <a id="8-multi-cloud-and-hybrid"></a>8. Multi-Cloud and Hybrid

<sub>**3-4 weeks**</sub>

Multi-cloud is demanded more often than it is justified, and the architect who cannot argue against it when it is wrong will build an expensive lowest-common-denominator platform. The honest position is that it solves specific problems — regulatory, acquisition, genuine vendor risk — at a real operational cost. Done when you can write the case for and against multi-cloud for one organisation and recommend a position you would defend to its board.

<b>Skills</b> — `Multi-cloud Justification Analysis` · `Portability vs Managed Service Trade-off` · `Hybrid Architecture Patterns` · `Cross-cloud Networking` · `Vendor Lock-in Assessment` · `Data Residency and Sovereignty`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Write both sides of a multi-cloud proposal for one organisation, then state your recommendation and the evidence that decided it
- Cost the operational overhead of running one workload on two providers, including the training and on-call burden
- Quantify lock-in for a specific managed service as the engineering weeks needed to leave it, not as an adjective
- Design a hybrid architecture with a genuine on-premises constraint such as a device, a licence or a data residency rule
- Map data residency requirements to specific regions and record what those constraints forbid architecturally

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [AWS Hybrid Cloud Architectures](https://docs.aws.amazon.com/whitepapers/latest/hybrid-connectivity/hybrid-connectivity.html) <sub>AWS · documentation · free</sub>
- [Azure Arc Documentation](https://learn.microsoft.com/en-us/azure/azure-arc/) <sub>Microsoft · documentation · free</sub>
- [Cross-Cloud Network for Distributed Applications](https://cloud.google.com/architecture/ccn-distributed-apps-design) <sub>Google Cloud · documentation · free</sub>
- [CNCF Cloud Native Landscape](https://landscape.cncf.io/) <sub>CNCF · documentation · free</sub>

</details>

### <a id="9-architecture-decision-records"></a>9. Architecture Decision Records

<sub>**2-3 weeks**</sub>

An architecture is the set of decisions that were expensive to change, and most of them get made in conversations nobody wrote down. Six months later the team relitigates a choice because the constraint that forced it is forgotten. Done when a decision you recorded is read by someone who was not in the room and they can explain why the rejected option was rejected.

<b>Skills</b> — `Writing Decision Records` · `Trade-off Articulation` · `Documenting Rejected Options` · `Architecture Diagramming` · `Fitness Functions` · `Technical Writing for Architects`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Write three decision records for choices already made in a system you know, reconstructing the constraints that applied at the time
- Document a decision including the option you rejected, and have a colleague who disagreed review whether you represented their case fairly
- Produce a C4 diagram set for one system and test it by asking a new joiner to trace a request through it unaided
- Define one fitness function that fails a build when an architectural constraint is violated, and watch it catch a real violation
- Revisit a decision record after a change of circumstances and write the follow-up that supersedes it rather than editing the original

</details>

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [Architecture Decision Records](https://github.blog/engineering/why-write-adrs/) <sub>GitHub · documentation · free</sub>
- [The C4 Model for Visualising Software Architecture](https://c4model.com/) <sub>Simon Brown · documentation · free</sub>
- [Architectural Decision Records Organisation](https://adr.github.io/) <sub>ADR · documentation · free</sub>
- [AWS Prescriptive Guidance — Architecture Decision Records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html) <sub>AWS · documentation · free</sub>
- **Fundamentals of Software Architecture** <sub>Mark Richards, Neal Ford · book · paid</sub> — free alternative: [AWS Prescriptive Guidance — Architecture Decision Records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

</details>

### <a id="10-influence-and-stakeholder-architecture"></a>10. Influence and Stakeholder Architecture

<sub>**3-4 weeks**</sub>

The architect usually has no authority over the teams who must implement the design, so the work is persuasion backed by evidence. A technically correct design that no team adopts has failed as completely as a wrong one. Done when a team implements a design you proposed but could not mandate, and you can name the argument that changed their mind.

<b>Skills</b> — `Influence Without Authority` · `Stakeholder Communication` · `Presenting Trade-offs to Executives` · `Architecture Review Facilitation` · `Technical Debt Negotiation` · `Mentoring Engineers` · `Handling Disagreement`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Present one architecture two ways — to engineers and to a budget holder — and note which objections only appeared in the second version
- Facilitate a review where you are not the author, and leave with the author still committed to their design or genuinely convinced to change it
- Turn one piece of technical debt into a funded work item by expressing it as risk and cost rather than as untidiness
- Propose a design to a team you cannot direct, and record what actually persuaded them or why they declined
- Write the one-page version of a complex design for someone who will spend ninety seconds on it

</details>

<details><summary><b>Resources</b> — 4, of which 3 free</summary>

- [Google SRE Workbook — Incident Response](https://sre.google/workbook/incident-response/) <sub>Google · documentation · free</sub>
- [Amazon's Leadership Principles](https://www.amazon.jobs/content/en/our-workplace/leadership-principles) <sub>Amazon · documentation · free</sub>
- [Team Topologies — Key Concepts](https://teamtopologies.com/key-concepts) <sub>Team Topologies · documentation · free</sub>
- **The Phoenix Project** <sub>Gene Kim, Kevin Behr, George Spafford · book · paid</sub> — free alternative: [The Three Ways: The Principles Underpinning DevOps](https://itrevolution.com/articles/the-three-ways-principles-underpinning-devops/)

</details>

## Questions

<details><summary><b>How long does it take to become a cloud architect?</b></summary><br>

The full roadmap runs 8-11 months at around 10 hours a week, according to SkillPilot's editorial estimate. It is deliberately not a beginner path — it assumes two or more years of experience building or operating systems in production, plus working knowledge of Linux, networking and HTTP services.

</details>

<details><summary><b>How much does a cloud architect earn?</b></summary><br>

In the United States, Glassdoor's total pay estimates (based on 1,420 salaries submitted) place entry-level compensation around $159,276 at the 25th percentile, a mid-level average of $202,355, and senior compensation around $260,623 at the 75th percentile. These are total pay figures rather than base salary alone.

</details>

<details><summary><b>What does the Cloud Architect roadmap actually cover?</b></summary><br>

It moves from cloud fundamentals and service models through networking, storage and identity, into high availability and disaster recovery, cost trade-offs, and migration of systems you did not build. The later phases turn to architecture decision records and influence without formal authority, because most of the work is persuading teams you cannot mandate.

</details>

<details><summary><b>Do I need prior experience before starting this roadmap?</b></summary><br>

Yes. The roadmap expects two or more years building or operating production systems, working knowledge of Linux, networking and HTTP services, and comfort reading code in at least one language even if you no longer write it daily. It is built as an advanced-level path rather than an introduction to cloud computing.

</details>

<details><summary><b>Why does the roadmap spend so much time on disaster recovery and migration instead of just design patterns?</b></summary><br>

Because most cloud architecture work is not greenfield: it is moving something that already runs, that nobody fully understands, and that cannot stop, and every system needs a disaster recovery plan that has actually been rehearsed rather than just documented. The roadmap has you execute a real failover and produce a migration plan with a cutover sequence and rollback point, rather than only reading about the seven migration strategies.

</details>

<details><summary><b>Is being technically right enough to succeed as a cloud architect?</b></summary><br>

No — the roadmap treats influence as a core skill because architects usually have no authority over the teams who must implement their designs, so a technically correct design that no team adopts has failed just as completely as a wrong one. The final phase is built around presenting trade-offs, facilitating reviews, and negotiating technical debt as risk and cost rather than as untidiness.

</details>

## Neighbouring paths

[FinOps Engineer](finops-engineer.md) · [Cloud Security Engineer](cloud-security-engineer.md) · [Site Reliability Engineer](sre.md) · [Platform Engineer](platform-engineer.md) · [Database Reliability Engineer](database-reliability-engineer.md)

## Certifications on this path

| Certification | Provider | Cost | Exam |
|---|---|---|---|
| [AWS Certified Solutions Architect – Associate (SAA-C03)](../certifications/aws-solutions-architect-associate.md) | Amazon Web Services | `$150 USD` | 130 minutes, pass 720 out of 1,000 (scaled) |
| [Microsoft Certified — Azure Administrator Associate (AZ-104)](../certifications/az-104.md) | Microsoft | `Price varies by the country or region in which the exam is proctored — Microsoft publishes the local price at checkout` | 100 minutes, pass 700 out of 1,000 |
| [Certified Kubernetes Administrator (CKA)](../certifications/cka.md) | The Linux Foundation / CNCF | `$445 USD` | 2 hours, pass 66% |
| [Certified Cloud Security Professional (CCSP)](../certifications/ccsp.md) | ISC2 | `$599 USD` | 3 hours, pass 700 out of 1000 points |

---

<sub>Source of truth: [`data/roadmaps/cloud-architect.yaml`](../data/roadmaps/cloud-architect.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
