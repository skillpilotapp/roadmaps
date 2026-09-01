<!-- Generated from data/certifications/aws-security-specialty.yaml by tools/render-markdown.mjs. Do not edit. -->

# AWS Certified Security - Specialty (SCS-C02)

> The specialty certification for securing AWS workloads — threat detection and incident response, logging, infrastructure security, identity, data protection and multi-account governance.

**Amazon Web Services** · code `SCS-C02` · **$300 USD** · 170 minutes · pass 750 on a scaled score of 100–1,000 · valid 3 years · updated 2026-08-17

The Security Specialty is the AWS certification that assumes you already run things on AWS. It does not teach you the platform — it asks whether you can tell why a request that should have been denied was allowed, and find the answer in logs you configured yourself.

## What the weights tell you to study

Infrastructure Security leads at 20%, with Logging and Monitoring and Data Protection at 18% each. Those three are more than half the exam, and all three reward hands-on work over reading.

Identity and Access Management is nominally 16%, and that number understates it badly. Policy evaluation logic is the machinery underneath questions in every other domain: an infrastructure question about a VPC endpoint, a data question about a KMS key, a governance question about an SCP all resolve to whether a specific principal is allowed a specific action. Learn the evaluation order first and the rest of the exam gets easier.

Threat Detection and Incident Response and Management and Security Governance sit at 14% each. They are the smallest domains and they overlap heavily — both assume a multi-account organisation with centralised, automated controls.

## What the exam is actually like

**170 minutes, 65 questions, and only 50 of them count.** Fifteen are unscored and unmarked, so a question that seems unreasonably obscure may simply not be scored. Answer it and move on rather than losing four minutes to it.

**Scaled scoring, 100 to 1,000, pass at 750, compensatory across the whole exam.** No individual domain has to be passed. There is no penalty for a wrong answer, which makes leaving anything blank strictly worse than guessing.

**Questions are scenarios with long stems.** Most describe an architecture, state a symptom, and offer four plausible remedies. The skill being tested is elimination under time pressure — reading the last sentence first, to find out what is actually being asked, is worth practising.

## Where the marks are lost

Two places. The first is the boundary between a resource policy and an identity policy — S3 bucket policies and KMS key policies both need to agree with IAM, and questions are built precisely on that seam. The second is troubleshooting: several task statements are explicitly about diagnosing something already broken, and candidates who only ever built working configurations have never seen the failure mode being described.

## Before you book

The exam is $300 and the certification is valid for three years. AWS publishes the in-scope and out-of-scope service lists in the exam guide appendix — read them before planning your study, because the surface is narrower than "AWS security" implies, and weeks are lost to services that cannot appear.

## The exam

| | |
|---|---|
| Code | `SCS-C02` |
| Cost | **$300 USD** |
| Duration | 170 minutes |
| Passing score | 750 on a scaled score of 100–1,000 |
| Valid for | 3 years |
| Format | 65 questions (50 scored, 15 unscored), multiple choice and multiple response, at a test centre or online proctored |

<sub>Cost from AWS Certification — AWS Certified Security - Specialty exam page (aws.amazon.com/certification), read on 2026-08-17. Prices change and this one is not re-read continuously — check the provider before paying.</sub>

## What the exam weights

The blueprint decides where study time goes. These are the published weights.

| Domain | Weight | |
|---|---:|---|
| Infrastructure Security | 20% | `████░░░░░░░░░░░░░░░░` |
| Security Logging and Monitoring | 18% | `████░░░░░░░░░░░░░░░░` |
| Data Protection | 18% | `████░░░░░░░░░░░░░░░░` |
| Identity and Access Management | 16% | `███░░░░░░░░░░░░░░░░░` |
| Threat Detection and Incident Response | 14% | `███░░░░░░░░░░░░░░░░░` |
| Management and Security Governance | 14% | `███░░░░░░░░░░░░░░░░░` |

<details><summary><b>Threat Detection and Incident Response</b> — 14%</summary>

- Design and implement an incident response plan
- Detect security threats and anomalies by using AWS services
- Respond to compromised resources and workloads
- GuardDuty, Security Hub, Detective and the AWS Security Finding Format (ASFF)
- Credential invalidation and rotation after a compromise

</details>

<details><summary><b>Security Logging and Monitoring</b> — 18%</summary>

- Design and implement monitoring and alerting for security events
- Troubleshoot security monitoring and alerting
- Design and implement a logging solution
- Troubleshoot logging solutions
- Design a log analysis solution with Athena and CloudWatch Logs Insights

</details>

<details><summary><b>Infrastructure Security</b> — 20%</summary>

- Design and implement security controls for edge services
- Design and implement network security controls
- Design and implement security controls for compute workloads
- Troubleshoot network security
- WAF, Shield, CloudFront, Route 53, VPC design and endpoint policies

</details>

<details><summary><b>Identity and Access Management</b> — 16%</summary>

- Design, implement and troubleshoot authentication for AWS resources
- Design, implement and troubleshoot authorization for AWS resources
- Policy evaluation logic across identity, resource, SCP and permissions boundaries
- Cross-account access and role assumption
- IAM Identity Center and federation

</details>

<details><summary><b>Data Protection</b> — 18%</summary>

- Design and implement controls that provide confidentiality and integrity for data in transit
- Design and implement controls that provide confidentiality and integrity for data at rest
- Design and implement controls to manage the lifecycle of data at rest
- Design and implement controls to protect credentials, secrets and cryptographic key materials
- KMS key policies, grants and multi-Region keys

</details>

<details><summary><b>Management and Security Governance</b> — 14%</summary>

- Develop a strategy to centrally deploy and manage AWS accounts
- Implement a secure and consistent deployment strategy for cloud resources
- Evaluate the compliance of AWS resources
- Identify security gaps through architectural reviews and cost analysis
- AWS Organizations, Control Tower, Config and service control policies

</details>

## Before you book it

- Two or more years of hands-on experience securing AWS workloads
- Working knowledge of IAM, VPC networking and at least one AWS logging service

## How to prepare

6 steps, **about 123 hours** in total.

### 1. Read the exam guide and the sample questions first

<sub>**~3 hours**</sub>

The guide is where the weights, the task statements and the in-scope service list live, and the last of those is the one people skip. Knowing which services are explicitly out of scope saves weeks — this exam is narrower than the AWS security surface suggests.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [AWS Certified Security - Specialty exam guide](https://d1.awsstatic.com/training-and-certification/docs-security-spec/AWS-Certified-Security-Specialty_Exam-Guide.pdf) <sub>AWS · documentation · free</sub>
- [AWS Certified Security - Specialty exam page](https://aws.amazon.com/certification/certified-security-specialty/) <sub>AWS · certification · free</sub>
- [AWS Skill Builder — exam prep](https://skillbuilder.aws/exam-prep) <sub>AWS · course · free</sub>

</details>

### 2. Master IAM policy evaluation logic before anything else

<sub>**~25 hours**</sub>

Identity is 16% by weight and far more by influence: infrastructure, data protection and governance questions all resolve to 'is this request allowed?'. Learn the order — explicit deny, SCP, resource policy, permissions boundary, identity policy — until you can trace it without hesitating.

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Policy evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html) <sub>AWS · documentation · free</sub>
- [Service control policies (SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) <sub>AWS · documentation · free</sub>
- [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) <sub>AWS · documentation · free</sub>
- [IAM Policy Simulator](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html) <sub>AWS · documentation · free</sub>

</details>

### 3. Build the logging pipeline in a real account

<sub>**~25 hours**</sub>

Logging and Monitoring is 18%. Turn on an organization CloudTrail, ship to a locked S3 bucket in a separate account, query it in Athena, and then break it — remove the bucket policy statement CloudTrail needs and watch what the failure looks like. Troubleshooting is a named task statement.

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [AWS CloudTrail User Guide](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) <sub>AWS · documentation · free</sub>
- [Querying AWS CloudTrail logs with Athena](https://docs.aws.amazon.com/athena/latest/ug/cloudtrail-logs.html) <sub>AWS · documentation · free</sub>
- [VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html) <sub>AWS · documentation · free</sub>
- [CloudWatch Logs Insights query syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html) <sub>AWS · documentation · free</sub>

</details>

### 4. Work Infrastructure Security, the largest domain

<sub>**~30 hours**</sub>

At 20% it is the biggest single block. Security groups against NACLs, VPC endpoint policies, WAF rule evaluation order, and where traffic is actually inspected — the questions are usually 'why is this request still reaching the instance?', which is a troubleshooting skill and not a recall one.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [VPC security best practices](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html) <sub>AWS · documentation · free</sub>
- [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) <sub>AWS · documentation · free</sub>
- [VPC endpoint policies](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html) <sub>AWS · documentation · free</sub>

</details>

### 5. Learn KMS properly — key policies, grants and multi-Region

<sub>**~20 hours**</sub>

Data Protection is 18% and most of it is KMS. The recurring trap is a key policy and an IAM policy that disagree: access to a key needs both, and knowing which one is missing from an error message is worth several questions on its own.

<details><summary><b>Resources</b> — 4, of which 3 free</summary>

- [AWS KMS key policies](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) <sub>AWS · documentation · free</sub>
- [Grants in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html) <sub>AWS · documentation · free</sub>
- [AWS Secrets Manager User Guide](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) <sub>AWS · documentation · free</sub>
- **Practical Cloud Security** <sub>Chris Dotson · book · paid</sub> — free alternative: [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html)

</details>

### 6. Cover incident response and governance last, together

<sub>**~20 hours**</sub>

They are 14% each and they share a mental model: multi-account, centralised, automated. Organizations, Control Tower, Config rules, GuardDuty and Security Hub all answer the same question at different layers, and studying them as one block is faster than as two domains.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [AWS Security Incident Response Guide](https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/welcome.html) <sub>AWS · documentation · free</sub>
- [AWS Control Tower User Guide](https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html) <sub>AWS · documentation · free</sub>
- [AWS Config Developer Guide](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html) <sub>AWS · documentation · free</sub>

</details>

## Where this fits

[Cloud Security Engineer](../roadmaps/cloud-security-engineer.md) · [Cloud Architect](../roadmaps/cloud-architect.md) · [Site Reliability Engineer](../roadmaps/sre.md)

## Questions

<details><summary><b>Is the AWS Security Specialty exam hard?</b></summary><br>

It assumes you already run things on AWS — it does not teach the platform, it tests whether you can explain why a request that should have been denied was allowed and find the answer in logs you configured yourself. The questions are scenarios with long stems describing an architecture and a symptom, so the skill being tested is elimination under time pressure rather than recall.

</details>

<details><summary><b>What domains does the SCS-C02 exam cover, and what should I study first?</b></summary><br>

Infrastructure Security leads at 20%, with Security Logging and Monitoring and Data Protection at 18% each — those three make up more than half the exam and all reward hands-on work over reading. Identity and Access Management is nominally 16%, but policy evaluation logic underneath it feeds questions in every other domain, so learning the evaluation order first makes the rest of the exam easier.

</details>

<details><summary><b>Where do most candidates lose marks on the AWS Security Specialty exam?</b></summary><br>

Two places. The first is the boundary between a resource policy and an identity policy — S3 bucket policies and KMS key policies both need to agree with IAM, and questions are built precisely on that seam. The second is troubleshooting: several task statements are explicitly about diagnosing something already broken, which candidates who only ever built working configurations have never seen.

</details>

<details><summary><b>How much does the AWS Security Specialty certification cost, and how long is it valid?</b></summary><br>

The exam costs $300 USD and the certification is valid for three years. AWS publishes the in-scope and out-of-scope service lists in the exam guide appendix, and reading them before planning your study matters because the surface is narrower than 'AWS security' implies — weeks are otherwise lost preparing for services that cannot appear.

</details>

<details><summary><b>What is the format of the SCS-C02 exam?</b></summary><br>

It is 170 minutes long with 65 questions, but only 50 are scored — the other 15 are unscored and unmarked, so an unreasonably obscure question may simply not count. Scoring is scaled from 100 to 1,000 with a pass mark of 750, compensatory across the whole exam, and there is no penalty for a wrong answer, which makes leaving anything blank strictly worse than guessing.

</details>

<details><summary><b>What should I focus on when preparing for the Identity and Access Management domain?</b></summary><br>

Master policy evaluation logic before anything else — the order of explicit deny, SCP, resource policy, permissions boundary and identity policy — because infrastructure, data protection and governance questions all resolve to whether a specific principal is allowed a specific action. Data Protection prep should cover KMS key policies and grants too, since the recurring trap is a key policy and an IAM policy that disagree, and knowing which one is missing from an error message is worth several questions.

</details>

---

<sub>Source of truth: [`data/certifications/aws-security-specialty.yaml`](../data/certifications/aws-security-specialty.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
