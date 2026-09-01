<!-- Generated from data/roadmaps/database-reliability-engineer.yaml by tools/render-markdown.mjs. Do not edit. -->

# Database Reliability Engineer Roadmap

> A path into database reliability engineering — replication and consistency, restores you have actually verified, zero-downtime schema migrations, corruption detection, databases on Kubernetes, and RTO and RPO as a contract.

**Advanced** · **10 phases** · **8-11 months at 10h/week** · updated 2026-08-10

Search for this role and you mostly find job listings, not a path into it — the
page candidates are looking for barely exists. This roadmap treats the database
as a production system with an owner rather than as a dependency someone else
maintains: restores that are verified on a schedule, migrations that ship
without downtime, and corruption caught by a check rather than by a customer.

## Pay

Estimates for the **United States** market, in USD. Read the
[limits of this data](../README.md#honest-limits-of-the-salary-data) before quoting a figure at anyone.

| Level | Estimate | Source | Read on |
|---|---|---|---|
| Entry | `$129,281` | Glassdoor Database Reliability Engineer total pay estimate, 25th percentile (US, 24 salaries submitted) | 2026-08-10 |
| Mid | `$156,093` | Glassdoor Database Reliability Engineer total pay estimate (US average, 24 salaries submitted) | 2026-08-10 |
| Senior | `$190,972` | Glassdoor Database Reliability Engineer total pay estimate, 75th percentile (US, 24 salaries submitted) | 2026-08-10 |

Total duration is **8-11 months at 10h/week** — <sub>SkillPilot editorial estimate, 2026-08-10</sub>

## Before you start

- Confident SQL, including joins, indexes and reading a query plan
- Working knowledge of Linux, filesystems and networking
- Some production experience operating a service, in any role

## The path

| # | Phase | Duration |
|---:|---|---|
| 1 | [Database Fundamentals for Operators](#1-database-fundamentals-for-operators) | 4-5 weeks |
| 2 | [Replication and Consistency](#2-replication-and-consistency) | 4-6 weeks |
| 3 | [Backup and Restore Verification](#3-backup-and-restore-verification) | 3-4 weeks |
| 4 | [High Availability and Failover](#4-high-availability-and-failover) | 4-5 weeks |
| 5 | [Performance and Query Optimisation](#5-performance-and-query-optimisation) | 4-5 weeks |
| 6 | [Schema Migrations Without Downtime](#6-schema-migrations-without-downtime) | 3-4 weeks |
| 7 | [Capacity and Connection Management](#7-capacity-and-connection-management) | 3-4 weeks |
| 8 | [Data Integrity and Corruption Detection](#8-data-integrity-and-corruption-detection) | 3-4 weeks |
| 9 | [Databases on Kubernetes](#9-databases-on-kubernetes) | 4-5 weeks |
| 10 | [Data Reliability at Scale](#10-data-reliability-at-scale) | 4-5 weeks |

---

### <a id="1-database-fundamentals-for-operators"></a>1. Database Fundamentals for Operators

<sub>**4-5 weeks**</sub>

Operating a database means understanding what happens below the query: how pages reach disk, why the write-ahead log exists, and what a transaction actually guarantees. Without that model every incident is a mystery. Done when you can trace a single INSERT from client connection through WAL to durable storage, and explain which step is lost if the process is killed at each point.

<b>Skills</b> — `Storage Engines and Page Layout` · `Write-Ahead Logging` · `ACID and Isolation Levels` · `MVCC and Vacuum` · `Index Internals` · `Query Planning` · `Connection Handling`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Trace one INSERT from connection to durable storage and record what is lost if the process dies at each stage
- Reproduce a phantom read and a non-repeatable read on purpose, then fix each by changing only the isolation level
- Force a table bloat scenario, observe what vacuum reclaims and what it does not, and record the disk numbers
- Take a slow query, read its plan, and make it fast by changing the index rather than the SQL
- Exhaust a connection pool deliberately and record what the application error looks like from the user's side

</details>

<details><summary><b>Resources</b> — 6, of which 5 free</summary>

- [PostgreSQL Internals — Write-Ahead Logging](https://www.postgresql.org/docs/current/wal-intro.html) <sub>PostgreSQL · documentation · free</sub>
- [PostgreSQL Transaction Isolation](https://www.postgresql.org/docs/current/transaction-iso.html) <sub>PostgreSQL · documentation · free</sub>
- [Use The Index, Luke — SQL Indexing](https://use-the-index-luke.com/) <sub>Markus Winand · tutorial · free</sub>
- [MySQL InnoDB Storage Engine](https://dev.mysql.com/doc/refman/8.4/en/innodb-storage-engine.html) <sub>Oracle · documentation · free</sub>
- [PostgreSQL Routine Vacuuming](https://www.postgresql.org/docs/current/routine-vacuuming.html) <sub>PostgreSQL · documentation · free</sub>
- **Designing Data-Intensive Applications** <sub>Martin Kleppmann · book · paid</sub>

</details>

### <a id="2-replication-and-consistency"></a>2. Replication and Consistency

<sub>**4-6 weeks**</sub>

Replication is how databases survive hardware failure and also how they silently serve stale data. The distinction between synchronous and asynchronous is not a configuration detail: it decides whether a failover can lose committed transactions. Done when you have measured replication lag under write load and can state exactly how much data your topology loses if the primary dies right now.

<b>Skills</b> — `Synchronous vs Asynchronous Replication` · `Streaming and Logical Replication` · `Replication Lag Measurement` · `Read Replica Routing` · `Quorum and Consensus` · `Split-brain Prevention` · `Cross-region Replication`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Build a primary with two replicas, then measure lag under sustained write load rather than at idle
- Calculate your topology's real data loss window on primary failure, and verify it by killing the primary mid-write
- Route reads to a replica and find a user-visible bug caused by reading your own stale write
- Set up logical replication between two different major versions and record which DDL changes it refuses to carry
- Induce a network partition between primary and replica and document what each side believes about the other
- Compare synchronous replication's latency cost against its durability gain, with numbers from your own hardware

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [PostgreSQL High Availability and Replication](https://www.postgresql.org/docs/current/high-availability.html) <sub>PostgreSQL · documentation · free</sub>
- [PostgreSQL Logical Replication](https://www.postgresql.org/docs/current/logical-replication.html) <sub>PostgreSQL · documentation · free</sub>
- [MySQL Replication Documentation](https://dev.mysql.com/doc/refman/8.4/en/replication.html) <sub>Oracle · documentation · free</sub>
- [Jepsen — Distributed Systems Safety Analysis](https://jepsen.io/analyses) <sub>Jepsen · documentation · free</sub>
- [Raft Consensus Algorithm](https://raft.github.io/) <sub>Raft · documentation · free</sub>

</details>

### <a id="3-backup-and-restore-verification"></a>3. Backup and Restore Verification

<sub>**3-4 weeks**</sub>

A backup that has never been restored is a hypothesis, and the moment you discover it was wrong is the worst possible moment. This phase treats the restore, not the backup, as the deliverable. Done when a restore runs automatically on a schedule, its duration is recorded as a metric, and someone is alerted when a restore fails rather than when a backup does.

<b>Skills</b> — `Physical and Logical Backups` · `Point-in-Time Recovery` · `Automated Restore Testing` · `Backup Retention Design` · `Restore Time Measurement` · `Backup Encryption and Access`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Restore a production-sized backup into a clean environment and publish the real restore time next to the promised one
- Perform a point-in-time recovery to a timestamp thirty seconds before a deliberate destructive statement
- Automate a nightly restore into a throwaway environment, with an alert that fires on restore failure rather than backup failure
- Design a retention policy against a real regulatory or business requirement and cost it at your current data growth
- Corrupt a backup file on purpose and confirm your verification step detects it before you need the backup

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [PostgreSQL Backup and Restore](https://www.postgresql.org/docs/current/backup.html) <sub>PostgreSQL · documentation · free</sub>
- [PostgreSQL Continuous Archiving and PITR](https://www.postgresql.org/docs/current/continuous-archiving.html) <sub>PostgreSQL · documentation · free</sub>
- [pgBackRest Documentation](https://pgbackrest.org/user-guide.html) <sub>pgBackRest · documentation · free</sub>
- [Percona XtraBackup Documentation](https://docs.percona.com/percona-xtrabackup/8.0/index.html) <sub>Percona · documentation · free</sub>
- [Google SRE Book — Data Integrity](https://sre.google/sre-book/data-integrity/) <sub>Google · documentation · free</sub>

</details>

### <a id="4-high-availability-and-failover"></a>4. High Availability and Failover

<sub>**4-5 weeks**</sub>

Automatic failover is a promise that the system will make a correct decision during the worst five minutes of the quarter, and untested automation usually makes it worse. Done when you have triggered a failover in anger — killing the primary without warning the tooling — and the cluster converged on a single writer with the data loss you predicted, not more.

<b>Skills</b> — `Failover Automation` · `Leader Election and Fencing` · `Connection Pooling and Proxies` · `Health Checking Design` · `Switchover vs Failover` · `Client Reconnection Behaviour` · `Failover Testing in Production`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Kill a primary without warning the failover tooling and record the time to a single healthy writer
- Configure fencing and prove that the demoted primary cannot accept a write after being isolated
- Put a connection pooler in front of a cluster and measure how many client errors a failover produces with and without it
- Write a health check that distinguishes a slow database from a dead one, and test it against both conditions
- Perform a planned switchover during working hours with zero failed writes, and document the sequence that made it safe
- Test what your application does when the database is read-only for ninety seconds

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [Patroni Documentation](https://patroni.readthedocs.io/en/latest/) <sub>Patroni · documentation · free</sub>
- [PgBouncer Documentation](https://www.pgbouncer.org/usage.html) <sub>PgBouncer · documentation · free</sub>
- [Orchestrator — MySQL Replication Management](https://github.com/openark/orchestrator/blob/master/docs/toc.md) <sub>openark · documentation · free</sub>
- [Amazon RDS Multi-AZ Deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html) <sub>AWS · documentation · free</sub>
- [Google SRE Book — Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/) <sub>Google · documentation · free</sub>

</details>

### <a id="5-performance-and-query-optimisation"></a>5. Performance and Query Optimisation

<sub>**4-5 weeks**</sub>

Most database performance work is not tuning the server: it is finding the three queries responsible for most of the load and fixing them. The skill is measurement discipline, because intuition about what is slow is reliably wrong. Done when you have found the top queries by total time rather than by worst case, and made a measured improvement to the one that mattered.

<b>Skills</b> — `Query Plan Analysis` · `Index Design and Maintenance` · `Workload Profiling` · `Lock Contention Diagnosis` · `Configuration Tuning` · `Partitioning Strategy` · `Cache Hit Ratio Analysis`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Rank queries by total accumulated time rather than worst single execution, and fix the one at the top
- Find an unused index in a production-like database, prove it is unused, and measure the write throughput gained by dropping it
- Reproduce a lock contention incident, identify the blocking chain, and record how you would have found it under pressure
- Partition a large table and measure both the query improvement and the new maintenance burden it created
- Change one memory-related configuration parameter and prove the effect with before-and-after measurements
- Build a query performance dashboard that would let an on-call engineer identify a regression in under two minutes

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [PostgreSQL EXPLAIN Documentation](https://www.postgresql.org/docs/current/using-explain.html) <sub>PostgreSQL · documentation · free</sub>
- [pg_stat_statements](https://www.postgresql.org/docs/current/pgstatstatements.html) <sub>PostgreSQL · documentation · free</sub>
- [MySQL Optimization Documentation](https://dev.mysql.com/doc/refman/8.4/en/optimization.html) <sub>Oracle · documentation · free</sub>
- [PostgreSQL Monitoring Statistics](https://www.postgresql.org/docs/current/monitoring-stats.html) <sub>PostgreSQL · documentation · free</sub>
- [Use The Index, Luke — Execution Plans](https://use-the-index-luke.com/sql/explain-plan) <sub>Markus Winand · tutorial · free</sub>

</details>

### <a id="6-schema-migrations-without-downtime"></a>6. Schema Migrations Without Downtime

<sub>**3-4 weeks**</sub>

A schema change is a deployment that can lock a table and take the site down, and the naive version of the migration is usually the dangerous one. Expand-and-contract turns one risky change into several safe ones. Done when you have shipped a column rename across a running system with no downtime, using separate deployments to add, backfill, switch and remove.

<b>Skills</b> — `Expand and Contract Pattern` · `Online Schema Change Tools` · `Backfill Strategy` · `Lock Analysis for DDL` · `Migration Rollback Design` · `Application and Schema Version Skew`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Rename a column in a live system using four separate deployments, with the application working correctly after each one
- Backfill a hundred million rows in batches without pushing replication lag past your alert threshold
- Identify which DDL statements take an exclusive lock on your database version, and test the two you were unsure about
- Run an online schema change tool against a large table and measure its overhead against a direct ALTER
- Design a migration that can be rolled back after deployment, and state the point at which rollback stops being possible

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [PostgreSQL ALTER TABLE — Locking Notes](https://www.postgresql.org/docs/current/sql-altertable.html) <sub>PostgreSQL · documentation · free</sub>
- [gh-ost — GitHub's Online Schema Migration Tool](https://github.com/github/gh-ost/blob/master/doc/cheatsheet.md) <sub>GitHub · documentation · free</sub>
- [pt-online-schema-change](https://docs.percona.com/percona-toolkit/pt-online-schema-change.html) <sub>Percona · documentation · free</sub>
- [MySQL Online DDL Operations](https://dev.mysql.com/doc/refman/8.4/en/innodb-online-ddl-operations.html) <sub>Oracle · documentation · free</sub>
- [Strangler Fig Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig) <sub>Microsoft · documentation · free</sub>

</details>

### <a id="7-capacity-and-connection-management"></a>7. Capacity and Connection Management

<sub>**3-4 weeks**</sub>

Databases fail on connections and IOPS long before they run out of CPU, and the failure mode is a thundering herd of application retries making it worse. Done when you can state your database's maximum sustainable connection count and write throughput from measurement rather than from the vendor's datasheet, and have an alert that fires before either is reached.

<b>Skills</b> — `Connection Pool Sizing` · `IOPS and Throughput Planning` · `Growth Forecasting` · `Load Testing Databases` · `Retry and Backoff Design` · `Resource Saturation Alerting`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Load test until the database degrades and record which resource saturated first — it is rarely the one you expected
- Size a connection pool from measurement, then prove the number by testing above and below it
- Forecast storage and IOPS growth twelve months out from real data, and state which assumption breaks the forecast
- Reproduce a retry storm and fix it with jittered backoff, measuring recovery time before and after
- Write saturation alerts that fire with enough lead time to act, and verify the lead time by triggering one

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [PostgreSQL Resource Consumption Configuration](https://www.postgresql.org/docs/current/runtime-config-resource.html) <sub>PostgreSQL · documentation · free</sub>
- [pgbench Documentation](https://www.postgresql.org/docs/current/pgbench.html) <sub>PostgreSQL · documentation · free</sub>
- [AWS Architecture Blog — Exponential Backoff and Jitter](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/) <sub>AWS · documentation · free</sub>
- [Amazon EBS Volume Performance](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) <sub>AWS · documentation · free</sub>
- [Google SRE Workbook — Managing Load](https://sre.google/workbook/managing-load/) <sub>Google · documentation · free</sub>

</details>

### <a id="8-data-integrity-and-corruption-detection"></a>8. Data Integrity and Corruption Detection

<sub>**3-4 weeks**</sub>

Corruption is the failure mode that does not page anyone: it spreads into backups while every dashboard stays green, and gets discovered months later by a customer. Done when a checksum or consistency check runs on a schedule against real data, and you have seen it detect a fault you introduced deliberately rather than trusting that it would.

<b>Skills</b> — `Checksums and Page Verification` · `Logical Consistency Checking` · `Constraint and Foreign Key Design` · `Replica Divergence Detection` · `Silent Corruption Response` · `Audit Trails`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Enable page checksums, corrupt a page deliberately, and confirm the database detects it rather than serving the bad data
- Compare a primary and replica row by row and find the divergence you introduced on purpose
- Write a scheduled logical consistency check for an invariant your schema cannot express as a constraint
- Trace how a corrupted page would propagate into your backups, and state how far back you would need to go
- Add constraints to a table that permits invalid states today, and record how many existing rows violate them

</details>

<details><summary><b>Resources</b> — 5, of which 5 free</summary>

- [PostgreSQL Data Checksums](https://www.postgresql.org/docs/current/checksums.html) <sub>PostgreSQL · documentation · free</sub>
- [amcheck — PostgreSQL Index and Heap Verification](https://www.postgresql.org/docs/current/amcheck.html) <sub>PostgreSQL · documentation · free</sub>
- [pt-table-checksum](https://docs.percona.com/percona-toolkit/pt-table-checksum.html) <sub>Percona · documentation · free</sub>
- [Google SRE Book — Data Integrity](https://sre.google/sre-book/data-integrity/) <sub>Google · documentation · free</sub>
- [PostgreSQL Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html) <sub>PostgreSQL · documentation · free</sub>

</details>

### <a id="9-databases-on-kubernetes"></a>9. Databases on Kubernetes

<sub>**4-5 weeks**</sub>

Running stateful workloads on an orchestrator designed to reschedule things freely is the hardest operational problem in this roadmap, and the honest answer is sometimes not to. Done when you have run a database on Kubernetes through a node failure and a rolling upgrade without data loss, and can argue in writing when a managed service would have been the better call.

<b>Skills</b> — `StatefulSets and Persistent Volumes` · `Database Operators` · `Storage Classes and IOPS on Kubernetes` · `Pod Disruption Budgets` · `Backup in a Kubernetes Context` · `Managed vs Self-hosted Decision`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Deploy a replicated database with an operator, then delete the primary pod and record what the operator did and how long it took
- Drain a node running a database pod and measure the disruption from the client's point of view
- Configure pod disruption budgets that survive a cluster upgrade, and verify by performing one
- Benchmark the same database on a persistent volume and on local storage, and record the durability trade-off
- Write the decision record for self-hosting versus a managed service, costed in engineering hours per month

</details>

<details><summary><b>Resources</b> — 5, of which 4 free</summary>

- [Kubernetes StatefulSets](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) <sub>Kubernetes · documentation · free</sub>
- [Kubernetes Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) <sub>Kubernetes · documentation · free</sub>
- [CloudNativePG Documentation](https://cloudnative-pg.io/documentation/current/) <sub>CloudNativePG · documentation · free</sub>
- [Kubernetes Pod Disruption Budgets](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/) <sub>Kubernetes · documentation · free</sub>
- **Kubernetes: Up and Running** <sub>Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson · book · paid</sub> — free alternative: [Kubernetes Documentation — Concepts](https://kubernetes.io/docs/concepts/)

</details>

### <a id="10-data-reliability-at-scale"></a>10. Data Reliability at Scale

<sub>**4-5 weeks**</sub>

At scale the job stops being one database and becomes a fleet plus the humans who depend on it: RTO and RPO become contracts other teams design against, and self-service beats being a bottleneck. Done when a team other than yours provisions a compliant database without you in the loop, and an incident is handled using a runbook someone else wrote.

<b>Skills</b> — `RTO and RPO as Contracts` · `Fleet Management and Automation` · `Self-service Provisioning` · `Database SLOs` · `Incident Response for Data` · `Runbook Authorship` · `Sharding and Horizontal Scale`

<details><summary><b>Projects</b> — this is how the phase is judged done</summary>

- Publish RTO and RPO per tier and get a dependent team to design against those numbers rather than assume zero
- Automate provisioning so another team can create a compliant database without you, then watch them use it unaided
- Define database SLOs that reflect what users experience rather than what is easy to measure, and report a month against them
- Write a runbook for the most likely data incident and have someone else execute it in a drill while you stay silent
- Design a sharding strategy for a table that has outgrown one machine, including how a resharding operation would run
- Run a game day on a data-loss scenario and record which step of the response was slowest

</details>

<details><summary><b>Resources</b> — 6, of which 4 free</summary>

- [Google SRE Workbook — Implementing SLOs](https://sre.google/workbook/implementing-slos/) <sub>Google · documentation · free</sub>
- [Google SRE Book — Postmortem Culture](https://sre.google/sre-book/postmortem-culture/) <sub>Google · documentation · free</sub>
- [Vitess Documentation](https://vitess.io/docs/) <sub>Vitess · documentation · free</sub>
- [Citus — Distributed PostgreSQL](https://docs.citusdata.com/en/stable/) <sub>Citus · documentation · free</sub>
- **Database Reliability Engineering** <sub>Laine Campbell, Charity Majors · book · paid</sub> — free alternative: [Google SRE Book — Data Integrity](https://sre.google/sre-book/data-integrity/)
- **Site Reliability Engineering** <sub>Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy · book · paid</sub> — free alternative: [Site Reliability Engineering (full text, free online)](https://sre.google/sre-book/table-of-contents/)

</details>

## Questions

<details><summary><b>What does the Database Reliability Engineer roadmap actually cover?</b></summary><br>

It covers replication and consistency, restores you have actually verified, zero-downtime schema migrations, corruption detection, running databases on Kubernetes, and treating RTO and RPO as a contract. The roadmap treats the database as a production system with an owner rather than as a dependency someone else maintains, across ten phases from storage internals through fleet-scale reliability.

</details>

<details><summary><b>How long does it take to complete this roadmap?</b></summary><br>

SkillPilot's editorial estimate is 8-11 months at 10 hours a week, split across ten phases ranging from 3-4 weeks to 4-6 weeks each. The longest phase is Replication and Consistency; the shortest phases, at 3-4 weeks, cover backup and restore verification, schema migrations, capacity management, and corruption detection.

</details>

<details><summary><b>How much does a Database Reliability Engineer earn?</b></summary><br>

In the United States, Glassdoor's total pay estimates put entry-level pay at $129,281 (25th percentile), the mid-level average at $156,093, and senior pay at $190,972 (75th percentile), based on 24 salaries submitted and retrieved 2026-08-10. These are total pay figures, not base salary alone.

</details>

<details><summary><b>What do I need to know before starting this roadmap?</b></summary><br>

You need confident SQL — including joins, indexes and reading a query plan — a working knowledge of Linux, filesystems and networking, and some production experience operating a service in any role. It is labelled an advanced roadmap, so it assumes you are not learning to code or use a terminal for the first time.

</details>

<details><summary><b>Why does the roadmap treat backup verification separately from backups themselves?</b></summary><br>

Because a backup that has never been restored is only a hypothesis, and the moment you discover it was wrong is the worst possible moment. The Backup and Restore Verification phase treats the restore, not the backup, as the deliverable — done when a restore runs automatically on a schedule, its duration is recorded as a metric, and someone is alerted when a restore fails rather than when a backup does.

</details>

<details><summary><b>Does this roadmap teach running databases on Kubernetes?</b></summary><br>

Yes — Databases on Kubernetes is one of the ten phases, and the roadmap is candid that running stateful workloads on an orchestrator designed to reschedule things freely is the hardest operational problem it covers, and sometimes the honest answer is not to. It is done when you have run a database on Kubernetes through a node failure and a rolling upgrade without data loss, and can argue in writing when a managed service would have been the better call.

</details>

## Neighbouring paths

[Site Reliability Engineer](sre.md) · [Cloud Architect](cloud-architect.md) · [Platform Engineer](platform-engineer.md) · [DevOps Engineer](devops-engineer.md)

---

<sub>Source of truth: [`data/roadmaps/database-reliability-engineer.yaml`](../data/roadmaps/database-reliability-engineer.yaml) · [CC BY-SA 4.0](../LICENSE) · [SkillPilot](https://skillpilot.app)</sub>
