<!-- Generated from data/roadmaps/cloud-security-engineer.yaml by tools/render-markdown.mjs. Do not edit. -->

# Cloud Security Engineer Roadmap

> A path into cloud security as an engineering discipline, covering the shared responsibility model, identity, network segmentation, encryption, workload hardening, detection, governance as code, threat modelling and incident response.

**Advanced** · **10 phases** · **9-12 months at 10h/week** · updated 2026-08-10

This path assumes working knowledge of one public cloud and comfort on the command line. It treats cloud security as engineering rather than as a review gate — controls you build and test, not findings you file.

The reason identity is the longest phase: **in the cloud, identity is the perimeter**. There is no network edge to stand behind, and almost every serious cloud breach reduces to a credential or a role that could do more than it needed to. A misconfigured IAM policy outranks an unpatched host.

Detection sits after the preventive phases deliberately. Alerts on a system you have not hardened produce a queue nobody works, and the queue becomes the control.

Expect 9–12 months, the longest path here. Phase five spans containers and supply chain because that is one attack surface, not two.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$134,792` | Glassdoor Cloud Security Engineer salary estimate, 25th percentile (US, 431 salaries) | 2026-08-08 |
| Mid | `$169,173` | Glassdoor Cloud Security Engineer salary estimate (overall average, US, 431 salaries) | 2026-08-08 |
| Senior | `$180,921` | Glassdoor Senior Cloud Security Engineer salary estimate (average, US, 95 salaries) | 2026-08-08 |

Total duration is **9-12 months at 10h/week** — <sub>SkillPilot editorial estimate, 2026-08-08</sub>

## Before you start

- Working knowledge of at least one public cloud (compute, storage, networking)
- Comfort with Linux, the command line and at least one scripting language
- Basic understanding of TCP/IP, DNS and TLS

## The path

| # | Phase | Duration |
|---:|---|---|
| 1 | [Cloud Security Fundamentals](#1-shared-responsibility) | 3-4 weeks |
| 2 | [Identity & Access Management](#2-identity-access) | 5-6 weeks |
| 3 | [Network Security in the Cloud](#3-network-security) | 4-5 weeks |
| 4 | [Data Protection & Encryption](#4-data-protection) | 4-5 weeks |
| 5 | [Workload, Container & Supply Chain Security](#5-workload-security) | 5-6 weeks |
| 6 | [Detection & Security Monitoring](#6-detection-monitoring) | 4-5 weeks |
| 7 | [Compliance & Governance as Code](#7-governance-as-code) | 3-4 weeks |
| 8 | [Threat Modelling Cloud Architectures](#8-threat-modelling) | 3-4 weeks |
| 9 | [Incident Response in the Cloud](#9-incident-response) | 3-4 weeks |
| 10 | [Security at Organisational Scale](#10-security-at-scale) | 4-5 weeks |

---

### <a id="1-shared-responsibility"></a>1. Cloud Security Fundamentals

<sub>**3-4 weeks**</sub>

Every cloud security mistake starts with a wrong answer to one question: who secures this? The line moves between IaaS, PaaS and SaaS, and it moves per service. Done when you can take one real workload, draw the responsibility boundary for every service it uses, and name the controls that fall to you rather than the provider.

<b>Skills</b> — `Shared Responsibility Model` · `Cloud Threat Landscape` · `Security Design Principles` · `Defence in Depth` · `Blast Radius Reasoning` · `Control Types & Placement` · `Cloud Service Taxonomy` · `Reading Security Documentation`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Take one real workload and draw the shared responsibility boundary per service, naming which controls are yours and which the provider already owns
- Review a published cloud breach report and classify each contributing failure as a customer-side or provider-side control gap
- Assess one account against the AWS Well-Architected Security Pillar and record every question you could not answer with evidence
- Write down the blast radius of your most privileged credential — what it reaches, and what stops it — then verify the answer rather than assuming it
- Compare the shared responsibility split for the same workload run on IaaS and on a managed equivalent, and say which controls you gave up
- Build a one-page control map for a service you already run, marking each control as preventive, detective or responsive

</details>

<details><summary><b>Resources</b> — 6, of which 5 free</summary>

- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [Shared Responsibility in the Cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) <sub>Microsoft · documentation · free</sub>
- [Well-Architected Framework: Security, Privacy & Compliance Pillar](https://docs.cloud.google.com/architecture/framework/security) <sub>Google Cloud · documentation · free</sub>
- [CNCF Cloud Native Security Whitepaper](https://www.cncf.io/reports/cloud-native-security-whitepaper/) <sub>CNCF · documentation · free</sub>
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) <sub>Center for Internet Security · documentation · free</sub>
- **Practical Cloud Security** <sub>Chris Dotson · book · paid</sub> — free alternative: [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html)

</details>

### <a id="2-identity-access"></a>2. Identity & Access Management

<sub>**5-6 weeks**</sub>

The spine of the whole path. In cloud, identity is the perimeter — the network boundary you inherited from the datacentre no longer decides who reaches what. Done when you have replaced a permissive policy on a real workload with a least-privilege one derived from observed access, and proved the old one granted more than the workload ever used.

**Assumes:** shared-responsibility

<b>Skills</b> — `IAM Policy Authoring` · `Least Privilege Derivation` · `Roles & Temporary Credentials` · `Federation & SSO` · `Permission Boundaries & SCPs` · `Policy Evaluation Logic` · `Workload Identity` · `Privilege Escalation Paths` · `Access Reviews`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Write a least-privilege IAM policy for a real workload from its observed access activity, and prove the previous policy granted permissions it never used
- Eliminate long-lived access keys from one workload by moving it to role-based temporary credentials, and confirm no key remains by auditing the account
- Trace the policy evaluation for a request that is denied and explain which of identity policy, resource policy, boundary and SCP produced the deny
- Map the privilege escalation paths inside one account — which role can grant itself more — and close the highest-risk one
- Implement a permissions guardrail with an SCP, test it on a single account before the organisation, and document what it broke
- Run an access review that removes unused roles and permissions, and report the percentage of privileges withdrawn

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Security Best Practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) <sub>AWS · documentation · free</sub>
- [Service Control Policies (SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) <sub>AWS · documentation · free</sub>
- [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) <sub>NIST · documentation · free</sub>
- [AWS Security Reference Architecture](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html) <sub>AWS · documentation · free</sub>
- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>

</details>

### <a id="3-network-security"></a>3. Network Security in the Cloud

<sub>**4-5 weeks**</sub>

The network is no longer the perimeter, but it is still a control. Segmentation, private connectivity and egress restriction limit what a compromised workload can reach next. Done when you have segmented a real environment so one workload cannot reach a service it has no reason to call, and demonstrated the block with a connection test rather than a diagram.

**Assumes:** identity-access

<b>Skills</b> — `VPC & Subnet Design` · `Security Groups & NACLs` · `Network Segmentation` · `Egress Control` · `Private Endpoints` · `TLS & Certificate Management` · `Flow Log Analysis` · `DNS Security`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Segment an environment so one workload cannot reach a service it has no reason to call, and prove the block with a connection test
- Restrict egress on a workload that previously had open internet access, then find every dependency the restriction broke and allow only those
- Replace public service access with private endpoints so traffic never traverses the internet, and verify with flow logs that it no longer does
- Enable flow logs and use them to find one connection nobody could justify, then remove the path that allowed it
- Audit security groups for rules allowing 0.0.0.0/0, and for each one either close it or write down why it must stay
- Enforce TLS on a service using a policy condition rather than trusting clients to opt in, and confirm plaintext requests are rejected

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Security Best Practices for Your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html) <sub>AWS · documentation · free</sub>
- [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) <sub>NIST · documentation · free</sub>
- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) <sub>Center for Internet Security · documentation · free</sub>

</details>

### <a id="4-data-protection"></a>4. Data Protection & Encryption

<sub>**4-5 weeks**</sub>

Encryption is easy to enable and easy to get wrong, because the interesting question is never the cipher — it is who can use the key. Done when you have encrypted a real dataset with a customer-managed key, written a key policy that denies access to an identity that can read the data store, and shown the denial in practice.

**Assumes:** network-security

<b>Skills</b> — `Key Management Services` · `Key Policies & Grants` · `Envelope Encryption` · `Encryption at Rest & in Transit` · `Secrets Management` · `Data Classification` · `Key Rotation & Lifecycle` · `Exfiltration Controls`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Encrypt a dataset with a customer-managed key and write a key policy that denies an identity which can otherwise read the store, then demonstrate the denial
- Move hardcoded credentials out of an application into a secrets manager, then grep the repository history to find the ones still committed
- Implement key rotation for one key and verify that data encrypted before rotation is still readable afterwards
- Classify the data in one system into tiers, and apply a different control set to each tier rather than the same one everywhere
- Block public access on an object store at the account level, then attempt to make a bucket public and confirm the guardrail wins
- Write the exfiltration control for one sensitive store — a policy restricting which network paths and identities can read it — and test it from outside

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [AWS Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html) <sub>AWS · documentation · free</sub>
- [Cloud Key Management Service Overview](https://docs.cloud.google.com/kms/docs/key-management-service) <sub>Google Cloud · documentation · free</sub>
- [Security Best Practices for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html) <sub>AWS · documentation · free</sub>
- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>

</details>

### <a id="5-workload-security"></a>5. Workload, Container & Supply Chain Security

<sub>**5-6 weeks**</sub>

Where the code actually runs, and where the software you did not write arrives. Image hardening, runtime restriction and build provenance. Done when you have hardened a container workload so it runs unprivileged with a read-only filesystem, and can produce the signed provenance for the image running in production.

**Assumes:** data-protection

<b>Skills</b> — `Container Image Hardening` · `Pod Security Standards` · `Kubernetes RBAC` · `Admission Control` · `Vulnerability Scanning` · `Software Supply Chain & SBOM` · `Build Provenance` · `Runtime Hardening` · `Serverless Security`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Harden a container workload to run unprivileged with a read-only root filesystem and dropped capabilities, and confirm it still works under load
- Enforce the restricted Pod Security Standard on a namespace, then find every existing workload it rejects and fix them rather than exempting them
- Generate an SBOM for one application and identify which dependencies you could not attribute to a known source
- Sign build artefacts and verify the signature at deploy time, so an unsigned image cannot reach the cluster
- Write Kubernetes RBAC for one team that grants only the verbs they use, and check it against the cluster-admin binding it replaces
- Add an admission policy that blocks a specific unsafe configuration, and record how many existing manifests it would have caught

</details>

<details><summary><b>Resources</b> — 7, of which 7 free</summary>

- [Kubernetes Security Concepts](https://kubernetes.io/docs/concepts/security/) <sub>Kubernetes · documentation · free</sub>
- [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/) <sub>Kubernetes · documentation · free</sub>
- [Using RBAC Authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) <sub>Kubernetes · documentation · free</sub>
- [Kubernetes Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/) <sub>Kubernetes · documentation · free</sub>
- [About SLSA — Supply Chain Levels for Software Artifacts](https://slsa.dev/spec/v1.0/about) <sub>SLSA · documentation · free</sub>
- [CNCF Cloud Native Security Whitepaper](https://www.cncf.io/reports/cloud-native-security-whitepaper/) <sub>CNCF · documentation · free</sub>
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) <sub>Center for Internet Security · documentation · free</sub>

</details>

### <a id="6-detection-monitoring"></a>6. Detection & Security Monitoring

<sub>**4-5 weeks**</sub>

Prevention fails eventually, and the only thing separating a contained incident from a breach report is whether anyone noticed. Audit logs, threat detection and the queries that turn them into findings. Done when you have written a detection that fires on a simulated misuse in your own account, and tuned it until it stops firing on normal activity.

**Assumes:** workload-security

<b>Skills</b> — `Audit Logging` · `Threat Detection Services` · `Detection Engineering` · `SIEM & Log Pipelines` · `MITRE ATT&CK Mapping` · `Alert Triage & Tuning` · `Log Integrity & Retention` · `Baseline & Anomaly Detection`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Write a detection that fires on a simulated misuse in your own account, then tune it until normal activity stops triggering it
- Enable organisation-wide audit logging with tamper-resistant storage, and verify an administrator cannot quietly delete a log
- Map your current detections to MITRE ATT&CK cloud techniques and name the three highest-risk gaps
- Take a week of findings from a managed threat detection service and triage each one, recording how many were actionable
- Build a log pipeline that routes security events to a queryable store, and answer a question about last month using only that store
- Measure how long it takes you to answer "which identity made this change?" for a real change, and shorten it

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [What Is AWS CloudTrail?](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) <sub>AWS · documentation · free</sub>
- [What Is Amazon GuardDuty?](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html) <sub>AWS · documentation · free</sub>
- [MITRE ATT&CK Cloud Matrix](https://attack.mitre.org/matrices/enterprise/cloud/) <sub>MITRE · documentation · free</sub>
- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>

</details>

### <a id="7-governance-as-code"></a>7. Compliance & Governance as Code

<sub>**3-4 weeks**</sub>

Compliance is where cloud security most often degenerates into a questionnaire. The engineering version is a control that enforces itself and emits its own evidence. Done when you have expressed one written control as executable policy, blocked a non-compliant change with it, and produced the audit evidence automatically rather than by screenshot.

**Assumes:** detection-monitoring

<b>Skills</b> — `Policy as Code` · `Open Policy Agent & Rego` · `Configuration Compliance` · `Control Frameworks` · `Continuous Evidence Collection` · `IaC Security Scanning` · `Drift Detection & Remediation` · `Exception Management`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Express one written control as executable policy, block a non-compliant change with it, and generate the audit evidence without a screenshot
- Add infrastructure-as-code scanning to a pipeline, then measure its false-positive rate before you make it blocking
- Detect configuration drift on a resource somebody changed by hand, and automate the correction with an audit trail
- Map one compliance framework's controls to the technical checks that actually enforce them, and mark the ones with no automated check at all
- Build a continuous compliance dashboard that reports control coverage as a percentage rather than a pass or fail
- Design an exception process for a guardrail, including expiry, so temporary exemptions do not become permanent

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Open Policy Agent Documentation](https://openpolicyagent.org/docs) <sub>Open Policy Agent · documentation · free</sub>
- [What Is AWS Config?](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html) <sub>AWS · documentation · free</sub>
- [NIST SP 800-53 Rev. 5: Security and Privacy Controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) <sub>NIST · documentation · free</sub>
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) <sub>Center for Internet Security · documentation · free</sub>
- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>

</details>

### <a id="8-threat-modelling"></a>8. Threat Modelling Cloud Architectures

<sub>**3-4 weeks**</sub>

A defensive discipline that borrows an attacker's perspective. You model a system, ask what can go wrong, and decide what to do about it — before the design is concrete. Done when you have threat modelled a real architecture, ranked the threats, and shipped a mitigation for the highest-ranked one that the design review would otherwise have missed.

**Assumes:** governance-as-code

<b>Skills</b> — `Threat Modelling Methodology` · `STRIDE` · `Data Flow Diagramming` · `Trust Boundary Identification` · `Attack Path Analysis` · `Risk Ranking` · `Secure Design Review` · `Mitigation Selection`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Threat model a real architecture with STRIDE, rank the threats, and ship a mitigation for the top one that a normal design review would have missed
- Draw the data flow diagram for a system you run and mark every trust boundary, then check whether a control exists at each one
- Analyse the attack path from a compromised low-privilege workload to your most sensitive data store, and break the path at its cheapest link
- Run a threat modelling session with the engineers who own a service, and record which threats they raised that you had not
- Re-threat-model a system after a real design change, and note which mitigations the change invalidated
- Write the secure design review checklist your team applies before a new service ships, and run it against one already in production

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) <sub>OWASP · documentation · free</sub>
- [MITRE ATT&CK Cloud Matrix](https://attack.mitre.org/matrices/enterprise/cloud/) <sub>MITRE · documentation · free</sub>
- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [CNCF Cloud Native Security Whitepaper](https://www.cncf.io/reports/cloud-native-security-whitepaper/) <sub>CNCF · documentation · free</sub>

</details>

### <a id="9-incident-response"></a>9. Incident Response in the Cloud

<sub>**3-4 weeks**</sub>

Cloud incident response breaks the habits built on physical machines: the host you want to image may be gone, and the evidence lives in an API. Done when you have run a simulated incident end to end — contained a compromised identity, preserved evidence, and written the timeline from logs — and can state how long containment took.

**Assumes:** threat-modelling

<b>Skills</b> — `Cloud Incident Response` · `Credential Compromise Containment` · `Forensic Evidence Preservation` · `Timeline Reconstruction` · `Automated Response` · `Runbook Authoring` · `Blameless Postmortems` · `Incident Communication`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Run a simulated incident end to end — contain a compromised identity, preserve evidence, reconstruct the timeline from logs — and report the containment time
- Write the runbook for a leaked credential, then have someone unfamiliar with the account follow it while you say nothing
- Preserve forensic evidence from an ephemeral workload before it is replaced, and document what you lost anyway
- Automate one containment action — isolating a resource or revoking a session — with an audit log and a way to disable it quickly
- Reconstruct the full timeline of a change made in your account using only audit logs, and note every question the logs could not answer
- Run a blameless postmortem for a simulated incident, with an owner and a date on every action item

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [AWS Security Incident Response User Guide](https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/aws-security-incident-response-guide.html) <sub>AWS · documentation · free</sub>
- [NIST SP 800-61 Rev. 3: Incident Response Recommendations](https://csrc.nist.gov/pubs/sp/800/61/r3/final) <sub>NIST · documentation · free</sub>
- [What Is AWS CloudTrail?](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) <sub>AWS · documentation · free</sub>
- [MITRE ATT&CK Cloud Matrix](https://attack.mitre.org/matrices/enterprise/cloud/) <sub>MITRE · documentation · free</sub>

</details>

### <a id="10-security-at-scale"></a>10. Security at Organisational Scale

<sub>**4-5 weeks**</sub>

The multiplier. Securing one account is engineering; making a hundred accounts secure by default is what changes an organisation. Landing zones, account structure and guardrails inherited rather than applied. Done when a team you do not sit with shipped into your landing zone and inherited its controls without you reviewing the change.

**Assumes:** incident-response

<b>Skills</b> — `Landing Zone Design` · `Multi-Account Strategy` · `Organisational Guardrails` · `Secure Baselines` · `Paved Road Platforms` · `Security Metrics & Reporting` · `Developer Enablement` · `Influence Without Authority`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build a landing zone a team can ship into and inherit its controls without you reviewing the change, then confirm one team did exactly that
- Design an account structure that isolates production from everything else, and migrate one real workload into it
- Publish a secure baseline other teams consume as a module rather than as documentation, and count adoptions after you stop promoting it
- Define the five security metrics you report to leadership, with the query behind each so nobody recalculates them by hand
- Make the secure path the easy path for one common task, then measure whether the insecure path is still being used
- Run a security review with a team you do not manage and record which decisions changed without you escalating

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Organizing Your AWS Environment Using Multiple Accounts](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/organizing-your-aws-environment.html) <sub>AWS · documentation · free</sub>
- [AWS Security Reference Architecture](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html) <sub>AWS · documentation · free</sub>
- [Service Control Policies (SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) <sub>AWS · documentation · free</sub>
- [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html) <sub>AWS · documentation · free</sub>
- [Well-Architected Framework: Security, Privacy & Compliance Pillar](https://docs.cloud.google.com/architecture/framework/security) <sub>Google Cloud · documentation · free</sub>

</details>

## Questions

<details><summary><b>Why does identity get one of the longest phases in this roadmap?</b></summary><br>

In the cloud, identity is the perimeter — there is no network edge to stand behind, and almost every serious cloud breach reduces to a credential or a role that could do more than it needed to. A misconfigured IAM policy outranks an unpatched host, which is why Identity & Access Management runs 5-6 weeks, tied with Workload, Container & Supply Chain Security as the longest phases in the path.

</details>

<details><summary><b>How long does the Cloud Security Engineer roadmap take?</b></summary><br>

The full path is estimated at 9-12 months at 10 hours a week. Phase five alone spans containers and supply chain security because the editorial view treats that as one attack surface rather than two, which is part of why the timeline runs long.

</details>

<details><summary><b>Why does detection come after the preventive phases instead of first?</b></summary><br>

Detection & Security Monitoring is deliberately placed after identity, network, data and workload security are covered. Alerts on a system you have not hardened produce a queue nobody works, and that unworked queue becomes the control instead of an actual fix.

</details>

<details><summary><b>How much does a Cloud Security Engineer earn?</b></summary><br>

In the United States, entry-level pay is around $134,792 (Glassdoor 25th percentile), the overall average is about $169,173, and senior Cloud Security Engineers average roughly $180,921. All three figures come from Glassdoor's Cloud Security Engineer salary data retrieved in August 2026.

</details>

<details><summary><b>What prior knowledge do I need before starting this roadmap?</b></summary><br>

You need working knowledge of at least one public cloud covering compute, storage and networking, comfort with Linux, the command line and at least one scripting language, plus a basic understanding of TCP/IP, DNS and TLS. The roadmap builds on those fundamentals rather than teaching them from scratch.

</details>

<details><summary><b>What does the Compliance & Governance as Code phase actually involve?</b></summary><br>

It treats compliance as engineering rather than a questionnaire: expressing a written control as executable policy, blocking a non-compliant change with it, and producing audit evidence automatically instead of by screenshot. It covers policy as code, tools like Open Policy Agent and Rego, IaC scanning, drift detection, and mapping compliance frameworks to the technical checks that actually enforce them.

</details>

## Neighbouring paths

[Site Reliability Engineer](sre.md) · [DevOps Engineer](devops-engineer.md) · [Cloud Architect](cloud-architect.md) · [AI Security Engineer](ai-security-engineer.md)

---

<sub>Source of truth: [`data/roadmaps/cloud-security-engineer.yaml`](../data/roadmaps/cloud-security-engineer.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
