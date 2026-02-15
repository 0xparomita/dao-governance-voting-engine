# DAO Governance Voting Engine

This repository provides an expert-level framework for decentralized governance. It allows token holders to participate in the decision-making process of a protocol by proposing, voting on, and executing on-chain actions.

### Features
* **Snapshot Voting:** Voting power is determined by the number of tokens held at the exact block the proposal was created.
* **Proposal Lifecycle:** Implements states including `Pending`, `Active`, `Succeeded`, `Defeated`, and `Executed`.
* **Quorum & Thresholds:** Customizable settings for the minimum number of votes required for a proposal to pass.
* **Timelock Integration:** Ensures a delay between a successful vote and execution, giving users time to exit if they disagree with the change.

### Governance Process
1. **Propose:** A user with enough voting power submits a target contract and function call.
2. **Vote:** Token holders cast "For", "Against", or "Abstain" votes.
3. **Queue:** If passed, the proposal enters a Timelock.
4. **Execute:** The transaction is triggered on-chain by the DAO.

### License
MIT
