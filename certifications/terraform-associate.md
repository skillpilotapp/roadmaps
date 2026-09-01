<!-- Generated from data/certifications/terraform-associate.yaml by tools/render-markdown.mjs. Do not edit. -->

# HashiCorp Certified Terraform Associate

> A multiple-choice certification validating foundational Terraform skills — infrastructure as code concepts, the core workflow, configuration language, modules, and state management.

**HashiCorp** · code `TA-004` · **$70.50 USD plus applicable taxes** · 1 hour · pass Not publicly disclosed by HashiCorp (scaled scoring model) · valid 2 years · updated 2026-08-10

The Terraform Associate is the common entry-level infrastructure-as-code certification for DevOps and platform engineers. It is deliberately broad rather than deep: one hour, multiple choice, testing whether you understand Terraform's core workflow, configuration language, modules and state well enough to use it safely on a team.

## The weights on this page are ours, not HashiCorp's

**HashiCorp does not publish percentage weights per objective**, unlike the Linux Foundation for the CKA. The eight objectives above come directly from HashiCorp's own exam review, but the percentages are SkillPilot's estimate, calculated proportionally from the number of published sub-objectives in each domain so study time can be allocated sensibly.

Treat them as a prioritisation aid, not an official figure. What is safe to conclude is directional: Terraform Configuration and Core Workflow carry the largest share of sub-objectives and are the safest places to over-invest.

## Which version to study

The 003 exam retired on 8 January 2026. **TA-004 is the current version**, and study material written for 003 is now out of date — a real risk, because a great deal of third-party CKA-style prep content for Terraform still targets the retired exam. Check the version on anything you buy.

## What the exam is actually like

**It rewards having typed the commands.** The questions describe a situation and ask which command applies. Someone who has run `terraform plan` and read the output recognises the scenario; someone who has only read about it is matching keywords and will be caught by the distractors.

**State is where solo users lose marks.** Locking, drift, `import` and the `state` subcommands only ever come up when someone else is applying to the same infrastructure. If you have only used Terraform alone, this is the domain to over-prepare.

**HCP Terraform appears more than people expect.** Workspaces, remote runs, the private registry and Sentinel are HashiCorp's own platform, and the exam covers them. Candidates who use only the open-source CLI reliably underestimate this.

**The distractors are plausible.** Answers distinguish between reasonable options rather than between right and obviously wrong, which is why reviewing the reasoning behind answers you got right is worth as much as reviewing the ones you missed.

## Before you book

Unlike the CKA, **no retake is included** — each attempt is paid. That makes the sample questions under real time pressure a cheaper diagnostic than a second sitting, and it is the argument for running the full core workflow hands-on before you touch practice questions at all.

## The exam

| | |
|---|---|
| Code | `TA-004` |
| Cost | **$70.50 USD plus applicable taxes** |
| Duration | 1 hour |
| Passing score | Not publicly disclosed by HashiCorp (scaled scoring model) |
| Valid for | 2 years |
| Format | Online, proctored, multiple choice / multiple answer / true-false |

<sub>Cost from HashiCorp Developer — Infrastructure Automation Certification page (developer.hashicorp.com/certifications/infrastructure-automation), read on 2026-08-04. Prices change and this one is not re-read continuously — check the provider before paying.</sub>

## What the exam weights

The blueprint decides where study time goes. These are the published weights.

| Domain | Weight | |
|---|---:|---|
| Terraform Configuration | 22% | `████░░░░░░░░░░░░░░░░` |
| Core Terraform Workflow | 19% | `████░░░░░░░░░░░░░░░░` |
| Terraform Fundamentals | 11% | `██░░░░░░░░░░░░░░░░░░` |
| Terraform Modules | 11% | `██░░░░░░░░░░░░░░░░░░` |
| Terraform State Management | 11% | `██░░░░░░░░░░░░░░░░░░` |
| HCP Terraform | 10% | `██░░░░░░░░░░░░░░░░░░` |
| Infrastructure as Code (IaC) with Terraform | 8% | `██░░░░░░░░░░░░░░░░░░` |
| Maintain Infrastructure with Terraform | 8% | `██░░░░░░░░░░░░░░░░░░` |

<details><summary><b>Infrastructure as Code (IaC) with Terraform</b> — 8%</summary>

- Explain what IaC is
- Describe the advantages of IaC patterns
- Explain how Terraform manages multi-cloud and hybrid-cloud workflows

</details>

<details><summary><b>Terraform Fundamentals</b> — 11%</summary>

- Install and version Terraform providers
- Describe how Terraform uses providers
- Write configuration using multiple providers
- Explain how Terraform uses and manages state

</details>

<details><summary><b>Core Terraform Workflow</b> — 19%</summary>

- Describe the Terraform workflow
- Initialize a Terraform working directory
- Validate a Terraform configuration
- Generate and review an execution plan
- Apply changes to infrastructure
- Destroy Terraform-managed infrastructure
- Apply formatting and style conventions

</details>

<details><summary><b>Terraform Configuration</b> — 22%</summary>

- Use and differentiate resource and data blocks
- Reference resource attributes and create cross-resource references
- Use variables and outputs
- Understand and use complex types
- Write dynamic configuration using expressions and functions
- Define resource dependencies
- Validate configuration using custom conditions
- Apply best practices for managing sensitive data

</details>

<details><summary><b>Terraform Modules</b> — 11%</summary>

- Explain how Terraform sources modules
- Describe variable scope within modules
- Use modules in configuration
- Manage module versions

</details>

<details><summary><b>Terraform State Management</b> — 11%</summary>

- Describe the local backend
- Describe state locking
- Configure remote state using the backend block
- Manage resource drift and Terraform state

</details>

<details><summary><b>Maintain Infrastructure with Terraform</b> — 8%</summary>

- Import existing infrastructure into a Terraform workspace
- Use the CLI to inspect state
- Describe when and how to use verbose logging

</details>

<details><summary><b>HCP Terraform</b> — 10%</summary>

- Use HCP Terraform to create infrastructure
- Describe HCP Terraform collaboration and governance features
- Organize and use HCP Terraform workspaces and projects
- Configure and use HCP Terraform integrations

</details>

## Before you book it

- Basic familiarity with at least one cloud provider (AWS, Azure, or GCP)
- Comfortable with the command line

## How to prepare

7 steps, **about 58 hours** in total.

### 1. Install Terraform and run the core workflow end to end

<sub>**~4 hours**</sub>

Install the Terraform CLI, write a minimal configuration for a single resource, and run init, validate, plan, apply, and destroy so the core workflow is muscle memory before you study anything else.

<details><summary><b>Resources</b> — 1, of which 1 free</summary>

- [Terraform CLI Documentation](https://developer.hashicorp.com/terraform/cli) <sub>HashiCorp · documentation · free</sub>

</details>

### 2. Study the official exam objectives in order

<sub>**~20 hours**</sub>

Work through HashiCorp's own exam review tutorial covering all 8 objectives, since it is the closest thing to an official study outline HashiCorp publishes.

<details><summary><b>Resources</b> — 1, of which 1 free</summary>

- [Terraform Associate 004 Exam Review](https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-review-004) <sub>HashiCorp · tutorial · free</sub>

</details>

### 3. Build a multi-resource configuration with variables, outputs, and a module

<sub>**~10 hours**</sub>

Write a configuration provisioning at least 3 related resources, using input variables and outputs, and calling one reusable module. Configuration language and modules together are the largest share of the exam, and the questions test whether you have written this rather than read about it.

<details><summary><b>Resources</b> — 4, of which 3 free</summary>

- [Terraform Module Documentation](https://developer.hashicorp.com/terraform/language/modules) <sub>HashiCorp · documentation · free</sub>
- [Terraform Registry — public modules](https://registry.terraform.io/) <sub>HashiCorp · documentation · free</sub>
- [Terraform Language Documentation](https://developer.hashicorp.com/terraform/language) <sub>HashiCorp · documentation · free</sub>
- **Terraform: Up & Running** <sub>Yevgeniy Brikman · book · paid</sub> — free alternative: [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)

</details>

### 4. Configure remote state and practise state operations

<sub>**~8 hours**</sub>

Set up a remote backend, cause state drift deliberately, and recover from it with terraform state and terraform import. State is where the exam separates people who have run Terraform on a team from people who have run it alone — locking, drift and import only come up when someone else is also applying.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [Terraform State Documentation](https://developer.hashicorp.com/terraform/language/state) <sub>HashiCorp · documentation · free</sub>
- [State Locking](https://developer.hashicorp.com/terraform/language/state/locking) <sub>HashiCorp · documentation · free</sub>
- [Import existing infrastructure](https://developer.hashicorp.com/terraform/tutorials/state/state-import) <sub>HashiCorp · tutorial · free</sub>

</details>

### 5. Learn what each CLI command does to state, not just what it outputs

<sub>**~6 hours**</sub>

The exam asks which command you would use in a described situation. taint, replace, refresh, -target and the state subcommands all get tested, and knowing the flag is not the same as knowing what it changes on disk.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [Terraform CLI Command Reference](https://developer.hashicorp.com/terraform/cli/commands) <sub>HashiCorp · documentation · free</sub>
- [Manage resources in state](https://developer.hashicorp.com/terraform/tutorials/state/state-cli) <sub>HashiCorp · tutorial · free</sub>

</details>

### 6. Cover HCP Terraform and the workflow questions

<sub>**~6 hours**</sub>

A recurring share of the exam is about HashiCorp's own platform — workspaces, remote runs, private registry, Sentinel policies — and about when a team workflow beats a local one. It is the part candidates who only use Terraform solo consistently miss.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [HCP Terraform Documentation](https://developer.hashicorp.com/terraform/cloud-docs) <sub>HashiCorp · documentation · free</sub>
- [Terraform Workspaces](https://developer.hashicorp.com/terraform/language/state/workspaces) <sub>HashiCorp · documentation · free</sub>

</details>

### 7. Sit the official sample questions under time

<sub>**~4 hours**</sub>

One hour for the real thing, so practise at that pace. Review the reasoning behind every answer, including the ones you got right — the exam distinguishes between plausible options rather than between right and obviously wrong ones.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [Terraform Associate 004 Sample Questions](https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-questions-004) <sub>HashiCorp · tutorial · free</sub>
- [Terraform Associate 004 Study Guide](https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-study-004) <sub>HashiCorp · tutorial · free</sub>

</details>

## Where this fits

[DevOps Engineer](../roadmaps/devops-engineer.md) · [Platform Engineer](../roadmaps/platform-engineer.md) · [Cloud Architect](../roadmaps/cloud-architect.md)

## Questions

<details><summary><b>Is the Terraform Associate exam hard?</b></summary><br>

It is deliberately broad rather than deep: one hour, multiple choice, testing whether you understand Terraform's core workflow, configuration language, modules and state well enough to use it safely on a team. It rewards having actually typed the commands — the questions describe a situation and ask which one applies, and someone who has only read about `terraform plan` is matching keywords and gets caught by the distractors.

</details>

<details><summary><b>What domains does the Terraform Associate exam cover, and are the percentages official?</b></summary><br>

There are eight objectives from HashiCorp's own exam review, but HashiCorp does not publish percentage weights per objective the way the Linux Foundation does for the CKA. The weights shown here are SkillPilot's estimate, calculated proportionally from the number of published sub-objectives in each domain, and should be treated as a prioritisation aid rather than an official figure — directionally, Terraform Configuration and Core Workflow carry the largest share of sub-objectives.

</details>

<details><summary><b>Should I study for the TA-003 or TA-004 exam?</b></summary><br>

TA-004 is the current version — the 003 exam retired on 8 January 2026. A great deal of third-party prep content still targets the retired exam, so check the version on anything you buy before studying from it.

</details>

<details><summary><b>Where do most candidates lose marks on the Terraform Associate exam?</b></summary><br>

State is where solo users lose marks: locking, drift, import and the state subcommands only come up when someone else is also applying to the same infrastructure, so if you have only used Terraform alone, over-prepare that domain. HCP Terraform also appears more than people expect — workspaces, remote runs, the private registry and Sentinel are covered, and candidates who only use the open-source CLI reliably underestimate this part.

</details>

<details><summary><b>Can I retake the Terraform Associate exam for free if I fail?</b></summary><br>

No — unlike the CKA, no retake is included, and each attempt is paid. That makes running the official sample questions under real time pressure a cheaper diagnostic than a second sitting, which is why the prep path puts hands-on practice with the full core workflow before practice questions.

</details>

<details><summary><b>What should I actually practise before taking the exam?</b></summary><br>

Install the Terraform CLI and run init, validate, plan, apply and destroy end to end before studying anything else, then write a configuration with at least 3 related resources using variables, outputs and a reusable module. After that, set up a remote backend and deliberately cause and recover from state drift, since Configuration Language, Modules and State together cover most of what the exam tests hands-on.

</details>

---

<sub>Source of truth: [`data/certifications/terraform-associate.yaml`](../data/certifications/terraform-associate.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
