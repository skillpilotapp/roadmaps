<!-- Generated from data/certifications/ckad.yaml by tools/render-markdown.mjs. Do not edit. -->

# Certified Kubernetes Application Developer (CKAD)

> A hands-on, performance-based certification proving you can design, build, configure and expose applications running on Kubernetes — from a command line, against a clock.

**The Linux Foundation / CNCF** · code `CKAD` · **$445 USD (includes one free retake)** · 2 hours · pass 66% · valid 2 years · updated 2026-08-08

## CKAD or CKA?

Both exams are two hours on a command line, cost the same and share a passing score. They test different jobs.

**CKAD is the application on the cluster.** You write manifests, wire up ConfigMaps and Secrets, set probes, expose a Deployment through a Service and an Ingress. You never bootstrap a cluster, restore etcd or fix a broken kubelet — those are the CKA's largest domains. Configuration and security is the biggest block here at 25%, and every domain name starts with the word "Application".

Pick CKAD if you ship services onto a cluster someone else runs. Pick the CKA if you run the cluster. If you do both, CKAD first: it is the gentler of the two and most of its material is a prerequisite for the CKA anyway.

## What the exam is actually like

**Speed is the exam.** 15-20 tasks in 120 minutes is roughly six minutes each, and most people who fail knew every concept involved. They typed too slowly, wrote YAML by hand instead of generating it, and left tasks untouched. This is why shell setup is step one rather than a footnote.

**Nothing here is obscure.** The curriculum is core Kubernetes objects you already use if you deploy to Kubernetes at work. There is no trivia, no hidden corner of the API. The difficulty is entirely in execution under a clock.

**The docs are open and they are a trap.** You may use kubernetes.io/docs, the Kubernetes blog and helm.sh/docs, and you may search within them — but not open an external result. Two or three lookups are fine. Ten will cost you the exam.

**Tasks are independent and weighted individually.** Each states its weight and runs in a named namespace and context. Read the context line every single time; a perfect answer in the wrong namespace scores zero.

## Before you book

The fee includes one free retake and twelve months to schedule, so a slightly early first attempt is a cheap way to find out which domains need work. The certification is valid for two years.

Budget hands-on hours, not reading hours. You cannot pass a performance-based exam by having read about probes.

## The exam

| | |
|---|---|
| Code | `CKAD` |
| Cost | **$445 USD (includes one free retake)** |
| Duration | 2 hours |
| Passing score | 66% |
| Valid for | 2 years |
| Format | Online, proctored, performance-based — 15-20 command-line tasks on live Kubernetes clusters (v1.35) |

<sub>Cost from Linux Foundation Training & Certification — Certified Kubernetes Application Developer (CKAD) certification page (training.linuxfoundation.org), read on 2026-08-08. Prices change and this one is not re-read continuously — check the provider before paying.</sub>

## What the exam weights

The blueprint decides where study time goes. These are the published weights.

| Domain | Weight | |
|---|---:|---|
| Application Environment, Configuration and Security | 25% | `█████░░░░░░░░░░░░░░░` |
| Application Design and Build | 20% | `████░░░░░░░░░░░░░░░░` |
| Application Deployment | 20% | `████░░░░░░░░░░░░░░░░` |
| Services and Networking | 20% | `████░░░░░░░░░░░░░░░░` |
| Application Observability and Maintenance | 15% | `███░░░░░░░░░░░░░░░░░` |

<details><summary><b>Application Design and Build</b> — 20%</summary>

- Define, build and modify container images
- Choosing the right workload resource (Deployment, DaemonSet, CronJob)
- Multi-container Pod design patterns — sidecar, init and others
- Persistent and ephemeral volumes

</details>

<details><summary><b>Application Deployment</b> — 20%</summary>

- Deployments and rolling updates
- Common deployment strategies — blue/green and canary
- Deploying existing packages with Helm
- Kustomize overlays and patches

</details>

<details><summary><b>Application Observability and Maintenance</b> — 15%</summary>

- API deprecations
- Liveness, readiness and startup probes
- Monitoring applications with the built-in CLI tools
- Container logs
- Debugging in Kubernetes

</details>

<details><summary><b>Application Environment, Configuration and Security</b> — 25%</summary>

- Resources that extend Kubernetes — CRDs and Operators
- Authentication, authorization and admission control
- Requests, limits and quotas
- ConfigMaps, Secrets and ServiceAccounts
- Application security — SecurityContexts and capabilities

</details>

<details><summary><b>Services and Networking</b> — 20%</summary>

- NetworkPolicies
- Providing and troubleshooting access to applications via Services
- Exposing applications with Ingress rules

</details>

## Before you book it

- Comfortable on a Linux command line, including vim basics
- You have built and run a container image before
- Basic YAML fluency — indentation errors cost marks here

## How to prepare

6 steps, **about 96 hours** in total.

### 1. Set up a throwaway cluster and a fast shell

<sub>**~4 hours**</sub>

One kind cluster is enough — you never touch a control plane in this exam. Spend the time instead on the kubectl alias, completion and the --dry-run=client -o yaml habit. Candidates lose CKAD on typing speed, so make the shortcuts automatic from day one and use them for every step below.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [kind (Kubernetes in Docker)](https://kind.sigs.k8s.io/) <sub>Kubernetes SIGs · documentation · free</sub>
- [kubectl Quick Reference — aliases, completion, dry-run](https://kubernetes.io/docs/reference/kubectl/quick-reference/) <sub>Kubernetes · documentation · free</sub>
- [CKAD Curriculum v1.35 (official)](https://github.com/cncf/curriculum) <sub>CNCF · documentation · free</sub>

</details>

### 2. Learn Pods, workload resources and multi-container patterns

<sub>**~20 hours**</sub>

The first 20%. Know which workload resource fits a described job — a batch task is a Job, a nightly task is a CronJob — and be able to write an init container and a sidecar from memory. These are generated fast with kubectl run and then edited, not typed from scratch.

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [Pods](https://kubernetes.io/docs/concepts/workloads/pods/) <sub>Kubernetes · documentation · free</sub>
- [Init Containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) <sub>Kubernetes · documentation · free</sub>
- [Sidecar Containers](https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/) <sub>Kubernetes · documentation · free</sub>
- [CronJob](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/) <sub>Kubernetes · documentation · free</sub>
- **Kubernetes: Up and Running** <sub>Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson · book · paid</sub> — free alternative: [Kubernetes Documentation — Concepts](https://kubernetes.io/docs/concepts/)

</details>

### 3. Drill the configuration and security domain — it is the largest

<sub>**~22 hours**</sub>

At 25% this is the biggest single block of marks, and it is almost all mechanical: mount a ConfigMap as a volume, inject a Secret as an env var, set a securityContext runAsUser, apply a resource quota. Practise each mounting style until you stop looking it up, because each lookup costs a minute you need elsewhere.

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/) <sub>Kubernetes · documentation · free</sub>
- [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) <sub>Kubernetes · documentation · free</sub>
- [Configure a Security Context for a Pod or Container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) <sub>Kubernetes · documentation · free</sub>
- [Resource Quotas](https://kubernetes.io/docs/concepts/policy/resource-quotas/) <sub>Kubernetes · documentation · free</sub>
- [Custom Resources and CRDs](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) <sub>Kubernetes · documentation · free</sub>

</details>

### 4. Cover deployment, Helm and Kustomize

<sub>**~16 hours**</sub>

Rolling updates and rollbacks are reliable marks. Blue/green and canary are asked as primitives — two Deployments and a Service selector you edit — not as a product feature. Helm appears as install, upgrade and rollback of an existing chart, so learn the CLI rather than chart authoring.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [Deployments — rolling updates and rollbacks](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) <sub>Kubernetes · documentation · free</sub>
- [Using Helm](https://helm.sh/docs/intro/using_helm/) <sub>Helm · documentation · free</sub>
- [Declarative Management using Kustomize](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/) <sub>Kubernetes · documentation · free</sub>

</details>

### 5. Cover networking, probes and debugging

<sub>**~20 hours**</sub>

Services, Ingress and NetworkPolicies are 20%, and observability another 15%. Deliberately break your own app — wrong selector, wrong targetPort, a probe that fails — and fix it from kubectl describe and logs alone. That symptom-to-cause mapping is what makes the debugging tasks quick.

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Service](https://kubernetes.io/docs/concepts/services-networking/service/) <sub>Kubernetes · documentation · free</sub>
- [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) <sub>Kubernetes · documentation · free</sub>
- [Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/) <sub>Kubernetes · documentation · free</sub>
- [Configure Liveness, Readiness and Startup Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) <sub>Kubernetes · documentation · free</sub>
- [Debug Running Pods](https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/) <sub>Kubernetes · documentation · free</sub>

</details>

### 6. Take timed simulations until you finish with time left

<sub>**~14 hours**</sub>

Two hours, 15-20 tasks, only kubernetes.io, the Kubernetes blog and helm.sh open. Start with the free Killercoda scenarios, then sit a full simulator. Score the run on how many tasks you finished, not just how many you got right — unfinished is the usual failure mode.

<details><summary><b>Resources</b> — 4, of which 3 free</summary>

- [Killer Shell CKAD — free interactive scenarios](https://killercoda.com/killer-shell-ckad) <sub>Killercoda · tutorial · free</sub>
- [Important Instructions — CKA and CKAD](https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad) <sub>The Linux Foundation · documentation · free</sub>
- [Certification Resources Allowed](https://docs.linuxfoundation.org/tc-docs/certification/certification-resources-allowed) <sub>The Linux Foundation · documentation · free</sub>
- [Killer.sh CKAD Simulator](https://killer.sh/ckad) <sub>Killer.sh · course · paid</sub>

</details>

## Where this fits

[Platform Engineer](../roadmaps/platform-engineer.md) · [DevOps Engineer](../roadmaps/devops-engineer.md)

## Questions

<details><summary><b>Is the CKAD exam hard?</b></summary><br>

The difficulty is almost entirely execution under a clock, not concept difficulty: 15-20 tasks in 120 minutes is roughly six minutes each, and most people who fail knew every concept involved but typed too slowly or wrote YAML by hand instead of generating it. Nothing in the curriculum is obscure — it is core Kubernetes objects you already use if you deploy to Kubernetes at work.

</details>

<details><summary><b>Should I take the CKAD or the CKA?</b></summary><br>

CKAD is about the application on the cluster — manifests, ConfigMaps and Secrets, probes, exposing a Deployment through a Service and Ingress — while CKA is about running the cluster itself, including bootstrapping, etcd and a broken kubelet. Pick CKAD if you ship services onto a cluster someone else runs, and if you plan to do both, take CKAD first since it is the gentler exam and most of its material is a prerequisite for the CKA.

</details>

<details><summary><b>What domains does the CKAD exam cover, and which one carries the most weight?</b></summary><br>

Application Environment, Configuration and Security is the largest single block at 25%, covering CRDs and Operators, authentication and admission control, resource quotas, ConfigMaps, Secrets, ServiceAccounts and SecurityContexts. The rest splits across Application Design and Build (20%), Application Deployment (20%), Services and Networking (20%), and Application Observability and Maintenance (15%).

</details>

<details><summary><b>Can I use documentation during the CKAD exam?</b></summary><br>

Yes — kubernetes.io/docs, the Kubernetes blog and helm.sh/docs are open and you may search within them, but you may not open an external search result. Two or three lookups are fine, but ten will cost you the exam, since each one eats into the roughly six minutes you have per task.

</details>

<details><summary><b>How much does the CKAD exam cost, and what happens if I fail?</b></summary><br>

The exam costs $445 USD, which includes one free retake and twelve months to schedule it, and the certification stays valid for two years once you pass. That makes a slightly early first attempt a cheap way to find out which domains still need work.

</details>

<details><summary><b>What should my CKAD prep path actually cover?</b></summary><br>

Start with a throwaway kind cluster and fast shell habits like kubectl aliases and --dry-run=client -o yaml, then work through Pods and multi-container patterns, the configuration and security domain, deployment strategies with Helm and Kustomize, and networking, probes and debugging. Finish with timed simulations, scoring yourself on how many tasks you finished rather than just how many you got right, since unfinished tasks are the usual failure mode.

</details>

---

<sub>Source of truth: [`data/certifications/ckad.yaml`](../data/certifications/ckad.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
