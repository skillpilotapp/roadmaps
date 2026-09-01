<!-- Generated from data/certifications/cka.yaml by tools/render-markdown.mjs. Do not edit. -->

# Certified Kubernetes Administrator (CKA)

> A hands-on, performance-based certification proving you can install, configure, and troubleshoot production Kubernetes clusters from the command line.

**The Linux Foundation / CNCF** · code `CKA` · **$445 USD** · 2 hours · pass 66% · valid 2 years · updated 2026-08-10

The CKA is respected because it cannot be passed by memorising answers. You solve real cluster problems from a command line in two hours, so passing is a signal that you can operate Kubernetes rather than describe it.

## What the weights tell you to study

Troubleshooting alone is 30%, which is the exam telling you what the job actually is: diagnosing why something broke, not building green-field clusters. Add Cluster Architecture at 25% and over half the marks sit in two domains. A candidate who has only practised happy-path deployments will run out of time.

Study in weight order rather than curriculum order. The official ordering starts with architecture and says nothing about where the marks are.

## What the exam is actually like

**Time is the constraint, not knowledge.** Most people who fail knew the material and typed too slowly. Every candidate report says the same thing, and it is why the prep path puts shell setup on day one rather than treating it as a detail — `kubectl` aliases, completion and `--dry-run=client -o yaml` need two months of use to become automatic under pressure.

**You get the documentation, and it will not save you.** The permitted resources are the kubernetes.io docs and the Gateway API docs, including translations — you may search within them, but you may not open an external search result. Candidates who have not internalised the material lose the exam to searching, because reading a page you have never read before costs minutes you do not have.

**Tasks are independent and unevenly weighted.** Each one states its weight. Skipping a hard 4% task to bank two easy 7% ones is the correct call, and it is a decision worth practising in simulations rather than discovering live.

**Context switching is real.** Tasks run against different clusters and you must switch context between them. Solving a task perfectly in the wrong cluster scores zero, and it happens to people every sitting.

## Where the marks are lost

Networking is the domain that surprises people: services, ingress and network policies fail in ways that look identical from `kubectl get` output and are diagnosed completely differently. etcd backup and restore is the opposite case — purely procedural, worth full marks, and reliably present, which makes drilling it the highest-return hour of preparation on the whole exam.

## Before you book

The exam is valid for two years, and the fee includes one free retake. That changes the calculation: sitting it slightly under-prepared is a cheaper mistake than most certifications allow, and the first attempt tells you exactly which domains need work.

Budget real hands-on hours against a multi-node cluster. Reading will not get you through performance-based tasks in two hours.

## The exam

| | |
|---|---|
| Code | `CKA` |
| Cost | **$445 USD** |
| Duration | 2 hours |
| Passing score | 66% |
| Valid for | 2 years |
| Format | Online, proctored, performance-based (command-line tasks on a live Kubernetes cluster) |

<sub>Cost from Linux Foundation Training & Certification — CKA certification pricing page (training.linuxfoundation.org), read on 2026-08-04. Prices change and this one is not re-read continuously — check the provider before paying.</sub>

## What the exam weights

The blueprint decides where study time goes. These are the published weights.

| Domain | Weight | |
|---|---:|---|
| Troubleshooting | 30% | `██████░░░░░░░░░░░░░░` |
| Cluster Architecture, Installation & Configuration | 25% | `█████░░░░░░░░░░░░░░░` |
| Services & Networking | 20% | `████░░░░░░░░░░░░░░░░` |
| Workloads & Scheduling | 15% | `███░░░░░░░░░░░░░░░░░` |
| Storage | 10% | `██░░░░░░░░░░░░░░░░░░` |

<details><summary><b>Cluster Architecture, Installation & Configuration</b> — 25%</summary>

- Role-based access control (RBAC)
- Bootstrapping a cluster with kubeadm
- High-availability cluster topology
- etcd backup and restore
- Managing the Kubernetes API server and control plane components

</details>

<details><summary><b>Workloads & Scheduling</b> — 15%</summary>

- Deployments and rolling updates/rollbacks
- ConfigMaps and Secrets
- Resource limits, requests, and autoscaling
- Manifest management with Kustomize and Helm
- Node affinity, taints, and tolerations

</details>

<details><summary><b>Services & Networking</b> — 20%</summary>

- Host networking configuration
- Cluster networking and the Container Network Interface (CNI)
- ClusterIP, NodePort, and LoadBalancer services
- Ingress controllers and rules
- Network policies

</details>

<details><summary><b>Storage</b> — 10%</summary>

- Persistent volumes and persistent volume claims
- Storage classes and dynamic provisioning
- Volume access modes
- Configuring applications with persistent storage

</details>

<details><summary><b>Troubleshooting</b> — 30%</summary>

- Diagnosing cluster component failures
- Monitoring cluster and application resource usage
- Managing and analyzing logs
- Troubleshooting services and networking
- Troubleshooting application and node failures

</details>

## Before you book it

- Comfortable with Linux command-line administration
- Basic understanding of containers and Docker

## How to prepare

7 steps, **about 120 hours** in total.

### 1. Set up a real multi-node cluster

<sub>**~8 hours**</sub>

Install kubeadm on 2-3 VMs so you have somewhere to break things. kind or minikube work for single-node practice, but node-level failures — a kubelet that will not start, a node stuck NotReady — are a third of the exam and need more than one node to reproduce.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [Creating a cluster with kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/) <sub>Kubernetes · documentation · free</sub>
- [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) <sub>Kelsey Hightower · tutorial · free</sub>
- [kind (Kubernetes in Docker)](https://kind.sigs.k8s.io/) <sub>Kubernetes SIGs · documentation · free</sub>

</details>

### 2. Configure your shell before studying anything else

<sub>**~2 hours**</sub>

Set up the kubectl alias, completion and the --dry-run=client -o yaml habit on day one, then use them for every subsequent step. Candidates lose the exam on typing speed, not knowledge, and two months of practice with the shortcuts is what makes them automatic under time pressure.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/quick-reference/) <sub>Kubernetes · documentation · free</sub>
- [kubectl Quick Reference — aliases and completion](https://kubernetes.io/docs/reference/kubectl/quick-reference/) <sub>Kubernetes · documentation · free</sub>

</details>

### 3. Study Troubleshooting and Cluster Architecture first

<sub>**~45 hours**</sub>

These two domains are 55% of the score, and they are the ones you cannot cram. Work them in weight order rather than in curriculum order — the official ordering starts with architecture but says nothing about where the marks are.

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Kubernetes Documentation](https://kubernetes.io/docs/home/) <sub>Kubernetes · documentation · free</sub>
- [Troubleshooting Clusters](https://kubernetes.io/docs/tasks/debug/debug-cluster/) <sub>Kubernetes · documentation · free</sub>
- [Debug Running Pods](https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/) <sub>Kubernetes · documentation · free</sub>
- [CKA Curriculum (official)](https://github.com/cncf/curriculum) <sub>CNCF · documentation · free</sub>

</details>

### 4. Cover Networking, Workloads and Storage

<sub>**~35 hours**</sub>

The remaining 45%. Networking is where most candidates lose marks they expected to keep — services, ingress and network policies each fail in ways that look identical from kubectl get output and are diagnosed completely differently.

<details><summary><b>Resources</b> — 4, of which 3 free</summary>

- [Services, Load Balancing, and Networking](https://kubernetes.io/docs/concepts/services-networking/) <sub>Kubernetes · documentation · free</sub>
- [Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/) <sub>Kubernetes · documentation · free</sub>
- [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) <sub>Kubernetes · documentation · free</sub>
- **Kubernetes: Up and Running** <sub>Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson · book · paid</sub> — free alternative: [Kubernetes Documentation — Concepts](https://kubernetes.io/docs/concepts/)

</details>

### 5. Practise etcd backup and restore until it is muscle memory

<sub>**~6 hours**</sub>

It appears regularly, it is worth full marks, and it is entirely procedural — which makes it the highest-return single task on the exam. Restore into a broken cluster rather than only taking snapshots of a healthy one, because that is the version that gets asked.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [Operating etcd clusters for Kubernetes](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/) <sub>Kubernetes · documentation · free</sub>
- [Backing up an etcd cluster](https://etcd.io/docs/latest/op-guide/recovery/) <sub>etcd · documentation · free</sub>

</details>

### 6. Break your own cluster on purpose

<sub>**~12 hours**</sub>

Stop the kubelet, corrupt a manifest, exhaust a node's memory, apply a network policy that blocks the traffic you need. Diagnosing a failure someone else caused is the exam; diagnosing one you caused is how you learn the symptom-to-cause mapping fast enough.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [Troubleshooting kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/) <sub>Kubernetes · documentation · free</sub>
- [Monitoring, Logging, and Debugging](https://kubernetes.io/docs/tasks/debug/) <sub>Kubernetes · documentation · free</sub>

</details>

### 7. Take full-length timed simulations

<sub>**~12 hours**</sub>

Two hours, a timer, and only the official documentation open — the exam permits kubernetes.io and nothing else. Review every missed task and, more importantly, every task you got right slowly, because time is the constraint that fails prepared candidates.

<details><summary><b>Resources</b> — 3, of which 2 free</summary>

- [Killer.sh CKA Simulator](https://killer.sh/cka) <sub>Killer.sh · course · paid</sub>
- [CKA Exam Candidate Handbook](https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2) <sub>The Linux Foundation · documentation · free</sub>
- [Important Instructions — CKA and CKAD](https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-cka-and-ckad) <sub>The Linux Foundation · documentation · free</sub>

</details>

## Where this fits

[DevOps Engineer](../roadmaps/devops-engineer.md) · [Platform Engineer](../roadmaps/platform-engineer.md) · [Site Reliability Engineer](../roadmaps/sre.md) · [Cloud Architect](../roadmaps/cloud-architect.md)

## Questions

<details><summary><b>Is the CKA exam hard?</b></summary><br>

It is hard in a specific way: the material is not obscure, but the exam is two hours of live command-line tasks against a real cluster, and most candidates who fail knew the content and typed too slowly. Time is the constraint, not knowledge — which is why the prep path treats shell setup (kubectl aliases, completion, --dry-run=client -o yaml) as day-one work rather than a detail.

</details>

<details><summary><b>What domains does the CKA exam cover, and what should I study first?</b></summary><br>

Troubleshooting is 30% of the score and Cluster Architecture, Installation & Configuration is 25% — together over half the exam. Study in that weight order rather than the official curriculum order, which starts with architecture but says nothing about where the marks actually are. The remaining 45% splits across Services & Networking (20%), Workloads & Scheduling (15%), and Storage (10%).

</details>

<details><summary><b>Where do most candidates lose marks on the CKA?</b></summary><br>

Networking is the domain that surprises people: services, ingress and network policies fail in ways that look identical from kubectl get output but are diagnosed completely differently. etcd backup and restore is the opposite case — purely procedural and reliably present, which makes drilling it the highest-return single hour of preparation on the whole exam.

</details>

<details><summary><b>Can I use documentation during the CKA exam?</b></summary><br>

Yes — the permitted resources are the kubernetes.io docs and the Gateway API docs, including translations, and you may search within them. It will not save an unprepared candidate: you may not open an external search result, and reading a page you have never read before costs minutes you do not have in a two-hour exam.

</details>

<details><summary><b>What happens if I fail the CKA on my first attempt?</b></summary><br>

The certification fee includes one free retake, and the credential is valid for two years once you pass. That changes the calculation — sitting the exam slightly under-prepared is a cheaper mistake than most certifications allow, and a first attempt tells you exactly which domains need more work before the retake.

</details>

<details><summary><b>Do I need a multi-node cluster to prepare for the CKA?</b></summary><br>

Yes. Single-node tools like kind or minikube work for practising deployments, but node-level failures — a kubelet that will not start, a node stuck NotReady — are roughly a third of the exam's Troubleshooting domain and cannot be reproduced with only one node. Setting up 2-3 VMs with kubeadm is the first step in the prep path for that reason.

</details>

---

<sub>Source of truth: [`data/certifications/cka.yaml`](../data/certifications/cka.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
