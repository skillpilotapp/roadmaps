<!-- Generated from data/roadmaps/network-automation-engineer.yaml by tools/render-markdown.mjs. Do not edit. -->

# Network Automation Engineer Roadmap

> A path from configuring switches by hand to running a network as code — Python, structured device APIs, Ansible, a source of truth, automated testing, and telemetry that closes the loop.

**Intermediate** · **10 phases** · **7-10 months at 10h/week** · updated 2026-08-17

Network automation is usually sold as "learn Python and Ansible". That framing produces engineers who can push a config to fifty devices and cannot tell you whether they should have.

The order here reflects the real constraint: **the hard part is not pushing configuration, it is knowing what the configuration should be**. That is why version control comes before scripting, and why the source of truth arrives before the tooling that scales. A fast automation reading bad data is a fast way to break a network.

The phase most people skip is testing. It is also the one that separates a scripter from an engineer, because it is what makes a change reversible before it is made rather than after.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$105,017` | Glassdoor Network Automation Engineer salary, 25th percentile of the US range (93 salaries) | 2026-08-17 |
| Mid | `$130,170` | Glassdoor Network Automation Engineer salary, US average (93 salaries) | 2026-08-17 |
| Senior | `$157,504` | Glassdoor Senior Network Automation Engineer salary, US average | 2026-08-17 |

Total duration is **7-10 months at 10h/week** — <sub>SkillPilot editorial estimate, 2026-08-17</sub>

## Before you start

- Working knowledge of TCP/IP, routing and switching
- Comfortable configuring at least one vendor's devices from the CLI
- Basic Linux command line

## The path

| # | Phase | Duration |
|---:|---|---|
| 1 | [Version Control Before Automation](#1-version-control-first) | 3 weeks |
| 2 | [Python for Network Engineers](#2-python-for-networks) | 6 weeks |
| 3 | [Talking to Devices Without the CLI](#3-device-apis) | 5 weeks |
| 4 | [Configuration Management with Ansible](#4-ansible-for-networks) | 6 weeks |
| 5 | [A Source of Truth Worth Trusting](#5-source-of-truth) | 6 weeks |
| 6 | [A Lab You Can Destroy](#6-virtual-labs) | 4 weeks |
| 7 | [Testing Network Changes Before They Ship](#7-testing-and-ci) | 6 weeks |
| 8 | [When Ansible Stops Being Enough](#8-scaling-beyond-ansible) | 5 weeks |
| 9 | [Telemetry and Closing the Loop](#9-telemetry-and-closed-loop) | 5 weeks |
| 10 | [Automation as a Product, Not a Side Project](#10-automation-at-scale) | 5 weeks |

---

### <a id="1-version-control-first"></a>1. Version Control Before Automation

<sub>**3 weeks**</sub>

Put every configuration you own into Git before writing a line of automation. Learn branches, diffs, pull requests and rollback with real device configs as the payload. Done when you can point at a commit and say what changed on which device, when, and who approved it — without opening a ticket system.

<b>Skills</b> — `Git branching and merging` · `Reading and writing diffs` · `Pull request review workflow` · `Configuration backup automation` · `Semantic commit history` · `Secrets handling in repositories` · `Markdown documentation`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Back up the running configuration of every device you own into a Git repository on a nightly schedule
- Reconstruct what changed on a device over the last month using only the commit history
- Write a pull request template that forces a rollback plan for every network change
- Set up pre-commit hooks that reject a commit containing a plaintext password
- Document your topology as a file in the same repository as the configs it describes

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Pro Git (full book, free)](https://git-scm.com/book/en/v2) <sub>Git · book · free</sub>
- [Oxidized — network device configuration backup](https://github.com/ytti/oxidized) <sub>Oxidized · documentation · free</sub>
- [RANCID configuration management](https://shrubbery.net/rancid/) <sub>Shrubbery Networks · documentation · free</sub>
- [pre-commit framework](https://github.com/pre-commit/pre-commit) <sub>pre-commit · documentation · free</sub>

</details>

### <a id="2-python-for-networks"></a>2. Python for Network Engineers

<sub>**6 weeks**</sub>

Enough Python to parse, transform and generate — not enough to build a web app. Data structures, files, error handling, virtual environments and the standard library. Done when you can turn a directory of show-command output into a CSV that answers a question your manager asked.

<b>Skills</b> — `Python data structures and comprehensions` · `Working with JSON and YAML` · `Regular expressions for text parsing` · `Virtual environments and dependency pinning` · `Error handling and retries` · `Writing and running unit tests` · `Reading library documentation`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Parse the output of "show ip interface brief" from twenty devices into a single structured report
- Build an inventory script that flags every interface that has been down for more than 30 days
- Write a script that compares two configuration files and reports only semantic differences
- Generate a per-site VLAN allocation table from a YAML definition file
- Package one of your scripts with a pinned requirements file so a colleague can run it unchanged

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Python Tutorial (official)](https://docs.python.org/3/tutorial/) <sub>Python Software Foundation · documentation · free</sub>
- [TextFSM — template-based CLI output parsing](https://github.com/google/textfsm) <sub>Google · documentation · free</sub>
- [ntc-templates — TextFSM templates for network devices](https://github.com/networktocode/ntc-templates) <sub>Network to Code · documentation · free</sub>
- [Jinja2 template documentation](https://jinja.palletsprojects.com/) <sub>Pallets · documentation · free</sub>
- [pytest documentation](https://docs.pytest.org/) <sub>pytest · documentation · free</sub>

</details>

### <a id="3-device-apis"></a>3. Talking to Devices Without the CLI

<sub>**5 weeks**</sub>

Move from screen-scraping to structured interfaces: NETCONF, RESTCONF, gNMI and the YANG models underneath them. Learn where each is supported and where it is not, because vendor coverage is uneven and that is a planning constraint. Done when you can retrieve interface state as structured data from two different vendors.

<b>Skills</b> — `NETCONF and the XML data it returns` · `RESTCONF over HTTP` · `YANG data models` · `gNMI subscriptions` · `Netmiko for devices with no API` · `NAPALM multi-vendor abstraction` · `Certificate and credential management for device access`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Retrieve the full interface state from a device over NETCONF and store it as JSON
- Write the same query twice, once with RESTCONF and once by parsing CLI output, and compare reliability
- Use NAPALM to collect facts from three devices of different vendors with one script
- Subscribe to a gNMI stream and record how quickly a link-down event arrives compared with SNMP polling
- Map which of your device models support NETCONF, and which are stuck on SSH, into a table you can plan from

</details>

<details><summary><b>Resources</b> — 6, of which 6 free</summary>

- [RFC 6241 — Network Configuration Protocol (NETCONF)](https://datatracker.ietf.org/doc/html/rfc6241) <sub>IETF · documentation · free</sub>
- [RFC 8040 — RESTCONF Protocol](https://datatracker.ietf.org/doc/html/rfc8040) <sub>IETF · documentation · free</sub>
- [OpenConfig models and gNMI](https://www.openconfig.net/) <sub>OpenConfig · documentation · free</sub>
- [Netmiko documentation](https://github.com/ktbyers/netmiko) <sub>Kirk Byers · documentation · free</sub>
- [NAPALM documentation](https://napalm.readthedocs.io/) <sub>NAPALM · documentation · free</sub>
- [YANG Catalog](https://yangcatalog.org/) <sub>YANG Catalog · documentation · free</sub>

</details>

### <a id="4-ansible-for-networks"></a>4. Configuration Management with Ansible

<sub>**6 weeks**</sub>

The declarative layer most teams standardise on. Inventories, variables, templates, idempotence and check mode against network modules rather than servers. Done when you can push a change to fifty devices, run it twice, and have the second run report zero changes.

<b>Skills</b> — `Ansible inventories and group variables` · `Jinja2 configuration templating` · `Idempotence and check mode` · `Network collections and connection plugins` · `Ansible Vault for credentials` · `Roles and reusable structure` · `Limiting blast radius with serial and limit`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Template the full configuration of one device family from variables and render it for every site
- Deploy an NTP and syslog change to your whole estate with check mode first, then for real
- Write a role that is safe to run repeatedly and prove it with a second run that reports no changes
- Convert one manual change runbook into a playbook and delete the runbook
- Roll a change out in batches of five devices with an automatic stop on first failure

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Ansible network automation guide](https://docs.ansible.com/ansible/latest/network/getting_started/index.html) <sub>Red Hat · documentation · free</sub>
- [Ansible best practices for playbook structure](https://docs.ansible.com/ansible/latest/tips_tricks/ansible_tips_tricks.html) <sub>Red Hat · documentation · free</sub>
- [Ansible Vault](https://docs.ansible.com/ansible/latest/vault_guide/index.html) <sub>Red Hat · documentation · free</sub>
- [Ansible Galaxy network collections](https://galaxy.ansible.com/) <sub>Red Hat · documentation · free</sub>

</details>

### <a id="5-source-of-truth"></a>5. A Source of Truth Worth Trusting

<sub>**6 weeks**</sub>

Automation is only as good as the data it reads. Model your network in NetBox, define what is authoritative there rather than on the device, and reconcile the difference. Done when a device's configuration is generated from the source of truth and drift is reported rather than discovered.

<b>Skills</b> — `NetBox data model and object relationships` · `IPAM and prefix management` · `Defining authority — device versus database` · `Populating a source of truth from existing devices` · `Drift detection and reconciliation` · `Dynamic inventory from an API` · `Data validation and schema enforcement`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Model one site completely in NetBox — racks, devices, interfaces, cables, prefixes
- Import your existing IP allocations and find the conflicts the spreadsheet was hiding
- Drive an Ansible inventory dynamically from NetBox instead of a static file
- Generate a device configuration entirely from NetBox data with no per-device file
- Build a nightly job that reports every device whose running config differs from the generated one

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [NetBox documentation](https://netboxlabs.com/docs/netbox/) <sub>NetBox Labs · documentation · free</sub>
- [Nautobot documentation](https://docs.nautobot.com/) <sub>Network to Code · documentation · free</sub>
- [netbox-ansible collection](https://galaxy.ansible.com/ui/repo/published/netbox/netbox/) <sub>NetBox Community · documentation · free</sub>
- [pydantic — data validation in Python](https://docs.pydantic.dev/) <sub>Pydantic · documentation · free</sub>

</details>

### <a id="6-virtual-labs"></a>6. A Lab You Can Destroy

<sub>**4 weeks**</sub>

You cannot test network automation against production, and a physical lab does not scale to every change. Build reproducible virtual topologies with containerlab or GNS3 and treat the topology file as code. Done when you can spin up a copy of a production site from a file in under ten minutes.

<b>Skills</b> — `containerlab topologies` · `Containerised network operating systems` · `GNS3 or EVE-NG for image-based labs` · `Reproducible environment definition` · `Traffic generation and verification` · `Resource planning for lab hosts`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Define a three-tier topology as a containerlab file and bring it up from scratch
- Reproduce a production incident in the lab from the configs in your Git repository
- Run your Ansible playbooks against the lab before every production change for one month
- Automate lab teardown and rebuild so that every test starts from a known state
- Generate traffic across the lab and verify the path taken matches what the design claims

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [containerlab documentation](https://containerlab.dev/) <sub>containerlab · documentation · free</sub>
- [GNS3 — source and installation guides](https://github.com/GNS3/gns3-gui) <sub>GNS3 · documentation · free</sub>
- [Nokia SR Linux container image](https://github.com/nokia/srlinux-container-image) <sub>Nokia · documentation · free</sub>
- [Running Arista cEOS in containerlab](https://containerlab.dev/manual/kinds/ceos/) <sub>containerlab · documentation · free</sub>

</details>

### <a id="7-testing-and-ci"></a>7. Testing Network Changes Before They Ship

<sub>**6 weeks**</sub>

The step that separates scripting from engineering. Validate intent with Batfish, assert operational state with pytest, and run both in CI on every pull request. Done when a change that would black-hole a prefix is rejected by a pipeline rather than by a customer.

<b>Skills</b> — `Batfish configuration analysis` · `Pre-change validation and what-if analysis` · `Post-change state assertions` · `CI pipelines for network repositories` · `Linting configurations and playbooks` · `Test data and topology fixtures` · `Failing a pipeline safely`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Run Batfish against your config repository and list every unreachable ACL line it finds
- Write assertions that fail if BGP session count drops after a change
- Wire a CI pipeline that lints, renders and validates every pull request against the repo
- Prove the pipeline works by opening a pull request that would break routing and watching it fail
- Add a post-deploy verification stage that rolls back automatically on assertion failure

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Batfish documentation](https://batfish.readthedocs.io/) <sub>Batfish · documentation · free</sub>
- [pyATS and Genie documentation](https://developer.cisco.com/docs/pyats/) <sub>Cisco DevNet · documentation · free</sub>
- [GitHub Actions documentation](https://docs.github.com/en/actions) <sub>GitHub · documentation · free</sub>
- [ansible-lint](https://ansible.readthedocs.io/projects/lint/) <sub>Red Hat · documentation · free</sub>

</details>

### <a id="8-scaling-beyond-ansible"></a>8. When Ansible Stops Being Enough

<sub>**5 weeks**</sub>

At a few thousand devices, playbook runtime and rigid task structure become the constraint. Nornir keeps Python as the control flow and parallelises properly; know when the swap is justified and when it is résumé-driven. Done when you can state the device count at which your current tooling stops being the right answer.

<b>Skills</b> — `Nornir inventory and task model` · `Concurrency and thread pools` · `Async device interaction` · `Profiling and runtime measurement` · `Structured logging for bulk operations` · `Partial failure handling across many devices`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Reimplement your slowest Ansible playbook in Nornir and measure the runtime difference honestly
- Collect facts from a thousand simulated devices and record where the bottleneck actually is
- Handle a run where 3% of devices are unreachable without losing the results from the other 97%
- Emit structured logs from a bulk run that let you answer "which devices failed and why" from a query
- Write the decision note that says which tool your team should use, with the numbers behind it

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [Nornir documentation](https://nornir.readthedocs.io/) <sub>Nornir · documentation · free</sub>
- [Python concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html) <sub>Python Software Foundation · documentation · free</sub>
- [Scrapli — fast SSH for network devices](https://carlmontanari.github.io/scrapli/) <sub>Carl Montanari · documentation · free</sub>
- [structlog documentation](https://www.structlog.org/) <sub>structlog · documentation · free</sub>

</details>

### <a id="9-telemetry-and-closed-loop"></a>9. Telemetry and Closing the Loop

<sub>**5 weeks**</sub>

Automation that only pushes configuration is half a system. Stream telemetry, define what good looks like, alert on the gap, and let a verified remediation run itself. Done when one recurring manual fix has been replaced by an automation you trust enough to leave unattended.

<b>Skills</b> — `Streaming telemetry with gNMI` · `Time-series storage and querying` · `Alerting on network SLIs` · `Automated remediation with guardrails` · `Runbook automation and approval gates` · `Measuring automation reliability`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Stream interface counters from ten devices into a time-series database and graph the difference against SNMP
- Define three network SLIs and alert on burn rate rather than on raw thresholds
- Automate one recurring fix end to end, with a kill switch and an audit trail
- Record every time your automation acted and review a month of it for false positives
- Write the post-incident note for the first time your automation does the wrong thing

</details>

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [gNMI specification](https://github.com/openconfig/reference/blob/master/rpc/gnmi/gnmi-specification.md) <sub>OpenConfig · documentation · free</sub>
- [Prometheus documentation](https://prometheus.io/docs/introduction/overview/) <sub>Prometheus · documentation · free</sub>
- [Telegraf gNMI input plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/gnmi) <sub>InfluxData · documentation · free</sub>
- [Grafana documentation](https://grafana.com/docs/grafana/latest/) <sub>Grafana Labs · documentation · free</sub>

</details>

### <a id="10-automation-at-scale"></a>10. Automation as a Product, Not a Side Project

<sub>**5 weeks**</sub>

The last barrier is organisational. Who may run what, how a change is approved, what happens when the person who wrote the tooling leaves. Done when a colleague who did not build the automation can use it to make a production change safely, guided only by its documentation.

<b>Skills</b> — `Role-based access to automation` · `Change approval and audit trails` · `Self-service interfaces for other teams` · `Documentation that survives the author` · `Migration strategy for legacy devices` · `Measuring adoption rather than coverage`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Put your automation behind an interface a non-author can use, with permissions that mean something
- Write the runbook for what to do when the automation itself is the thing that broke
- Hand your tooling to a colleague, watch them use it, and fix only what they got stuck on
- Produce a migration plan for the devices that will never speak anything but SSH
- Report on how many changes went through automation versus by hand, monthly, and make the number public

</details>

<details><summary><b>Resources</b> — 4, of which 3 free</summary>

- [AWX — Ansible automation with RBAC and a web interface](https://ansible.readthedocs.io/projects/awx/) <sub>Red Hat · documentation · free</sub>
- [Network to Code open-source projects](https://networktocode.com/open-source/) <sub>Network to Code · documentation · free</sub>
- [Diátaxis — a framework for technical documentation](https://diataxis.fr/) <sub>Diátaxis · documentation · free</sub>
- **The Phoenix Project** <sub>Gene Kim, Kevin Behr, George Spafford · book · paid</sub> — free alternative: [The Three Ways: The Principles Underpinning DevOps](https://itrevolution.com/articles/the-three-ways-principles-underpinning-devops/)

</details>

## Questions

<details><summary><b>What does the Network Automation Engineer roadmap actually cover?</b></summary><br>

It runs from Git-based version control of device configs through Python for parsing and generating config, structured device APIs like NETCONF, RESTCONF and gNMI, Ansible for declarative configuration management, a NetBox source of truth, virtual labs with containerlab, CI testing with Batfish and pytest, scaling past Ansible with Nornir, closed-loop telemetry, and finally running automation as a trusted product for other teams.

</details>

<details><summary><b>How long does it take to become a network automation engineer?</b></summary><br>

SkillPilot's editorial estimate is 7-10 months at around 10 hours a week, spread across ten phases that range from 3 to 6 weeks each. The path assumes you already have working knowledge of TCP/IP, routing and switching, are comfortable configuring at least one vendor's devices from the CLI, and know basic Linux commands before starting.

</details>

<details><summary><b>How much does a network automation engineer earn?</b></summary><br>

In the US market, Glassdoor data puts entry-level pay at $105,017 (25th percentile), the average at $130,170, and senior roles averaging $157,504 — all figures retrieved 2026-08-17.

</details>

<details><summary><b>Why does this roadmap teach Git and version control before any scripting?</b></summary><br>

Because the real constraint in network automation is not pushing configuration, it is knowing what the configuration should be — a fast automation reading bad data just breaks the network faster. The first phase puts every configuration into Git, with branches, diffs, pull requests and rollback against real device configs, before any Python or Ansible is introduced.

</details>

<details><summary><b>Why does the roadmap treat testing as a separate, later phase instead of teaching it alongside Ansible?</b></summary><br>

Testing is presented as the phase most people skip, and also the one that separates a scripter from an engineer, because it makes a change reversible before it ships rather than after. It uses Batfish for pre-change validation and pytest-based assertions for post-change state, wired into CI so a change that would black-hole a prefix is rejected by a pipeline instead of by a customer.

</details>

<details><summary><b>When should a team move from Ansible to a tool like Nornir?</b></summary><br>

The roadmap frames this as a scale question rather than a preference: at a few thousand devices, playbook runtime and Ansible's rigid task structure become the real constraint. Nornir keeps Python as the control flow and parallelises properly, but the roadmap is explicit that the swap must be justified by measured runtime and device count, not made for résumé-driven reasons.

</details>

## Neighbouring paths

[Site Reliability Engineer](sre.md) · [Platform Engineer](platform-engineer.md) · [DevOps Engineer](devops-engineer.md) · [Observability Engineer](observability-engineer.md)

---

<sub>Source of truth: [`data/roadmaps/network-automation-engineer.yaml`](../data/roadmaps/network-automation-engineer.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
