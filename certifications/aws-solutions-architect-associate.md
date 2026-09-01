<!-- Generated from data/certifications/aws-solutions-architect-associate.yaml by tools/render-markdown.mjs. Do not edit. -->

# AWS Certified Solutions Architect – Associate (SAA-C03)

> The most widely held cloud architecture certification, testing whether you can design secure, resilient, high-performing and cost-optimised solutions on AWS against the Well-Architected Framework.

**Amazon Web Services** · code `SAA-C03` · **$150 USD** · 130 minutes · pass 720 out of 1,000 (scaled) · valid 3 years · updated 2026-08-10

The SAA-C03 is the most widely held cloud architecture certification, and the most widely misunderstood. It does not test whether you can build things on AWS. It tests whether you can choose between four options that would all work.

## What the weights tell you to study

Security is 30%, the single largest domain, and it is not a security exam. That weight is AWS saying that most wrong answers on this exam are wrong because they leak, over-permit or fail to encrypt something — not because they do not function. Resilience follows at 26%, so more than half the marks sit in "will it survive, and is it locked down".

Cost optimisation is the smallest domain at 20% and the one candidates neglect hardest, which is a mistake: cost questions are the most mechanical on the exam. Storage class and instance purchasing model questions have correct answers you can derive rather than recall.

## What the exam is actually like

**Every option is plausible.** Questions are scenarios with four answers that are technically capable of the outcome. One is best against a stated constraint — cheapest, most available, least operational overhead — and finding that constraint in the question stem is the actual skill. Read the last sentence of the stem first.

**"Least operational overhead" means managed.** When a question uses that phrase, it is pointing at the managed service. This single pattern decides a surprising share of the exam.

**15 of the 65 questions are unscored** and indistinguishable from the rest. You cannot know which, so spend no time trying — but it does mean a question that seems unfairly obscure may not count.

**130 minutes for 65 questions** is two minutes each, which is comfortable compared with performance-based exams. Time pressure is not the failure mode here; misreading the constraint is.

## Where the marks are lost

VPC design. Subnets, route tables, NAT gateways, security groups versus NACLs — these appear across all four domains rather than in a domain of their own, so a weak VPC model costs marks everywhere. Draw the traffic path by hand until it is automatic.

The other reliable loss is picking the technically superior answer over the one matching the stated constraint. An architecture with better durability is wrong if the question asked for lowest cost.

## Before you book

720 out of 1,000 scaled, three years' validity, $150. AWS recommends a year of hands-on experience; it is achievable without that if you build in a free-tier account, because the exam rewards decision-making over muscle memory.

Take timed practice exams rather than reading more. The gap between knowing AWS and answering AWS questions closes only by answering questions.

## The exam

| | |
|---|---|
| Code | `SAA-C03` |
| Cost | **$150 USD** |
| Duration | 130 minutes |
| Passing score | 720 out of 1,000 (scaled) |
| Valid for | 3 years |
| Format | 65 questions (50 scored, 15 unscored) — multiple choice and multiple response, at a Pearson VUE test centre or online proctored |

<sub>Cost from AWS Certification — AWS Certified Solutions Architect – Associate page (aws.amazon.com/certification), read on 2026-08-10. Prices change and this one is not re-read continuously — check the provider before paying.</sub>

## What the exam weights

The blueprint decides where study time goes. These are the published weights.

| Domain | Weight | |
|---|---:|---|
| Design Secure Architectures | 30% | `██████░░░░░░░░░░░░░░` |
| Design Resilient Architectures | 26% | `█████░░░░░░░░░░░░░░░` |
| Design High-Performing Architectures | 24% | `█████░░░░░░░░░░░░░░░` |
| Design Cost-Optimized Architectures | 20% | `████░░░░░░░░░░░░░░░░` |

<details><summary><b>Design Secure Architectures</b> — 30%</summary>

- Designing secure access to AWS resources — IAM users, groups, roles and policies
- Role-based access control with AWS STS, role switching and cross-account access
- Multi-account security strategy with AWS Control Tower and service control policies
- Designing VPC architectures with security groups, network ACLs and NAT gateways
- Network segmentation with public and private subnets
- Encrypting data at rest with AWS KMS and in transit with ACM and TLS
- Data retention, classification and key rotation policies

</details>

<details><summary><b>Design Resilient Architectures</b> — 26%</summary>

- Designing event-driven, microservice and multi-tier architectures
- Determining when to use containers, serverless technologies and purpose-built services
- Loose coupling with Amazon SQS, Amazon SNS and AWS Step Functions
- Disaster recovery strategies — backup and restore, pilot light, warm standby, active-active
- Recovery point objective and recovery time objective selection
- Mitigating single points of failure across Availability Zones and Regions
- Failover strategies and immutable infrastructure

</details>

<details><summary><b>Design High-Performing Architectures</b> — 24%</summary>

- Selecting storage services and configurations that meet performance demands
- Elastic compute with EC2 Auto Scaling, AWS Lambda and AWS Fargate
- High-performing database solutions — read replicas, caching with ElastiCache, engine selection
- Scalable network architectures, edge services and load balancing strategy
- Data ingestion and streaming with Amazon Kinesis and AWS Glue
- Transforming data between formats and building secure data lakes

</details>

<details><summary><b>Design Cost-Optimized Architectures</b> — 20%</summary>

- Selecting the most cost-effective storage service, tier and lifecycle policy
- AWS purchasing options — Spot Instances, Reserved Instances and Savings Plans
- Rightsizing instance families and sizes for a workload
- Cost-effective database types and retention policies
- Minimising data transfer cost — NAT gateway design, VPC endpoints and Region-to-Region traffic
- Cost management tooling — Cost Explorer, AWS Budgets and cost allocation tags

</details>

## Before you book it

- AWS recommends at least one year of hands-on experience designing solutions with AWS services
- Familiarity with networking fundamentals — subnets, routing, DNS and load balancing

## How to prepare

5 steps, **about 86 hours** in total.

### 1. Read the official exam guide before any course

<sub>**~3 hours**</sub>

The exam guide lists the four domains, their weightings and every task statement AWS may test. It is the only authoritative scope document, and reading it first stops you studying services that are explicitly out of scope. Note that Domain 1 alone is 30% of the scored content — security is the largest single block.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [AWS Certified Solutions Architect – Associate (SAA-C03) Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html) <sub>AWS · certification · free</sub>
- [AWS Certification — Solutions Architect Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/) <sub>AWS · certification · free</sub>

</details>

### 2. Work through the Well-Architected Framework

<sub>**~15 hours**</sub>

The exam explicitly validates your ability to design against the Well-Architected Framework, and its six pillars map almost directly onto the four exam domains. Read the security, reliability, performance efficiency and cost optimisation pillars in full — the exam's preferred answer is usually the one the framework recommends.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) <sub>AWS · documentation · free</sub>
- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [AWS Well-Architected Reliability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html) <sub>AWS · documentation · free</sub>

</details>

### 3. Build the core services rather than reading about them

<sub>**~40 hours**</sub>

Most failures come from candidates who recognise service names but have never wired two together. Build a VPC by hand, put a load balancer in front of an Auto Scaling group, attach an RDS instance in a private subnet, and break each one on purpose. A free tier account covers nearly all of this.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [Amazon VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) <sub>AWS · documentation · free</sub>
- [AWS Hands-On Tutorials](https://aws.amazon.com/getting-started/hands-on/) <sub>AWS · tutorial · free</sub>
- [AWS Skill Builder — Free Digital Training](https://skillbuilder.aws/) <sub>AWS · course · free</sub>

</details>

### 4. Drill the decision patterns the exam actually tests

<sub>**~20 hours**</sub>

Questions are scenario-based and almost never ask what a service does. They ask which of four workable options is cheapest, or most resilient, or most secure. Practise reading the qualifier in the question stem first — 'most cost-effective' and 'highest availability' select different correct answers from identical scenarios.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [AWS Skill Builder — Exam Prep Official Practice Question Set](https://skillbuilder.aws/exam-prep) <sub>AWS · course · free</sub>
- [Disaster Recovery of Workloads on AWS](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html) <sub>AWS · documentation · free</sub>

</details>

### 5. Sit a timed full-length practice exam

<sub>**~8 hours**</sub>

130 minutes for 65 questions is about two minutes each, and the long scenario stems consume that quickly. Take at least one full practice exam under timed conditions before booking. Scoring is compensatory — you need 720 overall and do not have to pass each domain individually.

<details><summary><b>Resources</b> — 1, of which 1 free</summary>

- [AWS Certification — Exam Preparation](https://aws.amazon.com/certification/certification-prep/) <sub>AWS · certification · free</sub>

</details>

## Where this fits

[Cloud Architect](../roadmaps/cloud-architect.md) · [Cloud Security Engineer](../roadmaps/cloud-security-engineer.md) · [FinOps Engineer](../roadmaps/finops-engineer.md) · [Database Reliability Engineer](../roadmaps/database-reliability-engineer.md)

## Questions

<details><summary><b>Is the AWS Solutions Architect Associate exam hard?</b></summary><br>

It is not hard in the sense of obscure content — every option in a question is technically capable of the stated outcome, and the actual skill is finding the constraint in the stem, such as cheapest, most available or least operational overhead. Time pressure is not the failure mode, since 130 minutes for 65 questions is comfortable; misreading the constraint is what causes wrong answers.

</details>

<details><summary><b>What domains does the SAA-C03 exam cover, and what should I study first?</b></summary><br>

Design Secure Architectures is the largest domain at 30%, followed by Design Resilient Architectures at 26%, Design High-Performing Architectures at 24%, and Design Cost-Optimized Architectures at 20%. The security weight is AWS signalling that most wrong answers leak, over-permit or fail to encrypt something rather than simply not working, so that domain is worth studying first.

</details>

<details><summary><b>Where do most candidates lose points on the exam?</b></summary><br>

VPC design — subnets, route tables, NAT gateways, and security groups versus NACLs — appears across all four domains instead of one, so a weak mental model of it costs marks everywhere on the exam. The other common loss is picking the technically superior answer instead of the one matching the stated constraint, such as choosing better durability when the question asked for lowest cost.

</details>

<details><summary><b>How much does the AWS SAA-C03 exam cost, and how long is it valid?</b></summary><br>

The exam costs $150 USD, runs for 130 minutes across 65 questions (50 scored and 15 unscored), and requires a scaled score of 720 out of 1,000 to pass. The certification is valid for three years, and it can be taken at a Pearson VUE test centre or online with a proctor.

</details>

<details><summary><b>Do I need a year of AWS experience before taking the exam?</b></summary><br>

AWS recommends at least one year of hands-on experience designing solutions with AWS services, plus familiarity with networking fundamentals like subnets, routing, DNS and load balancing. It is achievable without that year if you build the core services yourself in a free-tier account, because the exam rewards decision-making over muscle memory.

</details>

<details><summary><b>What is the best way to prepare for the SAA-C03 exam?</b></summary><br>

Start with the official exam guide to learn the domain weightings, then work through the AWS Well-Architected Framework since its pillars map almost directly onto the exam domains. After that, build the core services by hand instead of just reading about them, drill scenario-based decision patterns, and finish with at least one timed full-length practice exam before booking.

</details>

---

<sub>Source of truth: [`data/certifications/aws-solutions-architect-associate.yaml`](../data/certifications/aws-solutions-architect-associate.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
