<!-- Generated from data/certifications/cks.yaml by tools/render-markdown.mjs. Do not edit. -->

# Certified Kubernetes Security Specialist (CKS)

> A hands-on, performance-based certification proving you can harden a Kubernetes cluster, secure its supply chain, and detect runtime threats from the command line. Requires a passed CKA to sit.

**The Linux Foundation / CNCF** · code `CKS` · **$445 USD (exam only); $625 USD bundled with THRIVE-ONE; $645 USD bundled with the LFS260 course** · 2 hours · pass 67% · valid 2 years · updated 2026-08-08

The CKS is the hardest of the three CNCF Kubernetes exams, and the reason is structural rather than academic. It assumes everything the CKA tested and then asks you to do it under an adversarial framing, in the same two hours.

## The prerequisite is the fact people discover too late

**You must have passed the CKA before you may attempt the CKS.** This is not a recommendation. The Linux Foundation verifies it, and the CKA itself expires after two years — so a lapsed CKA means renewing it before you can book.

There is one piece of good news, new since **18 June 2026**: passing or recertifying the CKS now automatically reinstates or extends your CKA under the CARE program, whether your CKA is still active or has already expired, with the CKA expiry realigned to your new CKS date. That changes the ownership maths considerably. Two credentials, one exam every two years.

## Both credentials expire in two years

The CKS is valid for **2 years**, the same window as the CKA rather than a shorter one. Before CARE that meant two separate renewal exams on two separate clocks. Now the CKS carries the CKA along with it, which makes staying current cheaper than it used to be — provided you keep renewing the CKS and not just letting it lapse.

## What the weights tell you to study

The three 20% domains — Microservice Vulnerabilities, Supply Chain Security, and Monitoring, Logging and Runtime Security — are 60% of the score between them, and they are the ones a CKA holder has least exposure to. Cluster Setup and Cluster Hardening, at 15% each, are the closest to familiar ground.

Supply chain is where the gap is widest. Scanners, signatures, SBOMs and admission policy are day-job tools for very few Kubernetes administrators, and they are worth as much as cluster hardening and system hardening combined.

## What actually fails people

**Tool breadth, not Kubernetes depth.** Falco, Trivy, kube-bench, Kyverno, cosign, AppArmor, seccomp and gVisor all appear. Each is shallow on its own; collectively they are more surface area than the CKA covers, and a candidate meeting any of them for the first time in the exam loses that task.

**Time, again.** The tasks are longer than the CKA's because hardening means editing a manifest, restarting a component, and then verifying the control actually took effect. Skipping verification is how people submit work that scores nothing.

**Wider permitted docs, no more time to read them.** Eight documentation domains are allowed rather than one. That is more places to get lost, not a safety net.

## Before you book

Budget real hours against a cluster you are willing to break, and expect the security tooling to take longer than the Kubernetes parts. Reading about a hardening control and applying one under a timer are different skills, and only the second one is on the exam.

## The exam

| | |
|---|---|
| Code | `CKS` |
| Cost | **$445 USD (exam only); $625 USD bundled with THRIVE-ONE; $645 USD bundled with the LFS260 course** |
| Duration | 2 hours |
| Passing score | 67% |
| Valid for | 2 years |
| Format | Online, proctored, performance-based (command-line tasks on live Kubernetes clusters, Kubernetes v1.35) |

<sub>Cost from Linux Foundation Training & Certification — CKS certification page (training.linuxfoundation.org), read on 2026-08-08. Prices change and this one is not re-read continuously — check the provider before paying.</sub>

## What the exam weights

The blueprint decides where study time goes. These are the published weights.

| Domain | Weight | |
|---|---:|---|
| Minimize Microservice Vulnerabilities | 20% | `████░░░░░░░░░░░░░░░░` |
| Supply Chain Security | 20% | `████░░░░░░░░░░░░░░░░` |
| Monitoring, Logging and Runtime Security | 20% | `████░░░░░░░░░░░░░░░░` |
| Cluster Setup | 15% | `███░░░░░░░░░░░░░░░░░` |
| Cluster Hardening | 15% | `███░░░░░░░░░░░░░░░░░` |
| System Hardening | 10% | `██░░░░░░░░░░░░░░░░░░` |

<details><summary><b>Cluster Setup</b> — 15%</summary>

- Network security policies that restrict cluster-level access
- Reviewing component configuration against the CIS benchmark (etcd, kubelet, kubedns, kube-apiserver)
- Ingress objects with TLS
- Protecting node metadata and endpoints
- Verifying platform binaries before deploying

</details>

<details><summary><b>Cluster Hardening</b> — 15%</summary>

- Role-based access control to minimize exposure
- Service account hygiene — disabling defaults, minimizing permissions
- Restricting access to the Kubernetes API
- Upgrading Kubernetes to avoid known vulnerabilities

</details>

<details><summary><b>System Hardening</b> — 10%</summary>

- Minimizing the host OS footprint to reduce attack surface
- Least-privilege identity and access management
- Minimizing external access to the network
- Kernel hardening tools — AppArmor and seccomp

</details>

<details><summary><b>Minimize Microservice Vulnerabilities</b> — 20%</summary>

- Applying the appropriate Pod Security Standards
- Managing Kubernetes Secrets and encryption at rest
- Isolation techniques — multi-tenancy and sandboxed containers
- Pod-to-pod encryption with Cilium or Istio

</details>

<details><summary><b>Supply Chain Security</b> — 20%</summary>

- Minimizing base image footprint
- Understanding your supply chain — SBOM, CI/CD, artifact repositories
- Securing the supply chain — permitted registries, signing and validating artifacts
- Static analysis of workloads and images with Kubesec and KubeLinter

</details>

<details><summary><b>Monitoring, Logging and Runtime Security</b> — 20%</summary>

- Behavioral analytics to detect malicious activity
- Detecting threats across infrastructure, apps, networks, data, users and workloads
- Investigating and identifying phases of an attack
- Ensuring container immutability at runtime
- Using Kubernetes audit logs to monitor access

</details>

## Before you book it

- A passed CKA — the Linux Foundation requires it before you may attempt the CKS
- Fluent kubectl and YAML authoring under time pressure
- Comfortable with Linux command-line administration, systemd and container runtimes

## How to prepare

7 steps, **about 98 hours** in total.

### 1. Confirm your CKA is valid before you buy anything

<sub>**~1 hours**</sub>

You cannot sit the CKS without having passed the CKA, and the Linux Foundation checks. Look up your expiry date first. Since 18 June 2026, passing the CKS also reinstates or extends an expired CKA, but that is a reward for passing — it does not remove the entry requirement.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [CKS certification page — prerequisites and pricing](https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/) <sub>The Linux Foundation · certification · free</sub>
- [FAQ — CKA, CKAD and CKS](https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks) <sub>The Linux Foundation · documentation · free</sub>
- [Expanding CARE — passing CKS extends your CKA](https://training.linuxfoundation.org/blog/expanding-care-passing-cks-can-now-extend-your-cka-certification/) <sub>The Linux Foundation · documentation · free</sub>

</details>

### 2. Read the curriculum and the security checklist end to end

<sub>**~5 hours**</sub>

The CNCF publishes the exact competency list, and the Kubernetes security checklist maps almost one-to-one onto it. Read both before studying anything, so you know which of the six domains you already cover from CKA work and which are genuinely new ground.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [CKS Curriculum (official)](https://github.com/cncf/curriculum) <sub>CNCF · documentation · free</sub>
- [Kubernetes Security Checklist](https://kubernetes.io/docs/concepts/security/security-checklist/) <sub>Kubernetes · documentation · free</sub>
- [Security concepts overview](https://kubernetes.io/docs/concepts/security/) <sub>Kubernetes · documentation · free</sub>

</details>

### 3. Harden a cluster you built yourself against the CIS benchmark

<sub>**~20 hours**</sub>

Run kube-bench against your own kubeadm cluster, then fix what it flags — API server flags, kubelet configuration, etcd permissions. This is Cluster Setup and Cluster Hardening, 30% of the exam, and reading about the controls teaches you far less than watching a check flip to PASS.

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [kube-bench — CIS Kubernetes Benchmark checks](https://github.com/aquasecurity/kube-bench) <sub>Aqua Security · documentation · free</sub>
- [CIS Kubernetes Benchmark](https://www.cisecurity.org/benchmark/kubernetes) <sub>Center for Internet Security · documentation · free</sub>
- [RBAC good practices](https://kubernetes.io/docs/concepts/security/rbac-good-practices/) <sub>Kubernetes · documentation · free</sub>
- [Using RBAC authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) <sub>Kubernetes · documentation · free</sub>
- [Set kubelet parameters via a config file](https://kubernetes.io/docs/tasks/administer-cluster/kubelet-config-file/) <sub>Kubernetes · documentation · free</sub>

</details>

### 4. Drill the pod-level controls until you can write them from memory

<sub>**~22 hours**</sub>

Pod Security Standards, security contexts, seccomp, AppArmor, secrets encryption at rest and sandboxed runtimes are the 20% Microservice Vulnerabilities domain plus half of System Hardening. Every one is a small YAML block, and writing them without the docs open is the difference between finishing and running out of time.

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/) <sub>Kubernetes · documentation · free</sub>
- [Configure a security context for a pod or container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) <sub>Kubernetes · documentation · free</sub>
- [Restrict a container's syscalls with seccomp](https://kubernetes.io/docs/tutorials/security/seccomp/) <sub>Kubernetes · tutorial · free</sub>
- [Restrict a container's access to resources with AppArmor](https://kubernetes.io/docs/tutorials/security/apparmor/) <sub>Kubernetes · tutorial · free</sub>
- [Encrypting confidential data at rest](https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/) <sub>Kubernetes · documentation · free</sub>

</details>

### 5. Build a supply chain you can defend

<sub>**~20 hours**</sub>

Scan images with Trivy, cut a base image down to distroless, sign an artifact with cosign and enforce a permitted-registry policy with Kyverno. Supply Chain Security is 20% and the tools are unfamiliar to most CKA holders, which makes it the domain where preparation pays back fastest.

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [Trivy — vulnerability and misconfiguration scanner](https://trivy.dev/) <sub>Aqua Security · documentation · free</sub>
- [Kyverno policy engine](https://kyverno.io/docs/introduction/) <sub>Kyverno · documentation · free</sub>
- [Signing artifacts with cosign](https://docs.sigstore.dev/cosign/signing/overview/) <sub>Sigstore · documentation · free</sub>
- [Runtime Class — selecting a sandboxed runtime](https://kubernetes.io/docs/concepts/containers/runtime-class/) <sub>Kubernetes · documentation · free</sub>
- **Practical Cloud Security** <sub>Chris Dotson · book · paid</sub> — free alternative: [AWS Well-Architected Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html)

</details>

### 6. Detect a threat instead of preventing it

<sub>**~16 hours**</sub>

Install Falco, write a rule, trigger it and read the output. Then turn on API server audit logging and find a specific action in the log. Monitoring and Runtime Security is 20%, and it is the one domain where hardening instincts do not help — the task is noticing, not blocking.

<details><summary><b>Resources</b> — 4, of which 3 free</summary>

- [Falco documentation](https://falco.org/docs/) <sub>Falco · documentation · free</sub>
- [Auditing — audit policy and backends](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/) <sub>Kubernetes · documentation · free</sub>
- [gVisor documentation](https://gvisor.dev/docs/) <sub>gVisor · documentation · free</sub>
- **Kubernetes: Up and Running** <sub>Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson · book · paid</sub> — free alternative: [Kubernetes Documentation — Concepts](https://kubernetes.io/docs/concepts/)

</details>

### 7. Sit timed simulations with only the permitted docs open

<sub>**~14 hours**</sub>

Two hours, a timer, and the eight allowed documentation domains — kubernetes.io, Falco, Cilium, Istio, etcd, bom, ingress-nginx and the Kubernetes blog. Your registration includes two Killer.sh attempts. Use the first one early enough that its results can still change how you study.

<details><summary><b>Resources</b> — 3, of which 2 free</summary>

- [Resources allowed during the exam](https://docs.linuxfoundation.org/tc-docs/certification/certification-resources-allowed) <sub>The Linux Foundation · documentation · free</sub>
- [Killer.sh CKS simulator](https://killer.sh/cks) <sub>Killer.sh · course · paid</sub>
- [Candidate handbook](https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2) <sub>The Linux Foundation · documentation · free</sub>

</details>

## Where this fits

[Cloud Security Engineer](../roadmaps/cloud-security-engineer.md)

## Questions

<details><summary><b>Is the CKS exam hard?</b></summary><br>

It is the hardest of the three CNCF Kubernetes exams, and the reason is structural: it assumes everything the CKA tested and then asks you to do it under an adversarial framing, in the same two hours. What actually fails people is tool breadth rather than Kubernetes depth — Falco, Trivy, kube-bench, Kyverno, cosign, AppArmor, seccomp and gVisor all appear, and meeting any of them for the first time in the exam loses that task.

</details>

<details><summary><b>Do I need to pass the CKA before I can take the CKS?</b></summary><br>

Yes. You must have passed the CKA before you may attempt the CKS — this is not a recommendation, the Linux Foundation checks it, and a lapsed CKA (they expire after two years) means renewing it before you can even book. Since 18 June 2026, passing the CKS also reinstates or extends an expired CKA under the CARE program, but that is a reward for passing, not a way around the entry requirement.

</details>

<details><summary><b>What domains does the CKS exam cover, and which ones should I focus on?</b></summary><br>

Three domains are weighted 20% each — Minimize Microservice Vulnerabilities, Supply Chain Security, and Monitoring, Logging and Runtime Security — and together they are 60% of the score, plus they're the ones a CKA holder has least exposure to. Cluster Setup and Cluster Hardening, at 15% each, and System Hardening at 10%, are closer to familiar ground from CKA study.

</details>

<details><summary><b>How much does the CKS certification cost, and how long is it valid?</b></summary><br>

The exam alone costs $445 USD, with bundles at $625 USD including THRIVE-ONE or $645 USD including the LFS260 course. It runs 2 hours, requires a 67% passing score, and is valid for 2 years — the same window as the CKA, and since June 2026 a CKS pass also extends the linked CKA to the same expiry date.

</details>

<details><summary><b>Why is supply chain security singled out as the hardest part to prepare for?</b></summary><br>

Supply chain is where the gap is widest for most candidates: scanners, signatures, SBOMs and admission policy are day-job tools for very few Kubernetes administrators, yet the Supply Chain Security domain alone is worth as much as Cluster Hardening and System Hardening combined. The prep path has a dedicated step for it — scanning images with Trivy, cutting a base image to distroless, signing with cosign and enforcing a permitted-registry policy with Kyverno.

</details>

<details><summary><b>What documentation can I use during the CKS exam?</b></summary><br>

Eight documentation domains are allowed during the exam — kubernetes.io, Falco, Cilium, Istio, etcd, bom, ingress-nginx and the Kubernetes blog — compared to just one for the CKA. That is more places to get lost, not a safety net, since the extra breadth does not come with any extra time to read.

</details>

---

<sub>Source of truth: [`data/certifications/cks.yaml`](../data/certifications/cks.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
