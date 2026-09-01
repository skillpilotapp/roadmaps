<!-- Generated from data/certifications/lfcs.yaml by tools/render-markdown.mjs. Do not edit. -->

# Linux Foundation Certified System Administrator (LFCS)

> A performance-based Linux administration certification taken entirely from the command line, covering deployment, networking, storage, essential commands and user management on a live system.

**The Linux Foundation** · code `LFCS` · **$445 USD** · 2 hours · pass 67% · valid 2 years · updated 2026-08-17

The LFCS is the certification that answers "can this person actually run a Linux box?" — and it answers it the only way that means anything, by putting you at a command line on a live system for two hours and asking you to fix things.

## What the weights tell you to study

Operations Deployment and Networking are 25% each: half the exam sits in services, packages, containers, SELinux, firewalls and SSH. Storage and Essential Commands take 20% each, and Users and Groups only 10%.

That last number is the useful one. User and group administration is what most Linux courses teach first and dwell on longest, and it is worth a tenth of this exam. The marks are in the operational half — the parts a course covers in one late chapter and a job exercises daily.

The 2023 revision also made the exam **distribution-agnostic**: you no longer pick a platform when you register. Practise the portable way of doing something, not the Ubuntu way, and know where a distribution actually diverges — package manager, firewall front-end, whether SELinux or AppArmor is in charge.

## What the exam is actually like

**Two hours, and the machine's own documentation.** No browser, no search engine — `man` and `--help` are the reference. Finding a flag quickly in a man page is a skill worth practising deliberately, because it is the one you will lean on when a task uses an option you have never needed.

**Nothing is multiple choice.** A task is right or it is not, and it is graded on the state of the system afterwards. A configuration change that works but does not survive a reboot has not been made — "persistent and non-persistent" appears in the competency list for a reason.

**The pass mark is 67%**, so a third of the exam can go wrong. That makes triage a legitimate strategy: bank every task you can do cleanly before spending fifteen minutes on the one that is fighting you.

## Where the marks are lost

Persistence, and reading the task. Kernel parameters set with `sysctl` and not written to a config file, a mount that works now and vanishes on reboot, an `fstab` line with a typo that would leave the machine unbootable — all of these are common, all of them are silent, and all are the difference between a task that scores and one that does not. Verify by re-reading the config file you wrote, not by observing that the command you just ran worked.

## Before you book

The fee includes one free retake and the certification is valid for two years. That makes an early, slightly under-prepared attempt a cheap way to find out which of the five domains needs real work — and given the pass mark, a first sitting is often closer than it feels.

## The exam

| | |
|---|---|
| Code | `LFCS` |
| Cost | **$445 USD** |
| Duration | 2 hours |
| Passing score | 67% |
| Valid for | 2 years |
| Format | Online, proctored, performance-based (command-line tasks on a live Linux system, distribution-agnostic) |

<sub>Cost from The Linux Foundation — LFCS certification page, exam-only option (training.linuxfoundation.org), read on 2026-08-17. Prices change and this one is not re-read continuously — check the provider before paying.</sub>

## What the exam weights

The blueprint decides where study time goes. These are the published weights.

| Domain | Weight | |
|---|---:|---|
| Operations Deployment | 25% | `█████░░░░░░░░░░░░░░░` |
| Networking | 25% | `█████░░░░░░░░░░░░░░░` |
| Storage | 20% | `████░░░░░░░░░░░░░░░░` |
| Essential Commands | 20% | `████░░░░░░░░░░░░░░░░` |
| Users and Groups | 10% | `██░░░░░░░░░░░░░░░░░░` |

<details><summary><b>Operations Deployment</b> — 25%</summary>

- Configure kernel parameters, persistent and non-persistent
- Diagnose, identify, manage, and troubleshoot processes and services
- Manage or schedule jobs for executing commands
- Search for, install, validate, and maintain software packages or repositories
- Recover from hardware, operating system, or filesystem failures
- Manage virtual machines (libvirt)
- Configure container engines, create and manage containers
- Create and enforce MAC using SELinux

</details>

<details><summary><b>Networking</b> — 25%</summary>

- Configure IPv4 and IPv6 networking and hostname resolution
- Set and synchronize system time using time servers
- Monitor and troubleshoot networking
- Configure the OpenSSH server and client
- Configure packet filtering, port redirection, and NAT
- Configure static routing
- Configure bridge and bonding devices
- Implement reverse proxies and load balancers

</details>

<details><summary><b>Storage</b> — 20%</summary>

- Configure and manage LVM storage
- Manage and configure the virtual file system
- Create, manage, and troubleshoot filesystems
- Use remote filesystems and network block devices
- Configure and manage swap space
- Configure filesystem automounters
- Monitor storage performance

</details>

<details><summary><b>Essential Commands</b> — 20%</summary>

- Basic Git operations
- Create, configure, and troubleshoot services
- Monitor and troubleshoot system performance and services
- Determine application and service specific constraints
- Troubleshoot disk space issues
- Work with SSL certificates

</details>

<details><summary><b>Users and Groups</b> — 10%</summary>

- Create and manage local user and group accounts
- Manage personal and system-wide environment profiles
- Configure user resource limits
- Configure and manage ACLs
- Configure the system to use LDAP user and group accounts

</details>

## Before you book it

- Comfortable moving around a Linux system from the shell
- Basic understanding of processes, permissions and file systems

## How to prepare

6 steps, **about 78 hours** in total.

### 1. Get a throwaway VM you are willing to destroy

<sub>**~4 hours**</sub>

Two VMs, not a container: half the exam is kernel parameters, LVM, swap and networking, none of which behave normally inside a container. Snapshot the fresh install so you can break it repeatedly and roll back in seconds instead of reinstalling.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [LFCS certification page and domain list](https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/) <sub>The Linux Foundation · documentation · free</sub>
- [multipass — instant Ubuntu VMs](https://canonical.com/multipass/docs) <sub>Canonical · documentation · free</sub>
- [Fedora Server documentation](https://docs.fedoraproject.org/en-US/fedora-server/) <sub>Fedora Project · documentation · free</sub>

</details>

### 2. Learn to read man pages under time pressure

<sub>**~6 hours**</sub>

The exam gives you the system's own documentation and nothing else. Practise finding a flag in man and --help rather than recalling it, because that is the skill the format actually tests, and it is the difference between a two-minute task and a ten-minute one.

<details><summary><b>Resources</b> — 2, of which 1 free</summary>

- [man-pages project](https://www.kernel.org/doc/man-pages/) <sub>kernel.org · documentation · free</sub>
- **The Linux Command Line** <sub>William Shotts · book · paid</sub> — free alternative: [The Linux Command Line (free PDF from the author)](https://linuxcommand.org/tlcl.php)

</details>

### 3. Work Operations Deployment and Networking first

<sub>**~40 hours**</sub>

They are 50% of the score between them and the two you cannot cram — systemd unit files, package repositories, nftables rules and SELinux contexts all need repetition. Curriculum order buries networking near the end; weight order does not.

<details><summary><b>Resources</b> — 4, of which 4 free</summary>

- [systemd.service(5) — unit file manual](https://man7.org/linux/man-pages/man5/systemd.service.5.html) <sub>man7.org · documentation · free</sub>
- [nftables wiki](https://wiki.nftables.org/wiki-nftables/index.php/Main_Page) <sub>Netfilter · documentation · free</sub>
- [SELinux Project wiki](https://github.com/SELinuxProject/selinux/wiki) <sub>SELinux Project · documentation · free</sub>
- [OpenSSH manual pages](https://www.openssh.com/manual.html) <sub>OpenSSH · documentation · free</sub>

</details>

### 4. Drill LVM and filesystems until the sequence is automatic

<sub>**~12 hours**</sub>

Storage is 20% and almost entirely procedural: pvcreate, vgcreate, lvcreate, mkfs, a correct fstab entry, mount. It is the domain where a prepared candidate reliably banks full marks, and where a hesitant one burns the time the rest of the exam needs.

<details><summary><b>Resources</b> — 3, of which 3 free</summary>

- [lvm(8) — logical volume manager manual](https://man7.org/linux/man-pages/man8/lvm.8.html) <sub>man7.org · documentation · free</sub>
- [Arch Wiki — LVM](https://wiki.archlinux.org/title/LVM) <sub>Arch Linux · documentation · free</sub>
- [Arch Wiki — fstab](https://wiki.archlinux.org/title/Fstab) <sub>Arch Linux · documentation · free</sub>

</details>

### 5. Break the machine on purpose, then fix it

<sub>**~10 hours**</sub>

Corrupt fstab so it will not boot. Fill the disk. Stop a service another one depends on. Recovering from a failure you caused teaches the symptom-to-cause mapping far faster than reading, and 'recover from filesystem failures' is a named competency.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [systemd.special(7) — rescue and emergency targets](https://man7.org/linux/man-pages/man7/systemd.special.7.html) <sub>man7.org · documentation · free</sub>
- [journalctl(1) manual](https://man7.org/linux/man-pages/man1/journalctl.1.html) <sub>man7.org · documentation · free</sub>

</details>

### 6. Sit a timed two-hour run before you book

<sub>**~6 hours**</sub>

Write yourself fifteen tasks across all five domains, set a timer and allow only the system's own documentation. The result tells you whether you are short on knowledge or short on speed, and those two problems have completely different fixes.

<details><summary><b>Resources</b> — 2, of which 2 free</summary>

- [Important Instructions — LFCS](https://docs.linuxfoundation.org/tc-docs/certification/instructions-lfcs-and-lfce) <sub>The Linux Foundation · documentation · free</sub>
- [Candidate Handbook](https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2) <sub>The Linux Foundation · documentation · free</sub>

</details>

## Where this fits

[Site Reliability Engineer](../roadmaps/sre.md) · [DevOps Engineer](../roadmaps/devops-engineer.md) · [Platform Engineer](../roadmaps/platform-engineer.md) · [Database Reliability Engineer](../roadmaps/database-reliability-engineer.md)

## Questions

<details><summary><b>Is the LFCS exam hard?</b></summary><br>

It is performance-based rather than multiple choice: you get two hours at a command line on a live Linux system and each task is graded on the resulting state of the machine, not on a guess. The pass mark is 67%, so it rewards candidates who can move fast with only man pages and --help as reference, not just those who know the material.

</details>

<details><summary><b>What domains does the LFCS exam cover, and what should I study first?</b></summary><br>

Operations Deployment and Networking are 25% each, so half the exam sits in services, packages, containers, SELinux, firewalls and SSH. Storage and Essential Commands are worth 20% each, and Users and Groups only 10% — the opposite weighting from what most Linux courses teach first, so the prep path works Operations Deployment and Networking before the rest.

</details>

<details><summary><b>Where do most candidates lose points on the exam?</b></summary><br>

Persistence and careless reading. A kernel parameter set with sysctl but never written to a config file, a mount that works now and disappears on reboot, or an fstab typo that would leave the machine unbootable are all common and silent mistakes. The fix is to verify by re-reading the config file you wrote rather than trusting that the command you just ran worked.

</details>

<details><summary><b>Is the LFCS tied to a specific Linux distribution?</b></summary><br>

No. The 2023 revision made the exam distribution-agnostic, so you no longer choose a platform when you register. That means preparation should focus on the portable way of doing something and on knowing where distributions actually diverge, such as the package manager, the firewall front-end, or whether SELinux or AppArmor is in charge.

</details>

<details><summary><b>What happens if I fail the LFCS on my first attempt?</b></summary><br>

The exam fee includes one free retake, and the certification stays valid for two years once you pass. That makes an early, slightly under-prepared attempt a cheap way to find out which of the five domains needs real work, and given the 67% pass mark a first sitting is often closer than it feels.

</details>

<details><summary><b>Do I need a virtual machine to prepare for the LFCS?</b></summary><br>

Yes, and it should be a VM you are willing to destroy rather than a container. Roughly half the exam covers kernel parameters, LVM, swap and networking, none of which behave normally inside a container, so the prep path starts with snapshotting a fresh VM install to break and roll back repeatedly.

</details>

---

<sub>Source of truth: [`data/certifications/lfcs.yaml`](../data/certifications/lfcs.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
