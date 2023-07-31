# Pricing & Features
Hydrabank's plans will be separated into three tiers (for now), named after types and classes of kayaks.

## Plan information
### General Information
- **Nodes** Plans cover 3 nodes (i.e. 3 servers for a single project); see the `Additional nodes` add-on below for more information
- **Plan changes** Plan upgrades & downgrades are available at any time, and will be prorated to the end of the current billing cycle
- **Refunds** While we do not offer refunds in many cases, we decide on a case-by-case basis.

### Feature notes
- **Hosted backups** Hosted backups are stored on a separate server and access is gated per project or plan.
  - **Mechanism** Our backups  create rsync-based backups to an NFS share on a separate server. Timeshift is utilised in order to create storage-efficient snapshots.
  - **Limits** Backups have a soft limit of 128GB *for all backups in total*. Timeshift only stores the differences between snapshots, so this limit should be more than enough for most use cases.
  - **Opt-out** You can elect to opt-out of hosted backups if you so wish to, **AT YOUR OWN RISK**. While we may be able to help with managing self-hosted backup solutions, this is not guaranteed and we may be unable to assist in the case of issues with such solutions. **Your plan price is not affected by opting out of hosted backups.**

### Plan add-ons
- **Additional nodes**
  - **Description** In cases where our 3-node limit won't cut it, you can add additional nodes to your plan.
  - **Fee** 1/3 of the base plan price per node (i.e. $6.66/mo for a Crossover plan, per node)
- **Remote Hands**
  - **Description** A remote hands fee is charged when we are asked to perform manual intervention on your server that is not included with your plan.
  - **Fee** $20/hr (rounding up after 25min) without a plan, see chart below for plan rates
- **Database installation**
  - **Description** We will install a database cluster of your choice on your server.
  - **Fee** $6 per *single-node* cluster, $15 for a *multi-node* cluster setup (replication/sharding)
- **Additional hosted backups**
  - **Description** In case you require more backups than your plan provides, you can add additional backups to your plan.
  - **Fee** $2.99 per additional backup/mo, or one-time

## Our plans
### Project Plans
- **El Capitan - Basic** ($11.99/mo)
  - **Description**
    For those who prefer an unmanaged server, but still want the peace of mind of security and monitoring without the hassle of setting it up themselves.
  - **Included in your plan**
    - Basic security setup (SSH/basic firewall)
    - Cloud system monitoring & alerts
    - Bi-weekly hosted backups (2 included monthly)
    - Limited support (expect ~48hr response times)
    - Remote Hands: **$17.50/hr**

- **Whitney - Standard** ($19.99/mo): 
  - **Description**
    A middle-ground for those who need a managed service, but don't need our full suite of benefits.
  - **Included in your plan**
    - Basic setup (SSH, firewall, **single** application installation of your choice)
    - Managed updates (OS, packages, etc.)
    - Cloud system monitoring & alerts
    - Weekly hosted backups (4 included monthly)
    - Regular support (expect ~24hr response times)
    - Remote Hands: 1hr/mo free, **$15/hr** after

- **Denali - Professional** ($32.99/mo)
  - **Description**
    For those who need a fully managed service, with all the bells and whistles.
  - **Included in your plan**
    - Full setup (Security, full-scale stack rollout, etc.)
    - Routine management and maintenance
    - On-demand disaster recovery response
    - Cloud system monitoring & alerts
    - Two hosted backups per week (8 included monthly)
    - Priority support (expect ~2-8hr response times)
    - Remote Hands: 2hr/mo free, **$12.50/hr** after
  
## Business (Custom) Plans
- **K1 - Hydrabank for Small Business** (contact us for pricing)
  - **Description**
    If you don't need a full-scale plan under the K2, but none of the project plans fit your needs, we can figure out a solution with you. 
  - **Included in your plan**
    - Contact us for more information.
- **K2 - Hydrabank for Enterprise** (contact us for pricing, starts at $49.99)
  - **Description**
    In the case that you need a plan that is more than what our Touring plan offers, K2 is for you. We can work with you to create a plan that fits all of your requirements for operations. Includes enterprise-grade security, support, and an SLA (agreeable on a case-by-case basis).
  - **Included in your plan**
    - Contact us for more information. **Prices start at $49.99/mo.**